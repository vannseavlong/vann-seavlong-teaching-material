/**
 * IB-style paper header block. Visible only on the A4 sheet and in print; on
 * screen in web mode the page hero already carries the title. Inside the A4
 * sheet on screen the title line is hidden too (the hero above shows it).
 */
export default function PaperHeader({
  course,
  level,
  title,
  duration,
  questions,
  instructions,
}: {
  course: string;
  level: string;
  title: string;
  duration?: string;
  questions: number;
  instructions: string[];
}) {
  return (
    <header className="hidden a4:block print:block mb-6">
      <div className="border-b-2 border-navy-900 pb-2 mb-3">
        <p className="text-xs text-slate-600">{course}</p>
        <p className="text-xs text-slate-600">{level}</p>
        <h2 className="text-xl font-bold text-navy-900 mt-1 a4:hidden a4:print:block print:block">{title}</h2>
        <p className="text-xs text-slate-600 mt-1">
          {duration ? <>Duration: {duration} &nbsp;|&nbsp; </> : null}Questions: {questions}
        </p>
      </div>
      <p className="text-xs font-bold text-navy-900 mb-1">Instructions to candidates</p>
      <ul className="list-disc pl-5 text-xs text-slate-700 space-y-0.5">
        {instructions.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </header>
  );
}
