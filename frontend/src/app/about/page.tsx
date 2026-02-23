/**
 * Halaman Tentang Kami — Profil perusahaan ManPower Supply
 */
import {
  Users,
  Target,
  Shield,
  Award,
  CheckCircle2,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "ManPower Supply — Penyedia jasa tenaga kerja outsourcing profesional dan terpercaya di Sulawesi Selatan sejak 2020.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-slate-900/50 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
            Tentang Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Mitra Terpercaya dalam
            <span className="text-gradient"> Penyediaan Tenaga Kerja</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ManPower Supply berdiri sejak 2020 dengan misi menjembatani
            kebutuhan perusahaan akan tenaga kerja profesional, terlatih, dan
            terpercaya di wilayah Sulawesi Selatan.
          </p>
        </div>
      </div>

      {/* Visi Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-sky-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Visi</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Menjadi perusahaan penyedia tenaga kerja terdepan dan terpercaya
              di Indonesia Timur, dengan standar profesionalisme tinggi dan
              komitmen terhadap kepuasan pelanggan.
            </p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Misi</h2>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                "Menyediakan tenaga kerja terseleksi dan terlatih",
                "Menjamin profesionalisme dan disiplin setiap pekerja",
                "Memberikan layanan responsif dan solusi cepat",
                "Memastikan legalitas dan perlindungan bagi setiap pekerja",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-slate-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-slate-400">
              Mengapa lebih dari 150 perusahaan mempercayai ManPower Supply
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Terverifikasi",
                desc: "Setiap pekerja melewati screening identitas, riwayat, dan kompetensi yang ketat.",
              },
              {
                icon: Award,
                title: "Bersertifikat",
                desc: "Pekerja dilengkapi sertifikasi sesuai bidang keahliannya masing-masing.",
              },
              {
                icon: Handshake,
                title: "Garansi Layanan",
                desc: "Penggantian tenaga kerja gratis dalam 1x24 jam jika tidak sesuai standar.",
              },
              {
                icon: Building2,
                title: "Legal & Berasuransi",
                desc: "Semua pekerja terdaftar BPJS Ketenagakerjaan dan dilengkapi kontrak resmi.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl text-center hover:border-sky-500/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "Tahun Berdiri", color: "text-sky-400" },
              {
                value: "287+",
                label: "Tenaga Kerja Aktif",
                color: "text-emerald-400",
              },
              {
                value: "150+",
                label: "Klien Perusahaan",
                color: "text-amber-400",
              },
              {
                value: "1,450+",
                label: "Total Penempatan",
                color: "text-purple-400",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6">
                <div
                  className={`text-4xl sm:text-5xl font-extrabold ${stat.color} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
