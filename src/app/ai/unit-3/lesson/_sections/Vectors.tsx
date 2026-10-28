import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, HLTag, LessonSection } from "./helpers";

// ─── HL Topic 2. Vectors in 3D ────────────────────────────────────────────────

export default function VectorsSection() {
  return (
    <LessonSection
      id="vectors"
      label="HL Topic 2"
      title="Vectors in 3D"
      tag={<HLTag />}
      alt
      intro="A vector has size and direction. Use components to find lengths, the angle between two directions, and the equation of a line in space for paths and motion."
    >
      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-1">HL only</p>
        <p className="text-slate-500 text-sm">
          The curriculum data names this area &quot;3D geometry and spatial
          reasoning&quot;. The vector content below follows public syllabus
          summaries, not the IB guide itself. Check it against your copy of the
          guide.
        </p>
      </HighlightBox>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Two vectors are <strong>perpendicular</strong> exactly when their
          scalar product is 0. A line needs a point on it and a direction
          vector: the position changes by the same step for each unit of the
          parameter.
        </p>
      </HighlightBox>

      <FormulaBox title="Magnitude, unit vector and scalar product">
        <FormulaRow label="Magnitude" math="|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}" />
        <FormulaRow label="Unit vector" math="\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}" />
        <FormulaRow label="Scalar product" math="\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3" />
        <FormulaRow label="Angle between vectors" math="\cos\theta = \dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}" />
        <FormulaRow label="Perpendicular" math="\mathbf{a}\cdot\mathbf{b} = 0" />
        <FormulaRow label="Vector from A to B" math="\overrightarrow{AB} = \mathbf{b} - \mathbf{a}" />
      </FormulaBox>

      <FormulaBox title="Vector equation of a line">
        <FormulaRow label="Line through A, direction d" math="\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}" />
        <FormulaRow label="Moving object" math="\mathbf{r} = \mathbf{r}_0 + t\mathbf{v},\quad \text{speed} = |\mathbf{v}|" />
      </FormulaBox>

      <WorkedExample title="Find the angle between a = (2, −1, 3) and b = (1, 4, 2).">
        <StepBox n={1}>
          <InlineMath math="\mathbf{a}\cdot\mathbf{b} = 2(1) + (-1)(4) + 3(2) = 4" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="|\mathbf{a}| = \sqrt{14} = 3.742,\quad |\mathbf{b}| = \sqrt{21} = 4.583" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\cos\theta = \dfrac{4}{3.742 \times 4.583} = 0.2333 \Rightarrow \boxed{\theta = 76.5^{\circ}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A line passes through A(1, 2, 3) with direction (2, −1, 4). Write its equation and test whether (5, 0, 11) lies on it.">
        <StepBox n={1}>
          <InlineMath math="\mathbf{r} = \begin{pmatrix}1\\2\\3\end{pmatrix} + \lambda\begin{pmatrix}2\\-1\\4\end{pmatrix}" />
        </StepBox>
        <StepBox n={2}>
          From x: <InlineMath math="1 + 2\lambda = 5 \Rightarrow \lambda = 2" />. Check y: <InlineMath math="2 - 2 = 0" /> and z: <InlineMath math="3 + 8 = 11" />.
        </StepBox>
        <StepBox n={3}>
          All three agree, so (5, 0, 11) is on the line, at <InlineMath math="\lambda = 2" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Find the value of <InlineMath math="k" /> for which{" "}
            <InlineMath math="(3, k, -2)" /> is perpendicular to{" "}
            <InlineMath math="(4, 5, 6)" />.
          </p>
        }
        answer={
          <p>
            <InlineMath math="3(4) + 5k + (-2)(6) = 12 + 5k - 12 = 5k = 0" />, so{" "}
            <InlineMath math="k = 0" />.
          </p>
        }
      />

      <Practice
        problem={
          <p>
            A drone starts at <InlineMath math="(0, 0, 10)" /> metres and moves
            with velocity <InlineMath math="(3, 4, -1)" /> m/s, so{" "}
            <InlineMath math="\mathbf{r} = (0, 0, 10) + t(3, 4, -1)" />. Find its
            position after 5 seconds and its speed.
          </p>
        }
        answer={
          <>
            <p>Position: <InlineMath math="(0 + 15,\ 0 + 20,\ 10 - 5) = (15, 20, 5)" />.</p>
            <p>Speed: <InlineMath math="\sqrt{3^2 + 4^2 + (-1)^2} = \sqrt{26} = 5.10\text{ m/s}" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
