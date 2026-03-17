"use client";

import React from "react";
import ThreeDVideoScannerCarousel from "@/components/framer/ThreeDVideoScannerCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-[140vh] flex flex-col items-center justify-start overflow-hidden bg-black pt-40 pb-20">
      {/* New Title and Subtitle */}
      <div className="relative z-20 text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
          yourStories, ourVision
        </h2>
        <p className="text-xl md:text-2xl text-silver font-medium max-w-2xl mx-auto opacity-80">
          weHelpYouToBrandYoursel
        </p>
      </div>

      <div className="w-full h-[70vh] relative z-10">
        <ThreeDVideoScannerCarousel />
      </div>

      {/* Background/Subtle branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none text-center w-full opacity-10">
        <h1 className="text-[10rem] md:text-[20rem] font-black tracking-tighter italic leading-none">
          the<span className="text-silver">Portfolio</span>
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-px h-12 bg-linear-to-b from-silver-500/50 to-transparent" />
      </div>
    </section>
  );
}

