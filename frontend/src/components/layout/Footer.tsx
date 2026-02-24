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
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                ManPower<span className="text-sky-600">Supply</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Penyedia layanan tenaga kerja outsourcing profesional dan
              terpercaya di Sulawesi Selatan. Kami menghubungkan talenta terbaik
              dengan kebutuhan bisnis Anda.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Layanan Kami</h4>
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
                    className="text-sm text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Tautan Cepat</h4>
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
                    className="text-sm text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">
                  Jl. Andi Pangeran Pettarani No. 123, Makassar, Sulawesi
                  Selatan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm text-slate-500">+62 411-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm text-slate-500">
                  info@manpowersupply.co.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2026 ManPower Supply Website. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Ketentuan Layanan
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
