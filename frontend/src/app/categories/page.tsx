/**
 * Halaman Kategori — Daftar (Light Theme + Animations)
 */
"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/lib/dummy-data";

export default function CategoriesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#FFF7F5] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[10px] font-black uppercase tracking-[0.3em] border border-[#EA580C]/20 mb-8">
              Layanan Spesialis
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1C0A00] tracking-tight leading-none mb-6">
              Jelajahi <span className="text-gradient">Kategori</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#78350F]/70 max-w-2xl mx-auto leading-relaxed font-bold">
              Kami menyediakan tenaga kerja terlatih dan terverifikasi untuk
              berbagai sektor industri strategis dan kebutuhan operasional
              bisnis Anda.
            </p>
          </motion.div>
        </div>

        {/* Global Stats bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1A0A00] rounded-3xl p-8 mb-16 flex flex-wrap justify-around items-center gap-10 shadow-2xl shadow-red-900/10 text-white border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />
          <div className="text-center relative z-10">
            <div className="text-4xl sm:text-5xl font-black text-[#F97316] mb-2 tracking-tighter">
              8
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              Kategori Utama
            </div>
          </div>
          <div className="h-12 w-px bg-white/10 hidden lg:block" />
          <div className="text-center relative z-10">
            <div className="text-4xl sm:text-5xl font-black text-[#F97316] mb-2 tracking-tighter">
              500+
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              Professional Aktif
            </div>
          </div>
          <div className="h-12 w-px bg-white/10 hidden lg:block" />
          <div className="text-center relative z-10">
            <div className="text-4xl sm:text-5xl font-black text-[#F97316] mb-2 tracking-tighter">
              24/7
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              Siap Penempatan
            </div>
          </div>
        </motion.div>

        {/* Grid Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 sm:p-14 bg-white border border-[#FED7AA]/30 rounded-3xl text-center shadow-2xl shadow-red-900/5 relative overflow-hidden"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#EA580C]/5 rounded-full blur-[100px]" />
          <h3 className="text-3xl sm:text-4xl font-black text-[#1C0A00] mb-6 tracking-tighter relative z-10">
            Kebutuhan <span className="text-gradient">Khusus</span> Belum
            Terpenuhi?
          </h3>
          <p className="text-[#78350F]/70 font-bold text-lg mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            Kami terus memperluas jaringan tenaga kerja kami. Hubungi tim ahli
            kami untuk konsultasi permintaan kustom tenaga kerja sesuai dengan
            spesifikasi teknis unik perusahaan Anda.
          </p>
          <button className="px-12 py-6 bg-[#DC2626] text-white font-black text-lg rounded-2xl hover:bg-[#B91C1C] transition-all shadow-xl shadow-red-900/20 active:scale-95 relative z-10">
            Konsultasi Kustom Tenaga Kerja
          </button>
        </motion.div>
      </div>
    </div>
  );
}
