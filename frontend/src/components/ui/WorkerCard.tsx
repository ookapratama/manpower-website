/**
 * Komponen WorkerCard — Card pekerja (Light Theme)
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { WorkerCardData } from "@/types";
import { formatRupiah, getAvailabilityLabel } from "@/lib/utils";

interface WorkerCardProps {
  worker: WorkerCardData;
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.5 }}>
      <Link href={`/workers/${worker.slug}`} className="group block">
        <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:border-[#FED7AA] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/5">
          <div className="p-6">
            {/* Header: foto + info */}
            <div className="flex items-start gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <Image
                    src={worker.photoUrl}
                    alt={worker.fullName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-white ${
                    worker.availabilityStatus === "available"
                      ? "bg-emerald-500"
                      : worker.availabilityStatus === "busy"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black text-[#1C0A00] truncate group-hover:text-[#DC2626] transition-colors leading-snug">
                  {worker.fullName}
                </h3>
                <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mt-1">
                  {worker.categoryName}
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-[#78350F]/50">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold">{worker.location}</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-2xl bg-[#FFF7F5] border border-[#FED7AA]/30">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Star className="w-3.5 h-3.5 text-[#F97316] fill-[#F97316]" />
                  <span className="text-sm font-black text-[#1C0A00]">
                    {worker.rating}
                  </span>
                </div>
                <span className="text-[10px] font-black text-[#78350F]/40 uppercase tracking-tighter">
                  Rating
                </span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[#FFF7F5] border border-[#FED7AA]/30">
                <div className="flex items-center justify-center gap-1 mb-0.5 text-[#EA580C]">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-sm font-black text-[#1C0A00]">
                    {worker.experienceYears}th
                  </span>
                </div>
                <span className="text-[10px] font-black text-[#78350F]/40 uppercase tracking-tighter">
                  Exp
                </span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[#FFF7F5] border border-[#FED7AA]/30">
                <div className="text-sm font-black text-[#DC2626] mb-0.5">
                  {worker.dailyRate / 1000}k
                </div>
                <span className="text-[10px] font-black text-[#78350F]/40 uppercase tracking-tighter">
                  /hari
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {worker.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 text-[10px] font-bold text-[#78350F] bg-[#FFF7F5] rounded-lg border border-[#FED7AA]/50"
                >
                  {skill.name}
                </span>
              ))}
              {worker.skills.length > 3 && (
                <span className="px-3 py-1 text-[10px] font-black text-[#DC2626] bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/10">
                  +{worker.skills.length - 3} More
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
