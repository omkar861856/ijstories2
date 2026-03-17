"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Video() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative aspect-video rounded-[60px] overflow-hidden silver-border group cursor-pointer shadow-2xl">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-2000"
          >
            <source src="/Video-824.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.9 }}
              className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-2xl border border-white/30"
            >
              <Play size={48} fill="currentColor" />
            </motion.div>
          </div>
          <div className="absolute bottom-16 left-16">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white italic drop-shadow-2xl text-silver">
              The Showreel
            </h3>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-4 items-center">
             <div className="w-12 h-px bg-silver-500" />
             <p className="text-silver-500 tracking-[0.3em] text-[10px] font-black italic">IJ Stories Cinema</p>
          </div>
          <p className="text-silver-400 max-w-lg text-xl italic font-light text-center md:text-right leading-relaxed">
            &quot;Beyond documentation lies the art of storytelling. We don&apos;t just record; we reimagine reality.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
