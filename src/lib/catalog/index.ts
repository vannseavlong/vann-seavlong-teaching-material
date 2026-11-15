// Read-only catalog of every curriculum, course and resource on the site.
// Data lives in src/content/*; this module only combines, checks and queries it.
// Contract: Docs/architecture/content-model.md

import ibDp from "@/content/ib-dp";
import aia from "@/content/aia";
import others from "@/content/others";
import { subjects } from "@/content/subjects";
import type {
  ContentPack,
  Course,
  Crumb,
  Curriculum,
  Level,
  Resource,
  ResourceKind,
  SearchEntry,
  Unit,
} from "./types";

export * from "./types";

/** Register a new content pack here (one line). */
const PACKS: ContentPack[] = [ibDp, aia, others];

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

export const curricula: Curriculum[] = PACKS.flatMap((p) => p.curricula).sort(byOrder);
export const levels: Level[] = PACKS.flatMap((p) => p.levels).sort(byOrder);
export const courses: Course[] = PACKS.flatMap((p) => p.courses);
export const resources: Resource[] = PACKS.flatMap((p) => p.resources);
export { subjects };

/** Route prefixes a resource or course href may point at. Add one when a new route family is created. */
const KNOWN_ROUTES = ["/aa", "/ai", "/review/", "/worksheets/", "/courses/", "/reference", "/practice"];

export const RESOURCE_KIND_LABEL: Record<ResourceKind, string> = {
  lesson: "Lesson",
  "topic-exercise": "Topic exercise",
  worksheet: "Worksheet",
  quiz: "Quiz",
  test: "Test",
  "exam-style": "Exam-style questions",
  mock: "Mock exam",
  revision: "Revision paper",
  "formula-sheet": "Formula sheet",
  reference: "Reference",
};

/** Plural headings, in the order materials are listed on hub pages. */
export const RESOURCE_KIND_ORDER: { kind: ResourceKind; heading: string }[] = [
  { kind: "lesson", heading: "Lessons" },
  { kind: "topic-exercise", heading: "Topic exercises" },
  { kind: "worksheet", heading: "Worksheets" },
  { kind: "exam-style", heading: "Exam-style questions" },
  { kind: "revision", heading: "Revision papers" },
  { kind: "mock", heading: "Mock exams" },
  { kind: "quiz", heading: "Quizzes" },
  { kind: "test", heading: "Tests" },
  { kind: "formula-sheet", heading: "Formula sheets" },
  { kind: "reference", heading: "Reference notes" },
];

// ---------------------------------------------------------------------------
// Integrity check: runs on import, so a broken data edit fails `next build`.
// ---------------------------------------------------------------------------

export function assertCatalog(): void {
  const errors: string[] = [];
  const dupes = (label: string, ids: string[]) => {
    const seen = new Set<string>();
    for (const id of ids) {
      if (seen.has(id)) errors.push(`duplicate ${label} id "${id}"`);
      seen.add(id);
    }
  };
  dupes("curriculum", curricula.map((c) => c.id));
  dupes("level", levels.map((l) => l.id));
  dupes("subject", subjects.map((s) => s.id));
  dupes("course", courses.map((c) => c.id));
  dupes("resource", resources.map((r) => r.id));

  const curriculumIds = new Set(curricula.map((c) => c.id));
  const subjectIds = new Set(subjects.map((s) => s.id));
  const knownHref = (href: string) => KNOWN_ROUTES.some((p) => href === p.replace(/\/$/, "") || href.startsWith(p));

  for (const l of levels) {
    if (!curriculumIds.has(l.curriculumId)) errors.push(`level "${l.id}": unknown curriculum "${l.curriculumId}"`);
  }
  for (const c of courses) {
    if (!curriculumIds.has(c.curriculumId)) errors.push(`course "${c.id}": unknown curriculum "${c.curriculumId}"`);
    if (!subjectIds.has(c.subjectId)) errors.push(`course "${c.id}": unknown subject "${c.subjectId}"`);
    for (const lv of c.levelIds) {
      const level = levels.find((l) => l.id === lv);
      if (!level) errors.push(`course "${c.id}": unknown level "${lv}"`);
      else if (level.curriculumId !== c.curriculumId) errors.push(`course "${c.id}": level "${lv}" is in another curriculum`);
    }
    if (!knownHref(c.href)) errors.push(`course "${c.id}": href "${c.href}" is not a known route`);
    dupes(`unit in course "${c.id}"`, c.units.map((u) => u.id));
    for (const u of c.units) {
      dupes(`topic in ${c.id}/${u.id}`, u.topics.map((t) => t.id));
      for (const t of u.topics) {
        if (t.track && !c.tracks?.some((tr) => tr.id === t.track)) {
          errors.push(`topic ${c.id}/${u.id}/${t.id}: unknown track "${t.track}"`);
        }
      }
    }
  }
  for (const r of resources) {
    const c = courses.find((x) => x.id === r.courseId);
    if (!c) {
      errors.push(`resource "${r.id}": unknown course "${r.courseId}"`);
      continue;
    }
    const u = r.unitId ? c.units.find((x) => x.id === r.unitId) : undefined;
    if (r.unitId && !u) errors.push(`resource "${r.id}": unknown unit "${r.unitId}" in "${c.id}"`);
    for (const t of r.topicIds ?? []) {
      const pool = u ? u.topics : c.units.flatMap((x) => x.topics);
      if (!pool.some((x) => x.id === t)) errors.push(`resource "${r.id}": unknown topic "${t}"`);
    }
    if (!knownHref(r.href)) errors.push(`resource "${r.id}": href "${r.href}" is not a known route`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.addedOn)) errors.push(`resource "${r.id}": addedOn must be YYYY-MM-DD`);
  }
  if (errors.length) throw new Error(`Content catalog is invalid:\n- ${errors.join("\n- ")}`);
}

