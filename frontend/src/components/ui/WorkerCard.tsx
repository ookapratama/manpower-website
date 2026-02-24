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
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Link href={`/workers/${worker.slug}`} className="group block">
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
          <div className="p-5">
            {/* Header: foto + info */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                  <Image
                    src={worker.photoUrl}
                    alt={worker.fullName}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div
                  className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
                    worker.availabilityStatus === "available"
                      ? "bg-emerald-500"
                      : worker.availabilityStatus === "busy"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                  {worker.fullName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {worker.categoryName}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-slate-400">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">{worker.location}</span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border ${
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

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100/50">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-bold text-slate-900">
                    {worker.rating}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">Rating</span>
              </div>
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100/50">
                <div className="flex items-center justify-center gap-1 mb-0.5 text-sky-600">
                  <Clock className="w-3 h-3" />
                  <span className="text-sm font-bold text-slate-900">
                    {worker.experienceYears}th
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">Exp</span>
              </div>
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100/50">
                <div className="text-sm font-bold text-emerald-600 mb-0.5">
                  {worker.dailyRate / 1000}k
                </div>
                <span className="text-[10px] text-slate-500">/hari</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {worker.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200"
                >
                  {skill.name}
                </span>
              ))}
              {worker.skills.length > 3 && (
                <span className="px-2 py-0.5 text-[10px] font-medium text-sky-700 bg-sky-50 rounded-md border border-sky-100">
                  +{worker.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
