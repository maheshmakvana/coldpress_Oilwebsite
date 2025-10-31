const curatedThemes = [
  {
    id: 'golden-sesame-press',
    name: 'Golden Sesame Press',
    hues: { base: 42, accent: 28, tertiary: 18 },
    variance: { base: 8, accent: 18, tertiary: 16 },
  },
  {
    id: 'sunlit-olive-grove',
    name: 'Sunlit Olive Grove',
    hues: { base: 86, accent: 52, tertiary: 32 },
    variance: { base: 6, accent: 16, tertiary: 20 },
  },
  {
    id: 'verdant-basil-fusion',
    name: 'Verdant Basil Fusion',
    hues: { base: 128, accent: 92, tertiary: 46 },
    variance: { base: 10, accent: 18, tertiary: 22 },
  },
  {
    id: 'ruby-pomegranate-drizzle',
    name: 'Ruby Pomegranate Drizzle',
    hues: { base: 348, accent: 12, tertiary: 312 },
    variance: { base: 12, accent: 16, tertiary: 18 },
  },
  {
    id: 'citrus-press-sunrise',
    name: 'Citrus Press Sunrise',
    hues: { base: 24, accent: 48, tertiary: 356 },
    variance: { base: 10, accent: 18, tertiary: 14 },
  },
  {
    id: 'almond-blossom-silk',
    name: 'Almond Blossom Silk',
    hues: { base: 18, accent: 336, tertiary: 32 },
    variance: { base: 12, accent: 16, tertiary: 18 },
  },
  {
    id: 'midnight-walnut-reserve',
    name: 'Midnight Walnut Reserve',
    hues: { base: 208, accent: 220, tertiary: 178 },
    variance: { base: 8, accent: 16, tertiary: 14 },
  },
  {
    id: 'avocado-orchard-mist',
    name: 'Avocado Orchard Mist',
    hues: { base: 96, accent: 132, tertiary: 68 },
    variance: { base: 10, accent: 18, tertiary: 18 },
  },
  {
    id: 'peppery-arugula-burst',
    name: 'Peppery Arugula Burst',
    hues: { base: 68, accent: 18, tertiary: 192 },
    variance: { base: 12, accent: 20, tertiary: 16 },
  },
];

