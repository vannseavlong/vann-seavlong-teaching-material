import type { Metadata } from "next";
import CoursePage from "@/components/course/CoursePage";
import IbCourseExtras, { IbCourseMeta } from "@/components/course/IbCourseExtras";
import { aiCurriculum } from "@/lib/curriculum-data";
import { IB_AI } from "@/content/ib-dp";

export const metadata: Metadata = {
  title: "IB Mathematics: Applications & Interpretation (AI)",
  description:
    "IB DP Mathematics AI, SL and HL: unit lessons, interactive topic practice, summative revision papers and formula recaps.",
};

export default function AIPage() {
  return (
    <CoursePage courseId={IB_AI} meta={<IbCourseMeta data={aiCurriculum} />}>
      <IbCourseExtras data={aiCurriculum} />
    </CoursePage>
  );
}
