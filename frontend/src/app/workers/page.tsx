/**
 * Halaman Direktori Pekerja — Listing semua tenaga kerja dengan filter
 */
"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, MapPin, Filter } from "lucide-react";
import WorkerCard from "@/components/ui/WorkerCard";
import { workerCards, categories, locations } from "@/lib/dummy-data";
import { AvailabilityStatus } from "@/types";
import { getAvailabilityLabel } from "@/lib/utils";

export default function WorkersPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<AvailabilityStatus | "">(
    "",
  );
  const [showFilters, setShowFilters] = useState(false);

  const filteredWorkers = useMemo(() => {
    let result = workerCards;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (w) =>
          w.fullName.toLowerCase().includes(q) ||
          w.categoryName.toLowerCase().includes(q) ||
          w.skills.some((s) => s.name.toLowerCase().includes(q)),
      );
    }

    if (selectedCategory) {
      const cat = categories.find((c) => c.slug === selectedCategory);
      if (cat) result = result.filter((w) => w.categoryName === cat.name);
    }

    if (selectedLocation) {
      result = result.filter((w) => w.location === selectedLocation);
    }

    if (selectedStatus) {
      result = result.filter((w) => w.availabilityStatus === selectedStatus);
    }

    return result;
  }, [search, selectedCategory, selectedLocation, selectedStatus]);

  const hasActiveFilters =
    selectedCategory || selectedLocation || selectedStatus;

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedStatus("");
    setSearch("");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-900/50 border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Cari Tenaga Kerja
          </h1>
          <p className="text-slate-400">
            Temukan tenaga kerja profesional sesuai kebutuhan bisnis Anda
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + filter toggle */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama, keahlian, atau kategori..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white rounded-md hover:bg-white/5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border rounded-xl transition-colors ${
              showFilters || hasActiveFilters
                ? "text-sky-400 bg-sky-500/5 border-sky-500/20"
                : "text-slate-400 bg-slate-900/50 border-white/10 hover:border-white/20"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 text-[10px] font-bold bg-sky-500 text-white rounded-full flex items-center justify-center">
                {
                  [selectedCategory, selectedLocation, selectedStatus].filter(
                    Boolean,
                  ).length
                }
              </span>
            )}
          </button>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="mb-6 p-5 bg-slate-900/50 border border-white/5 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Kategori */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500/30 appearance-none"
                >
                  <option value="">Semua Kategori</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lokasi */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Lokasi
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500/30 appearance-none"
                >
                  <option value="">Semua Lokasi</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus(e.target.value as AvailabilityStatus | "")
                  }
                  className="w-full px-3 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500/30 appearance-none"
                >
                  <option value="">Semua Status</option>
                  <option value="available">Tersedia</option>
                  <option value="busy">Sedang Bertugas</option>
                  <option value="not_available">Tidak Tersedia</option>
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {filteredWorkers.length} dari {workerCards.length} tenaga
                  kerja
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-sky-400 hover:text-sky-300 font-medium"
                >
                  Hapus semua filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* Result count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Menampilkan{" "}
            <span className="text-white font-semibold">
              {filteredWorkers.length}
            </span>{" "}
            tenaga kerja
          </p>
        </div>

        {/* Workers grid */}
        {filteredWorkers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-slate-900/50 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Coba ubah kata kunci pencarian atau filter yang digunakan
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-lg hover:bg-sky-500/10 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
