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

---

## 2. ATURAN EKSEKUSI WAJIB — Anti-Halusinasi

> **Baca ini dulu sebelum menulis kode apapun.**

### Aturan A — Permintaan Halaman Multi-Komponen

Jika user meminta halaman yang memiliki banyak bagian (misalnya "Buat dashboard siswa dengan komponen progres, kelas terdaftar, dan notifikasi"), **DILARANG KERAS** menulis semua kode sekaligus.

Ikuti alur dua fase ini:

#### Fase 1: Konfirmasi & Klarifikasi (JANGAN ADA KODE DI SINI)

1. Ulangi dengan singkat struktur halaman yang diminta.
2. Untuk setiap komponen, verifikasi:
   - Data apa yang diambil? Dari `data.js` atau `localStorage`?
   - Apa logika JS yang dibutuhkan?
   - Apakah ada ketergantungan antar komponen?
3. Jika ada yang ambigu atau belum jelas, **BERHENTI dan tanyakan dulu** sebelum lanjut.

#### Fase 2: Eksekusi Satu per Satu

- Lanjut hanya setelah user konfirmasi rencananya.
- Bangun **satu komponen per giliran**, mulai dari komponen #1.
- Tunggu feedback user sebelum lanjut ke komponen #2.

### Aturan B — Cek data.js Sebelum Menulis JS

Sebelum menulis logika yang membaca atau memanipulasi data, selalu rujuk **Seksi 6 (Struktur data.js)** untuk memastikan nama variabel, properti objek, dan struktur array yang benar. Jangan menebak nama properti.

### Aturan C — Cek Design System Sebelum Styling

Sebelum menulis CSS, rujuk **Seksi 5 (Design System)** untuk menggunakan variabel warna, ukuran font, dan class komponen yang sudah didefinisikan. Jangan hardcode warna hex langsung di file HTML.

---

## 3. Struktur Folder Project

```
elearning/
├── index.html                        # Landing Page (entry point utama)
├── style.css                         # Global stylesheet — satu file untuk semua halaman
├── data.js                           # Seed data: kelas, kategori, user contoh
├── storage.js                        # Helper CRUD untuk localStorage
├── auth.js                           # Logika login, registrasi, sesi user
├── router.js                         # Navigasi antar halaman (hash-based)
│
├── assets/
│   ├── images/                       # Gambar placeholder kelas, avatar
│   └── icons/                        # Ikon SVG manual atau emoji
│
├── components/                       # Potongan HTML yang dapat dipakai ulang (include via JS)
│   ├── navbar.html                   # Navbar publik
│   ├── navbar-siswa.html             # Navbar dengan menu siswa
│   ├── navbar-instruktur.html        # Navbar dengan menu instruktur
│   ├── navbar-admin.html             # Navbar dengan menu admin
│   ├── sidebar-siswa.html            # Sidebar untuk halaman siswa
│   ├── sidebar-instruktur.html       # Sidebar untuk halaman instruktur
│   ├── sidebar-admin.html            # Sidebar untuk halaman admin
│   ├── footer.html                   # Footer global
│   └── card-kelas.html               # Template card kelas (dirender via JS loop)
│
├── pages/
│   │
│   ├── auth/                         # Modul 1: Publik & Autentikasi
│   │   ├── login.html
│   │   ├── register-siswa.html
│   │   ├── register-instruktur.html
│   │   ├── lupa-password.html
│   │   ├── reset-password.html
│   │   ├── syarat-ketentuan.html
│   │   └── faq.html
│   │
│   ├── siswa/                        # Modul 2: Ruang Belajar Siswa
│   │   ├── dashboard.html
│   │   ├── katalog.html
│   │   ├── detail-kelas.html
│   │   ├── cart.html
│   │   ├── checkout.html
│   │   ├── invoice.html
│   │   ├── ruang-belajar.html
│   │   ├── kuis.html
│   │   ├── hasil-kuis.html
│   │   ├── diskusi.html
│   │   ├── sertifikat.html
│   │   ├── profil.html
│   │   ├── riwayat-transaksi.html
│   │   ├── wishlist.html
│   │   ├── ulasan.html
│   │   ├── daftar-instruktur.html
│   │   └── notifikasi.html
│   │
│   ├── instruktur/                   # Modul 3: Kreator Konten
│   │   ├── dashboard.html
│   │   ├── daftar-kelas.html
│   │   ├── buat-kelas.html
│   │   ├── kurikulum.html
│   │   ├── unggah-materi.html
│   │   ├── buat-kuis.html
│   │   ├── daftar-siswa.html
│   │   ├── tanya-jawab.html
│   │   ├── diskon-kupon.html
│   │   ├── profil-publik.html
│   │   ├── laporan-pendapatan.html
│   │   ├── tarik-saldo.html
│   │   ├── riwayat-penarikan.html
│   │   ├── ulasan-masuk.html
│   │   └── notifikasi.html
│   │
│   └── admin/                        # Modul 4: Admin Sistem
│       ├── dashboard.html
│       ├── manajemen-siswa.html
│       ├── manajemen-instruktur.html
│       ├── persetujuan-kelas.html
│       ├── verifikasi-pembayaran.html
│       ├── verifikasi-penarikan.html
│       ├── manajemen-kategori.html
│       ├── moderasi-ulasan.html
│       ├── pengaturan-banner.html
│       └── manajemen-admin.html
```

