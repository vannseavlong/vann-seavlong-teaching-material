# Multi-curriculum: route audit, SEO and docs

- **ID:** T-0074
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · cross-cutting check and docs
- **Depends on:** T-0069 to T-0073
- **Touches:** scripts/route-audit.mjs, src/app/sitemap.ts, src/app/robots.ts, CLAUDE.md, README.md, Docs/architecture/content-model.md
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Prove nothing broke: every old URL and every catalog href returns a page; add sitemap and robots; update project docs for the new structure.

## Done when
- [ ] `scripts/route-audit.mjs` (no new deps) lists every route from the pre-migration commit and every catalog href, requests each against `next start`, and reports non-200s; result pasted in this file
- [ ] `sitemap.ts` from the catalog (hidden resources excluded); `robots.ts`; tutor page `noindex`
- [ ] Every new route has `generateMetadata` or `metadata` with a specific title and description
- [ ] KaTeX renders on a sample of each page type (lesson, practice key view, review paper, worksheet)
- [ ] Phone-width check list (360px) recorded for home, browse, course, practice hub, a lesson, a paper
- [ ] CLAUDE.md file tree, Pages and Progress sections updated; "How to add content" links to `Docs/architecture/content-model.md`; README one-liner no longer IB only
- [ ] No existing URL changed; `npm run build` passes
- [ ] Only the Touches files changed

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
