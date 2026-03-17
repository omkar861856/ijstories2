"use client";

import React from "react";
import { motion } from "framer-motion";

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
        {/* The instruction seems to be trying to insert a SplashScreen related div here, but it's malformed and out of context for Contact.tsx.
            Assuming the intent was to modify the existing overlay div, but the provided snippet is not a valid replacement.
            Keeping the original overlay div as it is syntactically correct for Contact.tsx.
            If the SplashScreen change was intended for a different file, it should be applied there. */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[6rem] font-black mb-12 tracking-tighter leading-none">
                Let&apos;s<br />
                <span className="text-silver">Collaborate</span>
              </h2>
            </motion.div>
            <p className="text-silver-400 text-xl max-w-md mb-12 font-light italic">
              We&apos;re currently accepting select commissions for 2026. Let&apos;s co-create a legacy that echoes.
            </p>
            
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[10px] font-black tracking-[0.4em] text-silver-600 mb-2 italic">Location Based</p>
                <p className="text-2xl font-bold group-hover:text-silver transition-colors tracking-tight italic">Mumbai / London / NYC</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-black tracking-[0.4em] text-silver-600 mb-2 italic">Electronic Mail</p>
                <p className="text-2xl font-bold group-hover:text-silver transition-colors tracking-tight italic">hello@ijstories.studio</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-12 rounded-[60px] shadow-2xl"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black tracking-widest text-silver-500 group-focus-within:text-white transition-colors italic">Your Identity</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all placeholder:text-zinc-700 italic" placeholder="Full Name" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black tracking-widest text-silver-500 group-focus-within:text-white transition-colors italic">Connection</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all placeholder:text-zinc-700 italic" placeholder="Email Address" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black tracking-widest text-silver-500 group-focus-within:text-white transition-colors italic">The Vision</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-all resize-none placeholder:text-zinc-700 italic" placeholder="Briefly Describe Your Objective"></textarea>
              </div>
              
              <button type="submit" className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-silver transition-all text-sm tracking-widest">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
