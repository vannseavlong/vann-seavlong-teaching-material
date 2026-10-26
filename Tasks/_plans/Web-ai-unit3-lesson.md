# AI Unit 3 lesson: Geometry and Trigonometry

Updated: 2026-10-26. Sources: CLAUDE.md (Lesson Page Convention, AI notation rule), AGENTS.md content rules, `src/lib/curriculum-data.ts` (AI unit 3), AI Unit 1 lesson (`src/app/ai/unit-1/lesson/`), AA Unit 3 lesson (`src/app/aa/unit-3/lesson/page.tsx`, reference only).

## Goal
One lesson page at `/ai/unit-3/lesson` for IB Mathematics AI SL, topic "Geometry and trigonometry", built like the AI Unit 1 lesson: hero, one section file per topic, unit summary. SL only in this plan. Every topic follows the per-topic order: HighlightBox, all FormulaBox groups, visual, all WorkedExamples, Practice blocks.

## Assumption to confirm
"Unit 3 Geometry and Trigonometric" is read as **AI Unit 3** (curriculum title "Geometry"). AA Unit 3 (Trigonometry) already has a finished lesson. See Open questions.

## Flow (exists / change / new)
1. `/ai` curriculum card for Unit 3 shows Lesson "coming-soon" (change to `available`, href `/ai/unit-3/lesson`).
2. Route `src/app/ai/unit-3/lesson/page.tsx` (new), modelled on `src/app/ai/unit-1/lesson/page.tsx` (exists).
3. Helper components `FormulaBox`, `FormulaRow`, `StepBox`, `WorkedExample`, `Practice`, `SLTag`, `LessonSection`, `CalcSteps` live in `src/app/ai/unit-1/lesson/_sections/helpers.tsx` (exists). Unit 3 re-exports the generic ones from its own `_sections/helpers.tsx` so unit 1 is never edited (new file, no change to unit 1).
4. Geometry needs diagrams on every topic. No diagram primitives exist for AI. New `_sections/diagrams.tsx` with inline SVG components (triangle with labelled sides, bearing compass, 3D box/pyramid/cone, perpendicular bisector, Voronoi cells). No image files, per convention; colour allowed in visuals only (neutral rule).
5. Section files (new): one per topic below, stubs created by the scaffold task so later tasks only edit their own file.

## Lesson content (SL, section order)
Pedagogical order: algebra of lines first (needed for Voronoi), then solids, then trig, then trig in context, then Voronoi.

| # | Section id / file | Content | GDC |
|---|---|---|---|
| 1 | `lines` / Lines.tsx | Gradient from two points, y = mx + c, ax + by + d = 0, parallel (m1 = m2), perpendicular (m1 m2 = -1), midpoint, distance in 2D | Graph and intersect |
| 2 | `solids-3d` / Solids3D.tsx | Distance and midpoint in 3D, volume and surface area of right pyramid, cone, sphere, hemisphere, composite solids, angle between a line and a plane (right-angled trig inside the solid) | none |
| 3 | `trigonometry` / Trigonometry.tsx | SOH CAH TOA, sine rule (incl. ambiguous case), cosine rule, area = 1/2 ab sin C, choosing the rule | angle mode DEGREE |
| 4 | `trig-context` / TrigContext.tsx | Angles of elevation and depression, bearings (3 figures, clockwise from north), multi-triangle problems, 3D trig | angle mode |
| 5 | `voronoi` / Voronoi.tsx | Sites, cells, edges, vertices, perpendicular bisector construction, adding a site, nearest-neighbour interpolation, toxic-waste-dump (largest empty circle) | none |

Formulas that are in the AI SL booklet are printed as the booklet prints them (see CLAUDE.md "Notation"): distance, midpoint, volumes and areas of solids, sine rule, cosine rule, area of a triangle, gradient, parallel and perpendicular conditions. Mark each Practice with a context question, not a bare drill (style from `Tasks/_plans/Web-ai-ib-papers.md`).

## Screens and states
Single page, no data. States: SL tag on every section; "Rest of Unit 3" card for HL topics (3D geometry and spatial reasoning, graph theory) as Coming Soon, same pattern as `ComingSoonCard` in unit 1; unit summary grid with key formulas; navigation links back to `/ai`.

## Data and API
None. Only edit to shared data: AI unit 3 `contents` entry in `src/lib/curriculum-data.ts`.

## Gaps and decisions
- **Curriculum data conflict.** `curriculum-data.ts` lists "Voronoi diagrams" under `hlTopics` and "Measurement / Trigonometry in context / Scale & units" under `slTopics`. In the AI SL guide Voronoi diagrams and equations of lines are SL, and the SL hours (18) and HL hours (46) look wrong for this topic. Decision: build to the guide, and the wrap-up task corrects `slTopics` after the owner confirms against the guide. Not guessed here.
- No AI diagram primitives: add `diagrams.tsx` (decision above). Figma was used for paper diagrams (sessions 13 and 14), but lessons use inline SVG so pages stay self-contained.
- Sidebar topic lists (`Web-sidebar-topics` in testing) may need an entry for unit 3; the scaffold task checks and, if it needs a shared file edit, leaves a note in `Tasks/_inbox/` instead of editing.
- Practice pages and review papers for unit 3 are not in this plan (backlog).
- Calculator: AI uses the TI-84 in other lessons; geometry steps only need angle mode (DEGREE) and graph/intersect. Use `CalcSteps` and `Keys`.

## Open questions (recommendation)
1. Is this AI Unit 3 (recommended) or did you mean AA Unit 4 "Geometry & Vectors"? AA trig is already done, so AI is the only unit that matches the title.
2. Include Voronoi at SL (recommended: yes, it is in the AI SL guide and is a common Paper 2 question)?
3. Fix `slTopics`/hours in `curriculum-data.ts` as part of the wrap-up (recommended: yes, one line of reason in the task)?

## Task breakdown
| Task | Depends on | Tier | Size |
|---|---|---|---|
| Web-ai-u3-scaffold | none | T2 (new route, edits `curriculum-data.ts`) | S |
| Web-ai-u3-lines | scaffold | T1 | S |
| Web-ai-u3-solids | scaffold | T1 | M |
| Web-ai-u3-trigonometry | scaffold | T1 | M |
| Web-ai-u3-trig-context | scaffold | T1 | M |
| Web-ai-u3-voronoi | scaffold | T1 | M |
| Web-ai-u3-wrapup | all above | T1 | S |
| Web-ai-u3-practice-papers (backlog) | wrapup | T2 | L |

Parallel group after scaffold: lines, solids, trigonometry, trig-context, voronoi (each touches only its own section file; diagrams are added to `diagrams.tsx` by the scaffold, and a section task that needs a new diagram defines it inside its own section file to avoid conflict).

## Out of scope
HL content (3D geometry and spatial reasoning, graph theory), practice pages, review papers, mock tests.
