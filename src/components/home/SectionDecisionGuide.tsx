import Section from "@/components/ui/Section";
import Card, { CardTitle, CardGrid } from "@/components/ui/Card";

function FlowQuestion({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-aa-bg border-2 border-[#90cdf4] rounded-xl px-8 py-5 max-w-[500px] w-full text-center">
      <p className="font-semibold text-aa-primary">{children}</p>
    </div>
  );
}

function FlowBranch({
  left,
  right,
  leftClass,
  rightClass,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  leftClass: string;
  rightClass: string;
}) {
  return (
    <div className="flex gap-6 w-full max-w-[520px] justify-center flex-col sm:flex-row">
      <div className={`flex-1 p-4 rounded-xl text-center font-semibold text-sm border-2 ${leftClass}`}>
        {left}
      </div>
      <div className={`flex-1 p-4 rounded-xl text-center font-semibold text-sm border-2 ${rightClass}`}>
        {right}
      </div>
    </div>
  );
}

export default function SectionDecisionGuide() {
  return (
    <Section
      id="decision-guide"
      label="Section 8"
      title="Quick Decision Guide"
      intro="Ask yourself these questions to find your best fit."
      alt
    >
      <div className="flex flex-col items-center gap-2 my-8">
        <FlowQuestion>
          Do you enjoy algebra, proofs, and abstract problem-solving?
        </FlowQuestion>
        <FlowBranch
          left={<>Yes &rarr; Lean toward <strong>AA</strong></>}
          right={<>Not really &rarr; Continue below</>}
          leftClass="bg-ai-light text-ai-text border-[#68d391]"
          rightClass="bg-warn-light text-warn-text border-[#ecc94b]"
        />

        <span className="text-2xl text-gray-400">&#9660;</span>

        <FlowQuestion>
          Do you prefer using data, technology, and solving real-world problems?
        </FlowQuestion>
        <FlowBranch
          left={<>Yes &rarr; Lean toward <strong>AI</strong></>}
          right={<>Not sure &rarr; Continue below</>}
          leftClass="bg-ai-light text-ai-text border-[#68d391]"
          rightClass="bg-warn-light text-warn-text border-[#ecc94b]"
        />

        <span className="text-2xl text-gray-400">&#9660;</span>

        <FlowQuestion>
          Does your target university or career require heavy calculus?
        </FlowQuestion>
        <FlowBranch
          left={<>Yes &rarr; Choose <strong>AA</strong></>}
          right={<>No &rarr; Choose <strong>AI</strong></>}
          leftClass="bg-aa-light text-aa-text border-[#63b3ed]"
          rightClass="bg-ai-light text-ai-text border-[#68d391]"
        />
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mt-8 mb-4">
        Still unsure? Here&apos;s a simple checklist.
      </h3>
      <CardGrid cols={2}>
        <Card variant="aa">
          <CardTitle>Choose AA if you can say YES to most of these:</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>I enjoy working through multi-step algebra problems</li>
            <li>I like the feeling of proving something is true</li>
            <li>I&apos;m comfortable with abstract concepts</li>
            <li>I want to study Engineering, Physics, or Math at university</li>
            <li>I don&apos;t mind doing calculations by hand</li>
          </ul>
        </Card>
        <Card variant="ai">
          <CardTitle>Choose AI if you can say YES to most of these:</CardTitle>
          <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
            <li>I like understanding data and what it tells us</li>
            <li>I prefer math that connects to the real world</li>
            <li>I&apos;m good with technology and enjoy using it</li>
            <li>I want to study Business, Social Sciences, or Health</li>
            <li>I prefer interpreting results over deriving formulas</li>
          </ul>
        </Card>
      </CardGrid>
    </Section>
  );
}
