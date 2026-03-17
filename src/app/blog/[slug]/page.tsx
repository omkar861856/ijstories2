"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/site-data";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowButton from "@/components/ui/GlowButton";

export default function BlogPostPage() {
  const { slug } = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-silver selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <GlowButton 
              variant="secondary" 
              onClick={() => router.back()}
              className="px-6! py-2!"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Back to Library</span>
              </div>
            </GlowButton>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-silver uppercase tracking-widest font-black text-xs mb-6">{post.category}</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
              {post.title}
            </h1>
            
            <div className="flex gap-8 text-silver-500 font-bold tracking-widest text-[10px] uppercase mb-16 px-1 border-l border-silver/30">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                <span>By IJ Stories Editorial</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[21/9] w-full mb-20 rounded-[2rem] overflow-hidden border border-white/10"
          >
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover grayscale brightness-70" 
                />
          </motion.div>

          {/* Article Content */}
          <article className="prose prose-invert prose-silver max-w-none">
             <p className="text-silver-200 text-2xl leading-relaxed mb-12 font-light">
                {post.excerpt}
             </p>
             <div className="text-silver-400 text-lg leading-relaxed space-y-8">
                {post.content}
                <p>Our philosophy at ij.stories remains rooted in the belief that the digital space is a canvas for cinematic storytelling. As we look towards the next decade of design, we are moving beyond mere usability towards emotional resonance.</p>
             </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
