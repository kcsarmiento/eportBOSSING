# ePortBOSSING — Agent Guide

## Stack

- **React 19** + **Vite 8** (plain JS, `.jsx` only, no TypeScript)
- **Tailwind CSS 3** (`darkMode: 'class'`, CSS custom properties, **no `dark:` prefix**)
- **React Router v7** — single-page app with anchor sections
- **Framer Motion** — always alias at top: `const MotionTag = motion.tag`
- **Lucide React** for icons
- Hosted on **Vercel** with SPA rewrites

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at `127.0.0.1:5173` (strict port) |
| `npm run build` | Outputs to `dist/` |
| `npm run lint` | ESLint only |
| `npm run preview` | Preview production build |

No test framework or typecheck step.

## Architecture

All content lives in `src/pages/HomePage.jsx`. `SiteLayout` renders via `<Outlet />` with glassmorphism header, footer, dark-mode toggle, skip-to-main link, and scrollspy.

Anchor sections: `#home`, `#course-expectations`, `#about`, `#c508`, `#outputs`, `#contact`.

Teal/cyan accent scheme. Dark mode defaults to dark, persisted in localStorage.
