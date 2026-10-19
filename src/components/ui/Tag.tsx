import { ReactNode } from "react";

type TagVariant = "blue" | "green" | "yellow" | "red";

const styles: Record<TagVariant, string> = {
  blue: "border-aa-primary text-aa-primary",
  green: "border-slate-300 text-slate-500",
  yellow: "border-slate-300 text-slate-500",
  red: "border-slate-500 text-navy-900",
};

export default function Tag({
  variant = "blue",
  children,
}: {
  variant?: TagVariant;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium m-0.5 border bg-white a4:bg-white a4:border-black a4:text-black ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
