"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Elena Rossi",
    role: "CEO, Nexa Vision",
    content: "The level of artistry and technical precision this agency brings is unparalleled. They didn't just design a site; they captured our soul.",
  },
  {
    name: "Jonathan Vance",
    role: "Founder, Silver & Co",
    content: "Minimalist, sleek, and incredibly fast. The black and silver aesthetic they developed for us has become our brand's defining feature.",
  },
  {
    name: "Mila Kunis",
    role: "Art Director, Void Studios",
    content: "Incredible attention to detail. Every animation, every pixel was crafted with purpose. A truly premium experience.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[7rem] font-black tracking-tight text-center mb-32"
        >
          Client <span className="text-silver">Feedback</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-white/3 border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6 text-silver">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 text-xl italic mb-10 leading-relaxed font-light">
                &quot;{review.content}&quot;
              </p>
              <div>
                <h4 className="font-bold text-white tracking-widest text-2xl">{review.name}</h4>
                <p className="text-silver-200 text-sm font-black tracking-widest mt-2">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
