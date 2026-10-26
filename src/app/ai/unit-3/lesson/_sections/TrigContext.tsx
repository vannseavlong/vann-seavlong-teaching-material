import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 5. Trigonometry in context ─────────────────────────────────────────

function BearingDiagram() {
  // North up, bearing 070 drawn clockwise from north.
  const cx = 110, cy = 110, len = 80;
  const b = (70 * Math.PI) / 180;
  const ex = cx + len * Math.sin(b), ey = cy - len * Math.cos(b);
  return (
    <Diagram caption="A bearing is measured clockwise from north and written with 3 figures. The bearing of Q from P is 070°. The back bearing of P from Q is 070° + 180° = 250°.">
      <svg viewBox="0 0 240 220" width="100%" style={{ maxWidth: 300 }} role="img" aria-label="Compass showing a bearing of 070 degrees">
        <line x1={cx} y1={cy + 90} x2={cx} y2={cy - 100} stroke="#94a3b8" strokeWidth={1.2} />
        <text x={cx} y={cy - 104} fontSize={13} fontWeight={700} textAnchor="middle" fill="#0f172a">N</text>
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#2563eb" strokeWidth={2} />
        <path d={`M ${cx} ${cy - 40} A 40 40 0 0 1 ${cx + 40 * Math.sin(b)} ${cy - 40 * Math.cos(b)}`} fill="none" stroke="#dc2626" strokeWidth={1.5} />
        <text x={cx + 24} y={cy - 46} fontSize={12} fill="#dc2626">070°</text>
        <circle cx={cx} cy={cy} r={4} fill="#0f172a" />
        <circle cx={ex} cy={ey} r={4} fill="#0f172a" />
        <text x={cx - 14} y={cy + 16} fontSize={13} fill="#0f172a">P</text>
        <text x={ex + 6} y={ey - 4} fontSize={13} fill="#0f172a">Q</text>
      </svg>
    </Diagram>
  );
}

function ElevationDiagram() {
  return (
    <Diagram caption="Angles of elevation and depression are measured from the horizontal. The two angles are equal (alternate angles).">
      <svg viewBox="0 0 320 170" width="100%" style={{ maxWidth: 420 }} role="img" aria-label="Angle of elevation from a boat and angle of depression from a cliff top">
        <line x1={20} y1={150} x2={300} y2={150} stroke="#94a3b8" strokeWidth={1.2} />
        <line x1={40} y1={30} x2={40} y2={150} stroke="#0f172a" strokeWidth={3} />
        <line x1={40} y1={30} x2={120} y2={30} stroke="#94a3b8" strokeWidth={1} strokeDasharray="4 4" />
        <line x1={40} y1={30} x2={260} y2={150} stroke="#2563eb" strokeWidth={2} />
        <line x1={260} y1={150} x2={160} y2={150} stroke="#94a3b8" strokeWidth={1} />
        <path d="M 92 30 A 52 52 0 0 1 86 56" fill="none" stroke="#dc2626" strokeWidth={1.5} />
        <text x={100} y={50} fontSize={12} fill="#dc2626">depression</text>
        <path d="M 222 150 A 38 38 0 0 0 229 130" fill="none" stroke="#dc2626" strokeWidth={1.5} />
        <text x={190} y={122} fontSize={12} fill="#dc2626">elevation</text>
        <text x={26} y={96} fontSize={12} fill="#0f172a">h</text>
        <text x={150} y={166} fontSize={12} fill="#0f172a">horizontal distance</text>
      </svg>
    </Diagram>
  );
}

