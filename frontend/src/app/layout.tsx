/**
 * Root Layout — PT RMR Energi Indonesia
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
    template:
      "%s | " + (process.env.NEXT_PUBLIC_APP_NAME || "PT RMR Energi Indonesia"),
    default:
      (process.env.NEXT_PUBLIC_APP_NAME || "PT RMR Energi Indonesia") +
      " — Konsultan Ahli Perizinan Kawasan Hutan",
  },
  description:
    "PT RMR Energi Indonesia — Mitra strategis dalam perizinan PPKH, perlindungan hutan, dan perencanaan kehutanan di Indonesia. Integritas dalam Perizinan, Keberlanjutan dalam Operasional.",
  keywords: [
    "PT RMR Energi Indonesia",
    "PPKH",
    "perizinan kawasan hutan",
    "konsultan kehutanan",
    "IPPKH",
    "perlindungan hutan",
    "perencanaan kehutanan",
    "KBLI 02401",
    "KBLI 02402",
    "KBLI 02404",
    "makassar",
    "sulawesi selatan",
    "sorowako",
    "luwu timur",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: process.env.NEXT_PUBLIC_APP_NAME || "PT RMR Energi Indonesia",
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
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
