import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";

// ─── Topic 2. Measures of centre and spread (booklet 4.2, 4.3) ────────────────

/** Box plot for 4, 7, 8, 9, 11, 12, 13, 15, 40: min 4, Q1 7.5, median 11, Q3 14, upper whisker 15, outlier 40. 1 unit = 6 px. */
function BoxPlotDiagram() {
  const X = (v: number) => 20 + 6 * v;
  return (
    <Diagram caption="Box plot: the box runs from Q1 to Q3 (its width is the IQR). 40 lies above Q3 + 1.5 × IQR = 23.75, so it is drawn as an outlier.">
      <svg viewBox="0 0 280 80" width="100%" style={{ maxWidth: 440 }} role="img" aria-label="Box plot with one outlier">
        <line x1={X(4)} y1={40} x2={X(7.5)} y2={40} stroke="#0f172a" strokeWidth={1.5} />
        <line x1={X(14)} y1={40} x2={X(15)} y2={40} stroke="#0f172a" strokeWidth={1.5} />
        <line x1={X(4)} y1={30} x2={X(4)} y2={50} stroke="#0f172a" strokeWidth={1.5} />
        <line x1={X(15)} y1={30} x2={X(15)} y2={50} stroke="#0f172a" strokeWidth={1.5} />
        <rect x={X(7.5)} y={25} width={X(14) - X(7.5)} height={30} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2} />
        <line x1={X(11)} y1={25} x2={X(11)} y2={55} stroke="#2563eb" strokeWidth={2.5} />
        <text x={X(40)} y={44} fontSize={16} textAnchor="middle" fill="#dc2626">×</text>
        {[[4, "4"], [7.5, "Q1"], [11, "med"], [14, "Q3"], [40, "40"]].map(([v, t]) => (
          <text key={String(t)} x={X(Number(v))} y={72} fontSize={10} textAnchor="middle" fill="#64748b">{t}</text>
        ))}
      </svg>
    </Diagram>
  );
}

export default function MeasuresSection() {
  return (
    <LessonSection
      id="measures"
      label="Topic 2"
      title="Measures of Centre and Spread"
      tag={<SLTag />}
      alt
      intro="Summarise a data set with a centre (mean, median, mode) and a spread (range, IQR). Use the frequency table form of the mean from the booklet."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The mean uses every value, so an outlier pulls it. The median and the
          IQR do not move much, so use them for skewed data. A value is an{" "}
          <strong>outlier</strong> if it is below{" "}
          <InlineMath math="Q_1 - 1.5\times\text{IQR}" /> or above{" "}
          <InlineMath math="Q_3 + 1.5\times\text{IQR}" /> (rule from the guide, not printed in the booklet).
        </p>
      </HighlightBox>

      <FormulaBox title="Mean and interquartile range (booklet 4.2, 4.3)">
        <FormulaRow label="Mean of a set of data" math="\bar{x} = \dfrac{\sum_{i=1}^{k} f_i x_i}{n}, \quad n = \sum_{i=1}^{k} f_i" />
        <FormulaRow label="Interquartile range" math="\text{IQR} = Q_3 - Q_1" />
        <FormulaRow label="Range" math="\text{max} - \text{min}" />
        <FormulaRow label="Outlier fences" math="Q_1 - 1.5\,\text{IQR},\; Q_3 + 1.5\,\text{IQR}" />
      </FormulaBox>

      <BoxPlotDiagram />

      <WorkedExample title="The number of goals in 30 matches: 1 goal (3 matches), 2 goals (7), 3 goals (10), 4 goals (6), 5 goals (4). Find the mean, median and IQR.">
        <StepBox n={1}>
          <InlineMath math="n = 3 + 7 + 10 + 6 + 4 = 30" /> and{" "}
          <InlineMath math="\sum f x = 3 + 14 + 30 + 24 + 20 = 91" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="\bar{x} = \dfrac{91}{30} = \boxed{3.03}" />
        </StepBox>
        <StepBox n={3}>
          Cumulative frequencies 3, 10, 20, 26, 30. The 15th and 16th values are both 3, so the median is{" "}
          <InlineMath math="\boxed{3}" />.
        </StepBox>
        <StepBox n={4}>
          The 8th value is 2 and the 23rd is 4, so <InlineMath math="Q_1 = 2" />, <InlineMath math="Q_3 = 4" />,{" "}
          <InlineMath math="\text{IQR} = \boxed{2}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the IQR of 4, 7, 8, 9, 11, 12, 13, 15, 40 and test whether 40 is an outlier.">
        <StepBox n={1}>
          Median 11. Lower half 4, 7, 8, 9 gives <InlineMath math="Q_1 = 7.5" />. Upper half 12, 13, 15, 40 gives{" "}
          <InlineMath math="Q_3 = 14" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="\text{IQR} = 14 - 7.5 = \boxed{6.5}" />
        </StepBox>
        <StepBox n={3}>
          Upper fence <InlineMath math="14 + 1.5(6.5) = 23.75" />. Since <InlineMath math="40 > 23.75" />, 40 is an outlier.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Test scores: 10 (4 students), 20 (6), 30 (5), 40 (5). Find the
            number of students and the mean score.
          </p>
        }
        answer={
          <p>
            <InlineMath math="n = 4 + 6 + 5 + 5 = 20" />,{" "}
            <InlineMath math="\sum fx = 40 + 120 + 150 + 200 = 510" />,{" "}
            <InlineMath math="\bar{x} = \dfrac{510}{20} = 25.5" />.
          </p>
        }
      />

      <Practice
        problem={
          <p>
            For the data 2, 3, 5, 6, 8, 9, 12, find <InlineMath math="Q_1" />,{" "}
            <InlineMath math="Q_3" /> and the IQR, and state whether there are
            outliers.
          </p>
        }
        answer={
          <p>
            Median 6. <InlineMath math="Q_1 = 3" />, <InlineMath math="Q_3 = 9" />, IQR = 6. Fences:{" "}
            <InlineMath math="3 - 9 = -6" /> and <InlineMath math="9 + 9 = 18" />. All values lie inside, so no outliers.
          </p>
        }
      />

      <CalcSteps
        steps={[
          <>Enter data in L1 and frequencies in L2 with <Keys s="STAT" /> then <Keys s="1:Edit" />.</>,
          <>Press <Keys s="STAT" />, <Keys s="CALC" />, <Keys s="1:1-Var Stats" />, then L1, L2.</>,
          <>Read <InlineMath math="\bar{x}" />, n, Q1, Med, Q3 from the screen (scroll down).</>,
        ]}
      />
    </LessonSection>
  );
}
