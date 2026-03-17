"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const videos = [
  "/Video-64.mp4",
  "/Video-158.mp4",
  "/Video-454.mp4",
  "/Video-489.mp4",
  "/Video-686.mp4",
  "/Video-692.mp4",
];

function VideoCard({ videoSrc, displayIndex, offset }: { videoSrc: string, displayIndex: number, offset: number }) {
  const [isMuted, setIsMuted] = useState(true);
  
  const x = offset * 320;
  const rotate = offset * 15;
  const y = Math.abs(offset) * 50;
  const scale = 1 - Math.abs(offset) * 0.15;
  const opacity = 1 - Math.abs(offset) * 0.3;

  return (
    <motion.div
      key={`${displayIndex}-${offset}`}
      initial={{ opacity: 0, x: x * 1.5, scale: 0.5 }}
      animate={{ 
        opacity, 
        x, 
        y, 
        scale, 
        rotateZ: rotate,
        zIndex: 10 - Math.abs(offset) 
      }}
      exit={{ opacity: 0, scale: 0.5, x: x * -1.5 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className="absolute w-[300px] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group"
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute top-6 right-6 z-30">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-end p-8 pointer-events-none">
         <div className="mt-auto">
            <p className="text-[10px] font-black tracking-widest text-silver mb-2 uppercase">Selected Work</p>
            <h3 className="text-2xl font-bold text-white">Project Case {displayIndex + 1}</h3>
         </div>
      </div>
    </motion.div>
  );
}

export default function CurvedCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-16">
         <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Curated <span className="text-silver">Moments</span>
         </h2>
      </div>

      <div className="relative h-[600px] w-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const displayIndex = (index + offset + videos.length) % videos.length;
            return (
              <VideoCard 
                key={`${displayIndex}-${offset}`}
                videoSrc={videos[displayIndex]} 
                displayIndex={displayIndex}
                offset={offset}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
