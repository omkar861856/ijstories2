"use client";

import React from "react";
import ThreeDVideoScannerCarousel from "@/components/framer/ThreeDVideoScannerCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      <div className="w-full h-[600px] relative z-10">
        <ThreeDVideoScannerCarousel />
      </div>

      {/* Subtle branding and scroll indicator */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <span className="text-[10px] font-black tracking-[0.6em] text-silver-500 uppercase block mb-2">
          ij.stories studio
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic opacity-20">
          The <span className="text-silver">Portfolio</span>
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-px h-12 bg-linear-to-b from-silver-500/50 to-transparent" />
      </div>
    </section>
  );
}
