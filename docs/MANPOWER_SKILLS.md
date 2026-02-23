# ManPower Supply Website — Antigravity Skills & Project Rules

> File ini digunakan sebagai **Skills** di Google Antigravity IDE.
> Agent harus membaca dan mengikuti semua aturan di sini sebelum menulis kode apapun.
> Bahasa komunikasi agent: **Bahasa Indonesia**.

---

## 🧠 IDENTITAS PROYEK

```
Nama Proyek   : ManPower Supply Website
Tipe          : Platform Informasi & Direktori Tenaga Kerja
Developer     : Solo Developer
Stack Utama   : Laravel 12 (API + Admin) + Next.js 14 (Public Site)
Database      : MySQL
Admin Panel   : Laravel Blade (base project custom, BUKAN Filament)
```

---

## 🗣️ ATURAN KOMUNIKASI AGENT

- Semua **respon, komentar kode, log, dan penjelasan** agent WAJIB dalam **Bahasa Indonesia**
- Saat membuat file baru, tambahkan header komentar dalam Bahasa Indonesia
- Nama variabel, fungsi, dan class tetap menggunakan **Bahasa Inggris** (konvensi kode internasional)
- Pesan error yang ditampilkan ke user di UI menggunakan **Bahasa Indonesia**
- Pesan log internal (Laravel Log, error handler) menggunakan **Bahasa Indonesia**
- Saat agent membuat Implementation Plan atau Task List, semua teks dalam **Bahasa Indonesia**

---

## 📁 STRUKTUR FOLDER PROJECT

### Laravel (API + Admin)
```
app/
├── Console/
├── Exceptions/
│   └── Handler.php              ← Semua exception handling terpusat di sini
├── Http/
│   ├── Controllers/
│   │   ├── Admin/               ← Controller untuk admin panel (Blade)
│   │   └── Api/
│   │       └── V1/              ← Semua API controller di sini
│   ├── Middleware/
│   ├── Requests/                ← Semua Form Request Validation di sini
│   │   ├── Admin/
│   │   └── Api/
│   └── Resources/               ← Semua API Resources (transformasi response)
│       └── V1/
├── Models/
├── Repositories/                ← Repository Pattern — semua query DB di sini
│   ├── Contracts/               ← Interface untuk setiap repository
│   └── Eloquent/                ← Implementasi Eloquent
├── Services/                    ← Business logic — semua logic di sini
│   └── Contracts/               ← Interface untuk setiap service
├── Traits/
└── Helpers/

database/
├── migrations/
├── seeders/
└── factories/

routes/
├── api.php                      ← Hanya route API v1
├── web.php                      ← Hanya route admin panel
└── auth.php

resources/
├── views/
│   ├── layouts/                 ← Layout admin
│   ├── admin/                   ← Semua view admin
│   └── emails/                  ← Template email
```

### Next.js (Public Site)
```
src/
├── app/                         ← App Router Next.js 14
│   ├── (public)/                ← Route group halaman publik
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                      ← Komponen UI reusable (Button, Card, dll)
│   ├── sections/                ← Section halaman (Hero, FilterBar, dll)
│   └── layout/                  ← Header, Footer, Navbar
├── lib/
│   ├── api.ts                   ← Semua fungsi fetch ke Laravel API
│   ├── utils.ts
│   └── constants.ts
├── types/                       ← TypeScript interfaces & types
├── hooks/                       ← Custom React hooks
└── styles/
```

---

## 📐 CODING STYLE & CONVENTIONS

### PHP / Laravel

```php
// ✅ BENAR — Nama class PascalCase
class WorkerProfileService {}

// ✅ BENAR — Nama method camelCase, deskriptif
public function getAvailableWorkersByCategory(int $categoryId): Collection {}

// ✅ BENAR — Nama variabel camelCase
$workerProfile = $this->workerRepository->findById($id);

// ✅ BENAR — Selalu type-hint parameter dan return type
public function create(array $data): WorkerProfile {}

// ❌ SALAH — Jangan query DB langsung di Controller
public function index() {
    $workers = Worker::where('status', 'active')->get(); // JANGAN INI
}

// ✅ BENAR — Selalu lewat Repository
public function index() {
    $workers = $this->workerRepository->getActive();
}
```

