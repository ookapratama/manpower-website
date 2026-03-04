# TASK — Integrasi Kegiatan Usaha Akta Perusahaan ke Website

> **Tanggal dibuat**: 2026-03-04
> **Sumber**: Dokumen Akta Perusahaan — "Maksud dan Tujuan Serta Kegiatan Usaha, Pasal 3"
> **Status**: 🔄 Dalam Perencanaan

---

## 📋 Ringkasan

Website saat ini hanya menampilkan **8 kategori outsourcing umum** (Security, Cleaning Service, Driver, OB, Teknisi, Resepsionis, Gardener, Gudang & Logistik). Berdasarkan akta perusahaan, lingkup kegiatan usaha jauh lebih luas mencakup **6 sektor besar** dengan **23+ sub-kegiatan**.

Dokumen ini menyusun prioritas kerja untuk mengintegrasikan seluruh kegiatan usaha ke dalam website dengan pendekatan **frontend-first**.

---

## 📑 Daftar Kegiatan Usaha dari Akta (Pasal 3)

### Sektor 1 — Kehutanan & Konservasi

| No  | Kegiatan                                               | Kode KBLI |
| --- | ------------------------------------------------------ | --------- |
| 1   | Pemanfaatan Hasil Hutan Bukan Kayu                     | 02130     |
| 2   | Pemanenan Kayu                                         | 02201     |
| 3   | Jasa Penggunaan Kawasan Hutan di Luar Sektor Kehutanan | 02401     |
| 4   | Jasa Perlindungan Hutan dan Konservasi Alam            | 02402     |
| 5   | Jasa Rehabilitasi dan Restorasi Kehutanan Sosial       | 02403     |
| 6   | Jasa Kehutanan Bidang Perencanaan Kehutanan            | 02404     |
| 7   | Jasa Penunjang Kehutanan Lainnya                       | 02409     |

### Sektor 2 — Pertambangan & Energi

| No  | Kegiatan                                                | Kode KBLI |
| --- | ------------------------------------------------------- | --------- |
| 8   | Aktivitas Penunjang Pertambangan dan Penggalian Lainnya | 09900     |

### Sektor 3 — Industri & Logam

| No  | Kegiatan                                                                   | Kode KBLI |
| --- | -------------------------------------------------------------------------- | --------- |
| 9   | Jasa Industri Untuk Berbagai Pengerjaan Khusus Logam dan Barang dari Logam | 25920     |

### Sektor 4 — Reparasi, Instalasi & Maintenance

| No  | Kegiatan                                          | Kode KBLI |
| --- | ------------------------------------------------- | --------- |
| 10  | Reparasi Mesin Untuk Keperluan Umum               | 33121     |
| 11  | Reparasi Peralatan Listrik Lainnya                | 33149     |
| 12  | Instalasi/Pemasangan Mesin dan Peralatan Industri | 33200     |

### Sektor 5 — Pengelolaan Limbah & Lingkungan

| No  | Kegiatan                                                   | Kode KBLI |
| --- | ---------------------------------------------------------- | --------- |
| 13  | Pengumpulan Air Limbah Berbahaya                           | 37012     |
| 14  | Treatment dan Pembuangan Air Limbah Tidak Berbahaya        | 37021     |
| 15  | Pengumpulan Limbah dan Sampah Tidak Berbahaya              | 38110     |
| 16  | Pengumpulan Limbah Berbahaya                               | 38120     |
| 17  | Treatment dan Pembuangan Limbah dan Sampah Tidak Berbahaya | 38211     |

### Sektor 6 — Konstruksi & Bangunan

| No  | Kegiatan                       | Kode KBLI |
| --- | ------------------------------ | --------- |
| 18  | Konstruksi Gedung Hunian       | 41011     |
| 19  | Konstruksi Gedung Perkantoran  | 41012     |
| 20  | Konstruksi Gedung Industri     | 41013     |
| 21  | Konstruksi Gedung Perbelanjaan | 41014     |
| 22  | Konstruksi Gedung Kesehatan    | 41015     |
| 23  | Konstruksi Gedung Pendidikan   | 41016     |

---

## 🎯 Urutan Prioritas Kerja

### ═══════════════════════════════════════════

### FASE A — Frontend Data Foundation (Prioritas 1)

### ═══════════════════════════════════════════

> **Target**: Menyiapkan data, tipe, dan struktur agar semua halaman bisa menampilkan sektor & kategori baru.
> **Estimasi**: 1–2 sesi kerja

#### A1. Update Type Definitions ✏️

**File**: `frontend/src/types/index.ts`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah interface `Sector` (parent dari Category)
- Tambah field `kbliCode?: string` di interface `Category`
- Tambah field `sectorId: number` di interface `Category`
- Tambah interface `ServiceItem` untuk kegiatan usaha detail

