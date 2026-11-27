import type { Metadata } from "next";
import { Grenze_Gotisch, Space_Grotesk, Space_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const display = Grenze_Gotisch({ subsets: ["latin"], weight: ["600", "800", "900"], variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://knightmare.games"),
  title: { default: "Knightmare Games", template: "%s | Knightmare Games" },
  description: "Knightmare Games is an independent studio making video games and tabletop games.",
  openGraph: { images: ["/assets/img/brand/knightmare-logo-1024.png"], type: "website" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
