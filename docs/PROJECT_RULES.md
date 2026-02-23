# PROJECT RULES — ManPower Supply Website

> File ini adalah **sumber kebenaran tunggal (single source of truth)** untuk project ManPower Supply Website.
> Agent WAJIB membaca dan mengikuti semua aturan di sini sebelum menulis kode apapun.
> Bahasa komunikasi agent: **Bahasa Indonesia**.
> Versi: 1.0 | Diperbarui: 2026-02-24

---

## 1. Identitas & Stack Project

```
Nama Proyek      : ManPower Supply Website
Tipe             : Platform Informasi & Direktori Tenaga Kerja
Developer        : Solo Developer (Ooka Pratama)
Framework Backend : Laravel 12.x (PHP 8.2+)
Admin Panel       : Laravel Blade + Sneat Bootstrap 5 Template (by Pixinvent)
Frontend Publik   : Next.js 16.x + React 19 + TypeScript (folder: /frontend/)
Database          : MySQL (production) / SQLite (development/testing)
Auth System       : Session-based (web) + Laravel Sanctum (API)
Admin Template    : Sneat Bootstrap 5 (Dark/Light mode, responsive)
CSS Admin         : Bootstrap 5.3.3 + SASS
CSS Frontend      : Tailwind CSS 4.x
JS Admin          : jQuery 3.7.1, DataTables, SweetAlert2, Toastr, Chart.js, Select2
Build Admin       : Vite 7.x + laravel-vite-plugin
Build Frontend    : Next.js built-in (Turbopack)
API Docs          : Swagger (L5-Swagger / OpenAPI)
Testing           : Pest PHP 3.x
Timezone          : Asia/Makassar (WITA)
```

### Package Utama (composer.json)

| Package                   | Versi | Fungsi                      |
| ------------------------- | ----- | --------------------------- |
| `laravel/framework`       | ^12.0 | Framework utama             |
| `laravel/sanctum`         | ^4.0  | API Token Authentication    |
| `barryvdh/laravel-dompdf` | ^3.1  | PDF generation              |
| `darkaonline/l5-swagger`  | ^9.0  | API documentation (Swagger) |
| `intervention/image`      | ^3.11 | Image processing & resize   |
| `maatwebsite/excel`       | ^3.1  | Excel import/export         |

### Package Frontend (package.json — Highlights)

| Package              | Fungsi                          |
| -------------------- | ------------------------------- |
| `bootstrap` 5.3.3    | CSS framework utama             |
| `jquery` 3.7.1       | DOM manipulation                |
| `datatables.net-bs5` | Tabel data interaktif           |
| `sweetalert2`        | Dialog/alert premium            |
| `toastr`             | Notifikasi toast                |
| `chart.js`           | Grafik/chart                    |
| `select2`            | Enhanced select dropdown        |
| `flatpickr`          | Date picker                     |
| `dropzone`           | File upload drag & drop         |
| `tailwindcss` ^4.0   | CSS utility (tersedia via Vite) |

---

## 2. Aturan Komunikasi Agent (Bahasa Indonesia)

- Semua **respon, komentar kode, log, dan penjelasan** agent WAJIB dalam **Bahasa Indonesia**
- Saat membuat file baru, tambahkan header komentar dalam Bahasa Indonesia
- Nama variabel, fungsi, dan class tetap menggunakan **Bahasa Inggris** (konvensi kode internasional)
- Pesan error yang ditampilkan ke user di UI menggunakan **Bahasa Indonesia**
- Pesan log internal (Laravel Log, error handler) menggunakan **Bahasa Indonesia**
- Saat agent membuat Implementation Plan atau Task List, semua teks dalam **Bahasa Indonesia**

---

## 3. Struktur Folder (Hasil Audit Nyata)

