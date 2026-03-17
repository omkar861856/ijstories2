"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after video duration or fallback timer
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 5000); // 5 seconds fallback if video doesn't trigger onEnded

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleVideoEnded = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black overflow-hidden"
        >
          <video
            src="/logo.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover md:object-contain scale-110 md:scale-125"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
