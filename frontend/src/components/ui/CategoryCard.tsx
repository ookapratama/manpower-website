/**
 * Komponen CategoryCard — Card kategori (Light Theme)
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
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={`/workers?category=${category.slug}`} className="group block">
        <div className="h-full bg-white border border-slate-100 p-8 rounded-3xl hover:border-[#FED7AA] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF7F5] text-[#EA580C] flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-red-900/20 group-hover:rotate-6">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-[#1C0A00] mb-3 group-hover:text-[#DC2626] transition-colors leading-tight">
            {category.name}
          </h3>
          <p className="text-base text-[#78350F]/70 mb-6 line-clamp-2 leading-relaxed font-medium">
            {category.description}
          </p>
          <div className="text-xs font-black text-[#EA580C] bg-[#FFF7F5] px-4 py-2 rounded-xl inline-block group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300">
            {category.workerCount} Tenaga Kerja
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
