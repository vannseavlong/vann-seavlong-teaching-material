import { SLTag, LessonSection } from "./helpers";

export default function DataSection() {
  return (
    <LessonSection
      id="data"
      label="Topic 1"
      title="Sampling and data"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
