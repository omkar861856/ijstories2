"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/site-data";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex justify-between items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[7rem] font-black tracking-tight mb-24"
          >
            The<span className="text-silver">Blog</span>
          </motion.h2>
          <button className="text-silver-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs border-b border-silver-600 pb-1">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, idx) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-4xl mb-8 border border-white/10 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black tracking-widest text-silver uppercase">{post.category}</span>
                  <div className="w-8 h-px bg-white/10" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase">{post.date}</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight group-hover:text-silver transition-colors leading-tight">
                  {post.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
