import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 6. Voronoi diagrams ────────────────────────────────────────────────

/** Sites A(0,0), B(8,0), C(2,6). Edges meet at the vertex V(4,2). 1 unit = 22 px. */
function VoronoiDiagram() {
  const X = (x: number) => 70 + 22 * x;
  const Y = (y: number) => 200 - 22 * y;
  const sites = [
    { n: "A", x: 0, y: 0 },
    { n: "B", x: 8, y: 0 },
    { n: "C", x: 2, y: 6 },
  ];
  return (
    <Diagram caption="Sites A(0, 0), B(8, 0), C(2, 6). Each edge is a perpendicular bisector of two sites. The vertex V(4, 2) is equidistant from all three sites.">
      <svg viewBox="0 0 340 260" width="100%" style={{ maxWidth: 440 }} role="img" aria-label="Voronoi diagram with three sites, three edges and one vertex">
        <rect x={X(-2)} y={Y(8)} width={22 * 12} height={22 * 10} fill="#f8fafc" stroke="#cbd5e1" />
        <circle cx={X(4)} cy={Y(2)} r={22 * Math.sqrt(20)} fill="none" stroke="#94a3b8" strokeDasharray="4 4" clipPath="url(#vbox)" />
        <clipPath id="vbox"><rect x={X(-2)} y={Y(8)} width={22 * 12} height={22 * 10} /></clipPath>
        <line x1={X(4)} y1={Y(2)} x2={X(4)} y2={Y(-2)} stroke="#2563eb" strokeWidth={2} />
        <line x1={X(4)} y1={Y(2)} x2={X(-2)} y2={Y(4)} stroke="#2563eb" strokeWidth={2} />
        <line x1={X(4)} y1={Y(2)} x2={X(10)} y2={Y(8)} stroke="#2563eb" strokeWidth={2} />
        <circle cx={X(4)} cy={Y(2)} r={4.5} fill="#dc2626" />
        <text x={X(4) + 7} y={Y(2) - 6} fontSize={11} fill="#dc2626">V(4, 2)</text>
        {sites.map((s) => (
          <g key={s.n}>
            <circle cx={X(s.x)} cy={Y(s.y)} r={4.5} fill="#0f172a" />
            <text x={X(s.x) + 7} y={Y(s.y) - 6} fontSize={13} fontWeight={700} fill="#0f172a">{s.n}</text>
          </g>
        ))}
      </svg>
    </Diagram>
  );
}

