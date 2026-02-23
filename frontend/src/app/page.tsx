/**
 * Halaman Utama — Landing page ManPower Supply
 */
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Users,
  Building2,
  MapPin,
  Award,
  CheckCircle2,
  Star,
  ChevronRight,
  Shield,
  Sparkles,
  Phone,
} from "lucide-react";
import CategoryCard from "@/components/ui/CategoryCard";
import WorkerCard from "@/components/ui/WorkerCard";
import {
  categories,
  workerCards,
  siteStats,
  testimonials,
} from "@/lib/dummy-data";
import { formatNumber } from "@/lib/utils";

export default function HomePage() {
  const featuredWorkers = workerCards
    .filter((w) => w.availabilityStatus === "available")
    .slice(0, 6);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/3 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-sky-500/5 border border-sky-500/10 text-sky-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Terpercaya Sejak 2020 — Sulawesi Selatan
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Solusi </span>
              <span className="text-gradient">Tenaga Kerja</span>
              <br />
              <span className="text-white">Profesional & Terpercaya</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Temukan tenaga kerja berkualitas untuk kebutuhan bisnis Anda. Dari
              security, cleaning service, hingga tenaga teknis — semua tersedia
              dan siap bekerja.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-slate-900/80 border border-white/10 rounded-2xl p-2 backdrop-blur-sm focus-within:border-sky-500/30 focus-within:shadow-lg focus-within:shadow-sky-500/5 transition-all">
                <Search className="w-5 h-5 text-slate-500 ml-4" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan keahlian, kategori, atau lokasi..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
                <Link
                  href="/workers"
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20"
                >
                  Cari
                </Link>
              </div>

              {/* Quick tags */}
              <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                <span className="text-xs text-slate-500">Populer:</span>
                {["Security", "Cleaning Service", "Driver", "Teknisi"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/workers?search=${tag.toLowerCase()}`}
                      className="px-3 py-1 text-xs text-slate-400 bg-white/[0.03] border border-white/5 rounded-lg hover:border-sky-500/20 hover:text-sky-400 transition-all"
                    >
                      {tag}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: Users,
                  value: `${siteStats.totalWorkers}+`,
                  label: "Tenaga Kerja",
                },
                {
                  icon: Building2,
                  value: `${siteStats.totalPlacements}+`,
                  label: "Penempatan",
                },
                {
                  icon: MapPin,
                  value: `${siteStats.totalLocations}`,
                  label: "Kota/Kabupaten",
                },
                { icon: Award, value: "98%", label: "Kepuasan Klien" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <stat.icon className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== KATEGORI SECTION ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Kategori Tenaga Kerja
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Berbagai jenis tenaga kerja profesional siap memenuhi kebutuhan
              operasional bisnis Anda
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KENAPA PILIH KAMI ==================== */}
      <section className="relative py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Kiri: Teks */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
                Kenapa Pilih Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Mitra Terpercaya untuk{" "}
                <span className="text-gradient">Solusi Tenaga Kerja</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Kami menyediakan tenaga kerja yang terseleksi, terlatih, dan
                berpengalaman. Dengan proses rekrutmen yang ketat dan pelatihan
                berkala, kami memastikan setiap pekerja yang kami kirim memenuhi
                standar profesionalisme tertinggi.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Seleksi Ketat",
                    desc: "Proses screening berlapis termasuk verifikasi identitas, riwayat, dan kompetensi.",
                  },
                  {
                    title: "Pelatihan Berkala",
                    desc: "Setiap pekerja mendapat pelatihan rutin sesuai bidang keahliannya.",
                  },
                  {
                    title: "Penggantian Cepat",
                    desc: "Jaminan penggantian tenaga kerja dalam 1x24 jam jika tidak sesuai standar.",
                  },
                  {
                    title: "Asuransi & Legalitas",
                    desc: "Semua pekerja terdaftar BPJS dan dilengkapi dokumen legal yang lengkap.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kanan: Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center">
                <div className="text-4xl font-extrabold text-gradient mb-2">
                  5+
                </div>
                <div className="text-sm text-slate-400">Tahun Pengalaman</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center">
                <div className="text-4xl font-extrabold text-gradient mb-2">
                  287+
                </div>
                <div className="text-sm text-slate-400">Tenaga Kerja Aktif</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center">
                <div className="text-4xl font-extrabold text-gradient mb-2">
                  150+
                </div>
                <div className="text-sm text-slate-400">Klien Perusahaan</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center">
                <div className="text-4xl font-extrabold text-gradient mb-2">
                  98%
                </div>
                <div className="text-sm text-slate-400">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TENAGA KERJA UNGGULAN ==================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
                Tenaga Kerja Terbaik
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Pekerja Unggulan
              </h2>
              <p className="text-slate-400">
                Tenaga kerja terpilih dengan rating dan pengalaman terbaik
              </p>
            </div>
            <Link
              href="/workers"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-xl hover:bg-sky-500/10 transition-colors"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/workers"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-xl"
            >
              Lihat Semua Pekerja
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIAL ==================== */}
      <section className="relative py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-full mb-4">
              Testimoni
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Dipercaya Ratusan Perusahaan
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Apa kata klien kami tentang layanan ManPower Supply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-sky-500/10 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-700"}`}
                    />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-sm font-bold text-sky-400">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/3 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Butuh Tenaga Kerja untuk{" "}
            <span className="text-gradient">Bisnis Anda?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Hubungi kami sekarang untuk konsultasi gratis. Tim kami siap
            membantu menemukan solusi tenaga kerja yang tepat untuk kebutuhan
            Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link
              href="/workers"
              className="px-8 py-4 text-base font-medium text-slate-300 border border-white/10 rounded-xl hover:border-sky-500/20 hover:text-white hover:bg-white/[0.02] transition-all"
            >
              Lihat Tenaga Kerja
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-sky-400" />
              +62 411-123-4567
            </span>
            <span>•</span>
            <span>Konsultasi Gratis</span>
            <span>•</span>
            <span>Respon Cepat</span>
          </div>
        </div>
      </section>
    </>
  );
}
