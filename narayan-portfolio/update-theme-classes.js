const fs = require('fs');
const path = require('path');

const dirs = ['components', 'app'];

const classMap = {
  // Backgrounds
  'bg-zinc-950/50': 'dark:bg-zinc-950/50 bg-slate-50/50',
  'bg-zinc-900/50': 'dark:bg-zinc-900/50 bg-slate-100/50',
  'bg-zinc-900': 'dark:bg-zinc-900 bg-slate-100',
  'bg-zinc-800': 'dark:bg-zinc-800 bg-slate-200',
  'bg-zinc-950': 'dark:bg-zinc-950 bg-slate-50',
  
  // Text
  'text-white': 'dark:text-white text-slate-900',
  'text-zinc-400': 'dark:text-zinc-400 text-slate-600',
  'text-zinc-300': 'dark:text-zinc-300 text-slate-700',
  
  // Borders
  'border-white/5': 'dark:border-white/5 border-black/5',
  'border-white/10': 'dark:border-white/10 border-black/10',
  'border-white/20': 'dark:border-white/20 border-black/20',
  'border-white/30': 'dark:border-white/30 border-black/30',
};

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  // Exclude files we just wrote manually to avoid double-processing bugs
  if (filePath.endsWith('layout.tsx') || filePath.endsWith('Navbar.tsx') || filePath.endsWith('Hero.tsx') || filePath.endsWith('ThemeToggle3D.tsx')) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Add 3D background import and usage for typical section files
  const sectionMatch = content.match(/<section[^>]*className="([^"]+)"[^>]*>/);
  if (sectionMatch && !content.includes('FloatingCubes') && !filePath.includes('FloatingCubes') && !filePath.includes('TechSphere') && !filePath.includes('HeroParticles') && !filePath.includes('page.tsx')) {
    // Inject import
    content = content.replace(/(import .*;\n)+/, `$&import dynamic from 'next/dynamic';\n\nconst FloatingCubes = dynamic(() => import('./FloatingCubes'), { ssr: false });\n\n`);
    
    // update className to have relative overflow-hidden
    let oldClass = sectionMatch[1];
    let newClass = oldClass;
    if (!newClass.includes('relative')) newClass += ' relative';
    if (!newClass.includes('overflow-hidden')) newClass += ' overflow-hidden';
    content = content.replace(oldClass, newClass);
    
    // Inject <FloatingCubes /> completely
    content = content.replace(/(<section[^>]*>)/, `$1\n      <FloatingCubes />\n      <div className="relative z-10 w-full h-full">`);
    content = content.replace(/(<\/section>)/, `      </div>\n$1`);
  }

  // Safe whole-word replacement of exact utility classes
  for (const [key, value] of Object.entries(classMap)) {
    const regex = new RegExp(`(?<=[\\s"'\`])${key.replace(/[/.]/g, '\\$&')}(?=[\\s"'\`])`, 'g');
    content = content.replace(regex, value);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

dirs.forEach(d => {
  const fullPath = path.join(__dirname, d);
  if (fs.existsSync(fullPath)) traverse(fullPath);
});

console.log('Class updates complete.');
