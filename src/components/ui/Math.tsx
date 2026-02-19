import katex from "katex";

/**
 * Renders a LaTeX math expression inline within a line of text.
 */
export function InlineMath({ math }: { math: string }) {
  const html = katex.renderToString(math, { throwOnError: false, output: "html" });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * Renders a LaTeX math expression as a centred display block.
 */
export function BlockMath({ math }: { math: string }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
