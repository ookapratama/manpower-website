# Progress Tracker — PT RMR Energi Indonesia Website

> Diperbarui: 2026-03-09 15:45 WITA
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

#### 📊 Data Foundation (Updated Mar 2026)

- [x] Extract Content: Mengintegrasikan data terbaru dari **Company Profile PDF (Update Maret 2026)**.
- [x] Bulk Update Experts: Menambahkan seluruh 12 anggota tim ahli (Expert Team) dengan pengalaman 30+ tahun.
- [x] Bulk Update Projects: Menambahkan proyek terbaru (RKAB Kalla Arebamma, Baseline Malili, dll).
- [x] Generalized Terminology: Mengubah seluruh penyebutan spesifik "PPKH" menjadi "**Perizinan Kehutanan & Lingkungan**" sesuai arahan Direksi.
- [x] Update `types/index.ts`: Definisi tipe data baru (`ServiceItem`, `Project`, `Expert`, `Partner`).
- [x] Update `lib/dummy-data.ts`: Mengisi data asli PT RMR (3 Layanan Utama, 6+ Proyek Unggulan, 12 Tenaga Ahli).

#### 🛠️ Core UI Components

- [x] Navbar: Desain ulang logo (RMR style), link navigasi, dan penanganan state scroll.
- [x] Footer: Redesign total dengan info kontak RMR, link layanan kehutanan, dan legalitas (NIB).
- [x] **Project Detail Page**: Dynamic route `[id]` dengan deep project insights (Case Study style).
- [x] **Organization Structure**: Penambahan visual struktur organisasi di halaman Tentang Kami.

#### 📄 App Pages (Redesign)

| Phase 2: Content & Structure | 100% | ✅ |
| Phase 3: UI/UX Refinement | 100% | ✅ |

## 📁 Recent Activity Log

### Bulk Update Content (Mar 2026)

- **[DONE]** Home Page: Generalize PPKH terminology and update lead metrics.
- **[DONE]** About Page: **New "Struktur Organisasi" section** with hierarchical layout for Direksi and Management.
- **[DONE]** About Page: Expanded Expert Team grid to accommodate 12 members with detailed specialization icons.
- **[DONE]** Services Page: Generalized terminology and updated KBLI descriptions.
- **[DONE]** Projects Page: Updated portfolio with latest projects (RKAB, Baseline, etc) and generalized filters.
- **[DONE]** Dummy Data: Refined project descriptions and scopes based on latest PDF.

### Redesign Phase

- **[DONE]** Project Detail Page: Dynamic route `[id]` with high-end statistics sidebar.
- **[DONE]** Navbar Accessibility: Fixed text contrast on light/dark hero sections.
- **[DONE]** Expert UI/UX: Improved expert card spacing and readability.
- **[DONE]** Contact Page: Form with WhatsApp and branch office locations.

### Development Status

- **CI/CD**: Build passing synchronously.
- **Next.js Version**: 16.1.6.
- **Tailwind Version**: v4.0.0.

## 🚀 Future Enhancements

1. Add more project case studies from PDF.
2. Integrate backend for dynamic contact submissions.
3. SEO Content audit for "Perizinan Kehutanan Makassar".

---

### ⏳ BELUM DIMULAI

#### 🚀 Fitur Lanjutan

- [ ] Interactive Map: Visualisasi sebaran proyek RMR di seluruh Indonesia.
- [ ] Detail NGO Collaborations: Halaman khusus kerja sama lingkungan (Biodiversitas).

#### ⚙️ Backend (TBD - Jika Diperlukan)

- [ ] Admin Dashboard (Filament/Laravel) untuk update portofolio secara dinamis.

---

## Struktur Folder Project (Updated)

```
manPower_supply/
├── docs/                  ← Dokumentasi (PROGRESS, COMPANY PROFILE PDF)
├── frontend/              ← Website Publik (Next.js)
│   ├── src/
│   │   ├── app/           ← Pages (Beranda, Layanan, Proyek, Tentang, Kontak)
│   │   ├── components/    ← Navbar, Footer, UI Elements
│   │   ├── lib/           ← Dummy Data RMR & Utils
│   │   └── types/         ← RMR Type Definitions
```
