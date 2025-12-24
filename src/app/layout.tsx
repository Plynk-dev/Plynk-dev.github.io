import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plynk Data | Medical AI Innovation & Enterprise Software",
  description:
    "Plynk Data is a Seoul-based deep-tech startup specializing in Medical Foundation Models and reliable Offshore Development Centers.",
  keywords: [
    "Medical AI",
    "Foundation Models",
    "Offshore Development Center",
    "ODC",
    "Healthcare AI",
    "Seoul Startup",
    "Deep Tech",
  ],
  authors: [{ name: "Plynk Data" }],
  openGraph: {
    title: "Plynk Data | Medical AI Innovation & Enterprise Software",
    description:
      "Seoul-based deep-tech startup specializing in Medical Foundation Models and reliable Offshore Development Centers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
