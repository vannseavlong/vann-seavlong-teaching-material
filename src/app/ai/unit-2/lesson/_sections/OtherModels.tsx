import { SLTag, LessonSection } from "./helpers";

export default function OtherModelsSection() {
  return (
    <LessonSection
      id="other-models"
      label="Topic 5"
      title="Other models and graph features"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
