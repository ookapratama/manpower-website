/**
 * Data dummy untuk PT RMR Energi Indonesia
 * Berdasarkan dokumen Company Profile dan Preliminary (Terupdate Maret 2026)
 */

import { ServiceItem, Project, Expert, Testimonial, Partner } from "@/types";

// ══════════════════════════════════════════════
// DATA LAYANAN (SERVICES) - Berdasarkan KBLI di PDF
// ══════════════════════════════════════════════

export const services: ServiceItem[] = [
  {
    id: 1,
    kbliCode: "02401",
    name: "Perizinan Kehutanan & Lingkungan",
    slug: "perizinan-kehutanan-lingkungan",
    description:
      "Jasa pengurusan perizinan di kawasan hutan dan kajian lingkungan untuk sektor pertambangan dan infrastruktur (KBLI 02401).",
    icon: "Trees",
    features: [
      "Izin Persetujuan Penggunaan Kawasan Hutan",
      "Navigasi Regulasi Kehutanan",
      "Kajian Teknis Penggunaan Lahan",
      "Pendampingan Birokrasi Lingkungan",
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
// DATA PROYEK (PORTFOLIO) - Berdasarkan Update Mar 2026
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
    description:
      "Studi teknis untuk penurunan status fungsi kawasan hutan di Matano Ring Belt guna mendukung pembangunan infrastruktur publik di Kabupaten Luwu Timur (Klien: PT SMEC Denka Indonesia / PT Vale Indonesia).",
    scope: [
      "Analisis Citra Satelit & GIS",
      "Survei Lapangan Inventarisasi Tegakan",
      "Penyusunan Dokumen Kajian Teknis",
      "Koordinasi BPKH & KLHK",
    ],
  },
  {
    id: 2,
    title: "Dokumen Perizinan Kehutanan Tanamalia & Larona",
    category: "Perizinan Kehutanan",
    status: "Selesai",
    year: "2023",
    location: "Sulawesi",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    description:
      "Penyusunan dokumen teknis untuk Persetujuan Penggunaan Kawasan Hutan bagi operasional pertambangan berkelanjutan di blok Tanamalia dan Larona (Klien: PT EKN / PT Vale Indonesia).",
    scope: [
      "Penyusunan Peta Lampiran Lokasi",
      "Penyusunan Business Plan Kehutanan",
      "Verifikasi Batas Kawasan",
      "Pengawalan Proses di KLHK",
    ],
  },
  {
    id: 3,
    title: "Baseline Pengerukan Sungai Malili",
    category: "Studi Lingkungan",
    status: "Selesai",
    year: "2023",
    location: "Malili",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
    description:
      "Kajian lingkungan dan baseline teknis untuk pengerukan sedimen Sungai Malili guna mencegah banjir bandang (Klien: PT Wiratman / PT Vale Indonesia).",
    scope: [
      "Pengambilan Sampel Batimetri",
      "Uji Kualitas Air & Sedimen",
      "Pemetaan Area Terdampak",
      "Rekomendasi Disposal Area",
    ],
  },
  {
    id: 4,
    title: "Assessment Petea Buffer Zone",
    category: "Konservasi",
    status: "Selesai",
    year: "2024",
    location: "Luwu Timur",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=2074&auto=format&fit=crop",
    description:
      "Penilaian ekologis zona penyangga hutan Petea untuk memastikan perlindungan biodiversitas endemik di sekitar area operasional tambang (Klien: PT SMEC Denka Indonesia / PT Vale Indonesia).",
    scope: [
      "Inventarisasi Flora & Fauna Endemik",
      "Kajian Sosial Budaya",
      "Pemetaan Zona Sensitif",
      "Strategi Mitigasi Konflik Satwa",
    ],
  },
  {
    id: 5,
    title: "Dokumen Perizinan Lingkungan Sorowako (Batch 1-3)",
    category: "Perizinan Lingkungan",
    status: "Selesai",
    year: "2023",
    location: "Sorowako",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pengurusan dokumen perizinan lingkungan secara bertahap untuk area infrastruktur tambang di wilayah Sorowako (Klien: PT EKN / PT Vale Indonesia).",
    scope: [
      "Audit Dokumen Legalitas Dasar",
      "Pemetaan GIS Lintas Waktu",
      "Koordinasi Stakeholder Daerah",
      "Monitoring Kepatuhan Regulasi",
    ],
  },
  {
    id: 6,
    title: "Studi RKAB & Laporan PPM PT Kalla Arebamma",
    category: "Perencanaan Kehutanan",
    status: "Selesai",
    year: "2024",
    location: "Luwu Utara",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    description:
      "Penyusunan Tata Ruang (RKAB) periode 2024-2026 serta Laporan Aspek PPM di wilayah Seko dan Rampi.",
    scope: [
      "Penyusunan RKAB Pertambangan",
      "Audit Aspek PPM",
      "Kajian Sosial Wilayah Terpencil",
      "Dokumentasi Teknis Lapangan",
    ],
  },
];

// ══════════════════════════════════════════════
// DATA TIM AHLI (EXPERTS) - Berdasarkan Update Mar 2026
// ══════════════════════════════════════════════

export const experts: Expert[] = [
  {
    id: 1,
    name: "Prof. Dr. Tukirin Partomihardjo",
    position: "Expert Team: Environmental & Biodiversity",
    experience: "30+ Tahun",
    specialization: "Ekologi Hutan & Flora",
    avatar: "https://i.pravatar.cc/150?u=tukirin",
  },
  {
    id: 2,
    name: "Prof. Dr. Ambeng, M.Si.",
    position: "Expert Team: Biology & Water Ecology",
    experience: "33+ Tahun",
    specialization: "Ekologi Perairan & Biodiversitas",
    avatar: "https://i.pravatar.cc/150?u=ambeng",
  },
  {
    id: 3,
    name: "Dr. Ir. Baharuddin MP",
    position: "Expert Team: Forestry & Biodiversity",
    experience: "33+ Tahun",
    specialization: "Manajemen Hutan & Konservasi",
    avatar: "https://i.pravatar.cc/150?u=bahar1",
  },
  {
    id: 4,
    name: "Prof. Dr. Andi Adri Arief, S.Pi., M.Si.",
    position: "Expert Team: Social Economic & Fisheries",
    experience: "26+ Tahun",
    specialization: "Dampak Sosial Ekonomi",
    avatar: "https://i.pravatar.cc/150?u=adri",
  },
  {
    id: 5,
    name: "Ir. Andi Hasbi, MT",
    position: "Expert Team: Forestry Regulation",
    experience: "30+ Tahun",
    specialization: "Kebijakan & Regulasi Kehutanan",
    avatar: "https://i.pravatar.cc/150?u=hasbi",
  },
  {
    id: 6,
    name: "Dr. Ir. Chairul Paotonan",
    position: "Expert Team: Civil & Coastal Engineering",
    experience: "24+ Tahun",
    specialization: "Infrastruktur Pantai & Lingkungan",
    avatar: "https://i.pravatar.cc/150?u=chairul",
  },
  {
    id: 7,
    name: "Dr. Djabal Nur Basir, S.Si., M.Si",
    position: "Expert Team: Water Quality & Chemistry",
    experience: "26+ Tahun",
    specialization: "Analisis Kualitas Air",
    avatar: "https://i.pravatar.cc/150?u=djabal",
  },
  {
    id: 8,
    name: "Dr. Ir. Riswal Karamma, ST., MT.",
    position: "Expert Team: Hydrology Engineering",
    experience: "29+ Tahun",
    specialization: "Manajemen Sumber Daya Air",
    avatar: "https://i.pravatar.cc/150?u=riswal",
  },
  {
    id: 9,
    name: "Dr. Putu Supadma Putra, S.Hut.",
    position: "Expert Team: Forestry Ecology",
    experience: "10+ Tahun",
    specialization: "Perencanaan & Silvikultur",
    avatar: "https://i.pravatar.cc/150?u=putu",
  },
];

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
    name: "Muhammad Fahmi Mubarak",
    role: "Direktur Utama",
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
  totalProjects: 25,
  expertMembers: 12,
  clients: 15,
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
    name: "Muhammad Fahmi Mubarak",
    company: "Direktur Utama",
    content:
      "PT RMR hadir sebagai mitra strategis terdepan dalam penyediaan solusi perizinan kawasan hutan yang terpercaya.",
    avatar: "https://i.pravatar.cc/150?u=fahmi",
    rating: 5,
  },
];
