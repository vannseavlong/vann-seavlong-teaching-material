// ---------------------------------------------------------------------------
// Shared resource types
// ---------------------------------------------------------------------------

export type ContentItem = {
  title: string;
  status: "available" | "coming-soon";
  href?: string;
};

// ---------------------------------------------------------------------------
// Mock test / exam preparation types
// ---------------------------------------------------------------------------

export type MockPaper = {
  paper: 1 | 2 | 3;
  /** Display label, e.g. "Paper 1 (No Calculator)" */
  title: string;
  durationMinutes: number;
  marks: number;
  status: "available" | "coming-soon";
  /** Link to the question paper */
  href?: string;
  /** Link to the answer / mark scheme */
  answerHref?: string;
};

export type MockSet = {
  /** Unique slug used in URL routing, e.g. "set-1" */
  id: string;
  /** Display title, e.g. "Mock Set 1" */
  title: string;
  description?: string;
  papers: MockPaper[];
};

// ---------------------------------------------------------------------------
// Curriculum unit types
// ---------------------------------------------------------------------------

export type TopicUnit = {
  unit: number;
  title: string;
  description: string;
  slHours: number;
  hlHours: number;
  slTopics: string[];
  hlTopics: string[];
  /** Per-unit resources: Lesson + Practice Problems only */
  contents: ContentItem[];
};

export type CurriculumData = {
  pathway: "aa" | "ai";
  fullName: string;
  shortName: string;
  tagline: string;
  description: string;
  units: TopicUnit[];
  /** Full-course mock exam sets. Each set contains 3 papers. */
  mockSets: MockSet[];
};

// ---------------------------------------------------------------------------
// Helper: default paper definitions for AA (no calc / calc / HL only)
// ---------------------------------------------------------------------------
const AA_PAPERS: Omit<MockPaper, "status">[] = [
  { paper: 1, title: "Paper 1 (No Calculator)", durationMinutes: 90, marks: 80 },
  { paper: 2, title: "Paper 2 (Calculator)",    durationMinutes: 90, marks: 80 },
  { paper: 3, title: "Paper 3 (HL — Problem Solving)", durationMinutes: 60, marks: 55 },
];

const AI_PAPERS: Omit<MockPaper, "status">[] = [
  { paper: 1, title: "Paper 1 (Technology Active)", durationMinutes: 90, marks: 80 },
  { paper: 2, title: "Paper 2 (Technology Active)", durationMinutes: 90, marks: 80 },
  { paper: 3, title: "Paper 3 (HL — Extended Modelling)", durationMinutes: 60, marks: 55 },
];

function makePapers(
  templates: Omit<MockPaper, "status">[]
): MockPaper[] {
  return templates.map((p) => ({ ...p, status: "coming-soon" }));
}

// ---------------------------------------------------------------------------
// AA Curriculum
// ---------------------------------------------------------------------------

