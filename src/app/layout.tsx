import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./ui/globals.css";
import { StrictMode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "PathToSWE",
  description: "Software Engineering Internships Search and Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html
        lang="en"
        className={`${playfairDisplay.variable} ${nunito.variable}`}
      >
        <body>{children}</body>
      </html>
    </StrictMode>
  );
}
