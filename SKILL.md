---
name: elearn-dev-agent
description: >
  Gunakan skill ini untuk SEMUA tugas pengembangan pada project Platform E-Learning —
  membuat halaman HTML, styling CSS, logika JS, operasi CRUD via localStorage, dan
  manajemen data lewat data.js. Aktifkan setiap kali user meminta membuat, mengedit,
  atau memperbaiki file apapun di dalam codebase project ini.
project: Platform E-Learning (Tugas Semester 2)
editor: Cursor
stack: HTML5, CSS3, Vanilla JavaScript (ES6+), localStorage, data.js
---

# E-Learning Dev Agent — Master SKILL.md

## 1. Project Identity

| Key | Value |
|---|---|
| **Nama Project** | Platform E-Learning |
| **Tujuan** | Web platform kursus online sebagai tugas mata kuliah Pemrograman Web Dasar Semester 2 |
| **Stack** | HTML5, CSS3, Vanilla JavaScript (ES6+) — murni, tanpa framework |
| **Database** | Tidak ada — menggunakan `data.js` (seed) + `localStorage` (CRUD runtime) |
| **Editor** | Cursor |
| **Target UI** | Mahasiswa semester 2 — desain fungsional, rapi, tidak over-engineered |
| **Scope** | 50 halaman / interface, 4 modul (Publik, Siswa, Instruktur, Admin) |
| **Tim** | 5 anggota, masing-masing 10 halaman, CSS terpisah per anggota |

---

## 2. ATURAN EKSEKUSI WAJIB — Anti-Halusinasi

> **Baca ini dulu sebelum menulis kode apapun.**

### Aturan A — Tugas Perbaikan (Mode Aktual Project Ini)

Project sudah selesai dibangun. Semua tugas sekarang adalah **perbaikan** bukan pembangunan baru.
Sebelum mengubah file apapun, wajib:
1. Baca file asli terlebih dahulu
2. Identifikasi bagian yang perlu diubah
3. Konfirmasi ke user sebelum menulis perubahan

### Aturan B — Cek data.js Sebelum Menulis JS

Sebelum menulis logika yang membaca atau memanipulasi data, selalu rujuk **Seksi 6 (Struktur data.js)** untuk memastikan nama variabel, properti objek, dan struktur array yang benar. **Jangan menebak nama properti.**

Properti kunci yang sering salah:
- User: `id, nama, email, password, role, foto, bio, saldo, status, keahlian`
- Kelas: `id, judul, deskripsi, instrukturId, instrukturNama, kategoriId, kategoriNama, harga, gambar, level, durasi, totalModul, rating, totalSiswa, status, silabus`
- Silabus item: `babKe, judul, videoUrl, durasi`
- Transaksi: `id, userId, items (array kelasId), total, metode, status, tanggal`
- Progres: `id, userId, kelasId, babSelesai (array), persen`
- Kupon: `id, kode, diskon, kelasId, expired`

### Aturan C — Cek Design System Sebelum Styling

Sebelum menulis CSS, rujuk **Seksi 5 (Design System)** untuk menggunakan variabel warna dan class komponen yang sudah didefinisikan. **Jangan hardcode warna hex langsung di file HTML.**

### Aturan D — Jangan Ubah File Inti

File berikut **DILARANG KERAS diubah** kecuali ada perintah eksplisit dari user:
- `data.js` — seed data, jangan diubah
- `storage.js` — helper CRUD, sudah final
- `auth.js` — sistem sesi, sudah final
- `boot-siswa.js`, `boot-instruktur.js`, `boot-admin.js` — guard halaman, sudah final

---

## 3. Struktur Folder Project (Aktual)

```
elearning/
├── index.html
├── style.css                         # Variabel CSS global + komponen bersama
├── data.js                           # Seed data — JANGAN DIUBAH
├── storage.js                        # Helper CRUD localStorage — JANGAN DIUBAH
├── auth.js                           # Logika sesi, guard, helper UI — JANGAN DIUBAH
├── boot-siswa.js                     # Guard halaman siswa — JANGAN DIUBAH
├── boot-instruktur.js                # Guard halaman instruktur — JANGAN DIUBAH
├── boot-admin.js                     # Guard halaman admin — JANGAN DIUBAH
│
├── css/                              # FOLDER BARU hasil perbaikan
│   ├── anggota1.css                  # CSS: index + auth/* + siswa/dashboard + siswa/katalog
│   ├── anggota2.css                  # CSS: siswa/detail-kelas s.d. siswa/profil
│   ├── anggota3.css                  # CSS: siswa/riwayat s.d. instruktur/unggah-materi
│   ├── anggota4.css                  # CSS: instruktur/buat-kuis s.d. instruktur/notifikasi
│   └── anggota5.css                  # CSS: semua halaman admin
│
├── assets/
│   ├── images/
│   └── icons/
│
└── pages/
    ├── auth/       (7 file)
    ├── siswa/      (17 file)
    ├── instruktur/ (15 file)
    └── admin/      (10 file)
```

