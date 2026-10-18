# Move AI Unit 1 revision plan to a tutor-only page

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-19 / 2026-10-19
- **Tier:** T1 · moves one component to a new route, no shared code
- **Touches:** src/app/ai/unit-1/lesson/page.tsx, src/app/ai/unit-1/tutor/page.tsx (new), src/lib/sidebar-data.ts, src/lib/ai-review-papers.ts

## Goal
The seven-session plan is tutor info and should not sit in the middle of the student lesson. It now lives at /ai/unit-1/tutor, is not in the sidebar, and its lesson links point back to /ai/unit-1/lesson#<id>. Fixed the missing space in "Q&A answer sheet". Mock paper lessonAnchor now points to #arithmetic.

## Done when
- [x] tsc passes
- [ ] User checked /ai/unit-1/tutor and the lesson page