```
base-laravel/
├── app/
│   ├── Console/                          ← Artisan commands (termasuk make:feature)
│   ├── Exports/                          ← Export class (maatwebsite/excel)
│   │   └── ProductsExport.php
│   ├── Helpers/
│   │   ├── ResponseHelper.php            ← [SUDAH ADA] Helper response API (static class)
│   │   ├── SettingHelper.php             ← [SUDAH ADA] Helper ambil setting dari DB
│   │   └── ViewConfigHelper.php          ← [SUDAH ADA] Helper konfigurasi template Sneat
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/                      ← [SUDAH ADA] API controllers
│   │   │   │   └── UserApiController.php
│   │   │   ├── AuthController.php        ← [SUDAH ADA] Login, register, logout
│   │   │   ├── Controller.php            ← [SUDAH ADA] Base controller (abstract + Swagger)
│   │   │   ├── DashboardController.php   ← [SUDAH ADA]
│   │   │   ├── ImpersonateController.php ← [SUDAH ADA] Super admin impersonate
│   │   │   ├── MenuController.php        ← [SUDAH ADA] CRUD menu sidebar
│   │   │   ├── PermissionController.php  ← [SUDAH ADA] Permission matrix
│   │   │   ├── ProductsController.php    ← [SUDAH ADA] Contoh CRUD lengkap
│   │   │   ├── ProfileController.php     ← [SUDAH ADA] Edit profil + avatar
│   │   │   ├── RoleController.php        ← [SUDAH ADA] CRUD role
│   │   │   ├── SettingController.php     ← [SUDAH ADA] Website settings
│   │   │   ├── SystemController.php      ← [SUDAH ADA] System health + backup
│   │   │   └── UserController.php        ← [SUDAH ADA] CRUD user
│   │   ├── Middleware/
│   │   │   ├── CheckMaintenanceMode.php  ← [SUDAH ADA]
│   │   │   └── CheckPermission.php       ← [SUDAH ADA] Custom RBAC middleware
│   │   └── Requests/
│   │       ├── BaseRequest.php           ← [SUDAH ADA] Abstract FormRequest
│   │       ├── MenuRequest.php           ← [SUDAH ADA]
│   │       ├── ProductsRequest.php       ← [SUDAH ADA]
│   │       ├── ProfileRequest.php        ← [SUDAH ADA]
│   │       ├── RoleRequest.php           ← [SUDAH ADA]
│   │       └── UserRequest.php           ← [SUDAH ADA]
│   ├── Imports/                          ← Import class (maatwebsite/excel)
│   │   └── ProductsImport.php
│   ├── Interfaces/
│   │   └── Repositories/                 ← [SUDAH ADA] Interface/Contract repository
│   │       ├── BaseRepositoryInterface.php
│   │       ├── MenuRepositoryInterface.php
│   │       ├── ProductsRepositoryInterface.php
│   │       ├── RoleRepositoryInterface.php
│   │       └── UserRepositoryInterface.php
│   ├── Models/
│   │   ├── ActivityLog.php               ← [SUDAH ADA] Model audit trail
│   │   ├── Media.php                     ← [SUDAH ADA] Model file upload
│   │   ├── Menu.php                      ← [SUDAH ADA] Model menu sidebar
│   │   ├── Products.php                  ← [SUDAH ADA] Contoh model CRUD
│   │   ├── Role.php                      ← [SUDAH ADA] Model role (custom RBAC)
│   │   ├── Setting.php                   ← [SUDAH ADA] Model settings
│   │   └── User.php                      ← [SUDAH ADA] User + HasApiTokens + LogsActivity
│   ├── Providers/
│   │   └── AppServiceProvider.php        ← [SUDAH ADA] Repository binding, Gate, menu sharing
│   ├── Repositories/
│   │   ├── BaseRepository.php            ← [SUDAH ADA] Abstract base (all(), find(), create(), update(), delete())
│   │   ├── MenuRepository.php            ← [SUDAH ADA]
│   │   ├── ProductsRepository.php        ← [SUDAH ADA]
│   │   ├── RoleRepository.php            ← [SUDAH ADA]
│   │   └── UserRepository.php            ← [SUDAH ADA]
│   ├── Services/
│   │   ├── ActivityLogService.php        ← [SUDAH ADA] Layanan audit trail
│   │   ├── BaseService.php               ← [SUDAH ADA] Abstract base service
│   │   ├── FileUploadService.php         ← [SUDAH ADA] Upload + resize gambar
│   │   ├── ImpersonateService.php        ← [SUDAH ADA]
│   │   ├── MenuService.php               ← [SUDAH ADA]
│   │   ├── ProductsService.php           ← [SUDAH ADA]
│   │   ├── RoleService.php               ← [SUDAH ADA]
│   │   ├── SettingService.php            ← [SUDAH ADA]
│   │   └── UserService.php               ← [SUDAH ADA]
│   └── Traits/
│       └── LogsActivity.php              ← [SUDAH ADA] Trait audit trail otomatis
│
├── database/
│   ├── migrations/                       ← 15 migration files
│   ├── seeders/
│   │   ├── DatabaseSeeder.php
│   │   ├── RoleAndMenuSeeder.php         ← Seed role + menu + permission
│   │   ├── ExtraMenuSeeder.php
│   │   ├── SettingSeeder.php
│   │   └── UserSeeder.php
│   └── factories/
│
├── routes/
│   ├── web.php                           ← Route admin panel (session auth)
│   ├── api.php                           ← Route API (minimal, belum terstruktur v1)
│   └── console.php
│
├── resources/
│   ├── assets/                           ← Sneat template assets (959 files)
│   ├── views/
│   │   ├── layouts/                      ← Blade layouts (vertical, horizontal, blank, front)
│   │   ├── pages/
│   │   │   ├── front-pages/              ← [SUDAH ADA] Template landing page, pricing, dll
│   │   │   ├── dashboard/               ← Dashboard views
│   │   │   ├── products/                ← Contoh CRUD views (index, create, edit, show)
│   │   │   ├── user/, role/, menu/      ← Admin management views
│   │   │   ├── profile/, settings/      ← Personal settings views
│   │   │   └── ... (template demo pages)
│   │   ├── _partials/
│   │   └── vendor/
│   ├── menu/                             ← JSON menu data (fallback)
│   ├── css/, js/
│
├── config/
│   ├── custom.php                        ← [SUDAH ADA] Layout & theme config (Sneat)
│   ├── sanctum.php                       ← [SUDAH ADA] API auth config
│   ├── l5-swagger.php                    ← [SUDAH ADA] Swagger config
│   └── ... (standar Laravel)
│
└── public/                               ← Assets publik (103 files)
```

