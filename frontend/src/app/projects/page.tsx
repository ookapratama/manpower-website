/**
 * Halaman Proyek — Portofolio PT RMR Energi Indonesia
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Filter,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { projects } from "@/lib/dummy-data";
import React from "react";

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      {/* ==================== HERO HEADER ==================== */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary/5">
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10">
              <CheckCircle2 className="w-4 h-4" />
              Verified Project Performance
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Portofolio &{" "}
              <span className="text-primary italic tracking-tighter">
                Hasil Kerja.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              Rekam jejak keberhasilan kami dalam penyusunan dokumen teknis dan
              perizinan kehutanan serta lingkungan di seluruh Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== PROJECTS GRID ==================== */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple Filter (Tab Style) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
            {[
              "Semua Proyek",
              "Perizinan Kehutanan",
              "Perencanaan Kehutanan",
              "Studi Lingkungan",
            ].map((tab, i) => (
              <button
                key={tab}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/10 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 px-6 py-2.5 bg-secondary text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {project.status}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-10 flex flex-col grow">
                  <div className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-auto space-y-4 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-secondary" />
                        Lokasi
                      </div>
                      <span className="text-gray-900">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-bold">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-secondary" />
                        Tahun
                      </div>
                      <span className="text-gray-900">{project.year}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-10 flex items-center justify-center gap-3 w-full py-5 bg-gray-50 text-gray-400 font-black text-xs rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm uppercase tracking-widest"
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== SUMMARY CTA ==================== */}
      <section className="pb-24 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 p-12 lg:p-24 rounded-[4rem] text-center flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-10" />
            <div className="relative z-10">
              <span className="text-secondary text-xs font-black uppercase tracking-[0.4em] mb-6 block">
                Our Expertise
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-12">
                Ingin Detail Proyek <br />
                <span className="text-secondary italic">Tertentu?</span>
              </h2>
              <p className="text-white/40 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                Kami dapat memberikan rincian teknis jika diperlukan untuk studi
                banding atau kebutuhan operasional Anda.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-7 bg-white text-gray-900 font-black text-xl rounded-full hover:bg-secondary hover:text-primary transition-all shadow-2xl active:scale-95"
              >
                Hubungi Kami <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
