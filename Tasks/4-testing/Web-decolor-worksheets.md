# Neutral design for Worksheets

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Due:** none
- **Depends on:** none (follows the contract in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-decolor-worksheets, 2026-10-18
- **Tier:** T1 (visual only)

## Goal
Apply the neutral palette to the worksheets index and the three worksheet pages. Colour stays only on graphs, diagrams, figures (wrap in class `visual`) and items inside exercise questions (class `q-accent`). Remove coloured section banners, tags, tinted boxes, gradient headers, themed (orange physics, etc.) chrome. Make each page look right in `a4` mode: add `a4:` overrides only where the generic A4 sheet styles are not enough; keep the Print button working.

## Touches
`src/app/worksheets/**`

## Done when
- [ ] Index and 3 worksheets use only neutral chrome in web mode
- [ ] Visuals keep their colour in web mode and are gray in a4
- [ ] `?mode=a4` is B/W, clean on A4 portrait with sensible page breaks (no question split across pages where avoidable)
- [ ] `npm run build` and `npm run lint` pass
- [ ] Nothing outside `Touches` was edited (other agents work in parallel on the same checkout; do not commit, the project manager commits)

## Gates (T1)
- [ ] G1 Scope · [ ] G2 lint/typecheck · [ ] G3 existing tests (none exist: `npm run build`) · [ ] G4 quick run · [ ] G8 commit msg · [ ] G11 changelog
