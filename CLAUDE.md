# Techie Club (teaching material platform)

## Project Overview
A Next.js learning site by VANN Seavlong for the courses he teaches: IB DP Mathematics AA and AI (Grade 11), AIA Mathematics (Grade 6, Grade 9) and other materials. Students-only content site: no accounts, no backend.
Content is organised as **Curriculum → Course → Unit → Topic → Resource**; the model and the add-content recipes are in `Docs/architecture/content-model.md`. Plan: `Tasks/_plans/Web-multi-curriculum.md`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (inline `@theme` tokens in `globals.css`)
- **Math rendering:** KaTeX v0.16 via `src/components/ui/Math.tsx` (`InlineMath`, `BlockMath`). CSS imported in `layout.tsx`.
- **Location:** `/home/longcelot/TeachingMaterial/IB/teaching-material-ib/` // This depend on the machine that work on this.
- **UI primitives:** shadcn (Radix) in `src/components/shadcn` (Select, Dialog, Command, Sheet, Collapsible, Accordion, DropdownMenu, ToggleGroup). Do not use native `<select>`, `<dialog>`, `<details>` or `type="search"` inputs; use these, or `Reveal` (`src/components/ui/Reveal.tsx`) for show/hide solutions.
- **Package manager:** npm
- **Build:** `npm run build` / **Dev:** `npm run dev`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx, globals.css      # Root layout (Navbar with search index, Footer), theme tokens
│   ├── page.tsx                     # Learning home (curriculum chips, courses by grade, recently added)
│   ├── browse/  curricula/[curriculum]/  courses/[course]/   # Course discovery; generic course page
│   ├── practice/  reference/  search/                        # Materials hub, formula recaps, search
│   ├── ib/aa-vs-ai/                 # AA vs AI decision guide (was the homepage)
│   ├── aa/, ai/                     # IB course pages (/aa, /ai) + unit lessons and practice
│   ├── worksheets/, review/         # Worksheets and review papers (A4 mode)
│   ├── sitemap.ts, robots.ts, not-found.tsx, error.tsx
├── content/                         # Course data per curriculum: ib-dp/, aia/, others/, subjects.ts
├── components/
│   ├── ui/                          # Card, Hero, Section, HighlightBox, Tag, Math (KaTeX), FAQ...
│   ├── layout/                      # Navbar, Footer, Sidebar, SidebarNav, ModeProvider/Toggle
│   ├── course/                      # CoursePage, CourseRow, IbCourseExtras, BrowseFilters
│   ├── materials/                   # ResourceRow, MaterialsByCourse, MaterialsFilter
│   ├── search/  nav/  home-learn/  home/ (guide sections)  review/
└── lib/
    ├── catalog/                     # Content model types, selectors, assertCatalog()
    ├── curriculum-data.ts           # IB AA/AI unit facts (adapted by src/content/ib-dp)
    ├── sidebar-data.ts              # Course sidebar built from the catalog
    ├── ai-review-papers/, review-data.ts, worksheet-data.ts, site.ts, display-mode.ts
