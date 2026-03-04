/**
 * Data dummy untuk ManPower Supply Website
 * Data ini akan diganti dengan API call ke Laravel backend nanti
 * Gambar menggunakan Unsplash (gratis & ringan) untuk testing
 *
 * Diperbarui: 2026-03-04
 * Perubahan: Penambahan sektor bisnis, kategori baru, skills baru, dan pekerja baru
 *            berdasarkan akta perusahaan (Pasal 3 — Kegiatan Usaha)
 */

import {
  Category,
  WorkerProfile,
  WorkerCardData,
  SiteStats,
  Testimonial,
  Skill,
  Sector,
  ServiceItem,
} from "@/types";

// ══════════════════════════════════════════════
// DATA SEKTOR BISNIS
// ══════════════════════════════════════════════

export const sectors: Sector[] = [
  {
    id: 1,
    name: "Outsourcing Umum",
    slug: "outsourcing-umum",
    description:
      "Penyediaan tenaga kerja profesional untuk kebutuhan operasional umum perusahaan, termasuk keamanan, kebersihan, pengemudi, dan administrasi.",
    icon: "Users",
    categories: [], // Diisi otomatis di bawah
  },
  {
    id: 2,
    name: "Kehutanan & Konservasi",
    slug: "kehutanan-konservasi",
    description:
      "Jasa profesional di bidang kehutanan mencakup pemanfaatan hasil hutan, konservasi alam, rehabilitasi kawasan hutan, dan perencanaan kehutanan.",
    icon: "Trees",
    categories: [],
  },
  {
    id: 3,
    name: "Pertambangan & Energi",
    slug: "pertambangan-energi",
    description:
      "Tenaga kerja profesional untuk aktivitas penunjang pertambangan, penggalian, dan sektor energi di seluruh wilayah Indonesia.",
    icon: "Mountain",
    categories: [],
  },
  {
    id: 4,
    name: "Industri & Fabrikasi Logam",
    slug: "industri-logam",
    description:
      "Jasa industri untuk berbagai pengerjaan khusus logam dan barang dari logam, termasuk fabrikasi, pemotongan, dan pengelasan.",
    icon: "Hammer",
    categories: [],
  },
  {
    id: 5,
    name: "Reparasi, Instalasi & Maintenance",
    slug: "reparasi-instalasi",
    description:
      "Jasa reparasi mesin, peralatan listrik, serta instalasi dan pemasangan mesin dan peralatan industri.",
    icon: "Wrench",
    categories: [],
  },
  {
    id: 6,
    name: "Pengelolaan Limbah & Lingkungan",
    slug: "pengelolaan-limbah",
    description:
      "Pengelolaan limbah cair dan padat secara aman dan berkelanjutan, termasuk pengumpulan, treatment, dan pembuangan limbah berbahaya maupun tidak berbahaya.",
    icon: "Recycle",
    categories: [],
  },
  {
    id: 7,
    name: "Konstruksi & Bangunan",
    slug: "konstruksi-bangunan",
    description:
      "Jasa konstruksi gedung untuk berbagai fungsi: hunian, perkantoran, industri, perbelanjaan, kesehatan, dan pendidikan.",
    icon: "HardHat",
    categories: [],
  },
];

// ══════════════════════════════════════════════
// DATA KATEGORI (8 existing + 6 baru = 14 total)
// ══════════════════════════════════════════════

