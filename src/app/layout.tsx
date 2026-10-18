import type { Metadata } from "next";
import ModeProvider, { CalculatorEmbed } from "@/components/layout/ModeProvider";
import { MODE_INIT_SCRIPT } from "@/lib/display-mode";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { AUTHOR, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
  keywords: [
    "IB Mathematics",
    "Analysis and Approaches",
    "Applications and Interpretation",
    "IB AA vs AI",
    "IB math lessons",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-mode="web" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MODE_INIT_SCRIPT }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ModeProvider>
          <Navbar />
          {children}
          <Footer />
          {/* Floating calculator widget (https://bubble-calculator.web.app), web mode only */}
          <CalculatorEmbed />
        </ModeProvider>
      </body>
    </html>
  );
}
