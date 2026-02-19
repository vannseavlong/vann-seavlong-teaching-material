import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import HighlightBox from "@/components/ui/HighlightBox";

export default function SectionTwoPathways() {
  return (
    <Section
      id="two-pathways"
      label="Section 2"
      title="The Two IB Math Pathways"
      intro="IB offers two distinct pathways. Both are rigorous, valid, and respected. They simply emphasize different mathematical skills."
      alt
    >
      <CardGrid cols={2}>
        <Card variant="aa">
          <CardTitle>Mathematics: Analysis &amp; Approaches (AA)</CardTitle>
          <p className="text-sm text-slate-500">
            Focuses on <strong>algebraic methods, proof, and abstract reasoning</strong>.
            Designed for students who enjoy working with pure mathematics and
            plan to study math-heavy fields at university.
          </p>
          <div className="mt-3">
            <Tag variant="blue">Calculus-heavy</Tag>
            <Tag variant="blue">Proof-based</Tag>
            <Tag variant="blue">Abstract thinking</Tag>
          </div>
        </Card>
        <Card variant="ai">
          <CardTitle>Mathematics: Applications &amp; Interpretation (AI)</CardTitle>
          <p className="text-sm text-slate-500">
            Focuses on <strong>real-world modelling, statistics, and technology use</strong>.
            Designed for students who want to apply math practically in fields
            like business, social sciences, and design.
          </p>
          <div className="mt-3">
            <Tag variant="green">Statistics-heavy</Tag>
            <Tag variant="green">Modelling</Tag>
            <Tag variant="green">Technology-driven</Tag>
          </div>
        </Card>
      </CardGrid>

      <HighlightBox variant="red">
        <strong className="text-navy-900">Important:</strong> You do{" "}
        <strong>NOT</strong> switch between AA and AI once you&apos;ve started. You
        study one pathway for the full two years. Choose wisely based on your
        strengths and goals.
      </HighlightBox>

      <HighlightBox variant="green">
        <strong className="text-navy-900">Good news:</strong> Both pathways are
        available at Standard Level (SL) and Higher Level (HL). You also need to
        choose your level — more on that later.
      </HighlightBox>
    </Section>
  );
}
