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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A0A00]">
        {/* Left Background Grain Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-grid lg:w-1/2" />
        <div className="absolute inset-0 z-0 pointer-events-none noise-bg lg:w-1/2" />

        <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch">
          {/* Left Column: Content */}
          <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-16 xl:px-24 py-32 lg:py-20 z-10">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#DC2626]/20 border border-[#DC2626]/30 text-[#F97316] text-xs font-black uppercase tracking-widest shadow-lg shadow-red-950/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                Platform ManPower #1 di Indonesia
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-white"
              >
                Temukan Tenaga Kerja <br className="hidden sm:block" />
                <span className="text-gradient">Profesional</span> & Terpercaya
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-medium"
              >
                Solusi outsourcing tercepat untuk kebutuhan bisnis Anda.{" "}
                <br className="hidden lg:block" />
                Siap kerja, terverifikasi, dan berpengalaman di bidangnya.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
              >
                <Link
                  href="/workers"
                  className="w-full sm:w-auto px-10 py-5 bg-[#DC2626] text-white font-black rounded-2xl hover:bg-[#B91C1C] transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 active:scale-95 group"
                >
                  Cari Tenaga Kerja
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center active:scale-95"
                >
                  Daftar Sebagai Pekerja
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10 pt-10 border-t border-white/10"
              >
                {[
                  { value: "500+", label: "Pekerja" },
                  { value: "50+", label: "Kategori" },
                  { value: "100+", label: "Perusahaan" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    {i > 0 && (
                      <div className="hidden sm:block w-px h-8 bg-white/10" />
                    )}
                    <div className="text-left">
                      <div className="text-2xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Image Background with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative min-h-[50vh] lg:min-h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop"
              alt="Professional Worker"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient to blend with Left Column */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A00] via-[#1A0A00]/40 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00] via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>
      </section>

      {/* ==================== KATEGORI SECTION ==================== */}
      <section className="py-32 bg-[#FFF7F5] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-[#EA580C] uppercase tracking-[0.3em] mb-4">
                Layanan Spesialis
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C0A00] leading-tight tracking-tighter">
                Pilih Kategori <br className="hidden sm:block" /> Sesuai
                Kebutuhan
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#78350F]/70 max-w-md font-bold text-lg leading-relaxed"
            >
              Tenaga kerja kami telah melewati verifikasi standar tinggi untuk
              menjamin kualitas terbaik bagi operasional bisnis Anda.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-20 gap-8 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C0A00] tracking-tighter mb-4">
                Tenaga Kerja <span className="text-gradient">Terbaik</span>
              </h2>
              <p className="text-[#78350F]/60 font-bold text-lg">
                Rating tertinggi dan profil paling banyak dipilih oleh mitra
                perusahaan.
              </p>
            </motion.div>
            <Link
              href="/workers"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FFF7F5] border border-[#FED7AA] text-[#EA580C] font-black text-sm hover:bg-[#EA580C] hover:text-white transition-all duration-300"
            >
              Lihat Semua
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
      <section className="py-32 bg-[#1A0A00] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 noise-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-[#DC2626] uppercase tracking-[0.4em] mb-6">
                Success Stories
              </h2>
              <h3 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
                Kepercayaan <span className="text-gradient">Mitra</span> Kami
              </h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: 5 }).map((_, st) => (
                    <Star
                      key={st}
                      className={`w-5 h-5 ${st < t.rating ? "text-[#F97316] fill-[#F97316]" : "text-white/10"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-12 leading-relaxed text-xl font-medium">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#DC2626]/50 transition-colors">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">
                      {t.name}
                    </div>
                    <div className="text-xs font-black text-[#DC2626] uppercase tracking-widest mt-0.5">
                      {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-40 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 sm:p-24 rounded-[4rem] bg-gradient-to-br from-[#1A0A00] to-[#2D1200] text-white relative overflow-hidden shadow-2xl shadow-red-900/10"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none noise-bg" />
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#DC2626]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#F97316]/10 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-7xl font-black mb-10 tracking-tighter leading-[1] text-white">
                Siap Melangkah Lebih <br />{" "}
                <span className="text-gradient">Profesional?</span>
              </h2>
              <p className="text-xl sm:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                Konsultasikan kebutuhan outsourcing Anda dan dapatkan penawaran
                terbaik hari ini.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-12 py-6 bg-[#DC2626] text-white font-black text-xl rounded-2xl hover:bg-[#B91C1C] active:scale-95 transition-all shadow-xl shadow-red-900/40"
                >
                  Minta Penawaran Gratis
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-12 py-6 bg-white/5 border-2 border-white/10 text-white font-black text-xl rounded-2xl hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Tentang Kami
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
