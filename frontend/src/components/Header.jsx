import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const NAV_LINKS = ['hero', 'process', 'journey', 'products', 'gallery', 'wellness', 'recipes', 'testimonials', 'contact'];

const NAV_LABELS = {
  hero: 'Home',
  process: 'Process',
  journey: 'Journey',
  products: 'Products',
  gallery: 'Gallery',
  wellness: 'Wellness',
  recipes: 'Recipes',
  testimonials: 'Voices',
  contact: 'Contact',
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setScrolled(scrollTop > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-[var(--theme-border-soft)] bg-[var(--theme-glass-strong)] backdrop-blur-xl shadow-lg shadow-[var(--theme-card-shadow)]' : 'bg-transparent'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 overflow-hidden">
        <div className="h-full w-full bg-[var(--theme-primary-soft)]">
          <div
            className="h-full bg-[var(--theme-gradient-strong)] animate-shimmer origin-left"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          className="group flex items-center gap-3"
          onClick={() => scrollToSection('hero')}
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-primary)] text-lg font-bold text-white shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-110">
            <span className="pointer-events-none absolute inset-[-6px] rounded-[22px] border border-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            GH
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[var(--theme-highlight)] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-spin-slow" />
          </span>
          <span className="flex flex-col items-start">
            <span className="text-lg font-semibold uppercase tracking-[0.2em] text-[var(--theme-text-muted)]">Golden Harvest</span>
            <span className="text-sm font-semibold text-[var(--theme-text-strong)]">Cold Press Atelier</span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="group relative text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] transition-all duration-300 hover:text-[var(--theme-primary)]"
            >
              {NAV_LABELS[section] ?? section}
              <span className="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 transform bg-[var(--theme-primary)] transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="relative overflow-hidden bg-[var(--theme-primary)] px-6 py-2 text-white shadow-lg shadow-[var(--theme-card-shadow)] transition-transform duration-300 hover:scale-105 hover:bg-[var(--theme-primary-strong)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em]">
              <ShoppingBag className="h-4 w-4" /> Enquire
            </span>
            <span className="pointer-events-none absolute inset-0 bg-[var(--theme-gradient-soft)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </Button>
        </nav>

        <button
          className="lg:hidden text-[var(--theme-text-strong)]"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden">
          <div className="mx-6 mb-6 space-y-2 rounded-3xl border border-[var(--theme-border-soft)] bg-[var(--theme-glass-strong)] p-6 shadow-xl shadow-[var(--theme-card-shadow)] backdrop-blur-xl">
            {NAV_LINKS.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="flex w-full items-center justify-between rounded-2xl bg-[var(--theme-surface)] px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--theme-background)] hover:text-[var(--theme-primary)]"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {NAV_LABELS[section] ?? section}
                <span className="h-2 w-2 rounded-full bg-[var(--theme-primary)]" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[var(--theme-primary)] py-3 text-white shadow-lg shadow-[var(--theme-card-shadow)] hover:bg-[var(--theme-primary-strong)]"
            >
              <span className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                <ShoppingBag className="h-4 w-4" /> Enquire
              </span>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};