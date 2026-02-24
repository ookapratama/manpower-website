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
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-black uppercase tracking-[0.2em] border border-sky-100 mb-6">
              Tentang Kami
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Membangun Masa Depan <br />
              Dunia <span className="text-gradient">Outsourcing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Sejak 2020, ManPower Supply telah bertransformasi menjadi mitra
              strategis bagi ratusan perusahaan di Sulawesi Selatan dalam
              mengelola sumber daya manusia profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi with Animations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm transform hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-sky-100">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Visi Kami
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Menjadi benchmark utama dalam industri penyediaan tenaga kerja
                di Indonesia dengan mengedepankan inovasi, integritas, dan
                kualitas pelayanan yang melampaui ekspektasi klien.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm transform hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-slate-100">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Misi Kami
              </h2>
              <ul className="space-y-4">
                {[
                  "Menyediakan sistem rekrutmen berbasis kompetensi global.",
                  "Memastikan setiap pekerja mendapatkan hak dan perlindungan legal.",
                  "Membangun ekosistem kerja yang profesional dan produktif.",
                  "Mendukung pertumbuhan ekonomi lokal melalui penempatan kerja.",
                ].map((misi, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-slate-600 font-bold"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Tim Kami Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 relative aspect-[16/7] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
              alt="Our Professional Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-black mb-2">Tim Profesional Kami</h3>
              <p className="text-sky-300 font-bold uppercase tracking-widest">
                Berdedikasi untuk solusi terbaik
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Header */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">
              Beberapa alasan kuat mengapa ratusan perusahaan mempercayakan
              operasionalnya kepada kami.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Legalitas Lengkap",
                desc: "Kami beroperasi dengan izin resmi dan mematuhi semua regulasi ketenagakerjaan RI.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Award,
                title: "Seleksi Presisi",
                desc: "Sistem evaluasi psikologi dan kompetensi berkala bagi setiap calon tenaga kerja.",
                color: "text-sky-600",
                bg: "bg-sky-50",
              },
              {
                icon: Handshake,
                title: "Layanan 24/7",
                desc: "Tim support kami siap membantu koordinasi kebutuhan mendadak kapan saja.",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Building2,
                title: "Berasuransi",
                desc: "Semua tenaga kerja dilindungi oleh BPJS Ketenagakerjaan dan Kesehatan secara penuh.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all"
              >
                <div
                  className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                  &ldquo;{item.desc}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats with Big Numbers */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 sm:mx-8 mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-grid" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "287+", label: "Tenaga Kerja" },
              { value: "150+", label: "Klien Perusahaan" },
              { value: "98%", label: "Indeks Kepuasan" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl sm:text-7xl font-black text-sky-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest leading-loose">
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
