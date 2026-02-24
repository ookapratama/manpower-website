/**
 * Komponen CategoryCard — Card kategori Premium (Light Theme + Hover Effects)
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "@/types";
import {
  Shield,
  Sparkles,
  Car,
  Coffee,
  Wrench,
  UserCheck,
  TreePine,
  Package,
  LucideIcon,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Sparkles,
  Car,
  Coffee,
  Wrench,
  UserCheck,
  TreePine,
  Package,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/workers?category=${category.slug}`}
        className="group block h-full"
      >
        <div className="h-full bg-white border border-[#FED7AA]/30 p-8 rounded-[2rem] hover:border-[#EA580C]/40 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(220,38,38,0.08)] relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left group">
          {/* Background Accent */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#EA580C]/10 transition-colors" />

          <div className="w-14 h-14 rounded-2xl bg-[#FFF7F5] text-[#EA580C] flex items-center justify-center mb-8 group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(220,38,38,0.2)] group-hover:rotate-6 relative z-10 border border-[#FED7AA]/20 group-hover:border-[#DC2626]">
            <Icon className="w-7 h-7" />
          </div>

          <div className="flex-1 relative z-10">
            <h3 className="text-xl font-black text-[#1C0A00] mb-3 group-hover:text-[#DC2626] transition-colors tracking-tight leading-none">
              {category.name}
            </h3>
            <p className="text-sm text-[#78350F]/60 mb-8 line-clamp-3 leading-relaxed font-bold italic">
              &ldquo;{category.description}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between w-full mt-auto pt-6 border-t border-[#FED7AA]/20 relative z-10">
            <div className="text-[10px] font-black text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/5 px-4 py-2 rounded-full border border-[#EA580C]/10">
              {category.workerCount} Tenaga Kerja
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1C0A00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
