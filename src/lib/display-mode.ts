export type DisplayMode = "web" | "a4";

export const DEFAULT_MODE: DisplayMode = "web";
export const MODE_PARAM = "mode";

export function parseMode(value: string | null | undefined): DisplayMode {
  return value === "a4" ? "a4" : "web";
}

/** Append the current mode to an internal href (omitted for the default `web`). */
export function withMode(href: string, mode: DisplayMode): string {
  if (mode === DEFAULT_MODE || !href.startsWith("/")) return href;
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const rest = hashAt >= 0 ? href.slice(0, hashAt) : href;
  const [path, query = ""] = rest.split("?");
  const params = new URLSearchParams(query);
  params.set(MODE_PARAM, mode);
  return `${path}?${params.toString()}${hash}`;
}

/** Inline <head> script: sets data-mode from ?mode before first paint. */
export const MODE_INIT_SCRIPT = `(function(){try{var m=new URLSearchParams(location.search).get("${MODE_PARAM}");document.documentElement.setAttribute("data-mode",m==="a4"?"a4":"web");}catch(e){document.documentElement.setAttribute("data-mode","web");}})();`;
