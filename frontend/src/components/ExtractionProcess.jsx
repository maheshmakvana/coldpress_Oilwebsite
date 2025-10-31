import React from 'react';
import { Wheat, Droplet, Recycle, Package, CheckCircle2 } from 'lucide-react';
import { extractionSteps } from '../mock';

const iconMap = {
  select: Wheat,
  clean: Droplet,
  press: Recycle,
  filter: Droplet,
  bottle: Package,
};

export const ExtractionProcess = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-[var(--theme-surface)] py-24">
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: 'var(--theme-ripple)' }} />
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--theme-primary)] to-transparent lg:block" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row">
        <header className="max-w-md space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface-alt)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-muted)] shadow">
            Slow-Press Rituals
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            The Five-Step Golden Harvest Method
          </h2>
          <p className="text-lg text-[var(--theme-text)]">
            We keep temperatures cool, traceability transparent, and textures silky. Each stage honours traditional wisdom with modern precision.
          </p>
          <div className="rounded-[2rem] border border-[var(--theme-border-strong)] bg-[var(--theme-glass-strong)] p-6 backdrop-blur-xl shadow-lg shadow-[var(--theme-card-shadow)]">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--theme-text-muted)]">Batch Integrity</p>
            <p className="mt-3 text-lg font-semibold text-[var(--theme-primary)]">
              Small 22kg batches are pressed under 45°C to lock aroma, nutrients, and vivid colour.
            </p>
          </div>
        </header>

        <div className="flex-1 space-y-10">
          {extractionSteps.map((step, index) => {
            const Icon = iconMap[step.icon] ?? Droplet;
            return (
              <article
                key={step.step}
                className="group relative grid gap-6 overflow-hidden rounded-[2.25rem] border border-[var(--theme-border-soft)] bg-[var(--theme-background)] p-6 shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)] lg:grid-cols-[160px,1fr] lg:items-center"
              >
                <div className="relative h-40 overflow-hidden rounded-[1.75rem] lg:h-full">
                  <img
                    src={step.media}
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                    Step {step.step}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-primary-soft)] text-[var(--theme-primary)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--theme-text-strong)]">{step.title}</h3>
                  </div>
                  <p className="text-[var(--theme-text)] leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--theme-highlight-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--theme-highlight)]">
                    <CheckCircle2 className="h-4 w-4" />
                    Quality verified
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-12 h-36 w-36 rounded-full blur-3xl" style={{ background: 'var(--theme-highlight-soft)' }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};