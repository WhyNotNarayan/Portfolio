import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react'; // Valid

const experiences = [
  { role: 'Content Creator/Blogger', company: 'Personal', duration: '2023 - Present', desc: 'Writing on Web3 & Cybersecurity.' },
  { role: 'Web Designer', company: 'Freelance', duration: '2022 - 2023', desc: 'Designing responsive sites with Tailwind.' },
  { role: 'Desktop App Developer', company: 'Local Projects', duration: '2021 - 2022', desc: 'Electron apps for automation.' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>
              <p className="text-zinc-400 mb-2">{exp.company}</p>
              <p className="text-zinc-500">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}