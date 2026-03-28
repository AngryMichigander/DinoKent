# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DinoKent is a static website (dinokent.com) built with Astro 5 that debunks Kent "Dr. Dino" Hovind's claims, credentials, and criminal record using fact-based, well-sourced content.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site (output to `dist/`)
- `npm run preview` — Preview production build locally

## Architecture

**Framework:** Astro 5 (static output) with MDX, Tailwind CSS 3, and `@astrojs/sitemap`.

**Content Collections** (`src/content/config.ts`): Three Zod-validated collections:
- `arguments` — Debunked claims. Schema: `title`, `claim`, `verdict` (enum: false/misleading/unsupported/outdated), `category` (enum: evolution/geology/physics/biology/cosmology/general), `sources[]`, `publishedDate`
- `records` — Legal/credential history. Schema: `title`, `date`, `category` (enum: legal/credentials/conduct), `summary`, `sources[]`
- `quotes` — Direct quotes with rebuttals. Schema: `quote`, `source`, `date?`, `videoUrl?`, `timestamp?`, `rebuttalSummary`, `sources[]`

Content files are MDX in `src/content/{arguments,records,quotes}/`.

**Pages** (`src/pages/`): Index pages (`the-record.astro`, `the-arguments.astro`, `in-his-own-words.astro`, `timeline.astro`) list collection entries and link to individual pages generated under `src/pages/{arguments,records,quotes}/[slug].astro`.

**Layout:** Single `BaseLayout.astro` handles all page chrome — nav (desktop + mobile hamburger), footer, SEO meta, and structured data. Navigation is defined in the `navLinks` array within BaseLayout.

**Theming:** CSS custom properties in `src/styles/global.css` with light/dark mode via `.dark` class on `<html>`. Tailwind's base styles are disabled (`applyBaseStyles: false`). Use semantic color variables (`--color-bg`, `--color-surface`, `--color-text`, `--color-accent`, etc.) rather than hardcoded Tailwind color classes.

## Content Guidelines

- All claims must include `sources` with `label` and valid `url`
- Category values must exactly match the Zod enum values in `src/content/config.ts` — the build will fail on mismatches
- Tone: factual and measured, not mocking
