# Changelog

Merges to `main` across all projects, newest first. Tags: `[Web]`. Format and rules: `Tasks/README.md`.

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

