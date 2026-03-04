/**
 * Komponen SectorCard — Card Sektor Bisnis Premium (Light Theme + Hover Effects)
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sector } from "@/types";
import {
  Shield,
  Trees,
  Mountain,
  Hammer,
  Wrench,
  Recycle,
  HardHat,
  Users,
  LucideIcon,
  ArrowRight,
  Layers,
} from "lucide-react";

/** Pemetaan nama icon ke komponen Lucide */
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Trees,
  Mountain,
  Hammer,
  Wrench,
  Recycle,
  HardHat,
  Users,
};

interface SectorCardProps {
  sector: Sector;
}

export default function SectorCard({ sector }: SectorCardProps) {
  const Icon = iconMap[sector.icon] || Layers;

  // Hitung total tenaga kerja di sektor ini
  const totalWorkers = sector.categories.reduce(
    (sum, c) => sum + c.workerCount,
    0,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/services#${sector.slug}`} className="group block h-full">
        <div className="h-full bg-white border border-[#FED7AA]/30 p-10 rounded-[2.5rem] hover:border-[#EA580C]/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(220,38,38,0.1)] relative overflow-hidden flex flex-col group">
          {/* Background Accent Gradient */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#DC2626]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#EA580C]/10 transition-colors duration-700" />

          {/* Icon Section */}
          <div className="w-16 h-16 rounded-3xl bg-[#1C0A00] text-[#EA580C] flex items-center justify-center mb-10 group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(220,38,38,0.25)] group-hover:rotate-12 relative z-10">
            <Icon className="w-8 h-8" />
          </div>

          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-[0.3em] bg-[#EA580C]/5 px-3 py-1.5 rounded-full border border-[#EA580C]/10">
                Sektor Bisnis
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#1C0A00] mb-4 group-hover:text-[#DC2626] transition-colors tracking-tight leading-none">
              {sector.name}
            </h3>

            <p className="text-sm text-[#78350F]/60 mb-10 line-clamp-3 leading-relaxed font-bold italic">
              &ldquo;{sector.description}&rdquo;
            </p>

            {/* Sub-stats inside card */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#FFF7F5] p-4 rounded-2xl border border-[#FED7AA]/20">
                <div className="text-xl font-black text-[#1C0A00]">
                  {sector.categories.length}
                </div>
                <div className="text-[9px] font-black text-[#78350F]/40 uppercase tracking-widest">
                  Kategori
                </div>
              </div>
              <div className="bg-[#FFF7F5] p-4 rounded-2xl border border-[#FED7AA]/20">
                <div className="text-xl font-black text-[#1C0A00]">
                  {totalWorkers}
                </div>
                <div className="text-[9px] font-black text-[#78350F]/40 uppercase tracking-widest">
                  Pekerja
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full pt-8 border-t border-[#FED7AA]/20 relative z-10 group-hover:border-[#EA580C]/30 transition-colors">
            <span className="text-xs font-black text-[#1C0A00] group-hover:text-[#DC2626] transition-colors">
              Lihat Layanan Lengkap
            </span>
            <div className="w-10 h-10 rounded-full bg-[#EA580C]/5 text-[#EA580C] flex items-center justify-center group-hover:bg-[#1C0A00] group-hover:text-white transition-all duration-500 group-hover:translate-x-2">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
