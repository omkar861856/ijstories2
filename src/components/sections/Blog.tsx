import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  { date: "Mar 15, 2026", title: "theFutureOfMinimalistDesign", category: "insight", image: "/468333594_18473797480038665_4473156711760818505_n.jpg" },
  { date: "Mar 08, 2026", title: "masteringSilverGradientsInUI", category: "tutorial", image: "/530210262_18479886634079012_4513169343081986939_n.jpg" },
  { date: "Feb 28, 2026", title: "whyMotionIsTheNewStandard", category: "perspective", image: "/Image-50.jpg" },
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
            className="text-6xl md:text-[7rem] font-black tracking-tight mb-24"
          >
            the<span className="text-silver">Blog</span>
          </motion.h2>
          <button className="text-silver-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs border-b border-silver-600 pb-1">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-2xl mb-8 relative bg-zinc-900 silver-border">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-8 mb-4">
                <span className="text-silver-500 font-mono text-sm">{post.date}</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-black text-silver-400">
                  {post.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-silver transition-colors flex items-center gap-2">
                {post.title} <span className="text-silver text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
