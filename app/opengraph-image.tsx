import { ImageResponse } from "next/og";
import { personalInfo, metrics } from "@/data/resume";

export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14161c",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", color: "#c9a34c", fontSize: 22, letterSpacing: 1 }}>
            front-end / react · angular · vue · typescript
          </div>
          <div style={{ display: "flex", color: "#ecedf0", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            {personalInfo.name}
          </div>
          <div style={{ display: "flex", color: "#8b93a1", fontSize: 34 }}>
            {personalInfo.title} · Bengaluru, India
          </div>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          {metrics.slice(0, 4).map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", color: "#c9a34c", fontSize: 44, fontWeight: 700 }}>
                {m.value}
              </div>
              <div style={{ display: "flex", color: "#8b93a1", fontSize: 20 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
