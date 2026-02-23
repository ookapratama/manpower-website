/**
 * Root Layout — Layout utama website ManPower Supply
 */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | ManPower Supply",
    default: "ManPower Supply — Penyedia Tenaga Kerja Profesional",
  },
  description:
    "Penyedia jasa tenaga kerja outsourcing profesional dan terpercaya di Sulawesi Selatan. Security, cleaning service, driver, teknisi, dan tenaga kerja lainnya.",
  keywords: [
    "manpower supply",
    "outsourcing",
    "tenaga kerja",
    "jasa security",
    "cleaning service",
    "driver",
    "makassar",
    "sulawesi selatan",
  ],
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
      </body>
    </html>
  );
}
