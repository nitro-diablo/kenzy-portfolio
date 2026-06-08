import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mr. Mike's Grill | Proudly Serving Westland, MI",
  description:
    "Homestyle cooked dishes with the freshest ingredients. Breakfast, Lunch, Dinner, and the area's largest Gluten Free menu. Family-owned since 2014.",
  keywords: [
    "Mr Mike's Grill",
    "Westland MI restaurant",
    "gluten free restaurant",
    "family restaurant",
    "breakfast",
    "lunch",
    "dinner",
    "homestyle cooking",
  ],
  openGraph: {
    title: "Mr. Mike's Grill | Proudly Serving Westland, MI",
    description:
      "Homestyle cooked dishes with the freshest ingredients. Family-owned since 2014. The area's largest Gluten Free menu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
