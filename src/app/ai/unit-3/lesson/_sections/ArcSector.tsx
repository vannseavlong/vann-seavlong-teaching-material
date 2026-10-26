import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 4. Arc length and sector area ──────────────────────────────────────

function SectorDiagram() {
  // Centre (60, 150), r = 110, angle 70 degrees from the horizontal.
  const cx = 60, cy = 150, r = 110;
  const a = (70 * Math.PI) / 180;
  const ex = cx + r * Math.cos(a), ey = cy - r * Math.sin(a);
  return (
    <Diagram caption="The sector is the fraction θ/360 of the whole circle, so both the arc and the area use the same fraction.">
      <svg viewBox="0 0 220 180" width="100%" style={{ maxWidth: 300 }} role="img" aria-label="Sector with radius r, angle theta and arc length l">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#cbd5e1" strokeWidth={1} strokeDasharray="4 4" />
        <path d={`M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${ex} ${ey} Z`} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2} />
        <path d={`M ${cx + 26} ${cy} A 26 26 0 0 0 ${cx + 26 * Math.cos(a)} ${cy - 26 * Math.sin(a)}`} fill="none" stroke="#dc2626" strokeWidth={1.5} />
        <text x={cx + 32} y={cy - 8} fontSize={13} fill="#dc2626">θ</text>
        <text x={cx + 50} y={cy + 16} fontSize={13} fill="#0f172a">r</text>
        <text x={cx + r - 4} y={cy - 56} fontSize={13} fill="#2563eb">l</text>
      </svg>
    </Diagram>
  );
}

export default function ArcSectorSection() {
  return (
    <LessonSection
      id="arc-sector"
      label="Topic 4"
      title="Arc Length and Sector Area"
      tag={<SLTag />}
      intro="A sector is a slice of a circle. Its arc length and area are the same fraction of the full circumference and full area. Angles here are in degrees."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Write the fraction <InlineMath math="\tfrac{\theta}{360}" /> first,
          then multiply by the whole circle: circumference{" "}
          <InlineMath math="2\pi r" /> for the arc, area{" "}
          <InlineMath math="\pi r^2" /> for the sector. The{" "}
          <strong>perimeter</strong> of a sector also includes the two radii.
        </p>
      </HighlightBox>

      <FormulaBox title="Arc and sector (θ in degrees)">
        <FormulaRow label="Length of an arc" math="l = \dfrac{\theta}{360} \times 2\pi r" />
        <FormulaRow label="Area of a sector" math="A = \dfrac{\theta}{360} \times \pi r^2" />
        <FormulaRow label="Perimeter of a sector" math="P = l + 2r" />
      </FormulaBox>

      <FormulaBox title="Segment (region between a chord and its arc)">
        <FormulaRow label="Triangle in the sector" math="A_{\triangle} = \tfrac12 r^2 \sin\theta" />
        <FormulaRow label="Area of a segment" math="A_{\text{segment}} = \dfrac{\theta}{360}\pi r^2 - \tfrac12 r^2 \sin\theta" />
        <FormulaRow label="Find the angle" math="\theta = \dfrac{l}{2\pi r} \times 360" />
        <FormulaRow label="Find the radius" math="r = \sqrt{\dfrac{360A}{\pi\theta}}" />
      </FormulaBox>

      <SectorDiagram />

      <WorkedExample title="A sector has radius 9 cm and angle 140°. Find the arc length, the area and the perimeter.">
        <StepBox n={1}>
          <InlineMath math="l = \dfrac{140}{360} \times 2\pi (9) = 7\pi = \boxed{22.0\text{ cm}}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="A = \dfrac{140}{360} \times \pi (9^2) = 31.5\pi = \boxed{99.0\text{ cm}^2}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="P = 21.99 + 2(9) = \boxed{40.0\text{ cm}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="An arc of length 15 cm is cut from a circle of radius 10 cm. Find the angle at the centre.">
        <StepBox n={1}>
          <InlineMath math="\theta = \dfrac{15}{2\pi (10)} \times 360 = \boxed{85.9°}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the area of the segment cut off by a 60° sector of radius 10 cm.">
        <StepBox n={1}>
          Sector: <InlineMath math="\dfrac{60}{360}\pi (10^2) = 52.36" />
        </StepBox>
        <StepBox n={2}>
          Triangle: <InlineMath math="\tfrac12 (10^2)\sin 60° = 43.30" />
        </StepBox>
        <StepBox n={3}>
          Segment <InlineMath math="= 52.36 - 43.30 = \boxed{9.06\text{ cm}^2}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A garden sprinkler waters a sector of radius 6 m and turns through
            200°. (a) Calculate the area watered. (b) Calculate the length of
            the curved edge of the watered region.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="A = \dfrac{200}{360}\pi (6^2) = 62.8\text{ m}^2" />.</p>
            <p>(b) <InlineMath math="l = \dfrac{200}{360}\times 2\pi (6) = 20.9\text{ m}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A pizza of diameter 30 cm is cut into 8 equal slices. For one
            slice, calculate (a) the area, (b) the length of the crust, (c)
            the perimeter.
          </p>
        }
        answer={
          <>
            <p>Radius 15 cm. Each slice has angle <InlineMath math="360 \div 8 = 45°" />.</p>
            <p>(a) <InlineMath math="A = \dfrac{45}{360}\pi (15^2) = 88.4\text{ cm}^2" />.</p>
            <p>(b) <InlineMath math="l = \dfrac{45}{360}\times 2\pi (15) = 11.8\text{ cm}" />.</p>
            <p>(c) <InlineMath math="P = 11.78 + 2(15) = 41.8\text{ cm}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A sector with angle 50° has area 40 cm². Find its radius, and then
            its perimeter.
          </p>
        }
        answer={
          <>
            <p><InlineMath math="40 = \dfrac{50}{360}\pi r^2" />, so <InlineMath math="r^2 = \dfrac{360 \times 40}{50\pi} = 91.67" /> and <InlineMath math="r = 9.57\text{ cm}" />.</p>
            <p><InlineMath math="l = \dfrac{50}{360}\times 2\pi (9.5746) = 8.36" /> cm, so <InlineMath math="P = 8.36 + 2(9.5746) = 27.5\text{ cm}" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
