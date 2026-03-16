"use client";

import React from "react";
import { motion } from "framer-motion";
import PolaroidTicker from "@/components/framer/PolaroidTicker";

export default function About() {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-silver-500 font-black tracking-widest text-xs uppercase mb-4">the ij.stories philosophy</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
              Every Frame <br />
              <span className="text-silver italic">Tells a Legacy.</span>
            </h3>
            <p className="text-silver-400 text-xl leading-relaxed font-light italic">
              ij.stories was born from a passion for cinematic clarity and digital raw-ness. We believe in the power of the &quot;unfiltered&quot; moment, polished to perfection. Our collective of artists, designers, and directors work in sync to transform your brand into a legend.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Global Stories", val: "250+" },
              { label: "Film Credits", val: "45+" },
              { label: "Design Awards", val: "12" },
              { label: "Years in Motion", val: "08" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/2 border border-white/10 p-8 rounded-[30px] silver-hover">
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-silver-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-black tracking-widest mb-4 uppercase text-center text-white/30 italic underline decoration-silver-600">The Human Collective</h3>
          <PolaroidTicker />
        </div>
      </div>
    </section>
  );
}
