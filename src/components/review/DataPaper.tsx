import { Fragment, ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { AnswerRevealProvider } from "./AnswerReveal";
import {
  PaperTop,
  PaperHeader,
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
        <PaperTop
          title={`${paper.title}: ${paper.subtitle}`}
          description={`AI SL summative revision, ${paper.topic}.`}
        />

        <StickyPaperNav />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="a4-paper">
          <section id="exercise" className="scroll-mt-28">
            <PaperHeader
              course="Mathematics: Applications and interpretation"
              level="Standard level"
              title={`${paper.title}: ${paper.subtitle}`}
              duration={`${paper.minutes} minutes`}
              marks={total}
              instructions={[
                "Answer all questions.",
                "Show all working; answers without working may not receive full marks.",
                "A GDC is allowed.",
                "The maximum mark for each question is shown in brackets.",
              ]}
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
          </div>
          <PaperFooterNav paperLabel={`${paper.title} — ${paper.subtitle}`} />
        </div>
      </main>
    </AnswerRevealProvider>
  );
}
