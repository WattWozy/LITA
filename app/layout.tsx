import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "./components/Navbar";
import "./globals.css";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://litar.es"),
  title: { default: "Software a medida y automatización en Pamplona | LiTAR", template: "%s | LiTAR" },
  description: "Desarrollo de software a medida, automatización e integración de sistemas para pymes de Pamplona y Navarra.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: "LiTAR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}