assertCatalog();

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

export const getCurriculum = (id: string) => curricula.find((c) => c.id === id);
export const getCourse = (id: string) => courses.find((c) => c.id === id);
export const getLevel = (id: string) => levels.find((l) => l.id === id);
export const getSubject = (id: string) => subjects.find((s) => s.id === id);
export const getUnit = (course: Course, unitId?: string): Unit | undefined =>
  unitId ? course.units.find((u) => u.id === unitId) : undefined;

export type CourseFilter = { curriculum?: string; level?: string; subject?: string };

export function listCourses(f: CourseFilter = {}): Course[] {
  const order = (c: Course) =>
    (getCurriculum(c.curriculumId)?.order ?? 0) * 1000 + (getLevel(c.levelIds[0] ?? "")?.order ?? 999);
  return courses
    .filter(
      (c) =>
        (!f.curriculum || c.curriculumId === f.curriculum) &&
        (!f.level || c.levelIds.includes(f.level)) &&
        (!f.subject || c.subjectId === f.subject)
    )
    .sort((a, b) => order(a) - order(b));
}

export const levelsFor = (curriculumId: string) => levels.filter((l) => l.curriculumId === curriculumId);

export type ResourceFilter = {
  courseId?: string;
  curriculum?: string;
  unitId?: string;
  kinds?: ResourceKind[];
  /** Include hidden resources (default false) */
  includeHidden?: boolean;
};

export function listResources(f: ResourceFilter = {}): Resource[] {
  return resources.filter((r) => {
    if (r.hidden && !f.includeHidden) return false;
    if (f.courseId && r.courseId !== f.courseId) return false;
    if (f.unitId && r.unitId !== f.unitId) return false;
    if (f.kinds && !f.kinds.includes(r.kind)) return false;
    if (f.curriculum && getCourse(r.courseId)?.curriculumId !== f.curriculum) return false;
    return true;
  });
}

export function recentlyAdded(n: number, curriculum?: string): Resource[] {
  return listResources({ curriculum })
    .filter((r) => r.status === "available" && r.kind !== "formula-sheet")
    .sort((a, b) => b.addedOn.localeCompare(a.addedOn) || a.title.localeCompare(b.title))
    .slice(0, n);
}

/** "IB DP · Grade 11 · Maths AA" */
export function courseContext(c: Course): string {
  const cur = getCurriculum(c.curriculumId)?.shortName;
  const lv = c.levelIds.map((id) => getLevel(id)?.name).filter(Boolean).join(", ");
  return [cur, lv].filter(Boolean).join(" · ");
}

const unitName = (c: Course, u: Unit) =>
  u.number != null ? `${c.unitLabel ?? "Unit"} ${u.number}: ${u.title}` : u.title;

/**
 * Breadcrumbs for a page path (no query or hash): Curriculum / Course / Unit / Page.
 * Returns [] for paths the catalog does not know.
 */
export function breadcrumbsFor(pathname: string): Crumb[] {
  const path = pathname.replace(/\/$/, "") || "/";
  const curriculumCrumb = (c: Course): Crumb => {
    const cur = getCurriculum(c.curriculumId);
    return { label: cur?.shortName ?? c.curriculumId, href: `/curricula/${c.curriculumId}` };
  };

  const course = courses.find((c) => c.href === path);
  if (course) return [curriculumCrumb(course), { label: course.shortTitle }];

  const res = resources.find((r) => r.href.split("#")[0] === path && r.kind !== "formula-sheet");
  if (res) {
    const c = getCourse(res.courseId)!;
    const u = getUnit(c, res.unitId);
    return [
      curriculumCrumb(c),
      { label: c.shortTitle, href: c.href },
      ...(u ? [{ label: unitName(c, u), href: `${c.href}#${u.id}` }] : []),
      { label: res.kind === "lesson" ? "Lesson" : res.title },
    ];
  }
  return [];
}

export function searchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];
  for (const c of courses) {
    out.push({
      type: "course",
      title: c.title,
      context: courseContext(c),
      href: c.href,
      keywords: `${c.shortTitle} ${getSubject(c.subjectId)?.name ?? ""}`,
    });
    for (const u of c.units) {
      for (const t of u.topics) {
        if (!t.href) continue;
        out.push({
          type: "topic",
          title: t.title,
          context: `${c.shortTitle} · ${unitName(c, u)}${t.track === "hl" ? " · HL" : ""}`,
          href: t.href,
        });
      }
    }
  }
  for (const r of listResources()) {
    if (r.status !== "available") continue;
    const c = getCourse(r.courseId)!;
    const u = getUnit(c, r.unitId);
    out.push({
      type: "resource",
      title: r.title,
      context: [RESOURCE_KIND_LABEL[r.kind], c.shortTitle, u && unitName(c, u)].filter(Boolean).join(" · "),
      href: r.href,
      keywords: r.description,
    });
  }
  return out;
}