scripts/route-audit.mjs              # Crawl + legacy-route check (see Docs/architecture/content-model.md)
```

## Design System

### Color Tokens (defined in globals.css)
| Token prefix | Purpose           | Example           |
|-------------|-------------------|-------------------|
| `aa-*`      | AA pathway (blue) | `bg-aa-primary`   |
| `ai-*`      | AI pathway (green)| `bg-ai-primary`   |
| `navy-*`    | Primary dark text | `text-navy-900`   |
| `warn-*`    | Warning (yellow)  | `bg-warn-bg`      |
| `danger-*`  | Danger (red)      | `border-danger-primary` |
| `ink*`, `surface*`, `line*`, `accent*` | Semantic tokens; **new components use only these** | `text-ink-muted`, `bg-surface-alt`, `border-line`, `bg-accent` |

### Component Variants
- **Card:** `variant="aa" | "ai" | "info" | "warn" | "default"`
- **HighlightBox:** `variant="blue" | "green" | "yellow" | "red"`
- **Tag:** `variant="blue" | "green" | "yellow" | "red"`

**Neutral rule:** colour is reserved for visuals (class `visual`) and items inside exercise questions (`q-accent`). Variant props are kept for compatibility but render neutral: surfaces white/`slate-50`, borders `slate-200`, one accent `aa-primary`. `aa`/`blue` = accent left border or outline; `ai`/`green`/`yellow`/`info`/`warn` = grey left border or outline; `red` keeps a red left border for genuine warnings only. Shared primitives carry `a4:` overrides (white, black borders, no shadow). See `Tasks/_plans/Web-ui-consistency.md`.

## Pages

### Home (`/`)
Curriculum chips (All, IB DP, AIA, Others; choice remembered in localStorage), courses grouped by grade, and "Recently added" (newest `addedOn`). Kept simple by owner decision.

### Browse, curriculum and course pages
- `/browse`: all courses, filters `?curriculum=&level=&subject=`.
- `/curricula/[id]`: one curriculum's courses by grade.
- `/courses/[id]`: generic `CoursePage` (units, topics, materials per unit). `/aa` and `/ai` use the same `CoursePage` plus `IbCourseExtras` (SL/HL hours, mock sets from `mockSets`, exam structure). `/courses/ib-dp-math-aa|ai` redirect to `/aa`, `/ai`.

### Materials
`/practice` (all materials by kind, filters `?course=&kind=`), `/worksheets` and `/review` (catalog views, A4 mode), `/reference` (unit formula recaps, `#summary` on each lesson), `/search` (+ dialog on `/`).

### AA vs AI guide (`/ib/aa-vs-ai`)
The 9 sections in `src/components/home/` (What Is IB Math, Two Pathways, AA Detail, AI Detail, SL vs HL, Comparison, Careers, Decision Guide, FAQ).

## How to Add Content

Start with `Docs/architecture/content-model.md` (recipes for a resource, a course, a curriculum). `npm run build` fails with a list of problems if the catalog data is inconsistent.

### IB AA/AI lesson or practice for a unit:
1. Edit `src/lib/curriculum-data.ts`: in the unit's `contents`, set `status: "available"` and `href`.
2. Lesson topics: add `[anchor, title]` rows to `LESSON_TOPICS` in `src/content/ib-dp/index.ts` (anchors = section ids on the lesson page). Sidebar, course page and search pick them up.
3. Practice sets: add `{ id, title, topic, addedOn }` to `PRACTICE_TOPICS` in the same file.
4. Create the page following the conventions below.

### Anything else (AIA, Others, a new curriculum):
Add `Course` / `Resource` objects in `src/content/<curriculum>/index.ts` (see the doc). Non-IB courses render at `/courses/<id>` with no new page file.

## Lesson Page Convention (established with AA Unit 1)

Every lesson page lives at `src/app/[pathway]/unit-[n]/lesson/page.tsx`.

### Lesson Page Structure (follow this order):
1. **`LessonHero`** — dark navy gradient; breadcrumb, unit number, SL/HL tags, title, description, hour counts.
2. **`TableOfContents`** — sticky bar with anchor links; SL links in blue (`aa-bg`), HL links in red (`danger-bg`).
3. **Topic sections** — one `LessonSection` per topic (SL topics first, then `HLDivider`, then HL topics).
4. **`UnitSummary`** — key formula recap grid + navigation links back to curriculum.

### Per-Topic Section Structure:
Each topic section should contain (in this order):
- `HighlightBox variant="blue"` — key idea / definition in plain language.
- **All `FormulaBox` groups** (dark navy) — each formula group has its own titled `FormulaBox`. Multiple formula groups are stacked before any examples. Rule: **all formulas first, all examples after**.
- Visual aid — a simple diagram, table, or step flow using Tailwind grid/flex (no external image files).
- **All `WorkedExample`** blocks — one per major formula group/technique, appearing only after ALL formula groups.
- `Practice` — always-visible problem + collapsible solution via native `<details>`. Add multiple `Practice` blocks when there are multiple formula groups (one practice per technique group minimum).

### Helper components (defined inside each lesson page file):
| Component | Purpose |
|-----------|---------|
| `FormulaBox` | Dark navy card holding formula rows; use separate titled boxes per formula group |
| `FormulaRow` | `{label, math}` — plain-text label + `InlineMath` formula in a row |
| `StepBox` | Numbered step with blue circle badge |
| `WorkedExample` | Blue-bordered card with "Worked Example" label |
| `Practice` | Yellow-bordered card; problem always visible, solution in `<details>` |
| `LessonSection` | Local section wrapper (replaces shared `Section`; controls alt bg) |
| `SLTag` / `HLTag` | Blue / red pill indicating audience |
| `HLDivider` | Full-width red banner separating SL from HL content |

