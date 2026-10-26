# AI Unit 3 lesson: scaffold

- **ID:** T-0033
- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-26 / 2026-10-26
- **Due:** none
- **Tier:** T2 · new route, edits shared data file
- **Depends on:** none
- **Touches:** src/app/ai/unit-3/lesson/page.tsx, src/app/ai/unit-3/lesson/_sections/*.tsx (helpers re-export, diagrams, 5 stub sections), src/lib/curriculum-data.ts (AI unit 3 Lesson entry only)
- **Plan:** Tasks/_plans/Web-ai-unit3-lesson.md

## Goal
Create the route and structure: LessonHero (breadcrumb, Unit 3, SL tag, title Geometry and Trigonometry, topic list), sticky table of contents with the 5 anchors, imports of the 5 stub section files so later tasks edit only their own file, 'Rest of Unit 3' card (HL topics, Coming Soon), placeholder UnitSummary. Add _sections/helpers.tsx re-exporting the generic helpers from unit 1, and _sections/diagrams.tsx with shared SVG primitives (labelled triangle, right-angle mark, axes grid). Check whether the sidebar topic list needs a unit 3 entry; if it needs a shared-file edit, leave a note in Tasks/_inbox/ instead.

## Done when
- [ ] /ai/unit-3/lesson renders hero, TOC and 5 stub sections without errors
- [ ] curriculum-data AI unit 3 Lesson entry is available with href /ai/unit-3/lesson
- [ ] npx tsc --noEmit and eslint pass; npm run build passes (G3 existing tests)
- [ ] Gates T2: G1, G2, G4 (user), G5 review agent, G7 docs (CLAUDE.md progress left to wrap-up), G8, G11