```typescript
// Interface baru yang perlu ditambahkan
export interface Sector {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  categories: Category[];
}

// Modifikasi interface Category (tambah field)
export interface Category {
  // ... field existing tetap ...
  kbliCode?: string; // Kode KBLI dari akta
  sectorId?: number; // Relasi ke Sector
  sectorName?: string; // Nama sektor (untuk display)
}
```

---

#### A2. Update Dummy Data — Sektor & Kategori Baru ✏️

**File**: `frontend/src/lib/dummy-data.ts`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah data `sectors[]` (6 sektor utama)
- Perluas `categories[]` dari 8 → ~14 kategori (gabungan sub-kegiatan yang mirip)
- Tambah `skills[]` baru untuk sektor baru
- Update `siteStats` (jumlah kategori, dll)

Pengelompokan kategori baru yang disarankan:

```
Kategori existing (8) tetap dipertahankan:
  1. Security & Satpam
  2. Cleaning Service
  3. Driver & Pengemudi
  4. Office Boy / Girl
  5. Teknisi & Maintenance        ← diperluas deskripsinya
  6. Resepsionis & Front Office
  7. Gardener & Taman
  8. Gudang & Logistik

Kategori baru (6) yang ditambahkan:
  9.  Kehutanan & Konservasi       ← Sektor 1 (gabungan KBLI 02xxx)
  10. Pertambangan & Energi        ← Sektor 2 (KBLI 09900)
  11. Industri & Fabrikasi Logam   ← Sektor 3 (KBLI 25920)
  12. Instalasi Mesin & Peralatan  ← Sektor 4 sebagian (KBLI 33200)
  13. Pengelolaan Limbah           ← Sektor 5 (gabungan KBLI 37xxx-38xxx)
  14. Konstruksi & Bangunan        ← Sektor 6 (gabungan KBLI 41xxx)
```

---

#### A3. Update Icon Map di CategoryCard ✏️

**File**: `frontend/src/components/ui/CategoryCard.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah icon baru di `iconMap` untuk 6 kategori baru
- Icon yang digunakan (dari lucide-react):
  - Kehutanan: `Trees` atau `TreePine` (sudah ada)
  - Pertambangan: `Mountain` atau `Pickaxe`
  - Industri Logam: `Hammer` atau `Factory`
  - Instalasi Mesin: `Cog` atau `Settings`
  - Pengelolaan Limbah: `Recycle` atau `Droplets`
  - Konstruksi: `HardHat` atau `Building`

---

### ═══════════════════════════════════════════

### FASE B — Frontend UI Update (Prioritas 2)

### ═══════════════════════════════════════════

> **Target**: Halaman menampilkan data baru dengan UI yang sesuai.
> **Estimasi**: 2–3 sesi kerja

#### B1. Update Halaman Kategori `/categories` ✏️

**File**: `frontend/src/app/categories/page.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Tampilkan kategori dikelompokkan per Sektor
- Tiap sektor punya header section sendiri
- Update stats bar (dari "8 Kategori Utama" → "14 Kategori, 6 Sektor")
- Layout: Sektor sebagai section, kategori sebagai cards di dalamnya

---

#### B2. Update Homepage — Section Kategori ✏️

**File**: `frontend/src/app/page.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Hero section: update statistik "50+ Categories" → sesuaikan angka
- Section Kategori: tampilkan highlight 8 kategori utama (bukan semua 14)
- Tambah "Lihat Semua Kategori" yang link ke `/categories`
- Opsional: tambah section baru "Sektor Industri Kami" sebelum CTA

---

#### B3. Buat Halaman Layanan / Services (Baru) ✏️

**File**: `frontend/src/app/services/page.tsx` (BARU)
**Status**: ⬜ Belum mulai

Konten:

- Hero section: "Layanan Komprehensif untuk Seluruh Sektor Industri"
- Grid sektor (6 sektor) dengan ikon, deskripsi, dan jumlah sub-kegiatan
- Untuk tiap sektor: daftar kegiatan usaha + kode KBLI
- CTA per sektor: "Konsultasi untuk sektor ini"
- Bottom CTA: "Hubungi kami untuk kebutuhan khusus"

---

#### B4. Update Filter di Halaman Workers ✏️

**File**: `frontend/src/app/workers/page.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah filter dropdown "Sektor" (di atas atau sebelum filter Kategori)
- Ketika sektor dipilih, filter kategori hanya tampilkan kategori di sektor itu
- Update `filterWorkers()` di `dummy-data.ts` untuk support filter sektor

---

#### B5. Update Navigasi — Tambah Menu "Layanan" ✏️

