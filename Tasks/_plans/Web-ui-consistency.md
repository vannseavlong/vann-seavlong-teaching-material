# Plan: UI consistency, A4/Web display mode, docs sidebar

## Goal
1. Calm, consistent design: colour is reserved for **visuals** (graphs, diagrams, figures) and **items inside exercise questions**. Chrome, headings, boxes, tags, tables and buttons use the neutral palette plus one accent.
2. A **display mode** switch: `web` (today's look, minus the extra colour) and `a4` (black and white, A4 portrait, print-ready). Driven by the search param `?mode=a4|web` so the owner can send a student a link in the right mode.
3. All sub-navigation (units, lessons, practice topics) moves to a **left sidebar**, w3schools-style, on curriculum pages.

## Contract (all tasks follow this; owned by Web-display-mode)
> **Superseded in part by Revision 2 below**: navbar/footer/calculator are NOT hidden in A4, and A4 styling is scoped to `.a4-paper`, not the whole page.
- A4 mode exists **only on `/worksheets/**` and `/review/**`** (`supportsA4()` in `src/lib/display-mode.ts`). Everywhere else `?mode=` is ignored and the toggle is hidden.
- `<html data-mode="web|a4">`. Default `web`. Source of truth is the `mode` search param; a tiny inline script in `<head>` sets the attribute before paint (no flash). Invalid value falls back to `web`.
- Tailwind variant `a4:` already exists in `globals.css` (`@custom-variant a4`). Use `a4:` for A4-only overrides. Do not read the mode in JS unless unavoidable; if needed use `useDisplayMode()` from `@/components/layout/ModeProvider`.
- Chrome that must disappear in A4 carries the class `a4-hide` (display none under `[data-mode=a4]`). Navbar, Footer, sidebar and the calculator widget are hidden in A4.
- A4 page: white sheet 210mm wide, portrait, margins 15mm, `@page { size: A4 portrait; margin: 15mm }`, black text on white, no backgrounds, no shadows, borders in black/gray. Colour in graphs/visuals stays only as grayscale in A4 (via `filter: grayscale(1)` on `.visual`).
- Marking visuals: wrap any graph/diagram/figure in an element with class `visual` (keeps colour in web mode, gray in A4). Exercise-item colour (e.g. a coloured highlight on a term inside a question) uses class `q-accent`.
- Navbar links keep the `mode` param only when they point to a worksheets/review page; the sidebar does not carry it.

## Neutral palette (web mode)
Text `navy-900`/`slate-500`, surfaces white/`slate-50`, borders `slate-200`, one accent `aa-primary` (blue) for links, active states and primary buttons. Remove green/yellow/red/orange boxes, tags and section tints from chrome. SL/HL, AA/AI distinctions use a text label or an outline, not fill colour. Semantic red is allowed only for a genuine warning.

## Flow
| Step | State |
|---|---|
| Student opens link `…?mode=a4` | new |
| Page renders in chosen mode, toggle in Navbar shows current mode | new |
| Toggle click updates `?mode=` (replace, keep other params) | new |
| Export PDF / Print on review and worksheets | exists, must work with A4 mode |
| Curriculum page → lesson/practice navigation | change: sidebar |

## Gaps and decisions
- Existing print CSS (`@media print`) and `ExportPdfButton` (`data-print-mode` question/answers) stay; A4 mode must compose with them, not replace them. Decision: print always uses the A4 sheet layout regardless of mode.
- Lesson and practice pages are 1.7k to 2.7k lines each with heavy colour. Decision: this wave gets sidebar + mode support for them but not the colour clean-up inside the pages (wave 2, backlog). Worksheets and Review get the full clean-up, as asked.
- Sidebar scope: pages under `/aa/**` and `/ai/**` (unit tree: Lesson, Practice 1..n, per unit). Worksheets and Review keep the top nav (flat lists).

## Open questions (recommendation)
1. Should `mode` persist when the student navigates by in-page links? Recommend yes for Navbar and Sidebar only (done in this wave).
2. Decided by owner: A4 mode applies only to worksheets and review.

## Task breakdown
| Task | Depends on | Parallel group | Tier | Size |
|---|---|---|---|---|
| Web-display-mode | none | A | T2 | M |
| Web-docs-sidebar | contract only | A | T2 | M |
| Web-decolor-worksheets | contract only | A | T1 | M |
| Web-decolor-review | contract only | A | T1 | M |
| Web-neutral-shared-ui | contract only | A | T1 | S |

All five touch disjoint files, so they run in parallel. Final integration check (build, both modes, print) is done by the project manager after all five finish.

## Out of scope (backlog `Web-decolor-lessons-practice`)
Colour clean-up inside AA/AI lesson and practice pages; mock tests; dark mode.

---

# Revision 2 (owner feedback, 2026-10-18)

## Changes to the contract (replaces the A4 rules above where they conflict)
- **Header and page stay in normal web display in A4 mode.** Navbar, Footer, hero/page chrome are NOT hidden or restyled; the Web/A4 toggle stays visible. Only the **question paper** renders as an A4 sheet.
- **Paper container:** content that is the exam/worksheet paper is wrapped in `<div className="a4-paper">`. In `data-mode="a4"` it becomes a centred white sheet, 210mm wide, on a light-gray desk background with a soft shadow, black text, no colour fills, black borders. In `web` mode `.a4-paper` has no special styling. When printing, only the `.a4-paper` content prints (page chrome hidden), with `@page` A4 portrait 15mm margins.
- **No answers in A4:** Show Answer / Show All / reveal controls carry `a4-hide` and are not rendered visibly in A4. A4 mode shows only **Print** and **Export** buttons.
- Remove `a4-hide` from Navbar/Footer, remove the A4 global body/`body *` rules from `globals.css`; scope all A4 rules to `.a4-paper`.

## Sidebar: topics, not units
The sidebar lists the **topics inside each unit** (the same items as the lesson page's "Jump to topic" chips, as anchor links like `/ai/unit-1/lesson#percentages`), plus the practice topics. Unit headings are only group labels. The "Jump to topic" chip bar on lesson pages is removed (moved into the sidebar).

## IB paper style for Review and Worksheets (clean headings)
Cut over-information: no taglines, stat pills, tag rows, multi-line hero blurbs, mark-scheme chatter above the paper. Follow IB exam conventions:
- Paper header block (top of the `a4-paper`): course line (e.g. "Mathematics: Analysis and approaches"), level (Standard level), "Paper N" / worksheet title, duration, total marks. One compact block, a rule under it.
- Short "Instructions to candidates" list (3 to 5 bullets: answer all questions, show working, calculator allowed or not, maximum marks).
- Section labels ("Section A", "Section B") only where the paper has them.
- Questions numbered `1.`, `2.` with the IB mark line `[Maximum mark: N]` right at the start of each question; parts `(a)`, `(b)`, `(c)` with marks `[2]` right-aligned; answer space for working.
- No decorative boxes. Formulas and diagrams inline.
- Page title on the web (above the paper) stays one line + one-line description.

---

# Revision 3 (owner feedback after seeing the IB restyle)

The IB restyle looked flat, messy and generic in web mode. Review and worksheet pages were restored to their decolored original layout (commit `1fd804e` state). Rules now:
- **Web mode = original layout and style** (hero, cards, question blocks), with only the over-colouring removed: keep the navy brand tone and one accent; drop purple/green/yellow/orange/red fills. Must not look generic or flat: keep hierarchy, spacing, borders and the original hero feel.
- **No duplicate headers.** The title appears once on screen (the hero). The IB paper header block (course line, level, duration, total marks, instructions) lives inside `.a4-paper` and shows only in A4 mode and in print; there its title line is hidden on screen (`a4:hidden a4:print:block`) because the hero above already shows it.
- **IB formatting only on the A4 sheet:** `[Maximum mark: N]`, `(a)` parts with right-aligned `[n]` marks, plain ruled working space are shown in A4/print (`hidden a4:block` / `a4:`), web mode keeps its original question look.
- A4 mode: no Show Answer/Show All (`a4-hide`); only Print and Export buttons visible.
- **Smaller type** on review and worksheet pages: body/question text about 14px (`text-sm`), hero title about `text-2xl`, section/part headings one step smaller than now.
