# Design AI Unit 1 lesson: Percentage Error

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Tier:** T1 · content-only edit in one section file, no shared code, no new route
- **Depends on:** none (section split committed)
- **Touches:** src/app/ai/unit-1/lesson/_sections/PercentageError.tsx only

## Goal
Redesign the "Percentage Error" lesson section (AI SL summative revision topic) to the Lesson Page Convention in CLAUDE.md: HighlightBox key idea, all FormulaBox groups first, a visual aid, then WorkedExamples, then Practice blocks (one per technique group minimum, native details for solutions). Cover absolute error, percentage error formula, and error from rounded or bounded values. Follow AGENTS.md content rules: no em-dashes, no generic text, short IB command-term headings. Keep the section id and the ReviewPaperLink to the matching review paper. Use GDC steps where IB AI expects them.

## Done when
- [ ] Structure follows the convention order; formulas before examples
- [ ] Every worked example and practice answer re-checked numerically
- [ ] No em-dash left in the file (grep), no filler text
- [ ] npx tsc --noEmit and npx eslint on the file pass; page renders at /ai/unit-1/lesson#<id>
- [ ] Only the Touches file changed; commit that path, add CHANGELOG.md [Web] entry, move task to 5-done
