"use client";

import type { ReactNode } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcn/collapsible";

/** "Show N more" list tail (shadcn Collapsible). Rows are server-rendered and passed in. */
export default function ShowMore({ count, children }: { count: number; children: ReactNode }) {
  return (
    <Collapsible className="group/more">
      <CollapsibleContent>
        <ul className="border-t border-line">{children}</ul>
      </CollapsibleContent>
      <CollapsibleTrigger className="py-2 text-sm font-medium text-accent hover:underline">
        <span className="group-data-[state=open]/more:hidden">Show {count} more</span>
        <span className="hidden group-data-[state=open]/more:inline">Show fewer</span>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