### JavaScript / TypeScript (Next.js)

```typescript
// ✅ BENAR — Selalu gunakan TypeScript, bukan JS murni
interface WorkerProfile {
  id: number;
  fullName: string;
  location: string;
  availabilityStatus: 'available' | 'busy' | 'not_available';
}

// ✅ BENAR — Komponen React: PascalCase, function component
export default function WorkerCard({ worker }: { worker: WorkerProfile }) {}

// ✅ BENAR — Hooks: prefix "use"
function useWorkerFilter() {}

// ✅ BENAR — Semua API call lewat lib/api.ts, bukan langsung fetch di komponen
import { getWorkers } from '@/lib/api';
```

### Aturan Umum
- **Indentasi**: 4 spasi untuk PHP, 2 spasi untuk JS/TS
- **Baris maksimal**: 120 karakter
- **Selalu** tambahkan PHPDoc/JSDoc untuk method publik
- **Tidak boleh** ada `dd()`, `var_dump()`, `console.log()` di kode produksi
- **Selalu** gunakan `strict_types=1` di setiap file PHP
- Setiap file PHP baru wajib diawali: `<?php declare(strict_types=1);`

---

## 🏗️ PATTERN ARSITEKTUR

### 1. Repository Pattern (Laravel)

Setiap model WAJIB punya repository. Agent tidak boleh menulis query Eloquent di luar repository.

```php
// Contracts/WorkerRepositoryInterface.php
interface WorkerRepositoryInterface
{
    public function findById(int $id): ?WorkerProfile;
    public function getActive(): Collection;
    public function getByCategory(int $categoryId): Collection;
    public function create(array $data): WorkerProfile;
    public function update(int $id, array $data): WorkerProfile;
    public function delete(int $id): bool;
}

// Eloquent/WorkerRepository.php
class WorkerRepository implements WorkerRepositoryInterface
{
    public function getActive(): Collection
    {
        return WorkerProfile::where('availability_status', '!=', 'not_available')
            ->with(['skills', 'category'])
            ->latest()
            ->get();
    }
}
```

Daftarkan di `AppServiceProvider`:
```php
$this->app->bind(WorkerRepositoryInterface::class, WorkerRepository::class);
```

### 2. Service Layer Pattern (Laravel)

Business logic WAJIB di Service, bukan di Controller. Controller hanya boleh: menerima request, memanggil service, mengembalikan response.

```php
// Services/WorkerService.php
class WorkerService
{
    public function __construct(
        private WorkerRepositoryInterface $workerRepository,
        private SkillRepositoryInterface $skillRepository,
    ) {}

    public function createWorkerProfile(array $data): WorkerProfile
    {
        // Validasi sudah lewat FormRequest sebelum sampai sini
        $worker = $this->workerRepository->create($data);

        if (!empty($data['skill_ids'])) {
            $worker->skills()->sync($data['skill_ids']);
        }

        // Log aktivitas
        Log::info('Profil pekerja baru dibuat', ['worker_id' => $worker->id]);

        return $worker;
    }
}
```

### 3. API Resources (Laravel)

Semua response API WAJIB melalui API Resource. Tidak boleh return model Eloquent langsung.

```php
// Resources/V1/WorkerResource.php
class WorkerResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                  => $this->id,
            'nama_lengkap'        => $this->full_name,
            'foto'                => $this->photo_url,
            'lokasi'              => $this->location,
            'status_ketersediaan' => $this->availability_status,
            'pengalaman_tahun'    => $this->experience_years,
            'slug'                => $this->slug,
            'keahlian'            => SkillResource::collection($this->whenLoaded('skills')),
            'dibuat_pada'         => $this->created_at->toDateString(),
        ];
    }
}
```

Format response API yang wajib digunakan:
```json
// Success
{
  "status": "berhasil",
  "pesan": "Data pekerja berhasil diambil",
  "data": { ... },
  "meta": { "halaman": 1, "per_halaman": 15, "total": 120 }
}

// Error
{
  "status": "gagal",
  "pesan": "Data pekerja tidak ditemukan",
  "errors": { "id": ["ID tidak valid"] }
}
```

