/**
 * Halaman Detail Pekerja — Profil lengkap tenaga kerja
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Briefcase,
  Phone,
  CheckCircle2,
  Shield,
  Award,
  CalendarDays,
} from "lucide-react";
import { workers } from "@/lib/dummy-data";
import {
  formatRupiah,
  getAvailabilityLabel,
  getAvailabilityBadgeClasses,
} from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const worker = workers.find((w) => w.slug === slug);

  if (!worker) return notFound();

  return (
    <div className="min-h-screen">
      {/* Back navigation */}
      <div className="bg-slate-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/workers"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke direktori
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Profil */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header profil */}
            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Avatar besar */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-3xl font-bold text-sky-400">
                    {worker.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-3 border-slate-900 ${
                      worker.availabilityStatus === "available"
                        ? "bg-emerald-500"
                        : worker.availabilityStatus === "busy"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-white">
                      {worker.fullName}
                    </h1>
                    <span
                      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-lg border ${getAvailabilityBadgeClasses(worker.availabilityStatus)}`}
                    >
                      {getAvailabilityLabel(worker.availabilityStatus)}
                    </span>
                  </div>

                  <p className="text-sm text-sky-400 font-medium mb-3">
                    {worker.category.name}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {worker.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {worker.experienceYears} tahun pengalaman
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-slate-500" />
                      {worker.totalProjects} proyek selesai
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl text-center">
                <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">
                  {worker.rating}
                </div>
                <div className="text-xs text-slate-500">Rating</div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl text-center">
                <Clock className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">
                  {worker.experienceYears} th
                </div>
                <div className="text-xs text-slate-500">Pengalaman</div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl text-center">
                <Briefcase className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">
                  {worker.totalProjects}
                </div>
                <div className="text-xs text-slate-500">Proyek</div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl text-center">
                <CalendarDays className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-emerald-400">
                  {formatRupiah(worker.dailyRate)}
                </div>
                <div className="text-xs text-slate-500">Per Hari</div>
              </div>
            </div>

            {/* Tentang */}
            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
              <h2 className="text-lg font-semibold text-white mb-4">Tentang</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                {worker.bio}
              </p>
            </div>

            {/* Keahlian */}
            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
              <h2 className="text-lg font-semibold text-white mb-4">
                Keahlian & Sertifikasi
              </h2>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-lg"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Sidebar */}
          <div className="space-y-6">
            {/* Card Hubungi */}
            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl sticky top-24">
              <h3 className="text-base font-semibold text-white mb-4">
                Tertarik dengan pekerja ini?
              </h3>

              <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500/5 to-blue-500/5 border border-sky-500/10 mb-4">
                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-1">
                    Tarif Harian
                  </div>
                  <div className="text-2xl font-bold text-gradient">
                    {formatRupiah(worker.dailyRate)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Belum termasuk biaya admin
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Hubungi Kami
                </Link>
                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-300 border border-white/10 rounded-xl hover:border-sky-500/20 hover:text-white transition-colors">
                  Minta Penawaran
                </button>
              </div>

              <div className="mt-5 pt-5 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Pekerja terverifikasi & berasuransi
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-amber-400" />
                  Garansi penggantian 1x24 jam
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Konsultasi gratis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === Generate static params untuk build ===
export function generateStaticParams() {
  return workers.map((worker) => ({
    slug: worker.slug,
  }));
}
