'use client';
import dynamic from 'next/dynamic';
const FloatingCubes = dynamic(() => import('./FloatingCubes'), { ssr: false });
import { motion } from 'framer-motion';
import { Code2, Shield, Smartphone, GitBranch, Monitor, Zap } from 'lucide-react'; // Fixed: GitBranch for Blockchain/Web3

const services = [
  { icon: Code2, title: 'Full Stack Development', desc: 'End-to-end web apps with Next.js & Firebase.' },
  { icon: Shield, title: 'Cybersecurity Audits', desc: 'Penetration testing & secure architecture.' },
  { icon: Smartphone, title: 'IoT Solutions', desc: 'Smart helmets & device integrations.' },
  { icon: GitBranch, title: 'Web3/Blockchain', desc: 'Solidity contracts & dApps.' },
  { icon: Monitor, title: 'Desktop Apps', desc: 'Electron-based cross-platform tools.' },
  { icon: Zap, title: 'Automation', desc: 'Scripts & workflows for efficiency.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 dark:bg-zinc-900/50 bg-slate-100/50 relative overflow-hidden">
      <FloatingCubes />
      <div className="relative z-10 w-full h-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white text-slate-900"
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl card"
            >
              <service.icon className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-slate-900">{service.title}</h3>
              <p className="dark:text-zinc-400 text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
          </div>
</section>
  );
}