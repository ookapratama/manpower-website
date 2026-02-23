Baca terlebih dahulu dua file berikut yang ada di root project ini:

- MANPOWER_SKILLS.md
- ManPower_ProjectPlan_v1.1.docx (atau versi PDF/MD-nya jika ada)

Setelah membaca kedua file tersebut, lakukan hal berikut secara berurutan:

---

## TAHAP 1 — AUDIT STRUKTUR PROJECT

Pindai seluruh struktur folder dan file project ini secara menyeluruh. Perhatikan:

- Struktur folder Laravel (app/, routes/, database/, resources/views/)
- Pattern yang sudah digunakan (apakah ada Repository, Service, dll)
- Base project admin: controller, middleware, auth yang sudah ada
- Naming convention yang sudah dipakai di codebase ini
- Package/dependency yang sudah terpasang di composer.json dan package.json
- Konfigurasi yang sudah ada di .env.example atau config/

Buat laporan audit dalam Bahasa Indonesia dengan format:

1. Struktur folder yang ditemukan (tampilkan tree)
2. Pattern yang sudah ada vs yang belum ada
3. Package yang sudah terpasang vs yang masih perlu ditambah
4. Perbedaan antara struktur project ini dengan rekomendasi di MANPOWER_SKILLS.md
5. Hal-hal yang perlu disesuaikan sebelum development dimulai

---

## TAHAP 2 — SESUAIKAN MANPOWER_SKILLS.md

Setelah audit selesai, edit file MANPOWER_SKILLS.md agar sesuai dengan kondisi nyata project ini. Yang harus disesuaikan:

- Struktur folder: sesuaikan dengan struktur yang benar-benar ada
- Naming convention: sesuaikan jika project sudah punya konvensi berbeda
- Pattern yang sudah ada: jangan timpa, dokumentasikan cara yang benar sesuai codebase ini
- Package: update daftar package sesuai composer.json yang ada
- Auth & middleware: sesuaikan dengan sistem auth yang sudah dipakai di base project ini
- RBAC: sesuaikan jika spatie/laravel-permission sudah terpasang atau belum

Jangan hapus bagian yang belum ada di project — tandai dengan label:
[BELUM ADA — Perlu ditambahkan]
[SUDAH ADA — Sesuai project]
[DISESUAIKAN — Berbeda dari rencana awal, lihat keterangan]

---

## TAHAP 3 — BUAT PROJECT_RULES.md

Buat file baru bernama PROJECT_RULES.md di root project. File ini adalah dokumen rules final yang menggabungkan:

- Hasil audit struktur project (Tahap 1)
- MANPOWER_SKILLS.md yang sudah disesuaikan (Tahap 2)
- Aturan tambahan spesifik yang kamu temukan dari codebase ini

Struktur PROJECT_RULES.md:

# PROJECT RULES — ManPower Supply Website

## 1. Identitas & Stack Project

## 2. Aturan Komunikasi Agent (Bahasa Indonesia)

## 3. Struktur Folder (hasil audit nyata)

## 4. Coding Style & Conventions (sesuai codebase ini)

## 5. Pattern Arsitektur (Repository, Service, Resource, FormRequest)

## 6. RBAC — Role & Permission

## 7. Database Pattern & Naming Convention

## 8. API Design Pattern

## 9. Error Tracking & Logging

## 10. Keamanan & Validasi

## 11. Larangan Keras untuk Agent

## 12. Checklist Sebelum Selesai Task

---

## TAHAP 4 — VALIDASI AKHIR

Setelah PROJECT_RULES.md selesai dibuat, lakukan validasi:

- Baca ulang PROJECT_RULES.md dari awal sampai akhir
- Pastikan tidak ada kontradiksi antar section
- Pastikan semua rules bisa langsung dieksekusi (tidak ambigu)
- Jika ada bagian yang ambigu atau kurang jelas, tambahkan contoh kode nyata dari codebase ini sebagai ilustrasi

Setelah selesai, berikan ringkasan dalam Bahasa Indonesia:

- Apa saja yang sudah sesuai antara rencana awal dan kondisi project
- Apa saja yang berbeda dan sudah disesuaikan
- Apa saja yang belum ada dan perlu ditambahkan sebelum mulai development
- Estimasi effort untuk menyiapkan fondasi sebelum fitur pertama bisa dikerjakan

---

PENTING:

- Semua output, laporan, dan isi file dalam Bahasa Indonesia
- Nama variabel, fungsi, class tetap Bahasa Inggris
- Jangan ubah atau hapus kode yang sudah ada — audit saja dulu
- Minta konfirmasi saya sebelum melakukan perubahan apapun pada file yang sudah ada
