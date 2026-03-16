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

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            TRANSPARENT <span className="text-silver">PRICING</span>
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
                ? "bg-white text-black border-white" 
                : "bg-white/2 text-white border-white/10"
              } flex flex-col`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-6">{plan.price}</div>
              <p className={`mb-8 ${plan.highlight ? "text-gray-600" : "text-silver-500"}`}>
                {plan.desc}
              </p>
              
              <ul className="space-y-4 mb-12 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} className={plan.highlight ? "text-black" : "text-silver"} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                ? "bg-black text-white hover:bg-zinc-800" 
                : "bg-white text-black hover:bg-silver-200"
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
