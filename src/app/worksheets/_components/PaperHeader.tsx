/** IB-style paper header block: course, level, title, duration, questions + instructions. */
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
  duration: string;
  questions: number;
  instructions: string[];
}) {
  return (
    <header className="mb-8">
      <div className="border-b-2 border-navy-900 pb-3 mb-4">
        <p className="text-sm text-slate-600">{course}</p>
        <p className="text-sm text-slate-600">{level}</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-1">{title}</h2>
        <p className="text-sm text-slate-600 mt-1">
          Duration: {duration} &nbsp;|&nbsp; Questions: {questions}
        </p>
      </div>
      <p className="text-sm font-bold text-navy-900 mb-1">Instructions to candidates</p>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-0.5">
        {instructions.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </header>
  );
}
