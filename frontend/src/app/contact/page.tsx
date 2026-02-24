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
      <section className="relative pt-40 pb-24 bg-[#FFF7F5] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-8xl font-black text-[#1C0A00] tracking-tighter leading-[0.95] mb-8">
              Mulai <span className="text-gradient">Hubungi Kami</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#78350F]/70 max-w-3xl mx-auto leading-relaxed font-medium">
              Tim kami siap membantu Anda 24/7. Sampaikan kebutuhan tenaga kerja
              Anda dan kami akan segera memberikan solusi outsourcing terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-20 items-start">
            {/* Kolom Kiri: Info Kontak */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-[#1C0A00] mb-12 tracking-tighter uppercase tracking-[0.1em]">
                  Informasi Kontak
                </h2>

                <div className="space-y-10">
                  {[
                    {
                      icon: Phone,
                      label: "Telepon & WhatsApp",
                      value: "+62 411-123-4567",
                      color: "text-emerald-600",
                      bg: "bg-emerald-50/50",
                    },
                    {
                      icon: Mail,
                      label: "Email Resmi",
                      value: "info@manpowersupply.co.id",
                      color: "text-[#EA580C]",
                      bg: "bg-[#FFF7F5]",
                    },
                    {
                      icon: MapPin,
                      label: "Alamat Kantor",
                      value:
                        "Jl. Andi Pangeran Pettarani No. 123, Makassar, Sulawesi Selatan",
                      color: "text-[#DC2626]",
                      bg: "bg-[#DC2626]/5",
                    },
                    {
                      icon: Clock,
                      label: "Jam Operasional",
                      value: "Senin - Jumat: 08:00 - 17:00 WITA",
                      color: "text-amber-600",
                      bg: "bg-amber-50/50",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex gap-6 group"
                    >
                      <div
                        className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/2 border border-slate-100 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.3em] mb-2">
                          {item.label}
                        </div>
                        <div className="text-lg font-black text-[#1C0A00] leading-snug">
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
                className="p-10 bg-[#1A0A00] rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-red-900/10"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none noise-bg h-full w-full" />
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#DC2626]/20 rounded-full blur-[60px]" />

                <h3 className="text-3xl font-black mb-4 relative z-10 tracking-tighter">
                  Respon Cepat via WA
                </h3>
                <p className="text-slate-400 font-medium mb-10 relative z-10 leading-relaxed text-lg">
                  Konsultasi kebutuhan dalam hitungan menit lewat asisten online
                  kami.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm rounded-2xl transition-all shadow-xl shadow-emerald-900/40 active:scale-95 relative z-10"
                >
                  Chat Sekarang
                  <Send className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Kolom Kanan: Form Kontak */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white border border-[#FED7AA]/20 rounded-[4rem] p-10 sm:p-16 shadow-2xl shadow-red-900/5"
            >
              <h2 className="text-4xl font-black text-[#1C0A00] mb-6 tracking-tighter">
                Kirim Pesan
              </h2>
              <p className="text-[#78350F]/60 font-bold text-lg mb-16 leading-relaxed">
                Berikan detail kebutuhan Anda dan tim ahli kami akan segera
                menghubungi Anda kembali dengan rekomendasi solusi.
              </p>

              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                      Perusahaan / Organisasi
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: PT. Maju Jaya"
                      className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="budi@email.com"
                      className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                      No. Telepon / WA
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxx"
                      className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                    Kategori Tenaga Kerja
                  </label>
                  <select className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] cursor-pointer appearance-none shadow-sm">
                    <option>Pilih Kategori Kebutuhan</option>
                    <option>Security & Satpam</option>
                    <option>Cleaning Service</option>
                    <option>Driver Profesional</option>
                    <option>Teknisi & Maintenance</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.2em] ml-1">
                    Detail Kebutuhan Outsourcing
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Sampaikan jumlah tenaga kerja yang dibutuhkan, kualifikasi khusus, dan durasi penempatan..."
                    className="w-full px-8 py-5 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all font-bold text-[#1C0A00] resize-none shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-[#DC2626] text-white font-black text-xl rounded-2xl hover:bg-[#B91C1C] transition-all shadow-2xl shadow-red-900/20 active:scale-95"
                >
                  Kirim Permintaan Penawaran
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
