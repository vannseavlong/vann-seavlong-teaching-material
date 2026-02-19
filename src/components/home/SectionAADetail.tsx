import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import TopicGrid from "@/components/ui/TopicGrid";
import HighlightBox from "@/components/ui/HighlightBox";

const aaTopics = [
  "Number & Algebra",
  "Functions (in depth)",
  "Trigonometry (extensive)",
  "Calculus (major focus)",
  "Statistics & Probability",
  "Proof & Reasoning",
];

export default function SectionAADetail() {
  return (
    <Section
      id="aa-detail"
      label="Section 3"
      title="AA: Analysis & Approaches — In Detail"
      intro="AA is for students who love the elegance of mathematics itself. You'll spend a lot of time with algebra, calculus, and constructing proofs."
    >
      <h3 className="text-lg font-semibold text-navy-900 mb-4">
        What You&apos;ll Study
      </h3>
      <TopicGrid topics={aaTopics} />

      <CardGrid cols={2} className="mt-6">
        <Card variant="aa">
          <CardTitle>Who Is AA For?</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>Students aiming for <strong>Engineering, Physics, Pure Mathematics, or Computer Science</strong></li>
            <li>Students who are comfortable with abstract thinking</li>
            <li>Those who prefer working with formulas and derivations over technology</li>
            <li>Students who find satisfaction in proving things rigorously</li>
          </ul>
        </Card>
        <Card variant="aa">
          <CardTitle>What Makes AA Unique?</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li><strong>Calculus</strong> is the core — differential, integral, and at HL, further advanced topics</li>
            <li>Less emphasis on technology (GDC used, but not central)</li>
            <li>More emphasis on <strong>hand calculations and algebraic manipulation</strong></li>
            <li>Exam questions often require multi-step logical reasoning</li>
          </ul>
        </Card>
      </CardGrid>

      <HighlightBox variant="blue">
        <strong className="text-navy-900">AA at a glance:</strong> Think of AA
        as the &quot;traditional&quot; math path. If you liked algebra and geometry in
        middle school and want to go deeper, this is your route.
      </HighlightBox>
    </Section>
  );
}
