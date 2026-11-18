import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { BlockMath, DisplayMathInline, InlineMath } from "@/components/ui/Math";
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
import type { ExplainBlock } from "@/lib/ai-review-papers/types";

// ─── Renders text with \( inline \) math; a whole-string \[ block \] is display math ──

function RichText({ text }: { text: string }): ReactNode {
  const block = text.match(/^\\\[([\s\S]+)\\\]$/);
  if (block) return <BlockMath math={block[1]} />;

  // Text may mix inline \( \) and display \[ \] maths; display parts render as block spans.
  const segments = text.split(/\\\[([\s\S]+?)\\\]/);
  return (
    <>
      {segments.map((seg, si) =>
        si % 2 === 1 ? (
          <DisplayMathInline key={si} math={seg} />
        ) : (
          seg.split(/\\\(([\s\S]+?)\\\)/).map((piece, i) =>
            i % 2 === 1 ? <InlineMath key={`${si}-${i}`} math={piece} /> : <Fragment key={`${si}-${i}`}>{piece}</Fragment>
          )
        )
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

// ─── Explanation blocks (key ideas + fully shown worked examples) ─────────────

function Explain({ blocks }: { blocks: ExplainBlock[] }) {
  return (
    <section id="explain" className="scroll-mt-28">
      <PartHeader variant="exercise" label="Explanation" note="Read the key ideas and worked examples first" />
      <div className="space-y-8">
        {blocks.map((b, bi) => (
          <div key={b.id} id={b.id} className="scroll-mt-28">
            <h3 className="text-lg font-bold text-navy-900 border-b-2 border-navy-900 pb-2 mb-3">
              {bi + 1}. {b.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
              {b.points.map((pt, i) => (
                <li key={i}>
                  <RichText text={pt} />
                </li>
              ))}
            </ul>
            {b.table && (
              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {b.table.head.map((h, i) => (
                        <th key={i} className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-semibold text-navy-900">
                          <RichText text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.table.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td key={ci} className="border border-slate-300 px-3 py-2 text-slate-700">
                            <RichText text={c} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {b.examples?.map((ex, ei) => (
              <div key={ei} className="mt-4 border-l-4 border-aa-primary bg-slate-50 rounded-r-lg px-4 py-3 a4:break-inside-avoid">
                <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-1">Worked example</p>
                <p className="text-sm font-medium text-navy-900 mb-2">
                  <RichText text={ex.q} />
                </p>
                <div className="space-y-1 text-sm text-slate-700">
                  {ex.steps.map((st, si) => (
                    <div key={si}>
                      <RichText text={st} />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-navy-900 mt-2">
                  Answer: <RichText text={ex.answer} />
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
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

  const f = paper.frame;
  const showLesson = !f || paper.lessonHref;
  const sectionNote = (s: "A" | "B") =>
    f?.sectionNotes?.[s] ??
    (s === "A"
      ? "Answer all questions. Answers must be written within the answer boxes provided."
      : "Answer all questions in the answer booklet provided. Please start each question on a new page.");

  return (
    <AnswerRevealProvider>
      <main className="min-h-screen pt-14">
        <PaperHero
          topic={paper.topic}
          backHref={f?.backHref}
          backLabel={f ? "← Course" : undefined}
          course={f?.heroCourse ?? "AI SL — Unit 1 Number & Algebra"}
          title={paper.title}
          subtitle={`${paper.subtitle} — Exercise & Answer Sheet`}
          stats={`${paper.questions.length} Questions · ${total} Marks · ~${paper.minutes} min`}
          note={f?.note ?? "GDC allowed. Attempt each part, then tap Show Answer to check against the worked solution."}
          meta={`${total} marks · ${paper.questions.length} questions`}
          extra={
            showLesson && (
            <Link href={`${paper.lessonHref ?? "/ai/unit-1/lesson"}#${paper.lessonAnchor}`} className="a4-hide print:hidden text-sm text-sky-300 hover:underline">
              Revise the lesson →
            </Link>
            )
          }
        />

        <StickyPaperNav hasExplain={!!paper.explain?.length} />

        <PaperSheet
          title={`${paper.title} — ${paper.subtitle}`}
          course={f?.sheetCourse ?? "IB Mathematics: Applications and Interpretation"}
          level={f?.sheetLevel ?? "Standard Level — Summative Revision"}
          duration={`${paper.minutes} minutes`}
          marks={total}
          instructions={f?.instructions ?? ["Answer all questions.", "Show all working; a GDC may be used.", "Give non-exact answers correct to 3 significant figures unless told otherwise."]}
        >
          {paper.explain?.length ? <Explain blocks={paper.explain} /> : null}

          <section id="exercise" className="scroll-mt-28">
            <PartHeader
              variant="exercise"
              label="Exercise Paper"
              note="Attempt every part, then tap Show Answer to reveal the worked solution"
            />

            {paper.source && <p className="text-xs italic text-slate-600 mb-4">Source: {paper.source}</p>}

            {paper.questions.map((q, qi) => (
              <Fragment key={q.n}>
                {q.section && q.section !== paper.questions[qi - 1]?.section && (
                  <div className="mt-10 mb-2 border-b border-slate-300 pb-2">
                    <h2 className="text-xl font-bold text-navy-900">Section {q.section}</h2>
                    <p className="text-sm text-slate-600">{sectionNote(q.section)}</p>
                  </div>
                )}
                <QuestionBanner n={q.n} marks={questionMarks(q)} />
                {q.ref && <p className="text-xs italic text-slate-600 mb-2">IB past paper: {q.ref}</p>}
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

                {q.figure && (
                  <figure className="mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={q.figure.src}
                      alt={q.figure.alt}
                      width={q.figure.width}
                      height={q.figure.height}
                      className="max-w-full h-auto border border-slate-300 bg-white"
                    />
                  </figure>
                )}

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
          <PaperFooterNav
            paperLabel={`${paper.title} — ${paper.subtitle}`}
            backHref={f?.backHref}
            backLabel={f?.backLabel}
          />
        </PaperSheet>
      </main>
    </AnswerRevealProvider>
  );
}
