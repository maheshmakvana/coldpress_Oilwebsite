# ColdPress Olive Oil – Developer Guide

## Project Structure

The repository is split into a React front-end (`frontend/`) and a placeholder `backend/` folder. Most of the day-to-day work happens inside `frontend/`.

```
frontend/
  src/            # React components, contexts, hooks, and theme utilities
  public/         # Static assets served by Vite/React
  plugins/        # Optional Netlify health-check helpers
  package.json    # Front-end dependencies and scripts
```

## Getting Started

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. The site runs at [http://localhost:3000](http://localhost:3000). Hot reloading is enabled by default.

## Theme System Overview

The UI now ships with **nine curated cold-pressed oil themes**. Each palette is inspired by a signature infusion—think "Golden Sesame Press" and "Ruby Pomegranate Drizzle"—and is tuned for deep contrast, soft highlights, and refined accent tones.

Themes are delivered through the `ThemeProvider` (`frontend/src/context/ThemeContext.jsx`) and exposed via the `useThemeContext()` hook. Active theme variables are applied to the document root as CSS custom properties, so any component can consume them through standard CSS (e.g. `var(--theme-primary)`).

### Available Themes

| Index | Theme Name |
| --- | --- |
| 0 | Golden Sesame Press |
| 1 | Sunlit Olive Grove |
| 2 | Verdant Basil Fusion |
| 3 | Ruby Pomegranate Drizzle |
| 4 | Citrus Press Sunrise |
| 5 | Almond Blossom Silk |
| 6 | Midnight Walnut Reserve |
| 7 | Avocado Orchard Mist |
| 8 | Peppery Arugula Burst |

### Changing Themes in the UI

* A floating theme switcher button is rendered near the bottom-right corner of the viewport.
* Click the button to expand the panel, preview the available themes, and select a new look.
* Selections are persisted in `localStorage` (`coldpress-theme-index`), so the chosen theme survives refreshes.

### Controlling Themes via Environment Variables

Two environment variables allow you to control the active palette from your deployment settings:

| Variable | Description | Example |
| --- | --- | --- |
| `REACT_APP_DEFAULT_THEME` | Sets the zero-based index (0–8) of the theme that loads on first visit. If omitted or invalid, index `0` is used. | `REACT_APP_DEFAULT_THEME=5` |
| `REACT_APP_THEME_SEED` | Applies subtle hue and saturation variations to the curated lineup. Use any string to create a consistent-but-unique finish for a specific environment. | `REACT_APP_THEME_SEED="sunrise-press"` |

> ℹ️ These variables are read at build/start time. Restart the dev server after editing them.

### Local Development `.env`

Create a `.env` file in `frontend/` to configure the theme defaults:

```bash
cd frontend
cp .env.example .env  # if present, otherwise create manually
```

Sample `.env` content:

```
REACT_APP_DEFAULT_THEME=4
REACT_APP_THEME_SEED=sunrise-press
REACT_APP_VISUAL_EDIT_ASSET_HOST=https://assets.coldpress.dev
```

## Deploy-Time Configuration

When deploying (e.g., Netlify, Vercel), set the same environment variables in the provider’s dashboard so every visitor sees the desired default theme and palette lineup.

## Visual-Edit & Dev-Server Notes

* The optional visual-edit tooling only loads its debug monitor when `REACT_APP_ENABLE_VISUAL_EDITS` is set to `true` **and** `REACT_APP_VISUAL_EDIT_ASSET_HOST` supplies a base URL for the script.
* The development server accepts cross-origin edit requests from localhost/appspot by default. Add additional domains with the comma-separated `COLDPRESS_ALLOWED_ORIGINS` environment variable. You can provide either globs (e.g. `https://*.coldpress.dev`) or explicit regular expressions wrapped in `/slashes/`.

## Additional Notes

* The theme switcher automatically respects environment defaults while still allowing end-users to explore other palettes.
* Removing the theme switcher is as simple as deleting the `<ThemeSwitcher />` component import from `frontend/src/App.js`.
* Section dividers between major content blocks now feature a gentle parallax glide that mirrors the feeling of poured oil. The motion automatically disables when the user prefers reduced motion.

