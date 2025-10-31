import React from 'react';
import { ArrowRight, Droplets, Sprout, Sun, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { mockBrandInfo } from '../mock';

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--theme-background)] pb-32 pt-36">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-60" style={{ background: 'var(--theme-gradient-soft)' }} />
        <div className="absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-50" style={{ background: 'var(--theme-gradient-strong)' }} />
        <div className="absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-[var(--theme-divider)] opacity-80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-3 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--theme-text-muted)] shadow">
            Cold-Pressed Heritage
          </span>
          <h1 className="text-4xl font-bold leading-tight text-[var(--theme-text-strong)] md:text-6xl">{mockBrandInfo.name}</h1>
          <p className="max-w-xl text-lg text-[var(--theme-text)]">{mockBrandInfo.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="group relative overflow-hidden bg-[var(--theme-primary)] px-8 py-6 text-white shadow-xl shadow-[var(--theme-card-shadow)] transition-transform duration-300 hover:scale-105 hover:bg-[var(--theme-primary-strong)]"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em]">
                Explore Oils
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="pointer-events-none absolute inset-0 bg-[var(--theme-gradient-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-[var(--theme-primary)] px-8 py-6 text-[var(--theme-primary)] transition-colors duration-300 hover:bg-[var(--theme-primary)] hover:text-white"
            >
              Our Method
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-6 shadow-lg shadow-[var(--theme-card-shadow)]">
              <Sprout className="mb-4 h-6 w-6 text-[var(--theme-primary)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">Organic Seeds</p>
              <p className="mt-2 text-xl font-semibold text-[var(--theme-text-strong)]">100% Traceable</p>
            </div>
            <div className="rounded-3xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-6 shadow-lg shadow-[var(--theme-card-shadow)]">
              <Sun className="mb-4 h-6 w-6 text-[var(--theme-secondary)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">Press Temperature</p>
              <p className="mt-2 text-xl font-semibold text-[var(--theme-text-strong)]">Under 45°C</p>
            </div>
            <div className="rounded-3xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-6 shadow-lg shadow-[var(--theme-card-shadow)]">
              <Droplets className="mb-4 h-6 w-6 text-[var(--theme-highlight)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">Nutrient Density</p>
              <p className="mt-2 text-xl font-semibold text-[var(--theme-text-strong)]">Full Spectrum</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col gap-6">
          <div className="absolute -left-6 top-10 hidden h-24 w-24 items-center justify-center rounded-full bg-[var(--theme-primary-soft)] text-[var(--theme-primary)] shadow-lg shadow-[var(--theme-card-shadow)] sm:flex">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {mockBrandInfo.heroImages.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-[2.5rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] shadow-2xl shadow-[var(--theme-card-shadow)] ${index === 0 ? 'sm:row-span-2' : ''}`}
              >
                <img src={image} alt={`Harvest ${index + 1}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {index === 0 ? 'Stone Mill Press' : 'Sunlit Bottling'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
