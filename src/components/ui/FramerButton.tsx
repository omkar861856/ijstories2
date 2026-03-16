"use client";

import React from "react";
import { motion } from "framer-motion";

interface FramerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function FramerButton({ children, onClick, className = "", variant = "primary" }: FramerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 ${
        variant === "primary" 
        ? "bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
        : "border border-white/20 text-white hover:bg-white/5"
      } ${className}`}
    >
      {children}
      <div className="overflow-hidden relative w-3 h-3">
        <motion.div
          animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-silver-300 w-1 h-full rotate-45"
        />
      </div>
    </motion.button>
  );
}
