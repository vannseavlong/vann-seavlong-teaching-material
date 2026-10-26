import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";

// ─── Topic 3. Trigonometry ────────────────────────────────────────────────────

function LabelledTriangleDiagram() {
  return (
    <Diagram caption="Side a is opposite angle A, side b opposite B, side c opposite C. The sine rule pairs each side with its opposite angle.">
      <svg viewBox="0 0 320 190" width="100%" style={{ maxWidth: 400 }} role="img" aria-label="Triangle ABC with sides a, b, c opposite angles A, B, C">
        <polygon points="40,160 280,160 200,30" fill="none" stroke="#2563eb" strokeWidth={2} />
        <text x={28} y={176} fontSize={14} fontWeight={700} fill="#0f172a">B</text>
        <text x={282} y={176} fontSize={14} fontWeight={700} fill="#0f172a">C</text>
        <text x={196} y={22} fontSize={14} fontWeight={700} fill="#0f172a">A</text>
        <text x={160} y={178} fontSize={13} fill="#dc2626">a</text>
        <text x={254} y={92} fontSize={13} fill="#dc2626">b</text>
        <text x={104} y={90} fontSize={13} fill="#dc2626">c</text>
      </svg>
    </Diagram>
  );
}

function ChooseRuleTable() {
  const rows = [
    { given: "Right angle and two other pieces of information", use: "SOH CAH TOA or Pythagoras" },
    { given: "Two angles and one side (AAS or ASA)", use: "Sine rule" },
    { given: "Two sides and an angle not between them (SSA)", use: "Sine rule (check for two answers)" },
    { given: "Two sides and the angle between them (SAS)", use: "Cosine rule, then sine rule or cosine rule" },
    { given: "Three sides (SSS)", use: "Cosine rule for the largest angle first" },
    { given: "Two sides and the angle between them, area wanted", use: "Area = ½ ab sin C" },
  ];
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
      <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
        Which rule?
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="px-5 py-3 font-semibold">Given</th>
              <th className="px-5 py-3 font-semibold">Use</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ given, use }, i) => (
              <tr key={given} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                <td className="px-5 py-3 text-navy-900">{given}</td>
                <td className="px-5 py-3 text-slate-500">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TrigonometrySection() {
  return (
    <LessonSection
      id="trigonometry"
      label="Topic 3"
      title="Trigonometry"
      tag={<SLTag />}
      intro="Find sides, angles and areas of any triangle. In a right-angled triangle use SOH CAH TOA. In any other triangle use the sine rule or the cosine rule, chosen by what the question gives you."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Label the triangle first: side <em>a</em> is opposite angle{" "}
          <em>A</em>. Check the GDC is in <strong>DEGREE</strong> mode. When
          you know two sides and an angle that is <strong>not</strong>{" "}
          between them, the sine rule can give two valid angles, so test
          whether the obtuse angle also fits.
        </p>
      </HighlightBox>

      <FormulaBox title="Right-angled triangle">
        <FormulaRow label="Sine" math="\sin\theta = \dfrac{\text{opposite}}{\text{hypotenuse}}" />
        <FormulaRow label="Cosine" math="\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}" />
        <FormulaRow label="Tangent" math="\tan\theta = \dfrac{\text{opposite}}{\text{adjacent}}" />
        <FormulaRow label="Pythagoras" math="c^2 = a^2 + b^2" />
      </FormulaBox>

      <FormulaBox title="Any triangle">
        <FormulaRow label="Sine rule" math="\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}" />
        <FormulaRow label="Cosine rule (side)" math="c^2 = a^2 + b^2 - 2ab\cos C" />
        <FormulaRow label="Cosine rule (angle)" math="\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}" />
        <FormulaRow label="Area" math="A = \tfrac12 ab\sin C" />
        <FormulaRow label="Angle sum" math="A + B + C = 180°" />
      </FormulaBox>

      <LabelledTriangleDiagram />
      <ChooseRuleTable />

      <CalcSteps
        steps={[
          <>Press <Keys s="mode" /> and make sure DEGREE (not RADIAN) is highlighted. Press <Keys s="enter" />, then <Keys s="2nd mode" />.</>,
          <>Sides: type <Keys s="12 × sin ( 65 ) ÷ sin ( 40 ) enter" />. Close every bracket.</>,
          <>Angles: type <Keys s="2nd sin" /> for sin⁻¹, then the ratio in brackets, for example <Keys s="2nd sin ( 12 × sin ( 30 ) ÷ 8 ) enter" />.</>,
          <>Store long values with <Keys s="sto→ alpha A" /> and reuse A. Round the final answer only.</>,
        ]}
      />

      <WorkedExample title="Sine rule (side): A = 40°, B = 65°, a = 12 cm. Find b.">
        <StepBox n={1}>
          <InlineMath math="\dfrac{b}{\sin 65°} = \dfrac{12}{\sin 40°}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="b = \dfrac{12\sin 65°}{\sin 40°} = \boxed{16.9\text{ cm}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sine rule (two answers): a = 8 cm, b = 12 cm, A = 30°. Find angle B.">
        <StepBox n={1}>
          <InlineMath math="\sin B = \dfrac{12\sin 30°}{8} = 0.75" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="B = 48.6°" /> or <InlineMath math="B = 180° - 48.6° = 131.4°" />.
        </StepBox>
        <StepBox n={3}>
          Test the obtuse angle: <InlineMath math="30° + 131.4° = 161.4° < 180°" />, so both are valid.{" "}
          <InlineMath math="\boxed{B = 48.6° \text{ or } 131.4°}" />. Two different triangles fit the data.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cosine rule (side) and area: a = 7 cm, b = 9 cm, C = 52°. Find c and the area.">
        <StepBox n={1}>
          <InlineMath math="c^2 = 7^2 + 9^2 - 2(7)(9)\cos 52° = 52.43" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="c = \boxed{7.24\text{ cm}}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="A = \tfrac12 (7)(9)\sin 52° = \boxed{24.8\text{ cm}^2}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cosine rule (angle): sides 6 cm, 8 cm and 11 cm. Find the largest angle.">
        <StepBox n={1}>
          The largest angle is opposite the longest side, 11 cm. Let it be C.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="\cos C = \dfrac{6^2 + 8^2 - 11^2}{2(6)(8)} = \dfrac{-21}{96}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="C = \boxed{103°}" />. A negative cosine means an
          obtuse angle.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A triangular plot has two boundaries of 85 m and 120 m meeting at
            an angle of 48°. (a) Calculate the length of the third boundary.
            (b) Calculate the area of the plot.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="c^2 = 85^2 + 120^2 - 2(85)(120)\cos 48° = 7974.4" />, so <InlineMath math="c = 89.3\text{ m}" />.</p>
            <p>(b) <InlineMath math="A = \tfrac12 (85)(120)\sin 48° = 3790\text{ m}^2" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A surveyor measures a baseline BC = 150 m. From B the angle to a
            tree A is 62° and from C it is 48°. Calculate the distances AB and
            AC.
          </p>
        }
        answer={
          <>
            <p>Angle at A: <InlineMath math="180° - 62° - 48° = 70°" />. Side a = BC = 150 m is opposite A.</p>
            <p><InlineMath math="AC = \dfrac{150\sin 62°}{\sin 70°} = 141\text{ m}" /> (AC is opposite B = 62°).</p>
            <p><InlineMath math="AB = \dfrac{150\sin 48°}{\sin 70°} = 119\text{ m}" /> (AB is opposite C = 48°).</p>
          </>
        }
      />
    </LessonSection>
  );
}
