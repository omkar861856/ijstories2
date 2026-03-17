"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  "Samsung", "Flipkart", "Amazon", "Rupa", "Samsung", "Flipkart", "Amazon", "Rupa"
];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-black/50 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-20 items-center pr-20"
        >
          {clients.concat(clients).map((client, idx) => (
            <span
              key={idx}
              className="text-4xl md:text-6xl font-black text-silver-800 uppercase tracking-tighter hover:text-silver-400 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
