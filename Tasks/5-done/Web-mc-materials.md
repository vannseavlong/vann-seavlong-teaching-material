# Multi-curriculum: practice and assessment hub

- **ID:** T-0072
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · new route, changes two list pages
- **Depends on:** T-0067, T-0068
- **Touches:** src/app/practice/page.tsx, src/app/worksheets/page.tsx, src/app/review/page.tsx, src/components/materials/**
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
One hub at `/practice` that lists every material grouped by kind, with purpose, difficulty, marks, time, calculator and answers shown before opening. `/worksheets` and `/review` become filtered views of the same list component.

## Done when
- [x] Sections in the plan's fixed kind order; empty kinds hidden
- [x] Filter by course and kind in the URL query
- [x] Each row: title, course, kind, difficulty, marks or questions, minutes, calculator, "answers included", "interactive"
- [x] `/worksheets` and `/review` keep their URLs, list the same items as today, and keep the A4 toggle behaviour
- [x] Hidden resources (tutor page) never listed
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
`/practice` with filters, `/worksheets`, `/review` (compare counts with before: 3 worksheets, 36 papers).

## Feedback
Built 2026-11-16: `/practice` groups 63 materials by kind with course/kind filters in the URL; `/worksheets` (3 items) and `/review` (36 papers) list the same items as before, grouped by course and unit, in catalog course order. A4 toggle still shows on both. Hidden tutor page never listed.
Not verified by agent: keyboard-only walk, screen reader, real phone. G5 fresh review pending.
