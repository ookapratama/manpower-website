/**
 * Halaman Utama — Landing page (Light Theme + Animations)
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
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
  Zap,
  Globe,
  Briefcase,
  Play,
} from "lucide-react";
import CategoryCard from "@/components/ui/CategoryCard";
import WorkerCard from "@/components/ui/WorkerCard";
import {
  categories,
  workerCards,
  siteStats,
  testimonials,
} from "@/lib/dummy-data";
import React, { useRef } from "react";

export default function HomePage() {
  const featuredWorkers = workerCards
    .filter((w) => w.availabilityStatus === "available")
    .slice(0, 6);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#FFF7F5] selection:bg-[#DC2626]/10 selection:text-[#DC2626]">
      {/* ==================== HERO SECTION ==================== */}
      <section
        ref={heroRef}
        className="relative min-h-[110vh] flex items-center overflow-hidden bg-[#1C0A00]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
          <div className="absolute inset-0 noise-bg opacity-15" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#DC2626]/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#EA580C]/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20 py-32 lg:py-0">
          {/* Left Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC2626]"></span>
              </span>
              Premium Outsourcing Solution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-[-0.05em] leading-[0.85] mb-12 text-white"
            >
              Strategic <br />
              <span className="text-gradient">Force</span> For Your <br />
              Business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl text-slate-400 mb-16 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium tracking-tight"
            >
              Solusi penyediaan tenaga kerja terlatih dan terverifikasi untuk
              mengakselerasi pertumbuhan operasional perusahaan Anda secara
              efisien.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 mb-20"
            >
              <Link
                href="/workers"
                className="group relative w-full sm:w-auto px-12 py-7 bg-[#DC2626] text-white font-black text-xl rounded-[2rem] hover:bg-[#B91C1C] transition-all shadow-[0_25px_60px_-15px_rgba(220,38,38,0.5)] flex items-center justify-center gap-4 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Dapatkan Tenaga Kerja
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-white hover:text-[#EA580C] transition-colors group">
                <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-[#EA580C]/50 group-hover:bg-[#EA580C]/5 transition-all">
                  <Play className="w-6 h-6 fill-white group-hover:fill-[#EA580C] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-lg font-black tracking-tight">
                  Watch Experience
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-12 pt-12 border-t border-white/5 max-w-xl mx-auto lg:mx-0"
            >
              {[
                { value: "500+", label: "Professionals" },
                { value: "50+", label: "Categories" },
                { value: "120+", label: "Partners" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full h-[600px] lg:h-[850px] z-10"
          >
            <div className="relative w-full h-full rounded-[4rem] sm:rounded-[6rem] overflow-hidden border-12 border-white/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Workspace"
                fill
                className="object-cover scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1C0A00]/80 via-transparent to-transparent" />

              {/* Floating Achievement Card */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-12 -right-6 sm:right-12 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EA580C] flex items-center justify-center shadow-lg shadow-orange-900/40">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xl font-black text-white tracking-tight">
                    ISO 9001:2015
                  </div>
                </div>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Standar pengelolaan mutu layanan penyaluran tenaga kerja
                  terbaik di Indonesia.
                </p>
              </motion.div>

              {/* Bottom Info Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-full border-4 border-[#1C0A00] bg-slate-800 overflow-hidden relative"
                      >
                        <Image
                          fill
                          src={`https://i.pravatar.cc/150?u=${i + 10}`}
                          alt="avatar"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-black text-white text-lg tracking-tight">
                      Active Deployment
                    </div>
                    <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                      Across All Islands
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                  <Globe className="w-4 h-4 text-[#EA580C]" />
                  Verified Coverage
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== KATEGORI SECTION ==================== */}
      <section className="py-48 bg-[#FFF7F5] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 bg-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <div className="w-12 h-px bg-[#EA580C]/30" />
                <span className="text-[#EA580C] text-[10px] font-black uppercase tracking-[0.6em] leading-none">
                  Core Categories
                </span>
              </div>
              <h2 className="text-5xl sm:text-8xl font-black text-[#1C0A00] leading-[0.9] tracking-tighter mb-10">
                Layanan <span className="text-gradient">Terintegrasi</span>{" "}
                <br /> Sesuai Sektor Bisnis.
              </h2>
              <p className="text-[#78350F]/70 font-bold text-xl sm:text-2xl leading-relaxed max-w-2xl tracking-tight">
                Pilih spesialisasi yang tepat untuk mendukung ekosistem kerja
                perusahaan Anda dengan standar kualitas premium.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end"
            >
              <div className="text-right hidden md:block mb-8">
                <div className="text-4xl font-black text-[#1C0A00]">50+</div>
                <div className="text-[10px] font-black text-[#78350F]/40 uppercase tracking-widest">
                  Sub-Categories Available
                </div>
              </div>
              <Link
                href="/workers"
                className="inline-flex items-center gap-4 px-10 py-6 bg-white border-2 border-[#FED7AA]/30 rounded-[2rem] text-base font-black text-[#1C0A00] hover:bg-[#1C0A00] hover:text-white hover:border-[#1C0A00] transition-all"
              >
                Lihat Semua Katalog <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA MIDDLE ==================== */}
      <section className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="bg-[#1C0A00] rounded-[5rem] p-12 sm:p-24 relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-10" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-center lg:text-left">
                <h3 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
                  Butuh Tenaga Kerja <br />{" "}
                  <span className="text-[#EA580C]">Skala Besar?</span>
                </h3>
                <p className="text-slate-400 text-lg sm:text-xl font-medium tracking-tight">
                  Kami siap menangani rekrutmen massal dengan timeline yang
                  ketat tanpa mengabaikan kualitas seleksi.
                </p>
              </div>
              <div className="shrink-0 flex gap-4 flex-col sm:flex-row">
                <div className="flex items-center gap-4 px-10 py-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                  <div className="w-12 h-12 rounded-2xl bg-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-white text-lg font-black tracking-tight leading-none mb-1">
                      Mass Hiring
                    </div>
                    <div className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none">
                      Available Now
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-10 py-6 bg-[#DC2626] text-white font-black rounded-3xl hover:bg-[#B91C1C] transition-all shadow-xl shadow-red-900/20 flex items-center gap-3"
                >
                  Konsultasi Gratis <Play className="w-3 h-3 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== PEKERJA UNGGULAN ==================== */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-32 gap-12 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 border border-[#EA580C]/20 px-5 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[#EA580C] text-[10px] font-black uppercase tracking-[0.4em]">
                  Elite Profile
                </span>
              </div>
              <h2 className="text-5xl sm:text-8xl font-black text-[#1C0A00] tracking-tighter leading-[0.9] mb-10">
                Sambut Tenaga <br />{" "}
                <span className="text-gradient">Terbaik</span> Kami.
              </h2>
              <p className="text-[#78350F]/60 font-bold text-xl sm:text-2xl leading-relaxed tracking-tight">
                Rating konsisten di atas 4.8 dengan portofolio proyek
                keberhasilan yang impresif.
              </p>
            </motion.div>
            <Link
              href="/workers"
              className="group flex items-center gap-4 px-10 py-6 rounded-[2rem] bg-[#FFF7F5] border-2 border-[#FED7AA]/40 text-[#1C0A00] font-black text-base hover:bg-[#1C0A00] hover:text-white hover:border-[#1C0A00] transition-all duration-500 shadow-xl shadow-red-900/2"
            >
              Lihat Direktori Lengkap
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
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
      <section className="py-48 bg-[#1C0A00] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 noise-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-1 w-20 h-1 bg-[#DC2626] mb-8 rounded-full" />
              <h2 className="text-xs font-black text-[#DC2626] uppercase tracking-[0.5em] mb-10 block">
                Partner Satisfaction
              </h2>
              <h3 className="text-5xl sm:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                Apa Kata <span className="text-gradient">Mitra</span> Strategis{" "}
                <br /> Kami?
              </h3>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto tracking-tight">
                Kepuasan klien adalah validasi mutlak atas standar kualitas yang
                kami pertahankan selama bertahun-tahun.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-12 sm:p-16 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-700 group relative"
              >
                <div className="absolute top-10 right-10 text-8xl text-white/5 font-serif leading-none rotate-12 select-none">
                  &ldquo;
                </div>
                <div className="flex gap-1.5 mb-10">
                  {Array.from({ length: 5 }).map((_, st) => (
                    <Star
                      key={st}
                      className={`w-5 h-5 ${st < t.rating ? "text-[#F97316] fill-[#F97316]" : "text-white/10"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-200 italic mb-16 leading-relaxed text-2xl font-medium tracking-tight relative z-10">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                  <div className="relative w-16 h-16 rounded-[1.5rem] overflow-hidden border-2 border-white/10 group-hover:border-[#DC2626]/50 transition-all group-hover:rotate-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-white text-xl tracking-tight leading-none mb-2">
                      {t.name}
                    </div>
                    <div className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.2em] leading-none">
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
      <section className="py-56 bg-white relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EA580C]/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 sm:p-32 rounded-[5rem] lg:rounded-[8rem] bg-linear-to-br from-[#1C0A00] via-[#2D1200] to-black text-white relative overflow-hidden shadow-2xl shadow-red-900/30"
          >
            <div className="absolute inset-0 noise-bg opacity-15 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
            <div className="absolute top-[-20%] right-[-10%] w-3/4 h-3/4 bg-[#DC2626]/20 rounded-full blur-[160px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-1/2 h-1/2 bg-[#EA580C]/10 rounded-full blur-[140px]" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-16 backdrop-blur-xl"
              >
                <Zap className="w-12 h-12 text-[#DC2626]" />
              </motion.div>
              <h2 className="text-6xl sm:text-9xl font-black mb-12 tracking-[-0.04em] leading-[0.85] text-white">
                Siap Melangkah <br />{" "}
                <span className="text-gradient">Lebih Profesional?</span>
              </h2>
              <p className="text-xl sm:text-3xl text-slate-400 mb-20 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
                Konsultasikan kebutuhan workforce strategis Anda hari ini dan
                dapatkan penawaran solusi terbaik yang dipersonalisasi.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative w-full sm:w-auto px-16 py-8 bg-[#DC2626] text-white font-black text-2xl rounded-[2.5rem] hover:bg-[#B91C1C] active:scale-95 transition-all shadow-[0_30px_70px_-15px_rgba(220,38,38,0.6)] flex items-center justify-center gap-4"
                >
                  Minta Penawaran{" "}
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-16 py-8 bg-white/5 border-2 border-white/10 text-white font-black text-2xl rounded-[2.5rem] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-4 backdrop-blur-md"
                >
                  Pelajari Metodologi Kami
                </Link>
              </div>

              <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-50">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                  <Shield className="w-5 h-5" /> Secure Partnership
                </div>
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                  <Award className="w-5 h-5" /> Certified Quality
                </div>
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                  <Users className="w-5 h-5" /> Proven Experts
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
