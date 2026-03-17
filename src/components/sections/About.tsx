"use client";

import React from "react";
import { motion } from "framer-motion";
import PolaroidTicker from "@/components/framer/PolaroidTicker";

export default function About() {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="md:col-span-1"> {/* Added a div to ensure grid alignment for the first column */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-12"
            >
              We Are <span className="text-silver">IJ Stories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-silver-400 text-xl leading-relaxed font-light italic"
            >
              ij.stories was born from a passion for cinematic clarity and digital raw-ness. We believe in the power of the &quot;unfiltered&quot; moment, polished to perfection. Our collective of artists, designers, and directors work in sync to transform your brand into a legend.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Global Stories", value: "250+" },
              { label: "Film Credits", value: "45+" },
              { label: "Design Awards", value: "12" },
              { label: "Years In Motion", value: "08" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/3 border border-white/5 silver-hover">
                <p className="text-silver text-4xl font-black mb-4">{stat.value}</p>
                <p className="text-silver-400 font-bold tracking-widest text-xs">{stat.label}</p>
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
