import { ReactNode } from "react";

type TagVariant = "blue" | "green" | "yellow" | "red";

const styles: Record<TagVariant, string> = {
  blue: "bg-aa-light text-aa-text",
  green: "bg-ai-light text-ai-text",
  yellow: "bg-warn-light text-warn-text",
  red: "bg-danger-light text-danger-text",
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
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold m-0.5 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
