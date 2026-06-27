import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alishba Karam — Full Stack AI Engineer",
  description:
    "Full Stack AI Engineer specializing in LLM applications, RAG systems, AI agents, and intelligent workflow automation. Building production-grade AI at Jaffer Business Systems.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "LLM",
    "RAG Systems",
    "AI Agents",
    "NestJS",
    "React",
    "Python",
    "Flutter",
    "Machine Learning",
  ],
  authors: [{ name: "Alishba Karam" }],
  openGraph: {
    title: "Alishba Karam — Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer specializing in LLM applications, RAG systems, and intelligent automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alishba Karam — Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer specializing in LLM applications, RAG systems, and intelligent automation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