---

## 4. Peta 50 Interface Lengkap

### Modul 1 — Publik & Autentikasi (8 halaman)

| # | File | Deskripsi | CRUD |
|---|---|---|---|
| 1 | `index.html` | Landing page: banner promo, grid kategori, testimoni | Read |
| 2 | `auth/login.html` | Form login semua role, validasi localStorage | Read |
| 3 | `auth/register-siswa.html` | Registrasi akun siswa baru | Create |
| 4 | `auth/register-instruktur.html` | Registrasi akun instruktur | Create |
| 5 | `auth/lupa-password.html` | Form input email untuk reset | — |
| 6 | `auth/reset-password.html` | Form input password baru | Update |
| 7 | `auth/syarat-ketentuan.html` | Halaman teks statis S&K | — |
| 8 | `auth/faq.html` | Accordion tanya-jawab umum | — |

### Modul 2 — Siswa / Ruang Belajar (17 halaman)

| # | File | Deskripsi | CRUD |
|---|---|---|---|
| 9 | `siswa/dashboard.html` | Progres kelas, kelas aktif, ringkasan akun | Read |
| 10 | `siswa/katalog.html` | Grid semua kelas, filter kategori & harga | Read |
| 11 | `siswa/detail-kelas.html` | Silabus, harga, profil instruktur | Read |
| 12 | `siswa/cart.html` | Keranjang pembelian | Read/Delete |
| 13 | `siswa/checkout.html` | Pilih metode pembayaran, konfirmasi total | Create |
| 14 | `siswa/invoice.html` | Bukti transaksi, detail pembelian | Read |
| 15 | `siswa/ruang-belajar.html` | Pemutar video (embed YouTube), daftar bab | Read/Update |
| 16 | `siswa/kuis.html` | Soal pilihan ganda per bab | Read |
| 17 | `siswa/hasil-kuis.html` | Skor, pembahasan jawaban | Read |
| 18 | `siswa/diskusi.html` | Forum tanya-jawab per kelas | Create/Read |
| 19 | `siswa/sertifikat.html` | Sertifikat kelulusan, tombol unduh (print CSS) | Read |
| 20 | `siswa/profil.html` | Edit nama, email, foto, password | Update |
| 21 | `siswa/riwayat-transaksi.html` | Daftar semua transaksi pembelian | Read |
| 22 | `siswa/wishlist.html` | Daftar kelas yang disimpan | Create/Delete |
| 23 | `siswa/ulasan.html` | Form bintang + komentar untuk kelas | Create |
| 24 | `siswa/daftar-instruktur.html` | Grid kartu profil publik instruktur | Read |
| 25 | `siswa/notifikasi.html` | Daftar notifikasi siswa | Read/Update |

### Modul 3 — Instruktur / Kreator (15 halaman)

