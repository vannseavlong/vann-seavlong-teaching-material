// Sidebar tree for a course, built from the catalog (src/lib/catalog).
// Lesson topics and practice sets are listed in the course's content file, e.g. src/content/ib-dp/index.ts.
import { getCourse, listResources } from "@/lib/catalog";

export type SidebarLeaf = {
  label: string;
  href?: string; // undefined => disabled (coming soon)
  /** Lesson topic anchor id (href is `<lesson>#id`). */
  anchor?: string;
  /** Higher Level topic: shown with a plain "HL" marker. */
  hl?: boolean;
  /** Group header text rendered before this item (e.g. "Lesson"). */
  group?: string;
};

export type SidebarUnit = {
  unit: number;
  title: string;
  items: SidebarLeaf[];
};

export type SidebarTree = {
  /** First path segment of the course pages, e.g. "aa"; used to open the unit holding the current page */
  pathway: string;
  shortName: string;
  overviewHref: string;
  units: SidebarUnit[];
};

export function sidebarTree(courseId: string): SidebarTree {
  const course = getCourse(courseId);
  if (!course) throw new Error(`Unknown course "${courseId}"`);
  const firstTrack = course.tracks?.[0]?.id;

  return {
    pathway: course.href.replace(/^\//, "").split("/")[0],
    shortName: course.shortTitle.replace(/^Maths /, ""),
    overviewHref: course.href,
    units: course.units.map((u, i) => {
      const res = listResources({ courseId, unitId: u.id });
      const lesson = res.find((r) => r.kind === "lesson");
      const items: SidebarLeaf[] = [];

      if (lesson) {
        u.topics.forEach((t, ti) => {
          if (!t.href) return;
          items.push({
            label: t.title,
            href: t.href,
            anchor: t.href.split("#")[1],
            hl: !!t.track && t.track !== firstTrack,
            group: ti === 0 ? "Lesson" : undefined,
          });
        });
      } else {
        items.push({ label: "Lesson" });
      }

      const practice = res.filter((r) => r.kind === "topic-exercise");
      practice.forEach((r, pi) => items.push({ label: r.title, href: r.href, group: pi === 0 ? "Practice" : undefined }));
      if (practice.length === 0) items.push({ label: "Practice Problems" });

      const papers = res.filter((r) => ["revision", "exam-style", "mock", "worksheet", "test", "quiz"].includes(r.kind));
      if (papers.length > 0) {
        items.push({ label: `Revision papers (${papers.length})`, href: `${course.href}#${u.id}` });
      }

      return { unit: u.number ?? i + 1, title: u.title, items };
    }),
  };
}
