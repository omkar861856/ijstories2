"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "./GlowButton";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 z-100 md:left-auto md:max-w-md"
        >
          <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 p-8 rounded-4xl shadow-2xl">
            <h3 className="text-xl font-bold mb-4 tracking-tight">Privacy & Perspectives</h3>
            <p className="text-silver-400 text-sm mb-8 leading-relaxed">
              We use cookies to enhance your cinematic experience and understand how you interact with our stories. By continuing, you agree to our use of digital footprints.
            </p>
            <div className="flex gap-4">
              <GlowButton onClick={handleAccept} className="w-full py-3! text-[9px]!">
                Accept All
              </GlowButton>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[9px] font-black uppercase tracking-widest text-silver-600 hover:text-white transition-colors px-4"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
