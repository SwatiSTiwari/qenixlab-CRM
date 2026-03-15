import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autonomous AI CRM | The Future of Customer Relationships",
  description:
    "Connect your CRM, POS, WhatsApp, and email in one ecosystem. Let AI understand customers, automate communication, and run campaigns for you.",
  keywords: [
    "AI CRM",
    "autonomous CRM",
    "customer relationship management",
    "AI automation",
    "business automation",
  ],
  openGraph: {
    title: "Autonomous AI CRM | The Future of Customer Relationships",
    description:
      "Connect your CRM, POS, WhatsApp, and email in one ecosystem. Let AI understand customers, automate communication, and run campaigns for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${calistoga.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
