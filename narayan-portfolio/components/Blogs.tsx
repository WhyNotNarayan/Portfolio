'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, BookOpen, User } from 'lucide-react';

const blogs = [
  {
    title: 'Antigravity meets Cloud AI: The Future of Effortless Development',
    description: 'Exploring the intersection of edge intelligence and cloud-based AI ecosystems. A deep dive into how antigravity tech is revolutionizing modern software development.',
    link: 'https://dev.to/narayaninfo/anti-gravity-meets-cloud-ai-the-future-of-effortless-development-3529',
    image: '/blogs/antigravity.png',
    tag: 'Cloud AI',
    date: '2026'
  },
  {
    title: 'I tried 10 VS Code Extensions: Here are the best (2026 Edition)',
    description: 'Boost your productivity with these must-have VS Code extensions in 2026. From next-gen AI assistants to stunning theme hacks that improve focus.',
    link: 'https://dev.to/narayaninfo/-i-tried-10-vs-code-extensions-here-are-the-best-2026-edition-42ph',
    image: '/blogs/vscode.png',
    tag: 'Productivity',
    date: '2026'
  },
  {
    title: 'Will AI replace Developers? Honest Answer',
    description: 'The burning question of our era. An honest look at the impact of AI on software engineering and why human-AI collaboration is the real future.',
    link: 'https://dev.to/narayaninfo/will-ai-replace-developers-honest-answer-2k87',
    image: '/blogs/ai-replace.png',
    tag: 'Industry AI',
    date: '2026'
  },
  {
    title: 'Why Every Developer Should Learn System Design (Even Beginners)',
    description: 'Understanding the big picture is crucial. Why system design knowledge is essential for everyone, from junior developers to seasoned seniors.',
    link: 'https://dev.to/narayaninfo/why-every-developer-should-learn-system-design-even-beginners-pmm',
    image: '/blogs/system-design.png',
    tag: 'Architecture',
    date: '2026'
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden dark:bg-zinc-950 bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent underline decoration-4 underline-offset-8 mb-4 font-bold tracking-tight">BLOG & WRITING</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold dark:text-white text-slate-900 leading-tight">
              Technical <span className="text-gradient">Insights</span> & <br />Content Creation
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 glass px-4 py-2 rounded-full border-[var(--accent-border)]"
          >
            <User className="w-5 h-5 text-sky-400" />
            <span className="font-medium dark:text-zinc-300 text-slate-700">@narayaninfo</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group card glass overflow-hidden flex flex-col h-full border border-[var(--accent-border)] relative"
            >
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-30" 
                aria-label={blog.title}
              />

              <div className="relative h-56 md:h-64 overflow-hidden bg-zinc-800 border-b border-[var(--accent-border)]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="skill-chip border-white/20 bg-black/40 backdrop-blur-md text-white">
                    {blog.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <div className="flex items-center gap-2 text-sm dark:text-zinc-400 text-slate-500 mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                
                <h4 className="text-xl font-bold dark:text-white text-slate-900 mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                
                <p className="dark:text-zinc-400 text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold text-accent group-hover:text-accent-light transition-colors">
                    Read on Dev.to
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <span className="text-xs font-mono dark:text-zinc-500 text-slate-400 uppercase tracking-widest">
                    Post #{i + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://dev.to/narayaninfo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View More on Dev.to
          </a>
        </motion.div>
      </div>
    </section>
  );
}
