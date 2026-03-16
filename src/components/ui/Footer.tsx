"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-bold tracking-tighter text-silver mb-6 block">
            ij.stories<span className="text-white">.</span>
          </Link>
          <p className="text-silver-400 text-lg max-w-sm">
            Pushing the boundaries of art and design to create unforgettable digital experiences.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["About", "Services", "Work", "Pricing", "Blog"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-silver-400 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <div className="flex space-x-6">
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-silver-500 text-sm">
        <p>© 2026 ij.stories. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
