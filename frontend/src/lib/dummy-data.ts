/**
 * Data dummy untuk PT RMR Energi Indonesia
 * Berdasarkan dokumen Company Profile dan Preliminary
 */

import { ServiceItem, Project, Expert, Testimonial, Partner } from "@/types";

// ══════════════════════════════════════════════
// DATA LAYANAN (SERVICES) - Berdasarkan KBLI di PDF
// ══════════════════════════════════════════════

export const services: ServiceItem[] = [
  {
    id: 1,
    kbliCode: "02401",
    name: "Penggunaan Kawasan Hutan",
    slug: "penggunaan-kawasan-hutan",
    description:
      "Jasa penggunaan kawasan hutan di luar sektor kehutanan (KBLI 02401).",
    icon: "Trees",
    features: [
      "Izin Persetujuan Penggunaan Kawasan Hutan (PPKH)",
      "Navigasi Regulasi Kehutanan",
      "Kajian Teknis Penggunaan Lahan",
      "Pendampingan Birokrasi Kehutanan",
    ],
  },
  {
    id: 2,
    kbliCode: "02402",
    name: "Perlindungan & Konservasi",
    slug: "perlindungan-konservasi",
    description: "Jasa perlindungan hutan dan konservasi alam (KBLI 02402).",
    icon: "ShieldCheck",
    features: [
      "Studi Konservasi Alam",
      "Perencanaan Perlindungan Hutan",
      "Assessment Biodiversitas",
      "Manajemen Kawasan Konservasi",
    ],
  },
  {
    id: 3,
    kbliCode: "02404",
    name: "Perencanaan Kehutanan",
    slug: "perencanaan-kehutanan",
    description: "Jasa kehutanan bidang perencanaan kehutanan (KBLI 02404).",
    icon: "Map",
    features: [
      "Penyusunan Rencana Kerja (RK)",
      "Pemetaan Hutan Digital",
      "Inventory Hutan",
      "Studi Teknis Kehutanan",
    ],
  },
];

// ══════════════════════════════════════════════
// DATA PROYEK (PORTFOLIO) - Berdasarkan Page 8 PDF
// ══════════════════════════════════════════════

export const projects: Project[] = [
  {
    id: 1,
    title: "Penurunan Status Fungsi Hutan Matano Ring Belt",
    category: "Perencanaan Kehutanan",
    status: "Selesai",
    year: "2024",
    location: "Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Penyusunan Dokumen PPKH IPPKH Tanamalia & Larona",
    category: "Perizinan PPKH",
    status: "Selesai",
    year: "2023",
    location: "Sulawesi",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Penyusunan Baseline Pengerukan Sungai Malili",
    category: "Studi Lingkungan",
    status: "Selesai",
    year: "2023",
    location: "Malili",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Assesment Petea Buffer Zone",
    category: "Konservasi",
    status: "Selesai",
    year: "2024",
    location: "Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Dokumen PPKH Sorowako (Batch 1-3)",
    category: "Perizinan PPKH",
    status: "Selesai",
    year: "2023",
    location: "Sorowako",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  },
];

// ══════════════════════════════════════════════
// DATA TIM AHLI (EXPERTS) - Berdasarkan Page 10 PDF
// ══════════════════════════════════════════════

export const experts: Expert[] = [
  {
    id: 1,
    name: "Prof. Dr. Tukirin Partomihardjo",
    position: "Tenaga Ahli Senior Biodiversitas",
    experience: "30+ Tahun",
    specialization: "Ekologi Hutan & Flora",
    avatar: "https://i.pravatar.cc/150?u=tukirin",
  },
  {
    id: 2,
    name: "Ir. Andi Hasbi, MT",
    position: "Tenaga Ahli Regulasi Kehutanan",
    experience: "25+ Tahun",
    specialization: "Kebijakan & Regulasi",
    avatar: "https://i.pravatar.cc/150?u=hasbi",
  },
  {
    id: 3,
    name: "Dr. Ir. Chairul Paotonan",
    position: "Tenaga Ahli Teknik Sipil & Hidrologi",
    experience: "20+ Tahun",
    specialization: "Rekayasa Air & Infrastruktur",
    avatar: "https://i.pravatar.cc/150?u=chairul",
  },
  {
    id: 4,
    name: "Prof. Dr. Andi Adri Arief",
    position: "Tenaga Ahli Sosial Ekonomi & Perikanan",
    experience: "25+ Tahun",
    specialization: "Dampak Sosial Ekonomi",
    avatar: "https://i.pravatar.cc/150?u=adri",
  },
];

// ══════════════════════════════════════════════
// DATA MITRA (PARTNERS) - Berdasarkan Page 9 PDF
// ══════════════════════════════════════════════

export const partners: Partner[] = [
  { name: "Hanwha Mining Services", logoUrl: "" },
  { name: "Wiratman", logoUrl: "" },
  { name: "PT Indoporlen", logoUrl: "" },
  { name: "Indah Karya", logoUrl: "" },
  { name: "Unhas", logoUrl: "" },
  { name: "SMEC", logoUrl: "" },
  { name: "PT Enviro Karya Nusantara", logoUrl: "" },
];

// ══════════════════════════════════════════════
// STATISTIK SITUS
// ══════════════════════════════════════════════

export const siteStats = {
  totalProjects: 15,
  expertMembers: 12,
  clients: 10,
  yearsExperience: 8,
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
    name: "Muhammad Fahmi Mubarak",
    company: "Direktur Utama",
    content:
      "PT RMR hadir sebagai mitra strategis terdepan dalam penyediaan solusi perizinan kawasan hutan yang terpercaya.",
    avatar: "https://i.pravatar.cc/150?u=fahmi",
    rating: 5,
  },
];
