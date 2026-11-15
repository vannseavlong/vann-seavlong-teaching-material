/** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in the deploy environment. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Techie Club";
export const SITE_TITLE = "Techie Club: lessons, practice and revision papers";
export const SITE_DESCRIPTION =
  "Lessons, interactive practice, worksheets, revision papers and formula sheets for IB Diploma Mathematics AA and AI, AIA Mathematics and more.";
export const AUTHOR = "VANN Seavlong";
