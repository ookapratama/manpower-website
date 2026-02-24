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
    <div className="min-h-screen bg-[#FFF7F5]">
      {/* Navigation Header */}
      <div className="bg-white border-b border-[#FED7AA]/20 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LinkNext
            href="/workers"
            className="inline-flex items-center gap-2 text-sm font-black text-[#78350F]/70 hover:text-[#DC2626] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar Pekerja
          </LinkNext>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Profil Header Card */}
            <div className="bg-white border border-[#FED7AA]/30 rounded-[3rem] p-10 sm:p-14 shadow-2xl shadow-red-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#EA580C]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl ring-1 ring-[#FED7AA]/20">
                    <Image
                      src={worker.photoUrl}
                      alt={worker.fullName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-full border-[5px] border-white shadow-lg ${
                      worker.availabilityStatus === "available"
                        ? "bg-emerald-500"
                        : worker.availabilityStatus === "busy"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1C0A00] tracking-tighter">
                      {worker.fullName}
                    </h1>
                    <span
                      className={`inline-flex px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${
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

                  <p className="text-[#EA580C] font-black text-xl mb-8 uppercase tracking-[0.2em]">
                    {worker.category.name}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm text-[#78350F]/70 font-bold">
                    <span className="flex items-center gap-2.5 px-5 py-2.5 bg-[#FFF7F5] rounded-2xl border border-[#FED7AA]/30">
                      <MapPin className="w-4 h-4 text-[#DC2626]" />
                      {worker.location}
                    </span>
                    <span className="flex items-center gap-2.5 px-5 py-2.5 bg-[#FFF7F5] rounded-2xl border border-[#FED7AA]/30">
                      <Clock className="w-4 h-4 text-[#EA580C]" />
                      {worker.experienceYears} Tahun Pengalaman
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
                  color: "text-[#EA580C]",
                  bg: "bg-[#FFF7F5]",
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
                  className="bg-white border border-[#FED7AA]/30 p-8 rounded-[2.5rem] text-center shadow-xl shadow-red-900/5 transition-transform hover:-translate-y-1 duration-300"
                >
                  <div
                    className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-5 border border-black/5 shadow-inner`}
                  >
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-2xl font-black text-[#1C0A00] mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Tabs Area */}
            <div className="bg-white border border-[#FED7AA]/30 rounded-[3rem] p-12 shadow-2xl shadow-red-900/5 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[30%] h-[30%] bg-[#DC2626]/5 rounded-full blur-[80px]" />

              <div className="mb-14 relative z-10">
                <h2 className="text-3xl font-black text-[#1C0A00] mb-8 flex items-center gap-4 tracking-tighter">
                  <span className="w-2 h-10 bg-[#DC2626] rounded-full shadow-lg shadow-red-900/20" />
                  Biografi & Profesionalisme
                </h2>
                <p className="text-[#78350F]/70 leading-[1.8] text-xl font-bold italic">
                  &ldquo;{worker.bio}&rdquo;
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-[#1C0A00] mb-8 flex items-center gap-4 tracking-tighter">
                  <span className="w-2 h-10 bg-[#EA580C] rounded-full shadow-lg shadow-orange-900/20" />
                  Keahlian & Sertifikasi
                </h2>
                <div className="flex flex-wrap gap-4">
                  {worker.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-4 px-8 py-4 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-[1.5rem] text-[#78350F] font-black text-sm hover:border-[#EA580C] hover:bg-white hover:shadow-xl transition-all cursor-default"
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
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="bg-white border-2 border-[#FED7AA]/20 rounded-[4rem] p-10 shadow-2xl shadow-red-900/10 relative overflow-hidden">
              <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />
              <h3 className="text-2xl font-black text-[#1C0A00] mb-10 border-b border-[#FED7AA]/20 pb-6 tracking-tighter text-center">
                Ajukan Penawaran
              </h3>

              <div className="p-10 rounded-[3rem] bg-[#DC2626] text-white mb-10 text-center relative overflow-hidden group shadow-2xl shadow-red-900/40">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-[40px]" />
                <div className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                  Tarif Harian (Mulai)
                </div>
                <div className="text-5xl font-black tracking-tighter">
                  {formatRupiah(worker.dailyRate)}
                </div>
                <div className="text-[10px] text-white/50 mt-4 font-bold uppercase tracking-widest leading-relaxed">
                  * Biaya Transparan Tanpa Komisi Sampingan
                </div>
              </div>

              <div className="space-y-5">
                <LinkNext
                  href="/contact"
                  className="flex items-center justify-center gap-4 w-full px-8 py-6 text-base font-black text-white bg-[#1A0A00] rounded-2xl hover:bg-black transition-all shadow-xl shadow-red-900/20 active:scale-95 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Hubungi Via WhatsApp
                </LinkNext>
                <button className="flex items-center justify-center gap-4 w-full px-8 py-6 text-base font-black text-[#1C0A00] border-2 border-[#FED7AA]/30 rounded-2xl hover:bg-[#FFF7F5] transition-all active:scale-95">
                  Unduh Resume Digital
                </button>
              </div>

              <div className="mt-12 pt-10 border-t border-[#FED7AA]/20 space-y-5">
                {[
                  {
                    icon: Shield,
                    text: "Tenaga Kerja Terverifikasi",
                    color: "text-emerald-500",
                  },
                  {
                    icon: Award,
                    text: "Garansi Kualitas 100%",
                    color: "text-[#EA580C]",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Legalitas Kontrak Resmi",
                    color: "text-[#DC2626]",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 text-xs font-black text-[#78350F]/70"
                  >
                    <div
                      className={`p-2 rounded-lg bg-[#FFF7F5] border border-black/5`}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
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
