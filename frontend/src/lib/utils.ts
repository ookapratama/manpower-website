import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getAvailabilityLabel(status: string) {
  switch (status) {
    case "available":
      return "Siap Kerja";
    case "busy":
      return "Sedang Bekerja";
    case "off":
      return "Tidak Tersedia";
    default:
      return status;
  }
}
