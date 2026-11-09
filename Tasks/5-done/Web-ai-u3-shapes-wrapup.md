# AI Unit 3: shapes wrap-up

- **ID:** T-0065
- **Owner:** claude
- **Started / updated:** 2026-11-09 / 2026-11-09
- **Due:** none
- **Tier:** T1 · text and data links
- **Depends on:** T-0061 to T-0064
- **Touches:** src/lib/curriculum-data.ts, src/lib/sidebar-data.ts, CLAUDE.md
- **Plan:** Tasks/_plans/Web-ai-u3-shapes.md

## Goal
Make the new topic discoverable: check the AI Unit 3 practice navigator order, add the topic to `slTopics`/sidebar only if those lists name Unit 3 topics, link the new paper where papers are linked, and update the CLAUDE.md progress row (practice ids 1 to 9, 10 papers).

## Done when
- [x] Navigator shows "Trigonometry in Shapes" with working link; no dead links
- [x] If a file in Touches needs no change, say so in the task file
- [x] No em-dash; tsc passes
- [x] Only the Touches files changed

## Notes
sidebar-data.ts: practice id 9 and lesson TOC entry added. curriculum-data.ts: slTopics entry added. Practice navigator (PracticeClient.tsx, outside Touches) lists ids in key order, so "Trigonometry in Shapes" shows last, after the HL items. Paper auto-appears via review-data.ts, no change. CLAUDE.md progress row updated.
