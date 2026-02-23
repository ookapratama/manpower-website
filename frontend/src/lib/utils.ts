/**
 * Fungsi utilitas umum
 */

import { clsx, type ClassValue } from "clsx";

/** Gabungkan class names dengan clsx */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format angka ke format Rupiah */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format angka besar ke format singkat (1.450 → 1,4K) */
export function formatNumber(num: number): string {
  if (num >= 1000) {
    return new Intl.NumberFormat("id-ID", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  }
  return num.toString();
}

/** Label status ketersediaan dalam Bahasa Indonesia */
export function getAvailabilityLabel(status: string): string {
  const labels: Record<string, string> = {
    available: "Tersedia",
    busy: "Sedang Bertugas",
    not_available: "Tidak Tersedia",
  };
  return labels[status] || status;
}

/** Warna status ketersediaan */
export function getAvailabilityColor(status: string): string {
  const colors: Record<string, string> = {
    available: "bg-emerald-500",
    busy: "bg-amber-500",
    not_available: "bg-red-500",
  };
  return colors[status] || "bg-gray-500";
}

/** Warna badge status ketersediaan (dengan background lighter) */
export function getAvailabilityBadgeClasses(status: string): string {
  const classes: Record<string, string> = {
    available: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    busy: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    not_available: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return classes[status] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
}

/** Render bintang rating (mengembalikan array boolean) */
export function getStarArray(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
}

/** Truncate teks panjang */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
