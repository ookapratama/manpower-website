/**
 * Komponen Navbar — Navigasi utama (Light Theme)
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Cari Tenaga Kerja", href: "/workers" },
  { name: "Kategori", href: "/categories" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Hubungi Kami", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A0A00]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl"
          : "bg-[#1A0A00]/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#EA580C] flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform duration-300">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xl font-black text-gradient tracking-tighter">
              ManPower Supply
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "text-[#F97316]"
                      : "text-white/80 hover:text-[#FED7AA]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F97316]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#DC2626] text-white text-sm font-black rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-lg hover:shadow-red-900/40 active:scale-95"
            >
              Minta Penawaran
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A0A00] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-lg font-bold transition-colors ${
                    pathname === link.href ? "text-[#F97316]" : "text-white/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-[#DC2626] text-white font-black rounded-xl shadow-lg shadow-red-900/20"
                  onClick={() => setIsOpen(false)}
                >
                  Minta Penawaran
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
