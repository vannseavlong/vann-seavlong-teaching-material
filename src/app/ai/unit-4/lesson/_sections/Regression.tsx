import { SLTag, LessonSection } from "./helpers";

export default function RegressionSection() {
  return (
    <LessonSection
      id="regression"
      label="Topic 3"
      title="Correlation and regression"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
