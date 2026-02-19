import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import ComparisonTable from "@/components/ui/ComparisonTable";
import HighlightBox from "@/components/ui/HighlightBox";

const columns = [
  { header: "Combination", className: "bg-navy-800" },
  { header: "Difficulty", className: "bg-navy-900" },
  { header: "Best For", className: "bg-navy-900" },
];

const rows = [
  [
    '<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#bee3f8] text-[#2a4365]">AA SL</span>',
    "Moderate",
    "Students wanting a solid analytical foundation without extreme depth",
  ],
  [
    '<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#bee3f8] text-[#2a4365]">AA HL</span>',
    "Very Challenging",
    "Engineering, Physics, Mathematics, and top-tier science programs",
  ],
  [
    '<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#c6f6d5] text-[#22543d]">AI SL</span>',
    "Accessible",
    "Students in arts, languages, or humanities who need a math credit",
  ],
  [
    '<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#c6f6d5] text-[#22543d]">AI HL</span>',
    "Challenging",
    "Business, Economics, Data Science, and quantitative social sciences",
  ],
];

export default function SectionSLvsHL() {
  return (
    <Section
      id="sl-vs-hl"
      label="Section 5"
      title="Standard Level (SL) vs Higher Level (HL)"
      intro="Within each pathway (AA or AI), you also choose between Standard Level and Higher Level. Here's what that means."
    >
      <CardGrid cols={2}>
        <Card variant="info">
          <CardTitle>Standard Level (SL)</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li><strong>150 teaching hours</strong> over two years</li>
            <li>Covers core topics at a manageable depth</li>
            <li>Suitable for students who need math but don&apos;t want it as a main focus</li>
            <li>Final exams: Paper 1 + Paper 2</li>
          </ul>
        </Card>
        <Card variant="info">
          <CardTitle>Higher Level (HL)</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li><strong>240 teaching hours</strong> over two years</li>
            <li>Covers everything in SL <strong>plus</strong> additional advanced topics</li>
            <li>Required or recommended by many competitive university programs</li>
            <li>Final exams: Paper 1 + Paper 2 + Paper 3</li>
          </ul>
        </Card>
      </CardGrid>

      <h3 className="text-lg font-semibold text-navy-900 mt-8 mb-4">
        The Four Possible Combinations
      </h3>
      <ComparisonTable columns={columns} rows={rows} />

      <HighlightBox variant="yellow">
        <strong className="text-navy-900">University tip:</strong> Many
        competitive universities specify which combination they require. For
        example, Engineering at top UK universities typically requires{" "}
        <strong>AA HL</strong>. Always check your target university&apos;s
        requirements before choosing!
      </HighlightBox>
    </Section>
  );
}
