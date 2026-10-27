import { SLTag, LessonSection } from "./helpers";

export default function ProbabilitySection() {
  return (
    <LessonSection
      id="probability"
      label="Topic 4"
      title="Probability"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
