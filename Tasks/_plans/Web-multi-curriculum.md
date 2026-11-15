# Plan: Multi-curriculum learning platform

## Goal
Turn the IB Math Guide into a student-facing learning site that holds several curricula (IB DP Maths AA/AI today, Grade 10 science and maths already present, Cambridge and others later). Students find their curriculum, level, subject, unit, topic and material quickly. The owner adds content by editing typed data files. Every existing page keeps its URL and still works.

Not in scope, ever: accounts, backend, database, scheduling, payments, tutor admin.

## Audit (Phase 1, done in this plan)

### What exists
| Area | Where | Notes |
|---|---|---|
| Course data (AA, AI) | `src/lib/curriculum-data.ts` | `CurriculumData` hard-typed to `pathway: "aa" \| "ai"`, IB-only fields (`slHours`, `hlTopics`). `mockSets` empty. |
| Sidebar tree | `src/lib/sidebar-data.ts` | Second copy of course structure: `PRACTICE_TOPICS` and `LESSON_TOPICS` keyed `"aa/1"`, kept in sync by hand with each page's `generateStaticParams`. |
| Worksheets | `src/lib/worksheet-data.ts`, `src/app/worksheets/*` | 3 sheets, none IB DP: Physics Grade 10 (10SCI Unit 5), Maths Grade 10 AA Foundation, Geometry area and volume. `course` is free text. |
| Review papers | `src/lib/review-data.ts`, `src/lib/ai-review-papers/*` (33 papers), `src/app/review/paper-1..3` | Good data model (`AiReviewPaper`), rendered by `DataPaper`. |
| Lessons | `src/app/aa/unit-{1,3}/lesson`, `src/app/ai/unit-{1..5}/lesson` | AA pages are single 1.7k to 2.7k line files with local helpers. AI pages split into `_sections/` with a per-unit `helpers.tsx` (5 copies, about 270 lines differ between copies). |
| Interactive practice | `src/app/{aa,ai}/unit-N/practice/[id]` | 4 units. AA Unit 1 id 4 is "Chemistry G10 NaHCO3": non-IB content filed under IB AA. |
| Layout | `Navbar` (Home, AA, AI, Worksheets, Review), `Sidebar` on `/aa/**` `/ai/**`, `Footer`, A4/Web mode on `/worksheets/**` `/review/**` | Display mode contract: `Tasks/_plans/Web-ui-consistency.md` Revision 2 and 3. |
| Home `/` | `src/components/home/*` (9 sections) | AA vs AI decision guide. Nothing links to its anchors. |
| Other | `/ai/unit-1/tutor` (tutor-only plan), `public/ib-exam-simulator.html` | Tutor page is not student content. |
| SEO | `site.ts`, root metadata, OG/Twitter images | All IB-branded. No `sitemap.ts`, no `not-found.tsx`. |
| Tests | none | No test runner in the repo. |

### Limits to fix
1. Content is IB-shaped in the types (`"aa" | "ai"`, SL/HL hours), so a Cambridge or Grade 10 course cannot be expressed.
2. One course's structure lives in 4 files that must be edited together.
3. Materials are found by section (Worksheets, Review), not by course or topic, and carry no purpose, difficulty or answers flag a student can scan.
4. No browse, filter, search, breadcrumbs or formula/reference hub.

## Content model (contract, owned by Web-mc-catalog)

The spine is short and only two levels are required: **Curriculum → Course → (Unit) → (Topic) → Resource**. Level and subject are **facets on the course**, not tree levels, so a curriculum with no grades, or a course spanning two grades, needs no special case.