### Cara Link CSS yang Benar (2 link WAJIB di setiap halaman)

```html
<!-- index.html (root) → anggota 1 -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="css/anggota1.css">

<!-- pages/auth/*.html → anggota 1 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota1.css">

<!-- pages/siswa/dashboard.html dan katalog.html → anggota 1 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota1.css">

<!-- pages/siswa/detail-kelas.html s.d. profil.html → anggota 2 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota2.css">

<!-- pages/siswa/riwayat-transaksi.html s.d. notifikasi.html → anggota 3 -->
<!-- pages/instruktur/dashboard.html s.d. unggah-materi.html → anggota 3 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota3.css">

<!-- pages/instruktur/buat-kuis.html s.d. notifikasi.html → anggota 4 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota4.css">

<!-- pages/admin/*.html → anggota 5 -->
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="../../css/anggota5.css">
```

### Urutan Script yang Benar (WAJIB di setiap halaman)

```html
<!-- Halaman dengan guard login (siswa/instruktur/admin): -->
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<script src="../../boot-siswa.js"></script>
<!-- lalu inline script, akses window.__pageUser -->

<!-- Halaman publik (index.html, auth/*, katalog): -->
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<!-- inline script dimulai dengan initStorage() -->
```

---

## 4. Pembagian Anggota — 50 Interface

### Anggota 1 — Modul Publik, Auth & Awal Siswa | `css/anggota1.css`

| # | File | CRUD |
|---|---|---|
| 1 | `index.html` | Read |
| 2 | `pages/auth/login.html` | Read |
| 3 | `pages/auth/register-siswa.html` | Create |
| 4 | `pages/auth/register-instruktur.html` | Create |
| 5 | `pages/auth/lupa-password.html` | — |
| 6 | `pages/auth/reset-password.html` | Update |
| 7 | `pages/auth/syarat-ketentuan.html` | — |
| 8 | `pages/auth/faq.html` | — |
| 9 | `pages/siswa/dashboard.html` | Read |
| 10 | `pages/siswa/katalog.html` | Read |

### Anggota 2 — Core Modul Siswa (Ruang Belajar) | `css/anggota2.css`

| # | File | CRUD |
|---|---|---|
| 11 | `pages/siswa/detail-kelas.html` | Read |
| 12 | `pages/siswa/cart.html` | Read/Delete |
| 13 | `pages/siswa/checkout.html` | Create |
| 14 | `pages/siswa/invoice.html` | Read |
| 15 | `pages/siswa/ruang-belajar.html` | Read/Update |
| 16 | `pages/siswa/kuis.html` | Read |
| 17 | `pages/siswa/hasil-kuis.html` | Read |
| 18 | `pages/siswa/diskusi.html` | Create/Read |
| 19 | `pages/siswa/sertifikat.html` | Read |
| 20 | `pages/siswa/profil.html` | Update |

### Anggota 3 — Ekstra Siswa & Core Kreator Kelas | `css/anggota3.css`

| # | File | CRUD |
|---|---|---|
| 21 | `pages/siswa/riwayat-transaksi.html` | Read |
| 22 | `pages/siswa/wishlist.html` | Create/Delete |
| 23 | `pages/siswa/ulasan.html` | Create |
| 24 | `pages/siswa/daftar-instruktur.html` | Read |
| 25 | `pages/siswa/notifikasi.html` | Read/Update |
| 26 | `pages/instruktur/dashboard.html` | Read |
| 27 | `pages/instruktur/daftar-kelas.html` | Read/Delete |
| 28 | `pages/instruktur/buat-kelas.html` | Create/Update |
| 29 | `pages/instruktur/kurikulum.html` | Create/Update/Delete |
| 30 | `pages/instruktur/unggah-materi.html` | Create/Update |

### Anggota 4 — Ekstra Instruktur (Manajemen & Keuangan) | `css/anggota4.css`

