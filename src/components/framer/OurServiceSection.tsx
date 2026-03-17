"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { services } from "@/data/site-data";

export default function OurServiceSection() {
  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Our <span className="text-silver">Services</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-silver-400 text-lg md:text-xl max-w-md leading-relaxed">
              We don&apos;t follow trends. We set the standard for what&apos;s possible in the digital art and design landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <motion.div
                className="p-16 bg-black relative group cursor-pointer h-[400px] overflow-hidden"
              >
                {/* Background Image/Video */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  {service.image.endsWith('.mp4') ? (
                    <video
                      src={service.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-silver-600 font-mono text-xl">{service.id}</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-silver transition-colors">{service.title}</h3>
                    <p className="text-silver-400 group-hover:text-white transition-colors leading-relaxed max-w-sm">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
