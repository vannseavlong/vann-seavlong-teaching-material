import { ReactNode } from "react";

type HighlightVariant = "blue" | "green" | "yellow" | "red";

const styles: Record<HighlightVariant, string> = {
  blue: "bg-aa-bg border-aa-light",
  green: "bg-ai-bg border-ai-light",
  yellow: "bg-warn-bg border-warn-light",
  red: "bg-danger-bg border-danger-light",
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
      className={`border px-5 py-4 rounded-lg my-6 ${styles[variant]}`}
    >
      {children}
    </div>
  );
}
