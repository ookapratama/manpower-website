/**
 * Tipe data untuk ManPower Supply Website
 * Semua interface dan type definitions terpusat di sini
 */

// === Status Ketersediaan Pekerja ===
export type AvailabilityStatus = "available" | "busy" | "not_available";

// === Sektor Bisnis (Parent dari Kategori) ===
export interface Sector {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  categories: Category[];
}

// === Kategori Pekerjaan ===
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  workerCount: number;
  kbliCode?: string;
  sectorId?: number;
  sectorName?: string;
}

// === Kegiatan Usaha Detail (referensi akta perusahaan) ===
export interface ServiceItem {
  id: number;
  name: string;
  kbliCode: string;
  sectorId: number;
  description: string;
}

// === Keahlian / Skill ===
export interface Skill {
  id: number;
  name: string;
  slug: string;
}

// === Profil Pekerja ===
export interface WorkerProfile {
  id: number;
  fullName: string;
  slug: string;
  photoUrl: string;
  location: string;
  availabilityStatus: AvailabilityStatus;
  experienceYears: number;
  dailyRate: number;
  rating: number;
  totalProjects: number;
  bio: string;
  phone: string;
  skills: Skill[];
  category: Category;
  createdAt: string;
}

// === Card Worker (untuk list) ===
export interface WorkerCardData {
  id: number;
  fullName: string;
  slug: string;
  photoUrl: string;
  location: string;
  availabilityStatus: AvailabilityStatus;
  experienceYears: number;
  dailyRate: number;
  rating: number;
  skills: Skill[];
  categoryName: string;
  sectorSlug?: string;
}

// === Filter Options ===
export interface FilterOptions {
  search: string;
  category: string;
  location: string;
  availability: AvailabilityStatus | "";
  minExperience: number;
  maxRate: number;
  sortBy: "rating" | "experience" | "rate_low" | "rate_high" | "newest";
}

// === Statistik Website ===
export interface SiteStats {
  totalWorkers: number;
  totalCategories: number;
  totalSectors: number;
  totalLocations: number;
  totalPlacements: number;
}

// === Testimonial ===
export interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// === Navigasi ===
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}
