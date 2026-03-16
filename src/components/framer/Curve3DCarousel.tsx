"use client";

import React from "react";
import { motion } from "framer-motion";

const defaultMedia = [
  { type: "image", src: "/468333594_18473797480038665_4473156711760818505_n.jpg" },
  { type: "image", src: "/530210262_18479886634079012_4513169343081986939_n.jpg" },
  { type: "image", src: "/Image-50.jpg" },
  { type: "image", src: "/Light trails are one of the best ways to add very good light play to your urban night photograp.webp" },
  { type: "image", src: "/This Post was tough… selecting pictures was a task in this post. I loved every single photo that.jpg" },
  { type: "image", src: "/Unapologetic and flashy, living that rapper life in the neon-lit night store. Flexing in the mo.webp" },
  { type: "image", src: "/get.webp" },
];

export default function Curve3DCarousel() {
  const n = defaultMedia.length;
  const radius = 400; // Increased distance from center for a wider feel
  
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden perspective-distant">
      <motion.div
        className="relative w-full h-full flex items-center justify-center transform-3d"
        animate={{ rotateY: [0, -360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {defaultMedia.map((media, i) => {
          const angle = (i / n) * 360;
          return (
            <motion.div
              key={i}
              className="absolute w-[320px] aspect-4/5 rounded-[40px] overflow-hidden silver-border bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing group"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
              }}
              whileHover={{ scale: 1.05, translateZ: radius + 50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={media.src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Edge Fade Overlay for depth */}
      <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-linear-to-r from-black to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-linear-to-l from-black to-transparent z-20" />
    </div>
  );
}
