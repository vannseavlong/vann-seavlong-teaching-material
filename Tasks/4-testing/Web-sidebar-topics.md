# Sidebar lists topics inside each unit

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 2" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-sidebar-topics, 2026-10-18
- **Tier:** T2

## Goal
Sidebar shows, per unit, the lesson TOPICS as anchor links (read the real `id`s and labels from each lesson page's TableOfContents: AI Unit 1 e.g. Percentages, Financial Mathematics, Summative Revision Plan, Arithmetic Sequences & Series, Geometric, Rounding, Upper & Lower Bounds, Percentage Error), SL topics before HL topics with a plain text 'HL' marker, then the practice topics. Unit rows are plain group headings. Highlight the topic currently in view (IntersectionObserver) or the hash. Then delete the 'Jump to topic' chip bar (TableOfContents) from the three lesson pages. Units without a lesson yet stay disabled. Keep sidebar neutral styling. Do not carry the mode param.

## Touches
`src/lib/sidebar-data.ts`, `src/components/layout/SidebarNav.tsx`, `src/components/layout/Sidebar.tsx`, `src/app/aa/unit-1/lesson/page.tsx`, `src/app/aa/unit-3/lesson/page.tsx`, `src/app/ai/unit-1/lesson/page.tsx` (only the TableOfContents component and its usage)

## Done when
- [x] Sidebar topic links scroll to the right section on each lesson page (browser-checked on AI u1 and AA u1; AA u3 not browser-checked)
- [x] Chip bar gone from the 3 lesson pages
- [x] Active topic highlighted
- [ ] Mobile menu still works
- [ ] `npm run build` passes; nothing outside `Touches` edited; do not commit

## Gates (T2)
- [ ] G1 · [ ] G2 · [ ] G3 build · [ ] G4 run web + a4 + print preview · [ ] G5 fresh-agent review · [ ] G7 docs · [ ] G8 · [ ] G11