**`HLTag` inside `WorkedExample`:** Place `<HLTag />` + description `<span>` at the top of a `WorkedExample`'s children (before `StepBox` 1) when the example covers HL-depth content within an otherwise SL section. Established in Topic 2 Group 4.

### Math rendering:
- Use `InlineMath` for math within text.
- Use `BlockMath` for standalone equations.
- Both are server-side rendered via KaTeX — no 'use client' needed.
- Import from `@/components/ui/Math`.

### Updating curriculum-data.ts when a lesson is complete:
Change the `contents` entry for that unit:
```ts
{ title: "Lesson", status: "available", href: "/aa/unit-N/lesson" }
```

---

## Practice Page Convention (established with AA Unit 1, ids 1–3)

Every per-topic practice page lives at `src/app/[pathway]/unit-[n]/practice/[id]/`.
The `id` corresponds to the topic order in `slTopics` (1-indexed).

### File structure per practice:
| File | Role |
|------|------|
| `page.tsx` | Server component — exports `generateMetadata`, `generateStaticParams`, calls `notFound()` for unknown ids, renders `<PracticeClient id={id} />` |
| `PracticeClient.tsx` | `"use client"` — all interactive state, problem cards, key generation |

### Practice UX flow:
1. Student reads each problem (KaTeX rendered) and enters a **short/final answer** in a text box.
2. A sticky progress bar shows how many problems have been answered.
3. A **topic navigator** strip links between all practice topics for that unit.
4. Once all boxes are filled, the **Finish Practice & Get Key** button activates.
5. On click — the practice's **permanent reveal key** is displayed (stored in `PRACTICE_DATA`, not generated at runtime).
6. A key-entry field appears; student types the key to **unlock** the model-answer comparison view.
7. The comparison shows their answer (left) alongside the model answer with KaTeX (right).
8. **Entered answers are in-memory React state** — they are erased when the student navigates away, but the key works every time they finish the practice.

### Practice data structure (inside `PracticeClient.tsx`):
```ts
type Problem = {
  id: number;
  question: string;
  math?: string;           // KaTeX expression for the expression to work on
  parts?: { label: string; math: string }[];
  answer: string;          // plain-text model answer
  answerMath?: string;     // KaTeX model answer
  difficulty: "basic" | "standard" | "challenge";
};

type PracticeSet = {
  id: string;              // matches URL [id]
  topicNumber: number;
  title: string;
  tagline: string;
  /** Permanent reveal key — hard-to-guess string stored in source, NOT runtime-generated */
  revealKey: string;
  problems: Problem[];
};

const PRACTICE_DATA: Record<string, PracticeSet> = { "1": ..., "2": ..., "3": ... };
```

### Adding more practice topics to a unit:
1. Add a new entry to `PRACTICE_DATA` in `PracticeClient.tsx` with the next `id`. **Generate a new hard-to-guess `revealKey`** (10-char alphanumeric, e.g. `"K9TZ4WRX2M"`).
2. Add `{ id: "N" }` to `generateStaticParams()` in `page.tsx`.
3. Add `id` to the `TITLES` map in `page.tsx`.
4. Add the set to `PRACTICE_TOPICS` in `src/content/ib-dp/index.ts` (sidebar, course page, `/practice`, search).
5. No changes to `curriculum-data.ts` needed (the entry point `/unit-N/practice/1` stays the same).

### Updating curriculum-data.ts when practice is ready:
```ts
{ title: "Practice Problems", status: "available", href: "/aa/unit-N/practice/1" }
```

## AA Unit 1 — Lesson Content Reference

### Topic 1: Laws of Indices
One `FormulaBox` (9 rows: multiply, divide, power of power, power of product, power of quotient, zero index, negative index, unit fraction index, general fractional index). One `WorkedExample` (simplify with mixed laws). One `Practice`.

### Topic 2: Surds
Four `FormulaBox` groups — all appear before any examples:

| Group | Title | Formulas covered |
|-------|-------|-----------------|
| 1 | Square Root (√) Rules | Product, self-multiply, combine same radicand, rationalise simple, rationalise conjugate |
| 2 | Cube Root (∛) Rules | Product, self-triple `(∛a)³=a`, simplify perfect-cube factor, rationalise `k/∛a` |
| 3 | Nth Root Rules | Index connection `ⁿ√a=a^(1/n)`, product, power `ⁿ√(aᵐ)=a^(m/n)`, nested root |
| 4 | Conjugate Identities | A: diff of squares + classic rationalise; B: cube sum/diff identities; C: nth power difference (concept); D: nth root exponent method |

7 `WorkedExample`s (3 for groups 1–3 + 4 for group 4). Group 4 WE2 & WE3 carry `HLTag` (cube identity / missing factor form). 7 `Practice` problems (3 + 4).

### Topic 3: Quadratic Equations
**SL content:** One `FormulaBox` (7 rows: standard form, quadratic formula, Δ, Δ' reduced discriminant, a+b+c=0 shortcut, a−b+c=0 shortcut, Vieta's formulae). Yellow `HighlightBox` explains WHY shortcuts work. 4 `WorkedExample`s. 3 `Practice` problems.

**HL Extension** (5 sub-sections, each with `HLTag`, appended after SL content, preceded by a red inline HL banner):

| Sub-section | FormulaBox content | Examples | Practice |
|-------------|-------------------|----------|----------|
| HL 1 — Discriminant Deep Analysis | Δ>0/=0/<0 classification, axis of symmetry, x-intercept count | WE: nature of roots (2x²−4x+5); parameter k for equal roots | 2 (k for real roots; classify without solving) |
| HL 2 — Completing the Square (Derivation) | 5 derivation steps ax²+bx+c→quadratic formula | WE: full derivation; vertex form 3x²+12x+7 | 1 (vertex form + minimum) |
| HL 3 — Vieta's Full System | Sum α+β=−b/a, product αβ=c/a, reconstruct quadratic, α²+β² identity, (α−β)² identity | WE: form quadratic from roots 2,−3; α²+β²=13 parameter problem | 2 (quadratic from sum/product; evaluate α²+β²) |
| HL 4 — Complex Roots | Complex root formula, Re/Im parts, conjugate pair property | WE: x²+4x+13=0 → −2±3i | 1 (x²+2x+10=0 in a+bi form) |
| HL 5 — Transformations of Quadratic Graphs | Vertex form y=a(x−h)²+k, vertex, axis, min/max, a-stretch/reflect rule | WE: describe y=−2(x−3)²+5 from y=x² | 1 (vertex, axis, min, describe transformation) |

### Topic 4: Completing the Square
One `FormulaBox` (2 rows: for x²+bx+c and ax²+bx+c). Visual step-flow diagram. One `WorkedExample`. One `Practice`.

### Topic 5: Sequences & Series
Two dark-navy cards side by side (AP and GP) — each card contains general term + sum formulas. Yellow `HighlightBox` on convergence. Two `WorkedExample`s (AP and GP). One `Practice`.

### Topic 6: Logarithms
One `FormulaBox` (7 rows: product, quotient, power, identity, zero rule, change of base, inverse). Visual log↔exponential switch. One `WorkedExample`. One `Practice`.

### Topic 7: Binomial Expansion
One `FormulaBox` (expansion, binomial coefficient, general term). Pascal's Triangle visual. One `WorkedExample` (tabular expansion). One `Practice`.

### HL Topic 1: Proof by Induction
Red `HighlightBox` (4-step method). Domino analogy visual. One `WorkedExample` (sum of integers). One `Practice` (sum of squares).

### HL Topic 2: Complex Numbers
Red `HighlightBox` (powers of i). Two side-by-side dark cards (Cartesian form + Polar/Euler form). Argand diagram (ASCII). One `WorkedExample`. One `Practice`.

### HL Topic 3: Advanced Sequences & Series
One `FormulaBox` (sigma notation + standard sum results for r, r², r³). Red `HighlightBox` on splitting sums. One `WorkedExample`. One `Practice`.

### HL Topic 4: Harder Binomial Expansion
Red `HighlightBox` (general binomial series). One `FormulaBox` (negative/fractional index patterns). Validity check visual. One `WorkedExample`. One `Practice`.

---

