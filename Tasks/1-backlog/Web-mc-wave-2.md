# Multi-curriculum: wave 2 and later

- **ID:** T-0075
- **Owner:** SNLRLONG
- **Depends on:** all wave 1 tasks of Tasks/_plans/Web-multi-curriculum.md
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Work that wave 1 deliberately left out. Turn each row into a task in `2-todo/` when scheduled.

| Item | Notes | Tier |
|---|---|---|
| Shared lesson kit `src/components/lesson/` | LessonHero, Objectives, KeyIdea, FormulaBox, WorkedExample, Practice, CommonMistakes, RelatedTopics. Migrate one unit per task (5 AI `helpers.tsx` copies differ by about 270 lines, AA pages are single files). Content must not change. | T2 each |
| Optional lesson sections from data | Learning objectives, common mistakes and related topics on Topic data, rendered only when present. | T2 |
| Data-driven formula sheets | One `formula-sheet` resource per course, rendered by `FormulaSheet`, printable. | T1 each |
| Move AA/AI unit data into `src/content/ib-dp` | Retire `curriculum-data.ts` adapters once the owner is used to the new files. | T2 |
| Fix practice navigator for Chemistry G10 | `/aa/unit-1/practice/4` still shows in the AA Unit 1 practice navigator (`PracticeClient.tsx`). Move to its own route under the G10 course with a redirect. | T2 |
| First non-IB course content | Course chosen by owner (plan Open question 3). | T1 to T2 |
| Quizzes and tests | New resource kinds already exist in the model; needs a UI. | T2 |
| Decolor lessons and practice | Existing backlog T-0001. | T1 |