```ts
type Curriculum = { id: string; name: string; shortName: string; description: string; order: number };
type Level      = { id: string; curriculumId: string; name: string; order: number };   // "dp-year-1", "grade-10"
type Subject    = { id: string; name: string };                                        // "mathematics", "physics"
type Course = {
  id: string; curriculumId: string; subjectId: string; levelIds: string[];
  title: string; shortTitle: string; description: string;
  href: string;                          // canonical page; "/aa" for IB AA, "/courses/<id>" for new courses
  unitLabel?: "Unit" | "Chapter" | "Topic" | "Module";   // default "Unit"
  tracks?: { id: string; label: string }[];             // IB: SL / HL; omitted elsewhere
  units: Unit[]; status: "available" | "coming-soon";
};
type Unit  = { id: string; number?: number; title: string; description?: string; topics: Topic[] };
type Topic = { id: string; title: string; href?: string; track?: string };   // href usually "<lesson>#anchor"
type ResourceKind = "lesson" | "topic-exercise" | "worksheet" | "quiz" | "test"
  | "exam-style" | "mock" | "revision" | "formula-sheet" | "reference";
type Resource = {
  id: string; kind: ResourceKind; title: string; description: string;
  courseId: string; unitId?: string; topicIds?: string[]; href: string;
  status: "available" | "coming-soon";
  difficulty?: "foundation" | "standard" | "challenge";
  marks?: number; questionCount?: number; durationMinutes?: number; calculator?: boolean;
  hasAnswers: boolean; interactive?: boolean; printable?: boolean;
  addedOn: string;                       // YYYY-MM-DD, drives "Recently added"
  featured?: boolean;                    // drives "Recommended"
  hidden?: boolean;                      // in catalog for breadcrumbs, not listed (tutor page)
};
```

- Data lives in `src/content/<curriculum>/*.ts` (one file per course). UI never hard-codes course facts.
- `src/lib/catalog/` exposes selectors only: `getCurriculum`, `getCourse`, `listCourses(filter)`, `listResources(filter)`, `breadcrumbsFor(href)`, `searchIndex()`, `recentlyAdded(n)`, `featured()`.
- `assertCatalog()` runs at module load and throws during `next build` on duplicate ids, dangling `courseId/unitId/topicIds`, or a `Resource.href` that is not a known route prefix. This is the integrity test (see G3 note).
- IB AA/AI: in wave 1, `curriculum-data.ts`, `review-data.ts` and `worksheet-data.ts` stay the place the owner edits; `src/content/ib-dp/*.ts` adapts them into the model, so nothing is edited twice. `sidebar-data.ts` is rebuilt on the catalog (Web-mc-sidebar), which removes its hand-kept maps.
- The documented contract goes to `Docs/architecture/content-model.md` (one place; CLAUDE.md links to it).

## Routes

| Route | State | Purpose |
|---|---|---|
| `/` | change | Learning home (see Screens). |
| `/ib/aa-vs-ai` | new | The current decision guide, moved here with the same 9 section components. |
| `/browse` | new | All courses, filter by curriculum, level, subject (`?curriculum=&level=&subject=`, shareable). |
| `/curricula/[curriculum]` | new | One curriculum: its levels and courses. |
| `/courses/[course]` | new | Generic course page for non-IB courses (units, topics, materials). |
| `/aa`, `/ai` | change | Rendered by the same generic course component, IB extras (SL/HL hours, mock sets) as optional blocks. URL unchanged. |
| `/practice` | new | Materials hub: grouped by kind, filter by course and kind. |
| `/worksheets`, `/review` | change | Kept as filtered views of the catalog (kind worksheet / revision + exam-style). URLs unchanged. |
| `/reference` | new | Formula sheets and reference notes per course. |
| `/search` | new | Search results page (also opened from the navbar). |
| All lesson, practice, review, worksheet pages | exists | No URL changes. |

Redirects (`next.config.ts`): `/courses/ib-dp-math-aa` → `/aa`, `/courses/ib-dp-math-ai` → `/ai`, so generic links always work. No existing URL moves, so no other redirects are needed.

## Flow (student)
| Step | State |
|---|---|
| Land on `/`, pick curriculum (chips), then level, see that level's subjects/courses | new |
| Or use "Continue": recently added materials and recommended lessons | new |
| Open a course: units with topics, each topic links to its lesson anchor; materials for the unit listed under it | change (`CurriculumPage` → `CoursePage`) |
| Read a lesson: breadcrumb (Curriculum / Course / Unit), sidebar topics, existing lesson body | change (breadcrumb + sidebar from catalog); body exists |
| Open practice: interactive practice with key reveal | exists |
| Open worksheet / review paper, A4 mode, print, export | exists |
| Browse materials by kind with purpose, difficulty, marks, time, answers flag shown before opening | new (`/practice`) |
| Open formula sheets / reference | new (`/reference`) |
| Search from any page (`/` key or navbar button), results grouped Courses / Topics / Materials | new |
| Unknown URL shows a helpful 404 with search and browse links | new (`not-found.tsx`) |

