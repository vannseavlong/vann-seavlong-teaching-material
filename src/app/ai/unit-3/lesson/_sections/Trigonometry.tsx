import { LessonSection, SLTag } from "./helpers";

export default function TrigonometrySection() {
  return (
    <LessonSection
      id="trigonometry"
      label="Topic 3"
      title="Trigonometry"
      tag={<SLTag />}
      intro="Right-angled trigonometry, sine rule, cosine rule and the area of a triangle."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
