/**
 * Halaman Detail Pekerja — Profil Lengkap (Light Theme)
 */
import Link from "next/image";
import Image from "next/image";
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
import LinkNext from "next/link";
import { workers } from "@/lib/dummy-data";
import { formatRupiah, getAvailabilityLabel } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const worker = workers.find((w) => w.slug === slug);

  if (!worker) return notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LinkNext
            href="/workers"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar Pekerja
          </LinkNext>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profil Header Card */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-60" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="relative shrink-0">
                  <div className="w-40 h-40 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-100">
                    <Image
                      src={worker.photoUrl}
                      alt={worker.fullName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute bottom-2 right-2 w-8 h-8 rounded-full border-4 border-white ${
                      worker.availabilityStatus === "available"
                        ? "bg-emerald-500"
                        : worker.availabilityStatus === "busy"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                      {worker.fullName}
                    </h1>
                    <span
                      className={`inline-flex px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${
                        worker.availabilityStatus === "available"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : worker.availabilityStatus === "busy"
                            ? "bg-amber-50 text-amber-700 border-amber-100"
                            : "bg-red-50 text-red-700 border-red-100"
                      }`}
                    >
                      {getAvailabilityLabel(worker.availabilityStatus)}
                    </span>
                  </div>

                  <p className="text-sky-600 font-black text-lg mb-6 uppercase tracking-wider">
                    {worker.category.name}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 font-bold">
                    <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <MapPin className="w-4 h-4 text-sky-500" />
                      {worker.location}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <Clock className="w-4 h-4 text-sky-500" />
                      {worker.experienceYears} Tahun Exp
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <Briefcase className="w-4 h-4 text-sky-500" />
                      {worker.totalProjects} Proyek
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                {
                  label: "Rating",
                  value: worker.rating,
                  icon: Star,
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                },
                {
                  label: "Pengalaman",
                  value: `${worker.experienceYears} th`,
                  icon: Clock,
                  color: "text-sky-500",
                  bg: "bg-sky-50",
                },
                {
                  label: "Proyek",
                  value: worker.totalProjects,
                  icon: Briefcase,
                  color: "text-purple-500",
                  bg: "bg-purple-50",
                },
                {
                  label: "Tarif",
                  value: formatRupiah(worker.dailyRate),
                  icon: CalendarDays,
                  color: "text-emerald-500",
                  bg: "bg-emerald-50",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-200 p-6 rounded-3xl text-center shadow-sm"
                >
                  <div
                    className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Tabs Area (Simplified for now) */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm overflow-hidden">
              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-sky-600 rounded-full" />
                  Biografi & Ringkasan
                </h2>
                <p className="text-slate-600 leading-[1.8] text-lg font-medium">
                  {worker.bio}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-emerald-500 rounded-full" />
                  Keahlian Utama
                </h2>
                <div className="flex flex-wrap gap-3">
                  {worker.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 font-bold hover:border-sky-300 hover:bg-sky-50 transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border-2 border-slate-100 rounded-[2.56rem] p-8 shadow-2xl shadow-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">
                Ajukan Penawaran
              </h3>

              <div className="p-6 rounded-3xl bg-sky-600 text-white mb-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                <div className="text-sky-100 text-sm font-bold uppercase tracking-widest mb-2">
                  Tarif Harian
                </div>
                <div className="text-4xl font-black">
                  {formatRupiah(worker.dailyRate)}
                </div>
                <div className="text-[10px] text-sky-100 mt-2 font-bold">
                  * Tarif tetap, tanpa biaya tersembunyi
                </div>
              </div>

              <div className="space-y-4">
                <LinkNext
                  href="/contact"
                  className="flex items-center justify-center gap-3 w-full px-6 py-5 text-sm font-black text-white bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Via WhatsApp
                </LinkNext>
                <button className="flex items-center justify-center gap-3 w-full px-6 py-5 text-sm font-black text-slate-900 border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-all active:scale-95">
                  Download Profil PDF
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 space-y-4">
                {[
                  {
                    icon: Shield,
                    text: "Pekerja Terverifikasi Internal",
                    color: "text-emerald-500",
                  },
                  {
                    icon: Award,
                    text: "Garansi Penggantian Gratis",
                    color: "text-amber-500",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Proses Administrasi Cepat",
                    color: "text-sky-500",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-xs font-bold text-slate-600"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return workers.map((worker) => ({
    slug: worker.slug,
  }));
}
