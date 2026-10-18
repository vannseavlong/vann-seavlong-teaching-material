# Neutral shared UI components

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Due:** none
- **Depends on:** none (follows the contract in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-neutral-shared-ui, 2026-10-18
- **Tier:** T1 (visual only)

## Goal
Make `Card`, `HighlightBox`, `Tag`, `Section`, `Hero`, `TopicGrid`, `ComparisonTable`, `FAQ` and the home/curriculum pages neutral: keep the API (`variant` props still accepted) but map every variant to the neutral palette plus at most the single accent (variants differ by border/label, not fill colour). Add `a4:` overrides (white bg, black border, no shadow) to the shared primitives so every page using them prints cleanly. Update the `Design System` section of `CLAUDE.md` to match (small edit of its own lines only).

## Touches
`src/components/ui/*` (except `Math.tsx`), `src/components/home/**`, `src/components/curriculum/CurriculumPage.tsx`, `src/app/page.tsx`, `src/app/aa/page.tsx`, `src/app/ai/page.tsx`

## Done when
- [ ] Home, /aa, /ai render neutral in web mode
- [ ] No call-site breakage (build passes, props unchanged)
- [ ] Shared primitives look right in `?mode=a4`
- [ ] CLAUDE.md Design System section updated
- [ ] `npm run build` and `npm run lint` pass
- [ ] Nothing outside `Touches` was edited (other agents work in parallel on the same checkout; do not commit, the project manager commits)

## Gates (T1)
- [ ] G1 Scope · [ ] G2 lint/typecheck · [ ] G3 existing tests (none exist: `npm run build`) · [ ] G4 quick run · [ ] G8 commit msg · [ ] G11 changelog
