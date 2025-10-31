import React from 'react';
import { MapPin, Leaf, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../mock';

export const Journey = () => {
  return (
    <section id="journey" className="relative bg-[var(--theme-background)] py-24 overflow-hidden">
      <div className="absolute inset-x-0 -top-48 h-96 opacity-60 blur-3xl" style={{ background: 'var(--theme-gradient-soft)' }} />
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-[0.08] bg-[var(--theme-gradient-strong)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-6 text-center">
          <span className="mx-auto flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-glass)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--theme-text-muted)] shadow-lg shadow-black/5">
            <Leaf className="h-3.5 w-3.5" /> Farm to Table Promise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            A Harvest Journey Crafted with Intent
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--theme-text)]">
            Follow the golden thread from regenerative farms to your kitchen rituals. Every batch is slow-crafted and traceable.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {journeyMilestones.map((milestone) => (
            <article
              key={milestone.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-3 hover:border-[var(--theme-primary)] hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={milestone.media}
                  alt={milestone.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5" />
                  {milestone.stat}
                </div>
              </div>

              <div className="space-y-4 px-6 py-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text-strong)]">{milestone.title}</h3>
                <p className="text-[var(--theme-text)] leading-relaxed">{milestone.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--theme-primary)]">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified supply chain
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl" style={{ background: 'var(--theme-highlight-soft)' }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