### Folder yang Perlu Ditambahkan untuk ManPower Supply

```
[BELUM ADA — Perlu ditambahkan]
app/Http/Controllers/Api/V1/             ← API controllers dengan versioning
app/Http/Resources/                      ← API Resource transformers
app/Http/Resources/V1/                   ← Versioned resources

[OPSIONAL — Tambahkan saat dibutuhkan]
app/Services/Contracts/                  ← Interface untuk service (saat ini tidak ada)
app/Exceptions/Handler.php              ← Custom exception handler untuk API
```

---

## 4. Coding Style & Conventions (Sesuai Codebase Ini)

### PHP / Laravel

```php
// ✅ BENAR — Nama class PascalCase
class WorkerProfileService extends BaseService {}

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

// ✅ BENAR — Selalu lewat Service yang memanggil Repository
public function index() {
    $workers = $this->workerService->getActive();
}
```

### JavaScript (Blade + jQuery — Sneat Template)

```javascript
// ✅ BENAR — Gunakan jQuery sesuai konvensi Sneat template
$(document).ready(function () {
  // Inisialisasi DataTable
  const dt = $("#workerTable").DataTable({
    ajax: { url: "/api/v1/workers", dataSrc: "data" },
    columns: [{ data: "full_name" }, { data: "location" }],
  });
});

// ✅ BENAR — Gunakan AlertHandler bawaan project
window.AlertHandler.confirm(
  "Hapus Data?",
  "Data yang dihapus tidak bisa dikembalikan!",
  "Ya, Hapus!",
  () => {
    /* AJAX delete */
  },
);

// ✅ BENAR — Notifikasi sukses via session flash
// Controller: return redirect()->with('success', 'Data berhasil disimpan');
// Blade template sudah handle otomatis via AlertHandler
```

### Aturan Umum

- **Indentasi**: 4 spasi untuk PHP, 2 spasi untuk JS/CSS/Blade
- **Baris maksimal**: 120 karakter
- **Selalu** tambahkan PHPDoc/JSDoc untuk method publik
- **Tidak boleh** ada `dd()`, `var_dump()`, `console.log()` di kode produksi
- **Selalu** gunakan `strict_types=1` di setiap file PHP baru:
  ```php
  <?php declare(strict_types=1);
  ```
