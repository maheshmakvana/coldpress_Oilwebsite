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

The UI ships with **33 procedurally generated color themes**. Themes are created from a deterministic seed so the palette lineup stays consistent across builds.

Themes are delivered through the `ThemeProvider` (`src/context/ThemeContext.jsx`) and exposed to components via the `useThemeContext()` hook. Active theme variables are applied to the document root as CSS custom properties, so any component can consume them through standard CSS (e.g. `var(--theme-primary)`).

### Changing Themes in the UI

* A floating theme switcher button is rendered near the bottom-right corner of the viewport.
* Click the button to expand the panel, preview the available themes, and select a new look.
* Selections are persisted in `localStorage` (`coldpress-theme-index`), so the chosen theme survives refreshes.

### Controlling Themes via Environment Variables

Two environment variables allow you to override the automatic defaults:

| Variable | Description | Example |
| --- | --- | --- |
| `REACT_APP_THEME_SEED` | Changes the deterministic seed used to generate the 33-theme lineup. Use any string to reshuffle color palettes while keeping them consistent for all users. | `REACT_APP_THEME_SEED="sunrise-press"` |
| `REACT_APP_DEFAULT_THEME` | Sets the zero-based index (0–32) of the theme that loads on first visit. If omitted or invalid, index `0` is used. | `REACT_APP_DEFAULT_THEME=5` |

> ℹ️ These variables are read at build/start time. Restart the dev server after editing them.

### Local Development `.env`

Create a `.env` file in `frontend/` to configure the theme defaults:

```bash
cd frontend
cp .env.example .env  # if present, otherwise create manually
```

Sample `.env` content:

```
REACT_APP_THEME_SEED=sunrise-press
REACT_APP_DEFAULT_THEME=4
```

## Deploy-Time Configuration

When deploying (e.g., Netlify, Vercel), set the same environment variables in the provider’s dashboard so every visitor sees the desired default theme and palette lineup.

## Additional Notes

* The theme switcher automatically respects environment defaults while still allowing end-users to explore other palettes.
* Removing the theme switcher is as simple as deleting the `<ThemeSwitcher />` component import from `src/App.js`.