export const aaCurriculum: CurriculumData = {
  pathway: "aa",
  fullName: "Mathematics: Analysis & Approaches",
  shortName: "AA",
  tagline: "Algebra, Calculus, Proof & Abstract Reasoning",
  description:
    "AA focuses on developing strong algebraic skills and the ability to construct mathematical arguments. It is designed for students who enjoy the abstract and theoretical side of mathematics.",
  units: [
    {
      unit: 1,
      title: "Algebra",
      description:
        "Core algebraic techniques including indices, surds, quadratics, sequences, logarithms, and the binomial theorem. HL extends to proof by induction and complex numbers.",
      slHours: 19,
      hlHours: 39,
      slTopics: [
        "Laws of indices",
        "Surds",
        "Quadratic equations",
        "Completing the square",
        "Sequences & series",
        "Logarithms",
        "Binomial expansion",
      ],
      hlTopics: [
        "Proof by induction",
        "Complex numbers",
        "Advanced sequences & series",
        "Harder binomial expansion",
      ],
      contents: [
        { title: "Lesson", status: "available", href: "/aa/unit-1/lesson" },
        { title: "Practice Problems", status: "available", href: "/aa/unit-1/practice/1" },
      ],
    },
    {
      unit: 2,
      title: "Functions",
      description:
        "Linear, quadratic, exponential, and logarithmic functions with transformations and inverse functions. HL deepens composite functions and advanced modelling.",
      slHours: 21,
      hlHours: 32,
      slTopics: [
        "Linear & quadratic functions",
        "Exponential & logarithmic functions",
        "Domain & range",
        "Graph transformations",
        "Inverse functions",
      ],
      hlTopics: [
        "Composite functions",
        "Hard inverse problems",
        "Advanced modelling",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 3,
      title: "Trigonometry",
      description:
        "Trigonometric ratios, the sine and cosine rules, trig graphs, and equations. HL extends to identities and more complex trig modelling.",
      slHours: 13,
      hlHours: 26,
      slTopics: [
        "Trig ratios",
        "Sine rule & cosine rule",
        "Trig graphs",
        "Trig equations",
      ],
      hlTopics: [
        "Trig identities",
        "Complex trig equations",
        "Modelling with trigonometry",
      ],
      contents: [
        { title: "Lesson", status: "available", href: "/aa/unit-3/lesson" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 4,
      title: "Geometry & Vectors",
      description:
        "Coordinate geometry, distance, midpoint, and an introduction to vectors. HL extends to vector equations and full 3D geometry.",
      slHours: 12,
      hlHours: 25,
      slTopics: [
        "Coordinate geometry",
        "Distance & midpoint",
        "Vectors (basic)",
      ],
      hlTopics: ["Vector equations of lines & planes", "3D geometry"],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 5,
      title: "Statistics & Probability",
      description:
        "Descriptive statistics, probability laws, and basic distributions. HL adds random variables and advanced probability distributions.",
      slHours: 27,
      hlHours: 33,
      slTopics: [
        "Descriptive statistics",
        "Probability laws",
        "Basic distributions",
      ],
      hlTopics: ["Random variables", "Probability distributions"],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 6,
      title: "Calculus",
      description:
        "Limits, differentiation, and basic applications of derivatives. HL extends to integration, areas, motion, optimization, and differential equations.",
      slHours: 28,
      hlHours: 55,
      slTopics: [
        "Limits (concept)",
        "Differentiation",
        "Basic applications of derivatives",
      ],
      hlTopics: [
        "Advanced differentiation",
        "Integration",
        "Areas, motion & optimization",
        "Differential equations (basic)",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
  ],

  // Add mock sets here as they are created, e.g.:
  // { id: "set-1", title: "Mock Set 1", papers: makePapers(AA_PAPERS) }
  mockSets: [],
};

// ---------------------------------------------------------------------------
// AI Curriculum
// ---------------------------------------------------------------------------

export const aiCurriculum: CurriculumData = {
  pathway: "ai",
  fullName: "Mathematics: Applications & Interpretation",
  shortName: "AI",
  tagline: "Statistics, Modelling, Technology & Real-World Problems",
  description:
    "AI focuses on using mathematics to model and solve real-world problems. It emphasises statistics, data analysis, and the meaningful use of technology throughout the course.",
  units: [
    {
      unit: 1,
      title: "Number & Algebra",
      description:
        "Practical number skills including percentages, financial mathematics, exponents, logarithms, and sequences.",
      slHours: 16,
      hlHours: 29,
      slTopics: [
        "Percentages",
        "Financial mathematics",
        "Exponents & logarithms",
        "Rearranging formulas",
        "Sequences",
      ],
      hlTopics: [
        "Advanced financial models",
        "Logarithmic & exponential applications",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 2,
      title: "Functions & Modelling",
      description:
        "Using linear, quadratic, and exponential models to represent real-world situations, interpret graphs, and make predictions.",
      slHours: 31,
      hlHours: 42,
      slTopics: [
        "Linear models",
        "Quadratic models",
        "Exponential models",
        "Interpreting graphs",
        "Using models for prediction",
      ],
      hlTopics: [
        "Complex real-world scenarios",
        "Multi-step decision models",
        "Advanced modelling techniques",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 3,
      title: "Geometry",
      description:
        "Measurement, trigonometry applied in real-world contexts, and working with scale and units.",
      slHours: 18,
      hlHours: 46,
      slTopics: [
        "Measurement",
        "Trigonometry in context",
        "Scale & units",
      ],
      hlTopics: [
        "3D geometry & spatial reasoning",
        "Voronoi diagrams",
        "Graph theory",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 4,
      title: "Statistics & Probability",
      description:
        "The core of AI: data collection, statistical measures, regression, correlation, and probability. HL extends to distributions, hypothesis testing, and statistical inference.",
      slHours: 36,
      hlHours: 52,
      slTopics: [
        "Data collection",
        "Mean, variance & standard deviation",
        "Correlation & regression",
        "Probability rules",
      ],
      hlTopics: [
        "Probability distributions",
        "Normal distribution",
        "Hypothesis testing",
        "Statistical inference",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
    {
      unit: 5,
      title: "Calculus & Technology",
      description:
        "Calculator-based modelling and data analysis at SL. HL introduces rate of change and simple optimization using calculus.",
      slHours: 19,
      hlHours: 41,
      slTopics: [
        "Calculator-based modelling",
        "Data analysis with technology",
      ],
      hlTopics: [
        "Rate of change",
        "Simple optimization",
        "Light calculus applications",
      ],
      contents: [
        { title: "Lesson", status: "coming-soon" },
        { title: "Practice Problems", status: "coming-soon" },
      ],
    },
  ],

  // Add mock sets here as they are created, e.g.:
  // { id: "set-1", title: "Mock Set 1", papers: makePapers(AI_PAPERS) }
  mockSets: [],
};

// Re-export helpers so callers can build new sets without reimporting templates
export { makePapers, AA_PAPERS, AI_PAPERS };