export const categories: Category[] = [
  // --- Sektor 1: Outsourcing Umum (existing) ---
  {
    id: 1,
    name: "Security & Satpam",
    slug: "security",
    description:
      "Tenaga keamanan profesional untuk gedung, pabrik, dan perumahan",
    icon: "Shield",
    workerCount: 45,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 2,
    name: "Cleaning Service",
    slug: "cleaning-service",
    description: "Tenaga kebersihan untuk kantor, hotel, rumah sakit, dan mall",
    icon: "Sparkles",
    workerCount: 62,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 3,
    name: "Driver & Pengemudi",
    slug: "driver",
    description: "Pengemudi profesional untuk operasional dan eksekutif",
    icon: "Car",
    workerCount: 38,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 4,
    name: "Office Boy / Girl",
    slug: "office-boy",
    description: "Tenaga pendukung operasional kantor sehari-hari",
    icon: "Coffee",
    workerCount: 29,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 5,
    name: "Teknisi & Maintenance",
    slug: "teknisi",
    description:
      "Tenaga teknis untuk perawatan gedung, mesin, listrik, dan peralatan industri",
    icon: "Wrench",
    workerCount: 33,
    sectorId: 5,
    sectorName: "Reparasi, Instalasi & Maintenance",
    kbliCode: "33121, 33149",
  },
  {
    id: 6,
    name: "Resepsionis & Front Office",
    slug: "resepsionis",
    description: "Tenaga penerima tamu profesional untuk perusahaan dan hotel",
    icon: "UserCheck",
    workerCount: 21,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 7,
    name: "Gardener & Taman",
    slug: "gardener",
    description: "Tenaga perawatan taman dan landscaping profesional",
    icon: "TreePine",
    workerCount: 18,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },
  {
    id: 8,
    name: "Gudang & Logistik",
    slug: "gudang",
    description: "Tenaga operasional gudang, packing, dan distribusi",
    icon: "Package",
    workerCount: 41,
    sectorId: 1,
    sectorName: "Outsourcing Umum",
  },

  // --- Sektor 2: Kehutanan & Konservasi (baru) ---
  {
    id: 9,
    name: "Kehutanan & Konservasi",
    slug: "kehutanan",
    description:
      "Tenaga profesional untuk pemanfaatan hasil hutan, pemanenan kayu, perlindungan dan konservasi alam, serta rehabilitasi kawasan hutan",
    icon: "Trees",
    workerCount: 24,
    sectorId: 2,
    sectorName: "Kehutanan & Konservasi",
    kbliCode: "02130, 02201, 02401, 02402, 02403, 02404, 02409",
  },

  // --- Sektor 3: Pertambangan & Energi (baru) ---
  {
    id: 10,
    name: "Pertambangan & Energi",
    slug: "pertambangan",
    description:
      "Tenaga kerja untuk aktivitas penunjang pertambangan, penggalian, dan operasional sektor energi",
    icon: "Mountain",
    workerCount: 30,
    sectorId: 3,
    sectorName: "Pertambangan & Energi",
    kbliCode: "09900",
  },

  // --- Sektor 4: Industri & Fabrikasi Logam (baru) ---
  {
    id: 11,
    name: "Industri & Fabrikasi Logam",
    slug: "industri-logam",
    description:
      "Tenaga terampil untuk pengerjaan khusus logam, fabrikasi, pengelasan, pemotongan, dan finishing barang logam",
    icon: "Hammer",
    workerCount: 22,
    sectorId: 4,
    sectorName: "Industri & Fabrikasi Logam",
    kbliCode: "25920",
  },

  // --- Sektor 5: Reparasi, Instalasi & Maintenance sebagian (baru) ---
  {
    id: 12,
    name: "Instalasi Mesin & Peralatan",
    slug: "instalasi-mesin",
    description:
      "Tenaga ahli untuk instalasi, pemasangan, dan commissioning mesin serta peralatan industri",
    icon: "Cog",
    workerCount: 19,
    sectorId: 5,
    sectorName: "Reparasi, Instalasi & Maintenance",
    kbliCode: "33200",
  },

  // --- Sektor 6: Pengelolaan Limbah & Lingkungan (baru) ---
  {
    id: 13,
    name: "Pengelolaan Limbah & Lingkungan",
    slug: "pengelolaan-limbah",
    description:
      "Tenaga profesional untuk pengumpulan, treatment, dan pembuangan limbah cair dan padat, baik berbahaya maupun tidak berbahaya",
    icon: "Recycle",
    workerCount: 17,
    sectorId: 6,
    sectorName: "Pengelolaan Limbah & Lingkungan",
    kbliCode: "37012, 37021, 38110, 38120, 38211",
  },

  // --- Sektor 7: Konstruksi & Bangunan (baru) ---
  {
    id: 14,
    name: "Konstruksi & Bangunan",
    slug: "konstruksi",
    description:
      "Tenaga konstruksi untuk pembangunan gedung hunian, perkantoran, industri, perbelanjaan, kesehatan, dan pendidikan",
    icon: "HardHat",
    workerCount: 35,
    sectorId: 7,
    sectorName: "Konstruksi & Bangunan",
    kbliCode: "41011, 41012, 41013, 41014, 41015, 41016",
  },
];

