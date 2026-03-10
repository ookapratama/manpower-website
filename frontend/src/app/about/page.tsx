/**
 * Halaman Tentang Kami — Profil PT RMR Energi Indonesia
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Award,
  CheckCircle2,
  Users,
  Briefcase,
  Globe,
  Star,
  Zap,
  Leaf,
  FileText,
  Clock,
} from "lucide-react";
import React from "react";
import { experts, siteStats, organizationData } from "@/lib/dummy-data";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      {/* ==================== HERO HEADER ==================== */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md">
              <Leaf className="w-4 h-4 text-secondary" />
              Tentang PT RMR Energi Indonesia
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none mb-8">
              Navigasi{" "}
              <span className="text-secondary tracking-tighter italic">
                Regulasi
              </span>{" "}
              <br />
              Demi Keberlanjutan.
            </h1>

            <p className="text-lg sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              Mitra strategis dan konsultan ahli dalam bidang perizinan
              kehutanan dan lingkungan di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== BIOGRAPHY & LEGALITY ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 border border-primary/20 px-4 py-2 rounded-full mb-8">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                  Biografi Perusahaan
                </span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                Membangun Kepercayaan <br /> Melalui{" "}
                <span className="text-primary">Keahlian Teknis.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
                <p>
                  PT RMR ENERGI INDONESIA didukung oleh tim tenaga teknis dan
                  legal yang berkompeten serta berpengalaman dalam menavigasi
                  regulasi kehutanan yang dinamis.
                </p>
                <p>
                  Kami yakin dengan kemampuan tinggi serta konsistensi tim kami
                  dalam mengawal setiap tahapan birokrasi, akan memenuhi standar
                  kepatuhan regulasi dan kepuasan kualitas layanan yang
                  diinginkan oleh klien.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-6">
                  Informasi Legalitas
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Nama Perusahaan",
                      value: "PT RMR Energi Indonesia",
                    },
                    { label: "NIB", value: "0403260056576" },
                    {
                      label: "Izin Usaha",
                      value: "Kehutanan & Lingkungan Hidup",
                    },
                    { label: "Domisili", value: "Makassar, Sulawesi Selatan" },
                  ].map((info) => (
                    <div
                      key={info.label}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        {info.label}
                      </span>
                      <span className="text-sm font-black text-gray-800">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                  alt="Forester work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-secondary p-12 rounded-[2.5rem] shadow-2xl hidden sm:block">
                <div className="flex flex-col">
                  <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-2">
                    Didirikan Oleh
                  </span>
                  <span className="text-xl font-black text-primary leading-tight">
                    Muhammad Fahmi <br /> Mubarak, S.T.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== STRUKTUR ORGANISASI ==================== */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4 block">
              Leadership & Team
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none">
              Struktur Organisasi <br />
              <span className="text-primary">PT RMR Energi Indonesia.</span>
            </h2>
          </div>

          <div className="flex flex-col items-center">
            {/* Top Level: Direksi */}
            <div className="grid sm:grid-cols-2 gap-8 mb-20">
              {[
                organizationData.direkturUtama,
                organizationData.direkturOperasional,
              ].map((dir, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary p-10 rounded-[2.5rem] text-white text-center shadow-2xl min-w-[300px]"
                >
                  <div className="text-secondary text-[10px] font-black uppercase tracking-widest mb-3">
                    {dir.role}
                  </div>
                  <div className="text-2xl font-black tracking-tight">
                    {dir.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Level: Management & Engineers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {organizationData.management.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="text-primary text-[9px] font-black uppercase tracking-widest mb-2 group-hover:scale-110 transition-transform">
                    {m.role}
                  </div>
                  <div className="text-lg font-black text-gray-900 leading-tight">
                    {m.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="py-24 lg:py-40 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 sm:p-20 bg-primary rounded-[3.5rem] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Target className="w-40 h-40" />
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight">
                Visi Terdepan.
              </h2>
              <p className="text-xl sm:text-2xl leading-relaxed font-medium text-white/90 italic">
                &ldquo;Menjadi mitra strategis terdepan di Indonesia dalam
                penyediaan solusi perizinan kawasan hutan yang terpercaya,
                akurat, dan berkelanjutan guna mendukung percepatan investasi
                nasional yang berwawasan lingkungan.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 sm:p-20 bg-white/5 border border-white/10 rounded-[3.5rem] text-white"
            >
              <h2 className="text-4xl font-black mb-12 tracking-tight">
                Misi Utama.
              </h2>
              <div className="grid gap-10">
                {[
                  {
                    title: "Navigasi Regulasi",
                    desc: "Pendampingan profesional dalam perizinan kehutanan dan lingkungan dengan pemahaman mendalam terhadap dinamika regulasi terbaru.",
                  },
                  {
                    title: "Kualitas Teknis",
                    desc: "Penyelenggaraan jasa inventarisasi dan pemetaan hutan dengan standar akurasi tinggi untuk menunjang percepatan investasi.",
                  },
                  {
                    title: "Efisiensi Birokrasi",
                    desc: "Mengoptimalkan proses perizinan melalui koordinasi efektif dengan instansi terkait guna menjamin ketepatan waktu.",
                  },
                ].map((misi, i) => (
                  <div key={misi.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-primary font-black">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 uppercase tracking-wide">
                        {misi.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {misi.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4 block">
              Nilai Kami
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Pilar Integritas <br />
              <span className="text-primary">PT RMR.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:bg-primary transition-all">
                <ShieldCheck className="w-10 h-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                RELIABLE
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Menjamin konsistensi kualitas layanan dan memberikan kepastian
                hukum bagi setiap mitra yang bekerja sama dengan kami.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:bg-secondary transition-all">
                <Award className="w-10 h-10 text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                MASTERFUL
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Penguasaan mendalam atas aspek teknis dan rincian legalitas
                kehutanan yang diperlukan untuk operasional bisnis skala besar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
