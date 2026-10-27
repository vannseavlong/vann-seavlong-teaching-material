# AI SL completion: lessons, papers and full booklet coverage

Updated: 2026-10-28. Sources: the owner's photos of the IB AI SL formula booklet (all 6 pages), CLAUDE.md (conventions, notation, progress tracker), AGENTS.md, `src/lib/curriculum-data.ts`, `src/lib/sidebar-data.ts`, `src/lib/ai-review-papers/`, `src/app/ai/**`, `Tasks/_plans/Web-ai-unit3-lesson.md`, `Tasks/_plans/Web-ai-ib-papers.md`.

## Goal
Finish AI SL: a lesson for every unit, exportable practice papers for every unit, and a rule that every row of the booklet appears in at least one lesson section and at least one paper question. The booklet is the checklist.

## Booklet checklist (single list this plan works to)
| Topic | Rows (booklet ref) | First-pass keyword audit |
|---|---|---|
| 1 Number and algebra | 1.2 AP u_n, S_n; 1.3 GP u_n, S_n, S_infinity (handwritten, extension); 1.4 FV; 1.5 a^x = b <=> x = log_a b; 1.6 epsilon | Lessons: all but 1.5 log form. Papers: no GP question hit, no log hit |
| 2 Functions | 2.1 equations of a line (3 forms), gradient; 2.5 axis of symmetry x = -b/2a | Lesson hit for 2.1 (in Unit 3 Lines). 2.5 missing from lessons and papers |
| 3 Geometry and trig | Prior learning: areas of parallelogram, triangle, trapezoid, circle, circumference, volumes of cuboid, cylinder, prism, curved surface of cylinder, 2D distance and midpoint; 3.1 3D distance and midpoint; 3.2 pyramid, cone, sphere, sine rule, cosine rule, area 1/2 ab sin C; 3.4 arc, sector | Most rows have a lesson hit. Parallelogram and trapezoid not found. Papers cover trig, arc and sector, 3D only; no lines, Voronoi or 3D midpoint question |
| 4 Statistics and probability | 4.2 IQR; 4.3 mean from frequency table; 4.5 P(A) = n(A)/n(U) and complement; 4.6 union, mutually exclusive, conditional, independent; 4.7 E(X); 4.8 binomial, E(X) = np, Var(X) = np(1-p) | No lesson, no paper. (Conditional hit is a false positive from other content.) |
| 5 Calculus | 5.3 derivative of x^n; 5.5 integral of x^n and area under a curve; 5.8 trapezoidal rule | No lesson. The 15 paper hits for integral are the LaTeX symbol in other content, not calculus |

The keyword pass is a first look only. The audit task replaces it with a row-by-row matrix.

## Flow (exists / change / new)
1. `/ai` curriculum cards: Unit 1 and Unit 3 lessons exist; Units 2, 4, 5 are `coming-soon` (change).
2. Lesson route per unit, `src/app/ai/unit-N/lesson/page.tsx` with `_sections/` files and local `helpers.tsx` (Unit 1 and 3 exist; Units 2, 4, 5 new). Each topic follows the per-topic order in CLAUDE.md.
3. Sidebar topics come from `LESSON_TOPICS` in `src/lib/sidebar-data.ts` (exists, change for 2, 4, 5).
4. Papers are data in `src/lib/ai-review-papers/*.ts`, registered in `index.ts`, rendered by `DataPaper` at `/review/ai-sl/[slug]` and listed on `/review` (exists, new data only).
5. Interactive practice pages exist only for AI Unit 1 id 2 (exists, no change in this plan).
6. Mock sets per unit: `mockSets` in `curriculum-data.ts` is empty (new, later wave).

## Screens and states
No new UI. Reuse hero, sticky table of contents, `LessonSection`, `FormulaBox`, `WorkedExample`, `Practice`, `UnitSummary`, `DataPaper`. Unit 4 and 5 need diagrams (box plot, tree and Venn, normal curve, tangent, area under a curve, trapezoids): inline SVG defined inside each section file, as decided for Unit 3.

## Data and API
None. Shared data touched: `curriculum-data.ts` and `sidebar-data.ts`, only by the one scaffold task, so parallel section tasks never collide.

