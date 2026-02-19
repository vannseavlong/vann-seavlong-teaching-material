import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "IB Mathematics AA vs AI — Which Path Is Right for You?",
  description:
    "A clear, honest guide for Grade 11 IB students choosing between Analysis & Approaches and Applications & Interpretation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
