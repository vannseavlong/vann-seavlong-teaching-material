import { ReactNode } from "react";

type HighlightVariant = "blue" | "green" | "yellow" | "red";

const styles: Record<HighlightVariant, string> = {
  blue: "bg-aa-bg border-l-aa-primary",
  green: "bg-ai-bg border-l-ai-primary",
  yellow: "bg-warn-bg border-l-warn-primary",
  red: "bg-danger-bg border-l-danger-primary",
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
      className={`border-l-4 px-6 py-5 rounded-r-lg my-6 ${styles[variant]}`}
    >
      {children}
    </div>
  );
}
