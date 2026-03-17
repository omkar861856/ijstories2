"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}


interface MediaItem {
  type: "image" | "video";
  src: string;
}

const defaultMedia: MediaItem[] = [
  { type: "image", src: "/468333594_18473797480038665_4473156711760818505_n.jpg" },
  { type: "image", src: "/530210262_18479886634079012_4513169343081986939_n.jpg" },
  { type: "image", src: "/Image-50.jpg" },
  { type: "image", src: "/Light trails are one of the best ways to add very good light play to your urban night photograp.webp" },
  { type: "image", src: "/This Post was tough… selecting pictures was a task in this post. I loved every single photo that.jpg" },
  { type: "image", src: "/Unapologetic and flashy, living that rapper life in the neon-lit night store. Flexing in the mo.webp" },
  { type: "image", src: "/get.webp" },
];

export default function ThreeDVideoScannerCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const rafMotion = useRef<number | null>(null);
  const inView = useInView(containerRef, { margin: "240px" });

  const [velocity, setVelocity] = useState(-120);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isDecelerating, setIsDecelerating] = useState(false);
  const [scanningActive, setScanningActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const scanner = useMemo(() => ({ 
    width: 4, 
    height: isMobile ? 300 : 400, 
    glow: 3, 
    opacity: 1, 
    color: "#silver" 
  }), [isMobile]);

  const cards = useMemo(() => ({ 
    width: isMobile ? 300 : 450, 
    height: isMobile ? 220 : 320, 
    gap: isMobile ? 30 : 60, 
    borderRadius: isMobile ? 24 : 32, 
    grayscale: 100 
  }), [isMobile]);

  const animation = { speed: 100, autoPlay: true };
  const interaction = { enableDrag: true, dragSensitivity: 1 };
  
  const lastTimeRef = useRef(0);
  const lastMouseXRef = useRef(0);
  const mouseVelocityRef = useRef(0);

  const scannerRgb = useMemo(() => ({ r: 192, g: 192, b: 192 }), []); // Silver

  const displayMedia = useMemo(() => [...defaultMedia, ...defaultMedia, ...defaultMedia], []);

  const updateCanvasSizes = useCallback(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const width = Math.max(1, Math.floor(containerRef.current.offsetWidth));
    const scannerHeight = Math.max(1, Math.floor(scanner.height));
    const s = scannerCanvasRef.current;
    if (s) {
      s.width = width;
      s.height = scannerHeight;
    }
  }, [scanner.height]);

  const posRef = useRef(0);
  const cardElements = useRef<{ card: HTMLElement, clean: HTMLElement, scan: HTMLElement }[]>([]);

  useEffect(() => {
    if (!lineRef.current) return;
    const cards = lineRef.current.querySelectorAll(".vcs-card");
    cardElements.current = Array.from(cards).map(card => ({
      card: card as HTMLElement,
      clean: card.querySelector(".vcs-media-clean") as HTMLElement,
      scan: card.querySelector(".vcs-media-scan") as HTMLElement
    }));
  }, [displayMedia]);

  const updateCardClippingRef = useCallback(() => {
    if (!containerRef.current || !lineRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const scannerX = containerRect.width / 2;
    const scannerLeft = scannerX - scanner.width / 2;
    const scannerRight = scannerX + scanner.width / 2;
    let active = false;

    cardElements.current.forEach(({ card, clean, scan }) => {
      const rect = card.getBoundingClientRect();
      const cardLeft = rect.left - containerRect.left;
      const cardRight = rect.right - containerRect.left;
      const cardWidth = rect.width || 1;

      if (cardLeft < scannerRight && cardRight > scannerLeft) {
        active = true;
        const intersectLeft = Math.max(scannerLeft - cardLeft, 0);
        const intersectRight = Math.min(scannerRight - cardLeft, cardWidth);
        const cleanClip = (intersectLeft / cardWidth) * 100;
        const scanClip = (intersectRight / cardWidth) * 100;
        clean.style.setProperty("--clip-right", `${clamp(cleanClip, 0, 100)}%`);
        scan.style.setProperty("--clip-left", `${clamp(scanClip, 0, 100)}%`);
      } else if (cardRight < scannerLeft) {
        clean.style.setProperty("--clip-right", "100%");
        scan.style.setProperty("--clip-left", "100%");
      } else {
        clean.style.setProperty("--clip-right", "0%");
        scan.style.setProperty("--clip-left", "0%");
      }
    });
    if (active !== scanningActive) setScanningActive(active);
  }, [scanner.width, scanningActive]);
  useEffect(() => {
    updateCanvasSizes();
    window.addEventListener("resize", updateCanvasSizes);
    return () => window.removeEventListener("resize", updateCanvasSizes);
  }, [updateCanvasSizes]);

  useEffect(() => {
    if (!inView || !scannerCanvasRef.current || !containerRef.current) return;
    const canvas = scannerCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    let glow = 1;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      const targetGlow = scanningActive ? scanner.glow : 1;
      glow += (targetGlow - glow) * 0.08;

      const barGradient = ctx.createLinearGradient(centerX - scanner.width / 2, 0, centerX + scanner.width / 2, 0);
      barGradient.addColorStop(0, "rgba(255,255,255,0)");
      barGradient.addColorStop(0.5, `rgba(${scannerRgb.r}, ${scannerRgb.g}, ${scannerRgb.b}, 1)`);
      barGradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.globalAlpha = clamp(scanner.opacity, 0, 1);
      ctx.fillStyle = barGradient;
      ctx.fillRect(centerX - scanner.width / 2, 0, scanner.width, height);

      const outer = ctx.createLinearGradient(centerX - scanner.width * 8, 0, centerX + scanner.width * 8, 0);
      outer.addColorStop(0, `rgba(${scannerRgb.r}, ${scannerRgb.g}, ${scannerRgb.b}, 0)`);
      outer.addColorStop(0.5, `rgba(${scannerRgb.r}, ${scannerRgb.g}, ${scannerRgb.b}, ${0.3 * glow})`);
      outer.addColorStop(1, `rgba(${scannerRgb.r}, ${scannerRgb.g}, ${scannerRgb.b}, 0)`);

      ctx.fillStyle = outer;
      ctx.globalAlpha = clamp(scanner.opacity * 0.9, 0, 1);
      ctx.fillRect(centerX - scanner.width * 8, 0, scanner.width * 16, height);

      const mask = ctx.createLinearGradient(0, 0, 0, height);
      mask.addColorStop(0, "rgba(255,255,255,0)");
      mask.addColorStop(0.2, "rgba(255,255,255,1)");
      mask.addColorStop(0.8, "rgba(255,255,255,1)");
      mask.addColorStop(1, "rgba(255,255,255,0)");
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [inView, scanningActive, scanner.height, scanner.width, scanner.glow, scanner.opacity, scannerRgb]);

  useEffect(() => {
    if (!inView) return;
    const tick = (t: number) => {
      const dt = Math.min((t - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = t;

      if (isAnimating && !isDragging && containerRef.current) {
        const setWidth = (cards.width + cards.gap) * defaultMedia.length;
        let v = velocity;

        if (isDecelerating) {
          v *= 0.95;
          if (Math.abs(v) <= Math.abs(animation.speed)) {
            v = -Math.abs(animation.speed);
            setIsDecelerating(false);
          }
        } else {
          v = -Math.abs(animation.speed);
        }

        posRef.current += v * dt;
        if (setWidth > 0 && posRef.current <= -setWidth) posRef.current += setWidth;
        
        if (lineRef.current) {
          lineRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
        setVelocity(v);
      }
      updateCardClippingRef();
      rafMotion.current = requestAnimationFrame(tick);
    };

    lastTimeRef.current = performance.now();
    rafMotion.current = requestAnimationFrame(tick);
    return () => {
      if (rafMotion.current) cancelAnimationFrame(rafMotion.current);
    };
  }, [inView, isAnimating, isDragging, isDecelerating, cards.width, cards.gap, animation.speed, velocity, updateCardClippingRef]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsAnimating(false);
    lastMouseXRef.current = e.clientX;
    mouseVelocityRef.current = 0;
  }, []);

  const releaseDrag = useCallback(() => {
    setIsDragging(false);
    if (Math.abs(mouseVelocityRef.current) > Math.abs(animation.speed)) {
      setVelocity(-Math.abs(mouseVelocityRef.current));
      setIsDecelerating(true);
    } else {
      setVelocity(-Math.abs(animation.speed));
      setIsDecelerating(false);
    }
    setIsAnimating(true);
  }, [animation.speed]);

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseXRef.current;
      posRef.current += dx * interaction.dragSensitivity;
      if (lineRef.current) {
        lineRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      mouseVelocityRef.current = Math.abs(dx * 60 * interaction.dragSensitivity);
      lastMouseXRef.current = e.clientX;
    };
    const up = () => releaseDrag();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [isDragging, interaction.dragSensitivity, releaseDrag]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute w-full flex items-center overflow-visible z-20" style={{ height: cards.height }}>
        <div
          ref={lineRef}
          onMouseDown={onMouseDown}
          className="flex items-center gap-[60px] whitespace-nowrap select-none will-change-transform"
          style={{ 
            cursor: isDragging ? "grabbing" : "grab"
          }}
        >
          {displayMedia.map((item, index) => (
            <div
              key={index}
              className="vcs-card shrink-0 relative overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm"
              style={{
                width: cards.width,
                height: cards.height,
                borderRadius: cards.borderRadius,
              }}
            >
              {/* Color Layer (Revealed) */}
              <div 
                className="vcs-media-clean absolute inset-0 z-20"
                style={{ clipPath: "inset(0 0 0 var(--clip-right, 0%))" }}
              >
                <Image
                  src={item.src}
                  alt={`Media ${index}`}
                  fill
                  className="object-cover scale-105"
                />
              </div>

              {/* Grayscale Layer (Hidden by scanner) */}
              <div 
                className="vcs-media-scan absolute inset-0 z-10"
                style={{ clipPath: "inset(0 calc(100% - var(--clip-left, 0%)) 0 0)" }}
              >
                <Image
                  src={item.src}
                  alt={`Media ${index}`}
                  fill
                  className="object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <canvas
        ref={scannerCanvasRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none z-30"
        style={{ height: scanner.height }}
      />
    </div>
  );
}
