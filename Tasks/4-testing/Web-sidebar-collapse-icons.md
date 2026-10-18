# Collapsible sidebar units and Hugeicons instead of emoji

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Tier:** T2 · edits shared layout component, adds a dependency (package.json), touches 6 files
- **Depends on:** Web-sidebar-topics (already committed)
- **Touches:** src/components/layout/SidebarNav.tsx, package.json, package-lock.json, src/app/worksheets/physics-motion/page.tsx, src/app/ai/unit-1/lesson/page.tsx, src/app/ai/unit-1/practice/[id]/PracticeClient.tsx, src/app/aa/unit-1/lesson/page.tsx, src/app/aa/unit-1/practice/[id]/PracticeClient.tsx, src/app/aa/unit-3/lesson/page.tsx

## Goal
1. Each unit in the sidebar expands and collapses (chevron icon, keyboard accessible, aria-expanded). The unit that contains the current page starts open; others start closed. Open state survives navigation within the session.
2. Install Hugeicons (@hugeicons/react + @hugeicons/core-free-icons) and replace every emoji in src with a Hugeicons icon (lesson hero meta rows, hint toggles, physics worksheet). Use icons for the sidebar chevrons too.

## Done when
- [ ] Units collapse and expand; current unit open by default
- [ ] No emoji left in src (grep)
- [ ] npx tsc, eslint, npm run build pass
- [ ] User tested and gave feedback (see PIPELINE.md)
