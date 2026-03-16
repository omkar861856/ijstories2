"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FramerButton from "@/components/ui/FramerButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover grayscale"
        >
          <source src="/Video-686.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase"
            >
              TELL YOUR <br />
              <span className="text-silver italic">STORY.</span>
            </motion.h2>
            <p className="text-silver-400 text-xl max-w-md mb-12 font-light italic">
              We&apos;re currently accepting select commissions for 2026. Let&apos;s co-create a legacy that echoes.
            </p>
            
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-silver-600 mb-2">Location / Base</p>
                <p className="text-2xl font-bold group-hover:text-silver transition-colors tracking-tight">Mumbai / London / NYC</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-silver-600 mb-2">Electronic Mail</p>
                <p className="text-2xl font-bold group-hover:text-silver transition-colors tracking-tight">hello@ijstories.studio</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-12 rounded-[60px] shadow-2xl"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-silver-500 group-focus-within:text-white transition-colors">Your Identity</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all placeholder:text-zinc-700" placeholder="Full Name" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-silver-500 group-focus-within:text-white transition-colors">Connection</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all placeholder:text-zinc-700" placeholder="Email Address" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-silver-500 group-focus-within:text-white transition-colors">The Vision</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all resize-none placeholder:text-zinc-700" placeholder="Briefly describe your objective"></textarea>
              </div>
              
              <FramerButton className="w-full justify-center">
                Initiate Project
                <ArrowRight size={16} />
              </FramerButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
