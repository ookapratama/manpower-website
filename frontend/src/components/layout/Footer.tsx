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
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A00] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 noise-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#EA580C] flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-gradient tracking-tighter">
                ManPower Supply
              </span>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed font-medium">
              Penyedia layanan tenaga kerja outsourcing profesional dan
              terpercaya di Indonesia. Kami menghubungkan talenta terbaik dengan
              kebutuhan bisnis strategis Anda.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F97316] hover:border-[#F97316]/50 hover:bg-[#F97316]/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Layanan Kami
            </h4>
            <ul className="space-y-4">
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
                    className="text-slate-400 hover:text-[#F97316] transition-colors font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Tautan Cepat
            </h4>
            <ul className="space-y-4">
              {[
                "Beranda",
                "Cari Tenaga Kerja",
                "Kategori",
                "Tentang Kami",
                "Hubungi Kami",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-[#F97316] transition-colors font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Hubungi Kami
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DC2626] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-400 font-medium leading-relaxed">
                  Jl. Andi Pangeran Pettarani No. 123, Makassar, Sulawesi
                  Selatan
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-400 font-bold">
                  +62 411-123-4567
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-400 font-bold">
                  info@manpowersupply.co.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-bold">
            © 2026 ManPower Supply. Premium Outsourcing Solutions.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Ketentuan Layanan
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
