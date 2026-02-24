/**
 * Halaman Tentang Kami — Profil (Light Theme + Animations)
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Shield,
  Award,
  CheckCircle2,
  Building2,
  Handshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#FFF7F5]">
      {/* Hero Header */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#FFF7F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EA580C]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40" />
          <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[10px] font-black uppercase tracking-[0.3em] border border-[#EA580C]/20 mb-8">
              Tentang Kami
            </span>
            <h1 className="text-5xl sm:text-8xl font-black text-[#1C0A00] tracking-tighter leading-[0.95] mb-10">
              Membangun Masa Depan <br />
              Dunia <span className="text-gradient">Outsourcing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#78350F]/70 max-w-3xl mx-auto leading-relaxed font-medium">
              Sejak 2020, ManPower Supply telah bertransformasi menjadi mitra
              strategis bagi ratusan perusahaan di Indonesia dalam mengelola
              sumber daya manusia profesional dan berkompeten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi with Animations */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            <motion.div
              variants={itemVariants}
              className="p-12 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-[4rem] shadow-sm transform hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#EA580C] text-white flex items-center justify-center mb-10 shadow-xl shadow-red-900/20 group-hover:rotate-6 transition-transform">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black text-[#1C0A00] mb-6 tracking-tighter">
                Visi Kami
              </h2>
              <p className="text-[#78350F]/70 text-xl leading-relaxed font-bold">
                Menjadi benchmark utama dalam industri penyediaan tenaga kerja
                di Indonesia dengan mengedepankan inovasi, integritas, dan
                kualitas pelayanan yang melampaui ekspektasi klien.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-12 bg-[#1A0A00] text-white rounded-[4rem] shadow-2xl shadow-red-900/10 transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/10 text-[#F97316] flex items-center justify-center mb-10 border border-white/10 group-hover:rotate-6 transition-transform">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">
                Misi Kami
              </h2>
              <ul className="space-y-6">
                {[
                  "Menyediakan sistem rekrutmen berbasis kompetensi global.",
                  "Memastikan setiap pekerja mendapatkan hak dan perlindungan legal.",
                  "Membangun ekosistem kerja yang profesional dan produktif.",
                  "Mendukung pertumbuhan ekonomi lokal melalui penempatan kerja.",
                ].map((misi, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-5 text-slate-300 font-bold"
                  >
                    <CheckCircle2 className="w-7 h-7 text-[#EA580C] shrink-0 mt-1" />
                    <span className="text-lg leading-snug">{misi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Tim Kami Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-20 relative aspect-[16/8] rounded-[4rem] overflow-hidden border-[12px] border-[#FFF7F5] shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
              alt="Our Professional Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/90 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-4xl font-black mb-3 tracking-tighter">
                Tim Profesional Kami
              </h3>
              <p className="text-[#EA580C] font-black uppercase tracking-[0.3em] text-xs">
                Berdedikasi untuk solusi bisnis strategis
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Header */}
      <section className="py-32 bg-[#FFF7F5]/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl font-black text-[#1C0A00] mb-6 tracking-tighter">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-[#78350F]/60 max-w-xl mx-auto font-bold text-lg">
              Beberapa alasan kuat mengapa ratusan perusahaan mempercayakan
              operasional strategisnya kepada kami.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              {
                icon: Shield,
                title: "Legalitas Terjamin",
                desc: "Kami beroperasi dengan izin resmi dan mematuhi semua regulasi ketenagakerjaan RI secara transparan.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Award,
                title: "Seleksi Presisi",
                desc: "Sistem evaluasi psikologi dan kompetensi berkala bagi setiap calon tenaga kerja untuk hasil terbaik.",
                color: "text-[#EA580C]",
                bg: "bg-[#FFF7F5]",
              },
              {
                icon: Handshake,
                title: "Respon 24/7",
                desc: "Tim support kami siap membantu koordinasi kebutuhan operasional mendadak kapan saja Anda butuhkan.",
                color: "text-[#DC2626]",
                bg: "bg-[#DC2626]/5",
              },
              {
                icon: Building2,
                title: "Proteksi Penuh",
                desc: "Semua tenaga kerja dilindungi oleh BPJS Ketenagakerjaan dan Kesehatan secara penuh sejak hari pertama.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-10 bg-white border border-[#FED7AA]/30 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 border border-black/5 shadow-inner`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#1C0A00] mb-4 tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-base text-[#78350F]/70 leading-relaxed font-bold italic">
                  &ldquo;{item.desc}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats with Big Numbers */}
      <section className="py-40 bg-[#1A0A00] text-white relative overflow-hidden shadow-2xl shadow-red-900/20">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none noise-bg" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            {[
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Tenaga Kerja" },
              { value: "150+", label: "Mitra Bisnis" },
              { value: "98%", label: "Tingkat Kepuasan" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl sm:text-8xl font-black text-[#F97316] mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-black text-[#FED7AA]/50 uppercase tracking-[0.4em] leading-loose">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
