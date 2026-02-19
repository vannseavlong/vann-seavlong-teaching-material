import { Metadata } from "next";
import CurriculumPage from "@/components/curriculum/CurriculumPage";
import { aiCurriculum } from "@/lib/curriculum-data";

export const metadata: Metadata = {
  title: "AI: Applications & Interpretation — IB Math Curriculum",
  description:
    "Full curriculum breakdown for IB Mathematics Applications & Interpretation (AI) — lessons, practice, mock tests, and exam preparation.",
};

export default function AIPage() {
  return <CurriculumPage data={aiCurriculum} />;
}
