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
- [ ] `sidebar-data.ts` reads the catalog; `PRACTICE_TOPICS` and `LESSON_TOPICS` deleted
- [ ] `Sidebar` takes `courseId`; layouts pass `ib-dp-math-aa` / `ib-dp-math-ai`
- [ ] AA sidebar no longer lists the Chemistry practice; its URL still works
- [ ] Sidebar still highlights the lesson topic in view and keeps the open/closed unit behaviour
- [ ] Breadcrumb on lesson and practice pages from `breadcrumbsFor(pathname)`
- [ ] Every sidebar link resolves (checked against build output)
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
Sidebar on `/aa/unit-1/lesson`, `/ai/unit-3/practice/9`; breadcrumb on both; mobile sidebar drawer.

## Feedback
