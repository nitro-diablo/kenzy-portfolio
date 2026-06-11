import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diablo — Websites That Turn Visitors Into Buyers",
  description:
    "Software Engineer specializing in Conversion Rate Optimization (CRO). The fastest team to deliver high-converting websites.",
  openGraph: {
    title: "Diablo — Websites That Turn Visitors Into Buyers",
    description:
      "Software Engineer specializing in Conversion Rate Optimization (CRO). The fastest team to deliver high-converting websites.",
    images: ["/profile.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diablo — Websites That Turn Visitors Into Buyers",
    description:
      "High-converting websites, delivered fast. Book a free strategy session.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
