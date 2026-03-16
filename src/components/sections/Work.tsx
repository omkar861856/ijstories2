"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Metamorphic", category: "Exhibition Design", image: "/468333594_18473797480038665_4473156711760818505_n.jpg" },
  { title: "Silver Lining", category: "Branding", image: "/530210262_18479886634079012_4513169343081986939_n.jpg" },
  { title: "Dark Matter", category: "Digital Experience", image: "/Image-50.jpg" },
  { title: "Ethereal Flow", category: "Motion Graphics", image: "/get.webp" },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
            >
              SELECTED <br />
              <span className="text-silver">WORKS</span>
            </motion.h2>
          </div>
          <p className="text-silver-400 max-w-sm text-right hidden md:block italic uppercase text-[10px] tracking-[0.2em] font-black">
            A curated selection of our most ambitious projects where art meets strategic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-16/10 overflow-hidden rounded-3xl mb-8 relative silver-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border-b border-white uppercase tracking-widest text-xs">View Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold tracking-tight uppercase">{project.title}</h3>
                <span className="text-silver-500 uppercase text-[10px] font-black tracking-widest">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
