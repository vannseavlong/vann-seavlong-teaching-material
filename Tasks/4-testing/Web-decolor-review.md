# Neutral design for Review papers

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Due:** none
- **Depends on:** none (follows the contract in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-decolor-review, 2026-10-18
- **Tier:** T1 (visual only)

## Goal
Apply the neutral palette to the review index, papers 1-3, `ai-sl/[slug]`, and the review components. Colour only on graphs/figures (class `visual`) and exercise-question items (class `q-accent`). Make `ExportPdfButton`, `AnswerReveal`, `DataPaper`, `PaperKit` look right in `a4` mode and keep the existing question / Q&A export (`data-print-mode`) working.

## Touches
`src/app/review/**`, `src/components/review/**`

## Done when
- [x] Review index and all papers neutral in web mode (class audit: no purple/navy-hex fills left)
- [ ] `?mode=a4` is B/W A4 portrait, export Question and Q&A still work
- [ ] Answer reveal controls are hidden or sensible in a4
- [x] `npm run build` and `npm run lint` pass (lint run on review paths only)
- [ ] Nothing outside `Touches` was edited (other agents work in parallel on the same checkout; do not commit, the project manager commits)

## Gates (T1)
- [ ] G1 Scope · [x] G2 lint/typecheck · [x] G3 existing tests (none exist: `npm run build`) · [ ] G4 quick run · [ ] G8 commit msg · [ ] G11 changelog
