// IB Diploma Programme content.
// Unit facts (titles, descriptions, SL/HL topics, Lesson/Practice status) are edited in
// src/lib/curriculum-data.ts; review papers in src/lib/ai-review-papers and src/lib/review-data.ts.
// This file adapts them into the catalog and holds the lesson/practice topic lists.

import { aaCurriculum, aiCurriculum, type CurriculumData } from "@/lib/curriculum-data";
import { aiReviewPapers, paperMarks, type AiReviewPaper } from "@/lib/ai-review-papers";
import { reviewPapers } from "@/lib/review-data";
import type { ContentPack, Course, Resource, ResourceKind, Topic, Unit } from "@/lib/catalog/types";

export const IB_DP = "ib-dp";
export const IB_AA = "ib-dp-math-aa";
export const IB_AI = "ib-dp-math-ai";

type CourseKey = "aa" | "ai";
const COURSE_ID: Record<CourseKey, string> = { aa: IB_AA, ai: IB_AI };

/**
 * Lesson topics per unit: ids must match the section ids in each lesson page
 * (src/app/[pathway]/unit-N/lesson). Order is the order on the page.
 */
export const LESSON_TOPICS: Record<string, { sl: [string, string][]; hl?: [string, string][] }> = {
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
  "ai/3": {
    sl: [
      ["lines", "Lines in 2D"],
      ["solids-3d", "3D Distance & Solids"],
      ["trigonometry", "Trigonometry"],
      ["arc-sector", "Arc Length & Sector Area"],
      ["shapes", "Trigonometry in Shapes"],
      ["trig-context", "Trigonometry in Context"],
      ["voronoi", "Voronoi Diagrams"],
    ],
    hl: [
      ["graph-theory", "Graph Theory"],
      ["vectors", "Vectors in 3D"],
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
};

/**
 * Interactive practice sets that exist as routes under src/app/[pathway]/unit-N/practice/[id].
 * Keep in sync with each page's generateStaticParams(). `topic` links the set to a lesson topic id.
 * AA Unit 1 id 4 (Chemistry G10) is listed in src/content/others, not here.
 */
const PRACTICE_TOPICS: Record<string, { id: string; title: string; topic?: string; hl?: boolean; addedOn: string }[]> = {
  "aa/1": [
    { id: "1", title: "Laws of Indices", topic: "indices", addedOn: "2026-02-19" },
    { id: "2", title: "Surds", topic: "surds", addedOn: "2026-02-19" },
    { id: "3", title: "Quadratic Equations", topic: "quadratics", addedOn: "2026-02-19" },
    { id: "5", title: "Sequences & Patterns", topic: "sequences", addedOn: "2026-03-03" },
  ],
  "aa/3": [
    { id: "1", title: "Trig Ratios & Unit Circle", topic: "trig-ratios", addedOn: "2026-10-28" },
    { id: "2", title: "Sine & Cosine Rules", topic: "sine-cosine-rules", addedOn: "2026-10-28" },
    { id: "3", title: "Trig Graphs", topic: "trig-graphs", addedOn: "2026-10-28" },
    { id: "4", title: "Trig Equations", topic: "trig-equations", addedOn: "2026-10-28" },
    { id: "5", title: "Trig Identities", topic: "trig-identities", hl: true, addedOn: "2026-10-28" },
    { id: "6", title: "Complex Trig Equations", topic: "complex-equations", hl: true, addedOn: "2026-10-28" },
    { id: "7", title: "Modelling with Trigonometry", topic: "modelling", hl: true, addedOn: "2026-10-28" },
  ],
  "ai/1": [{ id: "2", title: "Financial Mathematics", topic: "financial-mathematics", addedOn: "2026-02-19" }],
  "ai/3": [
    { id: "1", title: "Lines in 2D", topic: "lines", addedOn: "2026-10-28" },
    { id: "2", title: "3D Distance & Solids", topic: "solids-3d", addedOn: "2026-10-28" },
    { id: "3", title: "Trigonometry", topic: "trigonometry", addedOn: "2026-10-28" },
    { id: "4", title: "Arc Length & Sector Area", topic: "arc-sector", addedOn: "2026-10-28" },
    { id: "9", title: "Trigonometry in Shapes", topic: "shapes", addedOn: "2026-11-09" },
    { id: "5", title: "Trigonometry in Context", topic: "trig-context", addedOn: "2026-10-28" },
    { id: "6", title: "Voronoi Diagrams", topic: "voronoi", addedOn: "2026-10-28" },
    { id: "7", title: "Graph Theory", topic: "graph-theory", hl: true, addedOn: "2026-10-28" },
    { id: "8", title: "Vectors in 3D", topic: "vectors", hl: true, addedOn: "2026-10-28" },
  ],
};

/** First commit date of each lesson page (git log --diff-filter=A). */
const LESSON_ADDED: Record<string, string> = {
  "aa/1": "2026-02-19",
  "aa/3": "2026-06-02",
  "ai/1": "2026-09-28",
  "ai/2": "2026-10-28",
  "ai/3": "2026-10-26",
  "ai/4": "2026-10-28",
  "ai/5": "2026-10-28",
};

/** First commit date of each AI review paper file, by slug. */
const PAPER_ADDED: Record<string, string> = {
  "arc-sector": "2026-10-27", arithmetic: "2026-10-19", bounds: "2026-10-19",
  "bounds-2": "2026-10-20", "bounds-3": "2026-10-20", "data-measures": "2026-10-28",
  "derivative-tangent": "2026-10-28", distributions: "2026-10-28", "exponential-models": "2026-10-28",
  financial: "2026-10-19", "financial-2": "2026-10-19", geometric: "2026-10-19",
  "geometric-log": "2026-10-28", "graph-theory": "2026-10-28", "integration-area": "2026-10-28",
  "linear-quadratic": "2026-10-28", "lines-voronoi": "2026-10-28", "summative-mock": "2026-10-19",
  "past-paper-practice-2": "2026-10-21", "percentage-error": "2026-10-19", probability: "2026-10-28",
  rounding: "2026-10-19", "sequences-finance-chain": "2026-10-21", "sequences-finance-chain-2": "2026-10-21",
  "sequences-finance-chain-3": "2026-10-21", "sequences-mixed": "2026-10-20", "solids-3d": "2026-10-28",
  "trig-3d": "2026-10-27", "trig-context": "2026-10-28", "trig-shapes": "2026-11-09",
  "trig-shapes-3d": "2026-11-09", trigonometry: "2026-10-27", "unit3-mixed": "2026-10-28",
  "vectors-3d": "2026-10-28",
};

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function buildCourse(data: CurriculumData): Course {
  const key = data.pathway;
  const units: Unit[] = data.units.map((u) => {
    const lesson = u.contents.find((c) => c.title === "Lesson" && c.status === "available");
    const lt = LESSON_TOPICS[`${key}/${u.unit}`];
    let topics: Topic[];
    if (lesson?.href && lt) {
      topics = [
        ...lt.sl.map(([id, title]) => ({ id, title, href: `${lesson.href}#${id}`, track: "sl" })),
        ...(lt.hl ?? []).map(([id, title]) => ({ id, title, href: `${lesson.href}#${id}`, track: "hl" })),
      ];
    } else {
      topics = [
        ...u.slTopics.map((t) => ({ id: slug(t), title: t, track: "sl" })),
        ...u.hlTopics.map((t) => ({ id: slug(t), title: t, track: "hl" })),
      ];
    }
    return {
      id: `unit-${u.unit}`,
      number: u.unit,
      title: u.title,
      description: u.description,
      topics,
      status: u.contents.some((c) => c.status === "available") ? "available" : "coming-soon",
    };
  });
  return {
    id: COURSE_ID[key],
    curriculumId: IB_DP,
    subjectId: "mathematics",
    levelIds: ["grade-11"],
    title: data.fullName,
    shortTitle: `Maths ${data.shortName}`,
    description: data.description,
    href: `/${key}`,
    tracks: [
      { id: "sl", label: "SL" },
      { id: "hl", label: "HL" },
    ],
    units,
    status: "available",
  };
}

function courseResources(data: CurriculumData): Resource[] {
  const key = data.pathway;
  const courseId = COURSE_ID[key];
  const out: Resource[] = [];
  for (const u of data.units) {
    const unitId = `unit-${u.unit}`;
    const lesson = u.contents.find((c) => c.title === "Lesson" && c.status === "available" && c.href);
    if (lesson?.href) {
      out.push({
        id: `${key}-u${u.unit}-lesson`,
        kind: "lesson",
        title: `Unit ${u.unit} ${u.title}: Lesson`,
        description: u.description,
        courseId,
        unitId,
        href: lesson.href,
        status: "available",
        hasAnswers: true,
        addedOn: LESSON_ADDED[`${key}/${u.unit}`] ?? "2026-01-01",
      });
      out.push({
        id: `${key}-u${u.unit}-formulas`,
        kind: "formula-sheet",
        title: `Unit ${u.unit} ${u.title}: Formula recap`,
        description: `Key formulas from every topic in ${data.shortName} Unit ${u.unit}, on one page.`,
        courseId,
        unitId,
        href: `${lesson.href}#summary`,
        status: "available",
        hasAnswers: false,
        addedOn: LESSON_ADDED[`${key}/${u.unit}`] ?? "2026-01-01",
      });
    }
    for (const p of PRACTICE_TOPICS[`${key}/${u.unit}`] ?? []) {
      out.push({
        id: `${key}-u${u.unit}-practice-${p.id}`,
        kind: "topic-exercise",
        title: p.hl ? `${p.title} (HL)` : p.title,
        description: "Enter a final answer for each problem, finish to get the key, then compare with the model answers.",
        courseId,
        unitId,
        topicIds: p.topic ? [p.topic] : undefined,
        href: `/${key}/unit-${u.unit}/practice/${p.id}`,
        status: "available",
        hasAnswers: true,
        interactive: true,
        addedOn: p.addedOn,
      });
    }
  }
  return out;
}

function aiPaperKind(p: AiReviewPaper): ResourceKind {
  if (p.slug === "summative-mock") return "mock";
  if (p.slug.startsWith("past-paper")) return "exam-style";
  return "revision";
}

const aiPaperResources: Resource[] = aiReviewPapers.map((p) => {
  const unit = (p.lessonHref ?? "/ai/unit-1/lesson").match(/unit-(\d+)/)?.[1] ?? "1";
  return {
    id: `ai-sl-${p.slug}`,
    kind: aiPaperKind(p),
    title: p.title,
    description: `${p.subtitle}. Exercise paper with a full worked answer sheet.`,
    courseId: IB_AI,
    unitId: `unit-${unit}`,
    topicIds: [p.lessonAnchor],
    href: `/review/ai-sl/${p.slug}`,
    status: "available",
    marks: paperMarks(p),
    questionCount: p.questions.length,
    durationMinutes: p.minutes,
    calculator: true,
    hasAnswers: true,
    printable: true,
    addedOn: PAPER_ADDED[p.slug] ?? "2026-10-19",
  };
});

/** The three hand-built papers in src/app/review/paper-1..3 */
const HAND_PAPERS: Record<string, { courseId: string; topic: string; addedOn: string }> = {
  "paper-1": { courseId: IB_AA, topic: "sequences", addedOn: "2026-08-31" },
  "paper-2": { courseId: IB_AA, topic: "sequences", addedOn: "2026-08-31" },
  "paper-3": { courseId: IB_AI, topic: "arithmetic", addedOn: "2026-09-02" },
};

const handPaperResources: Resource[] = reviewPapers
  .filter((p) => p.id in HAND_PAPERS)
  .map((p) => ({
    id: `review-${p.id}`,
    kind: "revision",
    title: p.title,
    description: `${p.subtitle}. ${p.topic}.`,
    courseId: HAND_PAPERS[p.id].courseId,
    unitId: "unit-1",
    topicIds: [HAND_PAPERS[p.id].topic],
    href: p.href,
    status: p.status,
    marks: p.marks,
    questionCount: p.questionCount,
    hasAnswers: true,
    printable: true,
    addedOn: HAND_PAPERS[p.id].addedOn,
  }));

const ibDp: ContentPack = {
  curricula: [
    {
      id: IB_DP,
      name: "IB Diploma Programme",
      shortName: "IB DP",
      description: "Mathematics Analysis & Approaches (AA) and Applications & Interpretation (AI), SL and HL.",
      order: 1,
    },
  ],
  levels: [{ id: "grade-11", curriculumId: IB_DP, name: "Grade 11", order: 11 }],
  courses: [buildCourse(aaCurriculum), buildCourse(aiCurriculum)],
  resources: [
    ...courseResources(aaCurriculum),
    ...courseResources(aiCurriculum),
    ...aiPaperResources,
    ...handPaperResources,
    {
      id: "ai-u1-tutor-plan",
      kind: "reference",
      title: "Unit 1 Tutor Plan",
      description: "Tutor-only session plan for the AI Unit 1 revision papers.",
      courseId: IB_AI,
      unitId: "unit-1",
      href: "/ai/unit-1/tutor",
      status: "available",
      hasAnswers: false,
      addedOn: "2026-10-19",
      hidden: true,
    },
  ],
};

export default ibDp;
