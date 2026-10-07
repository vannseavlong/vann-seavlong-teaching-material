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

import { aiReviewPapers, paperMarks } from "./ai-review-papers";

const aiSummativePapers: ReviewPaper[] = aiReviewPapers.map((p) => ({
  id: `ai-sl-${p.slug}`,
  topic: p.topic,
  course: `AI SL — Summative Revision, Session ${p.session}`,
  title: p.title,
  subtitle: `${p.subtitle} — Exercise & Answer Sheet`,
  marks: paperMarks(p),
  questionCount: p.questions.length,
  href: `/review/ai-sl/${p.slug}`,
  status: "available",
}));

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
  {
    id: "paper-3",
    topic: "Sequences & Series",
    course: "AI — Unit 1 Number & Algebra (Topic 5)",
    title: "Sequences and Series — Full Review",
    subtitle: "Practice Paper 3 — Exercise & Answer Sheet",
    marks: 67,
    questionCount: 13,
    href: "/review/paper-3",
    status: "available",
  },
  ...aiSummativePapers,
];
