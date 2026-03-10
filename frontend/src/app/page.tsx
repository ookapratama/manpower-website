/**
 * Halaman Utama — PT RMR Energi Indonesia
 * Landing page Company Profile (Clean & Professional)
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Trees,
  Map,
  CheckCircle2,
  Award,
  Globe,
  Briefcase,
  Play,
  Linkedin,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  services,
  projects,
  experts,
  siteStats,
  testimonials,
  partners,
} from "@/lib/dummy-data";
import React from "react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white selection:bg-primary/10 selection:text-primary">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
            alt="Forest Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                Konsultan Perizinan Kehutanan & Lingkungan
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white">
              Integritas dalam <br />
              <span className="text-secondary">Perizinan</span>, <br />
              Keberlanjutan dalam Operasional.
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed font-medium max-w-xl">
              PT RMR ENERGI INDONESIA hadir sebagai mitra strategis dalam
              menavigasi regulasi kehutanan untuk kepastian hukum yang aman dan
              tepat.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 py-5 bg-secondary text-primary font-black text-lg rounded-full hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                Konsultasi Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-3 border border-white/20"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Quick Stats */}
        <div className="absolute bottom-0 right-0 left-0 lg:left-auto bg-white/5 backdrop-blur-xl border-t lg:border-l border-white/10 py-12 px-8 lg:px-16 lg:w-[45%] z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                value: siteStats.totalProjects,
                label: "Proyek Selesai",
                icon: CheckCircle2,
              },
              {
                value: siteStats.yearsExperience,
                label: "Tahun Pengalaman",
                icon: Clock,
              },
              {
                value: siteStats.clients,
                label: "Mitra Strategis",
                icon: Globe,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">
                    {stat.value}+
                  </div>
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SUMMARY ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                  alt="Environmental Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[2.5rem] shadow-2xl hidden sm:block">
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-white leading-none">
                    {siteStats.yearsExperience}+
                  </span>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest mt-2">
                    Tahun Berkarya
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-primary/20" />
                <span className="text-primary text-xs font-black uppercase tracking-[0.5em]">
                  Siapa Kami
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-8">
                Mitra Strategis Solusi <br />
                <span className="text-primary">Lingkungan & Kehutanan.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Sektor pengelolaan kawasan hutan saat ini telah berkembang
                pesat. Dinamisnya regulasi pemerintah menuntut pelaku usaha
                memiliki kepastian hukum yang aman dan tepat.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                PT RMR hadir dengan dukungan tim tenaga teknis dan legal
                berkompeten yang konsisten mengawal setiap tahapan birokrasi,
                memenuhi standar kepatuhan regulasi dan kepuasan kualitas
                layanan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Navigasi Regulasi Ahli",
                  "Izin PPKH Tepat Waktu",
                  "Tim Teknis Berlisensi",
                  "Kualitas Dokumentasi Tinggi",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-primary font-black hover:gap-5 transition-all"
              >
                Selengkapnya Tentang Kami <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== LAYANAN UTAMA ==================== */}
      <section className="py-24 lg:py-40 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4 block">
              Layanan Kami
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Solusi Ahli Untuk <br />
              <span className="text-primary">Bisnis Anda.</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              Kami menyediakan paket jasa konsultasi komprehensif mulai dari
              pengurusan perizinan hingga studi kelayakan teknis lapangan.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all border border-transparent hover:border-primary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all">
                  {service.icon === "Trees" && (
                    <Trees className="w-8 h-8 text-primary group-hover:text-white" />
                  )}
                  {service.icon === "ShieldCheck" && (
                    <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white" />
                  )}
                  {service.icon === "Map" && (
                    <Map className="w-8 h-8 text-primary group-hover:text-white" />
                  )}
                </div>
                <div className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  KBLI {service.kbliCode}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight leading-none">
                  {service.name}
                </h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-bold text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-primary font-black text-sm group-hover:gap-4 transition-all"
                >
                  Lihat Detail <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== PORTFOLIO PREVIEW ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4 block">
                Portofolio Kami
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
                Riwayat Pekerjaan <br />
                <span className="text-primary">Yang Telah Diselesaikan.</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Kepercayaan klien adalah motivasi utama kami dalam memberikan
                hasil dokumen teknis yang akurat dan tepat sasaran.
              </p>
            </div>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white border-2 border-gray-100 font-black text-sm rounded-2xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm"
            >
              Lihat Proyek Lainnya
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-gray-900"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/60 text-sm font-bold">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {project.location}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-secondary transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="pb-24 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-primary rounded-[4rem] p-12 lg:p-32 overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 noise-bg" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-black/20 to-transparent" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mb-16 shadow-xl shadow-black/20 animate-bounce">
                <Play className="w-8 h-8 text-primary fill-primary" />
              </div>
              <h2 className="text-4xl sm:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
                Siap Melangkah Ke Tahap <br />{" "}
                <span className="text-secondary">Persetujuan Teknis?</span>
              </h2>
              <p className="text-lg sm:text-2xl text-white/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight italic">
                &ldquo;Kami fokus pada integritas dalam setiap proses perizinan
                untuk memastikan keberlanjutan operasional bisnis Anda.&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-12 py-7 bg-secondary text-primary font-black text-xl rounded-full hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
                >
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto px-12 py-7 bg-white/10 text-white font-black text-xl rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center justify-center gap-4 hover:bg-white/20"
                >
                  Lihat Hasil Kerja Kami
                </Link>
              </div>

              <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-40 grayscale">
                <p className="text-white text-xs font-black uppercase tracking-[0.5em]">
                  Verified Partners
                </p>
                {partners.slice(0, 4).map((p) => (
                  <span key={p.name} className="text-white font-bold">
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// === Missing Icons for this page ===
function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
