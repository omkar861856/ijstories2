"use client";

import React, { useEffect, useRef } from 'react';

interface OrbProps {
  starCount: number;
  starBaseSize: number;
  starColor: string;
  starColor2: string;
  starFuzziness: number;
}

const GLOBAL_ORB_PROPS: OrbProps = {
  starCount: 200,
  starBaseSize: 1.2,
  starColor: "#ffffff",
  starColor2: "#86868b",
  starFuzziness: 4,
};

class Star {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  alpha: number = 0;
  speedX: number = 0;
  speedY: number = 0;
  flickerSpeed: number = 0;
  flickerAngle: number = 0;
  useSecondaryColor: boolean = false;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.flickerAngle = Math.random() * Math.PI * 2;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.size = Math.random() * GLOBAL_ORB_PROPS.starBaseSize + 0.2;
    this.alpha = 0;
    this.useSecondaryColor = Math.random() > 0.6;
    this.speedX = (Math.random() - 0.5) * 0.05;
    this.speedY = (Math.random() - 0.5) * 0.05;
    this.flickerSpeed = Math.random() * 0.01 + 0.002;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.flickerAngle += this.flickerSpeed;
    this.alpha = (Math.sin(this.flickerAngle) + 1) / 2;

    if (this.x < 0 || this.x > this.width || this.y < 0 || this.y > this.height) {
      this.reset();
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.alpha * 0.3;
    context.fillStyle = this.useSecondaryColor ? GLOBAL_ORB_PROPS.starColor2 : GLOBAL_ORB_PROPS.starColor;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
}

class Orb {
  x: number = 0;
  y: number = 0;
  radius: number = 0;
  vx: number = 0;
  vy: number = 0;
  opacity: number = 0;
  targetOpacity: number = 0;
  color: string = "";
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.reset();
    this.opacity = Math.random() * 0.05;
  }

  reset() {
    this.radius = Math.random() * 800 + 400;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.targetOpacity = Math.random() * 0.20 + 0.08;
    this.color = Math.random() > 0.5 ? "255, 255, 255" : "134, 134, 139";
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += (this.targetOpacity - this.opacity) * 0.01;

    if (this.x < -this.radius) this.x = this.width + this.radius;
    if (this.x > this.width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = this.height + this.radius;
    if (this.y > this.height + this.radius) this.y = -this.radius;
  }

  draw(context: CanvasRenderingContext2D) {
    const gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    let orbs: Orb[] = [];
    let animationFrameId: number;

    const initScene = () => {
      stars = [];
      orbs = [];
      for (let i = 0; i < 300; i++) stars.push(new Star(width, height));
      for (let i = 0; i < 12; i++) orbs.push(new Orb(width, height));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initScene();
    };

    const animate = () => {
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#000000");
      bgGrad.addColorStop(1, "#000000");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);
      
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      orbs.forEach(orb => {
        orb.update();
        orb.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 pointer-events-none bg-black overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
