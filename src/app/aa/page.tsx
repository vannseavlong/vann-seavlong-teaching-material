import { Metadata } from "next";
import CurriculumPage from "@/components/curriculum/CurriculumPage";
import { aaCurriculum } from "@/lib/curriculum-data";

export const metadata: Metadata = {
  title: "AA: Analysis & Approaches — IB Math Curriculum",
  description:
    "Full curriculum breakdown for IB Mathematics Analysis & Approaches (AA) — lessons, practice, mock tests, and exam preparation.",
};

export default function AAPage() {
  return <CurriculumPage data={aaCurriculum} />;
}
