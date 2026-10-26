import { LessonSection, SLTag } from "./helpers";

export default function ArcSectorSection() {
  return (
    <LessonSection
      id="arc-sector"
      label="Topic 4"
      title="Arc Length and Sector Area"
      tag={<SLTag />}
      intro="Length of an arc and area of a sector as a fraction of the circle."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
