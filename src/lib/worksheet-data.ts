export type Worksheet = {
  id: string;
  subject: string;
  course: string;
  title: string;
  subtitle: string;
  sessions: string[];
  questionCount: number;
  href: string;
  status: "available" | "coming-soon";
  color: "orange" | "blue" | "green" | "purple";
};

export const worksheets: Worksheet[] = [
  {
    id: "physics-motion",
    subject: "Physics",
    course: "Grade 10 — 10SCI Unit 5",
    title: "Motion, Kinematics & Dynamics",
    subtitle: "Exam Review Worksheet",
    sessions: ["Describing Motion", "Acceleration", "Newton's Laws", "Mixed Review"],
    questionCount: 64,
    href: "/worksheets/physics-motion",
    status: "available",
    color: "orange",
  },
  {
    id: "math-g10-aa",
    subject: "Mathematics",
    course: "Grade 10 — AA Foundation",
    title: "Comprehensive Test",
    subtitle: "Core Skills Review",
    sessions: ["Indices & Surds", "Quadratic Equations", "Functions & Graphs", "Trigonometry & Coord Geo"],
    questionCount: 34,
    href: "/worksheets/math-g10-aa",
    status: "available",
    color: "blue",
  },
  {
    id: "math-area-volume",
    subject: "Mathematics",
    course: "Geometry — Area & Volume",
    title: "Area & Volume Practice",
    subtitle: "Composite Shapes — Diagrams Included",
    sessions: ["Basic Shapes", "Composite Area (Add/Subtract)", "3D Volume", "Challenge Problems"],
    questionCount: 20,
    href: "/worksheets/math-area-volume",
    status: "available",
    color: "green",
  },
];
