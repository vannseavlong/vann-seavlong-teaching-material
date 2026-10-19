import { ReactNode } from "react";

type HighlightVariant = "blue" | "green" | "yellow" | "red";

const styles: Record<HighlightVariant, string> = {
  blue: "border-l-4 border-l-aa-primary",
  green: "border-l-4 border-l-slate-500",
  yellow: "border-l-4 border-l-slate-400",
  red: "border-l-4 border-l-danger-primary",
};

export default function HighlightBox({
  variant = "blue",
  children,
}: {
  variant?: HighlightVariant;
  children: ReactNode;
}) {
  return (
    <div
      className={`border border-slate-200 bg-slate-50 px-5 py-4 rounded-lg my-6 a4:bg-white a4:border-black a4:border-l-black a4:shadow-none ${styles[variant]}`}
    >
      {children}
    </div>
  );
}