| # | File | Deskripsi | CRUD |
|---|---|---|---|
| 26 | `instruktur/dashboard.html` | Statistik siswa, estimasi pendapatan | Read |
| 27 | `instruktur/daftar-kelas.html` | Tabel kelas milik instruktur | Read/Delete |
| 28 | `instruktur/buat-kelas.html` | Form judul, deskripsi, harga, kategori | Create/Update |
| 29 | `instruktur/kurikulum.html` | Susun bab materi secara dinamis | Create/Update/Delete |
| 30 | `instruktur/unggah-materi.html` | Form URL video + upload PDF deskripsi | Create/Update |
| 31 | `instruktur/buat-kuis.html` | Form tambah soal + kunci jawaban | Create/Update/Delete |
| 32 | `instruktur/daftar-siswa.html` | Tabel siswa terdaftar + progres | Read |
| 33 | `instruktur/tanya-jawab.html` | Balas pertanyaan dari diskusi siswa | Create/Read |
| 34 | `instruktur/diskon-kupon.html` | Buat & kelola kode kupon | Create/Delete |
| 35 | `instruktur/profil-publik.html` | Edit bio, foto, keahlian | Update |
| 36 | `instruktur/laporan-pendapatan.html` | Tabel pendapatan per kelas per bulan | Read |
| 37 | `instruktur/tarik-saldo.html` | Form nominal + konfirmasi penarikan | Create |
| 38 | `instruktur/riwayat-penarikan.html` | Tabel riwayat penarikan saldo | Read |
| 39 | `instruktur/ulasan-masuk.html` | Lihat semua rating & komentar siswa | Read |
| 40 | `instruktur/notifikasi.html` | Notifikasi instruktur | Read/Update |

### Modul 4 — Admin Sistem (10 halaman)

| # | File | Deskripsi | CRUD |
|---|---|---|---|
| 41 | `admin/dashboard.html` | Statistik total user, kelas, transaksi | Read |
| 42 | `admin/manajemen-siswa.html` | Tabel siswa, aksi blokir/aktifkan | Read/Update/Delete |
| 43 | `admin/manajemen-instruktur.html` | Tabel instruktur, aksi verifikasi | Read/Update |
| 44 | `admin/persetujuan-kelas.html` | Review & setujui/tolak kelas baru | Read/Update |
| 45 | `admin/verifikasi-pembayaran.html` | Konfirmasi transaksi masuk | Read/Update |
| 46 | `admin/verifikasi-penarikan.html` | Setujui/tolak tarik saldo instruktur | Read/Update |
| 47 | `admin/manajemen-kategori.html` | Tambah, edit, hapus kategori kelas | Create/Update/Delete |
| 48 | `admin/moderasi-ulasan.html` | Hapus ulasan yang melanggar ketentuan | Read/Delete |
| 49 | `admin/pengaturan-banner.html` | Ganti teks & link banner promo homepage | Update |
| 50 | `admin/manajemen-admin.html` | Tambah & kelola akun admin lain | Create/Update/Delete |

---

## 5. Design System

### Filosofi UI
> Desain ini mencerminkan mahasiswa semester 2: **rapi tapi sederhana**, **fungsional**, tidak terlalu korporat. Gunakan warna biru/ungu yang "fresh untuk belajar", card dengan shadow tipis, dan font yang mudah dibaca. Hindari animasi yang terlalu kompleks.

### Variabel CSS (definisikan di `style.css` bagian paling atas)

```css
:root {
  /* Warna Utama */
  --primary: #4F46E5;          /* Indigo — warna brand utama */
  --primary-dark: #3730A3;     /* Indigo gelap untuk hover */
  --primary-light: #EEF2FF;    /* Indigo sangat muda untuk background badge */
  --secondary: #7C3AED;        /* Ungu — aksen */
  --accent: #06B6D4;           /* Cyan — highlight */

  /* Warna Netral */
  --white: #FFFFFF;
  --gray-50: #F9FAFB;          /* Background halaman */
  --gray-100: #F3F4F6;         /* Background card/input */
  --gray-300: #D1D5DB;         /* Border */
  --gray-500: #6B7280;         /* Teks sekunder */
  --gray-700: #374151;         /* Teks utama */
  --gray-900: #111827;         /* Judul / heading */

  /* Warna Status */
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
  --info: #3B82F6;

  /* Tipografi */
  --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */

  /* Spacing */
  --radius: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Komponen CSS Utama

```css
/* Tombol */
.btn { padding: 10px 20px; border-radius: var(--radius); border: none; cursor: pointer; font-size: var(--font-size-base); font-weight: 600; transition: background 0.2s; }
.btn-primary { background: var(--primary); color: var(--white); }
.btn-primary:hover { background: var(--primary-dark); }
.btn-secondary { background: var(--gray-100); color: var(--gray-700); border: 1px solid var(--gray-300); }
.btn-danger { background: var(--danger); color: var(--white); }
.btn-sm { padding: 6px 14px; font-size: var(--font-size-sm); }
.btn-block { width: 100%; }

