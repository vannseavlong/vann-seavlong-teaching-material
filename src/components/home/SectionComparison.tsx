import Section from "@/components/ui/Section";
import ComparisonTable from "@/components/ui/ComparisonTable";

const columns = [
  { header: "Feature", className: "bg-navy-800" },
  { header: "AA (Analysis & Approaches)", className: "bg-aa-primary" },
  { header: "AI (Applications & Interpretation)", className: "bg-ai-dark" },
];

const rows = [
  ["Core Philosophy", "Mathematics for its own sake — proof, rigour, elegance", "Mathematics as a tool — modelling, interpreting, applying"],
  ["Calculus Emphasis", "<strong>Heavy</strong> — differentiation, integration, series (HL)", "<strong>Light</strong> — basic differentiation and integration"],
  ["Statistics Emphasis", "Moderate — probability, distributions", "<strong>Heavy</strong> — regression, chi-squared, hypothesis testing"],
  ["Technology Use", "Graphing calculator allowed, not central", "Graphing calculator is <strong>essential and central</strong>"],
  ["Proof & Rigour", "<strong>Significant</strong> — mathematical proof required", "Minimal — focus on interpretation over proof"],
  ["Unique Topics", "Complex numbers (HL), advanced series, proof by induction", "Voronoi diagrams, graph theory, algorithms"],
  ["Internal Assessment", "Mathematical exploration (20%)", "Mathematical exploration (20%)"],
  ["Exam Style", 'More "show your working" — algebraic methods', 'More "interpret the output" — contextual problems'],
  ["Typical Student Profile", "Enjoys puzzles, proofs, algebra", "Enjoys data, patterns, real-world context"],
];

export default function SectionComparison() {
  return (
    <Section
      id="comparison"
      label="Section 6"
      title="AA vs AI — Side-by-Side Comparison"
      intro="Here's a direct comparison to help you see the differences clearly."
      alt
    >
      <ComparisonTable columns={columns} rows={rows} />
    </Section>
  );
}
