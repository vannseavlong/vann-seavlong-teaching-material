# Multi-curriculum: content model and catalog

- **ID:** T-0067
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · new shared data module used by every later task
- **Depends on:** none
- **Touches:** src/lib/catalog/**, src/content/**, Docs/architecture/content-model.md
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Add the typed content model from the plan (Curriculum, Level, Subject, Course, Unit, Topic, Resource) and the read-only catalog that every page uses. IB AA/AI are adapted from `curriculum-data.ts`, `review-data.ts`, `worksheet-data.ts`; Grade 10 materials get their own curriculum and courses.

## Done when
- [x] Types and selectors exactly as in the plan's Content model section
- [x] `src/content/ib-dp/` holds IB DP curriculum, levels, AA and AI courses (adapters, no copied facts) plus the lesson-topic and practice-topic lists moved out of `sidebar-data.ts` (copy now; Web-mc-sidebar deletes the old maps)
- [x] `src/content/aia/` holds AIA Grade 6 and Grade 9 Mathematics (coming soon); `src/content/others/` holds the Physics worksheet, Maths G10 test, area and volume sheet, Chemistry practice (`/aa/unit-1/practice/4`)
- [x] Every existing student page has a Resource with kind, `hasAnswers`, `addedOn` (from `git log --diff-filter=A`), marks or questions where known
- [x] Tutor page is a Resource with `hidden: true`
- [x] `assertCatalog()` throws on duplicate ids, dangling refs, unknown href prefix; verified by temporarily breaking one ref and seeing the build fail
- [x] `Docs/architecture/content-model.md` explains the model and a 5-step "add a new curriculum / course / resource" recipe
- [x] No UI file changed; `npm run build` passes
- [x] No existing URL changed; `npm run build` passes
- [x] Only the Touches files changed

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
Nothing visible yet. Read `Docs/architecture/content-model.md` and say whether adding a course looks easy enough.

## Feedback
Catalog probe (jiti, 2026-11-16): 3 curricula, 8 courses, 77 resources (76 visible: 7 lessons, 7 formula recaps, 22 topic exercises, 35 revision, 1 mock, 1 exam-style, 2 worksheets, 1 test). Breadcrumbs: `/aa/unit-1/practice/4` resolves to Others / G10 Chemistry. Integrity check verified by pushing a duplicate id, an unknown course and a bad href: all three reported.
Note: `sidebar-data.ts` maps were copied, not deleted; Web-mc-sidebar removes them. `npm install` was needed first (`@hugeicons` missing from node_modules, lockfile unchanged).
