/**
 * Data dummy untuk ManPower Supply Website
 * Data ini akan diganti dengan API call ke Laravel backend nanti
 */

import {
  Category,
  WorkerProfile,
  WorkerCardData,
  SiteStats,
  Testimonial,
  Skill,
} from "@/types";

// === Data Kategori ===
export const categories: Category[] = [
  {
    id: 1,
    name: "Security & Satpam",
    slug: "security",
    description:
      "Tenaga keamanan profesional untuk gedung, pabrik, dan perumahan",
    icon: "Shield",
    workerCount: 45,
  },
  {
    id: 2,
    name: "Cleaning Service",
    slug: "cleaning-service",
    description: "Tenaga kebersihan untuk kantor, hotel, rumah sakit, dan mall",
    icon: "Sparkles",
    workerCount: 62,
  },
  {
    id: 3,
    name: "Driver & Pengemudi",
    slug: "driver",
    description: "Pengemudi profesional untuk operasional dan eksekutif",
    icon: "Car",
    workerCount: 38,
  },
  {
    id: 4,
    name: "Office Boy / Girl",
    slug: "office-boy",
    description: "Tenaga pendukung operasional kantor sehari-hari",
    icon: "Coffee",
    workerCount: 29,
  },
  {
    id: 5,
    name: "Teknisi & Maintenance",
    slug: "teknisi",
    description: "Tenaga teknis untuk perawatan gedung, mesin, dan listrik",
    icon: "Wrench",
    workerCount: 33,
  },
  {
    id: 6,
    name: "Resepsionis & Front Office",
    slug: "resepsionis",
    description: "Tenaga penerima tamu profesional untuk perusahaan dan hotel",
    icon: "UserCheck",
    workerCount: 21,
  },
  {
    id: 7,
    name: "Gardener & Taman",
    slug: "gardener",
    description: "Tenaga perawatan taman dan landscaping profesional",
    icon: "TreePine",
    workerCount: 18,
  },
  {
    id: 8,
    name: "Gudang & Logistik",
    slug: "gudang",
    description: "Tenaga operasional gudang, packing, dan distribusi",
    icon: "Package",
    workerCount: 41,
  },
];

// === Data Skills ===
export const skills: Skill[] = [
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
];

// === Data Pekerja ===
export const workers: WorkerProfile[] = [
  {
    id: 1,
    fullName: "Ahmad Rizki Pratama",
    slug: "ahmad-rizki-pratama",
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
    photoUrl: "/api/placeholder/300/300",
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
];

// === Konversi untuk Card ===
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
}));

// === Statistik Website ===
export const siteStats: SiteStats = {
  totalWorkers: 287,
  totalCategories: 8,
  totalLocations: 12,
  totalPlacements: 1450,
};

// === Testimonial ===
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ir. Hasan Basri",
    company: "PT Graha Sulawesi",
    avatar: "/api/placeholder/80/80",
    content:
      "Sangat puas dengan layanan ManPower Supply. Tenaga security yang disediakan profesional, disiplin, dan sudah bersertifikat. Proses rekrutmen juga cepat.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Wijaya",
    company: "Hotel Makassar Grand",
    avatar: "/api/placeholder/80/80",
    content:
      "Kami sudah 2 tahun menggunakan jasa cleaning service dari ManPower Supply. Kualitas kerja konsisten dan tim support sangat responsif.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rudi Hartono",
    company: "CV Logistik Nusantara",
    avatar: "/api/placeholder/80/80",
    content:
      "Driver dan tenaga gudang yang disediakan sangat kompeten. Mereka memahami SOP keselamatan dan bekerja dengan sangat profesional.",
    rating: 4,
  },
];

// === Daftar Lokasi ===
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

// === Helper untuk mendapatkan worker berdasarkan slug ===
export function getWorkerBySlug(slug: string): WorkerProfile | undefined {
  return workers.find((w) => w.slug === slug);
}

// === Helper untuk filter workers ===
export function filterWorkers(
  category?: string,
  location?: string,
  search?: string,
): WorkerCardData[] {
  let result = workerCards;

  if (category) {
    result = result.filter((w) => {
      const cat = categories.find((c) => c.slug === category);
      return cat ? w.categoryName === cat.name : true;
    });
  }

  if (location) {
    result = result.filter(
      (w) => w.location.toLowerCase() === location.toLowerCase(),
    );
  }

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
