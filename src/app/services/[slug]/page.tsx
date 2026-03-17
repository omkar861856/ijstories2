"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { services } from "@/data/site-data";
import { motion } from "framer-motion";
import { ArrowLeft, Server, Activity } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

import GlowButton from "@/components/ui/GlowButton";

export default function ServicePage() {
  const { slug } = useParams();
  const router = useRouter();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Service not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-silver selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <GlowButton 
              variant="secondary" 
              onClick={() => router.back()}
              className="px-6! py-2!"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Back to Services</span>
              </div>
            </GlowButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-silver uppercase tracking-widest font-black text-xs mb-4">Service {service.id}</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                {service.title}
              </h1>
              <div className="flex gap-12 text-silver-500 font-bold tracking-widest text-[10px] uppercase">
                <div className="flex items-center gap-2">
                  <Server size={14} />
                  <span>Bespoke Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={14} />
                  <span>Premium Output</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-silver-400 text-xl leading-relaxed font-light"
            >
              {service.desc}
            </motion.div>
          </div>

          {/* Hero Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full mb-32 rounded-[3rem] overflow-hidden border border-white/10"
          >
            {service.image.endsWith('.mp4') ? (
              <video
                src={service.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale brightness-70"
              />
            ) : (
              <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale brightness-70" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-12">
             <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
             <p className="text-silver-300 text-xl leading-relaxed">
                {service.content}
             </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
