"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 block overflow-visible">
            <Image
              src="/ijlogo.png"
              alt="ij.stories logo"
              width={250}
              height={80}
              className="h-12 w-auto object-contain scale-x-115 origin-left brightness-110"
            />
          </Link>
          <p className="text-silver-400 text-lg max-w-sm">
            Pushing the boundaries of art and design to create unforgettable digital experiences.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-2xl tracking-widest">quickLinks</h4>
          <ul className="space-y-6">
            {["about", "services", "work", "pricing", "blog"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-silver-400 hover:text-silver transition-colors text-xl font-medium tracking-wide">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-2xl tracking-widest">connect</h4>
          <div className="flex space-x-8">
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Instagram size={28} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Twitter size={28} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Linkedin size={28} />
            </Link>
            <Link href="#" className="text-silver-400 hover:text-white transition-colors">
              <Mail size={28} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-silver-500 text-sm font-medium tracking-widest">
        <p>© 2026 ijStories. allRightsReserved.</p>
        <div className="flex space-x-10 mt-6 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">privacyPolicy</Link>
          <Link href="#" className="hover:text-white transition-colors">termsOfService</Link>
        </div>
      </div>
    </footer>
  );
}
