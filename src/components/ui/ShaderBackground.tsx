"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black">
      {/* Mesh Gradient Layers */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 100, 0, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-20 bg-[radial-gradient(circle,rgba(210,210,215,0.4)_0%,transparent_70%)] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, 150, -150, 0, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-15 bg-[radial-gradient(circle,rgba(134,134,139,0.3)_0%,transparent_70%)] blur-[120px]"
      />
      
      {/* Grain / Noise Filter Overlay */}
      <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150 pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
    </div>
  );
}
