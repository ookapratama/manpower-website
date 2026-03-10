/**
 * Data dummy untuk PT RMR Energi Indonesia
 * Berdasarkan dokumen Company Profile dan Preliminary (Terupdate Maret 2026 V2)
 */

import { ServiceItem, Project, Expert, Testimonial, Partner } from "@/types";

// ══════════════════════════════════════════════
// DATA LAYANAN (SERVICES) - Berdasarkan 3 Pilar Utama di PDF terbaru
// ══════════════════════════════════════════════

export const services: ServiceItem[] = [
  {
    id: 1,
    kbliCode: "02401",
    name: "Jasa Pembukaan Kawasan Hutan",
    slug: "pembukaan-kawasan-hutan",
    description:
      "Layanan pembukaan kawasan hutan untuk sektor kehutanan maupun sektor lainnya secara legal dan berkelanjutan.",
    icon: "Trees",
    features: [
      "Persiapan Lahan Hutan",
      "Inventarisasi Tegakan",
      "Pembersihan Lahan (Land Clearing)",
      "Kajian Dampak Pembukaan Lahan",
    ],
  },
  {
    id: 2,
    kbliCode: "02401",
    name: "Perizinan Kehutanan dan Lingkungan",
    slug: "perizinan-kehutanan-lingkungan",
    description:
      "Pendampingan profesional dalam pengurusan Persetujuan Penggunaan Kawasan Hutan (PPKH) dan izin terkait lainnya.",
    icon: "ShieldCheck",
    features: [
      "Pengurusan Dokumen PPKH",
      "Navigasi Regulasi Terbaru",
      "Koordinasi Instansi Terkait",
      "Monitoring Kepatuhan Izin",
    ],
  },
  {
    id: 3,
    kbliCode: "02404",
    name: "Perencanaan Kehutanan & Konsultansi",
    slug: "perencanaan-kehutanan-konsultansi",
    description:
      "Penyusunan dokumen teknis, AMDAL, RKL-RPL, dan rencana kerja pengelolaan hutan digital.",
    icon: "Map",
    features: [
      "Penyusunan AMDAL & RKL-RPL",
      "Rencana Kerja Anggaran Biaya (RKAB)",
      "Pemetaan GIS & Citra Satelit",
      "Studi Kelayakan Kehutanan",
    ],
  },
];

// ══════════════════════════════════════════════
// DATA PROYEK (PORTFOLIO) - Berdasarkan 10 Proyek Terverifikasi (Halaman 8 PDF)
// ══════════════════════════════════════════════

export const projects: Project[] = [
  {
    id: 1,
    title: "Penyusunan Laporan Aspek PPM & RKAB Seko",
    category: "Perencanaan Kehutanan",
    status: "Selesai",
    year: "2024",
    location: "Seko, Luwu Utara",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    description:
      "Penyusunan laporan Pengembangan dan Pemberdayaan Masyarakat (PPM) serta RKAB 2024-2026 untuk PT Kalla Arebamma di wilayah Seko.",
    scope: [
      "Penyusunan Dokumen PPM",
      "RKAB 2024-2026",
      "Kajian Sosial Ekonomi",
      "Koordinasi Pemda",
    ],
  },
  {
    id: 2,
    title: "Penyusunan Status Hutan Matano Belt Road",
    category: "Konsultansi",
    status: "Selesai",
    year: "2024",
    location: "Malili & Nuha, Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Studi teknis penentuan status kawasan hutan untuk jalur Matano Belt Road (Klien: PT SMEC Denka Indonesia).",
    scope: [
      "Analisis Citra Satelit",
      "Survei Batas Kawasan",
      "Kajian Teknis Jalan Belt Road",
    ],
  },
  {
    id: 3,
    title: "Baseline Pengerukan Sungai Malili",
    category: "Studi Lingkungan",
    status: "Selesai",
    year: "2023",
    location: "Malili, Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
    description:
      "Penyusunan data baseline untuk normalisasi dan pengerukan Sungai Malili (Klien: PT Wiratman / PT Vale Indonesia).",
    scope: ["Uji Kualitas Air", "Batimetri Sungai", "Kajian Dampak Lingkungan"],
  },
  {
    id: 4,
    title: "Laporan Aspek PPM & RKAB Rampi",
    category: "Perencanaan Kehutanan",
    status: "Selesai",
    year: "2024",
    location: "Rampi, Luwu Utara",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=2074&auto=format&fit=crop",
    description:
      "Penyusunan laporan aspek PPM dan RKAB 2024-2026 untuk operasional PT Kalla Arebamma di wilayah Rampi.",
    scope: [
      "Penyusunan Dokumen PPM",
      "RKAB 2024-2026",
      "Pelibatan Masyarakat Lokal",
    ],
  },
  {
    id: 5,
    title: "Assessment Petea Buffer Zone",
    category: "Konservasi",
    status: "Selesai",
    year: "2024",
    location: "Nuha, Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    description:
      "Penilaian ekologis area penyangga (buffer zone) Petea untuk memastikan perlindungan biodiversitas (Klien: PT SMEC Denka Indonesia).",
    scope: [
      "Inventarisasi Flora & Fauna",
      "Mapping Zona Lindung",
      "Mitigasi Dampak Tambang",
    ],
  },
  {
    id: 6,
    title: "Pengurusan Dokumen & Izin PPKH PT Vale",
    category: "Perizinan Kehutanan",
    status: "Selesai",
    year: "2023",
    location: "Nuha, Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pendampingan penyusunan dokumen teknis dan pengurusan izin penggunaan kawasan hutan (PPKH) (Klien: PT EKN / PT Vale Indonesia).",
    scope: [
      "Penyusunan Dokumen Teknis",
      "Proses Administrasi KLHK",
      "Monitoring Realisasi Izin",
    ],
  },
  {
    id: 7,
    title: "Baseline Pengerukan Sungai Baliase",
    category: "Studi Lingkungan",
    status: "Selesai",
    year: "2023",
    location: "Masamba, Luwu Utara",
    image:
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop",
    description:
      "Studi baseline lingkungan untuk proyek pengerukan sungai Baliase di Luwu Utara (Klien: Pemda Luwu Utara).",
    scope: [
      "Pemetaan Alur Sungai",
      "Kajian Sosial-Ekologi",
      "Data Teknis Sedimentasi",
    ],
  },
];

