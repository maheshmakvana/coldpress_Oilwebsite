import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { generateThemes, getDefaultThemeIndex } from '../lib/themeGenerator';

const ThemeContext = createContext({
  themes: [],
  currentThemeIndex: 0,
  setThemeIndex: () => {},
  currentTheme: null,
});

const STORAGE_KEY = 'coldpress-theme-index';

function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.setAttribute('data-active-theme', theme.name);
}

export const ThemeProvider = ({ children }) => {
  const seed = process.env.REACT_APP_THEME_SEED || 'golden-harvest';
  const defaultThemeFromEnv = process.env.REACT_APP_DEFAULT_THEME;

  const themes = useMemo(() => generateThemes({ seedString: seed }), [seed]);

  const [currentThemeIndex, setCurrentThemeIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = Number.parseInt(stored, 10);
        if (!Number.isNaN(parsed) && parsed >= 0 && parsed < themes.length) {
          return parsed;
        }
      }
    }
    return getDefaultThemeIndex(themes.length, defaultThemeFromEnv);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const parsed = Number.parseInt(stored, 10);
      if (!Number.isNaN(parsed) && parsed >= 0 && parsed < themes.length) {
        setCurrentThemeIndex(parsed);
        return;
      }
    }
    setCurrentThemeIndex(getDefaultThemeIndex(themes.length, defaultThemeFromEnv));
  }, [themes.length, defaultThemeFromEnv]);

  useEffect(() => {
    const theme = themes[currentThemeIndex];
    applyTheme(theme);
  }, [themes, currentThemeIndex]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, String(currentThemeIndex));
  }, [currentThemeIndex]);

  const value = useMemo(
    () => ({
      themes,
      currentThemeIndex,
      setThemeIndex: setCurrentThemeIndex,
      currentTheme: themes[currentThemeIndex],
    }),
    [themes, currentThemeIndex]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