### 4. Form Request Validation

Semua validasi input WAJIB menggunakan Form Request, bukan `$request->validate()` di controller.

```php
// Requests/Api/StoreWorkerRequest.php
class StoreWorkerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->hasPermission('worker.create');
    }

    public function rules(): array
    {
        return [
            'full_name'           => ['required', 'string', 'max:150'],
            'location'            => ['required', 'string', 'max:100'],
            'availability_status' => ['required', Rule::in(['available', 'busy', 'not_available'])],
            'experience_years'    => ['required', 'integer', 'min:0', 'max:50'],
            'skill_ids'           => ['required', 'array', 'min:1'],
            'skill_ids.*'         => ['exists:skills,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'full_name.required'  => 'Nama lengkap wajib diisi.',
            'skill_ids.required'  => 'Minimal satu keahlian harus dipilih.',
        ];
    }
}
```

---

## 🔐 RBAC (Role-Based Access Control)

Proyek ini menggunakan `spatie/laravel-permission`. Agent WAJIB mengikuti struktur RBAC berikut.

### Roles yang Tersedia
```
super_admin   → Akses penuh ke semua fitur
admin         → Kelola konten (pekerja, artikel, kategori)
employer      → Post lowongan, lihat profil pekerja (fase 2)
worker        → Kelola profil sendiri (fase 2)
```

### Permission Naming Convention
Format: `{resource}.{aksi}`

```
worker.viewAny    worker.view    worker.create    worker.update    worker.delete
article.viewAny   article.view   article.create   article.update   article.delete
category.viewAny  category.view  category.create  category.update  category.delete
company.viewAny   company.view   company.create   company.update   company.delete
user.viewAny      user.view      user.create      user.update      user.delete
report.view                                                          (khusus admin+)
```

### Cara Implementasi di Controller
```php
// ✅ BENAR — Selalu cek permission, bukan role
public function store(StoreWorkerRequest $request): JsonResponse
{
    $this->authorize('worker.create'); // via Policy atau Gate
    // ...
}

// ❌ SALAH — Jangan hardcode cek role
if ($user->role === 'admin') {} // JANGAN INI
```

### Middleware yang Harus Digunakan
```php
// routes/api.php
Route::middleware(['auth:sanctum', 'role:admin|super_admin'])->group(function () {
    Route::apiResource('workers', WorkerController::class);
});

// Atau per permission
Route::middleware(['auth:sanctum', 'permission:worker.create'])->group(...);
```

### Verifikasi Permission (Double-check Pattern)
Untuk operasi kritis (delete, update status), gunakan double verification:
```php
public function destroy(int $id): JsonResponse
{
    // Cek 1: Permission via middleware
    // Cek 2: Policy check di dalam method
    $this->authorize('delete', $worker);

    // Cek 3: Verifikasi kepemilikan data jika diperlukan
    if ($worker->created_by !== auth()->id() && !auth()->user()->hasRole('super_admin')) {
        abort(403, 'Anda tidak memiliki akses untuk menghapus data ini.');
    }

    $this->workerService->delete($id);
    return $this->successResponse('Data pekerja berhasil dihapus');
}
```

---

## 🗄️ DATABASE PATTERN & NAMING

### Konvensi Penamaan
```
Tabel         : snake_case, plural         → worker_profiles, job_categories
Kolom         : snake_case                 → full_name, created_at, is_active
Primary Key   : selalu `id` bigint         → id
Foreign Key   : {nama_tabel_singular}_id   → worker_id, category_id, user_id
Pivot Table   : alphabetical order         → skill_worker (bukan worker_skill)
Timestamps    : selalu ada                 → created_at, updated_at
Soft Delete   : gunakan jika data penting  → deleted_at
Index         : prefix idx_                → idx_worker_profiles_location
```

### Wajib Ada di Setiap Migration
```php
Schema::create('worker_profiles', function (Blueprint $table) {
    $table->id();
    // ... kolom lainnya ...
    $table->softDeletes();           // untuk data penting
    $table->timestamps();            // created_at & updated_at

    // Index untuk kolom yang sering di-query/filter
    $table->index('location');
    $table->index('availability_status');
    $table->index(['availability_status', 'location']); // composite index
});
```

