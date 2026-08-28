import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://startwithconsultoria.com"),
  title: {
    default: "Start With | Consultoria comercial com execução",
    template: "%s | Start With",
  },
  description:
    "Consultoria comercial que diagnostica, estrutura e acompanha sua operação até o resultado aparecer no funil e nos números.",
  alternates: { canonical: "/", languages: { "pt-BR": "/" } },
  authors: [{ name: "Start With Consultoria" }],
  creator: "Start With Consultoria",
  publisher: "Start With Consultoria",
  category: "consultoria comercial",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Start With Consultoria",
    title: "Start With | Consultoria comercial com execução",
    description: "Processo, gestão e previsibilidade para transformar sua operação comercial.",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Start With — Consultoria comercial com execução" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start With | Consultoria comercial com execução",
    description: "Processo, gestão e previsibilidade para transformar sua operação comercial.",
    images: ["/og.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0e111b" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Start With Consultoria",
  url: "https://startwithconsultoria.com",
  image: "https://startwithconsultoria.com/og.webp",
  description: "Consultoria comercial com diagnóstico, estruturação de processos e gestão acompanhada.",
  telephone: "+55 31 99017-6203",
  areaServed: { "@type": "Country", name: "Brasil" },
  address: { "@type": "PostalAddress", addressRegion: "MG", addressCountry: "BR" },
  sameAs: [
    "https://www.linkedin.com/company/start-with-%E2%80%93-consultoria-de-neg%C3%B3cios/",
    "https://instagram.com/startwconsultoria",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
