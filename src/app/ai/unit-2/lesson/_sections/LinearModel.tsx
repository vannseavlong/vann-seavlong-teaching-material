import { SLTag, LessonSection } from "./helpers";

export default function LinearModelSection() {
  return (
    <LessonSection
      id="linear-model"
      label="Topic 2"
      title="Linear model"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
