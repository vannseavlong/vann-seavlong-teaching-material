import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import HighlightBox from "@/components/ui/HighlightBox";

export default function SectionWhatIsIBMath() {
  return (
    <Section
      id="what-is-ib-math"
      label="Section 1"
      title="What Is IB Mathematics?"
      intro="IB Mathematics is a two-year continuous curriculum that spans Grade 11 and Grade 12. Unlike some national systems, the IB does not split math by school year — it's one unified course."
    >
      <CardGrid>
        <Card variant="info">
          <CardTitle>Two Years, One Course</CardTitle>
          <p className="text-sm text-slate-500">
            You start in Grade 11 and continue the same course through Grade 12.
            Topics build on each other across both years, so the content is
            designed as a continuous journey — not two separate classes.
          </p>
        </Card>
        <Card variant="info">
          <CardTitle>Choose One Pathway</CardTitle>
          <p className="text-sm text-slate-500">
            At the start of Grade 11, you pick <strong>one</strong> of the two
            math pathways (AA or AI). You stay in that pathway for the full two
            years. This is a commitment — so it&apos;s worth choosing carefully!
          </p>
        </Card>
        <Card variant="info">
          <CardTitle>Final Exam Covers Both Years</CardTitle>
          <p className="text-sm text-slate-500">
            Your IB final examination at the end of Grade 12 covers{" "}
            <strong>everything from both years</strong>. There is no separate
            Grade 11 exam. That&apos;s why building strong foundations early
            matters so much.
          </p>
        </Card>
      </CardGrid>

      <HighlightBox variant="yellow">
        <strong className="text-navy-900">Key takeaway:</strong> IB Math is a
        marathon, not a sprint. The choice you make now shapes your next two
        years of mathematical learning — and your university preparation.
      </HighlightBox>
    </Section>
  );
}