// Isi categories di setiap sektor secara otomatis
sectors.forEach((sector) => {
  sector.categories = categories.filter((c) => c.sectorId === sector.id);
});

// ══════════════════════════════════════════════
// DATA KEGIATAN USAHA (referensi akta perusahaan Pasal 3)
// ══════════════════════════════════════════════

export const serviceItems: ServiceItem[] = [
  // Sektor 2 — Kehutanan
  {
    id: 1,
    name: "Pemanfaatan Hasil Hutan Bukan Kayu",
    kbliCode: "02130",
    sectorId: 2,
    description:
      "Pengelolaan dan pemanfaatan produk hutan non-kayu seperti rotan, madu, dan getah",
  },
  {
    id: 2,
    name: "Pemanenan Kayu",
    kbliCode: "02201",
    sectorId: 2,
    description:
      "Operasional penebangan dan pemanenan kayu secara legal dan berkelanjutan",
  },
  {
    id: 3,
    name: "Jasa Penggunaan Kawasan Hutan di Luar Sektor Kehutanan",
    kbliCode: "02401",
    sectorId: 2,
    description: "Pengelolaan kawasan hutan untuk kepentingan non-kehutanan",
  },
  {
    id: 4,
    name: "Jasa Perlindungan Hutan dan Konservasi Alam",
    kbliCode: "02402",
    sectorId: 2,
    description:
      "Pengawasan dan perlindungan kawasan hutan serta konservasi biodiversitas",
  },
  {
    id: 5,
    name: "Jasa Rehabilitasi dan Restorasi Kehutanan Sosial",
    kbliCode: "02403",
    sectorId: 2,
    description:
      "Pemulihan dan rehabilitasi kawasan hutan sosial yang terdegradasi",
  },
  {
    id: 6,
    name: "Jasa Kehutanan Bidang Perencanaan Kehutanan",
    kbliCode: "02404",
    sectorId: 2,
    description: "Perencanaan dan tata kelola kawasan hutan secara strategis",
  },
  {
    id: 7,
    name: "Jasa Penunjang Kehutanan Lainnya",
    kbliCode: "02409",
    sectorId: 2,
    description: "Berbagai jasa pendukung operasional kehutanan",
  },

  // Sektor 3 — Pertambangan
  {
    id: 8,
    name: "Aktivitas Penunjang Pertambangan dan Penggalian",
    kbliCode: "09900",
    sectorId: 3,
    description:
      "Tenaga pendukung untuk operasional pertambangan dan penggalian",
  },

  // Sektor 4 — Industri Logam
  {
    id: 9,
    name: "Jasa Industri Pengerjaan Khusus Logam dan Barang dari Logam",
    kbliCode: "25920",
    sectorId: 4,
    description:
      "Pengerjaan fabrikasi, pemotongan, pengelasan, dan finishing logam",
  },

  // Sektor 5 — Reparasi & Instalasi
  {
    id: 10,
    name: "Reparasi Mesin Untuk Keperluan Umum",
    kbliCode: "33121",
    sectorId: 5,
    description: "Perbaikan dan pemeliharaan mesin-mesin keperluan umum",
  },
  {
    id: 11,
    name: "Reparasi Peralatan Listrik Lainnya",
    kbliCode: "33149",
    sectorId: 5,
    description: "Perbaikan peralatan dan instalasi listrik",
  },
  {
    id: 12,
    name: "Instalasi/Pemasangan Mesin dan Peralatan Industri",
    kbliCode: "33200",
    sectorId: 5,
    description:
      "Pemasangan, instalasi, dan commissioning mesin serta peralatan industri",
  },

  // Sektor 6 — Pengelolaan Limbah
  {
    id: 13,
    name: "Pengumpulan Air Limbah Berbahaya",
    kbliCode: "37012",
    sectorId: 6,
    description: "Pengumpulan dan penanganan air limbah berbahaya (B3)",
  },
  {
    id: 14,
    name: "Treatment dan Pembuangan Air Limbah Tidak Berbahaya",
    kbliCode: "37021",
    sectorId: 6,
    description: "Pengolahan dan pembuangan air limbah non-B3 secara aman",
  },
  {
    id: 15,
    name: "Pengumpulan Limbah dan Sampah Tidak Berbahaya",
    kbliCode: "38110",
    sectorId: 6,
    description: "Pengumpulan limbah dan sampah domestik serta non-B3",
  },
  {
    id: 16,
    name: "Pengumpulan Limbah Berbahaya",
    kbliCode: "38120",
    sectorId: 6,
    description: "Pengumpulan dan penanganan limbah berbahaya (B3)",
  },
  {
    id: 17,
    name: "Treatment dan Pembuangan Limbah dan Sampah Tidak Berbahaya",
    kbliCode: "38211",
    sectorId: 6,
    description: "Pengolahan dan pembuangan limbah non-B3 secara aman",
  },

  // Sektor 7 — Konstruksi
  {
    id: 18,
    name: "Konstruksi Gedung Hunian",
    kbliCode: "41011",
    sectorId: 7,
    description: "Pembangunan gedung tempat tinggal dan hunian",
  },
  {
    id: 19,
    name: "Konstruksi Gedung Perkantoran",
    kbliCode: "41012",
    sectorId: 7,
    description: "Pembangunan gedung perkantoran komersial",
  },
  {
    id: 20,
    name: "Konstruksi Gedung Industri",
    kbliCode: "41013",
    sectorId: 7,
    description: "Pembangunan fasilitas dan gedung industri",
  },
  {
    id: 21,
    name: "Konstruksi Gedung Perbelanjaan",
    kbliCode: "41014",
    sectorId: 7,
    description: "Pembangunan pusat perbelanjaan dan retail",
  },
  {
    id: 22,
    name: "Konstruksi Gedung Kesehatan",
    kbliCode: "41015",
    sectorId: 7,
    description: "Pembangunan rumah sakit, klinik, dan fasilitas kesehatan",
  },
  {
    id: 23,
    name: "Konstruksi Gedung Pendidikan",
    kbliCode: "41016",
    sectorId: 7,
    description: "Pembangunan sekolah, universitas, dan fasilitas pendidikan",
  },
];

