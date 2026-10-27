import { SLTag, LessonSection } from "./helpers";

export default function DerivativeSection() {
  return (
    <LessonSection
      id="derivative"
      label="Topic 1"
      title="Derivative of x^n"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