## Progress Tracker
| Path | Lesson | Practice | Mock |
|------|--------|----------|------|
| AA Unit 1: Algebra | ✅ Done | ✅ Topics 1–3 (indices, surds, quadratics) | ⏳ Coming |
| AA Unit 2: Functions | ⏳ | ⏳ | ⏳ |
| AA Unit 3: Trigonometry | ✅ Done | ✅ Interactive practice ids 1–7 (4 SL + 3 HL) | ⏳ |
| AA Unit 4: Geometry & Vectors | ⏳ | ⏳ | ⏳ |
| AA Unit 5: Statistics & Probability | ⏳ | ⏳ | ⏳ |
| AA Unit 6: Calculus | ⏳ | ⏳ | ⏳ |
| AI Unit 1: Number & Algebra | 🟡 Topics 1–2 + summative revision (sequences, rounding, bounds, % error) | ✅ Financial (interactive) + 7 exportable review papers | ⏳ |
| AI Unit 2: Functions & Modelling | 🟡 Functions, linear, quadratic (2.5), exponential and log form (1.5), other models (SL, awaiting review) | ⏳ | ⏳ |
| AI Unit 3: Geometry & Trigonometry | 🟡 Lines, 3D & solids, trigonometry, arc & sector, trig in shapes, trig in context, Voronoi (SL) + HL graph theory and vectors (awaiting review) | ✅ Interactive practice ids 1–9 (id 9 = trig in shapes) + 10 exportable review papers (trigonometry, arc & sector, shapes, 3D, lines & Voronoi, solids, trig in context, mixed, HL graph theory, HL vectors) | ⏳ |
| AI Unit 4: Statistics & Probability | 🟡 Data, measures (4.2, 4.3), regression, probability (4.5, 4.6), distributions (4.7, 4.8), tests (SL, awaiting review) | ⏳ | ⏳ |
| AI Unit 5: Calculus & Technology | 🟡 Derivative (5.3), integration and area (5.5), trapezoidal rule (5.8), optimisation (SL, awaiting review) | ⏳ | ⏳ |
| AIA Grade 6 Mathematics | ⏳ | ⏳ | ⏳ |
| AIA Grade 9 Mathematics | ⏳ | ⏳ | ⏳ |
| Others (G10 Physics, G10 Maths, G10 Chemistry, Area & Volume) | n/a | ✅ 3 worksheets/tests + Chemistry practice (`/aa/unit-1/practice/4`) | n/a |

## Notation: follow the IB AI SL formula booklet
Use the booklet's symbols in all AI lessons, papers and practice: `u_n = u_1 + (n-1)d`, `S_n`, `u_n = u_1 r^{n-1}`, `FV = PV(1 + r/(100k))^{kn}` (k = periods per year, n = years, r% nominal annual rate), `\varepsilon = |(v_A - v_E)/v_E| \times 100\%` (v_E exact, v_A approximate), `a^x = b \Leftrightarrow x = \log_a b`. The booklet prints no sum to infinity, so it stays labelled as an extension. GDC TVM labels (N, I%, PV, PMT, FV, P/Y, C/Y) are used only in GDC steps.

## AI SL Summative Revision Papers
Data-driven, exportable Q&A papers (same Export PDF → Question / Q&A flow as `/review/paper-N`).
- Data: `src/lib/ai-review-papers.ts` (one `AiReviewPaper` per session; `\( \)` inline math, `\[ \]` block math).
- Renderer: `src/components/review/DataPaper.tsx`; route: `src/app/review/ai-sl/[slug]/page.tsx`.
- Papers auto-appear on `/review`, `/practice`, the AI course page and search. To add one, append to `aiReviewPapers` and add its date to `PAPER_ADDED` in `src/content/ib-dp/index.ts`.
- Lesson sections live in `src/app/ai/unit-1/lesson/page.tsx` (`RevisionPlan` + Arithmetic, Geometric, Rounding, Bounds, Percentage Error).

## Future Plans
- Complete lesson pages for all units (follow the AA Unit 1 convention above)
- Add practice problem sets with answer sheets
- Add mock tests per unit and full mock exams
- Add exam preparation guides
- All content pages follow the pattern: Lesson → Practice → Mock → Exam Prep → Answers



## Agent rules

Shared rules for every agent live in `AGENTS.md` and apply here too:

@AGENTS.md