// ══════════════════════════════════════════════
// DATA SKILLS (16 existing + 12 baru = 28 total)
// ══════════════════════════════════════════════

export const skills: Skill[] = [
  // --- Existing (id 1–16) ---
  { id: 1, name: "Bela Diri", slug: "bela-diri" },
  { id: 2, name: "CCTV Monitoring", slug: "cctv-monitoring" },
  { id: 3, name: "P3K / First Aid", slug: "p3k" },
  { id: 4, name: "Pemadam Kebakaran", slug: "pemadam-kebakaran" },
  { id: 5, name: "Floor Polishing", slug: "floor-polishing" },
  { id: 6, name: "Chemical Handling", slug: "chemical-handling" },
  { id: 7, name: "SIM A", slug: "sim-a" },
  { id: 8, name: "SIM B1", slug: "sim-b1" },
  { id: 9, name: "SIM B2", slug: "sim-b2" },
  { id: 10, name: "Mekanik Mesin", slug: "mekanik-mesin" },
  { id: 11, name: "Kelistrikan", slug: "kelistrikan" },
  { id: 12, name: "AC & Pendingin", slug: "ac-pendingin" },
  { id: 13, name: "Microsoft Office", slug: "microsoft-office" },
  { id: 14, name: "Bahasa Inggris", slug: "bahasa-inggris" },
  { id: 15, name: "Forklift", slug: "forklift" },
  { id: 16, name: "Landscaping", slug: "landscaping" },

  // --- Baru: Kehutanan & Konservasi ---
  { id: 17, name: "Chainsaw Operation", slug: "chainsaw-operation" },
  { id: 18, name: "Silviculture", slug: "silviculture" },
  { id: 19, name: "Konservasi Alam", slug: "konservasi-alam" },

  // --- Baru: Pertambangan ---
  { id: 20, name: "Operator Alat Berat", slug: "operator-alat-berat" },
  { id: 21, name: "K3 Pertambangan", slug: "k3-pertambangan" },

  // --- Baru: Industri Logam ---
  { id: 22, name: "Welding / Las", slug: "welding" },
  { id: 23, name: "Fabrikasi Logam", slug: "fabrikasi-logam" },

  // --- Baru: Instalasi Mesin ---
  { id: 24, name: "Instalasi Mekanikal", slug: "instalasi-mekanikal" },
  { id: 25, name: "Piping / Perpipaan", slug: "piping" },

  // --- Baru: Pengelolaan Limbah ---
  { id: 26, name: "Waste Management", slug: "waste-management" },
  { id: 27, name: "Penanganan B3", slug: "penanganan-b3" },

  // --- Baru: Konstruksi ---
  { id: 28, name: "K3 Konstruksi", slug: "k3-konstruksi" },
  { id: 29, name: "Scaffolding", slug: "scaffolding" },
];