export default function VoronoiSection() {
  return (
    <LessonSection
      id="voronoi"
      label="Topic 6"
      title="Voronoi Diagrams"
      tag={<SLTag />}
      intro="A Voronoi diagram splits a map into regions by nearest site: every point lies in the cell of the site it is closest to. Each edge is a perpendicular bisector, so this topic reuses the midpoint and perpendicular gradient from Topic 1."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          A point on an <strong>edge</strong> is the same distance from two
          sites. A <strong>vertex</strong> is the same distance from three
          sites, so it is the centre of the circle through them. To place
          something as far as possible from every site (a waste dump, a new
          shop away from rivals), test the vertices.
        </p>
      </HighlightBox>

      <FormulaBox title="Vocabulary">
        <FormulaRow label="Site" math="\text{a given point (a hospital, a tower, a school)}" />
        <FormulaRow label="Cell" math="\text{all points closer to this site than to any other}" />
        <FormulaRow label="Edge" math="\text{points equidistant from two sites}" />
        <FormulaRow label="Vertex" math="\text{point equidistant from three or more sites}" />
      </FormulaBox>

      <FormulaBox title="Constructing an edge between sites P and Q">
        <FormulaRow label="Midpoint" math="M = \left(\dfrac{x_P + x_Q}{2},\ \dfrac{y_P + y_Q}{2}\right)" />
        <FormulaRow label="Gradient of PQ" math="m_{PQ} = \dfrac{y_Q - y_P}{x_Q - x_P}" />
        <FormulaRow label="Gradient of the edge" math="m = -\dfrac{1}{m_{PQ}}" />
        <FormulaRow label="Edge equation" math="y - y_M = m(x - x_M)" />
        <FormulaRow label="Vertex" math="\text{solve two edge equations together}" />
      </FormulaBox>

      <VoronoiDiagram />

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">Adding a site</p>
        <p className="text-slate-500 text-sm">
          A new site only changes the cells it touches. Draw its perpendicular
          bisectors with the neighbouring sites, keep the parts that bound its
          new cell, and delete the old edge sections that fall inside it.
        </p>
      </HighlightBox>

      <WorkedExample title="Sites A(0, 0), B(8, 0), C(2, 6): find the equation of each edge and the vertex">
        <StepBox n={1}>
          Edge AB: the midpoint is (4, 0) and AB is horizontal, so the edge is
          vertical: <InlineMath math="\boxed{x = 4}" />.
        </StepBox>
        <StepBox n={2}>
          Edge AC: midpoint (1, 3), <InlineMath math="m_{AC} = 3" />, edge
          gradient <InlineMath math="-\tfrac13" />.{" "}
          <InlineMath math="y - 3 = -\tfrac13(x - 1)" /> gives{" "}
          <InlineMath math="\boxed{x + 3y = 10}" />.
        </StepBox>
        <StepBox n={3}>
          Edge BC: midpoint (5, 3), <InlineMath math="m_{BC} = \tfrac{6-0}{2-8} = -1" />, edge
          gradient 1. <InlineMath math="y - 3 = x - 5" /> gives{" "}
          <InlineMath math="\boxed{y = x - 2}" />.
        </StepBox>
        <StepBox n={4}>
          Vertex: put <InlineMath math="x = 4" /> into{" "}
          <InlineMath math="x + 3y = 10" /> to get <InlineMath math="y = 2" />.
          Check in <InlineMath math="y = x - 2" />: <InlineMath math="4 - 2 = 2" />.{" "}
          <InlineMath math="\boxed{V = (4,\ 2)}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Which site is nearest to the point P(6, 5)?">
        <StepBox n={1}>
          <InlineMath math="PA = \sqrt{6^2 + 5^2} = 7.81" />,{" "}
          <InlineMath math="PB = \sqrt{2^2 + 5^2} = 5.39" />,{" "}
          <InlineMath math="PC = \sqrt{4^2 + 1^2} = 4.12" />.
        </StepBox>
        <StepBox n={2}>
          The smallest distance is to C, so P lies in the cell of C:{" "}
          <InlineMath math="\boxed{\text{site C}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A waste dump must be as far as possible from A, B and C, inside the triangle ABC. Where should it go and how far is it from each site?">
        <StepBox n={1}>
          The best point inside the triangle is the vertex, V(4, 2). Any other
          point inside is closer to at least one site.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="VA = \sqrt{4^2 + 2^2} = \sqrt{20} = \boxed{4.47}" /> in
          the same units as the map. <InlineMath math="VB" /> and{" "}
          <InlineMath math="VC" /> are also <InlineMath math="\sqrt{20}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Three clinics are at P(1, 1), Q(9, 1) and R(5, 9). Units are km.
            (a) Find the equation of the Voronoi edge between P and R. (b)
            Find the coordinates of the Voronoi vertex. (c) Calculate the
            distance from the vertex to each clinic. (d) Which clinic is
            nearest to a house at (6, 6)?
          </p>
        }
        answer={
          <>
            <p>(a) Midpoint of PR: (3, 5). <InlineMath math="m_{PR} = \tfrac{8}{4} = 2" />, edge gradient <InlineMath math="-\tfrac12" />. <InlineMath math="y - 5 = -\tfrac12(x - 3)" />, so <InlineMath math="x + 2y = 13" />.</p>
            <p>(b) Edge PQ is <InlineMath math="x = 5" />. Then <InlineMath math="5 + 2y = 13" />, so <InlineMath math="y = 4" />. Vertex (5, 4). Check on edge QR (<InlineMath math="x - 2y = -3" />): <InlineMath math="5 - 8 = -3" />.</p>
            <p>(c) <InlineMath math="\sqrt{(5-1)^2 + (4-1)^2} = 5\text{ km}" /> from each clinic.</p>
            <p>(d) Distances from (6, 6): P <InlineMath math="\sqrt{50} = 7.07" />, Q <InlineMath math="\sqrt{34} = 5.83" />, R <InlineMath math="\sqrt{10} = 3.16" />. Nearest is R.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A rainfall map estimates the rain at any point by using the
            nearest of three stations: A(0, 0) recorded 12 mm, B(8, 0)
            recorded 20 mm and C(2, 6) recorded 15 mm. Estimate the rainfall
            at (6, 3) and state which cell the point is in.
          </p>
        }
        answer={
          <>
            <p>Distances: A <InlineMath math="\sqrt{45} = 6.71" />, B <InlineMath math="\sqrt{13} = 3.61" />, C <InlineMath math="\sqrt{25} = 5" />.</p>
            <p>The point is in the cell of B, so the estimate is 20 mm.</p>
          </>
        }
      />
    </LessonSection>
  );
}
