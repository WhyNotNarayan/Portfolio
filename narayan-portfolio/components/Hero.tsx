'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroParticles = dynamic(() => import('./HeroParticles'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 dark:bg-zinc-800 bg-zinc-200 animate-pulse opacity-50" />
});
const TechSphere = dynamic(() => import('./TechSphere'), { ssr: false });

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden dark:bg-zinc-800 bg-zinc-200">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(56,189,248,0.15),transparent_70%)]" />

      <HeroParticles />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h6 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter dark:text-white text-zinc-900">
            <span className="text-gradient">Narayan Ashok Gawade</span>
          </h6>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 dark:bg-white/5 bg-black/5 rounded-full text-sm mb-6 border dark:border-white/10 border-black/10">
            📍 Sindhudurg, Maharashtra, India
          </div>

          <p className="mt-4 text-3xl text-sky-400 font-light">
            Building Secure, Scalable Web3 &amp; Full-Stack Solutions
          </p>

          <p className="mt-6 text-xl dark:text-zinc-400 text-zinc-600 max-w-lg">
            Full-Stack • Cybersecurity • IoT • Blockchain • Geo-optimization • SEO
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 md:px-10 md:py-4 bg-sky-500 hover:bg-sky-600 rounded-2xl font-semibold text-base md:text-lg transition-all active:scale-95 cursor-pointer dark:text-white text-zinc-900"
            >
              Let's Collaborate
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 md:px-8 md:py-4 border dark:border-white/30 border-black/30 dark:hover:border-white/60 hover:border-black/60 rounded-2xl font-medium flex items-center gap-3 text-base md:text-lg transition-all cursor-pointer dark:text-white text-zinc-900"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex gap-6">
            <a
              href="https://github.com/WhyNotNarayan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer dark:text-white text-zinc-900"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/narayangawade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer dark:text-white text-zinc-900"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/whynotaadi08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer dark:text-white text-zinc-900"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Subtle Outer Glow that expands slightly on hover */}
          <motion.div
            className="absolute -inset-2 bg-sky-500/20 rounded-full blur-2xl"
            whileHover={{
              scale: 1.2,
              opacity: 0.4
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="p-1 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 inline-block z-10 relative"
            whileHover={{ scale: 1.03 }} // Very slight, smooth zoom
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/profile.png"
              alt="Narayan Ashok Gawade"
              width={350}
              height={400}
              priority
              className="rounded-full object-cover shadow-xl"
              style={{ width: '340px', height: '400px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}