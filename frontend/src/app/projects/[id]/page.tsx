/**
 * Halaman Detail Proyek — PT RMR Energi Indonesia
 */
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  CheckCircle2,
  Briefcase,
  Layers,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { projects } from "@/lib/dummy-data";
import React from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-6">
            Proyek Tidak Ditemukan
          </h1>
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Kembali ke Daftar Proyek
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO BREADCRUMB ==================== */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <Link
              href="/projects"
              className="hover:text-primary transition-colors"
            >
              Proyek
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-primary truncate max-w-[200px]">
              {project.title}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: Title & Body */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  {project.category}
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none mb-10">
                  {project.title}
                </h1>

                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16 border border-gray-100 p-2 bg-gray-50">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover scale-105"
                    />
                  </div>
                </div>

                <div className="prose prose-xl prose-gray">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                    Ringkasan Proyek
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12">
                    {project.description}
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">
                    Ruang Lingkup Pekerjaan
                  </h3>
                  <div className="grid gap-4">
                    {project.scope?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/20 transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold text-gray-800 tracking-tight">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar Stats */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-32 space-y-10"
              >
                <div className="p-10 bg-gray-950 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <h3 className="text-2xl font-black mb-10 relative z-10 tracking-tight">
                    Informasi Teknis
                  </h3>

                  <div className="space-y-8 relative z-10">
                    {[
                      {
                        icon: MapPin,
                        label: "Lokasi Proyek",
                        value: project.location,
                      },
                      {
                        icon: Calendar,
                        label: "Tahun Selesai",
                        value: project.year,
                      },
                      {
                        icon: ShieldCheck,
                        label: "Status Pengerjaan",
                        value: project.status,
                      },
                      {
                        icon: Briefcase,
                        label: "Sektor Bisnis",
                        value: "Kehutanan & Lingkungan",
                      },
                    ].map((stat, i) => (
                      <div key={i} className="flex gap-6 items-center">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary backdrop-blur-md">
                          <stat.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1.5">
                            {stat.label}
                          </div>
                          <div className="text-lg font-black text-white leading-none tracking-tight">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                    <button
                      onClick={() => router.push("/contact")}
                      className="w-full flex items-center justify-between p-6 bg-secondary text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all"
                    >
                      Konsultasi Serupa
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Other Projects CTA */}
                <div className="p-10 bg-primary/5 border border-primary/10 rounded-[3rem]">
                  <h4 className="text-xl font-black text-gray-900 mb-6 tracking-tight">
                    Lihat Proyek Lainnya
                  </h4>
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.id !== project.id)
                      .slice(0, 3)
                      .map((other) => (
                        <Link
                          key={other.id}
                          href={`/projects/${other.id}`}
                          className="flex items-center gap-4 group"
                        >
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={other.image}
                              alt={other.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div className="truncate">
                            <div className="text-[10px] font-black text-primary uppercase mb-1">
                              {other.category}
                            </div>
                            <div className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors truncate">
                              {other.title}
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
