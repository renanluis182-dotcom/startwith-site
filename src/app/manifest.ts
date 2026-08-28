import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Start With Consultoria",
    short_name: "Start With",
    description: "Consultoria comercial com execução, processo e gestão acompanhada.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7fc",
    theme_color: "#0e111b",
    lang: "pt-BR",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
