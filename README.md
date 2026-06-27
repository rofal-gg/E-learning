# Demo version : 
link deploy : https://rofal-gg.github.io/E-learning/

# 🎓 EduKita — Platform E-Learning

**EduKita** adalah platform e-learning berbasis web yang dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript** murni tanpa framework. Seluruh data disimpan di **localStorage** browser, sehingga tidak memerlukan backend server atau database.

> Proyek ini adalah Tugas Akhir Mata Kuliah Pemrograman Web Dasar — **Kelompok 4**

---

## 👥 Anggota Tim

| Nama | NIM | Peran |
|------|-----|-------|
| Muhammad Ainur Rofal Achsony | 250411100015 | Ketua Kelompok |
| Daffa' Tsaqib Anasyah | 250411100030 | Anggota |
| Idham Kholid Alauddin | 250411100025 | Anggota |
| Risvaldo Iqbal Ardiansyah | 250411100001 | Anggota |
| Sakhiy Fakhruddiin Majid | 250411100018 | Anggota |

---

## 🔐 Akun Demo

### 👑 Super Admin
| Email | Password |
|-------|----------|
| `super@email.com` | `super123` |

### 👤 Admin
| Email | Password |
|-------|----------|
| `admin@email.com` | `admin123` |
| `asep@email.com` | `admin123` |
| `mega@email.com` | `admin123` |
| `aditya@email.com` | `admin123` |
| `nina@email.com` | `admin123` |
| `bambang@email.com` | `admin123` |

### 🧑‍🎓 Siswa
| Email | Password | Nama |
|-------|----------|------|
| `budi@email.com` | `password123` | Budi Santoso |
| `budis@email.com` | `password123` | Budi Saryono |
| `rizky@email.com` | `password123` | Rizky Ramadhan |
| `andi@email.com` | `password123` | Andi Prasetyo |
| `geget@email.com` | `password123` | Geget Wijaya |
| `fitri@email.com` | `password123` | Fitri Handayani |
| `dimas@email.com` | `password123` | Dimas Prayoga |

### 🧑‍🏫 Instruktur
| Email | Password | Nama | Keahlian |
|-------|----------|------|----------|
| `jefri@email.com` | `password123` | Jefri Sutrisno | HTML, CSS, JavaScript |
| `sariD@email.com` | `password123` | Sari Delianti | Flutter, Unity, Kotlin |
| `dian@email.com` | `password123` | Dian Permata | Python, TensorFlow, SQL |
| `hendra@email.com` | `password123` | Hendra Gunawan | Node.js, Docker, AWS |
| `ratna@email.com` | `password123` | Ratna Kusuma | Figma, Vue.js, React |

---

## 📂 Struktur Project

