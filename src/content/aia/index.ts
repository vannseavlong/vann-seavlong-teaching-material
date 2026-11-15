// AIA content. Add units to a course and resources below as materials are written.
import type { ContentPack } from "@/lib/catalog/types";

export const AIA = "aia";

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
      status: "coming-soon",
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
      status: "coming-soon",
    },
  ],
  resources: [],
};

export default aia;
