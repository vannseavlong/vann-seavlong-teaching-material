import { ReactNode } from "react";

type CardVariant = "aa" | "ai" | "info" | "warn" | "default";

const borderColors: Record<CardVariant, string> = {
  aa: "border-t-4 border-t-aa-primary",
  ai: "border-t-4 border-t-ai-primary",
  info: "border-t-4 border-t-warn-primary",
  warn: "border-t-4 border-t-danger-primary",
  default: "",
};

export default function Card({
  variant = "default",
  children,
  className = "",
}: {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${borderColors[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-navy-900 mb-3">{children}</h3>
  );
}

export function CardGrid({
  children,
  cols = 3,
  className = "",
}: {
  children: ReactNode;
  cols?: 2 | 3;
  className?: string;
}) {
  const colClass =
    cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 ${colClass} ${className}`}>
      {children}
    </div>
  );
}
