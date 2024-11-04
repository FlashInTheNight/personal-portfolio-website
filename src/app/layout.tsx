import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Footer from "@/components/Footer";
import Theme from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "FlashInTheNight — frontend developer",
  description: "FlashInTheNight's personal website",
  keywords: [
    "portfolio",
    "portfolio website",
    "developer",
    "frontend",
    "frontend developer",
    "web developer",
    "web development",
    "react",
    "nextjs",
    "typescript",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={poppins.className}>
        <Theme>
          <div className="flex flex-col justify-between md:justify-center md:h-screen relative w-full bg-background-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
            <div className="pointer-events-none absolute inset-0  bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative z-50">{children}</div>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
