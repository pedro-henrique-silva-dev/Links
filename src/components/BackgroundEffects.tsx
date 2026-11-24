import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#030712]">
      {/* Subtle technological cyber grid */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Cyberpunk Top Neon Glow Orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-br from-cyan-600/20 via-blue-700/15 to-transparent rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Secondary accent orb bottom */}
      <div className="absolute -bottom-40 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px]" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030712]/70 to-[#030712]" />
    </div>
  );
};
