# DinoKent.com

Fact-based, well-sourced debunking of Kent "Dr. Dino" Hovind's claims, credentials, and criminal record.

## Quick Start

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Static build for deployment
npm run preview   # Preview the build locally
```

## Deployment

Built for **Cloudflare Pages** (static output). Connect your repo and set:

- Build command: `npm run build`
- Build output directory: `dist`

## Adding Content

This site uses [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) with MDX. Each content type lives in `src/content/` and has a defined schema in `src/content/config.ts`.

### Add a new argument rebuttal

Create a file in `src/content/arguments/`:

```mdx
---
title: '"The Claim in Quotes"'
claim: The exact claim being rebutted.
verdict: false          # false | misleading | unsupported | outdated
category: evolution     # evolution | geology | physics | biology | cosmology | general
sources:
  - label: "Author — Title, Journal (Year)"
    url: "https://doi.org/..."
publishedDate: 2024-03-01
---

Your rebuttal content in MDX (Markdown + JSX). Use **bold** for emphasis,
bullet lists for evidence, and always cite sources.
```

### Add a new record entry

Create a file in `src/content/records/`:

```mdx
---
title: "Short descriptive title"
date: 2006-11-02
category: legal         # legal | credentials | conduct
summary: "One-sentence summary for the card view."
sources:
  - label: "Court case or document name"
    url: "https://..."
---

Detailed factual description with sources.
```

### Add a new quote with rebuttal

Create a file in `src/content/quotes/`:

```mdx
---
quote: "The exact quote from Hovind."
source: "Where and when he said it"
date: 2003-01-01
videoUrl: "https://youtube.com/watch?v=..."   # optional
timestamp: "12m30s"                            # optional
rebuttalSummary: "One-paragraph summary of why this is wrong."
sources:
  - label: "Source name"
    url: "https://..."
---

Extended rebuttal with full scientific context.
```

## Project Structure

```
src/
├── content/
│   ├── config.ts          # Collection schemas
│   ├── arguments/         # Creationist claim rebuttals
│   ├── records/           # Legal, credential, conduct records
│   └── quotes/            # Direct quotes with rebuttals
├── layouts/
│   └── BaseLayout.astro   # Shared layout (header, footer, nav, dark mode)
└── pages/
    ├── index.astro        # Homepage
    ├── the-record.astro   # Record entries
    ├── the-arguments.astro # Argument rebuttals
    └── in-his-own-words.astro # Quotes
```

## Editorial Standards

- Every factual claim must link to a primary source (court document, peer-reviewed paper, institutional record).
- Use neutral, factual language. This is a reference site, not a rage-blog.
- If you find an error, open an issue.

## Tech Stack

- [Astro](https://astro.build) 4.x — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [MDX](https://mdxjs.com) — Markdown with components
