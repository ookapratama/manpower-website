# Progress Tracker — ManPower Supply Website

> Diperbarui: 2026-03-04 18:45 WITA

## Status: Fase 1 — MVP Frontend

---

### ✅ Selesai

#### Dokumentasi & Audit

- [x] Audit struktur project base-laravel
- [x] Pembuatan PROJECT_RULES.md
- [x] Pembuatan PROGRESS.md
- [x] Pembuatan ADR.md

#### Frontend Next.js (folder: `/frontend/`)

- [x] Inisialisasi project Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- [x] Setup struktur folder (components, lib, types, hooks)
- [x] Definisi tipe data (types/index.ts)
- [x] Data dummy lengkap (lib/dummy-data.ts) — 12 pekerja, 8 kategori, 16 skills
- [x] Utility functions (lib/utils.ts) — format Rupiah, status labels, dll
- [x] Komponen Layout: Navbar (responsive, glassmorphism)
- [x] Komponen Layout: Footer (4 kolom, gradient accent)
- [x] Komponen UI: WorkerCard (avatar, status, stats, skills)
- [x] Komponen UI: CategoryCard (icon, deskripsi, jumlah pekerja)
- [x] Halaman: Homepage / Landing Page (hero, kategori, kenapa pilih kami, pekerja unggulan, testimonial, CTA)
- [x] Halaman: Direktori Pekerja /workers (search, filter panel, grid listing)
- [x] Halaman: Detail Pekerja /workers/[slug] (profil lengkap, sidebar CTA)
- [x] Halaman: Kategori /categories (grid semua kategori)
- [x] Halaman: Tentang Kami /about (visi misi, keunggulan, statistik)
- [x] Halaman: Hubungi Kami /contact (form + info kontak + WhatsApp CTA)
- [x] SEO: Metadata title & description di setiap halaman
- [x] UI/UX: Peningkatan Visual Hero Section (2-column layout + prominent image)
- [x] UI/UX: Perbaikan Visibilitas Navbar (contrast fix & background shadow)
- [x] UI/UX: Migrasi ke Tema Terang (Light Mode) yang bersih dan premium
- [x] UI/UX: Implementasi Animasi Interaktif (Framer Motion) di seluruh halaman
- [x] UI/UX: Integrasi gambar Unsplash (pekerja, testimoni, hero background)
- [x] Dokumentasi: Pembuatan README.md utama
- [x] Verified: Semua halaman berfungsi dan visual sudah premium di dev server (http://localhost:3000)

#### 📄 Integrasi Akta Perusahaan (Pasal 3 — Kegiatan Usaha)

> Detail: [`docs/TASK_AKTA_INTEGRASI.md`](./TASK_AKTA_INTEGRASI.md)

- [x] **Fase A — Frontend Data Foundation** (Update Types, Dummy Data, Icons)
- [x] **Fase B — Frontend UI Update** (Categories, Homepage, Services Page, Workers Filter, Navbar)
- [x] **Fase C — Frontend Polish & Enhancement** (SectorCard, SEO Metadata, About Page Update)
- [x] **Fase C4 — Halaman Legalitas & Perizinan** (Opsional/Next Phase)
- [x] A1. Update Type Definitions (tambah Sector, kbliCode)
- [x] A2. Update Dummy Data (6 sektor baru, 14 total kategori)
- [x] A3. Update Icon Map di CategoryCard
- [x] B1. Update halaman `/categories` (kelompokkan per sektor)
- [x] B2. Update homepage section kategori
- [x] B3. Buat halaman `/services` (baru)
- [x] B4. Update filter di halaman `/workers`
- [x] B5. Update navigasi (tambah menu Layanan)
- [x] B6. Tambah data dummy pekerja untuk kategori baru
- [x] C1. Buat komponen SectorCard (baru)
- [x] C2. Update SEO metadata
- [x] C3. Update halaman About — section sektor bisnis

### 🔄 Sedang Dikerjakan

_Selesai integrasi akta fase frontend. Menunggu validasi user untuk lanjut ke backend._

### ⏸️ Ditunda (Backend — Setelah Frontend Selesai)

- [ ] D1. Migration: tabel `sectors`
- [ ] D2. Migration: update tabel `job_categories` (tambah sector_id, kbli_code)
- [ ] D3. Model & Repository: Sector
- [ ] D4. Seeder: Data sektor & kategori dari akta
- [ ] D5. API Endpoint: Sectors
- [ ] D6. Admin Panel: CRUD sektor & kategori
- [ ] D7. Frontend: ganti dummy data → API call

### ⏳ Belum Dimulai

#### Frontend Lanjutan

- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Form kontak: integrasi dengan backend API
- [ ] Search bar homepage: koneksi ke halaman /workers
- [ ] Pagination untuk halaman direktori pekerja
- [ ] Loading states & skeleton screens
- [ ] Error boundaries
- [ ] Animasi scroll (fade-in sections)
- [ ] Dark/light mode toggle (opsional)
- [ ] PWA support (opsional)

#### Backend Laravel (folder: `/base-laravel/`)

- [ ] Migration: worker_profiles, job_categories, skills, skill_worker (pivot)
- [ ] Model: WorkerProfile, JobCategory, Skill
- [ ] Repository: WorkerRepository, CategoryRepository, SkillRepository
- [ ] Service: WorkerService, CategoryService
- [ ] Seeder data dummy
- [ ] API v1: GET /api/v1/workers (list + filter + pagination)
- [ ] API v1: GET /api/v1/workers/{slug} (detail pekerja)
- [ ] API v1: GET /api/v1/categories (list kategori)
- [ ] API Resources: WorkerResource, CategoryResource
- [ ] CORS configuration untuk frontend Next.js

#### Integrasi Frontend ↔ Backend

- [ ] Konfigurasi Next.js environment variables (API_URL)
- [ ] Ganti data dummy dengan API call
- [ ] Server-side rendering (SSR) / ISR untuk halaman pekerja
- [ ] Error handling untuk API failure

---

## Struktur Folder Project

```
manPower_supply/
├── base-laravel/          ← Backend Laravel (admin panel + API)
├── frontend/              ← Frontend Next.js (website publik)
│   ├── src/
│   │   ├── app/           ← Pages (App Router)
│   │   ├── components/    ← Komponen React (layout + UI)
│   │   ├── lib/           ← Data dummy + utilities
│   │   ├── types/         ← TypeScript types
│   │   └── hooks/         ← Custom React hooks (TBD)
│   └── public/            ← Static assets
└── docs/                  ← Dokumentasi project
    ├── PROJECT_RULES.md
    ├── PROGRESS.md
    ├── ADR.md
    └── TASK_TEMPLATE.md
```

## Cara Menjalankan

```bash
# Frontend (Next.js)
cd frontend && npm run dev    # → http://localhost:3000

# Backend (Laravel) — belum dikonfigurasi untuk ManPower
cd base-laravel && php artisan serve
```
