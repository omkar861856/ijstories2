"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/site-data";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowButton from "@/components/ui/GlowButton";

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-silver selection:text-black">
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
                <span>Back to Portfolio</span>
              </div>
            </GlowButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-silver uppercase tracking-widest font-black text-xs mb-4">{project.category}</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                {project.title}
              </h1>
              <div className="flex gap-12 text-silver-500 font-bold tracking-widest text-[10px] uppercase">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-silver-400 text-xl leading-relaxed font-light"
            >
              {project.description}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full mb-32 rounded-[3rem] overflow-hidden border border-white/10"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover grayscale" 
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-12">
             <h2 className="text-3xl font-bold tracking-tight">The Objective & Outcome</h2>
             <p className="text-silver-300 text-xl leading-relaxed">
                {project.content}
             </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
