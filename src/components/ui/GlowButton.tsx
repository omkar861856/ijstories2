"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function GlowButton({ 
  children, 
  className = "", 
  variant = "primary", 
  onClick, 
  type, 
  disabled,
  onMouseEnter,
  onMouseLeave
}: GlowButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-8 py-3 rounded-full font-black uppercase tracking-[0.25em] text-[9px] overflow-hidden group transition-all duration-500 ${
        variant === "primary" 
          ? "bg-white text-black" 
          : "bg-transparent text-white border border-white/10"
      } ${className}`}
    >
      {/* Liquid Glow Base */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none">
        <div className="absolute inset-0 bg-white/30 animate-pulse" />
      </div>
      
      {/* Animated Border Beam */}
      <div className="absolute inset-[-2px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full mask-[linear-gradient(white,transparent)] pointer-events-none">
          <div className="absolute inset-0 border-2 border-white/50 rounded-full" />
      </div>

      {/* Glossy Reflection */}
      <div className="absolute -inset-full group-hover:inset-0 z-0 bg-linear-to-r from-transparent via-white/40 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

      <span className="relative z-10">{children}</span>
      
      {/* Outer Halo */}
      <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-shadow duration-500 scale-100 group-hover:scale-110 pointer-events-none" />
    </motion.button>
  );
}
