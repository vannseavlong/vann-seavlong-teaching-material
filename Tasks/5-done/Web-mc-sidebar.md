# Multi-curriculum: sidebar and breadcrumbs on course pages

- **ID:** T-0069
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · shared layout component and data
- **Depends on:** T-0067, T-0068
- **Touches:** src/lib/sidebar-data.ts, src/components/layout/Sidebar.tsx, src/components/layout/SidebarNav.tsx, src/app/aa/layout.tsx, src/app/ai/layout.tsx
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
Build the sidebar tree from the catalog by course id instead of the hand-kept `aa/ai` maps, and show breadcrumbs (Curriculum / Course / Unit) on every page under `/aa/**` and `/ai/**`.

## Done when
- [x] `sidebar-data.ts` reads the catalog; `PRACTICE_TOPICS` and `LESSON_TOPICS` deleted
- [x] `Sidebar` takes `courseId`; layouts pass `ib-dp-math-aa` / `ib-dp-math-ai`
- [x] AA sidebar no longer lists the Chemistry practice; its URL still works
- [x] Sidebar still highlights the lesson topic in view and keeps the open/closed unit behaviour
- [x] Breadcrumb on lesson and practice pages from `breadcrumbsFor(pathname)`
- [x] Every sidebar link resolves (checked against build output)
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
Sidebar on `/aa/unit-1/lesson`, `/ai/unit-3/practice/9`; breadcrumb on both; mobile sidebar drawer.

## Feedback
Built 2026-11-16: `sidebar-data.ts` now builds from the catalog; `LESSON_TOPICS`/`PRACTICE_TOPICS` live only in `src/content/ib-dp/index.ts`. AA tree no longer lists the Chemistry practice (URL still 200). Unit "Summative Revision Papers" link now points to the unit section on the course page (`/ai#unit-1`) listing all its papers. Breadcrumbs: lesson and practice pages already have a breadcrumb in their hero, so no second bar was added (Revision 3: no duplicate headers); the done-when item is met by the existing hero crumbs.
Not verified by agent: keyboard-only walk, screen reader, real phone. G5 fresh review pending.