| # | File | CRUD |
|---|---|---|
| 31 | `pages/instruktur/buat-kuis.html` | Create/Update/Delete |
| 32 | `pages/instruktur/daftar-siswa.html` | Read |
| 33 | `pages/instruktur/tanya-jawab.html` | Create/Read |
| 34 | `pages/instruktur/diskon-kupon.html` | Create/Delete |
| 35 | `pages/instruktur/profil-publik.html` | Update |
| 36 | `pages/instruktur/laporan-pendapatan.html` | Read |
| 37 | `pages/instruktur/tarik-saldo.html` | Create |
| 38 | `pages/instruktur/riwayat-penarikan.html` | Read |
| 39 | `pages/instruktur/ulasan-masuk.html` | Read |
| 40 | `pages/instruktur/notifikasi.html` | Read/Update |

### Anggota 5 — Full Modul Admin | `css/anggota5.css`

| # | File | CRUD |
|---|---|---|
| 41 | `pages/admin/dashboard.html` | Read |
| 42 | `pages/admin/manajemen-siswa.html` | Read/Update/Delete |
| 43 | `pages/admin/manajemen-instruktur.html` | Read/Update |
| 44 | `pages/admin/persetujuan-kelas.html` | Read/Update |
| 45 | `pages/admin/verifikasi-pembayaran.html` | Read/Update |
| 46 | `pages/admin/verifikasi-penarikan.html` | Read/Update |
| 47 | `pages/admin/manajemen-kategori.html` | Create/Update/Delete |
| 48 | `pages/admin/moderasi-ulasan.html` | Read/Delete |
| 49 | `pages/admin/pengaturan-banner.html` | Update |
| 50 | `pages/admin/manajemen-admin.html` | Create/Update/Delete |

---

## 5. Design System

### Filosofi UI
> Desain ini mencerminkan mahasiswa semester 2: **rapi tapi sederhana**, **fungsional**, tidak terlalu korporat. Hindari animasi kompleks.

### Variabel CSS — ada di `style.css`, JANGAN diubah

```css
:root {
  --primary: #4F46E5;        --primary-dark: #3730A3;    --primary-light: #EEF2FF;
  --secondary: #7C3AED;      --accent: #06B6D4;
  --white: #FFFFFF;          --gray-50: #F9FAFB;         --gray-100: #F3F4F6;
  --gray-300: #D1D5DB;       --gray-500: #6B7280;        --gray-700: #374151;
  --gray-900: #111827;
  --success: #10B981;        --warning: #F59E0B;         --danger: #EF4444;
  --info: #3B82F6;
  --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-sm: 0.875rem;  --font-size-base: 1rem;     --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;   --font-size-2xl: 1.5rem;    --font-size-3xl: 1.875rem;
  --radius: 8px;             --radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Apa yang TETAP di `style.css` (komponen bersama)

Class berikut dipakai semua anggota — **jangan dipindah ke file anggota manapun**:

`.btn` `.btn-primary` `.btn-secondary` `.btn-danger` `.btn-sm` `.btn-block`
`.card` `.card-kelas` `.card-body` `.card-kelas-footer`
`.badge` `.badge-primary` `.badge-success` `.badge-warning` `.badge-danger`
`.alert` `.alert-success` `.alert-danger` `.alert-info` `.alert-box-wrap`
`.form-group` `.form-label` `.form-input`
`.table` `.table th` `.table td`
`.container` `.grid-2` `.grid-3` `.grid-4`
`.section` `.section-alt` `.section-title` `.section-subtitle`
`.layout-sidebar` `.sidebar` `.sidebar-link` `.sidebar-brand` `.main-content`
`.kpi-card` `.kpi-value` `.kpi-label`
`.empty-state` `.content-section` `.page-header`
`.progress-bar` `.progress-fill`
`.text-gray` `.text-center` `.stars`
`@media (max-width: 768px)` responsive rules

### Apa yang BOLEH di `css/anggotaN.css`

Hanya CSS **spesifik** yang tidak dipakai halaman anggota lain:
- Layout khusus satu halaman (contoh: `.cart-layout`, `.ruang-belajar-layout`, `.sertifikat-box`)
- Komponen yang hanya muncul di halaman bagian anggota tersebut
- Style navbar/footer halaman publik (khusus anggota 1)

---

## 6. Struktur data.js (Seed Data — AKTUAL, JANGAN DIUBAH)

```js
// Key-key localStorage yang dikelola storage.js:
// 'users', 'kelas', 'kuis', 'ulasan', 'transaksi', 'cart',
// 'progres', 'diskusi', 'notifikasi', 'wishlist', 'kupon',
// 'penarikan', 'banner', 'categories'

