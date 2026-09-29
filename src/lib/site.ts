/** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in the deploy environment. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "IB Math Guide";
export const SITE_TITLE = "IB Mathematics AA vs AI — Which Path Is Right for You?";
export const SITE_DESCRIPTION =
  "A clear, honest guide for Grade 11 IB students choosing between Analysis & Approaches and Applications & Interpretation, with lessons, practice sets and mock papers.";
export const AUTHOR = "VANN Seavlong";
