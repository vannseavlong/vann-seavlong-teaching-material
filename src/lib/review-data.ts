export type ReviewPaper = {
  id: string;
  topic: string;
  course: string;
  title: string;
  subtitle: string;
  marks: number;
  questionCount: number;
  href: string;
  status: "available" | "coming-soon";
};

export const reviewPapers: ReviewPaper[] = [
  {
    id: "paper-1",
    topic: "Sequences & Series",
    course: "AA — Unit 1 Algebra (Topic 5)",
    title: "Arithmetic Sequence and Series",
    subtitle: "Practice Paper 1 — Exercise & Answer Sheet",
    marks: 25,
    questionCount: 3,
    href: "/review/paper-1",
    status: "available",
  },
  {
    id: "paper-2",
    topic: "Sequences & Series",
    course: "AA — Unit 1 Algebra (Topic 5)",
    title: "Sequences and Series — Mixed Practice",
    subtitle: "Practice Paper 2 — Exercise & Answer Sheet",
    marks: 76,
    questionCount: 12,
    href: "/review/paper-2",
    status: "available",
  },
];
