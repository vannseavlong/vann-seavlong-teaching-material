import { LessonSection, SLTag } from "./helpers";

export default function Solids3DSection() {
  return (
    <LessonSection
      id="solids-3d"
      label="Topic 2"
      title="3D Distance and Solids"
      tag={<SLTag />}
      intro="Distance and midpoint in 3D, volume and surface area of solids, angle between a line and a plane."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
