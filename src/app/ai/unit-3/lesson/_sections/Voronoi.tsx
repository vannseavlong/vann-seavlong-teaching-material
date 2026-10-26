import { LessonSection, SLTag } from "./helpers";

export default function VoronoiSection() {
  return (
    <LessonSection
      id="voronoi"
      label="Topic 6"
      title="Voronoi Diagrams"
      tag={<SLTag />}
      intro="Sites, cells, perpendicular bisectors and nearest-neighbour problems."
    >
      <p className="text-sm text-slate-500">Section in progress.</p>
    </LessonSection>
  );
}
