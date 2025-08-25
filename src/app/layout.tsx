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
  title: "Deep Pine - AI-Powered SaaS Accelerator",
  description: "Next-generation AI-powered SaaS accelerator, built to streamline digital transformation for ambitious organizations. Enterprise-grade solutions with startup agility.",
  keywords: "SaaS, AI, digital transformation, enterprise software, cloud migration, machine learning",
  authors: [{ name: "Deep Pine" }],
  openGraph: {
    title: "Deep Pine - AI-Powered SaaS Accelerator",
    description: "Next-generation AI-powered SaaS accelerator for digital transformation",
    url: "https://deeppine.io",
    siteName: "Deep Pine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Pine - AI-Powered SaaS Accelerator",
    description: "Next-generation AI-powered SaaS accelerator for digital transformation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