- Setiap Model baru WAJIB menggunakan trait `LogsActivity` untuk audit trail otomatis:
  ```php
  use App\Traits\LogsActivity;
  class WorkerProfile extends Model {
      use LogsActivity;
  }
  ```

---

## 5. Pattern Arsitektur (Repository, Service, Request)

### Alur Request (Wajib Diikuti)

```
HTTP Request
    → Middleware (auth + check.permission)
    → FormRequest (validasi input)
    → Controller (tipis — hanya routing logic)
    → Service (business logic)
    → Repository (database query)
    → Response (view/redirect untuk web, JSON untuk API)
```

### 1. Repository Pattern

**Lokasi**: `app/Interfaces/Repositories/` (interface) + `app/Repositories/` (implementasi)

Setiap model WAJIB punya repository. Agent tidak boleh menulis query Eloquent di luar repository.

```php
// app/Interfaces/Repositories/WorkerRepositoryInterface.php
<?php declare(strict_types=1);

namespace App\Interfaces\Repositories;

interface WorkerRepositoryInterface extends BaseRepositoryInterface
{
    public function getActive();
    public function getByCategory(int $categoryId);
    public function getByLocation(string $location);
}
```

```php
// app/Repositories/WorkerRepository.php
<?php declare(strict_types=1);

namespace App\Repositories;

use App\Interfaces\Repositories\WorkerRepositoryInterface;
use App\Models\WorkerProfile;

class WorkerRepository extends BaseRepository implements WorkerRepositoryInterface
{
    public function __construct(WorkerProfile $model)
    {
        parent::__construct($model);
    }

    public function getActive()
    {
        return $this->model->where('availability_status', '!=', 'not_available')
            ->with(['skills', 'category'])
            ->latest()
            ->get();
    }

    public function getByCategory(int $categoryId)
    {
        return $this->model->where('category_id', $categoryId)->get();
    }

    public function getByLocation(string $location)
    {
        return $this->model->where('location', $location)->get();
    }
}
```

**Binding di `AppServiceProvider::register()`:**

```php
$this->app->bind(
    \App\Interfaces\Repositories\WorkerRepositoryInterface::class,
    \App\Repositories\WorkerRepository::class
);
```

### 2. Service Layer Pattern

**Lokasi**: `app/Services/`

Business logic WAJIB di Service. Controller hanya boleh: menerima request, memanggil service, mengembalikan response.

```php
// app/Services/WorkerService.php
<?php declare(strict_types=1);

namespace App\Services;

use App\Interfaces\Repositories\WorkerRepositoryInterface;

class WorkerService extends BaseService
{
    public function __construct(WorkerRepositoryInterface $repository)
    {
        parent::__construct($repository);
    }

    /**
     * Buat profil pekerja baru dengan skill
     */
    public function createWithSkills(array $data): \App\Models\WorkerProfile
    {
        $worker = $this->create($data);

        if (!empty($data['skill_ids'])) {
            $worker->skills()->sync($data['skill_ids']);
        }

        \Illuminate\Support\Facades\Log::info('Profil pekerja baru dibuat', [
            'worker_id' => $worker->id,
            'nama' => $worker->full_name,
        ]);

        return $worker;
    }
}
```

### 3. Form Request Validation

**Lokasi**: `app/Http/Requests/`

Semua request WAJIB extend `BaseRequest` (bukan `FormRequest` langsung).

```php
// app/Http/Requests/WorkerRequest.php
<?php declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class WorkerRequest extends BaseRequest
{
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

### 4. Controller Pattern (Contoh Lengkap)

```php
// app/Http/Controllers/WorkerController.php
<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\WorkerService;
use App\Services\FileUploadService;
use App\Http\Requests\WorkerRequest;

class WorkerController extends Controller
{
    public function __construct(
        protected WorkerService $service,
        protected FileUploadService $fileUploadService,
    ) {}

    public function index()
    {
        $workers = $this->service->all();
        return view('pages.workers.index', compact('workers'));
    }

    public function create()
    {
        return view('pages.workers.create');
    }

