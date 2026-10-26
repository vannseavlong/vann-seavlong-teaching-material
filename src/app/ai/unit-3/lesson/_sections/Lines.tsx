import { LessonSection, SLTag } from "./helpers";

export default function LinesSection() {
  return (
    <LessonSection
      id="lines"
      label="Topic 1"
      title="Lines in 2D"
      tag={<SLTag />}
      intro="Gradient, equation of a line, parallel and perpendicular lines, midpoint and distance."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
