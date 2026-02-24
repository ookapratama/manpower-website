# ManPower Supply Website

Platform penyedia tenaga kerja profesional (outsourcing) terpercaya di Sulawesi Selatan. Menghubungkan perusahaan dengan talenta berkualitas di berbagai bidang operasional.

## 🚀 Fitur Utama

- **Direktori Tenaga Kerja**: Cari dan filter pekerja berdasarkan kategori, lokasi, dan status ketersediaan.
- **Profil Profesional**: Informasi lengkap pekerja mencakup keahlian, pengalaman, rating, dan tarif harian.
- **Sistem Kategori**: Berbagai kategori mulai dari Security, Cleaning Service, hingga Teknisi.
- **Hubungi Kami**: Form permintaan tenaga kerja yang terintegrasi dengan WhatsApp.
- **Dashboard Admin (TBD)**: Panel manajemen data pekerja, kategori, dan permintaan klien.

## 🛠️ Tech Stack

### Frontend (Website Publik)

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Hosting**: Vercel / VPS

### Backend (Admin & API)

- **Framework**: Laravel 12.x
- **Admin Template**: Sneat Bootstrap 5
- **Database**: MySQL
- **Auth**: Laravel Sanctum

## 📂 Struktur Folder

```text
manPower_supply/
├── base-laravel/          # Backend Laravel (Admin + API)
├── frontend/              # Frontend Next.js (Website Publik)
│   ├── src/
│   │   ├── app/           # Halaman & Routing
│   │   ├── components/    # Komponen Reusable
│   │   ├── lib/           # Utilitas & Data Dummy
│   │   └── types/         # Definisi TypeScript
├── docs/                  # Dokumentasi Proyek
└── README.md
```

## ⚙️ Persiapan Pengembangan

### Prerequisites

- Node.js v22+
- PHP 8.2+
- Composer
- MySQL

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Setup Backend

```bash
cd base-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## 📝 Aturan Pengembangan (PROJECT_RULES)

Setiap kontribusi harus mengikuti panduan yang ada di [docs/PROJECT_RULES.md](docs/PROJECT_RULES.md):

1. Gunakan Bahasa Indonesia untuk dokumentasi dan komunikasi.
2. Ikuti pattern folder yang telah ditentukan.
3. Selalu update [docs/PROGRESS.md](docs/PROGRESS.md) setelah menyelesaikan task.

## 📄 Lisensi

Proprietary - © 2026 Ooka Pratama
