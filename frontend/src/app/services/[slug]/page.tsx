/**
 * Halaman Detail Layanan — PT RMR Energi Indonesia
 */
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Trees,
  ShieldCheck,
  Map,
  Clock,
  Zap,
} from "lucide-react";
import { services } from "@/lib/dummy-data";
import React from "react";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-6">
            Layanan Tidak Ditemukan
          </h1>
          <button
            onClick={() => router.push("/services")}
            className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Kembali ke Daftar Layanan
          </button>
        </div>
      </div>
    );
  }

  // Map icon strings to components
  const IconComponent = () => {
    switch (service.icon) {
      case "Trees":
        return <Trees className="w-12 h-12" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-12 h-12" />;
      case "Map":
        return <Map className="w-12 h-12" />;
      default:
        return <Zap className="w-12 h-12" />;
    }
  };

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
              href="/services"
              className="hover:text-primary transition-colors"
            >
              Layanan
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-primary truncate max-w-[200px]">
              {service.name}
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
                  KBLI {service.kbliCode}
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none mb-10">
                  {service.name}
                </h1>

                <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center text-primary mb-16 shadow-inner">
                  <div className="p-8 bg-white rounded-[2.5rem] shadow-xl text-primary">
                    <IconComponent />
                  </div>
                </div>

                <div className="prose prose-xl prose-gray">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                    Deskripsi Layanan
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12">
                    {service.description}
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">
                    Fitur & Keunggulan
                  </h3>
                  <div className="grid gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/20 transition-all font-bold text-gray-800"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        {feature}
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
                <div className="p-10 bg-primary rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <h3 className="text-2xl font-black mb-10 relative z-10 tracking-tight">
                    Butuh Layanan Ini?
                  </h3>

                  <p className="text-white/70 mb-12 font-medium leading-relaxed italic">
                    &ldquo;Kami menjamin proses perizinan yang legal,
                    transparan, dan sesuai dengan regulasi terbaru dari
                    KLHK.&rdquo;
                  </p>

                  <button
                    onClick={() => router.push("/contact")}
                    className="w-full flex items-center justify-between p-6 bg-secondary text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all relative z-10"
                  >
                    Konsultasi Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Benefits */}
                <div className="p-10 bg-gray-50 border border-gray-100 rounded-[3rem]">
                  <h4 className="text-xl font-black text-gray-900 mb-8 tracking-tight">
                    Kenapa Memilih PT RMR?
                  </h4>
                  <div className="space-y-6">
                    {[
                      { label: "Tim Ahli Berlisensi", icon: ShieldCheck },
                      { label: "Akurasi Data Teknis", icon: Zap },
                      { label: "Tepat Waktu", icon: Clock },
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <benefit.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-gray-700">
                          {benefit.label}
                        </span>
                      </div>
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
