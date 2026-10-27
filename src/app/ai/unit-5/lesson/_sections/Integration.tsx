import { SLTag, LessonSection } from "./helpers";

export default function IntegrationSection() {
  return (
    <LessonSection
      id="integration"
      label="Topic 2"
      title="Integration and area"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
