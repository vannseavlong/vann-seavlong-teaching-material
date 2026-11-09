# AI Unit 3: Trigonometry in shapes, 3D exercise sheet (harder)

- **ID:** T-0066
- **Owner:** claude
- **Started / updated:** 2026-11-09 / 2026-11-09
- **Due:** none
- **Tier:** T1 · new data file, registry line, static SVG assets (no shared component)
- **Depends on:** T-0064 (first shapes sheet)
- **Touches:** src/lib/ai-review-papers/trigShapes3d.ts (new), src/lib/ai-review-papers/index.ts, public/review/trig-shapes-3d-q*.svg (new), src/app/ai/unit-3/lesson/_sections/Shapes.tsx (link card), CHANGELOG.md
- **Plan:** Tasks/_plans/Web-ai-u3-shapes.md (follow-up requested by the user)

## Goal
Second, harder exercise sheet for Trigonometry in shapes, session 33, slug `trig-shapes-3d`: 2D shapes used as faces and sections of 3D solids (tent prism, hexagonal prism, rhombus-based pyramid, cone from a sector, cuboid face-diagonal triangle, hexagonal gazebo roof). Each question has a 3D diagram designed in Figma and shipped as SVG under `public/review/`.

## Done when
- [x] Figma frames built and checked by screenshot (file: https://www.figma.com/design/GbO7u2ItYHhdgEQFi8KwJ2)
- [x] 6 questions, full M/A mark schemes, numbers verified in node
- [x] Registered in index.ts; linked from the lesson section
- [x] No em-dash; tsc and eslint pass

## Notes
Figma frames trig-shapes-3d-q1 to q6 built from the same primitive spec as the SVGs (generator script kept outside the repo). Figma Starter plan hit its MCP call limit after the build, so only Q2 was screenshot-checked in Figma; all six were checked as local renders of the shipped SVGs. Numbers verified in node. Not verified: page render in a browser.
