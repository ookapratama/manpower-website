/**
 * Halaman Layanan — Daftar Jasa PT RMR Energi Indonesia
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trees,
  ShieldCheck,
  Map,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Zap,
  Briefcase,
  FileSearch,
  HardHat,
  Scale,
} from "lucide-react";
import { services } from "@/lib/dummy-data";
import React from "react";

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO HEADER ==================== */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10">
              <Briefcase className="w-4 h-4" />
              Solusi Perizinan & Konsultan Kehutanan
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Layanan{" "}
              <span className="text-primary italic tracking-tighter">
                Komprehensif
              </span>{" "}
              Kami.
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              Kami menyediakan pendekatan terpadu lintas sektoral untuk
              memastikan operasional bisnis Anda patuh terhadap regulasi
              kehutanan yang dinamis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== MAIN SERVICES GRID ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:gap-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Representation */}
                <div className="flex-1 relative w-full aspect-4/3 rounded-[3.5rem] bg-gray-50 flex items-center justify-center border border-gray-100 overflow-hidden group shadow-2xl">
                  {service.icon === "Trees" && (
                    <Trees className="w-40 h-40 text-primary/20 group-hover:scale-110 group-hover:text-primary/30 transition-transform duration-700" />
                  )}
                  {service.icon === "ShieldCheck" && (
                    <ShieldCheck className="w-40 h-40 text-primary/20 group-hover:scale-110 group-hover:text-primary/30 transition-transform duration-700" />
                  )}
                  {service.icon === "Map" && (
                    <Map className="w-40 h-40 text-primary/20 group-hover:scale-110 group-hover:text-primary/30 transition-transform duration-700" />
                  )}

                  {/* Floating badge */}
                  <div className="absolute top-12 left-12 p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center">
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                      KBLI CODE
                    </span>
                    <span className="text-primary text-xl font-black tracking-tight leading-none">
                      {service.kbliCode}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-6 block">
                    Layanan Khusus
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none mb-8">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-xl font-medium leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700 font-bold text-sm tracking-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-black text-sm rounded-2xl hover:bg-primary/90 transition-all hover:shadow-xl active:scale-95"
                  >
                    Konsultasikan Jasa Ini <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORKFLOW SECTION ==================== */}
      <section className="py-24 lg:py-40 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <span className="text-secondary text-xs font-black uppercase tracking-[0.5em] mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-8">
              Alur Kerja{" "}
              <span className="text-secondary italic">Navigasi Regulasi.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {[
              {
                icon: FileSearch,
                title: "Initial Audit",
                desc: "Audit awal kebutuhan perizinan dan dokumen teknis yang tersedia.",
              },
              {
                icon: Scale,
                title: "Regulation Mapping",
                desc: "Pemetaan regulasi terbaru sesuai wilayah dan sektor bisnis klien.",
              },
              {
                icon: HardHat,
                title: "Technical Survey",
                desc: "Eksplorasi lapangan untuk verifikasi data teknis dan pemetaan digital.",
              },
              {
                icon: Zap,
                title: "License Approval",
                desc: "Pendampingan birokrasi hingga persetujuan akhir diterbitkan.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group text-center flex flex-col items-center"
              >
                {/* Arrow Connector (Desktop only) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[80%] w-full h-px bg-white/10" />
                )}

                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:border-secondary transition-all">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  Step 0{i + 1}
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section id="contact" className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 sm:p-24 bg-primary/5 rounded-[4rem] lg:rounded-[6rem] border border-primary/10 max-w-5xl w-full"
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-6 block">
              Ready to Start?
            </span>
            <h2 className="text-4xl sm:text-7xl font-black text-gray-900 tracking-tight leading-none mb-12">
              Dapatkan Kepastian{" "}
              <span className="text-primary italic">Hukum</span> Bisnis Anda.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-7 bg-primary text-white font-black text-xl rounded-full hover:bg-primary/90 transition-all shadow-2xl active:scale-95"
            >
              Hubungi Konsultan Kami{" "}
              <ArrowRight className="w-6 h-6 text-secondary" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
