import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";
import {
  IsoscelesSplit,
  RhombusDiagonals,
  QuadSharedDiagonal,
  HexagonCentral,
  RectSemicircle,
  TriangleOnSector,
} from "./shapesDiagrams";

// ─── Topic 4B. Trigonometry in shapes ─────────────────────────────────────────

export default function ShapesSection() {
  return (
    <LessonSection
      id="shapes"
      label="Topic 4B"
      title="Trigonometry in Shapes"
      tag={<SLTag />}
      intro="Every polygon can be cut into triangles. Cut the shape, solve each triangle with the rules from Topic 3, then add the pieces. Set the GDC to DEGREE mode."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Draw the shape, then add a line that makes triangles: a height
          (right angle), a diagonal (two triangles) or lines from the centre
          (equal triangles). Mark every known length and angle before choosing
          SOH CAH TOA, the sine rule or the cosine rule.
        </p>
      </HighlightBox>

      <FormulaBox title="1. Split into right-angled triangles">
        <FormulaRow label="Isosceles triangle, equal sides l, base angle θ" math="h = l\sin\theta,\quad b = 2l\cos\theta" />
        <FormulaRow label="Isosceles triangle, apex angle α" math="h = l\cos\tfrac{\alpha}{2},\quad b = 2l\sin\tfrac{\alpha}{2}" />
        <FormulaRow label="Rectangle, diagonal d" math="d = \sqrt{a^2 + b^2},\quad \tan\theta = \dfrac{b}{a}" />
        <FormulaRow label="Rhombus: diagonals bisect at 90°" math="s = \sqrt{\left(\tfrac{d_1}{2}\right)^2 + \left(\tfrac{d_2}{2}\right)^2},\quad \tan\tfrac{\theta}{2} = \dfrac{d_2/2}{d_1/2}" />
      </FormulaBox>

      <FormulaBox title="2. Area with an included angle">
        <FormulaRow label="Triangle (booklet)" math="A = \tfrac12 ab\sin C" />
        <FormulaRow label="Parallelogram (derived: b h with h = a sin θ)" math="A = ab\sin\theta" />
        <FormulaRow label="Rhombus (derived)" math="A = s^2\sin\theta = \tfrac12 d_1 d_2" />
        <FormulaRow label="Quadrilateral cut by a diagonal" math="A = \tfrac12 ab\sin B + \tfrac12 cd\sin D" />
      </FormulaBox>

      <FormulaBox title="3. Shared diagonal (two triangles)">
        <FormulaRow label="Cosine rule (booklet), diagonal d" math="d^2 = a^2 + b^2 - 2ab\cos B" />
        <FormulaRow label="Cosine rule (booklet), angle D" math="\cos D = \dfrac{c^2 + e^2 - d^2}{2ce}" />
        <FormulaRow label="Sine rule (booklet)" math="\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}" />
        <FormulaRow label="Method" math="\text{find } d \text{ in triangle 1, reuse the stored } d \text{ in triangle 2}" />
      </FormulaBox>

      <FormulaBox title="4. Regular polygon with n sides (derived from A = ½ab sin C)">
        <FormulaRow label="Central angle" math="\dfrac{360°}{n}" />
        <FormulaRow label="Interior angle" math="180° - \dfrac{360°}{n}" />
        <FormulaRow label="Side from centre-to-corner distance r" math="s = 2r\sin\dfrac{180°}{n}" />
        <FormulaRow label="Apothem (centre to mid-side)" math="a = r\cos\dfrac{180°}{n}" />
        <FormulaRow label="Area" math="A = \tfrac12 n r^2\sin\dfrac{360°}{n} = \tfrac12 P a" />
        <FormulaRow label="Perimeter" math="P = ns" />
      </FormulaBox>

      <FormulaBox title="5. Composite shapes (θ in degrees)">
        <FormulaRow label="Sector area (booklet)" math="A = \dfrac{\theta}{360}\pi r^2" />
        <FormulaRow label="Arc length (booklet)" math="l = \dfrac{\theta}{360}\times 2\pi r" />
        <FormulaRow label="Segment" math="A = \dfrac{\theta}{360}\pi r^2 - \tfrac12 r^2\sin\theta" />
        <FormulaRow label="Outline length" math="P = \text{straight edges} + \text{arc lengths (not the cut line inside)}" />
      </FormulaBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Diagram caption="Group 1: the height splits the isosceles triangle into two right-angled triangles.">
          <IsoscelesSplit />
        </Diagram>
        <Diagram caption="Group 1 and 2: the diagonals of a rhombus meet at 90° and bisect each other.">
          <RhombusDiagonals />
        </Diagram>
        <Diagram caption="Group 3: the diagonal d (red) belongs to both triangles.">
          <QuadSharedDiagonal />
        </Diagram>
        <Diagram caption="Group 4: n equal triangles meet at the centre; each has apex angle 360°/n.">
          <HexagonCentral />
        </Diagram>
        <Diagram caption="Group 5: area is rectangle plus half circle; the dashed line is not part of the outline.">
          <RectSemicircle />
        </Diagram>
        <Diagram caption="Group 5: sector and triangle share the radius; add the areas.">
          <TriangleOnSector />
        </Diagram>
      </div>

      <WorkedExample title="A roof truss is an isosceles triangle. Each rafter is 6.5 m long and makes 32° with the horizontal beam. Find the height of the truss and the length of the beam.">
        <StepBox n={1}>
          Drop the height. Right-angled triangle with hypotenuse 6.5:{" "}
          <InlineMath math="h = 6.5\sin 32° = \boxed{3.44\text{ m}}" />
        </StepBox>
        <StepBox n={2}>
          Half the beam is <InlineMath math="6.5\cos 32° = 5.512" />, so the
          beam is <InlineMath math="2 \times 5.512 = \boxed{11.0\text{ m}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A rhombus tile has diagonals 24 cm and 10 cm. Find the side, the acute angle and the area.">
        <StepBox n={1}>
          The diagonals meet at 90°, so each side is the hypotenuse of a triangle with legs 12 and 5:{" "}
          <InlineMath math="s = \sqrt{12^2 + 5^2} = \boxed{13\text{ cm}}" />
        </StepBox>
        <StepBox n={2}>
          The diagonal of length 24 bisects the acute angle:{" "}
          <InlineMath math="\tan\tfrac{\theta}{2} = \dfrac{5}{12}" />, so{" "}
          <InlineMath math="\theta = 2\tan^{-1}\!\left(\tfrac{5}{12}\right) = \boxed{45.2°}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="A = \tfrac12 d_1 d_2 = \tfrac12(24)(10) = \boxed{120\text{ cm}^2}" />. Check:{" "}
          <InlineMath math="13^2\sin 45.24° = 120" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A field is a parallelogram with sides 85 m and 60 m and an angle of 70° between them. Calculate its area.">
        <StepBox n={1}>
          The height on the 85 m side is <InlineMath math="60\sin 70° = 56.38" /> m.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="A = 85 \times 56.38 = \boxed{4790\text{ m}^2}" /> (3 s.f.). In one step: <InlineMath math="ab\sin\theta = 85(60)\sin 70°" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A plot ABCD has AB = 80 m, BC = 60 m, CD = 50 m, DA = 70 m and angle ABC = 75°. Find the diagonal AC and the angle ADC.">
        <StepBox n={1}>
          Triangle ABC has two sides and the included angle, so use the cosine rule:{" "}
          <InlineMath math="AC^2 = 80^2 + 60^2 - 2(80)(60)\cos 75° = 7515.7" />, so{" "}
          <InlineMath math="AC = \boxed{86.7\text{ m}}" />
        </StepBox>
        <StepBox n={2}>
          Triangle ACD has all three sides:{" "}
          <InlineMath math="\cos D = \dfrac{50^2 + 70^2 - 86.69^2}{2(50)(70)} = -0.0165" />, so{" "}
          <InlineMath math="\angle ADC = \boxed{90.9°}" />
        </StepBox>
      </WorkedExample>

      <CalcSteps
        steps={[
          <>Check the mode: press <Keys s="mode" /> and select Degree.</>,
          <>Enter <InlineMath math="\sqrt{80^2+60^2-2(80)(60)\cos 75°}" /> and press <Keys s="enter" />. Use brackets round the whole expression under the root.</>,
          <>Press <Keys s="sto→" /> <Keys s="alpha" /> <Keys s="math" /> (A) <Keys s="enter" /> to store AC.</>,
          <>For the angle, enter <InlineMath math="\cos^{-1}\!\big((50^2+70^2-A^2)/(2\times50\times70)\big)" /> using the stored A, not the rounded 86.7.</>,
        ]}
      />

      <WorkedExample title="Find the area of the plot ABCD in the previous example.">
        <StepBox n={1}>
          Triangle ABC: <InlineMath math="\tfrac12(80)(60)\sin 75° = 2318.2" />
        </StepBox>
        <StepBox n={2}>
          Triangle ACD: <InlineMath math="\tfrac12(50)(70)\sin 90.94° = 1749.8" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="A = 2318.2 + 1749.8 = \boxed{4070\text{ m}^2}" /> (3 s.f.)
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A patio is a regular pentagon with sides of 3 m. Find the distance from the centre to a corner, the area and the apothem.">
        <StepBox n={1}>
          Half the central angle is <InlineMath math="180° \div 5 = 36°" />.{" "}
          <InlineMath math="3 = 2r\sin 36°" /> gives <InlineMath math="r = \boxed{2.55\text{ m}}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="A = \tfrac12(5)(2.552^2)\sin 72° = \boxed{15.5\text{ m}^2}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="a = 2.552\cos 36° = \boxed{2.06\text{ m}}" />. Check:{" "}
          <InlineMath math="\tfrac12 Pa = \tfrac12(15)(2.065) = 15.5" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A window is a rectangle 1.2 m wide and 1.5 m high with a semicircle on top (diameter 1.2 m). Find the area of glass and the length of the frame around the outside.">
        <StepBox n={1}>
          Radius <InlineMath math="r = 0.6" />.{" "}
          <InlineMath math="A = 1.2 \times 1.5 + \tfrac12\pi(0.6^2) = 1.8 + 0.5655 = \boxed{2.37\text{ m}^2}" />
        </StepBox>
        <StepBox n={2}>
          Outline: two sides, the base and the arc. The top of the rectangle is inside, so it is not counted.{" "}
          <InlineMath math="P = 2(1.5) + 1.2 + \pi(0.6) = \boxed{6.08\text{ m}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A triangular sign is isosceles. The equal sides are 40 cm and the
            angle between them is 50°. Find (a) the height of the sign, (b)
            the length of the base.
          </p>
        }
        answer={
          <>
            <p>Split at the height: the half-angle at the apex is 25°.</p>
            <p>(a) <InlineMath math="h = 40\cos 25° = 36.3\text{ cm}" />.</p>
            <p>(b) <InlineMath math="b = 2(40)\sin 25° = 33.8\text{ cm}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <>
            <p>
              (a) A parallelogram has sides 12 cm and 9 cm and area 90 cm².
              Find the acute angle between the sides.
            </p>
            <p className="mt-2">
              (b) A rhombus has side 7 cm and an angle of 54°. Find its area.
            </p>
          </>
        }
        answer={
          <>
            <p>(a) <InlineMath math="90 = 12(9)\sin\theta" />, so <InlineMath math="\sin\theta = 0.8333" /> and <InlineMath math="\theta = 56.4°" />.</p>
            <p>(b) <InlineMath math="A = 7^2\sin 54° = 39.6\text{ cm}^2" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A plot PQRS has PQ = 45 m, QR = 38 m, RS = 30 m, SP = 52 m and
            angle PQR = 110°. Calculate (a) the diagonal PR, (b) angle PSR,
            (c) the area of the plot.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="PR^2 = 45^2 + 38^2 - 2(45)(38)\cos 110° = 4638.7" />, so <InlineMath math="PR = 68.1\text{ m}" />.</p>
            <p>(b) <InlineMath math="\cos S = \dfrac{30^2 + 52^2 - 68.108^2}{2(30)(52)} = -0.3309" />, so <InlineMath math="\angle PSR = 109°" />.</p>
            <p>(c) <InlineMath math="A = \tfrac12(45)(38)\sin 110° + \tfrac12(30)(52)\sin 109.37° = 803.5 + 735.8 = 1540\text{ m}^2" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A table top is a regular octagon with sides of 20 cm. Find (a) the
            distance from the centre to a corner, (b) the area of the top, (c)
            the interior angle.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="20 = 2r\sin 22.5°" />, so <InlineMath math="r = 26.1\text{ cm}" />.</p>
            <p>(b) <InlineMath math="A = \tfrac12(8)(26.13^2)\sin 45° = 1930\text{ cm}^2" />.</p>
            <p>(c) <InlineMath math="180° - 360° \div 8 = 135°" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A flower bed is a sector OAB of radius 8 m and angle 65°, joined
            along the radius OB to a triangle OBC with OC = 11 m and angle BOC
            = 50°. Calculate (a) the area of the bed, (b) the length of the
            edge around the outside.
          </p>
        }
        answer={
          <>
            <p>(a) Sector: <InlineMath math="\dfrac{65}{360}\pi(8^2) = 36.30" />. Triangle: <InlineMath math="\tfrac12(8)(11)\sin 50° = 33.71" />. Total <InlineMath math="70.0\text{ m}^2" />.</p>
            <p>(b) Arc: <InlineMath math="\dfrac{65}{360}\times 2\pi(8) = 9.076" />. <InlineMath math="BC^2 = 8^2 + 11^2 - 2(8)(11)\cos 50° = 71.87" />, so <InlineMath math="BC = 8.478" />. The outline is arc AB, BC, CO and OA (OB is inside the bed), so <InlineMath math="9.076 + 8.478 + 11 + 8 = 36.6\text{ m}" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
