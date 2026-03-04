import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Kegiatan Usaha",
  description:
    "Daftar lengkap layanan ManPower Supply berdasarkan akta perusahaan. Mencakup sektor kehutanan, pertambangan, industri logam, instalasi mesin, pengelolaan limbah, dan konstruksi gedung.",
  keywords: [
    "layanan outsourcing",
    "kegiatan usaha akta",
    "kbli man power",
    "jasa kehutanan",
    "jasa pertambangan",
    "konstruksi gedung makassar",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
