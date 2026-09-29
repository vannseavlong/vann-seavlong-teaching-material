# IB Math Guide

A teaching website for IB Mathematics, built by **VANN Seavlong**. It helps Grade 11 students choose between the **Analysis & Approaches (AA)** and **Applications & Interpretation (AI)** pathways, then gives them lessons, interactive practice, worksheets and mock papers for the one they pick.

- **Repository:** https://github.com/vannseavlong/vann-seavlong-teaching-material
- **Live site:** `<ADD DEPLOYED URL>` (also set as `NEXT_PUBLIC_SITE_URL`, see below)
- **Status:** In active development. Content is added unit by unit.

## Portfolio showcase entry

Paste this section (or the whole file) into your coding agent when updating the portfolio's project showcase.

### Copy-ready summary

| Field | Value |
|---|---|
| Title | IB Math Guide |
| One-liner | A teaching platform for IB Mathematics AA and AI: pathway guide, lessons, interactive practice with answer keys, worksheets and mock papers. |
| Role | Sole designer and developer; also the content author (teacher) |
| Type | Education / content website |
| Stack | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, KaTeX |
| Links | Repo (above), live site (above) |
| Preview image | Generated at `/opengraph-image` (1200×630). Replace with a real screenshot if preferred. |

### Description (short, about 60 words)

IB Math Guide is a free teaching site I built for my own Grade 11 IB Mathematics students. It starts with an honest AA vs AI decision guide, then leads into per-unit lessons, interactive practice sets with unlockable model answers, printable worksheets and exam-style mock papers. All maths is rendered server-side with KaTeX.

### Highlights (use as bullets)

- Decision guide that compares AA and AI side by side, including SL vs HL, career paths and an FAQ.
- Lesson pages with a consistent structure: key idea, formula boxes, worked examples, then practice with collapsible solutions.
- Interactive practice: students enter answers, finish the set, receive a key, and unlock a side-by-side comparison with model answers.
- Mock paper review pages (Paper 1, 2, 3) and printable worksheets with question and answer export modes.
- Server-rendered KaTeX maths, print-ready styles, keyboard-accessible navigation, generated Open Graph image.

### Problem and approach (for a case-study layout)

- **Problem:** Students pick a maths pathway with little guidance, and study material is scattered across handouts.
- **Approach:** One site where the decision guide leads directly into structured study material, with a fixed content template so new units are quick to add.
- **Design decisions:** Data-driven curriculum pages (`curriculum-data.ts`), reusable lesson and practice conventions, answer keys stored in source rather than generated so they are stable for teachers.

### Instructions for the coding agent

1. Add one project entry to the portfolio using the summary, description and highlights above. Match the portfolio's existing project card and detail-page format; do not invent a new layout.
2. Use the live URL and repo URL above. If the live URL is still the placeholder, leave the link out and tell the user.
3. For the image, use the file returned by `<live site>/opengraph-image`, or a screenshot the user provides. Do not fabricate screenshots or metrics.
4. Do not claim features that are not listed here (no user accounts, no database, no analytics).
5. Keep the tone plain and factual, matching the rest of the portfolio copy.

## Content coverage

| Area | Status |
|---|---|
| AA Unit 1: Algebra | Lesson done; practice for topics 1 to 3 |
| AA Unit 3: Trigonometry | Lesson done |
| AI Unit 1: Number & Algebra | Lesson and first practice set available |
| Mock papers 1, 2, 3 | Review pages available |
| Worksheets | Math area/volume, Grade 10 AA, physics motion |
| Other units | Planned |

## Features and routes

| Route | Purpose |
|---|---|
| `/` | AA vs AI decision guide (9 sections) |
| `/aa`, `/ai` | Curriculum overview per pathway, driven by `src/lib/curriculum-data.ts` |
| `/aa/unit-N/lesson` | Full lesson page for a unit |
| `/aa/unit-N/practice/[id]` | Interactive per-topic practice |
| `/review/paper-1..3` | Mock paper review |
| `/worksheets/*` | Printable worksheets |

## Tech stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- KaTeX for maths (`src/components/ui/Math.tsx`)
- Inter via `next/font`
- Open Graph and Twitter images via `next/og` (`src/app/opengraph-image.tsx`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

### Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for Open Graph and Twitter tags, e.g. `https://your-domain.com`. On Vercel it falls back to the production domain automatically. |

## Project structure

```
src/
├── app/            # Routes, layout, globals.css, opengraph-image.tsx
├── components/
│   ├── ui/         # Card, Hero, Section, HighlightBox, Tag, Math, FAQ...
│   ├── layout/     # Navbar, Footer
│   ├── home/       # Homepage sections
│   └── curriculum/ # Shared curriculum layout
└── lib/            # curriculum-data.ts, site.ts (site metadata)
```

## Adding content

Conventions for lessons, practice sets and curriculum data are documented in [CLAUDE.md](CLAUDE.md).

## Author

VANN Seavlong, IB Mathematics teacher and developer of this site.
