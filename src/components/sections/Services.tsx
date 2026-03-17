"use client";

import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Hexagon, Layers, Zap } from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    desc: "Crafting unique visual languages that resonate with your audience and stand the test of time.",
    icon: <Paintbrush size={32} />,
  },
  {
    title: "Digital Design",
    desc: "Immersive websites and applications built with a focus on user experience and visual impact.",
    icon: <Hexagon size={32} />,
  },
  {
    title: "Creative Direction",
    desc: "Strategic guidance to align your brand vision with cultural trends and market demands.",
    icon: <Layers size={32} />,
  },
  {
    title: "Motion & Video",
    desc: "Bringing your brand to life through cinematic motion graphics and high-end video production.",
    icon: <Zap size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            Our <span className="text-silver">Expertise</span>
          </motion.h2>
          <p className="text-silver-400 max-w-xl mx-auto">
            We offer a comprehensive suite of creative services designed to elevate your brand to new heights of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/3 border border-white/10 p-12 rounded-3xl hover:border-white/20 transition-all group"
            >
              <div className="text-silver mb-8 group-hover:scale-110 transition-transform origin-left duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-silver-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
