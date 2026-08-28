import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        background: "linear-gradient(135deg, #00bdbe 0%, #1f5fa8 55%, #2f2978 100%)",
        borderRadius: 32,
        fontSize: 36,
        fontWeight: 800,
      }}
    >
      S
    </div>,
    size,
  );
}
