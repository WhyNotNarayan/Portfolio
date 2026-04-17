'use client';
import dynamic from 'next/dynamic';
const FloatingCubes = dynamic(() => import('./FloatingCubes'), { ssr: false });
import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  Backend: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'REST APIs'],
  Cybersecurity: [
    'Penetration Testing',
    'Security Audits',
    'Network Security',
    'Ethical Hacking',
  ],
  Growth: [
    'SEO Optimization',
    'Geo Targeting',
  ],
  Tools: ['Git', 'Docker', 'VS Code', 'Electron', 'Linux'],
  Specialized: [
    'IoT',
    'Blockchain',
    'Web3',
    'Ethereum',
    'Data Analysis',
    'Cloud Services',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 dark:bg-zinc-950/50 bg-slate-50/50 relative overflow-hidden">
      <FloatingCubes />
      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white text-slate-900"
          >
            Skills & <span className="text-gradient">Expertise</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 transition-all duration-300 card"   
              >
                <h3 className="text-xl font-semibold mb-4 text-sky-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] dark:text-white text-slate-900 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}