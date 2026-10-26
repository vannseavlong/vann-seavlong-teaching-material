import { LessonSection, SLTag } from "./helpers";

export default function TrigContextSection() {
  return (
    <LessonSection
      id="trig-context"
      label="Topic 5"
      title="Trigonometry in Context"
      tag={<SLTag />}
      intro="Elevation, depression, bearings and multi-triangle problems."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
