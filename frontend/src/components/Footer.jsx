import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { mockBrandInfo } from '../mock';

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Mail, label: 'Newsletter' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[var(--theme-surface-strong)] pt-16 pb-10 text-[var(--theme-text)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[var(--theme-divider)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr),repeat(2,minmax(0,1fr))]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-primary)] text-lg font-bold text-white shadow-lg shadow-[var(--theme-card-shadow)]">
                GH
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-muted)]">Golden Harvest</p>
                <p className="text-lg font-semibold text-[var(--theme-text-strong)]">{mockBrandInfo.name}</p>
              </div>
            </div>
            <p className="max-w-md text-[var(--theme-text)]">
              {mockBrandInfo.description}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-background)] text-[var(--theme-primary)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[var(--theme-primary)] hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">Quick Links</h3>
            <ul className="space-y-3 text-[var(--theme-text)]">
              {[
                { label: 'Products', id: 'products' },
                { label: 'Our Process', id: 'process' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-left transition-colors duration-300 hover:text-[var(--theme-primary)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">Visit</h3>
            <div className="space-y-3 text-[var(--theme-text)]">
              <p>{mockBrandInfo.email}</p>
              <p>{mockBrandInfo.phone}</p>
              <p>123 Harvest Lane<br />Oakland, CA 94612</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--theme-border-soft)] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[var(--theme-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} {mockBrandInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors duration-300 hover:text-[var(--theme-primary)]">Privacy Policy</a>
              <a href="#" className="transition-colors duration-300 hover:text-[var(--theme-primary)]">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
