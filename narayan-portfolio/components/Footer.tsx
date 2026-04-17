import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // All valid

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950/80 border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:narayangawade684@gmail.com" className="hover:text-sky-400 transition-colors">
            <Mail />
          </a>
          <a href="tel:+918975347452" className="hover:text-sky-400 transition-colors">
            <Phone />
          </a>
          <a href="https://github.com/WhyNotNarayan" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <Github />
          </a>
          <a href="https://linkedin.com/in/narayangawade" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <Linkedin />
          </a>
        </div>
        <p className="text-zinc-500">&copy; 2026 <span className="text-gradient font-bold">Narayan Ashok Gawade</span>. Built with ❤️ in Sindhudurg.</p>
        <div className="pt-4 border-t border-white/5 max-w-xs mx-auto">
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] dark:text-zinc-600 text-slate-400">
            Created during <span className="text-sky-500/80 font-bold">SY.Bsc.CS</span> • Semester <span className="text-indigo-400">IV</span>
          </p>
          <p className="text-[9px] md:text-[10px] uppercase tracking-widest mt-1 dark:text-zinc-700 text-slate-300">
            Academic Year 2025-26
          </p>
        </div>
      </div>
    </footer>
  );
}