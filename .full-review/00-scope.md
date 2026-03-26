# Review Scope

## Target

Full codebase review of dinokent.com — an Astro 5 static site with MDX content collections, Tailwind CSS, and sitemap generation. Security-focused review.

## Files

### Configuration
- `astro.config.mjs` — Astro config (static output, Tailwind, MDX, sitemap)
- `tailwind.config.mjs` — Tailwind configuration
- `tsconfig.json` — TypeScript config
- `package.json` — Dependencies and scripts

### Content Schema
- `src/content/config.ts` — Zod-validated content collection schemas (arguments, records, quotes)

### Layout & Styles
- `src/layouts/BaseLayout.astro` — Site-wide layout, nav, footer, SEO meta, structured data
- `src/styles/global.css` — CSS custom properties for theming (light/dark mode)

### Pages
- `src/pages/index.astro` — Homepage
- `src/pages/the-record.astro` — Records listing page
- `src/pages/the-arguments.astro` — Arguments listing page
- `src/pages/in-his-own-words.astro` — Quotes listing page
- `src/pages/timeline.astro` — Chronological timeline page
- `src/pages/arguments/[slug].astro` — Individual argument pages
- `src/pages/records/[slug].astro` — Individual record pages
- `src/pages/quotes/[slug].astro` — Individual quote pages

### Content (MDX)
- `src/content/arguments/` — 4 argument rebuttals
- `src/content/records/` — 7 legal/credential records
- `src/content/quotes/` — 3 quotes with rebuttals

## Flags

- Security Focus: **yes**
- Performance Critical: no
- Strict Mode: no
- Framework: Astro 5

## Review Phases

1. Code Quality & Architecture
2. Security & Performance
3. Testing & Documentation
4. Best Practices & Standards
5. Consolidated Report
