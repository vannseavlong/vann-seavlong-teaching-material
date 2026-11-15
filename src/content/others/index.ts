// Materials that do not belong to a current curriculum (IB DP or AIA).
// Worksheet facts are edited in src/lib/worksheet-data.ts; this file files them under a course.
import { worksheets } from "@/lib/worksheet-data";
import type { ContentPack, Resource } from "@/lib/catalog/types";

export const OTHERS = "others";

/** Worksheet id → course and first commit date */
const WORKSHEET_COURSE: Record<string, { courseId: string; durationMinutes?: number; addedOn: string }> = {
  "physics-motion": { courseId: "others-g10-physics", addedOn: "2026-04-22" },
  "math-g10-aa": { courseId: "others-g10-math", durationMinutes: 75, addedOn: "2026-06-02" },
  "math-area-volume": { courseId: "others-geometry", addedOn: "2026-06-02" },
};

const worksheetResources: Resource[] = worksheets.map((w) => ({
  id: `worksheet-${w.id}`,
  kind: w.id === "math-g10-aa" ? "test" : "worksheet",
  title: w.title,
  description: `${w.subtitle}: ${w.sessions.join(", ")}.`,
  courseId: WORKSHEET_COURSE[w.id]?.courseId ?? "others-geometry",
  href: w.href,
  status: w.status,
  questionCount: w.questionCount,
  durationMinutes: WORKSHEET_COURSE[w.id]?.durationMinutes,
  hasAnswers: true,
  printable: true,
  addedOn: WORKSHEET_COURSE[w.id]?.addedOn ?? "2026-06-02",
}));

const course = (id: string, subjectId: string, levelIds: string[], title: string, shortTitle: string, description: string) => ({
  id,
  curriculumId: OTHERS,
  subjectId,
  levelIds,
  title,
  shortTitle,
  description,
  href: `/courses/${id}`,
  units: [],
  status: "available" as const,
});

const others: ContentPack = {
  curricula: [
    {
      id: OTHERS,
      name: "Other materials",
      shortName: "Others",
      description: "Worksheets and practice outside the IB DP and AIA courses.",
      order: 99,
    },
  ],
  levels: [{ id: "others-grade-10", curriculumId: OTHERS, name: "Grade 10", order: 10 }],
  courses: [
    course("others-g10-math", "mathematics", ["others-grade-10"], "Grade 10 Mathematics", "G10 Maths", "Indices, surds, quadratics, functions, trigonometry and coordinate geometry."),
    course("others-g10-physics", "physics", ["others-grade-10"], "Grade 10 Physics", "G10 Physics", "Motion, kinematics and Newton's laws."),
    course("others-g10-chemistry", "chemistry", ["others-grade-10"], "Grade 10 Chemistry", "G10 Chemistry", "Experiment analysis and calculation practice."),
    course("others-geometry", "mathematics", [], "Geometry: Area and Volume", "Area & Volume", "Area of composite shapes and volume of 3D solids."),
  ],
  resources: [
    ...worksheetResources,
    {
      id: "others-chem-nahco3-practice",
      kind: "topic-exercise",
      title: "NaHCO₃ Experiment",
      description: "",
      courseId: "others-g10-chemistry",
      href: "/aa/unit-1/practice/4",
      status: "available",
      hasAnswers: true,
      interactive: true,
      addedOn: "2026-03-03",
    },
  ],
};

export default others;
