import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialVoices } from '../mock';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-[var(--theme-background)] py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-[var(--theme-divider)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[var(--theme-divider)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/3 h-48 bg-[var(--theme-gradient-soft)] blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-muted)] shadow">
            Trusted Voices
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Revered by Chefs, Farmers & Nutritionists
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--theme-text)]">
            Every pour carries the trust of experts who demand purity, provenance, and palpable flavor.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {testimonialVoices.map((voice) => (
            <article
              key={voice.name}
              className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-[2.5rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-8 text-left shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)]"
            >
              <Quote className="h-10 w-10 text-[var(--theme-highlight)]" />
              <p className="flex-1 text-lg leading-relaxed text-[var(--theme-text)]">“{voice.quote}”</p>
              <div className="flex items-center gap-4">
                <img src={voice.avatar} alt={voice.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="text-lg font-semibold text-[var(--theme-text-strong)]">{voice.name}</p>
                  <p className="text-sm uppercase tracking-wide text-[var(--theme-text-muted)]">{voice.role}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-12 -top-10 h-24 w-24 rounded-full blur-3xl" style={{ background: 'var(--theme-highlight-soft)' }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
