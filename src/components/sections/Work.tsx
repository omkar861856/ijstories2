"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/site-data";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[8rem] font-black tracking-tight leading-[0.9]"
            >
              Selected <span className="text-silver">Works</span>
            </motion.h2>
          </div>
          <p className="text-silver-100 max-w-sm text-right hidden md:block text-[14px] tracking-wide font-medium opacity-70">
            A curated selection of our most ambitious projects where art meets strategic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10 z-10">
                    <p className="text-silver text-xs font-black tracking-widest uppercase">Explore Project</p>
                  </div>
                </div>
                <div>
                  <p className="text-silver-500 text-[10px] font-black tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-silver transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
