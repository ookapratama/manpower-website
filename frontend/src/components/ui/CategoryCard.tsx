/**
 * Komponen CategoryCard — Card kategori pekerjaan
 */
import Link from "next/link";
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
  const IconComponent = iconMap[category.icon] || Package;

  return (
    <Link href={`/workers?category=${category.slug}`} className="group block">
      <div className="relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden">
        {/* Background glow on hover */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/10 flex items-center justify-center mb-4 group-hover:border-sky-500/30 transition-colors">
            <IconComponent className="w-6 h-6 text-sky-400" />
          </div>

          <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-sky-400 transition-colors">
            {category.name}
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
            {category.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              <span className="text-sky-400 font-semibold">
                {category.workerCount}
              </span>{" "}
              tenaga kerja
            </span>
            <span className="text-xs text-sky-400 font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              Lihat →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
