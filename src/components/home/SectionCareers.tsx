import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

export default function SectionCareers() {
  return (
    <Section
      id="careers"
      label="Section 7"
      title="Which Path Fits Your Future?"
      intro="Your IB Math choice should align with your university and career goals. Here's a practical guide."
    >
      <CardGrid cols={2}>
        <Card variant="aa">
          <CardTitle>AA is strongly recommended for:</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>Engineering (all types)</li>
            <li>Physics &amp; Astronomy</li>
            <li>Pure &amp; Applied Mathematics</li>
            <li>Computer Science (theoretical)</li>
            <li>Architecture (structural focus)</li>
            <li>Actuarial Science</li>
          </ul>
          <div className="mt-3">
            <Tag variant="blue">AA HL</Tag>
            <span className="text-xs text-slate-500 ml-1">often required for top programs</span>
          </div>
        </Card>
        <Card variant="ai">
          <CardTitle>AI is well-suited for:</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>Business &amp; Management</li>
            <li>Economics (most programs)</li>
            <li>Psychology &amp; Social Sciences</li>
            <li>Medicine &amp; Health Sciences</li>
            <li>Environmental Science</li>
            <li>Design &amp; Digital Media</li>
          </ul>
          <div className="mt-3">
            <Tag variant="green">AI HL</Tag>
            <span className="text-xs text-slate-500 ml-1">excellent for data-driven fields</span>
          </div>
        </Card>
      </CardGrid>

      <h3 className="text-lg font-semibold text-navy-900 mt-8 mb-4">
        Special Cases — Read Carefully
      </h3>
      <CardGrid>
        <Card variant="warn">
          <CardTitle>Economics at Top Universities</CardTitle>
          <p className="text-sm text-slate-500">
            Some top economics programs (e.g., LSE, UCL) prefer or require{" "}
            <strong>AA HL</strong> because of the heavy calculus used in economic
            theory. Check specific university requirements!
          </p>
        </Card>
        <Card variant="warn">
          <CardTitle>Computer Science</CardTitle>
          <p className="text-sm text-slate-500">
            Theoretical CS programs often want <strong>AA HL</strong>. More
            applied/practical CS programs may accept <strong>AI HL</strong> or{" "}
            <strong>AA SL</strong>. It depends on the university.
          </p>
        </Card>
        <Card variant="warn">
          <CardTitle>Medicine</CardTitle>
          <p className="text-sm text-slate-500">
            Most medical schools accept <strong>either pathway</strong> (many
            don&apos;t even require HL math). Focus on sciences instead. However,{" "}
            <strong>always verify</strong> with your target medical school.
          </p>
        </Card>
      </CardGrid>
    </Section>
  );
}