// Struktur properti:
// User:       id, nama, email, password, role, foto, bio, saldo, status, keahlian
// Kelas:      id, judul, deskripsi, instrukturId, instrukturNama, kategoriId,
//             kategoriNama, harga, gambar, level, durasi, totalModul,
//             rating, totalSiswa, status ("pending"|"published"|"rejected"), silabus[]
// Silabus:    babKe, judul, videoUrl, durasi
// Transaksi:  id, userId, items[] (array kelasId), total, metode, status, tanggal
// Progres:    id, userId, kelasId, babSelesai[] (array babKe), persen (0-100)
// Diskusi:    id, kelasId, userId, userName, pertanyaan, balasan[], tanggal
// Balasan:    userId, userName, teks, tanggal
// Kupon:      id, kode, diskon (%), kelasId (null=semua kelas), expired (ISO string)
// Penarikan:  id, instrukturId, nominal, bank, norek, status, tanggal
// Banner:     { teks, link, warnaBg }
// Notifikasi: id, userId, pesan, dibaca (bool), tanggal

// SEED_KUPON yang sudah ada di data.js:
// { id: "kpn001", kode: "EDUKITA10", diskon: 10, kelasId: null, expired: "2026-12-31" }
// { id: "kpn002", kode: "HEMAT50",   diskon: 50, kelasId: "k001", expired: "2026-12-31" }
```

---

## 7. storage.js — Fungsi yang Tersedia (JANGAN DIUBAH)

```js
initStorage()                     // inisialisasi semua key dari seed data
getAll(key)                       // return array
getById(key, id)                  // return item (toleran == untuk id campuran tipe)
save(key, data)                   // simpan array
createItem(key, newItem)          // push + save, return item baru
updateItem(key, id, updates)      // update by id dengan spread
deleteItem(key, id)               // filter out by id
generateId(prefix)                // contoh: generateId('k') → 'klp3x2a1'
```

---

## 8. auth.js — Fungsi yang Tersedia (JANGAN DIUBAH)

```js
// Helper
getQueryParam(nama)               // ambil ?nama=xxx dari URL
formatRupiah(angka)               // 0→'GRATIS', 150000→'Rp 150.000'
formatTanggal(isoString)          // '2025-01-10' → '10 Januari 2025'
showAlert(id, pesan, tipe)        // tampil alert di #id, hilang 3 detik, tipe: 'success'|'danger'|'info'
sameUserId(a, b)                  // String(a) === String(b)

// Sesi
login(email, password)            // { sukses: true, user } atau { sukses: false, pesan }
logout()                          // hapus sesi + redirect login
getCurrentUser()                  // return user atau null
requireAuth(allowedRoles)         // guard redirect
bootGuard(allowedRoles)           // dipanggil boot-*.js; auto-login demo jika perlu
persistSession(user)              // simpan ke sessionStorage + localStorage
register(data)                    // { sukses: true, user } atau { sukses: false, pesan }

// Cart & Wishlist
addToCart(userId, kelasId)                       // { sukses, pesan }
addToWishlist(userId, kelasId)                   // { sukses, pesan }
getCartItemsForUser(userId)                      // array { cart, kelas }
hitungDiskonKupon(subtotal, items, kupon)        // return nominal diskon
clearUserCart(userId)                            // hapus cart user

// Notifikasi
createNotifikasi(userId, pesan, meta)
notifyInstrukturKelasTerjual(kelas, namaPembeli, transaksiId)

// UI
setActiveSidebar(overridePage)    // set class 'active' ke sidebar-link yang sesuai

// window.__pageUser
// Diisi oleh bootGuard() — gunakan ini di halaman yang pakai boot-*.js
// var user = window.__pageUser; // sudah pasti login dan role benar
```

### Pola Guard yang Benar

```js
// Halaman pakai boot-siswa.js (sudah di <head>):
var user = window.__pageUser;     // langsung pakai, TIDAK perlu requireAuth() lagi
setActiveSidebar('dashboard');
// ... lanjut logika halaman

