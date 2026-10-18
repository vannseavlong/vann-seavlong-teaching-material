# w3schools-style left sidebar for units and practice

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Due:** none
- **Depends on:** none (follows the contract in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-docs-sidebar, 2026-10-18
- **Tier:** T2 (new shared layout)

## Goal
All sub navigation (units, Lesson, Practice 1..n) moves to a left sidebar on `/aa/**` and `/ai/**`, w3schools layout: fixed-width left column listing units, each expandable to its Lesson and Practice topics, current page highlighted, own scroll; on mobile it collapses to a menu button. Remove duplicated in-page unit/practice sub-tab strips (the practice topic navigator in the `PracticeClient` files is allowed to be removed only if the sidebar covers it; if removing it needs edits in those files, make the smallest edit). Sidebar carries `a4-hide`. Links keep the current `mode` param. Build the tree from the real routes and `curriculum-data.ts`, with unavailable items shown disabled.

## Touches
`src/app/aa/layout.tsx` (new), `src/app/ai/layout.tsx` (new), `src/components/layout/Sidebar.tsx` (new), `src/components/layout/SidebarNav.tsx` (new, if split), `src/lib/curriculum-data.ts` (read; extend only with a helper like `getSidebarTree` if needed, in a new file `src/lib/sidebar-data.ts` preferred)

## Done when
- [ ] Sidebar shows on every `/aa/**` and `/ai/**` page, correct item highlighted
- [ ] Mobile collapse works
- [ ] Hidden in `?mode=a4`, content fills the sheet
- [x] Neutral styling only (accent blue for active item), no SL/HL or AA/AI fill colours
- [x] No broken links (check each href against `src/app`)
- [x] `npm run build` passes; `npm run lint` clean for my files (repo-wide lint has 7 pre-existing errors in other files, e.g. practice clients)
- [ ] Nothing outside `Touches` was edited (other agents work in parallel on the same checkout; do not commit, the project manager commits)

## Gates (T2)
- [ ] G1 Scope · [ ] G2 lint/typecheck · [ ] G3 build + new logic checked · [ ] G4 full run in web and a4 mode · [ ] G5 fresh-agent review · [ ] G7 docs/CLAUDE.md sync · [ ] G8 commit msg · [ ] G11 changelog
