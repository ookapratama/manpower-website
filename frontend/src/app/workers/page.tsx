/**
 * Halaman Direktori Pekerja — Listing (Light Theme + Animations)
 */
"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, MapPin, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <div className="min-h-screen bg-[#FFF7F5] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Halaman */}
        <div className="mb-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-5xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
              Direktori <span className="text-gradient">Tenaga Kerja</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#78350F]/70 max-w-2xl mx-auto leading-relaxed font-bold">
              Temukan partner profesional dari total {workers.length} tenaga
              kerja terverifikasi yang siap mendukung operasional bisnis Anda.
            </p>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 sticky top-24 z-30 pt-4 pb-4 bg-[#FFF7F5]/90 backdrop-blur-xl">
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#78350F]/40 group-focus-within:text-[#EA580C] transition-colors" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama, kategori, atau keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-[#FED7AA]/50 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:ring-4 focus:ring-[#EA580C]/10 transition-all shadow-xl shadow-red-900/5 font-medium text-base text-[#1C0A00]"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 transition-all font-black text-sm ${
              showFilters
                ? "bg-[#1C0A00] border-[#1C0A00] text-white"
                : "bg-white border-[#FED7AA]/50 text-[#1C0A00] shadow-xl shadow-red-900/5"
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filter
          </button>

          <div className="hidden lg:flex gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="px-6 py-7 bg-white border border-[#FED7AA]/50 rounded-2xl focus:ring-4 focus:ring-[#EA580C]/10 font-black text-xs text-[#1C0A00] shadow-xl shadow-red-900/5 cursor-pointer appearance-none min-w-[200px] h-auto">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#FED7AA]/50 rounded-xl font-bold text-[#1C0A00]">
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c.id} value={c.slug}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="px-6 py-7 bg-white border border-[#FED7AA]/50 rounded-2xl focus:ring-4 focus:ring-[#EA580C]/10 font-black text-xs text-[#1C0A00] shadow-xl shadow-red-900/5 cursor-pointer appearance-none min-w-[200px] h-auto">
                <SelectValue placeholder="Pilih Lokasi" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#FED7AA]/50 rounded-xl font-bold text-[#1C0A00]">
                <SelectItem value="all">Semua Lokasi</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.3 }}
              className="lg:hidden mb-12 overflow-hidden bg-[#1A0A00] border border-white/5 rounded-3xl p-8 space-y-8 shadow-2xl shadow-red-900/10 text-white"
            >
              <div>
                <label className="block text-xs font-black text-[#EA580C] mb-5 uppercase tracking-[0.3em]">
                  Pilih Kategori
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-4 rounded-2xl text-xs font-black border-2 transition-all ${
                      selectedCategory === "all"
                        ? "bg-[#DC2626] border-[#DC2626] text-white shadow-xl shadow-red-900/20"
                        : "bg-[#FFF7F5] border-[#FED7AA]/30 text-[#78350F]"
                    }`}
                  >
                    Semua
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.slug)}
                      className={`px-4 py-4 rounded-2xl text-xs font-black border-2 transition-all ${
                        selectedCategory === c.slug
                          ? "bg-[#DC2626] border-[#DC2626] text-white shadow-xl shadow-red-900/20"
                          : "bg-[#FFF7F5] border-[#FED7AA]/30 text-[#78350F]"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-[#FED7AA]/20">
                <label className="block text-xs font-black text-[#EA580C] mb-5 uppercase tracking-[0.3em]">
                  Filter Lokasi
                </label>
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger className="w-full px-6 py-7 bg-[#FFF7F5] border-2 border-[#FED7AA]/30 rounded-2xl focus:ring-4 focus:ring-[#EA580C]/10 font-black text-sm text-[#1C0A00] h-auto">
                    <SelectValue placeholder="Semua Lokasi" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#FED7AA]/50 rounded-xl font-bold text-[#1C0A00]">
                    <SelectItem value="all">Semua Lokasi</SelectItem>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-5 bg-[#1C0A00] text-white rounded-[2rem] font-black text-lg transition-all active:scale-95"
              >
                Terapkan Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Listing Workers with Animations */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <h2 className="text-xl font-black text-[#1C0A00]">
              Hasil:{" "}
              <span className="text-[#EA580C]">{filteredWorkers.length}</span>{" "}
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
                className="text-sm font-black text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-2 px-6 py-3 bg-[#DC2626]/5 rounded-xl transition-all"
              >
                <X className="w-4 h-4" /> Reset Semua Filter
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredWorkers.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredWorkers.map((worker) => (
                  <motion.div
                    key={worker.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
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
                className="py-40 text-center"
              >
                <div className="w-24 h-24 bg-white border border-[#FED7AA]/30 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-900/5">
                  <Filter className="w-10 h-10 text-[#EA580C]/30" />
                </div>
                <h3 className="text-2xl font-black text-[#1C0A00] mb-3">
                  Pekerja Tidak Ditemukan
                </h3>
                <p className="text-[#78350F]/60 max-w-xs mx-auto mb-10 font-bold text-lg">
                  Coba ubah kriteria pencarian atau reset filter untuk menemukan
                  talenta lainnya.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLocation("all");
                  }}
                  className="px-12 py-5 bg-[#DC2626] text-white font-black rounded-2xl hover:bg-[#B91C1C] transition-all shadow-xl shadow-red-900/20 active:scale-95"
                >
                  Bersihkan Pencarian
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
