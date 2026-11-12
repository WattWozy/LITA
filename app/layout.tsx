import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import { site } from "./site";
import "./globals.css";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "LITA · Desarrollo y Sistemas",
  description: "Desarrollo de software e ingeniería",
  icons: {
    icon: "/favicon.png", // Ruta relativa a la carpeta public/
    apple: "/apple-icon.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
