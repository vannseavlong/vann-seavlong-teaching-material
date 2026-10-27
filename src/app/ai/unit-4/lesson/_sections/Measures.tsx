import { SLTag, LessonSection } from "./helpers";

export default function MeasuresSection() {
  return (
    <LessonSection
      id="measures"
      label="Topic 2"
      title="Measures of centre and spread"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