```
EduKita/
├── index.html                  # Landing page
├── style.css                   # Stylesheet utama
├── auth.js                     # Autentikasi (login, register, logout, session)
├── storage.js                  # CRUD localStorage (getAll, getById, createItem, updateItem, deleteItem)
├── data.js                     # Data seed (users, categories, kelas, kuis)
├── boot-admin.js               # Guard halaman admin
├── boot-instruktur.js          # Guard halaman instruktur
├── boot-siswa.js               # Guard halaman siswa
│
├── components/                 # Komponen UI reusable
│   ├── components.js           # Render fungsi (navbar, sidebar, card)
│   ├── navbar.html             # Template navbar
│   ├── footer.html             # Template footer
│   ├── sidebar-admin.html      # Sidebar admin
│   ├── sidebar-instruktur.html # Sidebar instruktur
│   ├── sidebar-siswa.html      # Sidebar siswa
│   └── card-kelas.html         # Template card kelas
│
├── css/                        # Stylesheet per anggota
│   ├── anggota1.css
│   ├── anggota2.css
│   ├── anggota3.css
│   ├── anggota4.css
│   └── anggota5.css
│
├── assets/                     # Gambar & aset statis
│
├── pages/
│   ├── auth/                   # Halaman autentikasi
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── verifikasi-email.html
│   │   └── lupa-password.html
│   │
│   ├── siswa/                  # Halaman siswa (18 halaman)
│   │   ├── dashboard.html      # Dashboard dengan kupon & progres
│   │   ├── katalog.html        # Katalog kelas
│   │   ├── detail-kelas.html   # Detail & silabus kelas
│   │   ├── cart.html           # Keranjang belanja
│   │   ├── checkout.html       # Checkout pembayaran
│   │   ├── invoice.html        # Invoice & status pembayaran
│   │   ├── ruang-belajar.html  # Belajar (video & materi)
│   │   ├── kuis.html           # Ujian/kuis per bab
│   │   ├── hasil-kuis.html     # Hasil kuis & sertifikat
│   │   ├── sertifikat.html     # Sertifikat kelulusan
│   │   ├── diskusi.html        # Forum diskusi
│   │   ├── profil.html         # Profil & verifikasi email
│   │   ├── wishlist.html       # Wishlist kelas
│   │   ├── notifikasi.html     # Notifikasi
│   │   ├── ulasan.html         # Ulasan kelas
│   │   ├── riwayat-transaksi.html
│   │   ├── daftar-instruktur.html
│   │   └── kuis-penempatan.html
│   │
│   ├── instruktur/             # Halaman instruktur (16 halaman)
│   │   ├── dashboard.html
│   │   ├── daftar-kelas.html
│   │   ├── buat-kelas.html
│   │   ├── kurikulum.html
│   │   ├── buat-kuis.html
│   │   ├── unggah-materi.html
│   │   ├── jadwal-tatap-muka.html  # Dengan deteksi bentrok
│   │   ├── daftar-siswa.html
│   │   ├── diskon-kupon.html
│   │   ├── ulasan-masuk.html
│   │   ├── tanya-jawab.html
│   │   ├── laporan-pendapatan.html
│   │   ├── tarik-saldo.html
│   │   ├── riwayat-penarikan.html
│   │   ├── profil-publik.html
│   │   └── notifikasi.html
│   │
│   ├── admin/                  # Halaman admin (10 halaman)
│   │   ├── dashboard.html
│   │   ├── verifikasi-pembayaran.html  # Setujui/Tolak transaksi
│   │   ├── verifikasi-penarikan.html   # Setujui/Tolak penarikan
│   │   ├── persetujuan-kelas.html
│   │   ├── manajemen-siswa.html        # Detail siswa (ortu, tgl lahir)
│   │   ├── manajemen-instruktur.html
│   │   ├── manajemen-admin.html        # Hanya super_admin
│   │   ├── manajemen-kategori.html
│   │   ├── moderasi-ulasan.html
│   │   └── pengaturan-banner.html
│   │
│   ├── anggota.html              # Profil tim pengembang
│   └── blog-pribadi/             # Blog pribadi per anggota
│       ├── M. Ainur Rofal A/
│       ├── Daffa' Tsaqib Anasyah/
│       ├── Idham Kholid A/
│       ├── Risvaldo Iqbal A/
│       └── Sakhiy Fakhruddiin M/
│
└── README.md
```

---

## 🧭 Fitur Berdasarkan Aktor

### 🧑‍🎓 Siswa
- 🔍 **Katalog Kelas** — jelajahi & cari kelas berdasarkan kategori
- 🛒 **Keranjang & Checkout** — tambah kelas ke cart, checkout dengan status pending
- 📄 **Invoice** — lihat status pembayaran (LUNAS / MENUNGGU VERIFIKASI)
- 📚 **Ruang Belajar** — akses video & materi kelas yang sudah dibeli
- 🧪 **Kuis per Bab** — kerjakan kuis, lihat skor & jawaban benar
- 📜 **Sertifikat** — dapatkan sertifikat dengan No. Sertifikat & Tingkatan (Pemula/Menengah/Mahir)
- ⭐ **Ulasan** — beri rating & ulasan kelas
- 💬 **Diskusi** — forum tanya jawab per kelas
- 💝 **Wishlist** — simpan kelas favorit
- 🔔 **Notifikasi** — pemberitahuan sistem
- 🎟️ **Kupon Tersedia** — lihat & copy kode kupon di dashboard
- 👤 **Profil** — edit profil, upload foto, verifikasi email (OTP)

### 🧑‍🏫 Instruktur
- 📋 **Manajemen Kelas** — buat, edit, kelola kelas & kurikulum
- 📝 **Buat Kuis** — buat soal kuis per bab
- 📎 **Unggah Materi** — tambah materi pendukung
- 📅 **Jadwal Tatap Muka** — buat jadwal dengan deteksi bentrok otomatis
- 👥 **Daftar Siswa** — lihat siswa yang mengambil kelas
- 💰 **Laporan Pendapatan** — lihat total pendapatan & saldo terkini
- 🏧 **Tarik Saldo** — ajukan penarikan saldo (diverifikasi admin)
- 🎫 **Diskon & Kupon** — buat kode kupon untuk kelas
- ⭐ **Ulasan Masuk** — lihat ulasan dari siswa
- 👤 **Profil Publik** — edit profil yang dilihat siswa