// Halaman publik (tidak pakai boot-*.js):
initStorage();
var user = getCurrentUser();      // bisa null
```

---

## 9. Standar Penulisan Kode JS

### Aturan Wajib

1. **Tidak pakai IIFE** — hapus `(function(){ ... })()`
2. **Template literal** untuk HTML string — pakai backtick, bukan concat `+`
3. **Pisahkan fungsi** ambil data vs render UI
4. **Tidak mendefinisikan ulang** `formatRupiah`, `formatTanggal`, `showAlert`, `getQueryParam`, `sameUserId`
5. **Pakai `var`** konsisten di file halaman — jangan campur dengan `const`/`let`
6. **Komentar bahasa Indonesia** singkat dan natural
7. **Tidak perlu error handling berlebihan** — cukup `|| []` atau `if (!data) return`

### Contoh Pola Kode Benar

```js
var user = window.__pageUser;

setActiveSidebar('dashboard');

// ambil id kelas yang sudah dibeli
function ambilKelasIds() {
  var transaksi = getAll('transaksi').filter(function(t) {
    return sameUserId(t.userId, user.id);
  });
  var ids = [];
  transaksi.forEach(function(t) {
    (t.items || []).forEach(function(id) {
      if (ids.indexOf(id) === -1) ids.push(id);
    });
  });
  return ids;
}

// buat HTML satu card kelas
function buatCardKelas(k) {
  return `
    <div class="card-kelas">
      <img src="../../${k.gambar}" alt="${k.judul}" onerror="this.src='../../assets/images/placeholder.jpg'">
      <div class="card-body">
        <span class="badge badge-primary">${k.kategoriNama}</span>
        <h3>${k.judul}</h3>
        <p class="text-gray">${k.instrukturNama}</p>
        <div class="card-kelas-footer">
          <strong>${formatRupiah(k.harga)}</strong>
          <a href="detail-kelas.html?id=${k.id}" class="btn btn-primary btn-sm">Lihat</a>
        </div>
      </div>
    </div>
  `;
}

