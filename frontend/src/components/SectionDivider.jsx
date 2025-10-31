import React, { useEffect, useMemo, useRef } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const SectionDivider = ({ flipped = false }) => {
  const containerRef = useRef(null);
  const layersRef = useRef([]);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return true;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') {
      return undefined;
    }

    let frame = null;

    const updateParallax = () => {
      frame = null;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      const centerOffset = viewportHeight / 2 - (rect.top + rect.height / 2);
      const progress = clamp(centerOffset / viewportHeight, -1, 1);

      layersRef.current.forEach((layer) => {
        if (!layer) return;
        const speed = Number.parseFloat(layer.dataset.speed || '0');
        const offset = progress * speed * rect.height;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    const requestUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [prefersReducedMotion]);

  const setLayerRef = (index) => (element) => {
    layersRef.current[index] = element;
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-28 w-full overflow-hidden ${flipped ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--theme-background)]" />
      <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2">
        <div
          ref={setLayerRef(0)}
          data-speed="0.22"
          className="absolute left-1/3 top-1/2 h-48 w-64 -translate-y-1/2 -rotate-6 rounded-[45%] blur-3xl transition-transform duration-[20ms] will-change-transform"
          style={{ background: 'var(--theme-gradient-soft)' }}
        />
        <div
          ref={setLayerRef(1)}
          data-speed="0.35"
          className="absolute left-1/2 top-1/2 h-40 w-80 -translate-y-1/2 rotate-6 rounded-[50%] opacity-60 blur-2xl transition-transform duration-[20ms] will-change-transform"
          style={{ background: 'var(--theme-gradient-strong)' }}
        />
        <div
          ref={setLayerRef(2)}
          data-speed="0.28"
          className="absolute right-1/4 top-1/2 h-52 w-40 -translate-y-1/2 rounded-[60%] opacity-30 blur-[70px] transition-transform duration-[20ms] will-change-transform"
          style={{ background: 'var(--theme-highlight-soft)' }}
        />
      </div>
      <svg
        ref={setLayerRef(3)}
        data-speed="0.18"
        className="absolute inset-x-0 bottom-0 h-28 w-full transition-transform duration-[20ms] will-change-transform"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
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
