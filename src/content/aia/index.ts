// AIA content. Add units to a course and resources below as materials are written.
import type { ContentPack, Resource } from "@/lib/catalog/types";
import { aiaTests } from "@/lib/aia-tests";
import { paperMarks } from "@/lib/ai-review-papers/types";

export const AIA = "aia";

const testResources: Resource[] = aiaTests.map(({ courseId, addedOn, calculator, kind = "test", paper }) => ({
  id: `aia-${paper.slug}`,
  kind,
  title: paper.title,
  description: kind === "worksheet" ? `${paper.subtitle}: key ideas, worked examples and practice.` : `${paper.topic}.`,
  courseId,
  href: `/review/aia/${paper.slug}`,
  status: "available",
  marks: paperMarks(paper),
  questionCount: paper.questions.length,
  durationMinutes: paper.minutes,
  calculator,
  hasAnswers: true,
  printable: true,
  addedOn,
}));

const aia: ContentPack = {
  curricula: [
    {
      id: AIA,
      name: "AIA",
      shortName: "AIA",
      description: "Mathematics for Grade 6 and Grade 9.",
      order: 2,
    },
  ],
  levels: [
    { id: "aia-grade-6", curriculumId: AIA, name: "Grade 6", order: 6 },
    { id: "aia-grade-9", curriculumId: AIA, name: "Grade 9", order: 9 },
  ],
  courses: [
    {
      id: "aia-g6-math",
      curriculumId: AIA,
      subjectId: "mathematics",
      levelIds: ["aia-grade-6"],
      title: "Grade 6 Mathematics",
      shortTitle: "G6 Maths",
      description: "Lessons and practice for AIA Grade 6 Mathematics.",
      href: "/courses/aia-g6-math",
      units: [],
      status: "available",
    },
    {
      id: "aia-g9-math",
      curriculumId: AIA,
      subjectId: "mathematics",
      levelIds: ["aia-grade-9"],
      title: "Grade 9 Mathematics",
      shortTitle: "G9 Maths",
      description: "Lessons and practice for AIA Grade 9 Mathematics.",
      href: "/courses/aia-g9-math",
      units: [],
      status: "available",
    },
  ],
  resources: testResources,
};

export default aia;