### Aturan Migrasi
- **Tidak boleh** edit migration yang sudah di-commit. Buat migration baru untuk perubahan
- Setiap migration harus punya method `up()` dan `down()` yang berfungsi
- Selalu tambahkan foreign key constraint dengan `constrained()` dan `cascadeOnDelete()`

---

## 🌐 API DESIGN PATTERN

### Versioning
Semua endpoint API wajib menggunakan prefix versi:
```
/api/v1/workers
/api/v1/categories
/api/v1/articles
```

### RESTful Naming
```
GET    /api/v1/workers              → Daftar semua pekerja (dengan filter)
GET    /api/v1/workers/{slug}       → Detail pekerja (gunakan slug, bukan ID)
POST   /api/v1/workers              → Buat pekerja baru
PUT    /api/v1/workers/{id}         → Update pekerja (full update)
PATCH  /api/v1/workers/{id}         → Update pekerja (partial update)
DELETE /api/v1/workers/{id}         → Hapus pekerja

GET    /api/v1/workers?kategori=security&lokasi=jakarta&halaman=1
```

### Standard Response Helper
Buat trait `ApiResponse` yang digunakan di semua controller:
```php
trait ApiResponse
{
    protected function successResponse(
        string $pesan,
        mixed $data = null,
        int $httpCode = 200
    ): JsonResponse {
        return response()->json([
            'status' => 'berhasil',
            'pesan'  => $pesan,
            'data'   => $data,
        ], $httpCode);
    }

    protected function errorResponse(
        string $pesan,
        array $errors = [],
        int $httpCode = 400
    ): JsonResponse {
        return response()->json([
            'status' => 'gagal',
            'pesan'  => $pesan,
            'errors' => $errors,
        ], $httpCode);
    }

    protected function paginatedResponse(
        string $pesan,
        LengthAwarePaginator $paginator
    ): JsonResponse {
        return response()->json([
            'status' => 'berhasil',
            'pesan'  => $pesan,
            'data'   => $paginator->items(),
            'meta'   => [
                'halaman'     => $paginator->currentPage(),
                'per_halaman' => $paginator->perPage(),
                'total'       => $paginator->total(),
                'total_halaman' => $paginator->lastPage(),
            ],
        ]);
    }
}
```

---

## 🚨 ERROR TRACKING & LOGGING

### Laravel Logging

Gunakan channel yang berbeda untuk setiap konteks:

```php
// config/logging.php — channels yang harus ada
'channels' => [
    'api_error'    => [...],   // Error dari API endpoint
    'auth_log'     => [...],   // Login, logout, akses ditolak
    'db_query'     => [...],   // Query lambat (> 1 detik)
    'activity'     => [...],   // Aktivitas user (CRUD penting)
]
```

### Aturan Logging

```php
// ✅ WAJIB — Log setiap aktivitas CRUD penting
Log::channel('activity')->info('Pekerja baru ditambahkan', [
    'admin_id'  => auth()->id(),
    'worker_id' => $worker->id,
    'nama'      => $worker->full_name,
    'waktu'     => now()->toDateTimeString(),
]);

// ✅ WAJIB — Log setiap error dengan context lengkap
Log::channel('api_error')->error('Gagal memuat data pekerja', [
    'error'      => $e->getMessage(),
    'file'       => $e->getFile(),
    'baris'      => $e->getLine(),
    'user_id'    => auth()->id() ?? 'tamu',
    'request'    => request()->all(),
    'waktu'      => now()->toDateTimeString(),
]);

// ✅ WAJIB — Log akses ditolak
Log::channel('auth_log')->warning('Akses ditolak', [
    'user_id'    => auth()->id(),
    'permission' => 'worker.delete',
    'route'      => request()->path(),
    'waktu'      => now()->toDateTimeString(),
]);

// ❌ DILARANG — Jangan simpan data sensitif di log
Log::info('Login', ['password' => $request->password]); // JANGAN INI
```

### Exception Handler

Di `app/Exceptions/Handler.php`, semua exception harus di-handle dengan baik:

