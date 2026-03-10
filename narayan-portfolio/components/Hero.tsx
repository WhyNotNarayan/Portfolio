'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-sm mb-6 border border-white/10">
            📍 Sindhudurg, Maharashtra, India
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter text-white">
            Narayan Ashok Gawade
          </h1>
          <p className="mt-4 text-3xl text-sky-400 font-light">
            Building Secure, Scalable Web3 & Full-Stack Solutions
          </p>
          <p className="mt-6 text-xl text-zinc-400 max-w-lg">
            Full-Stack • Cybersecurity • IoT • Blockchain • Geo-optimization • SEO
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="px-10 py-4 bg-sky-500 hover:bg-sky-600 rounded-2xl font-semibold text-lg transition-all active:scale-95">
              Let&apos;s Collaborate
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-2xl font-medium flex items-center gap-3 transition-all">
              Download Resume
            </a>
          </div>
          <div className="mt-12 flex gap-6">
            <a href="https://github.com/WhyNotNarayan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
              <Github className="w-7 h-7" />
              <span className="font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/narayangawade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
              <Linkedin className="w-7 h-7" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-[4rem] blur-3xl opacity-30" />
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Narayan Ashok Gawade"
            width={520}
            height={620}
            className="rounded-3xl shadow-2xl object-cover border border-white/20"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}