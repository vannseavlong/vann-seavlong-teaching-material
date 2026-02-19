import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Card, { CardTitle } from "@/components/ui/Card";
import HighlightBox from "@/components/ui/HighlightBox";
import Tag from "@/components/ui/Tag";
import type { CurriculumData, MockSet } from "@/lib/curriculum-data";

// ---------------------------------------------------------------------------
// Unit card — shows SL/HL topics + Lesson and Practice Problems resources
// ---------------------------------------------------------------------------

function UnitCard({
  unit,
  pathway,
}: {
  unit: CurriculumData["units"][number];
  pathway: "aa" | "ai";
}) {
  const variant = pathway === "aa" ? "aa" : "ai";
  const tagVariant = pathway === "aa" ? "blue" : "green";
  const bulletColor =
    pathway === "aa" ? "text-aa-primary" : "text-ai-primary";

  return (
    <Card variant={variant}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <CardTitle>
          Unit {unit.unit}: {unit.title}
        </CardTitle>
        <div className="flex gap-1 shrink-0">
          <Tag variant={tagVariant}>SL {unit.slHours}h</Tag>
          <Tag variant={tagVariant}>HL {unit.hlHours}h</Tag>
        </div>
      </div>
      <p className="text-sm text-slate-500 mb-4">{unit.description}</p>

      {/* SL Topics / HL Extensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            SL Topics
          </h4>
          <ul className="space-y-1">
            {unit.slTopics.map((topic, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-xs text-slate-600"
              >
                <span className={`mt-0.5 shrink-0 ${bulletColor}`}>•</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
        {unit.hlTopics.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              HL Extensions
            </h4>
            <ul className="space-y-1">
              {unit.hlTopics.map((topic, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1.5 text-xs text-slate-600"
                >
                  <span className="mt-0.5 text-orange-400 shrink-0">+</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Resources: Lesson + Practice Problems */}
      <div className="border-t border-slate-200 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Resources
        </h4>
        <div className="space-y-2">
          {unit.contents.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg"
            >
              <div>
                <span className="text-sm text-navy-900 font-medium">
                  {item.title}
                </span>
                {item.title === "Lesson" && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    Lecture notes with worked examples
                  </p>
                )}
                {item.title === "Practice Problems" && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    Full topic coverage · answers included
                  </p>
                )}
              </div>
              {item.status === "available" && item.href ? (
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-aa-primary hover:underline shrink-0"
                >
                  Open →
                </Link>
              ) : (
                <span className="text-xs text-slate-400 italic shrink-0">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Mock set card — shows the 3 papers inside one exam set
// ---------------------------------------------------------------------------

function MockSetCard({
  set,
  pathway,
}: {
  set: MockSet;
  pathway: "aa" | "ai";
}) {
  const tagVariant = pathway === "aa" ? "blue" : "green";

  return (
    <Card variant={pathway === "aa" ? "aa" : "ai"}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <CardTitle>{set.title}</CardTitle>
        <Tag variant={tagVariant}>{set.papers.length} Papers</Tag>
      </div>
      {set.description && (
        <p className="text-sm text-slate-500 mb-4">{set.description}</p>
      )}

      <div className="space-y-2 mt-3">
        {set.papers.map((paper) => (
          <div
            key={paper.paper}
            className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg"
          >
            <div>
              <span className="text-sm text-navy-900 font-medium">
                {paper.title}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                {paper.durationMinutes} min · {paper.marks} marks
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              {paper.status === "available" && paper.href ? (
                <>
                  <Link
                    href={paper.href}
                    className="text-xs font-semibold text-aa-primary hover:underline"
                  >
                    Paper →
                  </Link>
                  {paper.answerHref && (
                    <Link
                      href={paper.answerHref}
                      className="text-xs font-semibold text-slate-500 hover:underline"
                    >
                      Answers →
                    </Link>
                  )}
                </>
              ) : (
                <span className="text-xs text-slate-400 italic">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Main curriculum page
// ---------------------------------------------------------------------------

export default function CurriculumPage({ data }: { data: CurriculumData }) {
  const isAA = data.pathway === "aa";
  const totalSL = data.units.reduce((sum, u) => sum + u.slHours, 0);
  const totalHL = data.units.reduce((sum, u) => sum + u.hlHours, 0);

  return (
    <>
      <Hero
        title={data.fullName}
        subtitle={data.tagline}
        badge={`${data.shortName} Curriculum — SL: ${totalSL}h | HL: ${totalHL}h`}
      >
        <Link
          href="/"
          className="inline-block mt-2 text-sm text-white/80 hover:text-white underline underline-offset-4"
        >
          ← Back to AA vs AI Guide
        </Link>
      </Hero>

      {/* Overview */}
      <Section
        id="overview"
        label="Overview"
        title={`About ${data.shortName}`}
        intro={data.description}
      >
        <HighlightBox variant={isAA ? "blue" : "green"}>
          <strong className="text-navy-900">Course structure:</strong> The{" "}
          {data.shortName} curriculum is divided into {data.units.length} core
          units. At <strong>Standard Level (SL)</strong>, you cover the
          essential topics ({totalSL} hours). At{" "}
          <strong>Higher Level (HL)</strong>, you go deeper with additional
          content ({totalHL} hours). Each unit provides a Lesson and Practice
          Problems. Full-course mock exams are available in the section below.
        </HighlightBox>
      </Section>

      {/* Curriculum Units */}
      <Section
        id="units"
        label="Curriculum Units"
        title={`${data.shortName} — All Units`}
        intro="Each unit contains a Lesson (lecture notes with worked examples) and Practice Problems (full topic coverage with answers)."
        alt
      >
        <div className="grid gap-6 grid-cols-1">
          {data.units.map((unit) => (
            <UnitCard key={unit.unit} unit={unit} pathway={data.pathway} />
          ))}
        </div>
      </Section>

      {/* Mock Tests & Exam Preparation */}
      <Section
        id="mock-tests"
        label="Mock Tests & Exam Prep"
        title={`${data.shortName} — Mock Exams`}
        intro="Full-course mock exam sets covering all units. Each set mirrors the real IB exam with 3 papers. Work through a set, then check the mark scheme."
      >
        {data.mockSets.length === 0 ? (
          <HighlightBox variant="yellow">
            <strong className="text-navy-900">Coming Soon:</strong> Mock exam
            sets are being prepared for this course. Check back later!
          </HighlightBox>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {data.mockSets.map((set) => (
              <MockSetCard key={set.id} set={set} pathway={data.pathway} />
            ))}
          </div>
        )}
      </Section>

      {/* Exam Structure */}
      <Section
        id="exam-info"
        label="Assessment"
        title={`${data.shortName} Exam Structure`}
        alt
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card variant={isAA ? "aa" : "ai"}>
            <CardTitle>
              Paper 1 {isAA ? "(No Calculator)" : "(Technology)"}
            </CardTitle>
            <p className="text-sm text-slate-500">
              {isAA
                ? "Tests algebraic skills without a calculator. Short and extended response questions covering all units."
                : "Technology-allowed paper. Short and extended response questions covering all units with GDC."}
            </p>
            <div className="mt-3">
              <Tag variant={isAA ? "blue" : "green"}>SL: 1.5h | 80 marks</Tag>
              <Tag variant={isAA ? "blue" : "green"}>HL: 2h | 110 marks</Tag>
            </div>
          </Card>
          <Card variant={isAA ? "aa" : "ai"}>
            <CardTitle>
              Paper 2 {isAA ? "(Calculator)" : "(Technology)"}
            </CardTitle>
            <p className="text-sm text-slate-500">
              {isAA
                ? "Calculator-allowed paper. Extended response questions requiring deeper problem-solving and modelling."
                : "Technology-allowed paper. Extended response questions focused on modelling and applied problems."}
            </p>
            <div className="mt-3">
              <Tag variant={isAA ? "blue" : "green"}>SL: 1.5h | 80 marks</Tag>
              <Tag variant={isAA ? "blue" : "green"}>HL: 2h | 110 marks</Tag>
            </div>
          </Card>
          <Card variant={isAA ? "aa" : "ai"}>
            <CardTitle>Paper 3 (HL Only)</CardTitle>
            <p className="text-sm text-slate-500">
              {isAA
                ? "Problem-solving paper requiring extended investigation of unfamiliar mathematical scenarios."
                : "Extended modelling paper requiring investigation of real-world scenarios using mathematical tools."}
            </p>
            <div className="mt-3">
              <Tag variant={isAA ? "blue" : "green"}>HL: 1h | 55 marks</Tag>
            </div>
          </Card>
        </div>

        <HighlightBox variant="yellow">
          <strong className="text-navy-900">Internal Assessment (IA):</strong>{" "}
          Worth <strong>20%</strong> of your final grade. A mathematical
          exploration on a topic of your choice. This is the same for both SL
          and HL.
        </HighlightBox>
      </Section>
    </>
  );
}