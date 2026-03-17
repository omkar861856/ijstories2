"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

import GlowButton from "@/components/ui/GlowButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
        scrolled ? "py-1" : "py-2"
      }`}
    >
      <div 
        className={`flex items-center justify-between px-6 py-2 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-black/60 shadow-2xl" : "bg-white/5"
        }`}
      >
        <Link href="/" className="flex items-center overflow-visible">
          <Image
            src="/ijlogo.png"
            alt="ij.stories logo"
            width={240}
            height={60}
            className="h-10 md:h-12 w-auto object-contain brightness-110 scale-x-110 origin-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-silver-400 hover:text-white transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact">
            <GlowButton className="px-6! py-2! text-[9px]!">Connect</GlowButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:hidden shadow-3xl"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-black uppercase tracking-[0.4em] text-silver-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="w-full py-4 bg-white text-black text-center text-xs font-black uppercase tracking-widest rounded-2xl"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
