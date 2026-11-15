# Multi-curriculum: browse, curriculum and course pages

- **ID:** T-0070
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · new routes, replaces shared CurriculumPage
- **Depends on:** T-0067, T-0068
- **Touches:** src/app/browse/**, src/app/curricula/**, src/app/courses/**, src/components/course/**, src/components/curriculum/CurriculumPage.tsx (delete), src/app/aa/page.tsx, src/app/ai/page.tsx, next.config.ts
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Students browse all courses, filter by curriculum, level and subject, and open a course page that lists units, topics and that unit's materials. `/aa` and `/ai` render through the same `CoursePage`.

## Done when
- [ ] `/browse` with three filters in the URL query, list rows, empty result with "Clear filters"
- [ ] `/curricula/[curriculum]` lists levels and their courses; `generateStaticParams` + `generateMetadata` from catalog
- [ ] `/courses/[course]` renders `CoursePage`; unknown id calls `notFound()`
- [ ] `CoursePage` shows tracks (SL/HL) and IB mock sets only when the data has them; coming-soon units show one label
- [ ] `/aa` and `/ai` show the same content as before (all units, topics, resource links), in the new layout
- [ ] Redirects `/courses/ib-dp-math-aa` to `/aa` and `/courses/ib-dp-math-ai` to `/ai`
- [ ] AIA coming-soon courses render an empty state, not an error
- [ ] No existing URL changed; `npm run build` passes
- [ ] Only the Touches files changed

## Gates (T2)
- G1 scope: diff only touches the paths above
- G2 `npm run build` and `npm run lint` pass
- G3 Skipped G3 (new tests): no test runner in repo, covered by `assertCatalog()` at build time and the Web-mc-qa route audit
- G4 user test: pages listed under "What to check"
- G5 code review by a fresh agent (not the builder)
- G6 not needed: no auth, data or user input beyond search text and filters
- G7 docs: update `Docs/architecture/content-model.md` if the contract changes
- G8 commit format; G11 changelog after approval

## What to check (user)
`/browse` with each filter, `/curricula/ib-dp`, `/curricula/aia`, `/curricula/others`, `/aa`, `/ai`, an AIA course page, mobile widths.

## Feedback
