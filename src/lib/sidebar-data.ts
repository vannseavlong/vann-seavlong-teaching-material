import { aaCurriculum, aiCurriculum, type CurriculumData } from "./curriculum-data";

export type SidebarLeaf = {
  label: string;
  href?: string; // undefined => disabled (coming soon)
};

export type SidebarUnit = {
  unit: number;
  title: string;
  items: SidebarLeaf[];
};

export type SidebarTree = {
  pathway: "aa" | "ai";
  shortName: string;
  overviewHref: string;
  units: SidebarUnit[];
};

/**
 * Practice topics that really exist as routes under
 * src/app/[pathway]/unit-N/practice/[id]. Keep in sync with each page's
 * generateStaticParams().
 */
const PRACTICE_TOPICS: Record<string, { id: string; title: string }[]> = {
  "aa/1": [
    { id: "1", title: "Laws of Indices" },
    { id: "2", title: "Surds" },
    { id: "3", title: "Quadratic Equations" },
    { id: "4", title: "Chemistry G10 NaHCO3" },
    { id: "5", title: "Sequences & Patterns" },
  ],
  "ai/1": [{ id: "2", title: "Financial Mathematics" }],
};

function build(data: CurriculumData): SidebarTree {
  return {
    pathway: data.pathway,
    shortName: data.shortName,
    overviewHref: `/${data.pathway}`,
    units: data.units.map((u) => {
      const items: SidebarLeaf[] = [];
      for (const c of u.contents) {
        const href = c.status === "available" ? c.href : undefined;
        if (c.title === "Practice Problems") {
          const topics = PRACTICE_TOPICS[`${data.pathway}/${u.unit}`];
          if (href && topics) {
            for (const t of topics) {
              items.push({
                label: `Practice: ${t.title}`,
                href: `/${data.pathway}/unit-${u.unit}/practice/${t.id}`,
              });
            }
            continue;
          }
        }
        items.push({ label: c.title, href });
      }
      return { unit: u.unit, title: u.title, items };
    }),
  };
}

export const sidebarTrees: Record<"aa" | "ai", SidebarTree> = {
  aa: build(aaCurriculum),
  ai: build(aiCurriculum),
};
