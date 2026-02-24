/**
 * Komponen Footer — Footer utama website (Light Theme)
 */
import Link from "next/link";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C0A00] border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 noise-bg pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EA580C]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#DC2626] to-[#EA580C] flex items-center justify-center text-white shadow-2xl shadow-red-900/40 group-hover:rotate-6 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-3xl font-black text-gradient tracking-tighter">
                ManPower Supply
              </span>
            </Link>
            <p className="text-lg text-slate-400 leading-relaxed font-medium tracking-tight max-w-sm">
              Mendefinisikan ulang standar outsourcing profesional di Indonesia
              melalui pendekatan strategis dan berbasis kualitas.
            </p>
            <div className="flex items-center gap-5">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#EA580C] hover:border-[#EA580C]/30 hover:bg-[#EA580C]/5 transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-[10px] mb-10 uppercase tracking-[0.5em] opacity-40">
              Layanan Utama
            </h4>
            <ul className="space-y-5">
              {[
                "Security & Satpam",
                "Cleaning Service",
                "Driver & Pengemudi",
                "Teknisi Maintenance",
                "Gudang & Logistik",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/workers"
                    className="text-slate-400 hover:text-white transition-all font-bold tracking-tight inline-flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-[10px] mb-10 uppercase tracking-[0.5em] opacity-40">
              Tautan Cepat
            </h4>
            <ul className="space-y-5">
              {[
                { label: "Beranda", href: " /" },
                { label: "Cari Tenaga Kerja", href: "/workers" },
                { label: "Kanal Rekrutmen", href: "#" },
                { label: "Tentang Kami", href: "/about" },
                { label: "Hubungi Penjualan", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-all font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 bg-white/3 border border-white/5 rounded-[3rem] p-10 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Phone className="w-24 h-24 text-white" />
            </div>
            <h4 className="text-white font-black text-[10px] mb-10 uppercase tracking-[0.5em] opacity-40">
              International HQ
            </h4>
            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DC2626] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    Office Jakarta
                  </div>
                  <span className="text-sm text-slate-400 font-medium leading-relaxed">
                    Kawasan SCBD, District 8, Jakarta Selatan, 12190
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    SLA Support
                  </div>
                  <span className="text-sm text-slate-400 font-bold">
                    +62 123-MANPOWER
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight mb-1">
                    Corporate Email
                  </div>
                  <span className="text-sm text-slate-400 font-bold">
                    partnerships@manpowersupply.co.id
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
              © 2026 ManPower Supply International.
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
              Part of MPS Global Network
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link
              href="#"
              className="text-[10px] text-slate-500 hover:text-white transition-colors font-black uppercase tracking-widest"
            >
              Terms of Engagement
            </Link>
            <Link
              href="#"
              className="text-[10px] text-slate-500 hover:text-white transition-colors font-black uppercase tracking-widest"
            >
              Privacy Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
