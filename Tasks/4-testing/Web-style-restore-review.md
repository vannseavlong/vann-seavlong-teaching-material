# Review: restore original look, IB only on A4 sheet

- **ID:** T-0031
- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-18 / 2026-10-18
- **Depends on:** none (follows "Revision 3" in `Tasks/_plans/Web-ui-consistency.md`)
- **Claimed by:** sub-agent Web-style-restore-review, 2026-10-18
- **Tier:** T1

## Goal
Files were just restored to the decolored original layout. Apply Revision 3: wrap the paper in `.a4-paper`, add the A4/print-only IB header block and IB mark formatting, hide answer controls in A4 with `a4-hide`, keep Print + Export (a `PrintButton.tsx` already exists), reduce font sizes, remove any duplicate title. Study `git show 3a2668e:src/components/review/PaperKit.tsx` (true original) and the current files to keep the original look. Do not run any git command that modifies the working tree.

## Touches
`src/app/review/**`, `src/components/review/**`

## Done when
- [x] Web mode: original layout, only over-colouring removed, not flat/generic
- [x] One title only on screen; IB header block only inside the A4 sheet/print
- [x] A4: IB marks formatting, no answer controls, only Print + Export
- [x] Fonts reduced as per Revision 3
- [x] `npm run build` passes; nothing outside Touches edited; do not commit

## Gates (T1)
- [ ] G1 · [ ] G2 · [x] G3 build · [x] G4 quick run · [ ] G8 · [ ] G11
