import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unit 1 Tutor Plan | IB Mathematics AI",
  description: "Tutor-only session plan for the AI Unit 1 summative revision papers.",
};

const REVISION_SESSIONS = [
  {
    n: 1,
    title: "Arithmetic Sequences & Series",
    lesson: "#arithmetic",
    paper: "/review/ai-sl/arithmetic",
    note: "~45 min",
  },
  {
    n: 2,
    title: "Geometric Sequences & Series",
    lesson: "#geometric",
    paper: "/review/ai-sl/geometric",
    note: "~50 min",
  },
  {
    n: 3,
    title: "Financial Mathematics",
    lesson: "#financial-mathematics",
    paper: "/review/ai-sl/financial",
    note: "~50 min · also /practice/2",
  },
  {
    n: 4,
    title: "Rounding",
    lesson: "#rounding",
    paper: "/review/ai-sl/rounding",
    note: "~35 min",
  },
  {
    n: 5,
    title: "Upper & Lower Bounds",
    lesson: "#bounds",
    paper: "/review/ai-sl/bounds",
    note: "~45 min",
  },
  {
    n: 6,
    title: "Percentage Error",
    lesson: "#percentage-error",
    paper: "/review/ai-sl/percentage-error",
    note: "~40 min",
  },
  {
    n: 7,
    title: "Mixed Summative Mock",
    lesson: "",
    paper: "/review/ai-sl/summative-mock",
    note: "~50 min · all topics",
  },
];

function TutorPlan() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-ai-primary px-3 py-1 rounded mb-3">
          Summative Assessment Revision
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
          Seven-session revision plan
        </h2>
        <p className="text-base text-slate-500 max-w-2xl mb-8">
          Each session is one class: revise the lesson section together, then
          students attempt the matching review paper. Every paper can be
          exported from its page as a clean <strong>Question</strong> sheet or a
          full <strong>Q&amp;A</strong>{" "}answer sheet (Export PDF button). Topics
          follow the summative assessment list: arithmetic and geometric
          sequences &amp; series, financial mathematics, rounding, upper and
          lower bounds, and percentage error.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REVISION_SESSIONS.map((s) => (
            <div
              key={s.n}
              className="border border-slate-200 rounded-xl p-5 bg-slate-50 flex gap-4 items-start"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-ai-primary text-white font-bold flex items-center justify-center">
                {s.n}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-navy-900">{s.title}</p>
                <p className="text-xs text-slate-400 mb-3">{s.note}</p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href={s.lesson ? `/ai/unit-1/lesson#${s.lesson.slice(1)}` : "/ai/unit-1/lesson"} className="text-ai-primary hover:underline">
                    Lesson →
                  </Link>
                  <Link href={s.paper} className="text-ai-primary hover:underline">
                    Review paper (Q&amp;A) →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <TutorPlan />
    </main>
  );
}
