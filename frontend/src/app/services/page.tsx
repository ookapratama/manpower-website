/**
 * Halaman Layanan — Daftar lengkap sektor bisnis & kegiatan usaha
 * Menampilkan semua kegiatan usaha resmi berdasarkan akta perusahaan (Pasal 3)
 *
 * Dibuat: 2026-03-04
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Trees,
  Mountain,
  Hammer,
  Wrench,
  Recycle,
  HardHat,
  LucideIcon,
  ArrowRight,
  Layers,
  CheckCircle2,
  FileText,
  Phone,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";
import {
  sectors,
  serviceItems,
  getServicesBySector,
  siteStats,
} from "@/lib/dummy-data";

/** Pemetaan nama icon ke komponen Lucide */
const sectorIconMap: Record<string, LucideIcon> = {
  Users,
  Trees,
  Mountain,
  Hammer,
  Wrench,
  Recycle,
  HardHat,
};

/** Warna aksen per sektor untuk variasi visual */
const sectorColors: Record<
  number,
  { accent: string; bg: string; border: string }
> = {
  1: {
    accent: "text-[#DC2626]",
    bg: "bg-[#DC2626]/5",
    border: "border-[#DC2626]/10",
  },
  2: {
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200/30",
  },
  3: {
    accent: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200/30",
  },
  4: {
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200/30",
  },
  5: {
    accent: "text-[#EA580C]",
    bg: "bg-[#EA580C]/5",
    border: "border-[#EA580C]/10",
  },
  6: {
    accent: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200/30",
  },
  7: {
    accent: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200/30",
  },
};

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#FFF7F5] selection:bg-[#DC2626]/10 selection:text-[#DC2626]">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#1C0A00]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#EA580C]/15 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DC2626]/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 opacity-40" />
          <div className="absolute inset-0 noise-bg opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md">
              <FileText className="w-4 h-4 text-[#EA580C]" />
              Kegiatan Usaha Resmi
            </div>

            <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
              Layanan <br />
              <span className="text-gradient">Komprehensif</span> <br />
              Kami.
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight mb-12">
              Seluruh kegiatan usaha kami tercatat resmi dalam akta perusahaan
              dan dilengkapi dengan kode KBLI (Klasifikasi Baku Lapangan Usaha
              Indonesia) sebagai jaminan legalitas dan profesionalisme.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
              {[
                { value: `${siteStats.totalSectors}`, label: "Sektor Bisnis" },
                { value: "23+", label: "Kegiatan Usaha" },
                { value: `${siteStats.totalCategories}`, label: "Kategori" },
                { value: "100%", label: "Legal & Resmi" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#EA580C] tracking-tighter mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== DAFTAR SEKTOR & KEGIATAN USAHA ==================== */}
      <section className="py-24 bg-[#FFF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="w-20 h-1 bg-[#DC2626] mb-8 rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-5xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
              Sektor <span className="text-gradient">Bisnis</span> Kami
            </h2>
            <p className="text-[#78350F]/60 max-w-2xl mx-auto font-bold text-lg sm:text-xl tracking-tight leading-relaxed">
              Tujuh sektor strategis yang mencakup kebutuhan tenaga kerja dari
              berbagai industri di Indonesia.
            </p>
          </motion.div>

          {/* Sektor Cards */}
          <div className="space-y-16">
            {sectors.map((sector, sectorIndex) => {
              const SectorIcon = sectorIconMap[sector.icon] || Layers;
              const services = getServicesBySector(sector.id);
              const colors = sectorColors[sector.id] || sectorColors[1];
              const totalWorkers = sector.categories.reduce(
                (sum, c) => sum + c.workerCount,
                0,
              );

              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectorIndex * 0.05 }}
                  id={sector.slug}
                  className="scroll-mt-28"
                >
                  {/* Sektor Card */}
                  <div className="bg-white border border-[#FED7AA]/30 rounded-3xl overflow-hidden shadow-xl shadow-red-900/3 hover:shadow-red-900/8 transition-all duration-500">
                    {/* Sektor Header */}
                    <div className="p-8 sm:p-12 bg-[#1C0A00] text-white relative overflow-hidden">
                      <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
                      <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[150%] bg-[#EA580C]/10 rounded-full blur-[100px]" />

                      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                          <div
                            className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center shadow-lg shrink-0`}
                          >
                            <SectorIcon
                              className={`w-8 h-8 ${colors.accent}`}
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none mb-2">
                              {sector.name}
                            </h3>
                            <p className="text-white/50 font-bold text-sm leading-relaxed max-w-lg">
                              {sector.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-6 shrink-0">
                          <div className="text-center px-4">
                            <div className="text-2xl font-black text-[#EA580C] tracking-tighter">
                              {sector.categories.length}
                            </div>
                            <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                              Kategori
                            </div>
                          </div>
                          {services.length > 0 && (
                            <div className="text-center px-4">
                              <div className="text-2xl font-black text-[#EA580C] tracking-tighter">
                                {services.length}
                              </div>
                              <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                                Kegiatan
                              </div>
                            </div>
                          )}
                          <div className="text-center px-4">
                            <div className="text-2xl font-black text-[#EA580C] tracking-tighter">
                              {totalWorkers}
                            </div>
                            <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                              Tenaga Kerja
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Kegiatan Usaha (jika ada dari akta) */}
                    {services.length > 0 && (
                      <div className="p-8 sm:p-12 border-b border-[#FED7AA]/15">
                        <div className="flex items-center gap-3 mb-8">
                          <FileText className="w-5 h-5 text-[#EA580C]" />
                          <h4 className="text-lg font-black text-[#1C0A00] tracking-tight">
                            Kegiatan Usaha Resmi
                          </h4>
                          <span className="text-[9px] font-black text-[#78350F]/40 uppercase tracking-widest">
                            (Kode KBLI)
                          </span>
                        </div>

                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="grid sm:grid-cols-2 gap-4"
                        >
                          {services.map((service) => (
                            <motion.div
                              key={service.id}
                              variants={itemVariants}
                              className={`flex items-start gap-4 p-4 rounded-2xl ${colors.bg} border ${colors.border} hover:shadow-md transition-all duration-300`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <CheckCircle2
                                  className={`w-4 h-4 ${colors.accent}`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-black text-[#1C0A00] text-sm leading-snug mb-1">
                                  {service.name}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-black text-[#78350F]/40 uppercase tracking-widest bg-white px-2 py-0.5 rounded">
                                    KBLI {service.kbliCode}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    )}

                    {/* Kategori yang tersedia */}
                    <div className="p-8 sm:p-12">
                      <div className="flex items-center gap-3 mb-8">
                        <Layers className="w-5 h-5 text-[#EA580C]" />
                        <h4 className="text-lg font-black text-[#1C0A00] tracking-tight">
                          Kategori Tenaga Kerja
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {sector.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/workers?category=${cat.slug}`}
                            className="group flex items-center gap-3 px-5 py-3 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl hover:border-[#EA580C]/40 hover:bg-white hover:shadow-lg transition-all duration-300"
                          >
                            <span className="font-bold text-sm text-[#1C0A00] group-hover:text-[#DC2626] transition-colors">
                              {cat.name}
                            </span>
                            <span className="text-[9px] font-black text-[#EA580C] bg-[#EA580C]/5 px-2 py-1 rounded-full border border-[#EA580C]/10">
                              {cat.workerCount}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#78350F]/30 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== KEUNGGULAN SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
              Mengapa Memilih{" "}
              <span className="text-gradient">Layanan Kami?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                icon: Shield,
                title: "Legalitas Terjamin",
                desc: "Semua kegiatan usaha tercatat resmi dalam akta perusahaan dengan kode KBLI yang sah.",
              },
              {
                icon: Award,
                title: "Tenaga Terverifikasi",
                desc: "Setiap tenaga kerja melalui proses seleksi ketat dan verifikasi sertifikasi kompetensi.",
              },
              {
                icon: Sparkles,
                title: "Multi-Sektor",
                desc: "Dari outsourcing umum hingga konstruksi, pertambangan, dan pengelolaan limbah — semua tersedia.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-10 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-3xl hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1C0A00] text-[#EA580C] flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-[#1C0A00] mb-4 tracking-tight group-hover:text-[#DC2626] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#78350F]/60 leading-relaxed font-bold">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-32 bg-[#FFF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 sm:p-20 bg-[#1C0A00] rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-red-900/20"
          >
            <div className="absolute inset-0 noise-bg opacity-15 pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-3/4 h-3/4 bg-[#DC2626]/15 rounded-full blur-[160px]" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-12 backdrop-blur-xl">
                <Phone className="w-10 h-10 text-[#DC2626]" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tight leading-none">
                Butuh Tenaga Kerja <br />
                <span className="text-gradient">Profesional?</span>
              </h2>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
                Konsultasikan kebutuhan tenaga kerja Anda di semua sektor
                bisnis. Tim kami siap membantu menyusun solusi terbaik yang
                disesuaikan dengan spesifikasi proyek Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-[#DC2626] text-white font-black text-lg rounded-2xl hover:bg-[#B91C1C] transition-all shadow-[0_25px_60px_-15px_rgba(220,38,38,0.5)] active:scale-95 flex items-center justify-center gap-3"
                >
                  Hubungi Kami Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/categories"
                  className="px-12 py-6 bg-white/5 border-2 border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-md"
                >
                  Lihat Kategori
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
