import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 2. 3D distance and solids ──────────────────────────────────────────

function ConeAndPyramidDiagram() {
  return (
    <Diagram caption="Cone: l² = r² + h². Square-based pyramid: the vertical height h meets the base at its centre, not at a vertex.">
      <svg viewBox="0 0 460 190" width="100%" style={{ maxWidth: 560 }} role="img" aria-label="A cone and a square-based pyramid with labelled heights">
        {/* Cone */}
        <ellipse cx={110} cy={150} rx={70} ry={16} fill="none" stroke="#2563eb" strokeWidth={2} />
        <line x1={110} y1={20} x2={40} y2={150} stroke="#2563eb" strokeWidth={2} />
        <line x1={110} y1={20} x2={180} y2={150} stroke="#2563eb" strokeWidth={2} />
        <line x1={110} y1={20} x2={110} y2={150} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5 4" />
        <line x1={110} y1={150} x2={180} y2={150} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5 4" />
        <text x={116} y={90} fontSize={12} fill="#dc2626">h</text>
        <text x={142} y={166} fontSize={12} fill="#dc2626">r</text>
        <text x={158} y={80} fontSize={12} fill="#2563eb">l</text>
        <text x={110} y={186} fontSize={11} textAnchor="middle" fill="#64748b">Cone</text>
        {/* Pyramid */}
        <polygon points="280,150 400,150 430,125 310,125" fill="none" stroke="#2563eb" strokeWidth={2} />
        <line x1={355} y1={20} x2={280} y2={150} stroke="#2563eb" strokeWidth={2} />
        <line x1={355} y1={20} x2={400} y2={150} stroke="#2563eb" strokeWidth={2} />
        <line x1={355} y1={20} x2={430} y2={125} stroke="#2563eb" strokeWidth={2} />
        <line x1={355} y1={20} x2={310} y2={125} stroke="#2563eb" strokeWidth={1.5} strokeDasharray="5 4" />
        <line x1={355} y1={20} x2={355} y2={137.5} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5 4" />
        <text x={361} y={85} fontSize={12} fill="#dc2626">h</text>
        <text x={355} y={186} fontSize={11} textAnchor="middle" fill="#64748b">Right square pyramid</text>
      </svg>
    </Diagram>
  );
}

