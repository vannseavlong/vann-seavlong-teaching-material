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
    questionCount: 49,
    href: "/worksheets/physics-motion",
    status: "available",
    color: "orange",
  },
];
