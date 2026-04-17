'use client';
import dynamic from 'next/dynamic';
const FloatingCubes = dynamic(() => import('./FloatingCubes'), { ssr: false });
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Petition.io · Full-time',
    duration: 'July 2025 - Present · 6 mos',
    points: [
      'Build and maintain the D-app, ensuring smooth, secure, and user-friendly experience for petition creation and management',
      'Work across front-end to back-end, developing interactive dashboards and secure login flows',
      'Optimize database queries and enhance accessibility features for better performance',
      'Collaborate with the team to tackle complex problems and explore innovative features'
    ],
    tech: 'Laravel, PHP, Full Stack Development'
  },
  {
    role: 'Desktop App Developer',
    company: 'Infowareindia · Internship',
    duration: 'April 2025 - July 2025 · 4 mos',
    points: [
      'Developed desktop applications using Python PySide and PyQT, ensuring smooth UI/UX functionality',
      'Worked with databases and wrote efficient queries, optimizing performance',
      'Integrated third-party SDKs and libraries, enhancing application capabilities'
    ],
    tech: 'Python (Programming Language), Database Management'
  },
  {
    role: 'Web Designer',
    company: 'DesignCrowd · Freelance',
    duration: 'March 2023 - June 2025 · 2 yrs 4 mos',
    points: [
      'Created custom web designs for clients across various industries',
      'Delivered responsive and user-friendly design solutions',
      'Collaborated with clients to understand requirements and deliver quality designs',
      'Maintained high customer satisfaction ratings on the platform'
    ],
    tech: 'UI/UX Design, Figma, Responsive Web'
  },
  {
    role: 'Content Creator & Blogger',
    company: 'Technical Writing',
    duration: '2023 - Present',
    points: [
      'Published 10+ technical articles on cybersecurity and development',
      'Writing about social engineering, ransomware, and security best practices',
      'Active on Dev.to, Medium, and Telescope platforms',
      'Building community engagement around ethical hacking and security awareness'
    ],
    tech: 'Technical Writing, Cybersecurity Education'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden dark:bg-zinc-950 bg-slate-50">
      <FloatingCubes />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-center mb-4 dark:text-white text-slate-900 tracking-tighter">
            PRO <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <p className="text-zinc-500 font-medium max-w-2xl mx-auto">
            My professional journey in software engineering, design, and content creation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass p-8 rounded-[2rem] border-white/5 hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-sky-400 mb-1 group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold">
                    <Briefcase className="w-4 h-4 text-sky-500" />
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs md:text-sm font-bold text-sky-400 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    <ChevronRight className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex items-center gap-2 pt-4 border-t border-zinc-200 dark:border-white/5 mt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-white/30">Technologies:</span>
                  <span className="text-sm font-semibold dark:text-zinc-300 text-zinc-700">{exp.tech}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}