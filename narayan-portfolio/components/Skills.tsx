'use client';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  Backend: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'REST APIs'],
  Cybersecurity: [
    'SEO Optimization',
    'Geo Targeting',
    'Penetration Testing',
    'Security Audits',
    'Network Security',
    'Ethical Hacking',
  ],
  Tools: ['Git', 'Docker', 'VS Code', 'Electron', 'Linux'],
  Specialized: [
    'IoT',
    'Blockchain',
    'Web3',
    'Ethereum',
    'Solidity',
    'Data Analysis',
    'Cloud Services',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Skills & Expertise
        </motion.h2>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-sky-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-sky-500/10 border border-sky-500/30 text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}