### 👤 Admin
- ✅ **Verifikasi Pembayaran** — setujui / tolak transaksi siswa → update saldo instruktur & progres
- 💳 **Verifikasi Penarikan** — setujui / tolak penarikan saldo instruktur
- 📚 **Persetujuan Kelas** — setujui / tolak kelas baru dari instruktur
- 👥 **Manajemen Siswa** — lihat detail siswa (nama, email, ortu, tgl lahir, tingkatan, poin, kelas selesai)
- 👥 **Manajemen Instruktur** — kelola data instruktur
- 🏷️ **Manajemen Kategori** — tambah/edit/hapus kategori kelas
- ⭐ **Moderasi Ulasan** — moderasi ulasan yang masuk
- 🖼️ **Pengaturan Banner** — kelola banner landing page

### 👑 Super Admin
Semua fitur Admin, **plus:**
- 🔐 **Manajemen Admin** — tambah/hapus/edit akun admin (hanya visible untuk super_admin)

### 🔓 Umum (tanpa login)
- 🏠 **Landing Page** — hero, kategori, kelas unggulan, testimoni, footer
- 🔑 **Login / Register** — dengan redirect sesuai role
- 🔄 **Lupa Password** — reset password

---

## ⚙️ Teknis

### Teknologi
- **HTML5** — struktur halaman
- **CSS3** — styling dengan custom properties (variabel CSS)
- **Vanilla JavaScript (ES5+)** — logika aplikasi tanpa framework
- **localStorage** — penyimpanan data di browser

### Polars Penyimpanan Data
| Koleksi | Key | Keterangan |
|---------|-----|------------|
| `users` | `db_users` | Data pengguna (siswa, instruktur, admin) |
| `kelas` | `db_kelas` | Data kelas & silabus |
| `kategori` | `db_kategori` | Kategori kelas |
| `transaksi` | `db_transaksi` | Riwayat transaksi pembelian |
| `keranjang` | `db_keranjang` | Keranjang belanja |
| `kuis` | `db_kuis` | Soal kuis per bab |
| `nilaiKuis` | `db_nilaiKuis` | Nilai kuis siswa |
| `sertifikat` | `db_sertifikat` | Sertifikat kelulusan |
| `diskusi` | `db_diskusi` | Forum diskusi kelas |
| `notifikasi` | `db_notifikasi` | Notifikasi sistem |
| `jadwalTatapMuka` | `db_jadwalTatapMuka` | Jadwal tatap muka |
| `ulasan` | `db_ulasan` | Ulasan kelas |
| `penarikan` | `db_penarikan` | Riwayat penarikan saldo |
| `kupon` | `db_kupon` | Kode kupon diskon |
| `materi` | `db_materi` | Materi pendukung kelas |
| `wishlist` | `db_wishlist` | Wishlist siswa |

### Bootstrap Data
Semua data contoh (seed) dimuat otomatis saat pertama kali `initStorage()` dipanggil. Untuk mereset data, buka **Console Browser** → ketik:
```js
localStorage.clear(); location.reload();
```

---

## ✨ Fitur Unggulan

1. **Verifikasi Email via OTP** — simulasi OTP (6 digit) ditampilkan di alert browser
2. **Verifikasi Pembayaran 2 Langkah** — admin harus setujui transaksi → baru saldo instruktur & progres siswa terupdate
3. **Penarikan Saldo Terverifikasi** — saldo instruktur berkurang hanya saat admin menyetujui penarikan
4. **Deteksi Jadwal Bentrok** — notifikasi langsung jika jadwal tatap muka bertabrakan (60 menit)
5. **Sertifikat Otomatis** — No. sertifikat unik & tingkatan berdasarkan performa kuis
6. **Kupon Diskon** — instruktur bisa membuat kode kupon, siswa bisa copy & gunakan
7. **Super Admin** — role khusus untuk manajemen akun admin
8. **Foto Profil** — upload foto via base64, preview sebelum simpan, max 2MB

---

## 🧪 Testing

Jalankan server lalu buka **http://localhost:3000**.  
Gunakan akun demo di atas untuk login sebagai role yang berbeda dan uji semua fitur.

> **Reset data:** `localStorage.clear(); location.reload();` (via console browser)
