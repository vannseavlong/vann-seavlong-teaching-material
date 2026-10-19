# IB paper style for Review papers

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 2" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-ib-style-review, 2026-10-18
- **Tier:** T1

## Goal
Clean the review index, papers 1-3, `ai-sl/[slug]` and review components per Revision 2 'IB paper style'. Wrap the paper in `<div className="a4-paper">`; page chrome above stays minimal. Remove over-information headings (tags, taglines, stat rows, long hero blurbs). In `a4` mode there must be no Show Answer / Show All buttons (`a4-hide`) and only **Print** and **Export** buttons are visible: add a Print button (new `src/components/review/PrintButton.tsx`) next to `ExportPdfButton`. Keep the existing Export Question / Q&A (`data-print-mode`) behaviour working. Keep question content unchanged.

## Touches
`src/app/review/**`, `src/components/review/**`

## Done when
- [x] Papers read like IB papers (header block, instructions, [Maximum mark: N], (a)(b) parts)
- [x] a4 shows no answer-reveal controls, only Print and Export
- [x] Export Question and Q&A still work
- [x] `npm run build` passes; nothing outside `Touches` edited; do not commit

## Gates (T1)
- [ ] G1 · [ ] G2 · [x] G3 build · [x] G4 quick run · [ ] G8 · [ ] G11