    public function store(WorkerRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {
            $media = $this->fileUploadService->upload($request->file('photo'), 'workers');
            $data['photo_url'] = $media->path;
        }

        $this->service->createWithSkills($data);

        return redirect()->route('workers.index')
            ->with('success', 'Data pekerja berhasil ditambahkan!');
    }

    public function edit(int $id)
    {
        $worker = $this->service->find($id);
        return view('pages.workers.edit', compact('worker'));
    }

    public function update(WorkerRequest $request, int $id)
    {
        $data = $request->validated();
        $this->service->update($id, $data);

        return redirect()->route('workers.index')
            ->with('success', 'Data pekerja berhasil diperbarui!');
    }

    public function destroy(int $id)
    {
        $this->service->delete($id);

        return response()->json([
            'success' => true,
            'message' => 'Data pekerja berhasil dihapus!',
        ]);
    }
}
```

### 5. Scaffolding Fitur Baru (Generator)

Project ini punya custom generator command:

```bash
# Buat semua file CRUD sekaligus (Model, Migration, Interface, Repository, Service, Controller, Request, Views)
php artisan make:feature WorkerProfile

# Dengan subfolder
php artisan make:feature Admin/WorkerProfile
```

---

## 6. RBAC — Role & Permission

### [DISESUAIKAN — Berbeda dari rencana awal]

> Project ini **TIDAK** menggunakan `spatie/laravel-permission`.
> Project menggunakan **Custom RBAC** yang sudah terintegrasi penuh.

### Arsitektur RBAC yang Sudah Ada

```
User --belongsTo--> Role --belongsToMany--> Menu (pivot: role_menu)
                                              │
                                              ├── can_create (boolean)
                                              ├── can_read (boolean)
                                              ├── can_update (boolean)
                                              └── can_delete (boolean)
```

### Tabel yang Terlibat

| Tabel       | Fungsi                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------- |
| `users`     | Data user, kolom `role_id` (FK ke roles)                                                  |
| `roles`     | Daftar role (`name`, `slug`)                                                              |
| `menus`     | Daftar menu sidebar (`name`, `slug`, `path`, `icon`, `parent_id`, `order_no`)             |
| `role_menu` | Pivot permission per menu per role (`can_create`, `can_read`, `can_update`, `can_delete`) |

### Cara Cek Permission

```php
// Di Model User — method hasPermission()
$user->hasPermission('products.index', 'read');   // true/false
$user->hasPermission('products.index', 'create'); // true/false
$user->hasPermission('products.index', 'update'); // true/false
$user->hasPermission('products.index', 'delete'); // true/false

// Super Admin bypass — slug 'super-admin' mendapat akses penuh otomatis
```

### Middleware Permission

```php
// routes/web.php — Gunakan middleware check.permission
Route::resource('workers', WorkerController::class)
    ->middleware('check.permission:workers.index');

// Middleware akan otomatis mapping:
// Route 'workers.index'   → action 'read'
// Route 'workers.create'  → action 'create'
// Route 'workers.store'   → action 'create'
// Route 'workers.edit'    → action 'update'
// Route 'workers.update'  → action 'update'
// Route 'workers.destroy' → action 'delete'
```

### Gate Authorization

```php
// Di AppServiceProvider — Gate::before untuk Super Admin bypass
Gate::before(function ($user, $ability) {
    if ($user->role && $user->role->slug === 'super-admin') {
        return true;
    }
});

// Di Blade view — Cek permission sebelum tampilkan tombol
@if(auth()->user()->hasPermission('workers.index', 'create'))
    <a href="{{ route('workers.create') }}" class="btn btn-primary">Tambah Pekerja</a>
@endif

@if(auth()->user()->hasPermission('workers.index', 'delete'))
    <button class="btn btn-danger delete-record">Hapus</button>
