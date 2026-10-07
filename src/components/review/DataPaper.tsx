import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "@/app/worksheets/physics-motion/PrintButton";
import ExportPdfButton from "./ExportPdfButton";
import { AnswerRevealProvider } from "./AnswerReveal";
import {
  PartHeader,
  QuestionBanner,
  ContextText,
  PartBlock,
  WorkSpace,
  AnswerStep,
  FinalAnswer,
  AnswerPart,
  Note,
  SummaryTable,
  StickyPaperNav,
  PaperFooterNav,
} from "./PaperKit";
import {
  paperMarks,
  questionMarks,
  type AiReviewPaper,
} from "@/lib/ai-review-papers";

// ─── Renders text with \( inline \) math; a whole-string \[ block \] is display math ──

function RichText({ text }: { text: string }): ReactNode {
  const block = text.match(/^\\\[([\s\S]+)\\\]$/);
  if (block) return <BlockMath math={block[1]} />;

  const pieces = text.split(/\\\(([\s\S]+?)\\\)/);
  return (
    <>
      {pieces.map((piece, i) =>
        i % 2 === 1 ? (
          <InlineMath key={i} math={piece} />
        ) : (
          <Fragment key={i}>{piece}</Fragment>
        ),
      )}
    </>
  );
}

function Step({ text }: { text: string }) {
  const isBlock = text.startsWith("\\[");
  return (
    <AnswerStep>
      {isBlock ? (
        <RichText text={text} />
      ) : (
        <p className="text-sm text-slate-600">
          <RichText text={text} />
        </p>
      )}
    </AnswerStep>
  );
}

export default function DataPaper({ paper }: { paper: AiReviewPaper }) {
  const total = paperMarks(paper);
  const summaryRows: [string, string, string][] = paper.questions.flatMap((q) =>
    q.parts.map((p): [string, string, string] => [
      String(q.n),
      p.l === "•" ? "—" : `(${p.l})`,
      p.final,
    ]),
  );

  return (
    <AnswerRevealProvider>
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <div className="bg-[#1e3a5f] text-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link href="/review" className="text-purple-300 text-xs font-bold uppercase tracking-widest hover:underline">
                ← Review
              </Link>
              <span className="text-white/30">|</span>
              <span className="text-xs bg-purple-700/80 text-white px-2.5 py-1 rounded-full font-semibold">
                {paper.topic}
              </span>
              <span className="text-xs text-white/50">AI SL — Unit 1 Number &amp; Algebra</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{paper.title}</h1>
            <p className="text-purple-300 text-xl font-medium mb-4 italic">
              {paper.subtitle} — Exercise &amp; Answer Sheet
            </p>
            <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
              <p className="text-sm font-bold text-white">
                {paper.questions.length} Questions &nbsp;|&nbsp; {total} Marks &nbsp;|&nbsp; ~{paper.minutes} min
              </p>
              <p className="text-xs text-white/70 italic mt-0.5">
                GDC allowed. Attempt each part, then tap Show Answer to check against the worked solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <PrintButton />
              <ExportPdfButton />
              <Link
                href={`/ai/unit-1/lesson#${paper.lessonAnchor}`}
                className="print:hidden text-sm text-purple-300 hover:underline"
              >
                Revise the lesson →
              </Link>
            </div>
          </div>
        </div>

        <StickyPaperNav />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <section id="exercise" className="scroll-mt-28">
            <PartHeader
              variant="exercise"
              label="Exercise Paper"
              note="Attempt every part, then tap Show Answer to reveal the worked solution"
            />

            {paper.questions.map((q) => (
              <Fragment key={q.n}>
                <QuestionBanner n={q.n} marks={questionMarks(q)} />
                {q.ctx?.map((c, i) => (
                  <ContextText key={i}>
                    <RichText text={c} />
                  </ContextText>
                ))}

                {q.parts.map((p) => {
                  const id = `ans-q${q.n}${p.l === "•" ? "" : p.l}`;
                  return (
                    <Fragment key={id}>
                      {p.ctx && (
                        <ContextText>
                          <RichText text={p.ctx} />
                        </ContextText>
                      )}
                      <PartBlock letter={p.l} marks={p.marks}>
                        <RichText text={p.q} />
                      </PartBlock>
                      <WorkSpace lines={p.lines ?? 3} answerId={id} />
                      <AnswerPart id={id} letter={p.l} marks={p.marks} restate={p.restate}>
                        {p.steps.map((s, i) => (
                          <Step key={i} text={s} />
                        ))}
                        <FinalAnswer>Answer: {p.final}</FinalAnswer>
                        {p.note && (
                          <Note>
                            <RichText text={p.note} />
                          </Note>
                        )}
                      </AnswerPart>
                    </Fragment>
                  );
                })}
              </Fragment>
            ))}
          </section>

          <SummaryTable rows={summaryRows} />
          <PaperFooterNav paperLabel={`${paper.title} — ${paper.subtitle}`} />
        </div>
      </main>
    </AnswerRevealProvider>
  );
}
