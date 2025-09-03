# Copilot Instructions for covid19Dasboard

## Project Overview
This is a React application built with Vite, focused on displaying COVID-19 data for Indian states. The architecture is simple and modular, with all source code in the `src/` directory. The main entry point is `src/App.jsx`, which fetches data from an external API and renders a list of states. Routing is set up but not yet utilized in the main app.

## Key Files & Structure
- `src/App.jsx`: Main component, fetches COVID-19 data and displays state names.
- `src/main.jsx` and `src/index.js`: Entrypoints for rendering the React app. `index.js` uses `BrowserRouter` (from `react-router-dom`), but routing is not yet implemented in components.
- `src/statesdata/`: Intended for state-specific components or data, currently empty except for placeholder files.
- `public/`: Static assets.
- `vite.config.js`: Vite configuration, uses `@vitejs/plugin-react`.
- `eslint.config.js`: ESLint setup with recommended JS, React Hooks, and React Refresh rules. Ignores `dist/`.

## Data Flow & API Integration
- Data is fetched in `App.jsx` from `https://apis.ccbp.in/covid19-state-wise-data` using `fetch` inside a `useEffect` hook. The fetched data is currently only logged to the console.
- The list of states is hardcoded in `App.jsx` as `statesList`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (runs Vite)
- **Build:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint with custom config)

## Project-Specific Conventions
- All React components use functional style and hooks.
- State codes and names are managed in a local array, not fetched from the API.
- ESLint is configured to ignore unused variables that start with a capital letter or underscore (see `varsIgnorePattern`).
- No TypeScript or test setup is present.
- Routing is set up in `index.js` but not used in components yet.

## Integration Points & External Dependencies
- **React 19** and **React DOM 19**
- **Vite** for build and dev server
- **@vitejs/plugin-react** for React integration
- **ESLint** with React Hooks and React Refresh plugins
- **react-router-dom** is imported but not used in components

## Patterns & Examples
- Data fetching is done via `fetch` in `useEffect` (see `App.jsx`).
- Main rendering is done in `main.jsx` and/or `index.js` (both target `#root`).
- All source code is in `src/`, with assets in `src/assets/` and planned state-specific code in `src/statesdata/`.

## Recommendations for AI Agents
- When adding new features, follow the functional component and hooks pattern.
- Place new components in `src/` or organize by feature in subfolders.
- Use the provided ESLint config for code style and error checking.
- Reference `App.jsx` for API integration and data flow patterns.
- If implementing routing, use `react-router-dom` as set up in `index.js`.

---
_If any section is unclear or missing, please provide feedback for further refinement._