export default function Solids3DSection() {
  return (
    <LessonSection
      id="solids-3d"
      label="Topic 2"
      title="3D Distance and Solids"
      tag={<SLTag />}
      alt
      intro="Extend distance and midpoint to three coordinates, then find volume and surface area of pyramids, cones, spheres and composite solids. To find an angle in a solid, draw the right-angled triangle that contains it and use SOH CAH TOA."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Every 3D question reduces to a 2D right-angled triangle. Name the
          triangle, sketch it flat with its true lengths, then use Pythagoras
          or trigonometry. The <strong>vertical height</strong> and the{" "}
          <strong>slant height</strong> are different lengths: never swap them
          in a volume formula.
        </p>
      </HighlightBox>

      <FormulaBox title="Distance and midpoint in 3D">
        <FormulaRow label="Distance AB" math="d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}" />
        <FormulaRow label="Midpoint of AB" math="\left(\dfrac{x_1+x_2}{2},\ \dfrac{y_1+y_2}{2},\ \dfrac{z_1+z_2}{2}\right)" />
        <FormulaRow label="Diagonal of a cuboid" math="d = \sqrt{l^2 + w^2 + h^2}" />
      </FormulaBox>

      <FormulaBox title="Volume and surface area">
        <FormulaRow label="Pyramid volume" math="V = \tfrac13 A h \quad (A = \text{base area},\ h = \text{vertical height})" />
        <FormulaRow label="Cone volume" math="V = \tfrac13 \pi r^2 h" />
        <FormulaRow label="Cone curved surface" math="A = \pi r l \quad (l = \text{slant height})" />
        <FormulaRow label="Slant height of a cone" math="l^2 = r^2 + h^2" />
        <FormulaRow label="Sphere volume" math="V = \tfrac43 \pi r^3" />
        <FormulaRow label="Sphere surface" math="A = 4\pi r^2" />
        <FormulaRow label="Cylinder volume" math="V = \pi r^2 h" />
        <FormulaRow label="Cylinder curved surface" math="A = 2\pi r h" />
        <FormulaRow label="Hemisphere" math="V = \tfrac23 \pi r^3,\quad \text{curved } A = 2\pi r^2" />
      </FormulaBox>

      <ConeAndPyramidDiagram />

      <WorkedExample title="A(1, 2, 3) and B(5, −2, 6): find the distance AB and the midpoint">
        <StepBox n={1}>
          <InlineMath math="AB = \sqrt{4^2 + (-4)^2 + 3^2} = \sqrt{41} = \boxed{6.40}" />
        </StepBox>
        <StepBox n={2}>
          Midpoint: <InlineMath math="\left(\tfrac{1+5}{2}, \tfrac{2-2}{2}, \tfrac{3+6}{2}\right) = \boxed{(3,\ 0,\ 4.5)}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A cone has base radius 5 cm and vertical height 12 cm: find the volume and the total surface area">
        <StepBox n={1}>
          Slant height: <InlineMath math="l = \sqrt{5^2 + 12^2} = 13" /> cm.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="V = \tfrac13 \pi (5^2)(12) = 100\pi = \boxed{314\text{ cm}^3}" />
        </StepBox>
        <StepBox n={3}>
          Curved part: <InlineMath math="\pi (5)(13) = 65\pi" />. Base:{" "}
          <InlineMath math="\pi (5^2) = 25\pi" />. Total:{" "}
          <InlineMath math="90\pi = \boxed{283\text{ cm}^2}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A grain silo is a cylinder of radius 2 m and height 5 m with a hemisphere of radius 2 m on top: find the volume and the outside surface area (base included)">
        <StepBox n={1}>
          Volume: <InlineMath math="\pi (2^2)(5) + \tfrac23 \pi (2^3) = 20\pi + \tfrac{16}{3}\pi = \tfrac{76}{3}\pi = \boxed{79.6\text{ m}^3}" />
        </StepBox>
        <StepBox n={2}>
          Cylinder wall: <InlineMath math="2\pi (2)(5) = 20\pi" />. Hemisphere:{" "}
          <InlineMath math="2\pi (2^2) = 8\pi" />. Base disc:{" "}
          <InlineMath math="\pi (2^2) = 4\pi" />.
        </StepBox>
        <StepBox n={3}>
          Total: <InlineMath math="32\pi = \boxed{101\text{ m}^2}" />. The
          hemisphere sits on the cylinder, so no top disc is added.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the angle between an edge and the base of a right square pyramid (base side 8 m, vertical height 6 m)">
        <StepBox n={1}>
          The edge runs from the apex to a corner of the base. Its projection
          on the base is half the base diagonal:{" "}
          <InlineMath math="\tfrac12 \times 8\sqrt2 = 4\sqrt2 = 5.657" /> m.
        </StepBox>
        <StepBox n={2}>
          In the right-angled triangle (height, half-diagonal, edge):{" "}
          <InlineMath math="\tan\theta = \dfrac{6}{4\sqrt2}" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\theta = \boxed{46.7°}" />. The edge length is{" "}
          <InlineMath math="\sqrt{6^2 + (4\sqrt2)^2} = \sqrt{68} = 8.25" /> m.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A storage room is a cuboid 12 m long, 5 m wide and 4 m high. A
            cable runs from one bottom corner to the opposite top corner. (a)
            Calculate the length of the cable. (b) Calculate the angle the
            cable makes with the floor.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="d = \sqrt{12^2 + 5^2 + 4^2} = \sqrt{185} = 13.6\text{ m}" />.</p>
            <p>(b) The floor diagonal is <InlineMath math="\sqrt{12^2 + 5^2} = 13" /> m. <InlineMath math="\tan\theta = \tfrac{4}{13}" />, so <InlineMath math="\theta = 17.1°" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A tent is a right pyramid with a square base of side 3 m and
            vertical height 2.4 m. (a) Calculate the volume of air inside.
            (b) Calculate the slant height of one triangular face. (c)
            Calculate the area of canvas for the four faces.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="V = \tfrac13 (3^2)(2.4) = 7.2\text{ m}^3" />.</p>
            <p>(b) The slant height meets the base edge at its midpoint, 1.5 m from the centre: <InlineMath math="\sqrt{2.4^2 + 1.5^2} = \sqrt{8.01} = 2.83\text{ m}" />.</p>
            <p>(c) <InlineMath math="4 \times \tfrac12 \times 3 \times 2.83 = 17.0\text{ m}^2" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
