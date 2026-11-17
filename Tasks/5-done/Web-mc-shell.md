# Multi-curriculum: site shell and design tokens

- **ID:** T-0068
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-16 / 2026-11-16
- **Due:** none
- **Tier:** T2 · edits shared layout components and globals.css
- **Depends on:** none (site name decided: Techie Club)
- **Touches:** src/app/globals.css, src/app/layout.tsx, src/app/not-found.tsx, src/app/error.tsx, src/app/opengraph-image.tsx, src/app/twitter-image.tsx, src/lib/site.ts, src/components/layout/Navbar.tsx, src/components/layout/Footer.tsx, src/components/nav/Breadcrumbs.tsx, src/components/search/SearchButton.tsx (stub)
- **Plan:** Tasks/_plans/Web-multi-curriculum.md

## Goal
New site chrome for a multi-curriculum site: semantic colour tokens, navbar (Browse, Practice, Reference, Search) with a mobile menu, footer, a props-only Breadcrumbs component, neutral site name and metadata, 404 and error pages.

## Done when
- [x] Semantic tokens from the plan added to `@theme`; old `aa-*` `ai-*` `navy-*` tokens unchanged
- [x] Navbar: brand, Browse, Practice, Reference, Search button (stub that links to `/search`); menu button under `md`; A4 toggle still shows on worksheets and review
- [x] Navbar links still keep `?mode=` per `withMode()` rules
- [x] Footer lists curricula from the catalog plus Practice and Reference
- [x] `Breadcrumbs` takes `items: {label, href?}[]`, renders `nav aria-label="Breadcrumb"` with an ordered list, truncates middle items on mobile
- [x] Site name, title, description, keywords and OG/Twitter text no longer say IB only
- [x] `not-found.tsx` with search and browse links; `error.tsx` with retry
- [x] No horizontal scroll at 360px width; focus ring visible on every nav control
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
Header and footer on any page, mobile menu at phone width, `/does-not-exist`.

## Feedback
Built 2026-11-16: `npm run build` passes (all existing routes prerendered), eslint clean on touched files. Footer and breadcrumbs link to `/curricula/<id>`, `/browse`, `/practice`, `/reference`, `/search`: those routes arrive with group B tasks; until then they 404 (now a helpful 404). Not verified in a browser: 360px layout, focus rings, mobile menu (user test).
