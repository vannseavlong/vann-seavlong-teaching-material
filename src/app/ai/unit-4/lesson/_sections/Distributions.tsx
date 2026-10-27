import { SLTag, LessonSection } from "./helpers";

export default function DistributionsSection() {
  return (
    <LessonSection
      id="distributions"
      label="Topic 5"
      title="Random variables and distributions"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
