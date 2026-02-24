/**
 * Halaman Utama — Landing page (Light Theme + Animations)
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Users,
  Building2,
  MapPin,
  Award,
  CheckCircle2,
  Star,
  ChevronRight,
  Shield,
  Sparkles,
  Phone,
} from "lucide-react";
import CategoryCard from "@/components/ui/CategoryCard";
import WorkerCard from "@/components/ui/WorkerCard";
import {
  categories,
  workerCards,
  siteStats,
  testimonials,
} from "@/lib/dummy-data";

export default function HomePage() {
  const featuredWorkers = workerCards
    .filter((w) => w.availabilityStatus === "available")
    .slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-32 lg:pt-28 pb-16 lg:pb-20 bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50/50 -z-10 skew-x-[-12deg] translate-x-1/4 hidden lg:block" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Column: Text & Search (Order 1 on all sizes for better UX) */}
            <div className="text-center lg:text-left order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 lg:mb-8 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Solusi Outsourcing No. 1 di Sulawesi
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] mb-6 lg:mb-8 text-slate-900"
              >
                Partner Kerja <br className="hidden lg:block" />
                <span className="text-gradient">Profesional</span> Anda
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-12 leading-relaxed font-medium"
              >
                Temukan ribuan tenaga kerja berpengalaman yang siap mendukung
                kemajuan bisnis Anda. Cepat, Terverifikasi, dan Berasuransi.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10"
              >
                <div className="flex flex-col sm:flex-row items-center bg-white border border-slate-200 rounded-[2rem] p-1.5 shadow-xl shadow-slate-200/50 focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-50 transition-all gap-2">
                  <div className="flex items-center flex-1 w-full gap-3 px-5">
                    <Search className="w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari keahlian (Satpam, Driver...)"
                      className="flex-1 bg-transparent py-4 text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                  <Link
                    href="/workers"
                    className="w-full sm:w-auto px-8 py-4 text-sm font-black text-white bg-sky-600 rounded-2xl hover:bg-sky-500 transition-all shadow-lg shadow-sky-100 active:scale-95"
                  >
                    Cari Sekarang
                  </Link>
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1">
                  Populer:
                </span>
                {["Security", "Cleaning", "Driver"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/workers?search=${tag}`}
                    className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold hover:bg-sky-50 hover:text-sky-600 transition-colors border border-slate-100"
                  >
                    {tag}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Column: Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative order-2 hidden sm:block"
            >
              <div className="relative z-10 w-full aspect-square lg:aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-sky-100 border-4 lg:border-8 border-white group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="ManPower Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

                {/* Floating Info Card */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 p-5 lg:p-7 bg-white/95 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-base font-black text-slate-900">
                        Terpercaya & Berizin
                      </div>
                      <div className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-wider">
                        Izin Resmi Ketenagakerjaan RI
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full -z-10 blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-100 rounded-full -z-10 blur-[80px] opacity-40" />
            </motion.div>
          </div>
        </div>

        {/* Stats Moved Below Hero Content locally */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                label: "Tenaga Kerja",
                value: `${siteStats.totalWorkers}+`,
                icon: Users,
              },
              {
                label: "Penempatan",
                value: `${siteStats.totalPlacements}+`,
                icon: Building2,
              },
              {
                label: "Wilayah",
                value: siteStats.totalLocations,
                icon: MapPin,
              },
              { label: "Kepuasan", value: "98%", icon: Award },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-6 h-6 text-sky-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-slate-900 uppercase">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== KATEGORI SECTION ==================== */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.2em] mb-3">
                Layanan Spesialis
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                Pilih Kategori <br /> Sesuai Bisnis Anda
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 max-w-md font-medium"
            >
              Setiap kategori dikelola oleh tenaga kerja bersertifikat yang
              telah melewati proses seleksi internal secara ketat.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== PEKERJA UNGGULAN ==================== */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[100px] -z-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
                Pekerja Unggulan
              </h2>
              <p className="text-slate-500 font-medium">
                Rating tertinggi dan paling banyak disukai klien
              </p>
            </motion.div>
            <Link
              href="/workers"
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group"
            >
              Lihat Semua Tenaga Kerja
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredWorkers.map((worker) => (
              <motion.div key={worker.id} variants={itemVariants}>
                <WorkerCard worker={worker} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIAL ==================== */}
      <section className="py-32 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 text-white">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black mb-6"
            >
              Kisah Sukses <span className="text-sky-400">Klien</span> Kami
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, st) => (
                    <Star
                      key={st}
                      className={`w-4 h-4 ${st < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-600"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed text-lg">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                      {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-gradient-to-br from-sky-600 to-blue-700 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-grid" />

            <h2 className="text-4xl sm:text-6xl font-black mb-8 relative z-10">
              Siap Mengembangkan <br /> Bisnis Anda?
            </h2>
            <p className="text-xl text-sky-50 mb-12 relative z-10 max-w-xl mx-auto font-medium">
              Konsultasikan kebutuhan tenaga kerja Anda secara gratis dengan tim
              ahli kami.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-sky-600 font-black text-lg rounded-2xl hover:shadow-2xl hover:shadow-sky-800/20 active:scale-95 transition-all"
              >
                Mulai Berkerjasama
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-10 py-5 bg-sky-700/50 border border-sky-400/30 text-white font-bold text-lg rounded-2xl hover:bg-sky-700 transition-all"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
