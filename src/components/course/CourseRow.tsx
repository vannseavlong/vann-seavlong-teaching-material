import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { courseContext, listResources, type Course } from "@/lib/catalog";

/** Course in a list: context line, title, description, counts. */
export default function CourseRow({ course, showContext = true }: { course: Course; showContext?: boolean }) {
  const materials = listResources({ courseId: course.id }).filter((r) => r.status === "available").length;
  const units = course.units.length;
  const soon = course.status === "coming-soon";
  const counts = [
    units > 0 && `${units} ${(course.unitLabel ?? "Unit").toLowerCase()}${units === 1 ? "" : "s"}`,
    materials > 0 && `${materials} material${materials === 1 ? "" : "s"}`,
  ].filter(Boolean);

  return (
    <li className="border-b border-line last:border-b-0">
      <Link href={course.href} className="group flex items-center gap-4 py-4 px-1 -mx-1 rounded-md hover:bg-surface-alt">
        <div className="min-w-0 flex-1">
          {showContext && <p className="text-xs text-ink-faint mb-0.5">{courseContext(course)}</p>}
          <p className="text-base font-semibold text-ink group-hover:text-accent">{course.title}</p>
          <p className="mt-0.5 text-sm text-ink-muted line-clamp-2">{course.description}</p>
          <p className="mt-1 text-xs text-ink-faint">{soon ? "Coming soon" : counts.join(" · ")}</p>
        </div>
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="shrink-0 text-ink-faint group-hover:text-accent" />
      </Link>
    </li>
  );
}
