'use client';
import { motion } from 'framer-motion';
import { Code, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Passionate Full-Stack Web3 & Cybersecurity Enthusiast from Sindhudurg, India. 
            I craft innovative solutions blending cutting-edge tech like Blockchain, IoT, 
            and secure systems to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Full-Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(56, 189, 248, 0.4)"
            }}
            className="glass p-8 rounded-2xl text-center border border-white/5 transition-colors duration-300 cursor-default"
          >
            <Code className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Dev</h3>
            <p className="text-zinc-400">Building responsive, scalable apps with Next.js, React, and Node.js.</p>
          </motion.div>

          {/* Card 2 - Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ 
              y: -10,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(56, 189, 248, 0.4)"
            }}
            className="glass p-8 rounded-2xl text-center border border-white/5 transition-colors duration-300 cursor-default"
          >
            <Shield className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Cybersecurity</h3>
            <p className="text-zinc-400">Conducting audits, ethical hacking, and securing Web3 protocols.</p>
          </motion.div>

          {/* Card 3 - IoT & Blockchain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              y: -10,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(56, 189, 248, 0.4)"
            }}
            className="glass p-8 rounded-2xl text-center border border-white/5 transition-colors duration-300 cursor-default"
          >
            <Zap className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">IoT & Blockchain</h3>
            <p className="text-zinc-400">Integrating smart devices with Solidity smart contracts and geo-optimized SEO.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}