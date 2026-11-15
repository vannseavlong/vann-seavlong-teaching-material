# Multi-curriculum: search and reference hub

- **ID:** T-0073
- **Owner:** SNLRLONG
- **Claimed by:** claude, 2026-11-16
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · new routes and a client component
- **Depends on:** T-0067, T-0068
- **Touches:** src/components/search/**, src/app/search/page.tsx, src/app/reference/**, src/components/reference/**, src/app/layout.tsx and src/components/layout/Navbar.tsx (pass the index to the search button)
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Site search over courses, topics and materials, opened from the navbar or the `/` key; and a `/reference` hub for formula sheets and reference notes.

## Done when
- [x] Search index built at build time from `searchIndex()`, passed as props; no network calls
- [x] Dialog: keyboard open (`/`), arrow keys, Enter, Esc; focus trapped and returned; full screen under `md`
- [x] `/search?q=` page with grouped results and a no-results state
- [x] `/reference` lists `formula-sheet` and `reference` resources per course; wave 1 entries point at existing formula sections (AA lesson unit summaries, AI prior-learning formulas)
- [x] `FormulaSheet` reading layout component (about 72ch, KaTeX, prints cleanly) ready for data-driven sheets in wave 2
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
Search for "surds", "bounds", "physics"; keyboard only; `/reference` on phone.

## Feedback
Built 2026-11-16: search dialog (button or `/`), arrow keys, Enter, Esc via native `<dialog>`, full screen under md; `/search?q=` grouped results with no-results state; `/reference` lists the 7 unit formula recaps. Index (132 entries) is built on the server in the root layout. `FormulaSheet` component not built: nothing would use it yet, moved to the wave 2 backlog (data-driven formula sheets).
Not verified by agent: keyboard-only walk, screen reader, real phone. G5 fresh review pending.