```php
public function register(): void
{
    // API exception — kembalikan JSON
    $this->renderable(function (Throwable $e, Request $request) {
        if ($request->is('api/*')) {
            $httpCode = method_exists($e, 'getStatusCode')
                ? $e->getStatusCode() : 500;

            Log::channel('api_error')->error('Exception tidak tertangani', [
                'pesan'   => $e->getMessage(),
                'kode'    => $httpCode,
                'route'   => $request->path(),
                'waktu'   => now()->toDateTimeString(),
            ]);

            return response()->json([
                'status' => 'gagal',
                'pesan'  => app()->isProduction()
                    ? 'Terjadi kesalahan pada server. Silakan coba lagi.'
                    : $e->getMessage(),
            ], $httpCode);
        }
    });

    // Laporkan ke Sentry jika tersedia
    $this->reportable(function (Throwable $e) {
        if (app()->bound('sentry')) {
            app('sentry')->captureException($e);
        }
    });
}
```

### Sentry Integration

```php
// .env
SENTRY_LARAVEL_DSN=https://xxx@sentry.io/xxx
SENTRY_TRACES_SAMPLE_RATE=0.1   // Trace 10% request di production

// Sentry harus diaktifkan di production, non-aktif di local
```

---

## 🔒 KEAMANAN

### Aturan Wajib
- **Semua** endpoint yang mengubah data WAJIB menggunakan `auth:sanctum` middleware
- **Tidak boleh** ada endpoint yang return data sensitif tanpa autentikasi
- Selalu sanitasi input dengan `strip_tags()` untuk field string yang akan ditampilkan ke HTML
- Gunakan `$table->string('slug')->unique()` dan validasi slug sebelum simpan
- Rate limiting WAJIB dipasang di semua endpoint publik:

```php
Route::middleware(['throttle:api'])->group(function () {
    Route::get('/api/v1/workers', [WorkerController::class, 'index']);
});

// config/cache.php — definisikan rate limit
'api' => Limit::perMinute(60),
'auth' => Limit::perMinute(5),
```

### Aturan CORS
```php
// config/cors.php
'allowed_origins' => [
    env('FRONTEND_URL', 'https://manpowermu.com'),
    'https://www.manpowermu.com',
],
```

---

## ✅ CHECKLIST AGENT SEBELUM COMMIT

Sebelum menyelesaikan task, agent WAJIB memverifikasi:

- [ ] Tidak ada query DB langsung di Controller (semua lewat Repository)
- [ ] Semua business logic ada di Service, bukan Controller
- [ ] Semua response API menggunakan API Resource
- [ ] Semua input validasi menggunakan Form Request
- [ ] Semua permission di-check sebelum operasi sensitif
- [ ] Ada log yang cukup untuk setiap operasi penting
- [ ] Tidak ada `dd()`, `var_dump()`, `console.log()` tertinggal
- [ ] Semua pesan error untuk user dalam Bahasa Indonesia
- [ ] Migration punya method `up()` dan `down()`
- [ ] Tidak ada data sensitif (password, token) yang di-log
- [ ] PHPDoc tersedia untuk semua method publik

---

## 🚫 LARANGAN KERAS (DILARANG DILAKUKAN AGENT)

```
❌ Menulis query Eloquent langsung di Controller
❌ Menggunakan $request->validate() di Controller (harus Form Request)
❌ Return model Eloquent langsung dari API (harus API Resource)
❌ Hardcode string koneksi DB, API key, atau credential apapun
❌ Mengabaikan permission check pada endpoint yang mengubah data
❌ Membuat migration baru dengan nama yang sudah ada
❌ Menghapus atau mengubah migration yang sudah ada
❌ Meninggalkan kode debug (dd, dump, console.log) di file manapun
❌ Menyimpan data sensitif di log (password, token, nomor KTP)
❌ Membuat endpoint baru tanpa versioning /api/v1/
❌ Menggunakan Filament (project ini tidak menggunakan Filament)
```

---

*Dokumen ini adalah sumber kebenaran tunggal (single source of truth) untuk project ManPower Supply Website.*
*Versi: 1.0 | Terakhir diperbarui: 2025*
