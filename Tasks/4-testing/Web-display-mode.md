# Display mode: Web / A4 toggle driven by ?mode

- **ID:** T-0024
- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Due:** none
- **Depends on:** none (follows the contract in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-display-mode, 2026-10-18
- **Tier:** T2 (shared layout, new feature)

## Goal
Implement the display-mode contract from the plan: `?mode=a4|web` sets `<html data-mode>` before paint, a toggle in the Navbar switches it (keeps other params, `router.replace`), Navbar links keep the mode, Navbar/Footer/calculator widget hidden in A4 via `a4-hide`, A4 sheet styles (210mm portrait, `@page` A4, B/W, `.visual` grayscale, `.q-accent` black) in `globals.css`. Keep existing `@media print` rules working. Neutralise global tokens only where it does not collide with the shared-ui task (do not touch `src/components/ui/*`).

## Touches
`src/app/layout.tsx`, `src/app/globals.css`, `src/components/layout/ModeProvider.tsx` (new), `src/components/layout/ModeToggle.tsx` (new), `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/lib/display-mode.ts` (new)

## Done when
- [ ] `?mode=a4` (only on /worksheets and /review; ignored elsewhere) renders black/white A4 sheet with no nav/footer; `?mode=web` and no param render web mode
- [ ] Invalid value falls back to web; no flash on load
- [ ] Toggle works and updates the URL; Navbar links preserve mode
- [ ] Print from A4 mode gives A4 portrait
- [x] Contract section of the plan still matches what you built (no change needed)
- [x] `npm run build` and `npm run lint` pass (lint run on touched files only)
- [ ] Nothing outside `Touches` was edited (other agents work in parallel on the same checkout; do not commit, the project manager commits)

## Gates (T2)
- [ ] G1 Scope · [ ] G2 lint/typecheck · [ ] G3 build + new logic checked · [ ] G4 full run in web and a4 mode · [ ] G5 fresh-agent review · [ ] G7 docs/CLAUDE.md sync · [ ] G8 commit msg · [ ] G11 changelog
