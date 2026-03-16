"use client";

import React from "react";
import { motion } from "framer-motion";

const posts = [
  { date: "Mar 15, 2026", title: "The Future of Minimalist Design", category: "Insight" },
  { date: "Mar 08, 2026", title: "Mastering Silver Gradients in UI", category: "Tutorial" },
  { date: "Feb 28, 2026", title: "Why Motion is the New Standard", category: "Perspective" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex justify-between items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter"
          >
            LATEST <span className="text-silver">INSIGHTS</span>
          </motion.h2>
          <button className="text-silver-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs border-b border-silver-600 pb-1">
            View All
          </button>
        </div>

        <div className="divide-y divide-white/10">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/2 transition-all px-4 cursor-pointer"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-silver-500 font-mono text-sm">{post.date}</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase font-black text-silver-400">
                  {post.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-silver transition-colors">
                {post.title}
              </h3>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-silver text-2xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
