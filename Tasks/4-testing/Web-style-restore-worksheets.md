# Worksheets: restore original look, IB only on A4 sheet

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 3" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-style-restore-worksheets, 2026-10-18
- **Tier:** T1

## Goal
Files were just restored to the decolored original layout. Apply Revision 3: wrap the paper part in `.a4-paper` with an A4/print-only IB header block (`src/app/worksheets/_components/PaperHeader.tsx` exists, reuse/adapt it; delete `_components/*` files you end up not using), Print + Export buttons (`_components/WorksheetActions.tsx` exists), reduce font sizes, no duplicate title. Do not invent marks; worksheets have none. Keep question content unchanged. Do not run any git command that modifies the working tree.

## Touches
`src/app/worksheets/**`

## Done when
- [x] Web mode: original layout, only over-colouring removed, not flat/generic
- [x] One title only on screen; IB header block only inside the A4 sheet/print
- [ ] A4: IB marks formatting, no answer controls, only Print + Export
- [x] Fonts reduced as per Revision 3
- [ ] `npm run build` passes; nothing outside Touches edited; do not commit

## Gates (T1)
- [ ] G1 · [ ] G2 · [x] G3 build · [x] G4 quick run · [ ] G8 · [ ] G11
