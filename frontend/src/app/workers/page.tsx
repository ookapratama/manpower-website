/**
 * Halaman Direktori Pekerja — Listing (Light Theme + Animations)
 */
"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, MapPin, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WorkerCard from "@/components/ui/WorkerCard";
import { workers, categories, locations } from "@/lib/dummy-data";

export default function WorkersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) => {
      const matchSearch =
        worker.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.category.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        worker.skills.some((s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchCategory =
        selectedCategory === "all" || worker.category.slug === selectedCategory;
      const matchLocation =
        selectedLocation === "all" || worker.location === selectedLocation;

      return matchSearch && matchCategory && matchLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Halaman */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Cari Tenaga Kerja
            </h1>
            <p className="text-slate-500 font-medium">
              Temukan partner profesional dari total {workers.length} tenaga
              kerja terverifikasi.
            </p>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 sticky top-20 z-30 pt-4 pb-4 bg-slate-50/80 backdrop-blur-md">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama, kategori, atau keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all shadow-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border transition-all font-bold ${
              showFilters
                ? "bg-slate-900 border-slate-900 text-white"
                : "bg-white border-slate-200 text-slate-700"
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filter
          </button>

          <div className="hidden lg:flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-sky-500 font-bold text-sm text-slate-700 shadow-sm cursor-pointer"
            >
              <option value="all">Semua Kategori</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-sky-500 font-bold text-sm text-slate-700 shadow-sm cursor-pointer"
            >
              <option value="all">Semua Lokasi</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mb-10 overflow-hidden bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-xl"
            >
              <div>
                <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">
                  Kategori
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedCategory === "all"
                        ? "bg-sky-600 border-sky-600 text-white shadow-lg"
                        : "bg-slate-50 border-slate-100 text-slate-600"
                    }`}
                  >
                    Semua
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.slug)}
                      className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${
                        selectedCategory === c.slug
                          ? "bg-sky-600 border-sky-600 text-white shadow-lg"
                          : "bg-slate-50 border-slate-100 text-slate-600"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">
                  Lokasi
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-400 font-bold text-sm"
                >
                  <option value="all">Semua Lokasi</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold"
              >
                Terapkan Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Listing Workers with Animations */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900">
              Hasil:{" "}
              <span className="text-sky-600">{filteredWorkers.length}</span>{" "}
              Pekerja
            </h2>
            {(selectedCategory !== "all" ||
              selectedLocation !== "all" ||
              searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLocation("all");
                }}
                className="text-sm font-bold text-red-500 hover:text-red-600 flex items-center gap-1.5"
              >
                <X className="w-4 h-4" /> Reset Semua Filter
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredWorkers.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredWorkers.map((worker) => (
                  <motion.div
                    key={worker.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkerCard
                      worker={{
                        id: worker.id,
                        fullName: worker.fullName,
                        slug: worker.slug,
                        photoUrl: worker.photoUrl,
                        location: worker.location,
                        availabilityStatus: worker.availabilityStatus,
                        experienceYears: worker.experienceYears,
                        dailyRate: worker.dailyRate,
                        rating: worker.rating,
                        skills: worker.skills,
                        categoryName: worker.category.name,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Tidak ada pekerja ditemukan
                </h3>
                <p className="text-slate-500 max-w-xs mx-auto mb-8 font-medium">
                  Coba ubah kriteria pencarian atau reset filter untuk hasil
                  lain.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLocation("all");
                  }}
                  className="px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-500 transition-all shadow-lg shadow-sky-100"
                >
                  Reset Pencarian
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
