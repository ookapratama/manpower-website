/**
 * Komponen Footer — Footer utama website
 */
import Link from "next/link";
import { Users, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      {/* Gradient overlay di atas */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">ManPower</span>
                <span className="text-lg font-light text-sky-400">Supply</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Penyedia tenaga kerja profesional terpercaya di Sulawesi Selatan.
              Mitra terbaik Anda untuk solusi tenaga kerja outsourcing.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Makassar, Sulawesi Selatan</span>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {[
                "Security & Satpam",
                "Cleaning Service",
                "Driver & Pengemudi",
                "Office Boy / Girl",
                "Teknisi & Maintenance",
                "Gudang & Logistik",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/categories"
                    className="group flex items-center text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Link Cepat
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Tentang Kami", href: "/about" },
                { label: "Cari Tenaga Kerja", href: "/workers" },
                { label: "Hubungi Kami", href: "/contact" },
                { label: "Kebijakan Privasi", href: "#" },
                { label: "Syarat & Ketentuan", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">+62 411-123-4567</p>
                  <p className="text-xs text-slate-500">
                    Senin - Jumat, 08:00 - 17:00 WITA
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">
                    info@manpowersupply.co.id
                  </p>
                  <p className="text-xs text-slate-500">Balas dalam 1x24 jam</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">
                    Jl. AP Pettarani No. 123
                  </p>
                  <p className="text-xs text-slate-500">
                    Makassar, Sulawesi Selatan 90222
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ManPower Supply. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="text-xs text-slate-600">
            Dikembangkan oleh{" "}
            <span className="text-slate-400">Ooka Pratama</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
