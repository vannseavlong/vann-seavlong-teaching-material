import { SLTag, LessonSection } from "./helpers";

export default function TestsSection() {
  return (
    <LessonSection
      id="tests"
      label="Topic 6"
      title="Spearman, chi-squared and t-test"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