@endif
```

### Roles yang Akan Digunakan untuk ManPower Supply

```
super-admin   → Akses penuh ke semua fitur (bypass permission check)
admin         → Kelola konten (pekerja, artikel, kategori) — via permission matrix
visitor       → Role default untuk registrasi baru (akses minimal)
employer      → Post lowongan, lihat profil pekerja (fase 2)
worker        → Kelola profil sendiri (fase 2)
```

### Menambah Permission untuk Menu Baru

1. Tambahkan entry di `database/seeders/RoleAndMenuSeeder.php`
2. Jalankan: `php artisan db:seed --class=RoleAndMenuSeeder`
3. Atur permission matrix di halaman admin: `/permission`

---

## 7. Database Pattern & Naming Convention

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
Boolean       : prefix is_ atau has_       → is_active, has_verified
```

### Wajib Ada di Setiap Migration

```php
<?php declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('worker_profiles', function (Blueprint $table) {
            $table->id();
            // ... kolom lainnya ...
            $table->softDeletes();           // untuk data penting
            $table->timestamps();            // created_at & updated_at

            // Index untuk kolom yang sering di-query/filter
            $table->index('location');
            $table->index('availability_status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('worker_profiles');
    }
};
```

### Aturan Migrasi

- **Tidak boleh** edit migration yang sudah di-commit. Buat migration baru untuk perubahan
- Setiap migration WAJIB punya method `up()` dan `down()` yang berfungsi
- Selalu tambahkan foreign key constraint dengan `constrained()` dan `cascadeOnDelete()`
- Gunakan `$table->foreignId('category_id')->constrained()->cascadeOnDelete()`

---

## 8. API Design Pattern

### Versioning

[BELUM ADA — Perlu ditambahkan]

Semua endpoint API baru wajib menggunakan prefix versi:

```
/api/v1/workers
/api/v1/categories
/api/v1/articles
```

Route API saat ini (`routes/api.php`) masih minimal dan belum terstruktur. Untuk fitur ManPower Supply, tambahkan:

```php
// routes/api.php
Route::prefix('v1')->group(function () {
    // Public endpoints (tanpa auth)
    Route::get('workers', [WorkerApiController::class, 'index']);
    Route::get('workers/{slug}', [WorkerApiController::class, 'show']);
    Route::get('categories', [CategoryApiController::class, 'index']);

    // Protected endpoints (auth:sanctum)
    Route::middleware('auth:sanctum')->group(function () {
        Route::apiResource('workers', WorkerApiController::class)->except(['index', 'show']);
    });
});
```

### RESTful Naming

```
GET    /api/v1/workers              → Daftar semua pekerja (dengan filter & pagination)
GET    /api/v1/workers/{slug}       → Detail pekerja (gunakan slug, bukan ID)
POST   /api/v1/workers              → Buat pekerja baru (auth required)
PUT    /api/v1/workers/{id}         → Update pekerja (auth required)
DELETE /api/v1/workers/{id}         → Hapus pekerja (auth required)

GET    /api/v1/workers?category=security&location=jakarta&page=1
```

### Standard Response Format

**Response Helper yang sudah ada** (`app/Helpers/ResponseHelper.php`):

```php
// ✅ Gunakan ResponseHelper yang sudah ada
use App\Helpers\ResponseHelper;

// Sukses
return ResponseHelper::success($data, 'Data pekerja berhasil diambil');
// Output: { "success": true, "message": "...", "data": {...} }

// Error
return ResponseHelper::error('Data tidak ditemukan', 404);
// Output: { "success": false, "message": "...", "data": null }

// Validation Error
return ResponseHelper::validationError($errors, 'Validasi gagal');
// Output: { "success": false, "message": "...", "errors": {...} }
```

### API Resource (untuk response yang lebih terstruktur)

[BELUM ADA — Perlu ditambahkan saat API publik dikembangkan]

```php
// app/Http/Resources/V1/WorkerResource.php
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
        ];
    }
}
```

---

## 9. Error Tracking & Logging

### Activity Log (Audit Trail) — [SUDAH ADA]

Project sudah punya sistem audit trail otomatis via `LogsActivity` trait:

```php
// Cukup tambahkan trait di Model
use App\Traits\LogsActivity;

class WorkerProfile extends Model
{
    use LogsActivity;
    // Setiap create, update, delete akan otomatis tercatat di tabel activity_logs
}
```

### ActivityLogService — [SUDAH ADA]

```php
// Log manual untuk aktivitas khusus
$this->activityLogService->log('custom_action', 'Deskripsi aktivitas', $model);
$this->activityLogService->logLogin();
$this->activityLogService->logLogout();
```

