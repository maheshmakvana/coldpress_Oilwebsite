import React, { useMemo, useState } from 'react';
import { Palette, Sparkles, ChevronRight } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { themes, currentThemeIndex, setThemeIndex, currentTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const themePreview = useMemo(() => {
    if (!currentTheme) return null;
    return {
      background: currentTheme.cssVars['--theme-background'],
      primary: currentTheme.cssVars['--theme-primary'],
      secondary: currentTheme.cssVars['--theme-secondary'],
    };
  }, [currentTheme]);

  if (!themes.length) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <div className="relative">
        <button
          className="group flex items-center gap-3 rounded-full px-5 py-3 shadow-xl shadow-black/10 border border-[var(--theme-border-soft)] bg-[var(--theme-glass-strong)] backdrop-blur-xl transition-all hover:shadow-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="relative">
            <div
              className="h-8 w-8 rounded-full border border-white/30 shadow-inner"
              style={{
                background: themePreview ? `linear-gradient(135deg, ${themePreview.primary}, ${themePreview.secondary})` : 'var(--theme-primary)',
              }}
            />
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-[var(--theme-highlight)] animate-pulse" />
          </div>
          <span className="text-sm font-semibold text-[var(--theme-text-strong)]">
            {currentTheme?.name ?? 'Theme'}
          </span>
          <ChevronRight
            className={`h-4 w-4 text-[var(--theme-text-muted)] transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute bottom-14 right-0 w-[280px] max-h-[60vh] overflow-y-auto rounded-3xl border border-[var(--theme-border-strong)] bg-[var(--theme-glass-strong)] backdrop-blur-2xl shadow-2xl p-4 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--theme-text-muted)]">
              <Palette className="h-4 w-4" /> Choose a palette
            </div>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme, index) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setThemeIndex(index);
                    setIsOpen(false);
                  }}
                  className={`group flex flex-col items-start gap-2 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    index === currentThemeIndex
                      ? 'border-[var(--theme-primary)] shadow-lg'
                      : 'border-[var(--theme-border-soft)] shadow-none'
                  }`}
                  style={{
                    background: theme.cssVars['--theme-gradient-soft'],
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-white drop-shadow-sm">
                    {theme.name}
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span
                      className="h-8 w-8 rounded-full border border-white/40 shadow-inner"
                      style={{ background: theme.cssVars['--theme-primary'] }}
                    />
                    <span
                      className="h-8 w-8 rounded-full border border-white/40 shadow-inner"
                      style={{ background: theme.cssVars['--theme-secondary'] }}
                    />
                    <span
                      className="h-8 w-8 rounded-full border border-white/40 shadow-inner"
                      style={{ background: theme.cssVars['--theme-background'] }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
