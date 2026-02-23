# ADR — Architecture Decision Record

## ADR-001: Menggunakan slug bukan ID di endpoint publik

Tanggal: ...
Keputusan: Endpoint GET /api/v1/workers/{slug} bukan /{id}
Alasan: SEO-friendly, tidak expose primary key ke publik
Konsekuensi: Setiap model butuh kolom slug unique + auto-generate

## ADR-002: Cloudflare R2 untuk storage, bukan local disk

...
