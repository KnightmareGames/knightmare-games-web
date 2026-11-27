import type { Metadata } from "next";
import { Grenze, Grenze_Gotisch, Spectral } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const blackletter = Grenze_Gotisch({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-blackletter" });
const label = Grenze({ subsets: ["latin"], weight: ["500", "700", "900"], style: ["normal", "italic"], variable: "--font-label" });
const body = Spectral({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://knightmare.games"),
  title: { default: "Knightmare Games", template: "%s | Knightmare Games" },
  description: "Knightmare Games makes Cursor Quest, Spark, and Last Call for Alcohol.",
  openGraph: { images: ["/assets/img/brand/knightmare-logo-1024.png"], type: "website" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${blackletter.variable} ${label.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
