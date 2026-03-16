"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: "01", title: "Visual Storytelling", desc: "Crafting narratives that resonate through powerful imagery and cinematography." },
  { id: "02", title: "Premium Branding", desc: "Identity design that defines industry standards and captures the essence of luxury." },
  { id: "03", title: "Digital Artistry", desc: "Bespoke digital experiences that blend fine art with cutting-edge technology." },
  { id: "04", title: "Motion Direction", desc: "Translating brand energy into fluid motion graphics and high-impact video." },
];

export default function OurServiceSection() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
              OUR <span className="text-silver">CRAFT</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-silver-400 text-lg md:text-xl max-w-md leading-relaxed italic">
              We don&apos;t follow trends. We set the standard for what&apos;s possible in the digital art and design landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-16 bg-black relative group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-silver-600 font-mono text-xl">{service.id}</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-silver-400 leading-relaxed max-w-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
