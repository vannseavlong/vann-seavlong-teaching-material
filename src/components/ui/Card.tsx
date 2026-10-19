import { ReactNode } from "react";

type CardVariant = "aa" | "ai" | "info" | "warn" | "default";

const borderColors: Record<CardVariant, string> = {
  aa: "border-slate-200 border-l-4 border-l-aa-primary",
  ai: "border-slate-200 border-l-4 border-l-slate-500",
  info: "border-slate-200",
  warn: "border-slate-200 border-l-4 border-l-slate-400",
  default: "border-slate-200",
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
      className={`bg-white border rounded-lg p-6 a4:border-black a4:border-l-black a4:shadow-none a4:bg-white ${borderColors[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-navy-900 mb-2 text-balance">{children}</h3>
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
