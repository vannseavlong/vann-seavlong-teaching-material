# Multi-curriculum: learning home and moved AA vs AI guide

- **ID:** T-0071
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · replaces the homepage route
- **Depends on:** T-0067, T-0068
- **Touches:** src/app/page.tsx, src/app/ib/aa-vs-ai/page.tsx, src/components/home-learn/**
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Replace the homepage with a simple learning home (curriculum picker, courses by level, recently added). Move the AA vs AI guide to `/ib/aa-vs-ai` using the existing `src/components/home/*` sections unchanged.

## Done when
- [ ] Curriculum picker chips; choice saved in `localStorage` inside try/catch; page works with storage blocked
- [ ] Courses for the chosen curriculum grouped by level, each row links to the course `href`
- [ ] "Recently added" shows the 6 newest resources by `addedOn`
- [ ] IB block links to `/ib/aa-vs-ai`; that page renders the 9 existing sections and has its own metadata
- [ ] Server-rendered first paint shows all curricula (no blank state before JS)
- [ ] Text follows AGENTS.md content rules (no filler, no em-dash)
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
`/` on desktop and phone, switching curriculum, reload keeps the choice, `/ib/aa-vs-ai`.

## Feedback
