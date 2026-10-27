import { SLTag, LessonSection } from "./helpers";

export default function ApplicationsSection() {
  return (
    <LessonSection
      id="applications"
      label="Topic 3"
      title="Stationary points and optimisation"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