/* Card */
.card { background: var(--white); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 20px; }
.card-kelas { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); background: var(--white); transition: transform 0.2s; }
.card-kelas:hover { transform: translateY(-4px); }
.card-kelas img { width: 100%; height: 160px; object-fit: cover; }
.card-kelas .card-body { padding: 16px; }

/* Form */
.form-group { margin-bottom: 18px; }
.form-label { display: block; margin-bottom: 6px; font-size: var(--font-size-sm); font-weight: 600; color: var(--gray-700); }
.form-input { width: 100%; padding: 10px 14px; border: 1px solid var(--gray-300); border-radius: var(--radius); font-size: var(--font-size-base); color: var(--gray-900); box-sizing: border-box; }
.form-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79,70,229,0.15); }

/* Badge */
.badge { display: inline-block; padding: 3px 10px; border-radius: 99px; font-size: 0.75rem; font-weight: 600; }
.badge-primary { background: var(--primary-light); color: var(--primary); }
.badge-success { background: #D1FAE5; color: #065F46; }
.badge-warning { background: #FEF3C7; color: #92400E; }
.badge-danger { background: #FEE2E2; color: #991B1B; }

/* Alert */
.alert { padding: 12px 16px; border-radius: var(--radius); margin-bottom: 16px; font-size: var(--font-size-sm); }
.alert-success { background: #D1FAE5; color: #065F46; border-left: 4px solid var(--success); }
.alert-danger { background: #FEE2E2; color: #991B1B; border-left: 4px solid var(--danger); }
.alert-info { background: #DBEAFE; color: #1E40AF; border-left: 4px solid var(--info); }

/* Table */
.table { width: 100%; border-collapse: collapse; font-size: var(--font-size-sm); }
.table th { background: var(--gray-50); color: var(--gray-700); font-weight: 600; padding: 12px 16px; text-align: left; border-bottom: 2px solid var(--gray-300); }
.table td { padding: 12px 16px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); }
.table tr:hover td { background: var(--gray-50); }

/* Layout */
.container { max-width: 1140px; margin: 0 auto; padding: 0 20px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* Sidebar Layout */
.layout-sidebar { display: flex; min-height: 100vh; }
.sidebar { width: 240px; background: var(--white); border-right: 1px solid var(--gray-100); padding: 24px 0; flex-shrink: 0; }
.sidebar-link { display: flex; align-items: center; gap: 10px; padding: 10px 24px; color: var(--gray-700); text-decoration: none; font-size: var(--font-size-sm); font-weight: 500; }
.sidebar-link:hover, .sidebar-link.active { background: var(--primary-light); color: var(--primary); }
.main-content { flex: 1; padding: 32px; background: var(--gray-50); }

/* Star Rating */
.stars { color: #F59E0B; }

/* Responsive */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .layout-sidebar { flex-direction: column; }
  .sidebar { width: 100%; border-right: none; border-bottom: 1px solid var(--gray-100); }
}
```

---

## 6. Struktur data.js (Seed Data)

Ini adalah **sumber data awal** yang langsung tersedia saat halaman dibuka. Tidak boleh diubah secara runtime — semua perubahan disimpan ke `localStorage`.

```js
// data.js

const SEED_CATEGORIES = [
  { id: 1, nama: "Pemrograman Web" },
  { id: 2, nama: "Desain UI/UX" },
  { id: 3, nama: "Data Science" },
  { id: 4, nama: "Mobile Development" },
  { id: 5, nama: "Bisnis Digital" }
];

const SEED_USERS = [
  {
    id: "u001", nama: "Budi Santoso", email: "budi@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: ""
  },
  {
    id: "u002", nama: "Sari Dewi", email: "sari@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-2.jpg", bio: "Web developer 5 tahun pengalaman",
    keahlian: "HTML, CSS, JavaScript", saldo: 500000
  },
  {
    id: "u003", nama: "Admin Utama", email: "admin@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: ""
  }
];

const SEED_KELAS = [
  {
    id: "k001", judul: "Belajar HTML & CSS dari Nol",
    deskripsi: "Kursus lengkap untuk pemula yang ingin belajar web development.",
    instrukturId: "u002", instrukturNama: "Sari Dewi",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 150000, gambar: "assets/images/kelas-1.jpg",
    level: "Pemula", durasi: "10 jam", totalModul: 5,
    rating: 4.5, totalSiswa: 120,
    status: "published",   // "pending" | "published" | "rejected"
    silabus: [
      { babKe: 1, judul: "Pengenalan HTML", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "Tag-tag Dasar HTML", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Pengenalan CSS", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 4, judul: "Flexbox & Grid", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "75 menit" },
      { babKe: 5, judul: "Project Akhir", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "90 menit" }
    ]
  },
  {
    id: "k002", judul: "JavaScript untuk Pemula",
    deskripsi: "Pelajari dasar-dasar JavaScript dan buat web interaktif.",
    instrukturId: "u002", instrukturNama: "Sari Dewi",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 200000, gambar: "assets/images/kelas-2.jpg",
    level: "Pemula", durasi: "15 jam", totalModul: 7,
    rating: 4.8, totalSiswa: 89,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Variabel & Tipe Data", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Fungsi & Scope", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" }
    ]
  },
  {
    id: "k003", judul: "Desain UI dengan Figma",
    deskripsi: "Buat prototype desain aplikasi yang menarik dengan Figma.",
    instrukturId: "u002", instrukturNama: "Sari Dewi",
    kategoriId: 2, kategoriNama: "Desain UI/UX",
    harga: 0, gambar: "assets/images/kelas-3.jpg",
    level: "Menengah", durasi: "8 jam", totalModul: 4,
    rating: 4.2, totalSiswa: 55,
    status: "published",
    silabus: []
  }
];

const SEED_KUIS = [
  {
    id: "q001", kelasId: "k001", babKe: 1,
    soal: [
      { pertanyaan: "Tag apa yang digunakan untuk membuat paragraf di HTML?", pilihan: ["<p>", "<para>", "<text>", "<div>"], jawaban: 0 },
      { pertanyaan: "Apa kepanjangan dari HTML?", pilihan: ["Hypertext Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "Hyperlink Text Markup Language"], jawaban: 0 }
    ]
  }
];

const SEED_ULASAN = [
  { id: "ul001", kelasId: "k001", userId: "u001", userName: "Budi Santoso", rating: 5, komentar: "Sangat mudah dipahami, materinya lengkap!", tanggal: "2025-01-10" },
  { id: "ul002", kelasId: "k001", userId: "u004", userName: "Andi Prasetyo", rating: 4, komentar: "Bagus, tapi ada beberapa bagian yang kurang detail.", tanggal: "2025-01-15" }
];

const SEED_NOTIFIKASI = [
  { id: "n001", userId: "u001", pesan: "Selamat datang di Platform E-Learning!", dibaca: false, tanggal: "2025-01-01" }
];
```

---

## 7. Struktur storage.js (Helper localStorage)

File ini adalah **lapisan abstraksi CRUD** untuk localStorage. Semua operasi baca/tulis data harus melewati helper ini — jangan akses `localStorage` langsung di file halaman.

```js
// storage.js

// =============================================
// INISIALISASI — jalankan sekali saat pertama kali dibuka
// =============================================
function initStorage() {
  if (!localStorage.getItem('users'))        localStorage.setItem('users', JSON.stringify(SEED_USERS));
  if (!localStorage.getItem('kelas'))        localStorage.setItem('kelas', JSON.stringify(SEED_KELAS));
  if (!localStorage.getItem('kuis'))         localStorage.setItem('kuis', JSON.stringify(SEED_KUIS));
  if (!localStorage.getItem('ulasan'))       localStorage.setItem('ulasan', JSON.stringify(SEED_ULASAN));
  if (!localStorage.getItem('transaksi'))    localStorage.setItem('transaksi', JSON.stringify([]));
  if (!localStorage.getItem('cart'))         localStorage.setItem('cart', JSON.stringify([]));
  if (!localStorage.getItem('progres'))      localStorage.setItem('progres', JSON.stringify([]));
  if (!localStorage.getItem('diskusi'))      localStorage.setItem('diskusi', JSON.stringify([]));
  if (!localStorage.getItem('notifikasi'))   localStorage.setItem('notifikasi', JSON.stringify(SEED_NOTIFIKASI));
  if (!localStorage.getItem('wishlist'))     localStorage.setItem('wishlist', JSON.stringify([]));
  if (!localStorage.getItem('kupon'))        localStorage.setItem('kupon', JSON.stringify([]));
  if (!localStorage.getItem('penarikan'))    localStorage.setItem('penarikan', JSON.stringify([]));
  if (!localStorage.getItem('banner'))       localStorage.setItem('banner', JSON.stringify({ teks: "Belajar itu Menyenangkan! Diskon 30% Kursus Pilihan", link: "#" }));
  if (!localStorage.getItem('categories'))   localStorage.setItem('categories', JSON.stringify(SEED_CATEGORIES));
}

// =============================================
// GENERIC CRUD HELPERS
// =============================================
function getAll(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function getById(key, id) {
  return getAll(key).find(item => item.id === id) || null;
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function createItem(key, newItem) {
  const all = getAll(key);
  all.push(newItem);
  save(key, all);
  return newItem;
}

function updateItem(key, id, updates) {
  const all = getAll(key).map(item => item.id === id ? { ...item, ...updates } : item);
  save(key, all);
}

function deleteItem(key, id) {
  const filtered = getAll(key).filter(item => item.id !== id);
  save(key, filtered);
}

// =============================================
// GENERATE ID SEDERHANA
// =============================================
function generateId(prefix = 'id') {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
```

---

## 8. Struktur auth.js (Sistem Sesi)

```js
// auth.js

// Login: simpan session user ke sessionStorage (hilang saat tab ditutup)
function login(email, password) {
  const users = getAll('users');
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { sukses: false, pesan: "Email atau password salah." };
  
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  return { sukses: true, user };
}

// Logout
function logout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/pages/auth/login.html';
}

// Ambil user yang sedang login
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('currentUser')) || null;
}

// Guard: redirect jika belum login atau role tidak sesuai
function requireAuth(allowedRoles = []) {
  const user = getCurrentUser();
  if (!user) { window.location.href = '/pages/auth/login.html'; return null; }
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    alert('Akses ditolak. Halaman ini bukan untuk role kamu.');
    window.history.back();
    return null;
  }
  return user;
}

// Registrasi: cek email duplikat lalu simpan
function register(data) {
  const users = getAll('users');
  if (users.find(u => u.email === data.email)) return { sukses: false, pesan: "Email sudah terdaftar." };

  const newUser = {
    id: generateId('u'),
    nama: data.nama,
    email: data.email,
    password: data.password,
    role: data.role, // 'siswa' | 'instruktur'
    foto: "", bio: "", saldo: 0
  };
  createItem('users', newUser);
  return { sukses: true, user: newUser };
}
```

---

## 9. Aturan Penulisan Kode

### HTML — Template Dasar Setiap Halaman

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nama Halaman — Platform E-Learning</title>
  <link rel="stylesheet" href="../../style.css">   <!-- sesuaikan path relatif -->
</head>
<body>
  <!-- Navbar (include via JS atau copy paste manual) -->
  <nav class="navbar">...</nav>

  <!-- Konten Utama -->
  <main>
    <div class="container">
      ...
    </div>
  </main>

  <!-- Footer -->
  <footer>...</footer>

  <!-- Urutan script: selalu data.js → storage.js → auth.js → script halaman -->
  <script src="../../data.js"></script>
  <script src="../../storage.js"></script>
  <script src="../../auth.js"></script>
  <script>
    // Inisialisasi storage saat pertama buka
    initStorage();

    // Guard jika halaman butuh login
    // const user = requireAuth(['siswa']);

    // Logika halaman spesifik di sini
    function tampilkanData() { ... }
    tampilkanData();
  </script>
</body>
</html>
```

### JS — Aturan Render Dinamis

```js
// BENAR: render list dengan loop + innerHTML
function renderKelas(dataKelas) {
  const container = document.getElementById('grid-kelas');
  if (dataKelas.length === 0) {
    container.innerHTML = '<p class="text-center text-gray">Belum ada kelas tersedia.</p>';
    return;
  }
  container.innerHTML = dataKelas.map(k => `
    <div class="card-kelas">
      <img src="${k.gambar}" alt="${k.judul}" onerror="this.src='assets/images/placeholder.jpg'">
      <div class="card-body">
        <span class="badge badge-primary">${k.kategoriNama}</span>
        <h3>${k.judul}</h3>
        <p class="text-gray">${k.instrukturNama}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
          <strong>${k.harga === 0 ? 'GRATIS' : 'Rp ' + k.harga.toLocaleString('id-ID')}</strong>
          <a href="detail-kelas.html?id=${k.id}" class="btn btn-primary btn-sm">Lihat Kelas</a>
        </div>
      </div>
    </div>
  `).join('');
}

// BENAR: ambil query param dari URL
function getQueryParam(nama) {
  return new URLSearchParams(window.location.search).get(nama);
}

// BENAR: format Rupiah
function formatRupiah(angka) {
  return angka === 0 ? 'GRATIS' : 'Rp ' + angka.toLocaleString('id-ID');
}

// BENAR: format tanggal
function formatTanggal(isoString) {
  return new Date(isoString).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

// BENAR: tampilkan notifikasi alert sederhana
function showAlert(containerId, pesan, tipe = 'success') {
  const el = document.getElementById(containerId);
  el.innerHTML = `<div class="alert alert-${tipe}">${pesan}</div>`;
  setTimeout(() => el.innerHTML = '', 3000);
}
```

---

## 10. Pola CRUD per Fitur

### Tambah Data (Create)
```js
const item = { id: generateId('k'), ...formData };
createItem('kelas', item);
showAlert('alert-box', 'Kelas berhasil dibuat!', 'success');
tampilkanData(); // re-render
```

### Edit Data (Update)
```js
updateItem('kelas', kelasId, { judul: inputJudul.value, harga: parseInt(inputHarga.value) });
showAlert('alert-box', 'Kelas berhasil diperbarui!', 'success');
```

### Hapus Data (Delete) — Selalu konfirmasi dulu
```js
if (confirm('Yakin ingin menghapus kelas ini?')) {
  deleteItem('kelas', kelasId);
  tampilkanData(); // re-render
}
```

### Baca Data dengan Filter
```js
const kelasList = getAll('kelas').filter(k => k.status === 'published' && k.kategoriId === parseInt(filterKategori));
```

---

## 11. Anti-Pattern — Yang DILARANG

| ❌ Jangan | ✅ Gantinya |
|---|---|
| Akses `localStorage` langsung (`localStorage.getItem(...)`) di file halaman | Gunakan helper dari `storage.js` (`getAll`, `getById`, dst) |
| Hardcode warna hex (`color: #4F46E5`) di HTML inline style | Gunakan CSS variable (`color: var(--primary)`) |
| Gunakan `alert()` untuk semua feedback | Gunakan `showAlert()` dengan `.alert` class |
| Tulis semua komponen halaman sekaligus | Ikuti Aturan A: Fase 1 konfirmasi dulu |
| Gunakan nama properti yang ditebak sendiri | Cek Seksi 6 (struktur data.js) |
| Buat file CSS terpisah per halaman | Satu file `style.css` global untuk semua |
| Gunakan `document.write()` | Gunakan `innerHTML` atau `createElement` |
| Link halaman tanpa query param untuk detail | Selalu pakai `?id=xxx` dan `getQueryParam()` |
| Simpan password dalam kondisi apapun selain string biasa | Ini tugas kuliah, cukup string — tidak perlu hashing |
| Gunakan framework eksternal (Bootstrap, jQuery, dll) | Murni Vanilla JS & CSS custom |

---

## 12. Progres Pembangunan Halaman

Update tabel ini setiap kali satu halaman selesai dikerjakan.

### Modul 1 — Publik & Autentikasi

| # | File | Status | Catatan |
|---|---|---|---|
| 1 | `index.html` | ⬜ Belum | |
| 2 | `auth/login.html` | ⬜ Belum | |
| 3 | `auth/register-siswa.html` | ⬜ Belum | |
| 4 | `auth/register-instruktur.html` | ⬜ Belum | |
| 5 | `auth/lupa-password.html` | ⬜ Belum | |
| 6 | `auth/reset-password.html` | ⬜ Belum | |
| 7 | `auth/syarat-ketentuan.html` | ⬜ Belum | |
| 8 | `auth/faq.html` | ⬜ Belum | |

### Modul 2 — Siswa

| # | File | Status | Catatan |
|---|---|---|---|
| 9 | `siswa/dashboard.html` | ⬜ Belum | |
| 10 | `siswa/katalog.html` | ⬜ Belum | |
| 11 | `siswa/detail-kelas.html` | ⬜ Belum | |
| 12 | `siswa/cart.html` | ⬜ Belum | |
| 13 | `siswa/checkout.html` | ⬜ Belum | |
| 14 | `siswa/invoice.html` | ⬜ Belum | |
| 15 | `siswa/ruang-belajar.html` | ⬜ Belum | |
| 16 | `siswa/kuis.html` | ⬜ Belum | |
| 17 | `siswa/hasil-kuis.html` | ⬜ Belum | |
| 18 | `siswa/diskusi.html` | ⬜ Belum | |
| 19 | `siswa/sertifikat.html` | ⬜ Belum | |
| 20 | `siswa/profil.html` | ⬜ Belum | |
| 21 | `siswa/riwayat-transaksi.html` | ⬜ Belum | |
| 22 | `siswa/wishlist.html` | ⬜ Belum | |
| 23 | `siswa/ulasan.html` | ⬜ Belum | |
| 24 | `siswa/daftar-instruktur.html` | ⬜ Belum | |
| 25 | `siswa/notifikasi.html` | ⬜ Belum | |

### Modul 3 — Instruktur

| # | File | Status | Catatan |
|---|---|---|---|
| 26 | `instruktur/dashboard.html` | ⬜ Belum | |
| 27 | `instruktur/daftar-kelas.html` | ⬜ Belum | |
| 28 | `instruktur/buat-kelas.html` | ⬜ Belum | |
| 29 | `instruktur/kurikulum.html` | ⬜ Belum | |
| 30 | `instruktur/unggah-materi.html` | ⬜ Belum | |
| 31 | `instruktur/buat-kuis.html` | ⬜ Belum | |
| 32 | `instruktur/daftar-siswa.html` | ⬜ Belum | |
| 33 | `instruktur/tanya-jawab.html` | ⬜ Belum | |
| 34 | `instruktur/diskon-kupon.html` | ⬜ Belum | |
| 35 | `instruktur/profil-publik.html` | ⬜ Belum | |
| 36 | `instruktur/laporan-pendapatan.html` | ⬜ Belum | |
| 37 | `instruktur/tarik-saldo.html` | ⬜ Belum | |
| 38 | `instruktur/riwayat-penarikan.html` | ⬜ Belum | |
| 39 | `instruktur/ulasan-masuk.html` | ⬜ Belum | |
| 40 | `instruktur/notifikasi.html` | ⬜ Belum | |

### Modul 4 — Admin

| # | File | Status | Catatan |
|---|---|---|---|
| 41 | `admin/dashboard.html` | ⬜ Belum | |
| 42 | `admin/manajemen-siswa.html` | ⬜ Belum | |
| 43 | `admin/manajemen-instruktur.html` | ⬜ Belum | |
| 44 | `admin/persetujuan-kelas.html` | ⬜ Belum | |
| 45 | `admin/verifikasi-pembayaran.html` | ⬜ Belum | |
| 46 | `admin/verifikasi-penarikan.html` | ⬜ Belum | |
| 47 | `admin/manajemen-kategori.html` | ⬜ Belum | |
| 48 | `admin/moderasi-ulasan.html` | ⬜ Belum | |
| 49 | `admin/pengaturan-banner.html` | ⬜ Belum | |
| 50 | `admin/manajemen-admin.html` | ⬜ Belum | |
