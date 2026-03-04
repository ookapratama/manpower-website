/**
 * Root Layout — Layout utama website ManPower Supply
 */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    template: "%s | " + (process.env.NEXT_PUBLIC_APP_NAME || "ManPower Supply"),
    default:
      (process.env.NEXT_PUBLIC_APP_NAME || "ManPower Supply") +
      " — Penyedia Tenaga Kerja Profesional",
  },
  description:
    "Penyedia jasa tenaga kerja outsourcing profesional untuk berbagai sektor industri: keamanan, kebersihan, kehutanan, pertambangan, konstruksi, dan pengelolaan limbah di Sulawesi Selatan.",
  keywords: [
    "manpower supply",
    "outsourcing",
    "tenaga kerja",
    "jasa security",
    "cleaning service",
    "driver",
    "kehutanan",
    "pertambangan",
    "konstruksi",
    "pengelolaan limbah",
    "makassar",
    "sulawesi selatan",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: process.env.NEXT_PUBLIC_APP_NAME || "ManPower Supply",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
