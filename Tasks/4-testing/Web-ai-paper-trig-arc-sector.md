# AI Unit 3 review papers: Trigonometry and Arc Length and Sector Area

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-27 / 2026-10-27
- **Due:** none
- **Tier:** T2 · edits shared `DataPaper.tsx` and paper `types.ts` (optional `lessonHref` prop); G5 code review skipped, the shared change is one optional prop with the old default kept
- **Depends on:** Web-ai-u3-trigonometry, Web-ai-u3-arc-sector
- **Touches:** src/lib/ai-review-papers/trigonometry.ts, src/lib/ai-review-papers/arcSector.ts, src/lib/ai-review-papers/index.ts, src/lib/ai-review-papers/types.ts, src/components/review/DataPaper.tsx

## Goal
Two exportable Q&A papers at `/review/ai-sl/trigonometry` (38 marks, 42 min) and `/review/ai-sl/arc-sector` (34 marks, 38 min), each with Section A (3 questions) and Section B (one 17-mark question). Answers re-checked numerically with node.

## Done when
- [x] Papers listed on /review and render (HTTP 200), "Revise the lesson" links to /ai/unit-3/lesson#<anchor>
- [x] tsc and eslint pass; no em-dash
- [ ] User checks the questions, mark counts and answers
