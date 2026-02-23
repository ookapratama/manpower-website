/**
 * Komponen WorkerCard — Card pekerja untuk listing
 */
import Link from "next/link";
import { MapPin, Star, Clock, Briefcase } from "lucide-react";
import { WorkerCardData } from "@/types";
import {
  formatRupiah,
  getAvailabilityLabel,
  getAvailabilityBadgeClasses,
  truncate,
} from "@/lib/utils";

interface WorkerCardProps {
  worker: WorkerCardData;
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <Link href={`/workers/${worker.slug}`} className="group block">
      <div className="relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/5">
        {/* Gradient accent on hover */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-5">
          {/* Header: foto + info */}
          <div className="flex items-start gap-4 mb-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-xl font-bold text-sky-400">
                {worker.fullName.charAt(0)}
              </div>
              {/* Status dot */}
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-slate-900 ${
                  worker.availabilityStatus === "available"
                    ? "bg-emerald-500"
                    : worker.availabilityStatus === "busy"
                      ? "bg-amber-500"
                      : "bg-red-500"
                }`}
              />
            </div>

            {/* Name & category */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white truncate group-hover:text-sky-400 transition-colors">
                {worker.fullName}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {worker.categoryName}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span className="text-xs text-slate-400">
                  {worker.location}
                </span>
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg border ${getAvailabilityBadgeClasses(worker.availabilityStatus)}`}
            >
              {getAvailabilityLabel(worker.availabilityStatus)}
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-2 rounded-lg bg-white/[0.02]">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Star className="w-3 h-3 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  {worker.rating}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                Rating
              </span>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/[0.02]">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Clock className="w-3 h-3 text-sky-400" />
                <span className="text-sm font-semibold text-white">
                  {worker.experienceYears}th
                </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                Pengalaman
              </span>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/[0.02]">
              <div className="mb-0.5">
                <span className="text-sm font-semibold text-emerald-400">
                  {formatRupiah(worker.dailyRate).replace("Rp", "").trim()}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                /hari
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {worker.skills.slice(0, 3).map((skill) => (
              <span
                key={skill.id}
                className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-white/[0.03] border border-white/5 rounded-md"
              >
                {skill.name}
              </span>
            ))}
            {worker.skills.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-medium text-sky-400 bg-sky-500/5 border border-sky-500/10 rounded-md">
                +{worker.skills.length - 3} lainnya
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