// ══════════════════════════════════════════════
// DATA PEKERJA (12 existing + 6 baru = 18 total)
// ══════════════════════════════════════════════

export const workers: WorkerProfile[] = [
  // --- Existing workers (id 1–12, tetap tidak berubah) ---
  {
    id: 1,
    fullName: "Ahmad Rizki Pratama",
    slug: "ahmad-rizki-pratama",
    photoUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 5,
    dailyRate: 150000,
    rating: 4.8,
    totalProjects: 23,
    bio: "Tenaga keamanan berpengalaman 5 tahun di gedung perkantoran dan perumahan elite. Memiliki sertifikat Gada Pratama dan terampil dalam penanganan situasi darurat.",
    phone: "0812-xxxx-xxxx",
    skills: [skills[0], skills[1], skills[2], skills[3]],
    category: categories[0],
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    fullName: "Siti Nurhaliza",
    slug: "siti-nurhaliza",
    photoUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 3,
    dailyRate: 120000,
    rating: 4.6,
    totalProjects: 18,
    bio: "Tenaga cleaning service profesional dengan keahlian di hotel bintang 4 dan rumah sakit. Teliti, disiplin, dan memahami standar kebersihan internasional.",
    phone: "0813-xxxx-xxxx",
    skills: [skills[4], skills[5]],
    category: categories[1],
    createdAt: "2025-02-20",
  },
  {
    id: 3,
    fullName: "Budi Santoso",
    slug: "budi-santoso",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Gowa",
    availabilityStatus: "busy",
    experienceYears: 8,
    dailyRate: 200000,
    rating: 4.9,
    totalProjects: 45,
    bio: "Driver profesional dengan pengalaman 8 tahun mengemudi kendaraan operasional dan eksekutif. Menguasai rute Sulawesi Selatan dan memiliki SIM A & B1.",
    phone: "0821-xxxx-xxxx",
    skills: [skills[6], skills[7], skills[2]],
    category: categories[2],
    createdAt: "2024-11-10",
  },
  {
    id: 4,
    fullName: "Dewi Anggraini",
    slug: "dewi-anggraini",
    photoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 2,
    dailyRate: 110000,
    rating: 4.5,
    totalProjects: 12,
    bio: "Resepsionis berpengalaman di hotel dan perusahaan korporat. Ramah, komunikatif, dan menguasai bahasa Inggris dasar.",
    phone: "0857-xxxx-xxxx",
    skills: [skills[12], skills[13]],
    category: categories[5],
    createdAt: "2025-03-05",
  },
  {
    id: 5,
    fullName: "Arif Hidayat",
    slug: "arif-hidayat",
    photoUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Maros",
    availabilityStatus: "available",
    experienceYears: 6,
    dailyRate: 175000,
    rating: 4.7,
    totalProjects: 31,
    bio: "Teknisi maintenance berpengalaman untuk gedung perkantoran dan pabrik. Menguasai sistem kelistrikan, AC, dan perawatan mesin.",
    phone: "0852-xxxx-xxxx",
    skills: [skills[9], skills[10], skills[11]],
    category: categories[4],
    createdAt: "2024-12-01",
  },
  {
    id: 6,
    fullName: "Rahmat Fadli",
    slug: "rahmat-fadli",
    photoUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "not_available",
    experienceYears: 4,
    dailyRate: 130000,
    rating: 4.4,
    totalProjects: 20,
    bio: "Office boy berpengalaman di lingkungan kantor. Cekatan, bertanggung jawab, dan terbiasa multitasking dalam operasional harian.",
    phone: "0878-xxxx-xxxx",
    skills: [skills[12], skills[2]],
    category: categories[3],
    createdAt: "2025-01-28",
  },
  {
    id: 7,
    fullName: "Firman Syahputra",
    slug: "firman-syahputra",
    photoUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Gowa",
    availabilityStatus: "available",
    experienceYears: 7,
    dailyRate: 160000,
    rating: 4.8,
    totalProjects: 35,
    bio: "Tenaga gudang dan logistik berpengalaman. Terampil mengoperasikan forklift, memahami sistem FIFO/LIFO, dan berpengalaman di warehouse management.",
    phone: "0822-xxxx-xxxx",
    skills: [skills[14], skills[2]],
    category: categories[7],
    createdAt: "2024-10-15",
  },
  {
    id: 8,
    fullName: "Yusuf Rahman",
    slug: "yusuf-rahman",
    photoUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Takalar",
    availabilityStatus: "available",
    experienceYears: 4,
    dailyRate: 125000,
    rating: 4.3,
    totalProjects: 15,
    bio: "Gardener profesional dengan keahlian landscaping dan perawatan taman. Menguasai teknik pemangkasan, penanaman, dan sistem irigasi taman.",
    phone: "0823-xxxx-xxxx",
    skills: [skills[15]],
    category: categories[6],
    createdAt: "2025-04-12",
  },
  {
    id: 9,
    fullName: "Andi Mappasere",
    slug: "andi-mappasere",
    photoUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 10,
    dailyRate: 250000,
    rating: 5.0,
    totalProjects: 67,
    bio: "Kepala regu keamanan dengan pengalaman 10 tahun di gedung perkantoran kelas A. Bersertifikat Gada Madya, terlatih dalam manajemen krisis dan evakuasi.",
    phone: "0811-xxxx-xxxx",
    skills: [skills[0], skills[1], skills[2], skills[3]],
    category: categories[0],
    createdAt: "2024-06-20",
  },
  {
    id: 10,
    fullName: "Nur Aisyah",
    slug: "nur-aisyah",
    photoUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "busy",
    experienceYears: 3,
    dailyRate: 130000,
    rating: 4.6,
    totalProjects: 16,
    bio: "Cleaning service supervisor berpengalaman mengelola tim kebersihan di hotel dan mall. Detail, terorganisir, dan memahami standar SOP kebersihan.",
    phone: "0856-xxxx-xxxx",
    skills: [skills[4], skills[5], skills[12]],
    category: categories[1],
    createdAt: "2025-02-01",
  },
  {
    id: 11,
    fullName: "Darmawan Putra",
    slug: "darmawan-putra",
    photoUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Pangkep",
    availabilityStatus: "available",
    experienceYears: 5,
    dailyRate: 180000,
    rating: 4.7,
    totalProjects: 28,
    bio: "Driver truk dan kendaraan berat berpengalaman. Memiliki SIM B2 dan terbiasa dengan rute distribusi antar kota di Sulawesi Selatan.",
    phone: "0838-xxxx-xxxx",
    skills: [skills[6], skills[7], skills[8]],
    category: categories[2],
    createdAt: "2025-01-05",
  },
  {
    id: 12,
    fullName: "Putri Ramadhani",
    slug: "putri-ramadhani",
    photoUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 2,
    dailyRate: 115000,
    rating: 4.5,
    totalProjects: 9,
    bio: "Resepsionis muda dan energik dengan kemampuan komunikasi yang baik. Menguasai Microsoft Office dan siap ditempatkan di kantor atau hotel.",
    phone: "0858-xxxx-xxxx",
    skills: [skills[12], skills[13]],
    category: categories[5],
    createdAt: "2025-05-10",
  },

  // --- Pekerja baru untuk kategori baru (id 13–18) ---
  {
    id: 13,
    fullName: "Hendra Wijaya",
    slug: "hendra-wijaya",
    photoUrl:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Bone",
    availabilityStatus: "available",
    experienceYears: 8,
    dailyRate: 200000,
    rating: 4.7,
    totalProjects: 32,
    bio: "Tenaga kehutanan berpengalaman dengan keahlian dalam pemanenan kayu berkelanjutan dan konservasi hutan. Menguasai chainsaw operation dan teknik silviculture modern.",
    phone: "0815-xxxx-xxxx",
    skills: [skills[16], skills[17], skills[18]],
    category: categories[8], // Kehutanan & Konservasi
    createdAt: "2025-06-01",
  },
  {
    id: 14,
    fullName: "Ruslan Mardianto",
    slug: "ruslan-mardianto",
    photoUrl:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Pangkep",
    availabilityStatus: "available",
    experienceYears: 10,
    dailyRate: 275000,
    rating: 4.9,
    totalProjects: 48,
    bio: "Operator alat berat bersertifikat dengan pengalaman 10 tahun di sektor pertambangan. Terlatih K3 pertambangan dan berpengalaman di tambang nikel dan batubara.",
    phone: "0816-xxxx-xxxx",
    skills: [skills[19], skills[20], skills[2]],
    category: categories[9], // Pertambangan & Energi
    createdAt: "2024-09-15",
  },
  {
    id: 15,
    fullName: "Agus Purnomo",
    slug: "agus-purnomo",
    photoUrl:
      "https://images.unsplash.com/photo-1548449112-96a38a643324?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 7,
    dailyRate: 225000,
    rating: 4.8,
    totalProjects: 40,
    bio: "Welder/tukang las bersertifikat 6G dengan pengalaman di fabrikasi baja dan konstruksi berat. Menguasai teknik las SMAW, MIG, dan TIG.",
    phone: "0817-xxxx-xxxx",
    skills: [skills[21], skills[22]],
    category: categories[10], // Industri & Fabrikasi Logam
    createdAt: "2025-02-10",
  },
  {
    id: 16,
    fullName: "Wahyu Kurniawan",
    slug: "wahyu-kurniawan",
    photoUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Maros",
    availabilityStatus: "busy",
    experienceYears: 6,
    dailyRate: 210000,
    rating: 4.6,
    totalProjects: 25,
    bio: "Teknisi instalasi mesin berpengalaman dalam pemasangan dan commissioning mesin industri. Menguasai instalasi mekanikal dan sistem perpipaan.",
    phone: "0818-xxxx-xxxx",
    skills: [skills[23], skills[24], skills[9]],
    category: categories[11], // Instalasi Mesin & Peralatan
    createdAt: "2025-03-20",
  },
  {
    id: 17,
    fullName: "Eko Prasetyo",
    slug: "eko-prasetyo",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Makassar",
    availabilityStatus: "available",
    experienceYears: 5,
    dailyRate: 190000,
    rating: 4.5,
    totalProjects: 22,
    bio: "Spesialis pengelolaan limbah dengan sertifikasi waste management. Berpengalaman dalam penanganan limbah B3+non-B3, treatment air limbah, dan kepatuhan AMDAL.",
    phone: "0819-xxxx-xxxx",
    skills: [skills[25], skills[26], skills[5]],
    category: categories[12], // Pengelolaan Limbah
    createdAt: "2025-04-05",
  },
  {
    id: 18,
    fullName: "Irfan Maulana",
    slug: "irfan-maulana",
    photoUrl:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face&q=80",
    location: "Gowa",
    availabilityStatus: "available",
    experienceYears: 9,
    dailyRate: 250000,
    rating: 4.9,
    totalProjects: 52,
    bio: "Mandor konstruksi berpengalaman 9 tahun di proyek gedung perkantoran dan hunian. Menguasai K3 konstruksi, scaffolding, dan manajemen lapangan.",
    phone: "0820-xxxx-xxxx",
    skills: [skills[27], skills[28], skills[2]],
    category: categories[13], // Konstruksi & Bangunan
    createdAt: "2024-08-01",
  },
];

