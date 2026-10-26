# Portfolio — Project Notes

React (Vite) implementation of the "portfolio website.pen" design.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Stack

- Vite 5 + React 18 (JSX, no TypeScript)
- `lucide-react` for icons (sparkles, network, workflow, puzzle)
- `three` + the `Lanyard` component (React Bits) — the hero's 3D swinging badge
  lives in `src/components/Lanyard.jsx` + `Lanyard.css`
- Google Fonts: Fraunces (display) + Inter (body) — loaded in `index.html`
- Design tokens live in `src/index.css` (`:root` CSS custom properties from DESIGN.md)

## Hero badge

The hero renders `<Lanyard />` with badge artwork in `public/card-front.svg` and
`public/card-back.svg` (portrait 640×900, matching the card's 1.6:2.25 aspect).
`three` is heavy (~730 kB minified), so the production bundle is large — split it
with `React.lazy` if the badge is moved below the fold.

## Content

All copy lives in `src/data.js`. The contact email is a placeholder
(`hello@example.com`) — replace `contact.email` with the real address when ready.

## Notes

- `npm audit` reports 2 advisories in `esbuild` (via Vite) affecting the dev server
  only. Fixing requires a breaking Vite major upgrade; left as-is.