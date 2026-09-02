# Portfolio — Aradhana Dubey

A personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS**, designed for
strong SEO and global discoverability. All copy and images are **placeholder/dummy** content and are
wired through a typed content layer so they can be swapped without touching components.

## Status — Milestone 3 complete (polish + SEO)

Feature-complete and deploy-ready:

- Next.js 14 App Router, TypeScript (strict), Tailwind, ESLint + Prettier, Vitest + CI
- Theme system: dark (default) + light, exact palette, no-flash, persisted, reduced-motion aware
- Full Home page + all seven dedicated routes with real content
- Projects tag filtering, statically generated case studies, keyboard-navigable art lightbox,
  validated contact form (react-hook-form + zod)
- **SEO:** `sitemap.ts`, `robots.ts`, per-page titles, OpenGraph + Twitter metadata, JSON-LD
  `Person`, and an auto-generated social image (`app/opengraph-image.tsx` — no static asset needed)
- **Performance:** `next/font` with swap, `next/image` for sketches, SSG throughout
- **Accessibility:** focus trap + focus restore in the lightbox, Escape/route-change handling and
  `aria-current` in the nav, visible focus rings, reduced-motion respected
- **Signature animation:** the pencil-stroke -> code hero accent from the design plan
- 27 tests (UI, sections, filter, lightbox, contact form, content integrity, SEO routes)

### Before you deploy
1. Set `url` in `content/site.ts` to your real domain (drives canonical URLs, sitemap, OG).
2. Fill real content in `content/*.ts`; add hero photo + sketches to `public/`; add `resume.pdf`.
3. Set your Formspree form ID in `components/sections/ContactForm.tsx`.

## Prerequisites

- Node.js >= 18 (20 or 22 recommended)
- npm (or pnpm/yarn — adjust commands accordingly)

> This repo was authored in a sandbox without npm-registry access, so dependencies were **not**
> installed there. Run `npm install` locally first.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command                 | What it does                          |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | Start the dev server                  |
| `npm run build`         | Production build                      |
| `npm start`             | Serve the production build            |
| `npm run lint`          | ESLint (next/core-web-vitals)         |
| `npm run typecheck`     | `tsc --noEmit`                        |
| `npm test`              | Run the test suite once               |
| `npm run test:watch`    | Watch mode                            |
| `npm run test:coverage` | Coverage report                       |

## Project structure

```
app/                 # routes (App Router). page.tsx = Home
  about, experience, projects, projects/[slug], art, ml-journey, contact
components/
  ui/                # Button, Tag, ProgressBar, SectionHeading, SocialLink, ThemeToggle
  layout/            # Navbar, Footer, CursorGlow, Reveal, PagePlaceholder
  sections/          # Hero, StatsBar, ContactCTA  (more in Milestone 2)
content/             # profile.ts — edit your content here
lib/                 # types.ts, cn.ts, theme/ThemeProvider.tsx
__tests__/           # unit + component tests
```

## Editing content & assets

- **Text / links / stats:** edit `content/profile.ts`. Types live in `lib/types.ts`.
- **Hero photo:** drop the image in `public/`, then replace the placeholder block in
  `components/sections/Hero.tsx` with `next/image`.
- **Resume:** add `public/resume.pdf` (the "Download Resume" button points at `/resume.pdf`).

## Theming notes

- The dark palette uses the exact hex codes from the design plan.
- The light palette is a **derived** inverse, since the mockup only specifies dark — tweak the
  `:root` block in `app/globals.css` to taste.
- Fonts use `next/font` (Inter), fetched at build time. If your build environment cannot reach
  Google Fonts, swap to a system font stack in `app/layout.tsx`.
