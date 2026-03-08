import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Perizinan & Kehutanan",
  description:
    "Jasa konsultasi PT RMR Energi Indonesia: Penggunaan Kawasan Hutan (PPKH), Perlindungan & Konservasi Alam, dan Perencanaan Kehutanan.",
  keywords: [
    "layanan PPKH",
    "perizinan kawasan hutan",
    "KBLI 02401",
    "KBLI 02402",
    "KBLI 02404",
    "konsultan kehutanan",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
