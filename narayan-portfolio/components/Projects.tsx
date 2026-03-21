import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Zentracker', desc: 'ZenTrack: a minimalist habit tracker with a Smart Sticky Layout that keeps things simple and consistent.', tech: 'Next.js, Firebase, Render', link: 'https://zentrack-pvdc.onrender.com' },
  { title: 'Smart Helmet', desc: 'IoT helmet for accident detection.', tech: 'ESP32, C++, Express.js,node.js,TypeScript,Blockchain', link: 'https://github.com/WhyNotNarayan/SmartHelmet_IOT' },
  { title: 'Autopark', desc: 'Smart parking system with geo-optimization.', tech: 'PHP,CSS,JavaScript,PhpMyAdmin,', link: 'https://github.com/WhyNotNarayan/Autopark-' },
  { title: 'DeadLine_Drift', desc: 'DeadlineDrift: a web-based toy car racing management system built to manage and display college competition results.', tech: 'Node.js,Express.js,MongoDB,AngularJS,HTML,CSS,JavaScript', link: 'https://dead-line-drift.onrender.com' },
  { title: 'WaterDetection', desc: 'AI-based water leak detector.', tech: 'ML, Raspberry Pi', link: 'https://github.com/WhyNotNarayan/WaterDetection_IOT' },
  { title: 'Online Saloon Booking', desc: 'Full-stack booking platform.', tech: 'React, Node.js', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
         Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl card"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-zinc-400 mb-3">{project.desc}</p>
              <p className="text-sm text-sky-400 mb-4">{project.tech}</p>
              <a href={project.link} className="flex items-center gap-2 text-sky-400 hover:text-sky-300">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}