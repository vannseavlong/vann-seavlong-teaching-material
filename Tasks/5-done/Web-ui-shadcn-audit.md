# UI audit and shadcn components

- **ID:** T-0076
- **Owner:** SNLRLONG
- **Started / updated:** 2026-11-17 / 2026-11-17
- **Due:** none
- **Tier:** T2 · new shared UI library and dependencies, edits shared layout components
- **Depends on:** Web-mc-* (wave 1, in testing)
- **Touches:** package.json, package-lock.json, components.json, src/lib/utils.ts, src/components/shadcn/**, src/components/ui/{FAQ,Reveal}.tsx, src/components/review/ExportPdfButton.tsx, lesson/practice files that use <details> (6 sites, Practice/Reveal only), src/app/globals.css, src/components/layout/**, src/components/search/**, src/components/course/**, src/components/materials/**, src/components/home-learn/**, src/components/nav/**, src/app/{page,browse,practice,reference,search,curricula,courses}/**
- **Plan:** owner request 2026-11-17: check the UI deeply, fix broken UI, replace native browser controls (select, dialog, search, details) with shadcn components.

## Goal
Find and fix broken UI across the site; use shadcn (Radix) components for dropdowns, dialogs, popovers, search and disclosure instead of native browser controls.

## Done when
- [x] Audit table (below) lists every issue found with page, width and cause
- [x] shadcn set up with the site tokens (no second colour system)
- [x] No native `<select>`, `<dialog>` or `<details>` left in site chrome (lesson/practice/paper bodies are content, listed separately)
- [x] Each audit issue fixed or moved to backlog with a reason
- [x] `npm run build`, lint, route audit pass; Playwright sweep at 375 and 1280 shows no overflow in chrome pages

## Audit
Playwright sweep of all 90 sitemap pages at 375px and 1280px, plus driven interactions (search, filters, menus, export, FAQ, reveal).

| # | Issue | Where | Cause | Fix |
|---|---|---|---|---|
| 1 | Native `<select>` filters | /browse, /practice | browser control | shadcn Select via `FilterSelect` |
| 2 | Native `<dialog>` + `<input type=search>` search, browser focus box and clear button | navbar, every page | browser controls | shadcn Dialog + Command (cmdk); `/` and Ctrl/Cmd+K; full screen on phones |
| 3 | Native `<details>` (8 sites) | course "Show more", guide FAQ, lesson "Reveal Solution", practice hints | browser control, text arrows | shadcn Collapsible (`Reveal`, `ShowMore`) and Accordion (FAQ) |
| 4 | Hand-made Export PDF menu (invisible full-screen button, no keyboard) | every paper and worksheet | custom popup | shadcn DropdownMenu |
| 5 | Mobile menu had no backdrop, pushed over the page | phones | inline list | shadcn Sheet (right) |
| 6 | Floating "Units menu" pill covered lesson text; drawer had no close control | /aa/**, /ai/** phones | fixed bottom button | "Units" button in the navbar opens a shadcn Sheet (left); unit toggles are Collapsibles |
| 7 | Lesson pages scrolled sideways (538 to 697px at 375) | AA U1, AA U3, AI U1 lessons | step text `flex-1` without `min-w-0`; long display maths | `min-w-0` on step text; `.katex-display` scrolls inside its box |
| 8 | Area and Volume worksheet scrolled sideways (476px) | /worksheets/math-area-volume | `whitespace-nowrap` labels | nowrap from `sm` only |
| 9 | Raw LaTeX shown to students (`\[\mathbf{A} ...`) and page overflow | graph-theory paper Q5, 2 steps in sequences-finance-chain papers | `\[ \]` inside text was not parsed | `RichText` renders display maths anywhere (`DisplayMathInline`, valid inside `<p>`) |
| 10 | 8px strip between navbar and paper hero; sticky bars 8px low | review papers, worksheets | `pt-16`/`top-16` under a 56px navbar | `pt-14`/`top-14` |
| 11 | Global focus outline drew boxes inside components (search input, select items) | all shadcn parts | unlayered `:focus-visible` beat utilities | moved into `@layer base` |
| 12 | Clock emoji renders as an empty box | AA U1, AA U3 lesson heroes | emoji font missing | Hugeicons clock |
| 13 | "NOTswitch" missing space | /ib/aa-vs-ai | whitespace dropped in JSX output | explicit `{" "}` |
| 14 | Text-glyph arrows on answer buttons ("Show Answer ▼") | papers | text glyph | lucide chevron |
| 15 | Web/A4 switch and curriculum chips were plain buttons | navbar, home | custom | shadcn ToggleGroup |

Results after fixes: 0 pages with sideways scroll at 375 or 1280; 0 native select/dialog/details/search inputs; 0 console errors (except the intended 404); route audit 90 pages, 75 legacy routes, 378 anchors, 0 failures; build passes.
Not changed (reason): calculator widget position (third-party embed script); AA Unit 1 practice strip still lists the Chemistry set (backlog Web-mc-wave-2); 7 lint errors in lesson/practice prose and effects existed before this task (unchanged count).
Setup notes: shadcn components live in `src/components/shadcn` (not `ui/`, to avoid `card.tsx` vs `Card.tsx` clashes); tokens map onto the site palette in `globals.css`; shadcn `accent` hover surfaces use `accent-soft` because `accent` is the site blue.

## Feedback
