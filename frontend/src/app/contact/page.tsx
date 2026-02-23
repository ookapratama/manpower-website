/**
 * Halaman Hubungi Kami — Form kontak dan informasi
 */
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi ManPower Supply untuk konsultasi gratis. Kami siap membantu kebutuhan tenaga kerja perusahaan Anda.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-900/50 border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Siap Membantu Anda
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Konsultasikan kebutuhan tenaga kerja Anda secara gratis. Tim kami
            siap merespons dalam 1x24 jam.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 p-6 sm:p-8 bg-slate-900/50 border border-white/5 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Kirim Pesan</h2>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                  >
                    Perusahaan
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nama perusahaan"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@perusahaan.com"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                  >
                    No. Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+62 8xx-xxxx-xxxx"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Kategori Tenaga Kerja yang Dibutuhkan
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500/30 appearance-none"
                >
                  <option value="">Pilih kategori...</option>
                  <option value="security">Security & Satpam</option>
                  <option value="cleaning">Cleaning Service</option>
                  <option value="driver">Driver & Pengemudi</option>
                  <option value="ob">Office Boy / Girl</option>
                  <option value="teknisi">Teknisi & Maintenance</option>
                  <option value="resepsionis">
                    Resepsionis & Front Office
                  </option>
                  <option value="gardener">Gardener & Taman</option>
                  <option value="gudang">Gudang & Logistik</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Jumlah Tenaga Kerja
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="Contoh: 5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider"
                >
                  Detail Kebutuhan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Jelaskan kebutuhan tenaga kerja Anda — lokasi penempatan, durasi, kualifikasi khusus, dll."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/30 transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kontak */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card Kontak */}
            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
              <h3 className="text-base font-semibold text-white mb-5">
                Informasi Kontak
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Telepon
                    </div>
                    <div className="text-sm text-slate-400">
                      +62 411-123-4567
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      WhatsApp: +62 812-3456-7890
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Email</div>
                    <div className="text-sm text-slate-400">
                      info@manpowersupply.co.id
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Balas dalam 1x24 jam
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Kantor</div>
                    <div className="text-sm text-slate-400">
                      Jl. AP Pettarani No. 123
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Makassar, Sulawesi Selatan 90222
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Jam Operasional
                    </div>
                    <div className="text-sm text-slate-400">
                      Senin - Jumat: 08:00 - 17:00 WITA
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Sabtu: 08:00 - 12:00 WITA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 border border-emerald-500/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-semibold text-white">
                  Chat WhatsApp
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Butuh respons lebih cepat? Langsung chat kami via WhatsApp untuk
                konsultasi instan.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
