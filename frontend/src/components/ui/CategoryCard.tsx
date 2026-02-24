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
        <div className="h-full bg-white border border-slate-200 p-6 rounded-2xl hover:border-sky-300 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 mx-auto sm:mx-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-sky-200 group-hover:rotate-6">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
          <div className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full inline-block group-hover:bg-sky-600 group-hover:text-white transition-colors">
            {category.workerCount} Tenaga Kerja
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
