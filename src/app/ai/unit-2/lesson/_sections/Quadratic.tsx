import { SLTag, LessonSection } from "./helpers";

export default function QuadraticSection() {
  return (
    <LessonSection
      id="quadratic"
      label="Topic 3"
      title="Quadratic model"
      tag={<SLTag />}
      intro="Content in progress."
    >
      <p className="text-slate-500">To be written.</p>
    </LessonSection>
  );
}