// ══════════════════════════════════════════════
// DATA TIM AHLI (EXPERTS) - Dihilangkan dari web sesuai request terbaru
// ══════════════════════════════════════════════

export const experts: Expert[] = [];

// ══════════════════════════════════════════════
// DATA MITRA (PARTNERS) - Berdasarkan Page 9 PDF
// ══════════════════════════════════════════════

export const partners: Partner[] = [
  { name: "PT Vale Indonesia", logoUrl: "" },
  { name: "Hanwha Mining Services", logoUrl: "" },
  { name: "Wiratman", logoUrl: "" },
  { name: "PT Indoporlen", logoUrl: "" },
  { name: "Indah Karya", logoUrl: "" },
  { name: "Unhas", logoUrl: "" },
  { name: "SMEC", logoUrl: "" },
  { name: "PT Enviro Karya Nusantara", logoUrl: "" },
];

/** Struktur Organisasi PT RMR Energi Indonesia */
export const organizationData = {
  direkturUtama: {
    name: "Muhammad Fahmi Mubarak, S.T.",
    role: "Direktur",
  },
  direkturOperasional: {
    name: "Muhtar Wahab",
    role: "Direktur Operasional",
  },
  management: [
    { name: "Rahmat Bambang", role: "Manager Operasional" },
    { name: "Nanda", role: "General Admin" },
    { name: "Lisa Maharani", role: "Project Engineer" },
    { name: "Fredi B", role: "Design Engineer" },
    { name: "Andi Anandi P. Hadyan", role: "Survey Engineer" },
    { name: "Yudistira Pratama", role: "IT, Data, & Information" },
  ],
};

// ══════════════════════════════════════════════
// STATISTIK SITUS
// ══════════════════════════════════════════════

export const siteStats = {
  totalProjects: 15,
  expertMembers: 0, // Dihilangkan sesuai request
  clients: 12,
  yearsExperience: 10,
};

// ══════════════════════════════════════════════
// TESTIMONIALS
// ══════════════════════════════════════════════

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bpk. Muhtar Wahab",
    company: "Direktur Operasional",
    content:
      "Kami fokus pada integritas dalam setiap proses perizinan untuk memastikan keberlanjutan operasional bisnis klien kami.",
    avatar: "https://i.pravatar.cc/150?u=muhtar",
    rating: 5,
  },
  {
    id: 2,
    name: "Muhammad Fahmi Mubarak, S.T.",
    company: "Direktur",
    content:
      "PT RMR hadir sebagai mitra strategis terdepan dalam penyediaan solusi perizinan kawasan hutan yang terpercaya.",
    avatar: "https://i.pravatar.cc/150?u=fahmi",
    rating: 5,
  },
];
