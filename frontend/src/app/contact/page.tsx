/**
 * Halaman Hubungi Kami — PT RMR Energi Indonesia
 */
"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

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
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      {/* ==================== HEADER HALAMAN ==================== */}
      <section className="relative pt-48 pb-32 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10">
              <Globe className="w-4 h-4" />
              Global Forestry Network
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Hubungi{" "}
              <span className="text-primary italic tracking-tighter">
                Ahli Kami.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Tim konsultan kami siap membantu menavigasi setiap tahapan
              birokrasi perizinan kawasan hutan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-20 items-start">
            {/* ==================== KOLOM KIRI: INFO KONTAK ==================== */}
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-12 block">
                  Saluran Komunikasi
                </div>

                <div className="space-y-12">
                  {[
                    {
                      icon: Phone,
                      label: "Telepon & WhatsApp",
                      value: "0815-8954-945",
                      color: "text-primary",
                      bg: "bg-primary/5",
                    },
                    {
                      icon: Mail,
                      label: "Email Resmi",
                      value: "pt.rmrenergiindonesia@gmail.com",
                      color: "text-primary",
                      bg: "bg-primary/5",
                    },
                    {
                      icon: MapPin,
                      label: "Kantor Pusat (Makassar)",
                      value:
                        "JI. SYARIF AL QADRI No. 91 RT. 002 RW. 001, Maricaya Baru, Makassar",
                      color: "text-primary",
                      bg: "bg-primary/5",
                    },
                    {
                      icon: MapPin,
                      label: "Kantor Cabang (Sorowako)",
                      value:
                        "JI. Poros Malili - Sorowako, Luwu Timur, Sulawesi Selatan",
                      color: "text-primary",
                      bg: "bg-primary/5",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex gap-8 group"
                    >
                      <div
                        className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500`}
                      >
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 font-bold">
                          {item.label}
                        </div>
                        <div className="text-lg font-black text-gray-900 leading-snug tracking-tight">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 bg-primary rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[60px]" />

                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">
                  Konsultasi Via WA
                </h3>
                <p className="text-white/60 font-medium mb-10 relative z-10 leading-relaxed">
                  Dapatkan respon lebih cepat untuk pertanyaan regulasi dan
                  perizinan.
                </p>
                <a
                  href="https://wa.me/628158954945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-primary font-black text-sm rounded-2xl hover:bg-white transition-all shadow-xl active:scale-95 relative z-10"
                >
                  Hubungi Admin WA{" "}
                  <MessageSquare className="w-5 h-5 fill-primary" />
                </a>
              </motion.div>
            </div>

            {/* ==================== KOLOM KANAN: FORM KONTAK ==================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white border border-gray-100 rounded-[3.5rem] p-10 sm:p-20 shadow-2xl shadow-gray-200/50"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-primary/20" />
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                  Hubungi Kami
                </span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
                Kirim Pesan Teknis.
              </h2>
              <p className="text-gray-500 font-medium text-lg mb-16 leading-relaxed max-w-xl">
                Lengkapi form di bawah ini untuk mendapatkan estimasi waktu dan
                biaya pengurusan dokumen teknis Anda.
              </p>

              <form className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 shadow-inner text-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                      Perusahaan / Institusi
                    </label>
                    <input
                      type="text"
                      placeholder="Nama PT atau Instansi"
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 shadow-inner text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                      Email Bisnis
                    </label>
                    <input
                      type="email"
                      placeholder="email@perusahaan.com"
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 shadow-inner text-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                      No. Telepon / WA
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxxx"
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 shadow-inner text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                    Kebutuhan Layanan
                  </label>
                  <Select>
                    <SelectTrigger className="w-full px-8 py-8 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 font-bold text-gray-900 cursor-pointer shadow-inner text-base h-auto">
                      <SelectValue placeholder="Pilih Jenis Layanan" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-100 rounded-2xl font-bold text-gray-900 shadow-2xl">
                      <SelectItem value="ppkh">
                        Izin Persetujuan Penggunaan Kawasan Hutan (PPKH)
                      </SelectItem>
                      <SelectItem value="plan">
                        Jasa Perencanaan Kehutanan
                      </SelectItem>
                      <SelectItem value="cons">
                        Perlindungan & Konservasi Alam
                      </SelectItem>
                      <SelectItem value="others">
                        Lainnya / Konsultasi Umum
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                    Detail Pertanyaan / Brief Proyek
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Sampaikan rincian kebutuhan Anda, seperti lokasi proyek, luas lahan, atau kendala regulasi yang dihadapi..."
                    className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 resize-none shadow-inner text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-primary text-white font-black text-lg rounded-2xl hover:bg-gray-900 transition-all shadow-2xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-4"
                >
                  Kirim Pesan Sekarang{" "}
                  <ArrowRight className="w-6 h-6 text-secondary" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
