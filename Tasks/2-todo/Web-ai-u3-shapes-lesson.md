# AI Unit 3 lesson: Trigonometry in shapes

- **ID:** T-0062
- **Owner:** unclaimed
- **Started / updated:** 2026-11-09 / 2026-11-09
- **Due:** none
- **Tier:** T1 · content plus small edit to one page file (re-tier up if the diff touches a shared component)
- **Depends on:** Web-ai-u3-shapes-visuals
- **Touches:** src/app/ai/unit-3/lesson/_sections/Shapes.tsx (new), src/app/ai/unit-3/lesson/page.tsx
- **Plan:** Tasks/_plans/Web-ai-u3-shapes.md

## Goal
Section id `shapes`, mounted between ArcSector and TrigContext. Five formula groups, five visuals, seven worked examples, five Practice blocks, exactly as listed in the plan. Update hero count ("7 SL topics"), summary card and imports in `page.tsx`.

## Done when
- [ ] Per-topic order from CLAUDE.md: HighlightBox, all FormulaBox groups, visual, all WorkedExamples, Practice (solution in details)
- [ ] Booklet notation; non-booklet formulas tagged "derived"; DEGREE mode note; one `CalcSteps`
- [ ] Every example and practice answer recomputed in node and pasted in the task file
- [ ] No em-dash, no filler (grep); `npx tsc --noEmit`, `npx eslint` pass; renders at /ai/unit-3/lesson#shapes
- [ ] Only the Touches files changed