export default function TrigContextSection() {
  return (
    <LessonSection
      id="trig-context"
      label="Topic 5"
      title="Trigonometry in Context"
      tag={<SLTag />}
      alt
      intro="Real problems arrive as words: a ship, a tower, a drone. Draw the diagram, mark the right angle or the triangle, and choose the rule from Topic 3. Bearings and angles of elevation are the two conventions you must know."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Draw a <strong>north line at every point</strong> where a bearing is
          given. Angles on the same side of a north line add to 180° (co-interior).
          Many questions need two triangles: solve one to get a side or angle,
          then carry it into the other without rounding.
        </p>
      </HighlightBox>

      <FormulaBox title="Conventions">
        <FormulaRow label="Bearing" math="\text{clockwise from north, 3 figures (e.g. } 070°\text{)}" />
        <FormulaRow label="Back bearing" math="\text{bearing} \pm 180°" />
        <FormulaRow label="Elevation / depression" math="\text{angle from the horizontal, up / down}" />
        <FormulaRow label="Alternate angles" math="\text{depression from A} = \text{elevation from B}" />
      </FormulaBox>

      <FormulaBox title="Tools from Topic 3">
        <FormulaRow label="Right-angled" math="\tan\theta = \dfrac{\text{opp}}{\text{adj}},\quad h = d\tan\theta" />
        <FormulaRow label="Cosine rule" math="c^2 = a^2 + b^2 - 2ab\cos C" />
        <FormulaRow label="Sine rule" math="\dfrac{\sin A}{a} = \dfrac{\sin B}{b}" />
      </FormulaBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BearingDiagram />
        <ElevationDiagram />
      </div>

      <WorkedExample title="Elevation: from a point 40 m from the base of a tower, the angle of elevation of the top is 35°. The observer's eye is 1.7 m above the ground. Find the height of the tower.">
        <StepBox n={1}>
          Height above eye level: <InlineMath math="40\tan 35° = 28.0" /> m.
        </StepBox>
        <StepBox n={2}>
          Add the eye height: <InlineMath math="28.0 + 1.7 = \boxed{29.7\text{ m}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Depression: from the top of a 60 m cliff, the angle of depression of a boat is 25°. Find the horizontal distance to the boat.">
        <StepBox n={1}>
          The angle of elevation of the cliff top from the boat is also 25°.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="\tan 25° = \dfrac{60}{d}" />, so{" "}
          <InlineMath math="d = \dfrac{60}{\tan 25°} = \boxed{129\text{ m}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Bearings: a ship leaves port P and sails 12 km on a bearing of 070° to Q, then 9 km on a bearing of 150° to R. Find PR and the bearing of R from P.">
        <StepBox n={1}>
          Back bearing of P from Q: <InlineMath math="70° + 180° = 250°" />.
          The angle at Q is <InlineMath math="250° - 150° = 100°" />.
        </StepBox>
        <StepBox n={2}>
          Cosine rule: <InlineMath math="PR^2 = 12^2 + 9^2 - 2(12)(9)\cos 100° = 262.5" />, so{" "}
          <InlineMath math="PR = \boxed{16.2\text{ km}}" />.
        </StepBox>
        <StepBox n={3}>
          Sine rule for angle P: <InlineMath math="\sin P = \dfrac{9\sin 100°}{16.20} = 0.547" />, so{" "}
          <InlineMath math="P = 33.2°" />. Side 9 is not the longest, so P is acute.
        </StepBox>
        <StepBox n={4}>
          Bearing of R from P: <InlineMath math="70° + 33.2° = \boxed{103°}" />.
          The bearing of P from R is <InlineMath math="103° + 180° = 283°" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Two triangles: a tower is seen from A at an elevation of 30°. From B, 50 m further away in the same line, the elevation is 20°. Find the height of the tower.">
        <StepBox n={1}>
          Let the height be <em>h</em>. Distances to the base: from A{" "}
          <InlineMath math="\dfrac{h}{\tan 30°}" />, from B{" "}
          <InlineMath math="\dfrac{h}{\tan 20°}" />.
        </StepBox>
        <StepBox n={2}>
          B is 50 m further: <InlineMath math="\dfrac{h}{\tan 20°} - \dfrac{h}{\tan 30°} = 50" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="h(2.747 - 1.732) = 50" />, so{" "}
          <InlineMath math="h = \boxed{49.2\text{ m}}" />. Keep the full GDC
          values of the two tangents until the last line.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A drone hovers 80 m above the sea. From the drone, the angle of
            depression of a boat is 18°. Calculate the horizontal distance
            from the drone to the boat.
          </p>
        }
        answer={
          <>
            <p><InlineMath math="\tan 18° = \dfrac{80}{d}" />, so <InlineMath math="d = \dfrac{80}{\tan 18°} = 246\text{ m}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            Two hikers leave a hut H. Hiker 1 walks 5 km on a bearing of 040°
            to P. Hiker 2 walks 8 km on a bearing of 115° to R. (a) Show that
            angle PHR is 75°. (b) Calculate the distance PR. (c) Find the
            bearing of R from P.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="115° - 40° = 75°" /> between the two bearings, both measured from north at H.</p>
            <p>(b) <InlineMath math="PR^2 = 5^2 + 8^2 - 2(5)(8)\cos 75° = 68.29" />, so <InlineMath math="PR = 8.26\text{ km}" />.</p>
            <p>(c) Use the cosine rule for angle HPR: <InlineMath math="\cos P = \dfrac{5^2 + 8.264^2 - 8^2}{2(5)(8.264)} = 0.3545" />, so <InlineMath math="\angle HPR = 69.2°" />. The bearing of H from P is <InlineMath math="040° + 180° = 220°" />, so the bearing of R from P is <InlineMath math="220° - 69.2° = 151°" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A lighthouse is seen from A at an elevation of 25°. From B, 30 m
            closer to the lighthouse on the same level line, the elevation is
            40°. Calculate the height of the lighthouse.
          </p>
        }
        answer={
          <>
            <p>Distances to the base: from A <InlineMath math="\dfrac{h}{\tan 25°}" />, from B <InlineMath math="\dfrac{h}{\tan 40°}" />.</p>
            <p><InlineMath math="\dfrac{h}{\tan 25°} - \dfrac{h}{\tan 40°} = 30" />, so <InlineMath math="h(2.1445 - 1.1918) = 30" />.</p>
            <p><InlineMath math="h = 31.5\text{ m}" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
