/**
 * Halaman Tentang Kami — Profil (Light Theme + Animations)
 */
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Zap,
  Globe,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import React, { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#FFF7F5] selection:bg-[#DC2626]/10 selection:text-[#DC2626]"
    >
      {/* Hero Header */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#1C0A00]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EA580C]/15 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 opacity-60 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#DC2626]/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 opacity-40" />
          <div className="absolute inset-0 noise-bg opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div style={{ y: y1, opacity: opacity1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
            >
              <Users className="w-4 h-4 text-[#EA580C]" />
              Kenali Lebih Dekat
            </motion.div>

            <h1 className="text-6xl sm:text-9xl font-black text-white tracking-[-0.04em] leading-[0.85] mb-12">
              The Engine <br />
              Behind Your <br />
              <span className="text-gradient">Success.</span>
            </h1>

            <p className="text-xl sm:text-3xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              Sejak 2020, ManPower Supply telah menjadi katalisator bagi
              transformasi ekosistem ketenagakerjaan profesional di seluruh
              Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-40"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 border border-[#EA580C]/20 px-5 py-2 rounded-full mb-8">
                <Rocket className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[#EA580C] text-[10px] font-black uppercase tracking-[0.4em]">
                  Our Core Value
                </span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-black text-[#1C0A00] tracking-tighter leading-[0.9] mb-10">
                Misi Besar Untuk <br /> Dampak{" "}
                <span className="text-gradient">Nyata.</span>
              </h2>
              <p className="text-[#78350F]/70 text-xl sm:text-2xl leading-relaxed font-bold tracking-tight mb-12">
                Kami tidak sekadar menyalurkan tenaga kerja; kami membangun
                jembatan kepercayaan antara talenta terbaik dan perusahaan
                visioner.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Lengkap & Legal",
                    desc: "Patuh 100% regulasi RI.",
                  },
                  {
                    icon: Globe,
                    title: "Skala Nasional",
                    desc: "Coverage seluruh wilayah.",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-3xl"
                  >
                    <stat.icon className="w-8 h-8 text-[#DC2626] mb-4" />
                    <div className="font-black text-[#1C0A00] text-lg mb-1">
                      {stat.title}
                    </div>
                    <div className="text-sm font-bold text-[#78350F]/50 leading-tight">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="aspect-4/5 rounded-[4rem] overflow-hidden border-12 border-[#FFF7F5] shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
                  alt="Professional Leadership"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1C0A00]/80 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="text-3xl font-black tracking-tight mb-2">
                    Integritas Tanpa Kompromi
                  </div>
                  <div className="text-[#EA580C] text-[10px] font-black uppercase tracking-[0.4em]">
                    Prinsip Utama Kami
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#DC2626]/10 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="p-16 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-[4rem] hover:border-[#EA580C]/30 transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EA580C]/5 rounded-full blur-3xl" />
              <div className="w-24 h-24 rounded-[2rem] bg-[#EA580C] text-white flex items-center justify-center mb-12 shadow-2xl shadow-orange-900/30 group-hover:rotate-6 transition-transform">
                <Target className="w-12 h-12" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1C0A00] mb-8 tracking-tighter">
                Visi Strategis
              </h2>
              <p className="text-[#78350F]/70 text-2xl leading-relaxed font-bold tracking-tight">
                Menjadi benchmark utama dalam industri penyediaan tenaga kerja
                profesional di Asia Pasifik dengan mengedepankan inovasi
                teknologi rekrutmen.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-16 bg-[#1C0A00] text-white rounded-[4rem] shadow-2xl shadow-red-900/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 noise-bg opacity-10" />
              <div className="w-24 h-24 rounded-[2rem] bg-white/5 text-[#EA580C] flex items-center justify-center mb-12 border border-white/10 group-hover:rotate-6 transition-transform">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tighter">
                Misi Operasional
              </h2>
              <ul className="space-y-8">
                {[
                  "Rekrutmen berbasis Intelligence Testing.",
                  "Proteksi legalitas menyeluruh bagi pekerja.",
                  "Sistem manajemen SDM yang transparan.",
                  "Peningkatan kompetensi melalui training intensif.",
                ].map((misi, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-6 text-slate-300 font-bold"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#EA580C]" />
                    </div>
                    <span className="text-xl leading-snug tracking-tight">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Visual with Glassmorphism */}
      <section className="py-48 bg-[#FFF7F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EA580C]/5 blur-[160px] translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative aspect-21/10 rounded-[4rem] sm:rounded-[6rem] overflow-hidden border-12 border-white shadow-3xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
              alt="Our Professional Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1C0A00]/95 via-[#1C0A00]/20 to-transparent" />
            <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h3 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tighter">
                  Kekuatan di Balik Layanan.
                </h3>
                <p className="text-[#EA580C] font-black uppercase tracking-[0.5em] text-[10px]">
                  Professional Human Capital Team
                </p>
              </div>
              <LinkNext
                href="/contact"
                className="px-10 py-5 bg-white text-[#1C0A00] font-black rounded-2xl hover:bg-[#EA580C] hover:text-white transition-all shadow-xl"
              >
                Join Our Ecosystem
              </LinkNext>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Header */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-1 bg-[#DC2626] mb-10 rounded-full mx-auto" />
              <h2 className="text-5xl sm:text-8xl font-black text-[#1C0A00] mb-8 tracking-tighter leading-none">
                Why Partners <br />{" "}
                <span className="text-gradient">Choose Us?</span>
              </h2>
              <p className="text-[#78350F]/60 max-w-2xl mx-auto font-bold text-xl sm:text-2xl tracking-tight leading-relaxed">
                Empat pilar utama yang menjadikan kami mitra strategis paling
                andal di industri outsourcing Indonesia.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
          >
            {[
              {
                icon: Shield,
                title: "Legalitas Rigid",
                desc: "Kepatuhan hukum mutlak terhadap seluruh regulasi ketenagakerjaan.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Award,
                title: "Quality First",
                desc: "Proses seleksi berbasis performa dan kompetensi nyata.",
                color: "text-[#EA580C]",
                bg: "bg-[#FFF7F5]",
              },
              {
                icon: Handshake,
                title: "Dedicated Support",
                desc: "Manajer akun khusus untuk setiap mitra bisnis kami.",
                color: "text-[#DC2626]",
                bg: "bg-[#DC2626]/5",
              },
              {
                icon: Building2,
                title: "Full Coverage",
                desc: "Proteksi jaminan sosial & asuransi lengkap bagi seluruh tenaga kerja.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="p-12 bg-white border border-[#FED7AA]/30 rounded-[3.5rem] shadow-2xl shadow-red-900/2 hover:shadow-red-900/5 transition-all duration-500 group relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FED7AA]/20 to-transparent group-hover:via-[#EA580C]/40 transition-all" />
                <div
                  className={`w-20 h-20 ${item.bg} ${item.color} rounded-[2rem] flex items-center justify-center mb-10 border border-black/5 shadow-inner transition-transform group-hover:scale-110`}
                >
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1C0A00] mb-5 tracking-tight group-hover:text-[#DC2626] transition-colors">
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
      <section className="py-64 bg-[#1C0A00] text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 noise-bg opacity-15" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 sm:gap-32 text-center">
            {[
              { value: "5+", label: "Years Exp" },
              { value: "500+", label: "Active Talent" },
              { value: "150+", label: "Business Partners" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl sm:text-[10rem] font-black text-[#EA580C] mb-8 tracking-[-0.05em] leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-[0.5em] leading-loose">
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

import LinkNext from "next/link";
