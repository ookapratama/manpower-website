# ADR — Architecture Decision Record

## ADR-001: Menggunakan slug bukan ID di endpoint publik

Tanggal: ...
Keputusan: Endpoint GET /api/v1/workers/{slug} bukan /{id}
Alasan: SEO-friendly, tidak expose primary key ke publik
Konsekuensi: Setiap model butuh kolom slug unique + auto-generate

## ADR-002: Cloudflare R2 untuk storage, bukan local disk

...

## ADR-003: Hierarki Sektor → Kategori untuk Kegiatan Usaha

Tanggal: 2026-03-04
Keputusan: Mengelompokkan kegiatan usaha ke dalam hierarki 2 level (Sektor → Kategori) berdasarkan akta perusahaan Pasal 3.
Alasan:

- Perusahaan memiliki 23+ kegiatan usaha yang terlalu banyak jika ditampilkan flat
- Pengelompokan per sektor (Kehutanan, Pertambangan, Konstruksi, dll) memudahkan navigasi
- 8 kategori outsourcing umum yang sudah ada tetap dipertahankan di bawah sektor "Outsourcing Umum"
- 6 kategori baru ditambahkan untuk sektor spesifik (masing-masing menggabungkan beberapa kode KBLI yang serupa)
  Konsekuensi:
- Perlu interface Sector baru di TypeScript
- Perlu migration tabel sectors di backend (nanti)
- Perlu update UI CategoryCard dan halaman /categories
- Kode KBLI disimpan sebagai referensi legalitas, bukan sebagai primary key

## ADR-004: Pendekatan Frontend-First untuk Integrasi Akta

Tanggal: 2026-03-04
Keputusan: Mengerjakan frontend (dummy data + UI) terlebih dahulu, backend ditunda.
Alasan:

- Website sudah live dan perlu segera menampilkan lingkup layanan yang benar
- Dummy data cukup untuk menampilkan informasi sektor & kategori ke pengunjung
- Backend bisa dikerjakan paralel atau setelah UI sudah final
  Konsekuensi:
- Data masih hardcoded di dummy-data.ts sampai backend siap
- Perlu effort refactor saat migrasi dari dummy data ke API call
