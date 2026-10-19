import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
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
  PaperHero,
  PaperSheet,
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
      p.l === "•" ? "—" : `(${p.l})${p.sub ? `(${p.sub})` : ""}`,
      p.final,
    ]),
  );

  return (
    <AnswerRevealProvider>
      <main className="min-h-screen pt-16">
        <PaperHero
          topic={paper.topic}
          course="AI SL — Unit 1 Number &amp; Algebra"
          title={paper.title}
          subtitle={`${paper.subtitle} — Exercise & Answer Sheet`}
          stats={`${paper.questions.length} Questions · ${total} Marks · ~${paper.minutes} min`}
          note="GDC allowed. Attempt each part, then tap Show Answer to check against the worked solution."
          meta={`${total} marks · ${paper.questions.length} questions`}
          extra={
            <Link href={`/ai/unit-1/lesson#${paper.lessonAnchor}`} className="a4-hide print:hidden text-sm text-sky-300 hover:underline">
              Revise the lesson →
            </Link>
          }
        />

        <StickyPaperNav />

        <PaperSheet
          title={`${paper.title} — ${paper.subtitle}`}
          course="IB Mathematics: Applications and Interpretation"
          level="Standard Level — Summative Revision"
          duration={`${paper.minutes} minutes`}
          marks={total}
          instructions={["Answer all questions.", "Show all working; a GDC may be used.", "Give non-exact answers correct to 3 significant figures unless told otherwise."]}
        >
          <section id="exercise" className="scroll-mt-28">
            <PartHeader
              variant="exercise"
              label="Exercise Paper"
              note="Attempt every part, then tap Show Answer to reveal the worked solution"
            />

            {paper.questions.map((q, qi) => (
              <Fragment key={q.n}>
                {q.section && q.section !== paper.questions[qi - 1]?.section && (
                  <div className="mt-10 mb-2 border-b border-slate-300 pb-2">
                    <h2 className="text-xl font-bold text-navy-900">Section {q.section}</h2>
                    <p className="text-sm text-slate-600">
                      {q.section === "A"
                        ? "Answer all questions. Answers must be written within the answer boxes provided."
                        : "Answer all questions in the answer booklet provided. Please start each question on a new page."}
                    </p>
                  </div>
                )}
                <QuestionBanner n={q.n} marks={questionMarks(q)} />
                {q.instruction && (
                  <p className="text-sm font-bold text-navy-900 mb-3">
                    <RichText text={q.instruction} />
                  </p>
                )}
                {q.ctx?.map((c, i) => (
                  <ContextText key={i}>
                    <RichText text={c} />
                  </ContextText>
                ))}

                {q.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="text-sm border-collapse border border-slate-400">
                      <thead>
                        <tr>
                          {q.table.head.map((h, i) => (
                            <th key={i} className="border border-slate-400 px-4 py-2 text-left font-bold">
                              <RichText text={h} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {q.table.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((c, ci) => (
                              <td key={ci} className="border border-slate-400 px-4 py-2">
                                <RichText text={c} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {q.parts.map((p) => {
                  const id = `ans-q${q.n}${p.l === "•" ? "" : p.l}${p.sub ?? ""}`;
                  return (
                    <Fragment key={id}>
                      {p.ctx && (
                        <ContextText>
                          <RichText text={p.ctx} />
                        </ContextText>
                      )}
                      <PartBlock letter={p.l} sub={p.sub} marks={p.marks}>
                        <RichText text={p.q} />
                      </PartBlock>
                      <WorkSpace lines={p.lines ?? 3} answerId={id} />
                      <AnswerPart id={id} letter={p.l} sub={p.sub} marks={p.marks} restate={p.restate}>
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
        </PaperSheet>
      </main>
    </AnswerRevealProvider>
  );
}