### Laravel Logging

```php
// ✅ WAJIB — Log setiap aktivitas CRUD penting
Log::info('Pekerja baru ditambahkan', [
    'admin_id'  => auth()->id(),
    'worker_id' => $worker->id,
    'nama'      => $worker->full_name,
    'waktu'     => now()->toDateTimeString(),
]);

// ✅ WAJIB — Log setiap error dengan context lengkap
Log::error('Gagal memuat data pekerja', [
    'error'      => $e->getMessage(),
    'file'       => $e->getFile(),
    'baris'      => $e->getLine(),
    'user_id'    => auth()->id() ?? 'tamu',
    'waktu'      => now()->toDateTimeString(),
]);

// ❌ DILARANG — Jangan simpan data sensitif di log
Log::info('Login', ['password' => $request->password]); // JANGAN INI
```

### Custom Exception Handler

[BELUM ADA — Perlu ditambahkan untuk API endpoints]

Saat API dikembangkan, buat handler di `bootstrap/app.php` (Laravel 12 style) untuk menangkap exception dan return JSON response.

---

## 10. Keamanan & Validasi

### Aturan Wajib

- **Semua** endpoint yang mengubah data WAJIB menggunakan middleware `auth`
- **Tidak boleh** ada endpoint yang return data sensitif tanpa autentikasi
- Selalu sanitasi input dengan `strip_tags()` untuk field string yang akan ditampilkan ke HTML
- Gunakan `$table->string('slug')->unique()` dan validasi slug sebelum simpan
- Rate limiting WAJIB dipasang di semua endpoint publik API

### Auth Mechanism

- **Admin Panel (web)**: Session-based authentication via `AuthController`
  - Login: email + password → session
  - Middleware: `auth` (Laravel default session guard)

- **API**: Laravel Sanctum token authentication
  - Personal access tokens via `HasApiTokens` trait di User model
  - Middleware: `auth:sanctum`

### CORS (untuk API)

[BELUM ADA — Perlu dikonfigurasi saat frontend terpisah dikembangkan]

```php
// config/cors.php
'allowed_origins' => [
    env('FRONTEND_URL', 'http://localhost:3000'),
],
```

### Validasi Input (Wajib Pakai BaseRequest)

```php
// ✅ BENAR — Semua request extend BaseRequest
class WorkerRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:150'],
            // ...
        ];
    }
}

// ❌ SALAH — Jangan validasi langsung di controller
$request->validate([...]); // JANGAN INI untuk fitur baru
```

> **Catatan**: `AuthController` saat ini masih menggunakan `$request->validate()` langsung.
> Ini adalah pattern bawaan default, dibiarkan untuk backward compatibility.
> Untuk semua fitur BARU, wajib gunakan `BaseRequest`.

---

## 11. Larangan Keras untuk Agent

```
❌ Menulis query Eloquent langsung di Controller (harus lewat Service → Repository)
❌ Menggunakan $request->validate() di Controller untuk fitur baru (harus FormRequest/BaseRequest)
❌ Return model Eloquent langsung dari API (harus via ResponseHelper atau API Resource)
❌ Hardcode string koneksi DB, API key, atau credential apapun
❌ Mengabaikan permission check pada endpoint yang mengubah data
❌ Membuat migration baru dengan nama yang sudah ada
❌ Menghapus atau mengubah migration yang sudah ada
❌ Meninggalkan kode debug (dd, dump, console.log) di file manapun
❌ Menyimpan data sensitif di log (password, token, nomor KTP)
❌ Menggunakan Filament (project ini tidak menggunakan Filament)
❌ Menambah spatie/laravel-permission (project sudah punya Custom RBAC sendiri)
❌ Mengubah atau menghapus kode yang sudah ada tanpa konfirmasi developer
❌ Membuat trait/helper baru yang duplikasi fungsionalitas ResponseHelper atau BaseRequest
❌ Menginstall package baru tanpa konfirmasi developer terlebih dahulu
```

---

## 12. Checklist Sebelum Selesai Task

Sebelum menyelesaikan task, agent WAJIB memverifikasi:

### Kode

