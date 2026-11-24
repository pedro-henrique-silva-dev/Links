import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { LinkButton } from './components/LinkButton';
import type { LinkItem } from './types';
import { Terminal, Code2, Sparkles, MapPin } from 'lucide-react';
import avatarImg from './assets/avatar.png';

const LINKS: LinkItem[] = [
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'pedro-henrique-silva-dev',
    url: 'https://github.com/pedro-henrique-silva-dev',
    iconName: 'github',
    badge: 'Projetos',
    highlight: true,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'in/pedrohenriqueps-',
    url: 'https://www.linkedin.com/in/pedrohenriqueps-',
    iconName: 'linkedin',
    badge: 'Conectar',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: '@henriique.dev',
    url: 'https://www.instagram.com/henriique.dev',
    iconName: 'instagram',
    badge: 'Social',
  },
  {
    id: 'email',
    title: 'E-mail',
    subtitle: 'henriique.dev7@gmail.com',
    url: 'mailto:henriique.dev7@gmail.com',
    iconName: 'mail',
    badge: 'Contato',
  },
];

const TECH_TAGS = ['Node.js', 'React', 'Python', 'TypeScript', 'PostgreSQL', 'APIs'];

export const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col items-center justify-between px-4 py-10 selection:bg-cyan-500/30 selection:text-cyan-200">
      <BackgroundEffects />

      {/* Main Container */}
      <main className="w-full max-w-md mx-auto flex flex-col items-center z-10">
        
        {/* Top Status Bar Tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono shadow-lg backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 font-medium">Disponível para projetos</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 flex items-center gap-1">
            <MapPin size={11} className="text-slate-500" /> Brasil
          </span>
        </div>

        {/* Profile Avatar with Neon Ring */}
        <div className="relative mb-5 group">
          {/* Animated Glow Rings */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-80" />
          
          {/* Real Photo Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-slate-950 shadow-2xl bg-slate-900">
            <img
              src={avatarImg}
              alt="Pedro Henrique"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Dev Badge Icon on Avatar */}
          <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-950 border border-cyan-500/50 shadow-md text-cyan-400">
            <Code2 size={16} />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            Pedro Henrique
            <Sparkles size={18} className="text-cyan-400 animate-pulse" />
          </h1>
          <div className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-0.5 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase font-semibold">
            <Terminal size={12} />
            Software Developer
          </div>
        </div>

        {/* Description Bio */}
        <p className="text-center text-sm text-slate-300/90 leading-relaxed max-w-sm mb-6 font-normal px-2">
          &ldquo;Transformando ideias em soluções tecnológicas através do desenvolvimento de software.&rdquo;
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-7 max-w-sm px-2">
          {TECH_TAGS.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links Section */}
        <div className="w-full">
          {LINKS.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-10 text-center z-10">
        <p className="text-xs text-slate-500 font-mono">
          henrique.dev &bull; Pedro Henrique
        </p>
        <p className="text-[10px] text-slate-600 mt-1 font-mono">
          Desenvolvido com React, TypeScript &amp; Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default App;
