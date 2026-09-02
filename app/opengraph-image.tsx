import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aradhana Dubey — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Auto-generated social preview image (no static asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#080B14",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ width: 72, height: 8, background: "#8B5CF6", borderRadius: 8, marginBottom: 40 }} />
        <div style={{ fontSize: 76, fontWeight: 700 }}>Aradhana Dubey</div>
        <div style={{ fontSize: 38, color: "#8B5CF6", marginTop: 12 }}>
          Senior Software Engineer @ Adobe
        </div>
        <div style={{ fontSize: 28, color: "#94A3B8", marginTop: 28 }}>
          Building scalable web applications · Exploring ML
        </div>
      </div>
    ),
    { ...size },
  );
}
