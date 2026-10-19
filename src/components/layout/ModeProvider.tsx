"use client";

import { createContext, Suspense, useContext, useEffect, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { MODE_PARAM, parseMode, supportsA4, type DisplayMode } from "@/lib/display-mode";

type ModeContextValue = { mode: DisplayMode; setMode: (mode: DisplayMode) => void };

const ModeContext = createContext<ModeContextValue>({ mode: "web", setMode: () => {} });

/** Current display mode (`?mode=a4|web`). Prefer the `a4:` Tailwind variant over this. */
export function useDisplayMode(): ModeContextValue {
  return useContext(ModeContext);
}

function ModeState({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = supportsA4(pathname) ? parseMode(searchParams.get(MODE_PARAM)) : "web";

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  const value = useMemo<ModeContextValue>(
    () => ({
      mode,
      setMode: (next) => {
        const params = new URLSearchParams(searchParams.toString());
        if (next === "web") params.delete(MODE_PARAM);
        else params.set(MODE_PARAM, next);
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      },
    }),
    [mode, pathname, router, searchParams],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export default function ModeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <ModeState>{children}</ModeState>
    </Suspense>
  );
}

/** Floating calculator widget (both modes). */
export function CalculatorEmbed() {
  return (
    <Script
      src="https://bubble-calculator.web.app/v1/embed.js"
      strategy="afterInteractive"
      data-tia4-auto
      data-position="bottom-right"
      data-theme="auto"
      data-accent="#2b6cb0"
      data-hotkey="alt+c"
    />
  );
}
