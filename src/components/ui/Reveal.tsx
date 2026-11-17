"use client";

import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcn/collapsible";
import { cn } from "@/lib/utils";

/**
 * Show/hide block (shadcn Collapsible) for solutions and hints.
 * `label` is the closed text; `openLabel` (optional) replaces it while open.
 */
export default function Reveal({
  label,
  openLabel,
  children,
  className,
  triggerClassName,
  contentClassName,
}: {
  label: ReactNode;
  openLabel?: ReactNode;
  children: ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}) {
  return (
    <Collapsible className={cn("group/reveal", className)}>
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center gap-2 text-left text-sm font-semibold text-aa-primary hover:underline",
          triggerClassName
        )}
      >
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={16}
          strokeWidth={2}
          className="shrink-0 transition-transform group-data-[state=open]/reveal:rotate-90"
        />
        {openLabel ? (
          <>
            <span className="inline-flex items-center group-data-[state=open]/reveal:hidden">{label}</span>
            <span className="hidden items-center group-data-[state=open]/reveal:inline-flex">{openLabel}</span>
          </>
        ) : (
          label
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className={contentClassName}>{children}</CollapsibleContent>
    </Collapsible>
  );
}