// tampilkan ke layar
function tampilkanKelas() {
  var ids = ambilKelasIds();
  var container = document.getElementById('grid-kelas');
  if (ids.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Belum ada kelas yang dibeli.</p>
        <a href="katalog.html" class="btn btn-primary">Lihat Katalog</a>
      </div>
    `;
    return;
  }
  var list = ids.map(function(id) { return getById('kelas', id); }).filter(Boolean);
  container.innerHTML = list.map(buatCardKelas).join('');
}

tampilkanKelas();
```

### Pola CRUD Standar

```js
// Create
var item = { id: generateId('k'), judul: document.getElementById('input-judul').value };
createItem('kelas', item);
showAlert('alert-box', 'Berhasil disimpan!', 'success');
tampilkanData();

// Update
updateItem('kelas', kelasId, { judul: document.getElementById('input-judul').value });
showAlert('alert-box', 'Berhasil diperbarui!', 'success');

// Delete
if (confirm('Yakin hapus?')) {
  deleteItem('kelas', kelasId);
  tampilkanData();
}

// Read + Filter
var list = getAll('kelas').filter(function(k) {
  return k.status === 'published' && sameUserId(k.instrukturId, user.id);
});
```

---

## 10. Anti-Pattern — Yang DILARANG

| ❌ Jangan | ✅ Gantinya |
|---|---|
| Pakai IIFE `(function(){ ... })()` | Fungsi biasa di level atas |
| Build HTML dengan concat `+` panjang | Template literal (backtick) |
| Definisikan `formatRupiah()` di file halaman | Sudah ada di auth.js, langsung pakai |
| Campur `var`, `const`, `let` di file halaman | Konsisten pakai `var` |
| Akses `localStorage` langsung | Pakai `getAll`, `getById`, `createItem`, `updateItem`, `deleteItem` |
| Hardcode warna hex di inline style | Pakai CSS variable (`var(--primary)`) |
| Pakai `alert()` untuk feedback | Pakai `showAlert('id', 'pesan', 'tipe')` |
| Taruh CSS spesifik halaman di `style.css` | Taruh di `css/anggotaN.css` sesuai pembagian |
| Taruh CSS bersama (`.btn`, `.card`, dll) di file anggota | Tetap di `style.css` |
| Ubah `data.js`, `storage.js`, `auth.js`, `boot-*.js` | File ini sudah final |
| Panggil `requireAuth()` di halaman yang pakai `boot-*.js` | Pakai `window.__pageUser` langsung |
| Gunakan framework (Bootstrap, jQuery) | Murni Vanilla JS & CSS custom |

---

## 11. Progres Perbaikan (2 tugas per file: JS + CSS)

### Anggota 1

| # | File | JS Simpel | CSS di anggota1.css |
|---|---|---|---|
| 1 | `index.html` | ⬜ | ⬜ |
| 2 | `auth/login.html` | ⬜ | ⬜ |
| 3 | `auth/register-siswa.html` | ⬜ | ⬜ |
| 4 | `auth/register-instruktur.html` | ⬜ | ⬜ |
| 5 | `auth/lupa-password.html` | ⬜ | ⬜ |
| 6 | `auth/reset-password.html` | ⬜ | ⬜ |
| 7 | `auth/syarat-ketentuan.html` | ⬜ | ⬜ |
| 8 | `auth/faq.html` | ⬜ | ⬜ |
| 9 | `siswa/dashboard.html` | ⬜ | ⬜ |
| 10 | `siswa/katalog.html` | ⬜ | ⬜ |

### Anggota 2

| # | File | JS Simpel | CSS di anggota2.css |
|---|---|---|---|
| 11 | `siswa/detail-kelas.html` | ⬜ | ⬜ |
| 12 | `siswa/cart.html` | ⬜ | ⬜ |
| 13 | `siswa/checkout.html` | ⬜ | ⬜ |
| 14 | `siswa/invoice.html` | ⬜ | ⬜ |
| 15 | `siswa/ruang-belajar.html` | ⬜ | ⬜ |
| 16 | `siswa/kuis.html` | ⬜ | ⬜ |
| 17 | `siswa/hasil-kuis.html` | ⬜ | ⬜ |
| 18 | `siswa/diskusi.html` | ⬜ | ⬜ |
| 19 | `siswa/sertifikat.html` | ⬜ | ⬜ |
| 20 | `siswa/profil.html` | ⬜ | ⬜ |

### Anggota 3

| # | File | JS Simpel | CSS di anggota3.css |
|---|---|---|---|
| 21 | `siswa/riwayat-transaksi.html` | ⬜ | ⬜ |
| 22 | `siswa/wishlist.html` | ⬜ | ⬜ |
| 23 | `siswa/ulasan.html` | ⬜ | ⬜ |
| 24 | `siswa/daftar-instruktur.html` | ⬜ | ⬜ |
| 25 | `siswa/notifikasi.html` | ⬜ | ⬜ |
| 26 | `instruktur/dashboard.html` | ⬜ | ⬜ |
| 27 | `instruktur/daftar-kelas.html` | ⬜ | ⬜ |
| 28 | `instruktur/buat-kelas.html` | ⬜ | ⬜ |
| 29 | `instruktur/kurikulum.html` | ⬜ | ⬜ |
| 30 | `instruktur/unggah-materi.html` | ⬜ | ⬜ |

### Anggota 4

| # | File | JS Simpel | CSS di anggota4.css |
|---|---|---|---|
| 31 | `instruktur/buat-kuis.html` | ⬜ | ⬜ |
| 32 | `instruktur/daftar-siswa.html` | ⬜ | ⬜ |
| 33 | `instruktur/tanya-jawab.html` | ⬜ | ⬜ |
| 34 | `instruktur/diskon-kupon.html` | ⬜ | ⬜ |
| 35 | `instruktur/profil-publik.html` | ⬜ | ⬜ |
| 36 | `instruktur/laporan-pendapatan.html` | ⬜ | ⬜ |
| 37 | `instruktur/tarik-saldo.html` | ⬜ | ⬜ |
| 38 | `instruktur/riwayat-penarikan.html` | ⬜ | ⬜ |
| 39 | `instruktur/ulasan-masuk.html` | ⬜ | ⬜ |
| 40 | `instruktur/notifikasi.html` | ⬜ | ⬜ |

### Anggota 5

| # | File | JS Simpel | CSS di anggota5.css |
|---|---|---|---|
| 41 | `admin/dashboard.html` | ⬜ | ⬜ |
| 42 | `admin/manajemen-siswa.html` | ⬜ | ⬜ |
| 43 | `admin/manajemen-instruktur.html` | ⬜ | ⬜ |
| 44 | `admin/persetujuan-kelas.html` | ⬜ | ⬜ |
| 45 | `admin/verifikasi-pembayaran.html` | ⬜ | ⬜ |
| 46 | `admin/verifikasi-penarikan.html` | ⬜ | ⬜ |
| 47 | `admin/manajemen-kategori.html` | ⬜ | ⬜ |
| 48 | `admin/moderasi-ulasan.html` | ⬜ | ⬜ |
| 49 | `admin/pengaturan-banner.html` | ⬜ | ⬜ |
| 50 | `admin/manajemen-admin.html` | ⬜ | ⬜ |
