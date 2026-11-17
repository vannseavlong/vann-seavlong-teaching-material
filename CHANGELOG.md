# Changelog

Merges to `main` across all projects, newest first. Tags: `[Web]`. Format and rules: `Tasks/README.md`.

## 2026-11-17 [Web] UI audit: shadcn components, phone layout and maths fixes
- Owner: SNLRLONG · Task: Tasks/5-done/Web-ui-shadcn-audit.md
- Native dropdowns, dialogs, search inputs and show/hide blocks replaced with shadcn (Radix) components: filters, search palette (`/`, Ctrl+K), mobile menu and course "Units" sheets, Export PDF menu, FAQ, Reveal Solution.
- No page scrolls sideways on phones any more (lesson steps, long maths, worksheet labels); papers render `\[ \]` maths inside text (graph-theory Q5 showed raw LaTeX).
- Smaller fixes: navbar gap above papers, focus boxes inside components, clock emoji, "NOTswitch".
- Needs: `npm install` (new deps: radix-ui, cmdk, lucide-react, clsx, tailwind-merge, class-variance-authority, tw-animate-css).

## 2026-11-16 [Web] Multi-curriculum Techie Club site
- Owner: SNLRLONG · Tasks: Web-mc-catalog, -shell, -sidebar, -browse, -home, -materials, -search-reference, -qa · Commits: af2d4c5 to d215a6b
- Content model Curriculum, Course, Unit, Topic, Resource (`src/content`, `src/lib/catalog`, `Docs/architecture/content-model.md`); IB DP, AIA and Others.
- New learning home, /browse, /curricula, /courses, /practice, /reference, search; AA vs AI guide moved to /ib/aa-vs-ai; sitemap and robots.
- All 75 pre-migration URLs still work (route audit script).
- Needs: none

## 2026-11-16 [Web] Techie Club logo and new OG image
- Owner: SNLRLONG · Task: Web-brand-logo · Commit: c1f4046
- New logo (white "T" inside a light-blue "C" on a navy tile) as `LogoMark` in `src/components/ui/Logo.tsx`; shown in the navbar and footer.
- New favicon.ico, icon.svg and apple-icon.png generated from the same mark.
- OG image (also used for Twitter) now leads with the logo and wordmark.

## 2026-11-16 [Web] AIA Grade 6 and Grade 9 mathematics tests
- Owner: SNLRLONG · Task: Web-aia-tests-g6-g9 · Commit: 358504d
- New tests `/review/aia/g6-test-1` (no calculator, 60 min, 61 marks) and `/review/aia/g9-test-1` (calculator, 75 min, 69 marks), each with worked answers and Export PDF.
- Optional `PaperFrame` on review papers lets non-IB tests reuse `DataPaper`; IB AI papers unchanged.
- AIA Grade 6 and Grade 9 courses now available; tests listed on course pages, `/practice` and search.

## 2026-11-09 [Web] AI Unit 3 trigonometry in shapes, harder 3D sheet
- Owner: SNLRLONG · Task: Web-ai-u3-shapes-3d-paper (T-0066)
- New exercise sheet `/review/ai-sl/trig-shapes-3d` (session 33, 6 questions, 62 marks): tent prism, hexagonal prism, rhombus-based pyramid, cone from a sector, cuboid triangle, hexagonal gazebo roof.
- Six 3D diagrams designed in Figma, shipped as SVG in `public/review/`; linked from the shapes lesson.
- Not yet done: browser check of the paper and its Export PDF modes.

## 2026-11-09 [Web] AI Unit 3 trigonometry in shapes
- Owner: SNLRLONG · Tasks: Web-ai-u3-shapes-visuals, -lesson, -practice, -paper, -wrapup · Commit: 3f182e7, 00c0db9, 05f5373, 3dd6da9, f4ffb6d
- New lesson topic 4B "Trigonometry in Shapes" (5 formula groups, 6 inline-SVG diagrams, 7 worked examples, 5 practice blocks).
- Interactive practice id 9 (10 problems) and exportable exercise sheet `/review/ai-sl/trig-shapes` (52 marks, Figma-designed diagram on every question).
- Linked in sidebar, curriculum topic list and progress table.
- Not yet done: browser check of lesson, practice and paper; practice navigator lists id 9 last.

## 2026-10-18 [Web] UI consistency, A4/Web mode, docs sidebar
- Owner: SNLRLONG · Tasks: Web-display-mode, Web-docs-sidebar, Web-decolor-worksheets, Web-decolor-review, Web-neutral-shared-ui · Commit: dev
- `?mode=a4|web` display mode with Navbar toggle, on worksheets and review only; A4 mode is black/white portrait, chrome hidden.
- Left sidebar for units, lessons and practice on `/aa/**` and `/ai/**`.
- Neutral palette on worksheets, review papers, shared UI and home; colour kept for visuals only.
- Not yet done: colour clean-up inside lesson/practice pages (backlog), real print/PDF check, fresh-agent review (G5).

## 2026-10-18 [Web] A4 paper-only mode, topic sidebar, IB paper style
- Owner: SNLRLONG · Tasks: Web-a4-paper-mode, Web-sidebar-topics, Web-ib-style-worksheets, Web-ib-style-review · Commit: dev
- A4 mode now keeps the normal header/footer and renders only the paper (`.a4-paper`) as an A4 sheet; print outputs only the paper.
- No Show Answer controls in A4; only Print and Export.
- Sidebar lists lesson topics (anchor links, active topic highlighted); "Jump to topic" chip bar removed from lesson pages.
- Worksheets and review papers use IB paper layout (header block, instructions, numbered questions, `[Maximum mark: N]`, `(a)(b)` marks).
- Not yet done: real print/PDF preview, fresh-agent review (G5), mobile sidebar check.

## 2026-10-18 [Web] Review/worksheets: original look restored, IB format on A4 sheet only
- Owner: SNLRLONG · Tasks: Web-style-restore-review, Web-style-restore-worksheets · Commit: dev
- Web mode back to the original layout (navy hero, question cards) with only the extra colours removed; smaller type; one title on screen.
- IB header block and `[Maximum mark]` / `(a)(b)` marks show only on the A4 sheet and in print; Show Answer hidden in A4.
- Not yet done: real print preview, Export Question/Q&A check on worksheets, fresh-agent review (G5).

