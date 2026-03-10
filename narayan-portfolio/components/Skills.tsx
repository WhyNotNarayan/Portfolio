import { motion } from 'framer-motion';
// Optional: Add these valid icons if you want visual tags (uncomment below)
// import { Python, JsSquare, Database, Git, Layers } from 'lucide-react'; // Valid: JsSquare for JS, Layers for Docker

const languages = ['Python', 'JavaScript', 'HTML5/CSS3', 'SQL', 'Bash'];
const tools = ['Docker', 'Git', 'VS Code', 'Linux', 'Firebase'];

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
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="tech-tag">{lang}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tech-tag">{tool}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}