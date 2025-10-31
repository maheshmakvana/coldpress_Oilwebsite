import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Sprout, Mountain, Users, TrendingUp } from 'lucide-react';
import { mockGalleryImages } from '../mock';

const features = [
  { icon: Sprout, text: 'Organically Grown' },
  { icon: Mountain, text: 'Traditional Methods' },
  { icon: Users, text: 'Family Tradition' },
  { icon: CheckCircle2, text: 'Chemical-Free' },
];

export const About = () => {
  const [counters, setCounters] = useState({ years: 0, natural: 0, customers: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { years: 50, natural: 100, customers: 10 };

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(targets.years * progress),
        natural: Math.floor(targets.natural * progress),
        customers: Math.floor(targets.customers * progress),
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, duration / steps);
  };

  return (
    <section id="about" ref={sectionRef} className="relative bg-[var(--theme-background)] py-24">
      <div className="absolute inset-0 opacity-[0.05]" style={{ background: 'var(--theme-ripple)' }} />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] lg:items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--theme-text-muted)] shadow">
              Our Heritage
            </span>
            <h2 className="text-4xl font-bold leading-tight text-[var(--theme-text-strong)] md:text-5xl">
              Three Generations of Cold-Press Wisdom
            </h2>
            <p className="text-lg text-[var(--theme-text)]">
              For over five decades we have tended to soil, seeds, and stone mills. Every bottle captures the rhythm of family craft and sustainable farming.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-4 shadow-md shadow-[var(--theme-card-shadow)]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--theme-primary-soft)] text-[var(--theme-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-[var(--theme-text-strong)]">{feature.text}</span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4">
            <CounterBlock label="Years Tradition" value={`${counters.years}+`} icon={TrendingUp} />
            <CounterBlock label="Organic" value={`${counters.natural}%`} icon={CheckCircle2} />
            <CounterBlock label="Satisfied Families" value={`${counters.customers}k+`} icon={Sprout} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {mockGalleryImages.slice(0, 4).map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] shadow-2xl shadow-[var(--theme-card-shadow)] ${index === 0 ? 'sm:col-span-2 h-72' : 'h-56'}`}
            >
              <img src={image} alt={`Gallery ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterBlock = ({ label, value, icon: Icon }) => (
  <div className="rounded-3xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] p-6 text-center shadow-lg shadow-[var(--theme-card-shadow)]">
    <div className="relative inline-flex items-center justify-center">
      <span className="text-4xl font-bold text-[var(--theme-primary)]">{value}</span>
      <Icon className="absolute -right-5 -top-4 h-5 w-5 text-[var(--theme-highlight)]" />
    </div>
    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">{label}</p>
  </div>
);
