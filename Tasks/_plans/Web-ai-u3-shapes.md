# AI Unit 3: Trigonometry in shapes

Updated: 2026-11-09. Sources: CLAUDE.md (lesson convention, AI booklet notation, review papers), AGENTS.md (content rules), `Tasks/_plans/Web-ai-unit3-lesson.md`, `src/app/ai/unit-3/lesson/_sections/{Trigonometry,ArcSector,TrigContext,Solids3D}.tsx`, `src/app/ai/unit-3/practice/[id]/practiceData.ts`, `src/lib/ai-review-papers/`.

## Goal
Add one SL topic, "Trigonometry in shapes", to AI Unit 3: use right-angled trig, sine rule, cosine rule and A = ½ab sin C inside 2D shapes (isosceles triangles, rectangles, parallelograms, rhombuses, kites, trapezia, general quadrilaterals, regular polygons, composite shapes). Deliver: lesson section, worked examples, interactive practice set, exportable exercise sheet (review paper), and diagrams.

## Gap this fills
| Already covered | Where |
|---|---|
| Any triangle: SOH CAH TOA, sine rule, cosine rule, area | `Trigonometry.tsx` |
| Arc, sector, segment | `ArcSector.tsx` |
| Elevation, bearings, 3D | `TrigContext.tsx`, `Solids3D.tsx` |
| Area formulas for parallelogram, trapezoid (no trig) | `Solids3D.tsx` prior-learning rows |
| **Polygons, quadrilaterals, composite shapes by trig** | **missing** |

## Flow (exists / change / new)
1. Lesson: new `_sections/Shapes.tsx`, id `shapes` (new). Mounted in `lesson/page.tsx` after ArcSector and before TrigContext (change: import, hero counts "7 SL topics", summary card, `SLTag` list).
2. Practice: new entry `"9"` in `practiceData.ts`, `lessonAnchor: "shapes"` (new). `generateStaticParams` reads `PRACTICE_DATA` keys, so no page.tsx change. Id 9 is appended, not renumbered, so existing ids 6 to 8 and their reveal keys stay valid.
3. Exercise sheet: new `src/lib/ai-review-papers/trigShapes.ts`, registered in `index.ts`; auto-appears on `/review` and renders through `/review/ai-sl/[slug]` and `DataPaper` (exists). Session 32.
4. Diagrams: designed in Figma (if the Figma MCP is reachable), exported as SVG and rebuilt as inline SVG in `_sections/shapesDiagrams.tsx` (new). Same file feeds lesson and papers.
5. Links: `curriculum-data.ts` Unit 3 entry needs no change (practice entry point `/ai/unit-3/practice/1` stays); wrap-up task updates the practice navigator, progress table and sidebar if it lists topics.

## Lesson content (SL, section `shapes`)
Order follows CLAUDE.md: HighlightBox, all FormulaBox groups, visual, all WorkedExamples, Practice (one per technique group).

| Group | FormulaBox title | Content | Booklet status |
|---|---|---|---|
| 1 | Split into right-angled triangles | Isosceles triangle: drop the perpendicular, `h = l sin(θ)`, base = `2 l cos(θ)`. Rectangle diagonal, angle between diagonal and side. Rhombus: diagonals bisect at 90°, `side = √((d₁/2)² + (d₂/2)²)`. Kite: one diagonal is an axis. | SOH CAH TOA, Pythagoras (booklet or prior learning) |
| 2 | Area with an included angle | Parallelogram `A = ab sin θ`; rhombus `A = s² sin θ`; triangle `A = ½ab sin C`; general quadrilateral by a diagonal: `A = ½ab sin C + ½cd sin D`. | Triangle area in booklet. Parallelogram `bh` in booklet, `ab sin θ` is derived: label "derived". |
| 3 | Shared diagonal (two triangles) | Cosine rule for the diagonal in triangle 1, then sine or cosine rule in triangle 2 with the same diagonal. Method: label the diagonal `d`, find it, reuse it. Angle sum 360°, cyclic not required at SL. | Sine and cosine rule in booklet |
| 4 | Regular polygons | Central angle `360°/n`, interior angle `180° − 360°/n`, side `s = 2r sin(180°/n)`, area `A = ½ n r² sin(360°/n)`, apothem `a = r cos(180°/n)`, perimeter `ns`. | Not in booklet. Label as "derived from the triangle area formula". |
| 5 | Composite shapes | Triangle plus sector, rectangle minus sector, segment area = sector minus triangle, in degrees as in `ArcSector.tsx` (no radian formula). Perimeter = straight edges + arc lengths. | Arc and sector as in booklet (degrees) |

