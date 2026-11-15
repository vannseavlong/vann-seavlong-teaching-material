// IB DP blocks shown under the generic course page: mock exam sets and the exam structure.
import Link from "next/link";
import type { CurriculumData } from "@/lib/curriculum-data";

export function ibHours(data: CurriculumData) {
  const sl = data.units.reduce((s, u) => s + u.slHours, 0);
  const hl = data.units.reduce((s, u) => s + u.hlHours, 0);
  return { sl, hl };
}

/** Line under the course description: teaching hours and guide link. */
export function IbCourseMeta({ data }: { data: CurriculumData }) {
  const { sl, hl } = ibHours(data);
  return (
    <p>
      SL {sl} hours · HL {hl} hours (HL includes SL) ·{" "}
      <Link href="/ib/aa-vs-ai" className="text-accent hover:underline">
        Choosing between AA and AI?
      </Link>
    </p>
  );
}

const PAPERS = {
  aa: [
    { name: "Paper 1", tool: "No calculator", text: "Short and extended response questions on all units, without a calculator.", sl: "1.5 h · 80 marks", hl: "2 h · 110 marks" },
    { name: "Paper 2", tool: "Calculator", text: "Extended response questions with deeper problem solving and modelling.", sl: "1.5 h · 80 marks", hl: "2 h · 110 marks" },
    { name: "Paper 3", tool: "HL only", text: "Extended investigation of unfamiliar mathematical problems.", hl: "1 h · 55 marks" },
  ],
  ai: [
    { name: "Paper 1", tool: "Technology", text: "Short and extended response questions on all units, with a GDC.", sl: "1.5 h · 80 marks", hl: "2 h · 110 marks" },
    { name: "Paper 2", tool: "Technology", text: "Extended response questions on modelling and applied problems.", sl: "1.5 h · 80 marks", hl: "2 h · 110 marks" },
    { name: "Paper 3", tool: "HL only", text: "Extended modelling of real-world scenarios with mathematical tools.", hl: "1 h · 55 marks" },
  ],
} as const;

export default function IbCourseExtras({ data }: { data: CurriculumData }) {
  return (
    <>
      <section id="mock-exams" className="py-8 border-t border-line">
        <h2 className="text-xl font-semibold text-ink mb-2">Mock exams</h2>
        {data.mockSets.length === 0 ? (
          <p className="text-sm text-ink-muted">
            Full-course mock sets (Paper 1, 2 and 3 in IB timing) are being written. Until then, use the revision papers in each unit.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {data.mockSets.map((set) => (
              <div key={set.id} className="rounded-lg border border-line p-4">
                <h3 className="font-semibold text-ink">{set.title}</h3>
                {set.description && <p className="text-sm text-ink-muted mt-1">{set.description}</p>}
                <ul className="mt-3 divide-y divide-line">
                  {set.papers.map((p) => (
                    <li key={p.paper} className="flex items-center justify-between gap-3 py-2 text-sm">
                      <span>
                        <span className="font-medium text-ink">{p.title}</span>
                        <span className="block text-xs text-ink-faint">{p.durationMinutes} min · {p.marks} marks</span>
                      </span>
                      {p.status === "available" && p.href ? (
                        <span className="flex gap-3 shrink-0">
                          <Link href={p.href} className="font-medium text-accent hover:underline">Paper</Link>
                          {p.answerHref && <Link href={p.answerHref} className="text-ink-muted hover:underline">Answers</Link>}
                        </span>
                      ) : (
                        <span className="text-xs text-ink-faint">Coming soon</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="exam-structure" className="py-8 border-t border-line">
        <h2 className="text-xl font-semibold text-ink mb-4">Exam structure</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-ink-faint border-b border-line">
                <th className="py-2 pr-4 font-semibold">Paper</th>
                <th className="py-2 pr-4 font-semibold">What it tests</th>
                <th className="py-2 pr-4 font-semibold">SL</th>
                <th className="py-2 font-semibold">HL</th>
              </tr>
            </thead>
            <tbody>
              {PAPERS[data.pathway].map((p) => (
                <tr key={p.name} className="border-b border-line align-top">
                  <td className="py-3 pr-4 whitespace-nowrap">
                    <span className="font-medium text-ink">{p.name}</span>
                    <span className="block text-xs text-ink-faint">{p.tool}</span>
                  </td>
                  <td className="py-3 pr-4 text-ink-muted">{p.text}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-ink-body">{"sl" in p ? p.sl : "Not taken"}</td>
                  <td className="py-3 whitespace-nowrap text-ink-body">{p.hl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          <strong className="text-ink">Internal Assessment (IA):</strong> a mathematical exploration on a topic you choose, 20% of the final grade at SL and HL.
        </p>
      </section>
    </>
  );
}
