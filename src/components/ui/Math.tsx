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

/**
 * Display-mode maths that is valid inside a paragraph: KaTeX output is all spans,
 * so it can sit in a block-level <span> where a <div> would be invalid HTML.
 */
export function DisplayMathInline({ math }: { math: string }) {
  const html = katex.renderToString(math, { throwOnError: false, displayMode: true, output: "html" });
  return <span className="my-2 block max-w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />;
}