## Screens and states
- **Home:** short welcome line; curriculum picker (chips, remembered in `localStorage` with try/catch, works without it); course list for the chosen curriculum grouped by level; "Recently added" (6 newest `addedOn`); "Recommended" (`featured`); link to the AA vs AI guide inside the IB block. Empty state per curriculum with no courses: "Materials for this curriculum are coming soon" + link to browse.
- **Browse:** filter bar (3 selects, mobile: stacked) + list of course rows (not a card grid). Empty filter result: message + "Clear filters".
- **Course page:** header (curriculum and level line, title, one-line description, tracks); unit list as an accordion on mobile, open list on desktop; each unit shows topics and its materials with kind label. Units with nothing available show "Coming soon" once, not per item.
- **Materials hub:** sections by kind in a fixed order (Lessons, Topic exercises, Worksheets, Exam-style questions, Revision papers, Mock exams, Quizzes, Tests, Answers); each row shows course, difficulty, marks or questions, time, calculator, "answers included", "interactive". Kinds with no items are not shown.
- **Reference:** per course, list of formula sheets and reference notes; reading layout max width about 70ch, prints cleanly.
- **Search:** dialog on desktop, full screen on mobile, keyboard navigable; no-results state with browse link.
- **404 / error:** `src/app/not-found.tsx` and `src/app/error.tsx`.
- Loading: all pages are static (SSG); no loading states needed except the search index, which ships with the page.

## Design direction (from the owner's brief and the existing neutral palette contract)
- Keep the Revision 3 rules of `Web-ui-consistency.md`: navy brand tone, one accent (`aa-primary` blue), colour only in visuals and exercise items, no coloured fills in chrome.
- Add semantic tokens in `globals.css`: `--color-ink`, `--color-ink-muted`, `--color-surface`, `--color-surface-alt`, `--color-line`, `--color-accent`, `--color-accent-soft`. Existing `aa-*`, `ai-*`, `navy-*` stay (lesson pages use them); new components use only the semantic tokens.
- Typography: Inter stays; reading text 16px/1.7 on lessons, 14px on lists and papers (Revision 3); one heading scale used everywhere (page title, section, sub-section).
- Layout: content max width 1100px for hubs, about 72ch reading column for lessons; 16px side gutters on mobile; navbar collapses to a menu button under `md`.
- Lists over card grids for browsing; no gradients, no decorative illustrations, motion limited to accordion and dialog transitions, respecting `prefers-reduced-motion` (already in `globals.css`).
- Navbar: brand, Browse, Practice, Reference, Search button. Course switching happens on Browse and Home, not in a mega-menu.

## Gaps and decisions
| Gap | Decision and why |
|---|---|
| No design frames exist | Build from the brief and the neutral palette contract above; the owner reviews visually in testing (G4/G9). No new visual language is invented beyond the tokens above. |
| Grade 10 content has no named curriculum (Physics "10SCI", "Grade 10 AA Foundation", Chemistry G10) | Seed a curriculum `intl-school` "International School" with level `grade-10` and courses `g10-science`, `g10-mathematics` until the owner names it (Open question 3). Renaming is a data edit. |
| Chemistry G10 practice is AA Unit 1 practice id 4 | URL stays `/aa/unit-1/practice/4`; the catalog files it under `g10-science`, and the AA sidebar stops listing it (Web-mc-sidebar). The practice page's own topic navigator still shows it; fixing that is in the backlog file (touches `PracticeClient.tsx`). |
| `addedOn` dates do not exist | Fill once from `git log --diff-filter=A` of each route file (Web-mc-catalog). |
| Course structure duplicated in 4 files | Wave 1: catalog adapts the existing files (one edit point stays per fact); sidebar maps move into `src/content/ib-dp/*`. Full move of AA/AI unit data into `src/content` is backlog, after the owner has used the new files. |
| Shared lesson kit | 5 diverging helper copies plus 2 AA single-file pages. Refactoring them is large and risks the content. Backlog, one unit per task. Wave 1 only adds breadcrumbs and catalog-driven sidebar around the existing lesson body. |
| No test runner (G3) | `assertCatalog()` fails the build on broken data; route audit in Web-mc-qa checks every catalog href against the build output. Adding vitest is out of scope; each task writes `Skipped G3 (new tests): no runner, covered by assertCatalog + route audit`. |
| Tutor page `/ai/unit-1/tutor` on a student site | Keep the route, mark `hidden: true` in the catalog, add `robots: { index: false }`. |
| Git branch: `AGENTS.md` says `main`, this skill says `dev` | `AGENTS.md` governs git workflow, so tasks commit to `main`. |
| `CLAUDE.md` file tree and progress table are stale and IB-only | Web-mc-qa updates them and links `Docs/architecture/content-model.md` for "How to add content". |

