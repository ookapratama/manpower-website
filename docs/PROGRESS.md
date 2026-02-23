# Progress Tracker — ManPower Supply Website

> Diperbarui: 2026-02-24 05:30 WITA

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
- [x] Verified: Semua halaman berfungsi di dev server (http://localhost:3000)

### 🔄 Sedang Dikerjakan

_Tidak ada_

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