**File**: `frontend/src/components/layout/Navbar.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah item navigasi "Layanan" → `/services`
- Opsional: dropdown mega-menu yang menampilkan 6 sektor

---

#### B6. Tambah Data Dummy Pekerja untuk Kategori Baru ✏️

**File**: `frontend/src/lib/dummy-data.ts`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah 6–12 pekerja dummy baru untuk kategori baru
- Setiap kategori baru minimal punya 1 pekerja representatif
- Skills baru yang relevan per sektor
- Lokasi bervariasi

---

### ═══════════════════════════════════════════

### FASE C — Frontend Polish & Enhancement (Prioritas 3)

### ═══════════════════════════════════════════

> **Target**: Polish tampilan, SEO, dan UX.
> **Estimasi**: 1–2 sesi kerja

#### C1. Buat Komponen SectorCard (Baru) ✏️

**File**: `frontend/src/components/ui/SectorCard.tsx` (BARU)
**Status**: ⬜ Belum mulai

Deskripsi:

- Card yang lebih besar dari CategoryCard
- Menampilkan: ikon sektor, nama, deskripsi, jumlah kategori di dalamnya
- Hover effect: tampilkan preview 3-4 kategori di bawahnya
- Link ke `/categories?sector={slug}` atau ke `/services#{slug}`

---

#### C2. Update SEO Metadata ✏️

**File**: Beberapa file layout & page
**Status**: ⬜ Belum mulai

Perubahan:

- Update `title` dan `description` di halaman `/categories` untuk menyebut sektor baru
- Tambah metadata di halaman `/services` (baru)
- Update `sitemap.ts` untuk include `/services`
- Update `robots.ts` jika perlu

---

#### C3. Update Halaman About — Sektor Bisnis ✏️

**File**: `frontend/src/app/about/page.tsx`
**Status**: ⬜ Belum mulai

Perubahan:

- Tambah section "Sektor Bisnis Kami" di halaman About
- Tampilkan 6 sektor dengan ikon + deskripsi singkat
- Opsional: tampilkan kode KBLI untuk kredibilitas

---

#### C4. Halaman Legalitas & Perizinan (Opsional) ✏️

**File**: `frontend/src/app/legality/page.tsx` (BARU)
**Status**: ⬜ Opsional — bisa dikerjakan nanti

Konten:

- Nomor Akta Perusahaan
- Daftar KBLI resmi dari akta
- Sertifikasi (ISO, OHSAS, K3, dll)
- NIB / perizinan terkait
- Visual: tampilan formal tapi tetap modern

---

### ═══════════════════════════════════════════

### FASE D — Backend (Disimpan untuk Nanti) 🔒

### ═══════════════════════════════════════════

> **Status**: ⏸️ DITUNDA — Dikerjakan setelah frontend selesai
> **Catatan**: Semua item di bawah ini dicatat agar tidak lupa

#### D1. Migration: Tabel `sectors` 🔒

```
sectors: id, name, slug, description, icon, sort_order, is_active, timestamps
```

#### D2. Migration: Update tabel `job_categories` 🔒

```
Tambah kolom: sector_id (FK), kbli_code (string nullable)
```

#### D3. Model & Repository: Sector 🔒

```
Sector model + SectorRepository + SectorService
```

#### D4. Seeder: Data Sektor & Kategori dari Akta 🔒

```
SectorSeeder — 6 sektor + 14 kategori + kode KBLI
```

#### D5. API Endpoint: Sectors 🔒

```
GET /api/v1/sectors          — Daftar sektor (include categories)
GET /api/v1/sectors/{slug}   — Detail sektor
GET /api/v1/categories       — Update: tambah filter ?sector=
```

#### D6. Admin Panel: CRUD Sektor & Kategori 🔒

```
Admin bisa kelola sektor dan kategori via panel admin
```

#### D7. Frontend: Ganti Dummy Data → API Call 🔒

```
Setelah API siap, ganti semua import dari dummy-data.ts ke API call
```

---

## 📊 Ringkasan Timeline

| Fase  | Fokus                | Item           | Estimasi | Status         |
| ----- | -------------------- | -------------- | -------- | -------------- |
| **A** | Data Foundation      | A1–A3 (3 item) | 1–2 sesi | ⬜ Belum mulai |
| **B** | UI Update            | B1–B6 (6 item) | 2–3 sesi | ⬜ Belum mulai |
| **C** | Polish & Enhancement | C1–C4 (4 item) | 1–2 sesi | ⬜ Belum mulai |
| **D** | Backend (ditunda)    | D1–D7 (7 item) | 3–5 sesi | ⏸️ Ditunda     |

**Total frontend**: ~4–7 sesi kerja
**Total keseluruhan (termasuk backend)**: ~7–12 sesi kerja

---

## 📌 Catatan Penting

1. **Backward Compatibility**: Semua 8 kategori existing tetap dipertahankan. Kita hanya menambah, bukan mengganti.
2. **Data Dummy**: Semua data baru masih berupa dummy. Akan diganti API call di Fase D.
3. **Responsive**: Semua perubahan UI harus diuji di mobile, tablet, dan desktop.
4. **Tema Konsisten**: Semua komponen baru mengikuti Red-Orange-Warm dark theme yang sudah ada.
5. **Icon Source**: Gunakan `lucide-react` yang sudah terinstall, jangan tambah library icon baru.

---

_Dokumen ini akan diupdate setiap kali ada task yang selesai._
