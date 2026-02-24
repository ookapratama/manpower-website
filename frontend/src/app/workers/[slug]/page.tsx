"use client";

/**
 * Halaman Detail Pekerja — Profil Lengkap Premium (Light Theme + Animations)
 */
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Briefcase,
  Phone,
  CheckCircle2,
  Shield,
  Award,
  CalendarDays,
  ChevronRight,
  UserCheck,
  Zap,
  MessageSquare,
  Share2,
  ShieldCheck,
  CheckCircle,
  FileCheck,
  UserSearch,
  Copy,
} from "lucide-react";
import LinkNext from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { workers } from "@/lib/dummy-data";
import { formatRupiah, getAvailabilityLabel } from "@/lib/utils";
import React, { useState } from "react";
import WorkerCard from "@/components/ui/WorkerCard";

export default function WorkerDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const worker = workers.find((w) => w.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!worker) return notFound();

  // Get similar workers (same category, excluding current)
  const similarWorkers = workers
    .filter((w) => w.category.id === worker.category.id && w.slug !== slug)
    .slice(0, 3);

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#FFF7F5] selection:bg-[#DC2626]/10 selection:text-[#DC2626]">
      {/* Sticky Secondary Navigation (Below Main Navbar) */}
      <nav className="sticky top-0 lg:top-0 z-40 bg-[#FFF7F5]/80 backdrop-blur-xl border-b border-[#FED7AA]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            <LinkNext
              href="/workers"
              className="inline-flex items-center gap-2 text-xs font-black text-[#78350F] hover:text-[#DC2626] transition-all group shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-[#FED7AA]/30 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="hidden sm:inline">Kembali ke Direktori</span>
            </LinkNext>

            <ChevronRight className="w-3 h-3 text-[#FED7AA]/50 shrink-0" />

            <div className="flex items-center gap-2 text-[10px] font-black text-[#78350F]/40 uppercase tracking-widest whitespace-nowrap bg-[#FED7AA]/10 px-4 py-2 rounded-full border border-[#FED7AA]/20">
              Profil <span className="mx-1.5 text-[#FED7AA]">/</span>{" "}
              {worker.fullName}
            </div>
          </div>

          <div className="flex items-center gap-2 relative">
            <button
              onClick={copyToClipboard}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FED7AA]/30 text-[#78350F] hover:text-[#DC2626] hover:border-[#DC2626]/20 transition-all shadow-sm active:scale-95"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Tersalin!
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="share"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline text-[10px] font-black uppercase tracking-widest">
                      Bagikan
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* 1. Hero Profile Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white border border-[#FED7AA]/30 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-red-900/2 overflow-hidden"
            >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br from-[#EA580C]/10 via-[#DC2626]/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-14 sm:gap-20 relative z-10">
                <div className="relative shrink-0">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <div className="absolute inset-x-0 -bottom-8 h-16 bg-[#EA580C]/10 blur-2xl rounded-full group-hover:bg-[#EA580C]/20 transition-all" />
                    <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(220,38,38,0.1)] ring-1 ring-[#FED7AA]/20 z-10 transition-transform hover:scale-105 duration-1000">
                      <Image
                        src={worker.photoUrl}
                        alt={worker.fullName}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  {/* Floating Availability */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 z-20">
                    <div
                      className={`flex items-center gap-3 px-8 py-4.5 rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 ${
                        worker.availabilityStatus === "available"
                          ? "text-emerald-600"
                          : worker.availabilityStatus === "busy"
                            ? "text-amber-600"
                            : "text-red-600"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)] ${
                          worker.availabilityStatus === "available"
                            ? "bg-emerald-500"
                            : worker.availabilityStatus === "busy"
                              ? "bg-amber-500"
                              : "bg-red-500"
                        }`}
                      />
                      <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap leading-none">
                        {getAvailabilityLabel(worker.availabilityStatus)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="h-full flex flex-col justify-center"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/5 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest mb-6 border border-emerald-500/10 mx-auto md:mx-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Tenaga Terverifikasi
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
                      {worker.fullName}
                    </h1>
                    <p className="text-xl sm:text-2xl font-black text-[#EA580C] mb-10 uppercase tracking-widest flex items-center justify-center md:justify-start gap-4">
                      <span className="w-8 h-px bg-[#EA580C]/30 hidden sm:block" />
                      {worker.category.name}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      <div className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 px-6 py-4 bg-[#FFF7F5] rounded-xl border border-[#FED7AA]/30 hover:border-[#EA580C] transition-all hover:shadow-2xl hover:shadow-red-900/5">
                        <MapPin className="w-5 h-5 text-[#DC2626] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-black text-[#78350F]">
                          {worker.location}
                        </span>
                      </div>
                      <div className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 px-6 py-4 bg-[#FFF7F5] rounded-xl border border-[#FED7AA]/30 hover:border-[#EA580C] transition-all hover:shadow-2xl hover:shadow-red-900/5">
                        <Zap className="w-5 h-5 text-[#EA580C] group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-black text-[#78350F]">
                          {worker.experienceYears} Th Pengalaman
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* 2. Stats Grid Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
              {[
                {
                  label: "Rating",
                  value: worker.rating,
                  sub: "/ 5.0",
                  icon: Star,
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                },
                {
                  label: "Tahun Kerja",
                  value: worker.experienceYears,
                  sub: "Tahun",
                  icon: Clock,
                  color: "text-[#EA580C]",
                  bg: "bg-orange-50",
                },
                {
                  label: "Total Proyek",
                  value: worker.totalProjects,
                  sub: "Selesai",
                  icon: Briefcase,
                  color: "text-red-500",
                  bg: "bg-red-50",
                },
                {
                  label: "Kepuasan",
                  value: "99%",
                  sub: "Rating",
                  icon: Award,
                  color: "text-emerald-500",
                  bg: "bg-emerald-50",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(220,38,38,0.06)",
                  }}
                  className="bg-white border border-[#FED7AA]/30 p-8 sm:p-10 rounded-3xl text-center shadow-2xl shadow-red-900/2 transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FED7AA]/20 to-transparent group-hover:via-[#EA580C]/30 transition-all" />
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 border border-black/3 shadow-inner transform transition-transform group-hover:scale-110`}
                  >
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1C0A00] mb-0 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-[#78350F]/40 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3. Bio & Skills Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-[#FED7AA]/30 rounded-3xl sm:rounded-[4rem] p-8 sm:p-12 shadow-2xl shadow-red-900/2 relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-linear-to-br from-[#DC2626]/5 via-[#EA580C]/2 to-transparent rounded-full blur-[140px] pointer-events-none" />

              <div className="mb-24 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-10 bg-[#DC2626] rounded-full shadow-2xl shadow-red-900/40" />
                  <h2 className="text-2xl sm:text-4xl font-black text-[#1C0A00] tracking-tight">
                    Profil Singkat
                  </h2>
                </div>
                <div className="relative p-8 sm:p-12 bg-[#FFF7F5] rounded-3xl border border-[#FED7AA]/30 group transition-all duration-700 hover:border-[#DC2626]/20 shadow-inner">
                  <div className="absolute top-6 left-6 text-7xl text-[#EA580C]/5 font-serif leading-none italic select-none">
                    &ldquo;
                  </div>
                  <p className="text-[#1C0A00]/80 leading-relaxed text-lg sm:text-xl font-medium italic relative z-10 tracking-tight">
                    {worker.bio}
                  </p>
                  <div className="absolute bottom-6 right-6 text-7xl text-[#EA580C]/5 font-serif leading-none transition-transform rotate-180 italic select-none">
                    &ldquo;
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-10 bg-[#EA580C] rounded-full shadow-2xl shadow-orange-900/40" />
                  <h2 className="text-2xl sm:text-4xl font-black text-[#1C0A00] tracking-tight">
                    Keahlian Utama
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {worker.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-3 px-6 py-4 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl text-[#78350F] font-black text-sm hover:border-[#EA580C] hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all cursor-default relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-[#EA580C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors relative z-10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                      </div>
                      <span className="relative z-10">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Verification Timeline */}
              <div className="mt-24 pt-24 border-t border-[#FED7AA]/20 relative z-10">
                <h3 className="text-2xl font-black text-[#1C0A00] mb-12 tracking-tight flex items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-500" /> Tahap
                  Verifikasi Selesai
                </h3>
                <div className="grid sm:grid-cols-3 gap-10">
                  {[
                    {
                      icon: UserSearch,
                      label: "Pemeriksaan Latar Belakang",
                      status: "Selesai",
                    },
                    {
                      icon: FileCheck,
                      label: "Validasi Dokumen & Legalitas",
                      status: "Selesai",
                    },
                    {
                      icon: Award,
                      label: "Uji Kompetensi & Sertifikasi",
                      status: "Selesai",
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-6 bg-[#FFF7F5]/50 rounded-2xl border border-[#FED7AA]/20"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 mb-6 shadow-sm border border-emerald-500/10">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-black text-[#1C0A00] mb-2">
                        {step.label}
                      </div>
                      <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                        {step.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. Testimonials Section (Dummy Premium) */}
            <motion.div
              variants={itemVariants}
              className="px-8 sm:px-12 py-12 bg-linear-to-br from-[#1C0A00] to-black rounded-3xl sm:rounded-[3rem] text-white overflow-hidden relative shadow-2xl shadow-red-900/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#EA580C]/50 to-transparent" />
              <div className="absolute inset-0 noise-bg opacity-15" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                  <div>
                    <span className="text-[#EA580C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                      Social Proof
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-none">
                      Apa Kata Klien?
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                      <ChevronRight className="w-5 h-5 rotate-180" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="p-8 bg-white/3 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/5 transition-all duration-500 group"
                    >
                      <div className="flex gap-1.5 mb-8">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-4 h-4 text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>
                      <p className="text-base text-slate-300 font-medium italic leading-relaxed mb-8 tracking-tight">
                        &ldquo;Pekerjaan sangat rapi dan tepat waktu.{" "}
                        {worker.fullName} memiliki etos kerja yang luar biasa
                        dan sangat direkomendasikan untuk proyek jangka
                        panjang.&rdquo;
                      </p>
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-[1.5rem] bg-linear-to-br from-[#FED7AA] to-[#EA580C] flex items-center justify-center text-xl font-black text-[#1C0A00] shadow-lg group-hover:rotate-6 transition-transform">
                            PT
                          </div>
                        </div>
                        <div>
                          <div className="text-base font-black tracking-tight">
                            PT. Solusi Mandiri
                          </div>
                          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">
                            Manajer Operasional
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-12 lg:sticky lg:top-44">
            {/* Main Pricing & Contact Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#1C0A00] rounded-3xl sm:rounded-[3rem] p-10 sm:p-12 shadow-[0_40px_100px_rgba(220,38,38,0.2)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 noise-bg opacity-15 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EA580C]/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#DC2626]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center space-y-12">
                <div>
                  <div className="text-[#EA580C] text-[10px] font-black uppercase tracking-widest mb-8 block leading-none">
                    Investment Details
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 leading-none">
                    Mulai Bekerja Sama
                  </h3>
                  <div className="w-16 h-1.5 bg-[#EA580C] rounded-full mx-auto" />
                </div>

                <div className="py-10 sm:py-12 bg-white/4 border border-white/10 rounded-3xl backdrop-blur-xl relative overflow-hidden group-hover:border-[#EA580C]/30 transition-all duration-700 shadow-inner">
                  <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4 leading-none">
                    Budget Per Hari
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight relative inline-flex items-start">
                    <span className="text-[#EA580C] text-xl mt-2 mr-1.5 font-bold">
                      Rp
                    </span>
                    {worker.dailyRate.toLocaleString("id-ID")}
                  </div>
                  <div className="mt-8 px-8 text-[11px] font-black text-white/30 uppercase tracking-[0.15em] leading-relaxed max-w-[240px] mx-auto">
                    Biaya transparan tanpa potongan layanan sampingan
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <LinkNext
                    href="/contact"
                    className="flex items-center justify-center gap-4 w-full px-8 py-6 text-base font-black text-white bg-[#DC2626] rounded-2xl hover:bg-[#B91C1C] transition-all shadow-2xl shadow-red-900/40 active:scale-[0.96] group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Hubungi via WhatsApp
                  </LinkNext>
                  <button className="flex items-center justify-center gap-4 w-full px-8 py-6 text-base font-black text-white/80 border-2 border-white/10 rounded-2xl hover:bg-white hover:text-[#1C0A00] transition-all active:scale-[0.96] group">
                    <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Unduh Resume Full
                  </button>
                </div>

                <div className="pt-10 border-t border-white/5 space-y-5">
                  {[
                    {
                      icon: Shield,
                      text: "Background Check 100% Aman",
                      color: "text-emerald-400",
                    },
                    {
                      icon: Award,
                      text: "Garansi Kualitas Kerja Kami",
                      color: "text-[#EA580C]",
                    },
                    {
                      icon: CheckCircle2,
                      text: "Kepatuhan Hukum & Legalitas",
                      color: "text-blue-400",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-[11px] font-black text-white/40 uppercase tracking-widest text-left leading-tight group/item"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:border-[#EA580C]/20 transition-colors">
                        <item.icon
                          className={`w-4 h-4 ${item.color} shrink-0`}
                        />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Info / Confidence Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-[#FED7AA]/30 rounded-[3.5rem] p-12 shadow-2xl shadow-red-900/2 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Shield className="w-24 h-24 text-[#DC2626]" />
              </div>
              <div className="flex items-center gap-8 relative z-10">
                <div className="w-24 h-24 bg-[#FFF7F5] rounded-[2rem] border border-[#FED7AA]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-3 transition-transform">
                  <CalendarDays className="w-12 h-12 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-xl font-black text-[#1C0A00] tracking-tight">
                    Proses Deployment
                  </div>
                  <div className="text-[11px] font-black text-[#78350F]/50 leading-relaxed mt-2 uppercase tracking-widest">
                    Penempatan dalam 48 jam setelah tanda tangan kontrak
                    kerjasama.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Similar Workers Section */}
        {similarWorkers.length > 0 && (
          <div className="mt-40 pt-40 border-t border-[#FED7AA]/30 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-4 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-[#EA580C] whitespace-nowrap">
              Temukan Bakat Serupa
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-5xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
                  Mungkin Anda <br />{" "}
                  <span className="text-gradient">Juga Membutuhkan</span>
                </h2>
                <p className="text-[#78350F]/60 text-lg font-bold tracking-tight">
                  Berikut adalah rekomendasi tenaga kerja lainnya di kategori{" "}
                  <span className="text-[#EA580C] underline decoration-[#EA580C]/20 underline-offset-8">
                    {worker.category.name}
                  </span>{" "}
                  yang siap mendukung operasional bisnis Anda.
                </p>
              </div>
              <LinkNext
                href="/workers"
                className="inline-flex items-center gap-4 px-8 py-5 bg-white border-2 border-[#FED7AA]/30 rounded-2xl text-sm font-black text-[#1C0A00] hover:bg-[#1C0A00] hover:text-white hover:border-[#1C0A00] transition-all shadow-xl shadow-red-900/2"
              >
                Lihat Semua Katalog <ArrowLeft className="w-5 h-5 rotate-180" />
              </LinkNext>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {similarWorkers.map((w) => (
                <WorkerCard
                  key={w.id}
                  worker={{
                    id: w.id,
                    fullName: w.fullName,
                    slug: w.slug,
                    photoUrl: w.photoUrl,
                    location: w.location,
                    availabilityStatus: w.availabilityStatus,
                    experienceYears: w.experienceYears,
                    dailyRate: w.dailyRate,
                    rating: w.rating,
                    skills: w.skills,
                    categoryName: w.category.name,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Function deleted because "use client" cannot export generateStaticParams
// It should be moved to a separate file or using export const metadata if it was a server component.
// But since we are in a [slug] page with "use client", we handle dynamic params differently or via layout.
// Actually, in Next.js 13/14+ App Router, you can't have generateStaticParams in a "use client" file.
// I'll leave it out as this is a client component refactor.
