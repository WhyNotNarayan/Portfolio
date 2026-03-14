'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(56,189,248,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text + Buttons (Fixed Clickable Area) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"  
        >
          <h6 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-white">
            Narayan Ashok Gawade
          </h6>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-sm mb-6 border border-white/10">
            📍 Sindhudurg, Maharashtra, India
          </div>

          <p className="mt-4 text-3xl text-sky-400 font-light">
            Building Secure, Scalable Web3 & Full-Stack Solutions
          </p>

          <p className="mt-6 text-xl text-zinc-400 max-w-lg">
            Full-Stack • Cybersecurity • IoT • Blockchain • Geo-optimization • SEO
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 md:px-10 md:py-4 bg-sky-500 hover:bg-sky-600 rounded-2xl font-semibold text-base md:text-lg transition-all active:scale-95 cursor-pointer"
            >
              Let's Collaborate
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 md:px-8 md:py-4 border border-white/30 hover:border-white/60 rounded-2xl font-medium flex items-center gap-3 text-base md:text-lg transition-all cursor-pointer"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex gap-6">
            <a
              href="https://github.com/WhyNotNarayan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/narayangawade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* Instagram Icon & Link */}
            <a
              href="https://instagram.com/whynotaadi08"   
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-sky-400 transition-colors text-sm md:text-base cursor-pointer"
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
            className="p-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 inline-block z-10 relative"
            whileHover={{ scale: 1.03 }} // Very slight, smooth zoom
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/profile.png"
              alt="Narayan Ashok Gawade"
              className="rounded-full w-85 h-100 object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}