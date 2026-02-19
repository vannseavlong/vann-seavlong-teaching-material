import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import TopicGrid from "@/components/ui/TopicGrid";
import HighlightBox from "@/components/ui/HighlightBox";

const aiTopics = [
  "Number & Algebra",
  "Functions & Modelling",
  "Statistics (major focus)",
  "Probability & Distributions",
  "Calculus (introductory)",
  "Voronoi Diagrams & Networks",
];

export default function SectionAIDetail() {
  return (
    <Section
      id="ai-detail"
      label="Section 4"
      title="AI: Applications & Interpretation — In Detail"
      intro="AI is for students who want to use math as a tool to solve real-world problems. You'll focus on modelling, data analysis, and using technology effectively."
      alt
    >
      <h3 className="text-lg font-semibold text-navy-900 mb-4">
        What You&apos;ll Study
      </h3>
      <TopicGrid topics={aiTopics} />

      <CardGrid cols={2} className="mt-6">
        <Card variant="ai">
          <CardTitle>Who Is AI For?</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>Students aiming for <strong>Business, Economics, Psychology, Medicine, or Social Sciences</strong></li>
            <li>Students who prefer practical, applied problems</li>
            <li>Those who like using calculators and software to analyse data</li>
            <li>Students interested in <strong>statistics, surveys, and data-driven decisions</strong></li>
          </ul>
        </Card>
        <Card variant="ai">
          <CardTitle>What Makes AI Unique?</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li><strong>Statistics &amp; modelling</strong> are the core — chi-squared tests, regression, normal distribution</li>
            <li>Heavy use of <strong>technology (GDC is central)</strong> throughout the course</li>
            <li>Less emphasis on hand calculations, more on interpreting results</li>
            <li>Includes unique topics like <strong>Voronoi diagrams</strong> and graph theory</li>
          </ul>
        </Card>
      </CardGrid>

      <HighlightBox variant="green">
        <strong className="text-navy-900">AI at a glance:</strong> Think of AI
        as the &quot;applied&quot; math path. If you want math to be a practical tool
        for understanding the world and making decisions, this is for you.
      </HighlightBox>
    </Section>
  );
}
