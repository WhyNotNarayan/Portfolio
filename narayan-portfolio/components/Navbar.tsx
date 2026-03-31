'use client';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThemeToggle3D = dynamic(() => import('./ThemeToggle3D'), { ssr: false });

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center font-bold text-xl text-white">N</div>
          <span className="font-semibold text-2xl tracking-tight dark:text-white text-zinc-900">Narayan</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-400 transition-colors font-medium dark:text-white text-zinc-900"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <div className="ml-4">
            <ThemeToggle3D />
          </div>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 dark:bg-white bg-zinc-900 dark:text-zinc-900 text-white rounded-2xl font-semibold hover:bg-sky-400 hover:text-white transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle3D />
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="dark:text-white text-zinc-900"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t dark:border-white/10 border-black/10"
        >
          <div className="flex flex-col px-6 py-8 gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-sky-400 dark:text-white text-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 dark:bg-white bg-zinc-900 text-white dark:text-zinc-950 py-4 rounded-2xl font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}