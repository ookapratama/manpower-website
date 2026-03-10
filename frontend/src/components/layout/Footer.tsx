/**
 * Komponen Footer — PT RMR Energi Indonesia
 */
import Link from "next/link";
import {
  Trees as Tree,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-32 pb-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 noise-bg pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-2xl group-hover:rotate-6 transition-transform">
                <Tree className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter leading-none">
                  PT RMR
                </span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">
                  Energi Indonesia
                </span>
              </div>
            </Link>
            <p className="text-lg text-white/60 leading-relaxed font-medium tracking-tight max-w-sm italic">
              &ldquo;Integritas dalam Perizinan, Keberlanjutan dalam
              Operasional.&rdquo;
            </p>
            <div className="flex items-center gap-5">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary/30 hover:bg-white/10 transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-secondary font-black text-[10px] mb-10 uppercase tracking-[0.5em] opacity-60">
              Layanan Utama
            </h4>
            <ul className="space-y-6">
              {[
                { label: "Pembukaan Kawasan Hutan", href: "/services" },
                {
                  label: "Perizinan Kehutanan & Lingkungan",
                  href: "/services",
                },
                { label: "Perencanaan & Konsultansi", href: "/services" },
                { label: "Studi AMDAL & RKL-RPL", href: "/services" },
                { label: "Pemetaan GIS & Citra Satelit", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-secondary transition-all font-bold tracking-tight inline-flex items-center gap-2 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-secondary font-black text-[10px] mb-10 uppercase tracking-[0.5em] opacity-60">
              International HQ
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    Kantor Pusat
                  </div>
                  <span className="text-sm text-white/40 font-medium leading-relaxed">
                    JI. SYARIF AL QADRI No. 91, Maricaya Baru, Makassar
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    Hubungi Admin
                  </div>
                  <span className="text-sm text-white/60 font-bold">
                    +62 815-8954-945
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    Email Resmi
                  </div>
                  <span className="text-sm text-white/60 font-bold">
                    pt.rmrenergiindonesia@gmail.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">
              © 2026 PT RMR ENERGI INDONESIA. All rights reserved.
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/5" />
            <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">
              NIB: 0403260056576
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link
              href="#"
              className="text-[10px] text-white/30 hover:text-white transition-colors font-black uppercase tracking-widest"
            >
              Legal Compliance
            </Link>
            <Link
              href="#"
              className="text-[10px] text-white/30 hover:text-white transition-colors font-black uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
