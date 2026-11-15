import type { Metadata } from "next";
import CoursePage from "@/components/course/CoursePage";
import IbCourseExtras, { IbCourseMeta } from "@/components/course/IbCourseExtras";
import { aaCurriculum } from "@/lib/curriculum-data";
import { IB_AA } from "@/content/ib-dp";

export const metadata: Metadata = {
  title: "IB Mathematics: Analysis & Approaches (AA)",
  description:
    "IB DP Mathematics AA, SL and HL: unit lessons, interactive topic practice, revision papers and formula recaps.",
};

export default function AAPage() {
  return (
    <CoursePage courseId={IB_AA} meta={<IbCourseMeta data={aaCurriculum} />}>
      <IbCourseExtras data={aaCurriculum} />
    </CoursePage>
  );
}
