import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import type { LinkItem } from '../types';

interface Props {
  link: LinkItem;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const LinkButton: React.FC<Props> = ({ link }) => {
  const getIcon = () => {
    switch (link.iconName) {
      case 'instagram':
        return <InstagramIcon className="text-pink-400 group-hover:text-pink-300 transition-colors" />;
      case 'linkedin':
        return <LinkedinIcon className="text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case 'github':
        return <GithubIcon className="text-slate-200 group-hover:text-white transition-colors" />;
      case 'mail':
        return <Mail size={22} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />;
    }
  };

  const isMail = link.iconName === 'mail';

  return (
    <a
      href={link.url}
      target={isMail ? '_self' : '_blank'}
      rel={isMail ? '' : 'noopener noreferrer'}
      className={`group relative flex items-center justify-between w-full p-4 mb-3.5 rounded-2xl 
        bg-slate-900/70 backdrop-blur-xl border transition-all duration-300
        ${
          link.highlight
            ? 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]'
            : 'border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.18)]'
        }
        hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden`}
    >
      {/* Background hover light sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      <div className="flex items-center gap-3.5 z-10">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
          {getIcon()}
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors tracking-wide">
              {link.title}
            </span>
            {link.badge && (
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {link.badge}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 font-mono tracking-tight block">
            {link.subtitle}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 z-10">
        <ArrowUpRight size={18} />
      </div>
    </a>
  );
};
