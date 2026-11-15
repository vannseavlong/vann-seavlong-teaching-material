# Content model

How the site organises curricula, courses and materials, and how to add content. Plan and reasons: `Tasks/_plans/Web-multi-curriculum.md`.

## Shape

**Curriculum → Course → Unit (optional) → Topic (optional) → Resource**

- **Level** (Grade 6, Grade 11) and **Subject** (Mathematics, Physics) are labels on a course, not tree levels. A course may have no level or several.
- A **Resource** is anything a student opens: lesson, topic exercise, worksheet, quiz, test, exam-style questions, mock, revision paper, formula sheet, reference note. It belongs to one course and optionally one unit and topics.
- Types: `src/lib/catalog/types.ts`. Queries: `src/lib/catalog/index.ts` (`listCourses`, `listResources`, `breadcrumbsFor`, `searchIndex`, `recentlyAdded`).
- Pages read the catalog; they never hard-code course facts.

## Where data lives

| Curriculum | File | Notes |
|---|---|---|
| IB DP (Grade 11, Maths AA and AI) | `src/content/ib-dp/index.ts` | Adapts `src/lib/curriculum-data.ts` (units, SL/HL topics, Lesson/Practice status), `src/lib/ai-review-papers/` and `src/lib/review-data.ts`. Holds the lesson-topic and practice-set lists. |
| AIA (Grade 6, Grade 9 Mathematics) | `src/content/aia/index.ts` | Courses are `coming-soon` until a unit or resource is added. |
| Others | `src/content/others/index.ts` | Material outside IB DP and AIA. Worksheet facts stay in `src/lib/worksheet-data.ts`. |
| Subjects | `src/content/subjects.ts` | Shared by all curricula. |

Each content file exports a `ContentPack` (`curricula`, `levels`, `courses`, `resources`). Packs are registered in `PACKS` in `src/lib/catalog/index.ts`.

## Integrity check

`assertCatalog()` runs when the catalog is imported, so `npm run build` fails on: duplicate ids, a level/course/resource pointing at an id that does not exist, a topic with an unknown track, an `addedOn` that is not `YYYY-MM-DD`, or an `href` outside the known route prefixes (`KNOWN_ROUTES` in `src/lib/catalog/index.ts`). Read the error list and fix the data.

## Recipes

**Add a resource to an existing course** (for example a new worksheet)
1. Build the page (worksheets under `src/app/worksheets/<id>/`, IB papers in `src/lib/ai-review-papers/`).
2. IB lessons and practice: follow the steps in `CLAUDE.md` (curriculum-data.ts status, `LESSON_TOPICS` / `PRACTICE_TOPICS` in `src/content/ib-dp/index.ts`). IB review papers appear automatically.
3. Anything else: add one `Resource` object to the course's content file with `kind`, `href`, `hasAnswers`, `addedOn` (today), and marks, questions or minutes when known.
4. `npm run build`.

**Add a course to an existing curriculum**
1. Add the `Course` to that curriculum's content file. Use `href: "/courses/<id>"`; the generic course page renders it.
2. Add a `Level` if the grade is new. Add a `Subject` in `subjects.ts` if new.
3. Add units (with `status`) and resources as they are written. A course with no units shows "Coming soon".

**Add a new curriculum**
1. Copy `src/content/aia/index.ts` to `src/content/<id>/index.ts` and set `curricula`, `levels`, `courses`.
2. Pick `order` (home and browse list curricula by it; Others is 99).
3. Import it and add it to `PACKS` in `src/lib/catalog/index.ts`.
4. `npm run build`; it appears on Home, Browse, search and the footer.

**Move a resource to another course or curriculum**
Change its `courseId` (and `unitId`). The URL does not change.

## Rules
- Ids are permanent: other data and saved links depend on them. Change titles freely.
- `hidden: true` keeps a page in the catalog (breadcrumbs work) but out of every list, search and the sitemap. Use it for tutor-only pages.
- Text in descriptions follows the content rules in `AGENTS.md` (no filler, no em-dash).

## Checking routes after a change
```
npm run build && npx next start -p 4817        # shell 1
node scripts/route-audit.mjs http://localhost:4817 c377ce5   # shell 2
```
The audit crawls from `/`, follows every internal link, checks each page returns 200 and each `#anchor` exists on its page, then requests every route that existed at the given git ref (`c377ce5` = last commit before the multi-curriculum migration). Exit code 1 lists what is broken.
