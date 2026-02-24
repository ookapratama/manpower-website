/**
 * Halaman Hubungi Kami — Kontak (Light Theme + Animations)
 */
"use client";

import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Halaman */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Mulai <span className="text-gradient">Hubungi Kami</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Tim kami siap membantu Anda 24/7. Sampaikan kebutuhan tenaga kerja
              Anda dan kami akan segera memberikan solusi terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Kolom Kiri: Info Kontak */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">
                  Informasi Kontak
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      icon: Phone,
                      label: "Telepon & WhatsApp",
                      value: "+62 411-123-4567 / 0812-3456-7890",
                      color: "text-emerald-500",
                      bg: "bg-emerald-50",
                    },
                    {
                      icon: Mail,
                      label: "Email Resmi",
                      value: "info@manpowersupply.co.id",
                      color: "text-sky-500",
                      bg: "bg-sky-50",
                    },
                    {
                      icon: MapPin,
                      label: "Alamat Kantor",
                      value:
                        "Jl. Andi Pangeran Pettarani No. 123, Makassar, Sulawesi Selatan",
                      color: "text-red-500",
                      bg: "bg-red-50",
                    },
                    {
                      icon: Clock,
                      label: "Jam Operasional",
                      value: "Senin - Jumat: 08:00 - 17:00 WITA",
                      color: "text-amber-500",
                      bg: "bg-amber-50",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex gap-6 group"
                    >
                      <div
                        className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                          {item.label}
                        </div>
                        <div className="text-lg font-bold text-slate-900 leading-snug">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Chat CTA Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 blur-sm group-hover:blur-0 transition-opacity">
                  <MessageSquare className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-black mb-4 relative z-10">
                  Respon Cepat via WA
                </h3>
                <p className="text-slate-400 font-medium mb-8 relative z-10">
                  Konsultasi kebutuhan dalam hitungan menit lewat asisten online
                  kami.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm rounded-2xl transition-all shadow-lg shadow-emerald-900/40 active:scale-95"
                >
                  Chat Sekarang
                  <Send className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Kolom Kanan: Form Kontak */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white border border-slate-200 rounded-[3rem] p-10 sm:p-14 shadow-2xl shadow-slate-200"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                Kirim Pesan
              </h2>
              <p className="text-slate-500 font-medium mb-12">
                Berikan detail kebutuhan Anda dan tim kami akan segera
                menghubungi Anda kembali.
              </p>

              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: PT. Maju Jaya"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="budi@email.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxx"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                    Kategori Tenaga Kerja
                  </label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900 cursor-pointer">
                    <option>Pilih Kategori</option>
                    <option>Security & Satpam</option>
                    <option>Cleaning Service</option>
                    <option>Driver</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">
                    Detail Kebutuhan
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Sampaikan jumlah tenaga kerja yang dibutuhkan dan durasi penempatan..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-bold text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-sky-600 text-white font-black text-lg rounded-2xl hover:bg-sky-500 transition-all shadow-xl shadow-sky-100 active:scale-95"
                >
                  Kirim Permintaan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