// ══════════════════════════════════════════════
// KONVERSI UNTUK CARD
// ══════════════════════════════════════════════

export const workerCards: WorkerCardData[] = workers.map((w) => ({
  id: w.id,
  fullName: w.fullName,
  slug: w.slug,
  photoUrl: w.photoUrl,
  location: w.location,
  availabilityStatus: w.availabilityStatus,
  experienceYears: w.experienceYears,
  dailyRate: w.dailyRate,
  rating: w.rating,
  skills: w.skills,
  categoryName: w.category.name,
  sectorSlug: sectors.find((s) => s.id === w.category.sectorId)?.slug,
}));

// ══════════════════════════════════════════════
// STATISTIK WEBSITE (diperbarui)
// ══════════════════════════════════════════════

export const siteStats: SiteStats = {
  totalWorkers: 350,
  totalCategories: 14,
  totalSectors: 7,
  totalLocations: 12,
  totalPlacements: 1450,
};

// ══════════════════════════════════════════════
// TESTIMONIAL (tidak berubah)
// ══════════════════════════════════════════════

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ir. Hasan Basri",
    company: "PT Graha Sulawesi",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
    content:
      "Sangat puas dengan layanan ManPower Supply. Tenaga security yang disediakan profesional, disiplin, dan sudah bersertifikat. Proses rekrutmen juga cepat.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Wijaya",
    company: "Hotel Makassar Grand",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face&q=80",
    content:
      "Kami sudah 2 tahun menggunakan jasa cleaning service dari ManPower Supply. Kualitas kerja konsisten dan tim support sangat responsif.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rudi Hartono",
    company: "CV Logistik Nusantara",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
    content:
      "Driver dan tenaga gudang yang disediakan sangat kompeten. Mereka memahami SOP keselamatan dan bekerja dengan sangat profesional.",
    rating: 4,
  },
];

