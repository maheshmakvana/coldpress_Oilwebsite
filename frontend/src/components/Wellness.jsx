import React from 'react';
import { HeartPulse, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { wellnessHighlights } from '../mock';

const iconMap = {
  heart: HeartPulse,
  shield: ShieldCheck,
  flame: Flame,
  sparkle: Sparkles,
};

export const Wellness = () => {
  return (
    <section id="wellness" className="relative bg-[var(--theme-background)] py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-[var(--theme-divider)]" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full blur-3xl opacity-60" style={{ background: 'var(--theme-gradient-soft)' }} />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full blur-3xl opacity-60" style={{ background: 'var(--theme-highlight-soft)' }} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] shadow-md">
            Nutrition & Rituals
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Wellness that Shines from Seed to Serving
          </h2>
          <p className="text-lg text-[var(--theme-text)]">
            Our cold-pressed oils are more than ingredients—they are daily rituals anchored in Ayurveda and modern nutrition science.
          </p>
          <div className="rounded-[2rem] border border-[var(--theme-border-strong)] bg-[var(--theme-glass-strong)] p-6 backdrop-blur-xl shadow-xl shadow-[var(--theme-card-shadow)]">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--theme-text-muted)]">Signature Blend Spotlight</p>
            <p className="mt-3 text-lg font-semibold text-[var(--theme-primary)]">
              Naturally rich in Vitamin E, lignans, and plant sterols—keeps the glow inside and out.
            </p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
          {wellnessHighlights.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-6 shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-primary-soft)] text-[var(--theme-primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text-strong)]">{item.title}</h3>
                <p className="mt-2 text-[var(--theme-text)] leading-relaxed">{item.description}</p>
                <div className="mt-4 inline-flex items-center rounded-full bg-[var(--theme-highlight-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--theme-highlight)]">
                  {item.metric}
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl" style={{ background: 'var(--theme-highlight-soft)' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
