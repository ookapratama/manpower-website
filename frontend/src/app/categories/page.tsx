/**
 * Halaman Kategori — Daftar semua kategori tenaga kerja
 */
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/lib/dummy-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategori Tenaga Kerja",
  description:
    "Jelajahi berbagai kategori tenaga kerja profesional: security, cleaning service, driver, teknisi, dan banyak lagi.",
};

export default function CategoriesPage() {
  const totalWorkers = categories.reduce((sum, c) => sum + c.workerCount, 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-900/50 border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
            {categories.length} Kategori • {totalWorkers}+ Tenaga Kerja
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Kategori Tenaga Kerja
          </h1>
          <p className="text-slate-400 max-w-xl">
            Pilih kategori untuk menemukan tenaga kerja profesional sesuai
            kebutuhan bisnis Anda
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
