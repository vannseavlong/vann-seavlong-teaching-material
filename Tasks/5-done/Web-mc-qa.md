# Multi-curriculum: route audit, SEO and docs

- **ID:** T-0074
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · cross-cutting check and docs
- **Depends on:** T-0069 to T-0073
- **Touches:** scripts/route-audit.mjs, src/app/sitemap.ts, src/app/robots.ts, CLAUDE.md, README.md, Docs/architecture/content-model.md, src/app/ai/unit-1/tutor/page.tsx (noindex only)
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Prove nothing broke: every old URL and every catalog href returns a page; add sitemap and robots; update project docs for the new structure.

## Done when
- [x] `scripts/route-audit.mjs` (no new deps) lists every route from the pre-migration commit and every catalog href, requests each against `next start`, and reports non-200s; result pasted in this file
- [x] `sitemap.ts` from the catalog (hidden resources excluded); `robots.ts`; tutor page `noindex`
- [x] Every new route has `generateMetadata` or `metadata` with a specific title and description
- [x] KaTeX renders on a sample of each page type (lesson, practice key view, review paper, worksheet)
- [x] Phone-width check list (360px) recorded for home, browse, course, practice hub, a lesson, a paper
- [x] CLAUDE.md file tree, Pages and Progress sections updated; "How to add content" links to `Docs/architecture/content-model.md`; README one-liner no longer IB only
- [x] No existing URL changed; `npm run build` passes
- [x] Only the Touches files changed

## Gates (T2)
- G1 scope: diff only touches the paths above
- G2 `npm run build` and `npm run lint` pass
- G3 Skipped G3 (new tests): no test runner in repo, covered by `assertCatalog()` at build time and the Web-mc-qa route audit
- G4 user test: pages listed under "What to check"
- G5 code review by a fresh agent (not the builder)
- G6 not needed: no auth, data or user input beyond search text and filters
- G7 docs: update `Docs/architecture/content-model.md` if the contract changes
- G8 commit format; G11 changelog after approval

## What to check (user)
The audit table in this file, then a final walk through the site.

## Feedback
Results 2026-11-16 (production build, `next start`):

| Check | Result |
|---|---|
| Route audit (`node scripts/route-audit.mjs http://localhost:4817 c377ce5`) | 88 pages, 75 pre-migration routes, 382 anchor links: 0 non-200, 0 missing anchors |
| Sitemap / robots | 87 URLs; robots disallows `/search` and the tutor page; tutor page `noindex` |
| KaTeX (`katex-error` count) | 0 on AA U1 lesson (613 formulas), AI U3 lesson (369), AA U1 practice 2, review trig-shapes, review paper-2, worksheet math-g10-aa |
| Titles | every new route has a specific title (`/`, browse, practice, reference, search, aa, ai, guide, curricula, courses, worksheets, review) |
| Phone 375px (Playwright) | home, aa, browse, practice, reference, review paper: no horizontal scroll, no console errors |
| Desktop 1280px | same pages, no overflow, no console errors |

Known, not fixed (backlog `Web-mc-wave-2`): lesson bodies scroll sideways at 375px (AA U1 538px, AA U3 693px, AI U1 697px); pre-existing, inside lesson content. KaTeX `newLineInDisplayMode` build warnings come from existing lesson maths.
Not verified: real phone, keyboard-only walk, screen reader, print/PDF export (unchanged code).
Note: `localhost:3000` in `robots.txt` is the dev fallback; production uses `NEXT_PUBLIC_SITE_URL`.
