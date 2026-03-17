'use client';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center font-bold text-xl text-white">N</div>
          <span className="font-semibold text-2xl tracking-tight text-white">Narayan</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-400 transition-colors font-medium text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-2xl font-semibold hover:bg-sky-400 hover:text-white transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-8 gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-sky-400 text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-white text-zinc-950 py-4 rounded-2xl font-semibold"
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