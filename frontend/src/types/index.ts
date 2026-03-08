/**
 * Tipe data untuk PT RMR Energi Indonesia Website
 */

// === Layanan Utama (Services) ===
export interface ServiceItem {
  id: number;
  kbliCode: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
}

// === Proyek / Portofolio ===
export interface Project {
  id: number;
  title: string;
  category: string;
  status: "Selesai" | "Dalam Proses" | "Terencana";
  year: string;
  location: string;
  image: string;
  description?: string;
  scope?: string[];
}

// === Tim Ahli / Experts ===
export interface Expert {
  id: number;
  name: string;
  position: string;
  experience: string;
  specialization: string;
  avatar: string;
}

// === Mitra / Partner ===
export interface Partner {
  name: string;
  logoUrl: string;
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
  name: string;
  href: string;
}

// === Statistik Website ===
export interface SiteStats {
  totalProjects: number;
  expertMembers: number;
  clients: number;
  yearsExperience: number;
}