const THEME_COUNT = curatedThemes.length;

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function stringToSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function buildCssVars({ baseHue, accentHue, tertiaryHue, rand }) {
  const backgroundLightness = clamp(90 + rand() * 6, 88, 97);
  const surfaceLightness = clamp(backgroundLightness - (2 + rand() * 4), 82, 95);
  const surfaceAltLightness = clamp(surfaceLightness - (3 + rand() * 3), 75, 92);
  const primaryLightness = clamp(36 + rand() * 12, 28, 48);
  const primarySat = clamp(45 + rand() * 18, 40, 68);
  const secondaryLightness = clamp(primaryLightness + 8 + rand() * 8, 38, 60);
  const secondarySat = clamp(50 + rand() * 20, 42, 78);
  const tertiaryLightness = clamp(primaryLightness - 6 + rand() * 6, 26, 45);
  const tertiarySat = clamp(primarySat - 10 + rand() * 10, 35, 65);

  const highlightHue = (accentHue + 30 + rand() * 20) % 360;
  const highlightLightness = clamp(48 + rand() * 10, 45, 62);
  const highlightSat = clamp(65 + rand() * 20, 55, 88);

  const textStrong = `hsl(${baseHue} ${clamp(primarySat - 10, 25, 55)}% ${clamp(primaryLightness - 18, 10, 24)}%)`;
  const text = `hsl(${baseHue} ${clamp(primarySat - 18, 18, 45)}% ${clamp(primaryLightness - 6, 20, 32)}%)`;
  const textMuted = `hsl(${baseHue} ${clamp(primarySat - 25, 10, 38)}% ${clamp(primaryLightness + 8, 32, 48)}%)`;

  const background = `hsl(${baseHue} ${clamp(primarySat - 25, 12, 30)}% ${backgroundLightness}%)`;
  const surface = `hsl(${baseHue} ${clamp(primarySat - 20, 15, 35)}% ${surfaceLightness}%)`;
  const surfaceAlt = `hsl(${baseHue} ${clamp(primarySat - 18, 12, 30)}% ${surfaceAltLightness}%)`;
  const surfaceStrong = `hsl(${baseHue} ${clamp(primarySat - 15, 18, 40)}% ${clamp(surfaceAltLightness - 4, 68, 88)}%)`;

  const primary = `hsl(${baseHue} ${primarySat}% ${primaryLightness}%)`;
  const primaryStrong = `hsl(${baseHue} ${primarySat}% ${clamp(primaryLightness - 8, 18, 40)}%)`;
  const primarySoft = `hsla(${baseHue}, ${primarySat}%, ${primaryLightness}%, 0.15)`;

  const secondary = `hsl(${accentHue} ${secondarySat}% ${secondaryLightness}%)`;
  const secondaryStrong = `hsl(${accentHue} ${secondarySat}% ${clamp(secondaryLightness - 8, 30, 48)}%)`;

  const tertiary = `hsl(${tertiaryHue} ${tertiarySat}% ${tertiaryLightness}%)`;
  const tertiaryStrong = `hsl(${tertiaryHue} ${tertiarySat}% ${clamp(tertiaryLightness - 6, 18, 38)}%)`;

  const highlight = `hsl(${highlightHue} ${highlightSat}% ${highlightLightness}%)`;
  const highlightSoft = `hsla(${highlightHue}, ${highlightSat}%, ${highlightLightness}%, 0.25)`;

  const gradientSoft = `linear-gradient(135deg, hsla(${baseHue}, ${primarySat}%, ${surfaceLightness}%, 0.85) 0%, hsla(${accentHue}, ${secondarySat}%, ${secondaryLightness}%, 0.45) 100%)`;
  const gradientStrong = `linear-gradient(135deg, hsla(${baseHue}, ${primarySat}%, ${primaryLightness}%, 0.95) 0%, hsla(${accentHue}, ${secondarySat}%, ${secondaryLightness}%, 0.85) 100%)`;

  const glowFrom = `hsla(${baseHue}, ${primarySat}%, ${primaryLightness}%, 0.18)`;
  const glowTo = `hsla(${accentHue}, ${secondarySat}%, ${secondaryLightness}%, 0.16)`;

  const borderSoft = `hsla(${baseHue}, ${clamp(primarySat - 25, 12, 32)}%, ${clamp(primaryLightness + 24, 48, 72)}%, 0.35)`;
  const borderStrong = `hsla(${baseHue}, ${clamp(primarySat - 18, 15, 42)}%, ${clamp(primaryLightness + 12, 32, 55)}%, 0.55)`;
  const cardShadow = `hsla(${baseHue}, ${primarySat}%, ${clamp(primaryLightness - 14, 16, 30)}%, 0.28)`;

  return {
    '--background': background,
    '--foreground': textStrong,
    '--card': surface,
    '--card-foreground': textStrong,
    '--popover': surface,
    '--popover-foreground': textStrong,
    '--primary': primary,
    '--primary-foreground': '#ffffff',
    '--secondary': secondary,
    '--secondary-foreground': textStrong,
    '--muted': surfaceAlt,
    '--muted-foreground': textMuted,
    '--accent': secondary,
    '--accent-foreground': '#ffffff',
    '--destructive': `hsl(${(accentHue + 340) % 360} 70% 48%)`,
    '--destructive-foreground': '#ffffff',
    '--border': borderSoft,
    '--input': borderSoft,
    '--ring': primary,
    '--chart-1': primary,
    '--chart-2': secondary,
    '--chart-3': highlight,
    '--chart-4': tertiary,
    '--chart-5': highlight,
    '--radius': '0.75rem',
    '--theme-background': background,
    '--theme-surface': surface,
    '--theme-surface-alt': surfaceAlt,
    '--theme-surface-strong': surfaceStrong,
    '--theme-primary': primary,
    '--theme-primary-strong': primaryStrong,
    '--theme-primary-soft': primarySoft,
    '--theme-secondary': secondary,
    '--theme-secondary-strong': secondaryStrong,
    '--theme-tertiary': tertiary,
    '--theme-tertiary-strong': tertiaryStrong,
    '--theme-highlight': highlight,
    '--theme-highlight-soft': highlightSoft,
    '--theme-text-strong': textStrong,
    '--theme-text': text,
    '--theme-text-muted': textMuted,
    '--theme-border-soft': borderSoft,
    '--theme-border-strong': borderStrong,
    '--theme-card-shadow': cardShadow,
    '--theme-glow-from': glowFrom,
    '--theme-glow-to': glowTo,
    '--theme-gradient-soft': gradientSoft,
    '--theme-gradient-strong': gradientStrong,
    '--theme-glass': `hsla(${baseHue}, ${primarySat}%, ${surfaceLightness}%, 0.68)`,
    '--theme-glass-strong': `hsla(${baseHue}, ${primarySat}%, ${surfaceLightness}%, 0.85)`,
    '--theme-divider': `linear-gradient(120deg, hsla(${baseHue}, ${primarySat}%, ${primaryLightness}%, 0.12), hsla(${accentHue}, ${secondarySat}%, ${secondaryLightness}%, 0.08))`,
    '--theme-ripple': `linear-gradient(120deg, hsla(${baseHue}, ${primarySat}%, ${primaryLightness}%, 0.2), hsla(${accentHue}, ${secondarySat}%, ${secondaryLightness}%, 0.2))`,
  };
}

function adjustHue(base, spread, rand) {
  if (!spread) return ((base % 360) + 360) % 360;
  const deviation = (rand() - 0.5) * spread;
  return ((base + deviation) % 360 + 360) % 360;
}

function buildCuratedTheme(themeDef, seedString) {
  const baseSeed = stringToSeed(`${seedString}-${themeDef.id}`);
  const hueRand = mulberry32(baseSeed);
  const styleRand = mulberry32(baseSeed ^ 0x9e3779b9);

  const baseHue = adjustHue(themeDef.hues.base, themeDef.variance.base, hueRand);
  const accentHue = adjustHue(themeDef.hues.accent, themeDef.variance.accent, hueRand);
  const tertiaryHue = adjustHue(themeDef.hues.tertiary, themeDef.variance.tertiary, hueRand);

  const cssVars = buildCssVars({ baseHue, accentHue, tertiaryHue, rand: styleRand });

  return {
    id: themeDef.id,
    name: themeDef.name,
    cssVars,
    preview: {
      primary: cssVars['--theme-primary'],
      secondary: cssVars['--theme-secondary'],
      background: cssVars['--theme-background'],
    },
  };
}

export function generateThemes({ seedString = 'golden-harvest', count = THEME_COUNT } = {}) {
  const limit = Math.min(Math.max(count, 1), THEME_COUNT);
  return curatedThemes.slice(0, limit).map((theme) => buildCuratedTheme(theme, seedString));
}

export function getDefaultThemeIndex(themeCount, defaultFromEnv) {
  if (defaultFromEnv !== undefined) {
    const parsed = Number.parseInt(defaultFromEnv, 10);
    if (!Number.isNaN(parsed) && parsed >= 0 && parsed < themeCount) {
      return parsed;
    }
  }
  return 0;
}

export { THEME_COUNT };
