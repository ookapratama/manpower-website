import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategori Tenaga Kerja",
  description:
    "Jelajahi 14 kategori tenaga kerja profesional kami untuk berbagai sektor industri di Indonesia. Mulai dari outsourcing umum hingga tenaga spesialis proyek.",
  keywords: [
    "kategori tenaga kerja",
    "outsourcing umum",
    "security satpam",
    "cleaning service",
    "driver profesional",
    "tenaga konstruksi",
  ],
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
