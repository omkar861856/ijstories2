"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    desc: "Perfect for brands looking for a fresh visual start.",
    features: ["Standard Visual Identity", "5 Page Website", "Social Media Templates", "2 Weeks Support"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$7,500",
    desc: "Comprehensive creative solution for growing agencies.",
    features: ["Full Brand Strategy", "Custom Interactive Website", "Motion Design Assets", "6 Months Support", "Priority Consultation"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Infinite possibilities for global brands requiring mastery.",
    features: ["Global Brand Architecture", "Complex Web Ecosystems", "Full Creative Production", "Dedicated Art Director", "Lifetime Updates"],
    highlight: false,
  },
];

import GlowButton from "@/components/ui/GlowButton";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-24 text-center"
          >
            Investment <span className="text-silver">Plans</span>
          </motion.h2>
          <p className="text-silver-400 max-w-xl mx-auto">
            Investment options tailored to your creative ambitions and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl border ${
                plan.highlight 
                ? "bg-zinc-900 border-white/20" 
                : "bg-white/2 border-white/10"
              } text-white flex flex-col`}
            >
              <h3 className="text-sm font-black tracking-[0.3em] text-silver mb-4">{plan.name}</h3>
                <p className="text-silver-400 text-sm mb-8 font-medium">Starting from</p>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black">{plan.price}</span>
                </div>
                <ul className="space-y-6 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-silver-300 text-sm">
                    <Check size={18} className="text-silver" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlowButton variant={plan.highlight ? "primary" : "secondary"} className="w-full">
                Choose Plan
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
