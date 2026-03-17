"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeDVideoScannerCarousel from "@/components/framer/ThreeDVideoScannerCarousel";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-32">
      {/* Primary Messaging - F-Shaped Pattern Focus */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-left mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-[6rem] font-black mb-4 tracking-tighter leading-none max-w-4xl">
            Your Stories, Our Vision
          </h2>
          <p className="text-xl md:text-3xl text-silver font-medium max-w-2xl opacity-70 tracking-tight">
            We Help You To Brand Yoursel
          </p>
          <div className="mt-12 flex space-x-6">
            <button className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-silver transition-all text-sm tracking-widest uppercase">
              View Works
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm tracking-widest uppercase">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Visual Centerpiece (Rule 5) */}
      <div className="w-full h-[85vh] relative z-10 pointer-events-auto">
        <ThreeDVideoScannerCarousel />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-px h-12 bg-linear-to-b from-silver-500/50 to-transparent" />
      </div>
    </section>
  );
}

