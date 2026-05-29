import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kenzy — Brand & Graphic Designer",
  description:
    "Kenzy is an elite brand and graphic designer specializing in high-end visual identities, creative direction, and brand strategy that transforms businesses into unforgettable experiences.",
  keywords: [
    "brand designer",
    "graphic designer",
    "creative director",
    "brand identity",
    "visual design",
    "luxury branding",
    "Kenzy",
  ],
  openGraph: {
    title: "Kenzy — Brand & Graphic Designer",
    description:
      "Designing brands people remember. High-end brand identity, creative direction, and visual systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="noise">{children}</body>
    </html>
  );
}
