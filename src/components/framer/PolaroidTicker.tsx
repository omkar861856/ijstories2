"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMedia = [
  { name: "Alex Silver", role: "Creative Director", src: "/468333594_18473797480038665_4473156711760818505_n.jpg" },
  { name: "Sarah White", role: "Lead Designer", src: "/530210262_18479886634079012_4513169343081986939_n.jpg" },
  { name: "Marcus Black", role: "Art Director", src: "/Image-50.jpg" },
  { name: "Isha Jain", role: "Founder", src: "/This Post was tough… selecting pictures was a task in this post. I loved every single photo that.jpg" },
];

export default function PolaroidTicker() {
  const duplicated = [...teamMedia, ...teamMedia, ...teamMedia];
  
  return (
    <div className="w-full overflow-hidden py-20 bg-black relative">
      <motion.div
        className="flex gap-8 px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((member, i) => (
          <div
            key={i}
            className="shrink-0 w-64 md:w-72 bg-white p-4 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <div className="aspect-square overflow-hidden bg-zinc-200 mb-4">
              <img
                src={member.src}
                alt={member.name}
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="text-black">
              <h4 className="font-bold text-lg leading-none mb-1">{member.name}</h4>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{member.role}</p>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-20">
               <span className="text-[10px] uppercase font-bold">ij.stories</span>
               <span className="text-[10px] uppercase font-bold">#2026</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