Visuals (one per group): isosceles split, rhombus with diagonals, quadrilateral with shared diagonal, regular hexagon with central triangle, composite (rectangle with semicircle, triangle on sector). Colour allowed in visuals only.

Worked examples (7): isosceles roof truss; rhombus tile from diagonals; parallelogram field area; quadrilateral plot with unknown diagonal (cosine then sine rule); quadrilateral plot area; regular hexagonal patio; running track or window (rectangle + semicircle, perimeter and area). Practice: 5 blocks, each a context question with units and GDC angle mode note. All numbers verified in node before writing.

Calculator: TI-84 in DEGREE mode, 3 s.f., use stored values (`ANS` or store to `A`) to avoid rounding drift; include one `CalcSteps` in group 3.

## Practice set (interactive, id 9, title "Trigonometry in Shapes")
10 problems, short final answers, KaTeX model answers, new 10-char reveal key (never reused). Mix 3 basic, 5 standard, 2 challenge. Context: roof, tile, field, patio, window, garden bed. Format: `Problem` type in `practiceData.ts`.

## Exercise sheet (review paper, session 32)
`slug: "trig-shapes"`, 32 minutes, Section A (short, 4 questions, 4 to 6 marks) and Section B (extended, 2 questions, 12 to 14 marks), IB AI SL style with command terms (Find, Calculate, Show that, Hence, Justify, Write down). Each question has full mark scheme with M/A marks via `part()` from `build.ts`. Includes 2 questions with a diagram. `lessonAnchor: "shapes"`, `lessonHref: "/ai/unit-3/lesson"`. About 60 marks total; matches size of `trigContext.ts` plus 2 extended questions.

## Visual assets: Figma
- Precedent: `Web-ai-unit3-lesson.md` says lessons use inline SVG so pages stay self-contained; Figma was used for paper diagrams (sessions 13, 14).
- Decision: design the 6 to 8 diagrams once in a Figma file (token colours: `aa-primary` blue for given data, slate for construction lines, red only for the unknown), then export SVG and keep as inline TSX. No image files in `public/`.
- Fallback: if the Figma MCP is not reachable when the task runs, hand-write the SVG in `shapesDiagrams.tsx` using the existing style in `Trigonometry.tsx` (viewBox, stroke 2, labelled vertices). The diagram task notes which route was used.
- The Figma file link goes in the task file only, not in the repo docs.

## Gaps and decisions
- **No SL booklet formula for regular polygon area or parallelogram `ab sin θ`.** Decision: teach them as derived from `A = ½ab sin C` and tag "derived, not in booklet" (matches the rule that the booklet prints only what it prints).
- **Practice id is not in lesson order** (lesson topic 6 but practice id 9). Decision: append, do not renumber, so the reveal keys of ids 6 to 8 keep working. The practice navigator is data-driven; wrap-up checks its order.
- **Radians** are not used (SL AI uses degrees; radian measure is HL). Segment formula in radians excluded.
- **Cyclic quadrilaterals and Ptolemy** are AA/HL and out of scope.
- Hours/topic lists in `curriculum-data.ts` (`slTopics`) are flagged unresolved in the earlier plan; wrap-up adds "Trigonometry in shapes" only if `slTopics` lists Unit 3 topics, otherwise leaves it.
- Content rules: no em-dashes, no filler, IB command terms (AGENTS.md).

## Open questions (recommendation)
1. Should the topic sit in the lesson between Arc and sector and Trig in context (recommended), or at the end after Voronoi? Recommended placement keeps trig topics together and lets composite shapes use sectors.
2. Is one extra practice set enough, or also a second paper (mixed Unit 3 already exists as `unit3Mixed.ts`)? Recommend one paper now; the mixed paper can absorb a shapes question later.
3. Is Figma the wanted route for visuals, given the lessons otherwise use hand-written SVG? Recommend yes for design, inline SVG for delivery.

## Task breakdown
| Task | Repo | Depends on | Tier | Size |
|---|---|---|---|---|
| Web-ai-u3-shapes-visuals (T-0061) | web | none | T1 | S |
| Web-ai-u3-shapes-lesson (T-0062) | web | visuals | T1 | M |
| Web-ai-u3-shapes-practice (T-0063) | web | lesson (numbers) | T1 | S |
| Web-ai-u3-shapes-paper (T-0064) | web | lesson (numbers), visuals | T1 | M |
| Web-ai-u3-shapes-wrapup (T-0065) | web | all above | T1 | S |

Parallel group after the lesson: practice (T-0063) and paper (T-0064) touch different files. The lesson task is the only one editing `lesson/page.tsx`.

## Out of scope
HL radian measure, cyclic quadrilaterals, 3D shapes (already in solids), mock tests, AA content.