// ══════════════════════════════════════════════
// DAFTAR LOKASI (tidak berubah)
// ══════════════════════════════════════════════

export const locations: string[] = [
  "Makassar",
  "Gowa",
  "Maros",
  "Takalar",
  "Pangkep",
  "Barru",
  "Bone",
  "Parepare",
  "Pinrang",
  "Bulukumba",
  "Bantaeng",
  "Jeneponto",
];

// ══════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════

/** Mendapatkan data pekerja berdasarkan slug */
export function getWorkerBySlug(slug: string): WorkerProfile | undefined {
  return workers.find((w) => w.slug === slug);
}

/** Mendapatkan data sektor berdasarkan slug */
export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

/** Mendapatkan daftar kegiatan usaha berdasarkan sektor */
export function getServicesBySector(sectorId: number): ServiceItem[] {
  return serviceItems.filter((s) => s.sectorId === sectorId);
}

/** Filter pekerja berdasarkan kategori, lokasi, sektor, dan pencarian */
export function filterWorkers(
  category?: string,
  location?: string,
  search?: string,
  sector?: string,
): WorkerCardData[] {
  let result = workerCards;

  // Filter berdasarkan sektor
  if (sector) {
    const sectorData = sectors.find((s) => s.slug === sector);
    if (sectorData) {
      const categorySlugs = sectorData.categories.map((c) => c.slug);
      result = result.filter((w) => {
        const cat = categories.find((c) => c.name === w.categoryName);
        return cat ? categorySlugs.includes(cat.slug) : false;
      });
    }
  }

  // Filter berdasarkan kategori
  if (category) {
    result = result.filter((w) => {
      const cat = categories.find((c) => c.slug === category);
      return cat ? w.categoryName === cat.name : true;
    });
  }

  // Filter berdasarkan lokasi
  if (location) {
    result = result.filter(
      (w) => w.location.toLowerCase() === location.toLowerCase(),
    );
  }

  // Filter berdasarkan pencarian
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (w) =>
        w.fullName.toLowerCase().includes(q) ||
        w.categoryName.toLowerCase().includes(q) ||
        w.skills.some((s) => s.name.toLowerCase().includes(q)),
    );
  }

  return result;
}
