# Progress Tracker — PT RMR Energi Indonesia Website

> Diperbarui: 2026-03-04 19:30 WITA
> Proyek: Company Profile Website for PT RMR Energi Indonesia (Pivoted from ManPower Supply)

## Status: Fase 1 — Company Profile Redesign (Frontend MVP)

---

### ✅ SELESAI (TRANSISI & REDESIGN)

#### 🔄 Rebranding & Design System

- [x] Pivot project scope: Menjadi Company Profile PT RMR Energi Indonesia.
- [x] Update Branding: Warna primary Green (`#056839`) dan secondary Gold/Yellow (`#facc15`).
- [x] Update `globals.css`: Definisi variabel tema baru (Clean & Premium).
- [x] Update Typography: Menggunakan font profesional (Inter/Sans-serif).
- [x] Update Assets: Integrasi gambar bertema kehutanan, lingkungan, dan energi dari Unsplash.

#### 📊 Data Foundation

- [x] Extract Content: Mengambil data dari Company Profile PDF (Tagline, Visi/Misi, Layanan KBLI, Proyek, Tim Ahli).
- [x] Update `types/index.ts`: Definisi tipe data baru (`ServiceItem`, `Project`, `Expert`, `Partner`).
- [x] Update `lib/dummy-data.ts`: Mengisi data asli PT RMR (3 Layanan Utama, 5+ Proyek Unggulan, 4 Tenaga Ahli Senior).

#### 🛠️ Core UI Components

- [x] Navbar: Desain ulang logo (RMR style), link navigasi (Beranda, Layanan, Proyek, Tentang Kami, Kontak), dan penanganan state scroll.
- [x] Footer: Redesign total dengan info kontak RMR, link layanan kehutanan, dan legalitas (NIB).
- [x] Komponen UI: Update visual di seluruh halaman untuk konsistensi branding.

#### 📄 App Pages (Redesign)

| Phase 2: Content & Structure | 100% | ✅ |
| Phase 3: UI/UX Refinement | 100% | ✅ |

## 📁 Recent Activity Log

### Redesign Phase (PT RMR Energi Indonesia)

- **[DONE]** Home Page: Full redesign with high-end premium aesthetics.
- **[DONE]** About Page: Vision, Mission, Legality (NIB), and Experts.
- **[DONE]** Services Page: Dynamic layout with KBLI code integration.
- **[DONE]** Projects Page: Portfolio grid with status filtering.
- **[DONE]** **Project Detail Page**: Dynamic route `[id]` with deep project insights.
- **[DONE]** **Navbar Accessibility**: Fixed text contrast on light/dark hero sections.
- **[DONE]** **Expert UI/UX**: Improved expert card spacing and readability.
- **[DONE]** Contact Page: Form with WhatsApp and branch office locations.
- **[DONE]** **Build Bugfix**: Fixed `globals.css` and type errors for successful deployment.

### Development Status

- **CI/CD**: Build passing on Vercel.
- **Next.js Version**: 16.1.6 (Turbopack).
- **Tailwind Version**: v4.0.0.

## 🚀 Future Enhancements

1. Add more project case studies from PDF.
2. Integrate backend for dynamic contact submissions.
3. Optimize images using Next/Image and Sharp.

- [x] Hapus route lama: `/workers` dan `/categories` (tidak relevan lagi).
- [x] Cleanup Code: Menghapus data dummy outsourcing lama.

---

### 🔄 SEDANG DIKERJAKAN

- [ ] Polishing Visual: Menambahkan micro-animations (Framer Motion) di halaman Services & Projects.
- [ ] SEO Optimization: Update metadata (title/description) di setiap halaman baru sesuai keyword RMR & PPKH.
- [ ] Responsive Testing: Memastikan tampilan premium di Mobile (Small screens).

---

### ⏳ BELUM DIMULAI

#### 🚀 Fitur Lanjutan

- [ ] Detail Project Page: Halaman khusus untuk setiap riwayat proyek (Case Study).
- [ ] Detail Service Page: Penjelasan mendalam per jenis izin PPKH.
- [ ] Integration: (Opsional) Form kontak terintegrasi dengan email/database.

#### ⚙️ Backend (TBD - Jika Diperlukan)

- [ ] Migrasi database untuk Master Project & Expert Team.
- [ ] Admin Dashboard (Filament/Laravel) untuk update portofolio secara dinamis.

---

## Struktur Folder Project (Updated)

```
manPower_supply/
├── docs/                  ← Dokumentasi (PROGRESS, ADR, Progress Tracker)
├── frontend/              ← Website Publik (Next.js)
│   ├── src/
│   │   ├── app/           ← Pages (Beranda, Layanan, Proyek, Tentang, Kontak)
│   │   ├── components/    ← Navbar, Footer, UI Elements
│   │   ├── lib/           ← Dummy Data RMR & Utils
│   │   └── types/         ← RMR Type Definitions
└── base-laravel/          ← (Opsional) Backend Laravel
```

---

## Cara Menjalankan

```bash
# Frontend (Next.js)
cd frontend
npm install
npm run dev    # → http://localhost:3000
```