- [ ] Tidak ada query DB langsung di Controller (semua lewat Service → Repository)
- [ ] Semua business logic ada di Service, bukan Controller
- [ ] Semua input validasi menggunakan FormRequest (extend BaseRequest)
- [ ] Semua permission di-check sebelum operasi sensitif
- [ ] Semua Model baru punya trait `LogsActivity`
- [ ] Tidak ada `dd()`, `var_dump()`, `console.log()` tertinggal
- [ ] PHPDoc tersedia untuk semua method publik
- [ ] File PHP baru diawali dengan `<?php declare(strict_types=1);`

### Database

- [ ] Migration punya method `up()` dan `down()` yang berfungsi
- [ ] Foreign key menggunakan `constrained()` dan `cascadeOnDelete()`
- [ ] Naming convention sesuai (snake_case, plural untuk tabel)

### Keamanan

- [ ] Semua pesan error yang tampil ke user dalam Bahasa Indonesia
- [ ] Tidak ada data sensitif (password, token) yang di-log
- [ ] Endpoint yang mengubah data dilindungi middleware auth + permission

### UI (Blade)

- [ ] View menggunakan layout Sneat yang konsisten (`@extends('layouts.layoutMaster')` dll)
- [ ] Tombol aksi (create, edit, delete) dicek permission sebelum ditampilkan
- [ ] SweetAlert2 digunakan untuk konfirmasi hapus via `AlertHandler`
- [ ] Notifikasi sukses/error ditangani via session flash

### Repository & Binding

- [ ] Repository interface dibuat di `app/Interfaces/Repositories/`
- [ ] Repository implementasi dibuat di `app/Repositories/`
- [ ] Binding didaftarkan di `AppServiceProvider::register()`

---

## Catatan Tambahan

### Generator Command

Project ini memiliki generator command `php artisan make:feature` yang akan scaffolding:

- Model + Migration
- Interface + Repository
- Service
- Controller + FormRequest
- Blade Views (index, create, edit, show)

**Gunakan ini untuk membuat modul baru daripada membuat file manual.**

### Template Admin (Sneat)

- Layout utama: `resources/views/layouts/contentNavbarLayout.blade.php`
- Blank layout: `resources/views/layouts/blankLayout.blade.php`
- Front layout: `resources/views/layouts/layoutFront.blade.php`
- Konfigurasi tema: `config/custom.php`
- Assets: `resources/assets/` (SCSS, JS, vendor libs)

### Front Pages (Landing Page)

Project sudah memiliki template front pages di `resources/views/pages/front-pages/`:

## Agent WAJIB Minta Konfirmasi Sebelum:

- Membuat migration baru (tampilkan preview dulu)
- Mengubah struktur tabel yang sudah ada
- Menghapus file apapun
- Mengubah file konfigurasi (.env, config/\*.php)
- Menambahkan package baru via composer/npm
- Mengubah route yang sudah ada

## Agent BOLEH Langsung Eksekusi:

- Membuat file baru (Controller, Service, Repository, Resource, Request)
- Menulis unit test
- Menambahkan komentar atau PHPDoc
- Update PROGRESS.md

```

---

## Urutan Setup Akhir

Kalau dirangkum, ini yang perlu disiapkan setelah `PROJECT_RULES.md` jadi:
```

PROJECT_RULES.md ✅ Sudah (hasil dari prompt sebelumnya)
↓
TASK_TEMPLATE.md ← Buat sekali, pakai terus
↓
ADR.md ← Mulai kosong, isi saat ada keputusan penting
↓
PROGRESS.md ← Update setiap selesai task
↓
Session Starter ← Paste setiap buka sesi baru Antigravity

- `landing-page.blade.php` — Halaman utama publik
- `pricing-page.blade.php` — Halaman harga/paket
- `help-center-landing.blade.php` — Pusat bantuan
- `checkout-page.blade.php` — Halaman checkout
- `payment-page.blade.php` — Halaman pembayaran

_Template ini bisa dijadikan dasar untuk halaman publik ManPower Supply._

---

_Dokumen ini adalah sumber kebenaran tunggal (single source of truth) untuk project ManPower Supply Website._
_Versi: 1.0 | Terakhir diperbarui: 2026-02-24_
