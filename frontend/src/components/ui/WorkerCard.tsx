/**
 * Komponen WorkerCard — Card pekerja Premium (Light Theme + Hover Effects)
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { WorkerCardData } from "@/types";
import { formatRupiah, getAvailabilityLabel } from "@/lib/utils";

interface WorkerCardProps {
  worker: WorkerCardData;
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group"
    >
      <Link href={`/workers/${worker.slug}`} className="block">
        <div className="bg-white border border-[#FED7AA]/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)] hover:border-[#EA580C]/30 relative">
          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md ${
                worker.availabilityStatus === "available"
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                  : worker.availabilityStatus === "busy"
                    ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                    : "bg-red-500/10 text-red-600 border-red-500/20"
              }`}
            >
              {getAvailabilityLabel(worker.availabilityStatus)}
            </div>
          </div>

          <div className="absolute top-4 right-4 z-10">
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-[#FED7AA]/30 flex items-center justify-center text-[#DC2626] shadow-sm transform group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Photo & Background Accent */}
          <div className="relative h-56 overflow-hidden bg-[#FFF7F5]">
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#DC2626]/5 rounded-full blur-2xl pointer-events-none" />

            <Image
              src={worker.photoUrl}
              alt={worker.fullName}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Card Content */}
          <div className="p-6 relative">
            {/* Verification Badge */}
            <div className="flex items-center gap-1.5 mb-3 text-[9px] font-black text-emerald-600 uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Expert
            </div>

            <h3 className="text-xl font-black text-[#1C0A00] tracking-tight mb-1 truncate leading-tight">
              {worker.fullName}
            </h3>

            <p className="text-[#EA580C] text-sm font-black uppercase tracking-[0.15em] mb-4">
              {worker.categoryName}
            </p>

            <div className="flex items-center gap-2 text-[#78350F]/60 text-xs font-bold mb-6">
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              {worker.location}
            </div>

            {/* Stats Box */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#1C0A00]">
                    {worker.rating}
                  </div>
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    Rating
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FFF7F5] border border-[#FED7AA]/30 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Clock className="w-4 h-4 text-[#EA580C]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#1C0A00]">
                    {worker.experienceYears}th
                  </div>
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Pricing + Skills */}
            <div className="flex items-center justify-between pt-6 border-t border-[#FED7AA]/20">
              <div>
                <div className="text-[9px] font-black text-[#78350F]/40 uppercase tracking-widest mb-0.5">
                  Mulai Dari
                </div>
                <div className="text-lg font-black text-[#DC2626] tracking-tight">
                  {formatRupiah(worker.dailyRate)}
                  <span className="text-[10px] text-slate-400 ml-1">/hari</span>
                </div>
              </div>

              <div className="flex -space-x-2">
                {worker.skills.slice(0, 3).map((skill, i) => (
                  <div
                    key={skill.id}
                    title={skill.name}
                    className="w-8 h-8 rounded-full bg-white border-2 border-[#FFF7F5] flex items-center justify-center text-[8px] font-black text-[#EA580C] shadow-sm transform transition-transform hover:-translate-y-1 hover:z-10 cursor-help"
                  >
                    {skill.name.charAt(0)}
                  </div>
                ))}
                {worker.skills.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-[#1C0A00] border-2 border-[#FFF7F5] flex items-center justify-center text-[8px] font-black text-white shadow-sm">
                    +{worker.skills.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
