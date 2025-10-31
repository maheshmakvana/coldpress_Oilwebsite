import React from 'react';
import { mockGalleryImages } from '../mock';

export const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-[var(--theme-surface-alt)] py-24">
      <div className="absolute inset-x-0 -top-20 h-40 bg-[var(--theme-divider)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] shadow-md">
            Visual Storyboard
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Luminescent Cold-Press Moments
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--theme-text)]">
            Hover through the atelier, from sunlit drying patios to glass bottle finishes. Every image is a chapter of craft.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {mockGalleryImages.map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-[2.25rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)] ${
                index % 3 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-[-120%] w-1/3 skew-x-12 bg-white/40 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
