import React from 'react';

export const SectionDivider = ({ flipped = false }) => {
  return (
    <div className={`relative h-28 w-full overflow-hidden ${flipped ? 'rotate-180' : ''}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--theme-background)]" />
      <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2">
        <div className="absolute left-1/3 top-1/2 h-48 w-64 -translate-y-1/2 -rotate-6 rounded-[45%] blur-3xl" style={{ background: 'var(--theme-gradient-soft)' }} />
        <div className="absolute left-1/2 top-1/2 h-40 w-80 -translate-y-1/2 rotate-6 rounded-[50%] opacity-60 blur-2xl" style={{ background: 'var(--theme-gradient-strong)' }} />
        <div className="absolute right-1/4 top-1/2 h-52 w-40 -translate-y-1/2 rounded-[60%] opacity-30 blur-[70px]" style={{ background: 'var(--theme-highlight-soft)' }} />
      </div>
      <svg className="absolute inset-x-0 bottom-0 h-28 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="url(#dividerGradient)"
          fillOpacity="0.75"
          d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,122.7C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
        <defs>
          <linearGradient id="dividerGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity="0.45" />
            <stop offset="50%" stopColor="var(--theme-secondary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--theme-highlight)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
