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
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-black uppercase tracking-widest border border-sky-100 mb-6">
              Layanan Spesialis
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              Jelajahi <span className="text-gradient">Kategori</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Kami menyediakan tenaga kerja terlatih untuk berbagai sektor
              industri dan kebutuhan operasional harian Anda.
            </p>
          </motion.div>
        </div>

        {/* Global Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 rounded-[2.5rem] p-8 mb-16 flex flex-wrap justify-around items-center gap-8 shadow-2xl text-white border border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">8</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
              Kategori Utama
            </div>
          </div>
          <div className="h-10 w-px bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">280+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
              Professional Aktif
            </div>
          </div>
          <div className="h-10 w-px bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-sky-400">12+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
              Sertifikasi Skill
            </div>
          </div>
        </motion.div>

        {/* Grid Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-white border border-slate-200 rounded-[3rem] text-center shadow-xl shadow-slate-100"
        >
          <h3 className="text-2xl font-black text-slate-900 mb-4">
            Tidak Menemukan Kategori yang Anda Cari?
          </h3>
          <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
            Kami terus memperluas jaringan tenaga kerja kami. Hubungi tim kami
            untuk permintaan kustom tenaga kerja sesuai spesifikasi teknis
            perusahaan Anda.
          </p>
          <button className="px-10 py-5 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-500 transition-all shadow-lg active:scale-95">
            Konsultasi Kustom Tenaga Kerja
          </button>
        </motion.div>
      </div>
    </div>
  );
}
