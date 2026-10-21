# IB paper style for Worksheets

- **ID:** T-0027
- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 2" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-ib-style-worksheets, 2026-10-18
- **Tier:** T1

## Goal
Clean the worksheets index and the three worksheets per Revision 2 'IB paper style': compact paper header block, short instructions, numbered questions with `[Maximum mark: N]` and `(a)(b)` parts with right-aligned marks. Wrap the paper in `<div className="a4-paper">`; the page title/hero above stays minimal web chrome. Remove taglines, stat pills, tag rows and decorative boxes. In a4 mode show only Print and Export buttons (add Export if a worksheet has none, reuse `src/components/review/ExportPdfButton.tsx` by import, do not edit it). Hide anything answer-related with `a4-hide`. Keep content of the questions unchanged.

## Touches
`src/app/worksheets/**`

## Done when
- [x] Each worksheet reads like an IB paper page
- [x] Questions and diagrams unchanged (no marks existed in source; none invented)
- [x] Only Print + Export in a4
- [x] Worksheets index is clean and short
- [ ] `npm run build` passes; nothing outside `Touches` edited; do not commit

## Gates (T1)
- [ ] G1 · [ ] G2 · [ ] G3 build · [ ] G4 quick run · [ ] G8 · [ ] G11