## Gaps and decisions
- **Booklet only prints formulas.** Topics like the normal distribution, regression, chi-squared, t-test, exponential and sinusoidal models, tangents and optimisation have no booklet row. Decision: the lessons follow the AI SL guide for topic list, and the booklet drives formula boxes and the coverage rule. The guide is not in the repo, so the topic list below is from the standard AI SL syllabus and must be checked (open question 1).
- **Curriculum data conflicts with the guide.** `curriculum-data.ts` puts the normal distribution, hypothesis testing and all of calculus under `hlTopics`, and lists Unit 5 SL as "calculator-based modelling". The booklet has Topic 5 rows (5.3, 5.5, 5.8) and Topic 4.7 and 4.8, so those are SL. Same issue Unit 3 had. Decision: the scaffold task rewrites `slTopics` for Units 2, 4, 5 after the owner confirms the guide; hours stay until then.
- **Duplicate content.** Equations of lines and gradient (booklet 2.1) are already taught in the Unit 3 Lines section. Decision: Unit 2 links to it and adds only functions-specific content; no copy.
- **Handwritten items are not booklet rows.** Sum to infinity and the annuity formula are student notes. Keep them labelled extension (already so in CLAUDE.md). The audit does not count them as required.
- **Papers must not copy IB or Corbettmaths questions.** Same rule as `Web-ai-ib-papers.md`: copy structure and style, not wording or numbers.
- **Unit 3 papers.** Backlog task T-0040 (`Web-ai-u3-practice-papers`) already covers lines, solids, trig in context and Voronoi. This plan absorbs it into wave 2 below (no duplicate).
- **Reveal-key practice vs exportable papers.** Recent work (7 Unit 1 papers, 3 Unit 3 papers) is exportable Q&A. Decision: "practice paper" means exportable papers in the `Web-ai-ib-papers.md` style (Section A short, Section B extended, mark schemes, GDC steps).

## Open questions (recommendation)
1. Can you share the AI SL guide PDF (or its Topic 2, 4, 5 content lists)? Recommendation: yes, before the Unit 4 and 5 section tasks start. Until then each task uses the standard AI SL topic list below and marks uncertain items in the task file.
2. Should Unit 4 include Spearman, chi-squared and t-test at SL? Recommendation: yes, they are SL in the AI guide as far as I know, and common on Paper 2; confirm in question 1.
3. Interactive practice pages (reveal key) for Units 2 to 5 as well as papers? Recommendation: papers first (wave 2), interactive later only if the owner asks.
4. Mock sets (Paper 1 and Paper 2 per set) after all units are done? Recommendation: yes, one set first, wave 3.

## Standard AI SL topic list used (to confirm)
- **Unit 2:** functions and notation, domain and range, linear model, quadratic model (axis of symmetry, vertex, roots, GDC), exponential growth and decay, other models (cubic, sinusoidal, piecewise, direct and inverse variation), graph features and GDC intersections, asymptotes.
- **Unit 4:** sampling and data types, frequency tables, mean, median, mode, IQR, box plots, outliers, scatter and correlation (Pearson r), regression line, interpolation and extrapolation, probability rules, Venn and tree diagrams, conditional and independent events, discrete random variables and E(X), binomial, normal, Spearman, chi-squared, t-test.
- **Unit 5:** gradient and derivative of x^n, increasing and decreasing, tangent and normal, integral of x^n and area under a curve, stationary points and optimisation, trapezoidal rule.

## Task breakdown
| # | Task | Depends on | Tier | Size | Parallel group |
|---|---|---|---|---|---|
| T-0041 | Web-ai-booklet-audit: row-by-row matrix and Unit 1 and 3 lesson gaps (1.5 log form, 2.5, prior-learning areas) | none | T1 | M | A |
| T-0042 | Web-ai-u245-scaffold: routes, stubs, sidebar and curriculum data for Units 2, 4, 5 | none | T2 | M | A |
| T-0043 to T-0047 | Web-ai-u2-functions, -linear-model, -quadratic, -exponential, -other-models | scaffold | T1 | S to M | B |
| T-0048 to T-0053 | Web-ai-u4-data, -measures, -regression, -probability, -distributions, -tests | scaffold | T1 | S to M | B |
| T-0054 to T-0056 | Web-ai-u5-derivative, -integration, -applications | scaffold | T1 | S to M | B |
| T-0057 | Web-ai-u245-wrapup: unit summaries, topic lists, hours, CLAUDE.md tracker row | all lessons | T1 | S | C |
| wave 2 (backlog) | Papers: Unit 1 gaps, Unit 2 (2), Unit 3 (lines, Voronoi, mixed), Unit 4 (3), Unit 5 (2) | audit, lessons | T1 each | L | D |
| wave 3 (backlog) | Mock set 1 (Paper 1 and Paper 2) and final booklet re-audit | wave 2 | T2 | L | E |

Group A runs in parallel. Group B starts after the scaffold, each task edits only its own section file. Group C after B. Papers in group D can start per unit as soon as that unit's lesson is done.

## Coverage rule (acceptance for the whole plan)
For every booklet row: a `FormulaRow` (or equivalent) in a lesson section in booklet notation, and at least one paper question using it. The final audit prints the matrix with section id and paper slug per row; no empty cell.

## Out of scope
HL content, interactive reveal-key practice for Units 2 to 5, mock exam for AA, redesign of lesson components.
