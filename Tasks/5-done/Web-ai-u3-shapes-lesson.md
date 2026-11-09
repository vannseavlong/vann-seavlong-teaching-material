# AI Unit 3 lesson: Trigonometry in shapes

- **ID:** T-0062
- **Owner:** claude
- **Started / updated:** 2026-11-09 / 2026-11-09
- **Due:** none
- **Tier:** T1 · content plus small edit to one page file (re-tier up if the diff touches a shared component)
- **Depends on:** Web-ai-u3-shapes-visuals
- **Touches:** src/app/ai/unit-3/lesson/_sections/Shapes.tsx (new), src/app/ai/unit-3/lesson/page.tsx
- **Plan:** Tasks/_plans/Web-ai-u3-shapes.md

## Goal
Section id `shapes`, mounted between ArcSector and TrigContext. Five formula groups, five visuals, seven worked examples, five Practice blocks, exactly as listed in the plan. Update hero count ("7 SL topics"), summary card and imports in `page.tsx`.

## Done when
- [x] Per-topic order from CLAUDE.md: HighlightBox, all FormulaBox groups, visual, all WorkedExamples, Practice (solution in details)
- [x] Booklet notation; non-booklet formulas tagged "derived"; DEGREE mode note; one `CalcSteps`
- [x] Every example and practice answer recomputed in node and pasted in the task file
- [x] No em-dash, no filler (grep); `npx tsc --noEmit`, `npx eslint` pass; renders at /ai/unit-3/lesson#shapes
- [x] Only the Touches files changed

## Notes
Label is "Topic 4B" so Topics 5 and 6 keep their numbers. Numbers recomputed in node: roof h 3.44 m, beam 11.0 m; rhombus s 13, theta 45.2, A 120; parallelogram 4790 m2; AC 86.7 m, angle D 90.9, plot area 4070 m2; pentagon r 2.55, A 15.5, a 2.06; window 2.37 m2, 6.08 m. Practice: 36.3/33.8 cm; 56.4 deg, 39.6 cm2; PR 68.1, S 109, 1540 m2; octagon r 26.1, 1930 cm2, 135 deg; bed 70.0 m2, 36.6 m. Not verified: page render in a browser (dev server check was blocked).
