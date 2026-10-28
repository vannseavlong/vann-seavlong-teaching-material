import { aaCurriculum, aiCurriculum, type CurriculumData } from "./curriculum-data";

export type SidebarLeaf = {
  label: string;
  href?: string; // undefined => disabled (coming soon)
  /** Lesson topic anchor id (href is `<lesson>#id`). */
  anchor?: string;
  /** Higher Level topic: shown with a plain "HL" marker. */
  hl?: boolean;
  /** Group header text rendered before this item (e.g. "Lesson topics"). */
  group?: string;
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
  "aa/3": [
    { id: "1", title: "Trig Ratios & Unit Circle" },
    { id: "2", title: "Sine & Cosine Rules" },
    { id: "3", title: "Trig Graphs" },
    { id: "4", title: "Trig Equations" },
    { id: "5", title: "Trig Identities (HL)" },
    { id: "6", title: "Complex Trig Equations (HL)" },
    { id: "7", title: "Modelling with Trigonometry (HL)" },
  ],
  "ai/1": [{ id: "2", title: "Financial Mathematics" }],
  "ai/3": [
    { id: "1", title: "Lines in 2D" },
    { id: "2", title: "3D Distance & Solids" },
    { id: "3", title: "Trigonometry" },
    { id: "4", title: "Arc Length & Sector Area" },
    { id: "5", title: "Trigonometry in Context" },
    { id: "6", title: "Voronoi Diagrams" },
    { id: "7", title: "Graph Theory (HL)" },
    { id: "8", title: "Vectors in 3D (HL)" },
  ],
};

/**
 * Lesson topics per unit: ids must match the section ids in each lesson page
 * (src/app/[pathway]/unit-N/lesson/page.tsx SL_TOPICS / HL_TOPICS).
 */
const LESSON_TOPICS: Record<string, { sl: [string, string][]; hl?: [string, string][] }> = {
  "aa/1": {
    sl: [
      ["indices", "Laws of Indices"],
      ["surds", "Surds"],
      ["quadratics", "Quadratic Equations"],
      ["completing-square", "Completing the Square"],
      ["sequences", "Sequences & Series"],
      ["logarithms", "Logarithms"],
      ["binomial", "Binomial Expansion"],
    ],
    hl: [
      ["induction", "Proof by Induction"],
      ["complex", "Complex Numbers"],
      ["advanced-sequences", "Advanced Sequences & Series"],
      ["harder-binomial", "Harder Binomial Expansion"],
    ],
  },
  "aa/3": {
    sl: [
      ["trig-ratios", "Trig Ratios & Unit Circle"],
      ["sine-cosine-rules", "Sine & Cosine Rules"],
      ["trig-graphs", "Trig Graphs"],
      ["trig-equations", "Trig Equations"],
    ],
    hl: [
      ["trig-identities", "Trig Identities"],
      ["complex-equations", "Complex Trig Equations"],
      ["modelling", "Modelling with Trigonometry"],
    ],
  },
  "ai/1": {
    sl: [
      ["percentages", "Percentages"],
      ["financial-mathematics", "Financial Mathematics"],
      ["arithmetic", "Arithmetic Sequences & Series"],
      ["geometric", "Geometric Sequences & Series"],
      ["rounding", "Rounding"],
      ["bounds", "Upper & Lower Bounds"],
      ["percentage-error", "Percentage Error"],
    ],
  },
  "ai/2": {
    sl: [
      ["functions", "Functions, notation, domain and range"],
      ["linear-model", "Linear model"],
      ["quadratic", "Quadratic model"],
      ["exponential", "Exponential and logarithmic models"],
      ["other-models", "Other models and graph features"],
    ],
  },
  "ai/4": {
    sl: [
      ["data", "Sampling and data"],
      ["measures", "Measures of centre and spread"],
      ["regression", "Correlation and regression"],
      ["probability", "Probability"],
      ["distributions", "Random variables and distributions"],
      ["tests", "Spearman, chi-squared and t-test"],
    ],
  },
  "ai/5": {
    sl: [
      ["derivative", "Derivative of x^n"],
      ["integration", "Integration and area"],
      ["applications", "Stationary points and optimisation"],
    ],
  },
  "ai/3": {
    sl: [
      ["lines", "Lines in 2D"],
      ["solids-3d", "3D Distance & Solids"],
      ["trigonometry", "Trigonometry"],
      ["arc-sector", "Arc Length & Sector Area"],
      ["trig-context", "Trigonometry in Context"],
      ["voronoi", "Voronoi Diagrams"],
    ],
    hl: [
      ["graph-theory", "Graph Theory"],
      ["vectors", "Vectors in 3D"],
    ],
  },
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
        if (c.title === "Lesson" && href) {
          const lt = LESSON_TOPICS[`${data.pathway}/${u.unit}`];
          if (lt) {
            lt.sl.forEach(([anchor, label], i) =>
              items.push({ label, href: `${href}#${anchor}`, anchor, group: i === 0 ? "Lesson" : undefined })
            );
            lt.hl?.forEach(([anchor, label]) =>
              items.push({ label, href: `${href}#${anchor}`, anchor, hl: true })
            );
            continue;
          }
        }
        if (c.title === "Practice Problems") {
          const topics = PRACTICE_TOPICS[`${data.pathway}/${u.unit}`];
          if (href && topics) {
            for (const t of topics) {
              items.push({
                label: t.title,
                group: items.some((x) => x.group === "Practice") ? undefined : "Practice",
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
