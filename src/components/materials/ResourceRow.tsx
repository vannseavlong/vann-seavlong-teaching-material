import Link from "next/link";
import { RESOURCE_KIND_LABEL, getCourse, type Resource } from "@/lib/catalog";

const DIFFICULTY_LABEL = { foundation: "Foundation", standard: "Standard", challenge: "Challenge" } as const;

/** Facts a student scans before opening: size, time, calculator, answers. */
export function resourceFacts(r: Resource): string[] {
  const facts: string[] = [];
  if (r.difficulty) facts.push(DIFFICULTY_LABEL[r.difficulty]);
  if (r.questionCount) facts.push(`${r.questionCount} question${r.questionCount === 1 ? "" : "s"}`);
  if (r.marks) facts.push(`${r.marks} marks`);
  if (r.durationMinutes) facts.push(`${r.durationMinutes} min`);
  if (r.calculator === true) facts.push("Calculator");
  if (r.calculator === false) facts.push("No calculator");
  if (r.interactive) facts.push("Interactive");
  if (r.hasAnswers && r.kind !== "lesson") facts.push("Answers included");
  return facts;
}

/**
 * One material in a list: kind label, title, one-line description, facts.
 * `showCourse` adds the course name (for lists that mix courses).
 */
export default function ResourceRow({
  r,
  showCourse = false,
  showKind = true,
}: {
  r: Resource;
  showCourse?: boolean;
  showKind?: boolean;
}) {
  const facts = resourceFacts(r);
  const course = showCourse ? getCourse(r.courseId) : undefined;
  const available = r.status === "available";
  const label = [showKind && RESOURCE_KIND_LABEL[r.kind], course?.shortTitle].filter(Boolean).join(" · ");

  const body = (
    <>
      {label && <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-0.5">{label}</p>}
      <p className={`text-[15px] font-medium leading-snug ${available ? "text-ink group-hover:text-accent" : "text-ink-faint"}`}>
        {r.title}
        {!available && <span className="ml-2 text-xs font-normal">Coming soon</span>}
      </p>
      {r.description && <p className="mt-0.5 text-sm text-ink-muted line-clamp-2">{r.description}</p>}
      {facts.length > 0 && (
        <p className="mt-1.5 text-xs text-ink-faint">
          {facts.map((f, i) => (
            <span key={f}>
              {i > 0 && <span aria-hidden className="mx-1.5">·</span>}
              {f}
            </span>
          ))}
        </p>
      )}
    </>
  );

  return (
    <li className="border-b border-line last:border-b-0">
      {available ? (
        <Link href={r.href} className="group block py-3 px-1 -mx-1 rounded-md hover:bg-surface-alt focus-visible:bg-surface-alt">
          {body}
        </Link>
      ) : (
        <div className="py-3">{body}</div>
      )}
    </li>
  );
}
