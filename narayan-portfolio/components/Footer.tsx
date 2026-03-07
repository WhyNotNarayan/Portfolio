import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // All valid

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950/80 border-t border-white/10">
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
        <p className="text-zinc-500">&copy; 2026 Narayan Ashok Gawade. Built with ❤️ in Sindhudurg.</p>
      </div>
    </footer>
  );
}