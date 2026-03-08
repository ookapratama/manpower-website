/**
 * Komponen Navbar — Navigasi utama PT RMR Energi Indonesia
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trees as Tree, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/services" },
  { name: "Proyek", href: "/projects" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Kontak", href: "/contact" },
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
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Tree className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}
              >
                PT RMR
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest leading-normal transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-secondary"}`}
              >
                Energi Indonesia
              </span>
            </div>
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
                      ? scrolled
                        ? "text-primary"
                        : "text-secondary"
                      : scrolled
                        ? "text-gray-600 hover:text-primary"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
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
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95"
            >
              <ShieldCheck className="w-4 h-4" />
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-600 hover:bg-gray-100" : "text-primary hover:bg-white/10"}`}
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-lg font-bold transition-colors ${
                    pathname === link.href ? "text-primary" : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  Konsultasi Gratis
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
