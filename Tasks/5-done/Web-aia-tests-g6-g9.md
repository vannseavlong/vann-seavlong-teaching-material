# AIA Grade 6 and Grade 9 Mathematics tests

- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Tier:** T2 · new route plus a small change to the shared review-paper renderer
- **Touches:** src/lib/aia-tests/, src/app/review/aia/[slug]/page.tsx, src/content/aia/index.ts, src/components/review/DataPaper.tsx, src/components/review/PaperKit.tsx, src/lib/ai-review-papers/types.ts

## Goal
First AIA materials: one mixed-topics test each for Grade 6 (no calculator, 60 min, 61 marks) and Grade 9 (calculator, 75 min, 69 marks), with worked answers, using the existing review-paper renderer.

## Done when
- [x] `PaperFrame` (optional) on the paper type lets non-IB papers set header text, instructions and back link; IB AI papers render unchanged
- [x] Tests at /review/aia/g6-test-1 and /review/aia/g9-test-1, listed on the AIA course pages, /practice and search
- [x] AIA Grade 6 and Grade 9 courses set to available
- [x] Every answer verified numerically; no em-dash; `npm run build` passes
- [x] User checks both tests (web, A4 mode, Export PDF Q and Q&A)

## Feedback
- 2026-11-16: approved by owner, pushed to main.
