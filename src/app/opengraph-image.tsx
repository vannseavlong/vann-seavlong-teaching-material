import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "IB Mathematics AA vs AI — lessons, practice and mock papers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12233d",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#9db4d3", letterSpacing: 1 }}>
          {SITE_NAME}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
            IB Mathematics
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1.05, color: "#7fb2ea" }}>
            AA vs AI
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#c5d3e6", marginTop: 28, maxWidth: 900 }}>
            Choose your pathway, then study it: lessons, practice sets and mock papers.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 16 }}>
            {["Analysis & Approaches", "Applications & Interpretation"].map((t) => (
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
          <div style={{ display: "flex", fontSize: 26, color: "#9db4d3" }}>by VANN Seavlong</div>
        </div>
      </div>
    ),
    size,
  );
}