## Open questions (with recommendation; planning did not stop for them)
1. **Site name.** Today "IB Math Guide". Recommend **"VANN Seavlong Learning"** (matches the repo, not tied to one curriculum). Lives in one constant in `site.ts`, so it can change later. Needed before Web-mc-shell is committed.
2. **Homepage.** Recommend the new learning home on `/` and the AA vs AI guide at `/ib/aa-vs-ai`, linked from Home and the IB curriculum page. Alternative: keep the guide on `/` and put the home on `/learn` (worse for new students).
3. **Curricula and level names to seed.** Which curriculum do the Grade 10 materials belong to (school MYP, Cambridge Lower Secondary, a school programme)? Recommend the owner names it; until then `International School / Grade 10`. Also confirm the first new curriculum to add (recommend Cambridge IGCSE Mathematics, as a `coming-soon` course with no content, so the browse and empty states are exercised).
4. **Recommended lessons.** Recommend owner-curated `featured: true` flags (no algorithm). Initial picks: AA Unit 1 lesson, AI Unit 1 lesson, AI Unit 3 practice.

## Task breakdown
| # | Task | ID | Depends on | Parallel group | Tier | Size |
|---|---|---|---|---|---|---|
| 1 | Web-mc-catalog: content model, adapters, selectors, integrity check, `Docs/architecture/content-model.md` | T-0067 | none | A | T2 | M |
| 2 | Web-mc-shell: tokens, Navbar, mobile menu, Footer, Breadcrumbs (props only), site name, OG images, 404, error | T-0068 | Open question 1 | A | T2 | M |
| 3 | Web-mc-sidebar: sidebar from catalog, breadcrumbs on `/aa/**` `/ai/**` layouts | T-0069 | 1, 2 | B | T2 | S |
| 4 | Web-mc-browse: `/browse`, `/curricula/[c]`, `/courses/[c]`, `CoursePage` replacing `CurriculumPage`, `/aa` `/ai` on it, redirects | T-0070 | 1, 2 | B | T2 | L |
| 5 | Web-mc-home: new `/`, move guide to `/ib/aa-vs-ai` | T-0071 | 1, 2 | B | T2 | M |
| 6 | Web-mc-materials: `/practice` hub, `/worksheets` and `/review` as catalog views | T-0072 | 1, 2 | B | T2 | M |
| 7 | Web-mc-search-reference: search dialog + `/search`, `/reference` hub | T-0073 | 1, 2 | B | T2 | M |
| 8 | Web-mc-qa: route audit, `sitemap.ts`, metadata check, mobile check list, CLAUDE.md/README update | T-0074 | 3 to 7 | C | T2 | M |

Group A runs in parallel (disjoint files). Group B runs in parallel after A: each task owns its own route folders and component folder; the only shared files are named in each task's `Touches` and are not shared between two B tasks (Navbar's search button slot is created by task 2 and filled by task 7 through `src/components/search/SearchButton.tsx`, which task 2 creates as a stub). Group C is last.

Later waves: `Tasks/1-backlog/Web-mc-wave-2.md`.

## Out of scope
Backend, accounts, progress tracking, analytics, comments, dark mode, CMS/admin UI, translating content, new lesson content, decolouring lesson and practice pages (existing backlog `Web-decolor-lessons-practice`, T-0001).
