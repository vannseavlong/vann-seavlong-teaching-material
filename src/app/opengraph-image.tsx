import { ImageResponse } from "next/og";
import { AUTHOR, SITE_NAME } from "@/lib/site";

export const alt = "Techie Club: lessons, practice and revision papers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same mark as src/components/ui/Logo.tsx, drawn larger with a light outline for the dark background.
function Mark({ size: s }: { size: number }) {
  return (
    <svg viewBox="0 0 64 64" width={s} height={s}>
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15" fill="#1a365d" stroke="#3c5a85" strokeWidth="1.5" />
      <path d="M46.7 21.4A18 18 0 1 0 46.7 42.6" fill="none" stroke="#7fb2ea" strokeWidth="6" strokeLinecap="round" />
      <path d="M23.5 25h17M32 25v17" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#12233d",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Large faint mark bleeding off the right edge */}
        <div style={{ display: "flex", position: "absolute", right: -210, top: 70, opacity: 0.12 }}>
          <svg viewBox="0 0 64 64" width={560} height={560}>
            <path d="M46.7 21.4A18 18 0 1 0 46.7 42.6" fill="none" stroke="#7fb2ea" strokeWidth="6" strokeLinecap="round" />
            <path d="M23.5 25h17M32 25v17" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Mark size={88} />
            <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: -0.5 }}>{SITE_NAME}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Learn, practise,</div>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05, color: "#7fb2ea" }}>
              revise.
            </div>
            <div style={{ display: "flex", fontSize: 30, color: "#c5d3e6", marginTop: 24, maxWidth: 940 }}>
              Lessons, interactive practice, revision papers and formula sheets.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: 16 }}>
              {["IB Diploma", "AIA", "Mathematics"].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    fontSize: 26,
                    padding: "10px 22px",
                    border: "2px solid #3c5a85",
                    borderRadius: 8,
                    color: "#dbe6f5",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#9db4d3" }}>by {AUTHOR}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
