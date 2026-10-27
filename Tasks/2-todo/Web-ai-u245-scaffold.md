# AI Units 2, 4, 5 lesson scaffold

- **ID:** T-0042
- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-28 / 2026-10-28
- **Due:** none
- **Tier:** T2 · new routes, edits shared data
- **Depends on:** none
- **Touches:** src/app/ai/unit-2/lesson/**, src/app/ai/unit-4/lesson/**, src/app/ai/unit-5/lesson/**, src/lib/curriculum-data.ts (AI units 2, 4, 5), src/lib/sidebar-data.ts
- **Plan:** Tasks/_plans/Web-ai-sl-completion.md

## Goal
Create lesson routes modelled on AI Unit 3 (hero, table of contents, one stub section file per topic below, local helpers re-exporting from Unit 1, UnitSummary placeholder). Set `contents` Lesson to `available` with href, update `slTopics` to the topic list in the plan once the owner confirms the guide, add `LESSON_TOPICS` entries. This is the only task that edits the two shared data files.

## Done when
- [ ] Three routes build and show stubs
- [ ] Sidebar lists each topic with working anchors
- [ ] Section file names match the tasks below
- [ ] tsc, eslint and npm run build pass
