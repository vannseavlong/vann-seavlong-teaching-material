# AI Unit 3: shapes diagrams

- **ID:** T-0061
- **Owner:** claude
- **Started / updated:** 2026-11-09 / 2026-11-09
- **Due:** none
- **Tier:** T1 · new component file, no shared code (signals: new file only, no route)
- **Depends on:** none
- **Touches:** src/app/ai/unit-3/lesson/_sections/shapesDiagrams.tsx (new)
- **Plan:** Tasks/_plans/Web-ai-u3-shapes.md

## Goal
Diagrams for "Trigonometry in shapes", designed in Figma and delivered as inline SVG components. Needed: isosceles triangle split by its height; rhombus with diagonals; quadrilateral with a shared diagonal; regular hexagon with a central triangle; rectangle plus semicircle; triangle on a sector. Each takes optional label props so lesson and paper can reuse them.

## Done when
- [x] Figma MCP not used (flaky); hand-written SVG fallback
- [x] Style: given data blue, construction lines slate dashed, unknown red; labelled vertices; `viewBox` only, no fixed pixel width; readable in print (`a4:` mode, black strokes)
- [x] Exports named components, no image files in `public/`
- [x] No em-dash (grep); `npx tsc --noEmit` and `npx eslint` pass on the file
- [x] Only the Touches file changed

## Notes
Route: hand-written SVG. Exports: IsoscelesSplit, RhombusDiagonals, QuadSharedDiagonal, HexagonCentral, RectSemicircle, TriangleOnSector (bare SVG; wrap in Diagram in the lesson). Not yet viewed in a browser; check when mounted by T-0062.
