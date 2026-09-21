import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI SITEFLOW // Agency Showcase Hub",
  description: "Official production showcase for 4K AI cinema commercials and Next.js 16 web templates by AI SiteFlow Agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-obsidian text-porcelain font-sans antialiased selection:bg-cobalt selection:text-porcelain flex flex-col">
        {children}
      </body>
    </html>
  );
}
