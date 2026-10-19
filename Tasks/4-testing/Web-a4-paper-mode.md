# A4 mode: sheet only, header stays web

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 2" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-a4-paper-mode, 2026-10-18
- **Tier:** T2

## Goal
Rework A4 mode per Revision 2: remove global A4 body styling and `a4-hide` from Navbar/Footer; add `.a4-paper` sheet styles scoped to `html[data-mode=a4] .a4-paper` (210mm white sheet on light-gray desk, shadow on screen, black/white, `.visual` grayscale, `.q-accent` black bold, hide `.a4-hide`); print shows only `.a4-paper` with A4 portrait 15mm margins in either mode. Calculator widget may load in both modes again. Toggle visible in a4. Keep A4 limited to /worksheets and /review.

## Touches
`src/app/globals.css`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/ModeProvider.tsx`, `src/components/layout/ModeToggle.tsx`, `src/lib/display-mode.ts`

## Done when
- [x] In `?mode=a4` on /review and /worksheets pages the navbar, toggle and footer look exactly as in web mode
- [x] `.a4-paper` renders as a sheet only in a4; unchanged in web
- [x] Print output contains only the `.a4-paper` content, A4 portrait (logic verified by selector check in browser; real print preview not run)
- [ ] Update the `Contract` text in the plan if anything differs
- [x] `npm run build` passes; nothing outside `Touches` edited; do not commit

## Gates (T2)
- [ ] G1 · [ ] G2 · [ ] G3 build · [ ] G4 run web + a4 + print preview · [ ] G5 fresh-agent review · [ ] G7 docs · [ ] G8 · [ ] G11
