# PROMPT CURSOR AI — E-LEARNING EDUKITA
## Panduan Perbaikan & Penambahan Fitur

---

## ⚠️ CARA PAKAI — WAJIB DIBACA DULU

**Aturan utama agar AI tidak halusinasi:**
1. **Jalankan satu prompt per sesi Cursor.** Tunggu selesai 100% sebelum lanjut ke prompt berikutnya.
2. **Selalu mulai dengan membuka project folder** `E-learning-fixed/` di Cursor.
3. Setiap prompt sudah mencantumkan **file yang wajib dibaca AI dulu** — salin bagian itu apa adanya.
4. **Jangan edit/tambah instruksi sendiri** ke prompt. Jika butuh perubahan, tanya ke Claude dulu.
5. Urutan prompt **tidak boleh diacak** — beberapa prompt bergantung pada prompt sebelumnya.

---

## URUTAN EKSEKUSI

| # | Label | Target | Bergantung pada |
|---|---|---|---|
| P0 | Foundation | `data.js`, `storage.js`, `auth.js` | — |
| P1 | Fix Logout | `auth.js` | P0 |
| P2 | Fix Route Guard | `auth.js`, `boot-*.js` | P0 |
| P3 | Fix Register | `auth/register.html`, `auth/login.html` | P0 |
| P4 | Fix Lupa/Reset Password | `auth/lupa-password.html` | P0, P3 |
| P5 | Fix Detail Kelas Layout | `siswa/detail-kelas.html`, `css/anggota2.css` | — |
| P6 | Fitur Kuis Penempatan | `siswa/kuis-penempatan.html`, `siswa/hasil-penempatan.html` | P0 |
| P7 | Fitur Halaman Anggota | `pages/anggota.html`, `index.html` | — |
| P8 | Fitur Paket Durasi Checkout | `siswa/checkout.html` | P0 |
| P9 | Fitur QRIS QR Code | `siswa/checkout.html` | P8 |
| P10 | Fitur Masa Paket di Dashboard | `siswa/dashboard.html` | P8 |
| P11 | Fitur Jadwal Tatap Muka di Dashboard | `siswa/dashboard.html` | P0 |
| P12 | Fitur Input Jadwal — Instruktur | `instruktur/jadwal-tatap-muka.html` | P11 |

---

---

# P0 — FOUNDATION: Update Data & Storage

> **Jalankan ini PERTAMA.** Semua prompt lain bergantung pada perubahan di sini.

## Prompt P0

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- data.js
- storage.js
- auth.js

Saya ingin kamu melakukan HANYA perubahan berikut. Jangan ubah hal lain.

---

### 1. Update SEED_USERS di data.js

Tambahkan field baru ke SETIAP objek user di array SEED_USERS:
- namaOrangTua: string (isi bebas per user, contoh: "Bapak Santoso", "Ibu Wati", "Bapak Admin")
- tanggalLahir: string format "YYYY-MM-DD" (isi bebas per user)
- tingkatan: string, isi "pemula" untuk user siswa, "" (string kosong) untuk instruktur dan admin

Contoh hasil untuk user u001 (Budi Santoso - siswa):
{
  id: "u001", nama: "Budi Santoso", email: "budi@email.com",
  password: "password123", role: "siswa",
  foto: "assets/images/avatar-1.jpg", bio: "",
  namaOrangTua: "Bapak Santoso",
  tanggalLahir: "2000-05-15",
  tingkatan: "pemula"
}

Untuk u002 (instruktur) dan u003 (admin): tingkatan: ""

---

### 2. Update fungsi register() di auth.js

Tambahkan field namaOrangTua, tanggalLahir, dan tingkatan ke dalam objek newUser yang dibuat di fungsi register():

var newUser = {
  id: generateId('u'),
  nama: data.nama,
  email: data.email,
  password: data.password,
  role: data.role,
  foto: data.foto || '',
  bio: data.bio || '',
  saldo: data.saldo !== undefined ? data.saldo : 0,
  status: 'aktif',
  namaOrangTua: data.namaOrangTua || '',
  tanggalLahir: data.tanggalLahir || '',
  tingkatan: data.role === 'siswa' ? 'belum_tes' : ''
};

---

### 3. Update initStorage() di storage.js

Tambahkan DUA baris baru di dalam fungsi initStorage(), setelah baris yang mengecek 'penarikan':

  if (!localStorage.getItem('jadwal_tatap_muka')) localStorage.setItem('jadwal_tatap_muka', JSON.stringify([]));
  if (!localStorage.getItem('kuis_penempatan'))   localStorage.setItem('kuis_penempatan', JSON.stringify([]));

---

JANGAN:
- Jangan ubah struktur SEED_KELAS, SEED_KUIS, SEED_ULASAN, atau SEED_NOTIFIKASI
- Jangan tambah field lain selain yang disebutkan di atas
- Jangan ubah fungsi lain di auth.js selain register()
- Jangan hapus field yang sudah ada di SEED_USERS
```

---

---

# P1 — FIX: Logout Kembali ke index.html

## Prompt P1

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- auth.js

Saya ingin kamu melakukan HANYA perubahan berikut di auth.js. Jangan ubah file lain.

---

Saat ini fungsi logout() mengarahkan user ke halaman login. Saya ingin mengubahnya agar
mengarahkan ke index.html (halaman utama) setelah logout.

### Langkah 1: Tambahkan fungsi baru getIndexPath() di auth.js

Tambahkan fungsi ini TEPAT setelah fungsi getLoginPath() yang sudah ada:

function getIndexPath() {
  var area = getPageArea();
  if (area === 'siswa' || area === 'instruktur' || area === 'admin') return '../../index.html';
  if (area === 'auth') return '../../index.html';
  return 'index.html';
}

### Langkah 2: Update fungsi logout() di auth.js

Cari baris ini di dalam fungsi logout():
  window.location.replace(resolveAppPath(getLoginPath()));

Ganti dengan:
  window.location.replace(resolveAppPath(getIndexPath()));

---

JANGAN:
- Jangan ubah bagian lain dari fungsi logout()
- Jangan ubah fungsi getLoginPath() yang sudah ada
- Jangan ubah file lain selain auth.js
- Jangan tambah konfirmasi logout (popup/dialog)
```

---

---

# P2 — FIX: Route Guard — Wajib Login, Cek Role

## Prompt P2

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- auth.js
- boot-siswa.js
- boot-instruktur.js
- boot-admin.js

Saya ingin kamu melakukan HANYA perubahan berikut. Jangan ubah hal lain.

---

### Masalah yang perlu diperbaiki:

Fungsi bootGuard() di auth.js memiliki blok "Mode demo tugas" yang otomatis
login user demo berdasarkan folder URL yang diakses. Ini menyebabkan siapapun
bisa mengakses halaman siswa/instruktur/admin cukup dengan mengetik URL-nya,
tanpa perlu login dulu.

### Solusi:

Di dalam fungsi bootGuard() di auth.js, HAPUS blok kode berikut secara lengkap:

  /* Mode demo tugas: buka pages/siswa|instruktur|admin/* → sesi otomatis ke akun demo role itu */
  if (allowedRoles.length === 1) {
    var requiredRole = allowedRoles[0];
    var current = getCurrentUser();
    if (!current || current.role !== requiredRole) {
      var demoUser = autoLoginDemoForRole(requiredRole);
      if (demoUser) {
        document.documentElement.classList.add('auth-ok');
        window.__pageUser = demoUser;
        return demoUser;
      }
    }
  }

Setelah penghapusan, fungsi bootGuard() harus terlihat seperti ini:

function bootGuard(allowedRoles) {
  setupGlobalLogout();
  if (typeof initStorage === 'function') initStorage();

  allowedRoles = allowedRoles || [];

  var user = requireAuth(allowedRoles);
  if (!user) {
    window.__pageUser = null;
    return null;
  }
  window.__pageUser = user;
  return user;
}

---

### Verifikasi perilaku setelah perubahan:

Setelah edit ini:
- User yang belum login dan mengakses pages/siswa/dashboard.html → redirect ke pages/auth/login.html
- User yang login sebagai siswa dan mengakses pages/admin/dashboard.html → redirect ke pages/siswa/dashboard.html
- User yang login sebagai instruktur dan mengakses pages/admin/dashboard.html → redirect ke pages/instruktur/dashboard.html
- Ini sudah ditangani oleh requireAuth() yang sudah ada — tidak perlu tambah logika baru

---

JANGAN:
- Jangan ubah fungsi requireAuth()
- Jangan hapus fungsi autoLoginDemoForRole() — biarkan saja di file, hanya jangan dipanggil dari bootGuard
- Jangan ubah boot-siswa.js, boot-instruktur.js, atau boot-admin.js
- Jangan tambah logika baru lainnya
```

---

---

# P3 — FIX: Unified Register (Satu Halaman, Pilih Role)

## Prompt P3

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/auth/register-siswa.html  (sebagai referensi style & logika yang sudah ada)
- pages/auth/register-instruktur.html  (sebagai referensi)
- pages/auth/login.html
- auth.js  (terutama fungsi register() yang sudah diupdate di P0)
- style.css  (untuk class form-group, form-label, form-input, btn, auth-card, dll)
- css/anggota1.css

---

### Tugas:

Buat file BARU: pages/auth/register.html

File ini menggabungkan register-siswa dan register-instruktur menjadi SATU form
dengan pilihan role. Tidak ada pilihan role admin.

### Struktur form register.html:

**Bagian 1 — Informasi Akun (semua field wajib):**
- Nama Lengkap (text input, id="nama")
- Email (email input, id="email")
- Password (password input dengan toggle lihat/sembunyi, id="password")
- Konfirmasi Password (password input dengan toggle, id="konfirmasi")
- Daftar Sebagai: radio button → "Siswa" (value="siswa", checked default) | "Instruktur" (value="instruktur")
  Tampilkan sebagai dua pilihan horizontal dengan label yang jelas.

**Bagian 2 — Informasi Pribadi (untuk verifikasi reset password):**
Tambahkan subheading kecil: "Informasi Pribadi (digunakan untuk reset password)"
- Nama Orang Tua (text input, id="nama-ortu", placeholder "Nama lengkap orang tua/wali")
- Tanggal Lahir (date input, id="tanggal-lahir")
- Nomor HP (tel input, id="no-hp", placeholder "08xx-xxxx-xxxx") — opsional tapi tampilkan

**Tombol & link:**
- Tombol submit: "Daftar" (btn btn-primary btn-block)
- Link: "Sudah punya akun? Masuk di sini" → login.html

### Logika JS form-submit:

Ambil semua field, validasi:
- Semua field wajib terisi kecuali no-hp
- password minimal 6 karakter
- password === konfirmasi
- role harus 'siswa' atau 'instruktur'

Panggil fungsi register() dari auth.js dengan object:
{
  nama: nama,
  email: email,
  password: password,
  role: role,        // dari radio button
  namaOrangTua: namaOrtu,
  tanggalLahir: tanggalLahir,
  noHp: noHp || ''
}

Jika hasil.sukses:
- Panggil persistSession(hasil.user)
- Panggil redirectByRole(role)

Jika tidak sukses:
- showAlert('alert-box', hasil.pesan, 'danger')

### Urutan script di bagian bawah body:
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<script>
  initStorage();
  // logika form di sini
</script>

### Juga update login.html:

Di login.html, ganti dua link lama:
  <a href="register-siswa.html">Daftar sebagai Siswa</a>
  <a href="register-instruktur.html">Daftar sebagai Instruktur</a>

Menjadi SATU link:
  <a href="register.html">Daftar akun baru</a>

---

JANGAN:
- Jangan hapus register-siswa.html atau register-instruktur.html (biarkan saja)
- Jangan buat file CSS baru — gunakan class yang sudah ada di style.css dan anggota1.css
- Jangan gunakan framework (Bootstrap, jQuery, dll)
- Jangan tambah field selain yang disebutkan di atas
- Jangan hardcode warna hex — gunakan var(--primary), var(--gray-700), dll
```

---

---

# P4 — FIX: Unified Lupa Password + Reset Password (Satu Halaman)

## Prompt P4

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/auth/lupa-password.html  (referensi yang akan diganti total)
- pages/auth/reset-password.html  (akan digabung)
- auth.js  (fungsi getAll, updateItem, showAlert, getQueryParam)
- style.css
- css/anggota1.css

---

### Tugas:

TIMPA (overwrite) file pages/auth/lupa-password.html dengan konten baru.
File reset-password.html biarkan tetap ada (jangan dihapus), tapi tidak perlu diupdate.

### Konsep halaman baru lupa-password.html:

Satu halaman dengan TIGA tahap yang ditampilkan/disembunyikan secara JS (bukan navigasi antar halaman):

**Tahap 1 — Input Email** (tampil pertama kali):
- Form dengan input email (id="email-input")
- Tombol "Cari Akun" (id="btn-cari-akun")
- Jika email ditemukan di localStorage users → sembunyikan Tahap 1, tampilkan Tahap 2
- Jika tidak ditemukan → showAlert pesan error

**Tahap 2 — Verifikasi Identitas** (tersembunyi saat load):
Subheading: "Verifikasi Identitas"
Teks kecil: "Masukkan informasi berikut sesuai data saat pendaftaran."
- Input Nama Orang Tua (id="verif-ortu", text input)
- Input Tanggal Lahir (id="verif-tgl", date input)
- Tombol "Verifikasi" (id="btn-verifikasi")

Logika verifikasi:
  - Cari user berdasarkan email yang sudah diinput di Tahap 1
  - Bandingkan: user.namaOrangTua (case-insensitive, trim) === input nama ortu
  - Bandingkan: user.tanggalLahir === input tanggal lahir (format YYYY-MM-DD)
  - Jika KEDUANYA cocok → sembunyikan Tahap 2, tampilkan Tahap 3
  - Jika tidak cocok → showAlert('alert-box', 'Data tidak sesuai. Periksa kembali.', 'danger')

**Tahap 3 — Reset Password** (tersembunyi saat load):
Subheading: "Buat Password Baru"
- Input Password Baru (password dengan toggle lihat/sembunyi, id="new-password")
- Input Konfirmasi (password dengan toggle, id="konfirmasi-password")
- Tombol "Simpan Password Baru"

Logika simpan:
  - Validasi: minimal 6 karakter, password === konfirmasi
  - updateItem('users', user.id, { password: passwordBaru })
  - showAlert sukses
  - Setelah 2 detik: window.location.href = 'login.html'

### Teknis implementasi show/hide tahap:

Bungkus setiap tahap dalam div dengan id ("tahap-1", "tahap-2", "tahap-3").
Gunakan style.display = 'none' / 'block' untuk transisi.
Simpan variabel user yang ditemukan di Tahap 1 dalam variabel JS biasa (var userDitemukan).

### Link di bagian bawah:
<a href="login.html">Kembali ke Login</a>

### Urutan script:
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<script>
  initStorage();
  // logika 3 tahap di sini
</script>

---

JANGAN:
- Jangan gunakan window.location.href untuk pindah tahap — gunakan show/hide div
- Jangan hapus reset-password.html
- Jangan buat file baru selain mengupdate lupa-password.html
- Jangan tambah animasi/transisi CSS yang kompleks
- Jangan hardcode warna hex
```

---

---

# P5 — FIX: Detail Kelas — Tombol Harga Berantakan Setelah Progres

## Prompt P5

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/siswa/detail-kelas.html
- css/anggota2.css  (cari section .price-panel)
- style.css  (cari .btn, .btn-block)

---

### Masalah:

Di halaman detail-kelas.html, setelah user membeli kelas, fungsi tampilkanDetail()
menggunakan variabel panelButtons berisi:
  <a href="ruang-belajar.html?..." class="btn btn-primary btn-block">Lanjutkan Belajar</a>
  <a href="diskusi.html?..." class="btn btn-secondary btn-block">Forum Diskusi</a>

Tombol-tombol ini dirender di dalam <aside class="price-panel card">.
Layoutnya berantakan karena tidak ada container flex untuk mengatur tombol-tombol tersebut.

### Solusi — DUA bagian:

**Bagian 1: Update css/anggota2.css**

Tambahkan rule CSS baru di bagian .price-panel (setelah .price-panel .btn yang sudah ada):

.price-panel .btn-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}

.price-panel .btn-group .btn {
  margin-bottom: 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
}

**Bagian 2: Update pages/siswa/detail-kelas.html**

Di dalam fungsi tampilkanDetail(), cari variabel panelButtons.
Ubah nilai panelButtons untuk kondisi sudahBeli menjadi:

var panelButtons = sudahBeli
  ? `<div class="btn-group">
       <a href="ruang-belajar.html?id=${kelas.id}" class="btn btn-primary">Lanjutkan Belajar</a>
       <a href="diskusi.html?kelasId=${kelas.id}" class="btn btn-secondary">Forum Diskusi</a>
     </div>`
  : `<div class="btn-group">
       <button type="button" id="btn-cart" class="btn btn-primary">Tambah ke Keranjang</button>
       <button type="button" id="btn-wishlist" class="btn btn-secondary">Simpan ke Wishlist</button>
     </div>`;

---

JANGAN:
- Jangan ubah bagian lain dari tampilkanDetail() atau pasangTombolAksi()
- Jangan ubah struktur HTML di luar variabel panelButtons
- Jangan tambah CSS di file lain selain anggota2.css
- Jangan hapus class btn-block yang mungkin ada di tempat lain di file
```

---

---

# P6 — FITUR: Kuis Penempatan Tingkatan Siswa

## Prompt P6

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- data.js  (lihat struktur SEED_KUIS untuk referensi format soal)
- storage.js  (fungsi getAll, getById, updateItem, createItem, generateId)
- auth.js  (fungsi getCurrentUser, requireAuth, bootGuard)
- pages/siswa/kuis.html  (sebagai referensi layout kuis yang sudah ada)
- pages/siswa/hasil-kuis.html  (sebagai referensi layout hasil)
- style.css
- css/anggota1.css

---

### Tugas: Buat DUA file baru

---

### File 1: pages/siswa/kuis-penempatan.html

**Tujuan:** Halaman kuis yang menentukan tingkatan siswa (Pemula / Menengah / Mahir).
Kuis ini hanya perlu diselesaikan SATU kali. Jika sudah punya tingkatan, redirect ke dashboard.

**Script guard di <head>:**
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<script src="../../boot-siswa.js"></script>

**Logika awal halaman:**
- Ambil user dari window.__pageUser
- Cek user.tingkatan: jika tidak kosong DAN bukan 'belum_tes' → redirect ke dashboard.html
- Jika tingkatan 'belum_tes' atau kosong → tampilkan kuis

**Data soal (hardcode di dalam script, JANGAN di data.js):**

Buat array SOAL_PENEMPATAN dengan 9 soal pilihan ganda:
3 soal bertingkat Pemula, 3 soal Menengah, 3 soal Mahir.
Contoh soal:
- P1: "Tag HTML untuk membuat paragraf adalah?" → ["<p>","<para>","<text>","<div>"], jawaban: 0
- P2: "CSS property untuk mengubah warna teks?" → ["color","font","text-color","background"], jawaban: 0
- P3: "Flexbox parent harus menggunakan display:?" → ["flex","grid","block","inline"], jawaban: 0
- M1: "JavaScript method untuk menambah elemen ke array?" → ["push()","add()","append()","insert()"], jawaban: 0
- M2: "Event listener untuk klik tombol adalah?" → ["click","tap","press","touch"], jawaban: 0
- M3: "localStorage.getItem() mengembalikan tipe data?" → ["String","Number","Object","Array"], jawaban: 0
- H1: "Apa itu Big O(n) dalam algoritma?" → ["Kompleksitas waktu linear","Kompleksitas memori tetap","Rekursi tanpa batas","Loop bersarang"], jawaban: 0
- H2: "REST API menggunakan method HTTP untuk menghapus data?" → ["DELETE","REMOVE","DROP","ERASE"], jawaban: 0
- H3: "Apa perbedaan SQL dan NoSQL?" → ["SQL relasional, NoSQL non-relasional","SQL lebih cepat dari NoSQL","NoSQL tidak bisa store data","Keduanya sama saja"], jawaban: 0

**Tampilan kuis:**
- Tampilkan satu soal per layar (sistem step/wizard), bukan semua sekaligus
- Tampilkan progres: "Soal 1 dari 9"
- Pilihan jawaban tampil sebagai tombol-tombol pilihan (bukan radio button)
- Tombol "Selanjutnya" (disabled sampai jawaban dipilih)
- Soal terakhir: tombol "Lihat Hasil"

**Logika perhitungan hasil:**
- Hitung jumlah jawaban benar
- Skor 0-3 benar → tingkatan = 'pemula'
- Skor 4-6 benar → tingkatan = 'menengah'
- Skor 7-9 benar → tingkatan = 'mahir'

**Setelah selesai:**
- updateItem('users', user.id, { tingkatan: tingkatanHasil })
- Simpan ke localStorage 'kuis_penempatan': createItem('kuis_penempatan', { id: generateId('qp'), userId: user.id, skor: skorBenar, tingkatan: tingkatanHasil, tanggal: new Date().toISOString() })
- Redirect ke halaman hasil: hasil-penempatan.html?tingkatan=xxx&skor=yyy

---

### File 2: pages/siswa/hasil-penempatan.html

**Tujuan:** Halaman konfirmasi hasil kuis penempatan.

**Script guard:** sama seperti kuis-penempatan.html (boot-siswa.js)

**Tampilan:**
- Ambil query param: tingkatan dan skor dari URL
- Tampilkan dengan layout card centered:
  - Judul: "Hasil Kuis Penempatan"
  - Skor: "Kamu menjawab [skor] dari 9 soal dengan benar"
  - Tingkatan: Tampilkan badge besar bertuliskan tingkatan (Pemula/Menengah/Mahir)
    dengan warna: Pemula=badge-warning, Menengah=badge-primary, Mahir=badge-success
  - Teks penjelasan singkat per tingkatan:
    - Pemula: "Mulai dari dasar — kamu akan belajar HTML, CSS, dan JavaScript fundamental."
    - Menengah: "Bagus! Kamu siap mengambil kelas tingkat menengah."
    - Mahir: "Luar biasa! Kamu bisa mengambil kursus tingkat lanjut."
  - Tombol "Mulai Belajar" → href="katalog.html"

---

### Integrasi ke detail-kelas.html (EDIT JUGA file ini):

Di file pages/siswa/detail-kelas.html, di dalam fungsi tampilkanDetail(),
SEBELUM merender HTML, tambahkan pengecekan level akses:

Jika user login (siswa) DAN sudah membeli kelas:
  → Tidak perlu cek level (sudah beli = sudah bisa akses)

Jika user login (siswa) DAN belum membeli:
  → Cek user.tingkatan dan kelas.level
  → Mapping: 'pemula' bisa akses level 'Pemula'
             'menengah' bisa akses level 'Pemula' dan 'Menengah'
             'mahir' bisa akses semua level
             'belum_tes' → tampilkan banner peringatan dengan link ke kuis-penempatan.html
  → Jika tingkatan tidak cukup: tampilkan banner WARNING (bukan block total):
    "Kelas ini untuk tingkatan [level kelas]. Tingkatan kamu saat ini: [tingkatan user].
     <a href='kuis-penempatan.html'>Ikuti kuis penempatan ulang</a>"
    Tapi tetap tampilkan tombol keranjang (user masih boleh beli)

---

JANGAN:
- Jangan ubah data.js untuk menambah soal penempatan (soal ada di dalam script halaman)
- Jangan buat sistem block total yang mencegah akses katalog
- Jangan gunakan SEED_KUIS untuk soal penempatan
- Jangan tambah halaman ke sidebar — ini halaman khusus yang diakses setelah register
- Jangan simpan soal di localStorage
```

---

---

# P7 — FITUR: Halaman Anggota Kelompok

## Prompt P7

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- index.html  (untuk melihat struktur navbar publik dan cara link navigasi)
- components/navbar.html  (referensi navbar publik)
- style.css  (card, badge, container, grid)
- css/anggota1.css sampai anggota5.css  (referensi style per anggota)

---

### Tugas: Buat file baru pages/anggota.html

**Tujuan:** Halaman publik (tidak perlu login) yang menampilkan profil anggota kelompok
beserta jobdesk masing-masing.

**Script (tanpa boot-siswa.js — ini halaman publik):**
<script src="../data.js"></script>
<script src="../storage.js"></script>
<script src="../auth.js"></script>
<script src="../components/components.js"></script>
<script>
  initStorage();
  renderNavbarPublik({ basePath: '../' });
  renderFooter({ basePath: '../' });
</script>

**Layout halaman:**

Header section:
- Judul: "Tim Pengembang EduKita"
- Subtitle: "Kelompok [isi nama kelompok] — Tugas Akhir Pemrograman Web Dasar"
- Satu baris dekoratif di bawah judul

Grid anggota (grid-2 di desktop, 1fr di mobile):
Setiap card anggota berisi:
  - Avatar/foto placeholder (lingkaran, background var(--primary-light), inisial nama)
  - Nama lengkap (h3)
  - NIM
  - Role/jabatan di kelompok (badge)
  - Bagian "Jobdesk" dengan list tugas yang dikerjakan

**Data anggota (hardcode langsung di HTML sebagai string literal, BUKAN dari localStorage):**

Isi dengan 5 anggota sesuai pembagian tugas proyek:
- Anggota 1: Koordinator + Modul Publik & Auth (login, register, index)
- Anggota 2: Modul Siswa bagian 1 (detail kelas, cart, checkout)
- Anggota 3: Modul Siswa bagian 2 (dashboard, katalog, ruang belajar)
- Anggota 4: Modul Instruktur
- Anggota 5: Modul Admin

Nama, NIM, dan detail jobdesk: isi dengan placeholder seperti
"[Nama Anggota 1]", "[NIM Anggota 1]" — user akan mengganti sendiri.

**CSS tambahan (tambahkan di css/anggota1.css, section khusus dengan komentar /* Halaman Anggota */):**

.anggota-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 32px; }
.anggota-card { background: var(--white); border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 24px; }
.anggota-avatar { width: 72px; height: 72px; border-radius: 50%; background: var(--primary-light); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: var(--primary); margin: 0 auto 16px; }
.anggota-nama { text-align: center; font-size: var(--font-size-lg); font-weight: 700; color: var(--gray-900); margin: 0 0 4px; }
.anggota-nim { text-align: center; font-size: var(--font-size-sm); color: var(--gray-500); margin: 0 0 12px; }
.anggota-jobdesk { margin-top: 16px; }
.anggota-jobdesk h4 { font-size: var(--font-size-sm); font-weight: 700; color: var(--gray-700); margin: 0 0 8px; }
.anggota-jobdesk ul { padding-left: 18px; margin: 0; }
.anggota-jobdesk li { font-size: var(--font-size-sm); color: var(--gray-700); margin-bottom: 4px; line-height: 1.5; }
@media (max-width: 768px) { .anggota-grid { grid-template-columns: 1fr; } }

**Update index.html:**

Di navbar publik pada index.html, tambahkan link "Tim Kami" yang mengarah ke pages/anggota.html.
Cari bagian navbar di index.html dan tambahkan link tersebut di antara link yang ada.

---

JANGAN:
- Jangan gunakan foto asli/gambar eksternal — gunakan avatar dengan inisial text
- Jangan tambah animasi atau efek hover yang kompleks
- Jangan buat file CSS baru — tambahkan di anggota1.css dengan komentar pemisah
- Jangan require login untuk mengakses halaman ini
```

---

---

# P8 — FITUR: Paket Durasi di Checkout

## Prompt P8

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/siswa/checkout.html  (SELURUH file)
- storage.js  (fungsi createItem, updateItem, generateId, getById, getAll)
- auth.js  (fungsi sameUserId, clearUserCart, createNotifikasi, notifyInstrukturKelasTerjual)
- pages/siswa/invoice.html  (untuk melihat field transaksi apa saja yang ditampilkan)
- css/anggota2.css  (untuk referensi class yang sudah ada)
- style.css

---

### Tugas: Update pages/siswa/checkout.html

Tambahkan fitur pemilihan PAKET DURASI sebelum konfirmasi pembayaran.

### Paket yang tersedia:

Definisikan sebagai variabel JS di awal script:

var PAKET_DURASI = [
  { id: 'p1', label: '1 Bulan', bulan: 1, multiplier: 1.0 },
  { id: 'p3', label: '3 Bulan', bulan: 3, multiplier: 2.5 },
  { id: 'p6', label: '6 Bulan', bulan: 6, multiplier: 4.0 },
  { id: 'p12', label: '1 Tahun', bulan: 12, multiplier: 7.0 }
];

var selectedPaket = PAKET_DURASI[0]; // default 1 bulan

### Perubahan di fungsi renderRingkasan():

Di dalam HTML yang di-render, sebelum section "Metode Pembayaran" di <aside>,
tambahkan section baru "Pilih Paket Akses":

Tampilkan 4 pilihan paket sebagai card/button yang bisa diklik (bukan radio button biasa).
Setiap card menampilkan:
- Label: "1 Bulan", "3 Bulan", "6 Bulan", "1 Tahun"
- Harga: formatRupiah(subtotal * multiplier)
- Badge "Hemat X%" untuk paket 3 bulan ke atas

Tampilan card paket:
- Buat class CSS baru di anggota2.css:
  .paket-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px; }
  .paket-card { border: 2px solid var(--gray-300); border-radius: var(--radius); padding: 10px; cursor: pointer; text-align: center; transition: border-color 0.2s; }
  .paket-card.aktif { border-color: var(--primary); background: var(--primary-light); }
  .paket-card .paket-label { font-weight: 700; font-size: var(--font-size-sm); color: var(--gray-900); }
  .paket-card .paket-harga { font-size: var(--font-size-xs, 0.8rem); color: var(--gray-500); margin-top: 2px; }
  .paket-hemat { font-size: 0.7rem; background: var(--success); color: white; border-radius: 4px; padding: 1px 5px; display: inline-block; margin-top: 3px; }

Logika klik card paket:
- Klik salah satu → set selectedPaket ke paket yang dipilih
- Toggle class 'aktif' pada card
- Update tampilan total: subtotal * multiplier - diskon
- Update teks total di elemen #checkout-total

### Perubahan di fungsi prosesBayar():

Saat membuat objek transaksi dengan createItem('transaksi', ...),
tambahkan field baru:

{
  id: transaksiId,
  userId: user.id,
  items: kelasIds,
  total: total,
  metode: metodeEl.value,
  status: 'sukses',
  tanggal: new Date().toISOString(),
  paketDurasi: selectedPaket.bulan,                // <-- TAMBAH INI
  tanggalBerakhir: hitungTanggalBerakhir(selectedPaket.bulan)  // <-- TAMBAH INI
}

Tambahkan fungsi helper:

function hitungTanggalBerakhir(bulan) {
  var tgl = new Date();
  tgl.setMonth(tgl.getMonth() + bulan);
  return tgl.toISOString();
}

---

JANGAN:
- Jangan ubah logika prosesBayar() yang sudah ada selain menambah dua field di atas
- Jangan ubah logika kupon/diskon yang sudah ada
- Jangan hapus opsi metode pembayaran yang sudah ada
- Jangan tambah animasi slide/collapse yang kompleks
- Jangan ubah format transaksi yang sudah ada — hanya tambah field baru
```

---

---

# P9 — FITUR: QRIS QR Code di Checkout

## Prompt P9

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/siswa/checkout.html  (SETELAH update P8 — pastikan sudah ada perubahan P8)
- css/anggota2.css

---

### Tugas: Tambahkan tampilan QR Code saat QRIS dipilih

Di dalam fungsi renderRingkasan(), di bagian HTML form pembayaran,
setelah 3 label radio button metode pembayaran, tambahkan:

<div id="qris-container" style="display:none; text-align:center; margin: 12px 0;">
  <p style="font-size: var(--font-size-sm); font-weight:600; color:var(--gray-700); margin-bottom:8px;">
    Scan QR Code berikut untuk membayar:
  </p>
  <img
    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=EduKita-Payment-Demo"
    alt="QR Code QRIS"
    width="180"
    height="180"
    style="border: 4px solid var(--gray-300); border-radius: var(--radius); display:block; margin:0 auto 8px;"
    onerror="this.style.display='none'; document.getElementById('qris-fallback').style.display='block';"
  >
  <div id="qris-fallback" style="display:none; width:180px; height:180px; margin:0 auto; background:var(--gray-100); border-radius:var(--radius); display:none; align-items:center; justify-content:center;">
    <span style="color:var(--gray-500); font-size:var(--font-size-sm);">QR Code<br>(Simulasi)</span>
  </div>
  <p style="font-size:0.75rem; color:var(--gray-500); margin-top:6px;">
    Pembayaran bersifat simulasi — tidak ada transfer nyata.
  </p>
</div>

Setelah HTML di-render ke DOM (di dalam event listener form submit atau setelah innerHTML diset),
tambahkan event listener untuk menampilkan/menyembunyikan QR:

document.querySelectorAll('input[name="metode"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    var qrisContainer = document.getElementById('qris-container');
    if (qrisContainer) {
      qrisContainer.style.display = this.value === 'QRIS' ? 'block' : 'none';
    }
  });
});

Pastikan event listener ini dipasang SETELAH innerHTML di-set (yaitu di akhir fungsi renderRingkasan()).

---

JANGAN:
- Jangan install library QR code — gunakan URL API eksternal yang sudah tercantum
- Jangan ubah logika prosesBayar() yang sudah ada
- Jangan tambah animasi
- Jangan ubah tampilan radio button yang sudah ada
```

---

---

# P10 — FITUR: Masa Paket di Dashboard (Lanjutkan Belajar)

## Prompt P10

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/siswa/dashboard.html  (SELURUH file)
- auth.js  (fungsi sameUserId, formatTanggal)
- storage.js  (fungsi getAll)

---

### Tugas: Update pages/siswa/dashboard.html

Di dalam fungsi buatCardLanjut(kelas, persen), tambahkan informasi sisa masa paket.

### Logika:

1. Cari transaksi terakhir yang memiliki items mengandung kelas.id:

function ambilTransaksiKelas(kelasId) {
  var uid = String(user.id);
  var kid = String(kelasId);
  var semua = getAll('transaksi').filter(function(t) {
    return sameUserId(t.userId, uid) && (t.items || []).some(function(id) { return String(id) === kid; });
  });
  if (semua.length === 0) return null;
  // ambil transaksi terbaru
  return semua.sort(function(a, b) { return new Date(b.tanggal) - new Date(a.tanggal); })[0];
}

2. Di dalam buatCardLanjut(kelas, persen), panggil ambilTransaksiKelas(kelas.id).

3. Jika transaksi ditemukan dan memiliki field tanggalBerakhir, tampilkan info:
   - Hitung sisa hari: selisih tanggalBerakhir dengan hari ini
   - Jika sisa > 0: tampilkan "Berakhir: [formatTanggal(tanggalBerakhir)] ([sisaHari] hari lagi)"
   - Jika sisa <= 0: tampilkan "Paket telah berakhir" dengan warna var(--danger)
   - Jika tidak ada tanggalBerakhir (transaksi lama): tampilkan "Akses Seumur Hidup"

4. Tambahkan di dalam card HTML (setelah progress bar, sebelum tombol lanjutkan belajar):

Contoh HTML yang ditambahkan:
<p class="paket-info ${sisaHari <= 7 && sisaHari > 0 ? 'paket-mau-habis' : (sisaHari <= 0 && tanggalBerakhir ? 'paket-habis' : '')}">
  ${infoPaket}
</p>

5. Tambahkan class CSS baru di css/anggota1.css (section /* Dashboard */:

.paket-info { font-size: var(--font-size-xs, 0.8rem); color: var(--gray-500); margin: 6px 0; }
.paket-mau-habis { color: var(--warning); font-weight: 600; }
.paket-habis { color: var(--danger); font-weight: 600; }

---

JANGAN:
- Jangan ubah logika tampilkanKPI() atau tampilkanKelasTerbaru()
- Jangan ubah fungsi ambilKelasIds() yang sudah ada
- Jangan buat fungsi baru di file lain — semua logika di script dashboard.html
- Jangan blokir akses kelas jika paket habis — hanya tampilkan info saja
```

---

---

# P11 — FITUR: Jadwal Sesi Tatap Muka di Dashboard Siswa

## Prompt P11

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/siswa/dashboard.html  (SELURUH file — setelah update P10)
- storage.js  (getAll)
- auth.js  (sameUserId, formatTanggal)
- style.css  (card, btn, grid)
- css/anggota1.css

---

### Tugas: Update pages/siswa/dashboard.html

Tambahkan section baru "Jadwal Sesi Tatap Muka" TEPAT SETELAH section "Lanjutkan Belajar"
dan SEBELUM section "Kelas Terbaru di Katalog".

### Struktur HTML section (tambahkan di bagian <main> dashboard):

<section class="content-section">
  <h2>Jadwal Sesi Tatap Muka</h2>
  <div id="jadwal-tatap-muka"></div>
</section>

### Logika JS — tambahkan fungsi tampilkanJadwalTatapMuka():

function tampilkanJadwalTatapMuka() {
  var container = document.getElementById('jadwal-tatap-muka');
  var sekarang = new Date();
  
  // Ambil kelas yang dimiliki user
  var kelasIds = ambilKelasIds();
  
  // Ambil semua jadwal dari localStorage 'jadwal_tatap_muka'
  var semuaJadwal = getAll('jadwal_tatap_muka');
  
  // Filter: jadwal untuk kelas yang dimiliki user + belum lewat (atau maks 7 hari yang lalu)
  var jadwalRelevant = semuaJadwal.filter(function(j) {
    var tglJadwal = new Date(j.tanggal + 'T' + (j.waktu || '00:00'));
    var selisihHari = (tglJadwal - sekarang) / (1000 * 60 * 60 * 24);
    var kelasMatch = kelasIds.indexOf(String(j.kelasId)) !== -1;
    return kelasMatch && selisihHari > -1; // tampilkan sampai 1 hari setelah jadwal
  }).sort(function(a, b) {
    return new Date(a.tanggal + 'T' + (a.waktu || '00:00')) - new Date(b.tanggal + 'T' + (b.waktu || '00:00'));
  }).slice(0, 5); // maks 5 jadwal terdekat
  
  if (jadwalRelevant.length === 0) {
    container.innerHTML = '<p class="text-gray">Belum ada jadwal sesi tatap muka.</p>';
    return;
  }
  
  container.innerHTML = jadwalRelevant.map(function(j) {
    var tglFormatted = formatTanggal(j.tanggal);
    var kelas = getById('kelas', j.kelasId);
    var namaKelas = kelas ? kelas.judul : 'Kelas';
    return `
      <div class="jadwal-box">
        <div class="jadwal-tanggal">
          <span class="jadwal-tgl">${tglFormatted}</span>
          <span class="jadwal-waktu">${j.waktu || '–'}</span>
        </div>
        <div class="jadwal-info">
          <p class="jadwal-judul">${j.judul}</p>
          <p class="jadwal-kelas-nama">${namaKelas}</p>
        </div>
        <a href="${j.linkGmeet}" target="_blank" rel="noopener" class="btn btn-primary btn-sm jadwal-btn">
          Ikuti Sesi
        </a>
      </div>
    `;
  }).join('');
}

### CSS baru (tambahkan di css/anggota1.css section /* Jadwal Tatap Muka */):

.jadwal-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  padding: 14px 16px;
  margin-bottom: 10px;
}

.jadwal-tanggal {
  min-width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.jadwal-tgl {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--primary);
}

.jadwal-waktu {
  font-size: 0.8rem;
  color: var(--gray-500);
}

.jadwal-info {
  flex: 1;
}

.jadwal-judul {
  font-weight: 700;
  color: var(--gray-900);
  margin: 0 0 2px;
  font-size: var(--font-size-base);
}

.jadwal-kelas-nama {
  font-size: var(--font-size-sm);
  color: var(--gray-500);
  margin: 0;
}

.jadwal-btn {
  flex-shrink: 0;
  text-decoration: none;
}

@media (max-width: 768px) {
  .jadwal-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .jadwal-tanggal {
    flex-direction: row;
    gap: 8px;
    min-width: auto;
  }
  .jadwal-btn { align-self: flex-end; }
}

### Struktur data jadwal_tatap_muka di localStorage:

Setiap item punya properti:
{ id, instrukturId, kelasId, judul, tanggal (YYYY-MM-DD), waktu (HH:MM), linkGmeet }

### Panggil fungsi di bagian bawah script:

Tambahkan: tampilkanJadwalTatapMuka(); di baris setelah tampilkanLanjutBelajar();

---

JANGAN:
- Jangan ubah fungsi lain di dashboard
- Jangan buat file CSS baru — tambahkan di anggota1.css
- Jangan sembunyikan section ini jika jadwal kosong — tetap tampilkan dengan pesan "Belum ada jadwal"
- Jangan tambah fitur CRUD jadwal di halaman siswa — siswa hanya bisa lihat
```

---

---

# P12 — FITUR: Instruktur Input Jadwal Tatap Muka

## Prompt P12

```
Baca dulu file-file berikut sebelum menulis kode apapun:
- pages/instruktur/daftar-kelas.html  (referensi layout instruktur)
- pages/instruktur/buat-kuis.html  (referensi form tambah di instruktur)
- storage.js  (createItem, getAll, deleteItem, generateId)
- auth.js  (sameUserId)
- style.css, css/anggota3.css

---

### Tugas: Buat file baru pages/instruktur/jadwal-tatap-muka.html

**Tujuan:** Instruktur bisa menambahkan dan mengelola jadwal sesi tatap muka (GMeet).

**Guard (di <head>):**
<script src="../../data.js"></script>
<script src="../../storage.js"></script>
<script src="../../auth.js"></script>
<script src="../../boot-instruktur.js"></script>
<script src="../../components/components.js"></script>

**Layout:** layout-sidebar (sama seperti halaman instruktur lainnya)

Sidebar: renderSidebarInstruktur('jadwal-tatap-muka')

**Konten halaman:**

Bagian 1 — Form tambah jadwal:
Card dengan judul "Tambah Jadwal Sesi"
Form fields:
  - Pilih Kelas (select, id="sel-kelas") — di-populate dengan kelas milik instruktur ini
  - Judul Sesi (text, id="judul-sesi", placeholder: "Contoh: Review Bab 3 - Flexbox")
  - Tanggal (date, id="tgl-sesi")
  - Waktu (time, id="waktu-sesi")
  - Link GMeet (url, id="link-gmeet", placeholder: "https://meet.google.com/xxx-xxxx-xxx")
  - Tombol "Tambah Jadwal" (btn btn-primary)

Bagian 2 — Daftar jadwal yang sudah dibuat:
Card dengan judul "Jadwal Saya"
Tabel dengan kolom: Kelas | Judul Sesi | Tanggal & Waktu | Link | Aksi (Hapus)

**Logika JS:**

Inisialisasi:
- var user = window.__pageUser;
- Ambil kelas instruktur: getAll('kelas').filter(k => k.instrukturId === user.id)
- Populate select kelas

Fungsi tampilkanDaftarJadwal():
- Ambil semua jadwal: getAll('jadwal_tatap_muka').filter(j => sameUserId(j.instrukturId, user.id))
- Sort by tanggal ascending
- Render ke tabel

Fungsi tambahJadwal():
- Validasi semua field terisi
- Validasi link GMeet: harus diawali https://
- createItem('jadwal_tatap_muka', {
    id: generateId('jd'),
    instrukturId: user.id,
    kelasId: selKelas.value,
    judul: judulSesi.value.trim(),
    tanggal: tglSesi.value,
    waktu: waktuSesi.value,
    linkGmeet: linkGmeet.value.trim(),
    dibuatPada: new Date().toISOString()
  })
- showAlert sukses
- Reset form
- tampilkanDaftarJadwal()

Fungsi hapusJadwal(jadwalId):
- if (confirm('Hapus jadwal ini?'))
- deleteItem('jadwal_tatap_muka', jadwalId)
- tampilkanDaftarJadwal()

**Update sidebar instruktur:**

Di file components/sidebar-instruktur.html, tambahkan link baru:
<a href="jadwal-tatap-muka.html" class="sidebar-link" data-page="jadwal-tatap-muka.html">
  📅 Jadwal Tatap Muka
</a>

Tambahkan link ini setelah link "Tanya Jawab" yang sudah ada.

---

JANGAN:
- Jangan buat file CSS baru — gunakan class yang sudah ada di style.css dan anggota3.css
- Jangan tambah fitur edit jadwal — cukup tambah dan hapus
- Jangan filter jadwal berdasarkan tanggal — tampilkan semua jadwal instruktur ini
- Jangan tambah field lain di jadwal_tatap_muka selain yang disebutkan
```

---

---

## TIPS PENTING SAAT PAKAI CURSOR

### Cara menyalin prompt dengan benar:
1. Copy SEMUA teks dalam kotak ``` dari awal hingga akhir
2. Paste ke chat Cursor (buka dengan Ctrl+L / Cmd+L)
3. Pastikan kamu **sudah buka project folder** di Cursor terlebih dahulu

### Jika AI melakukan over-engineering (bikin hal yang tidak diminta):
Ketik follow-up: `Batalkan bagian [sebutkan bagian]. Ikuti instruksi dengan tepat — jangan tambah fitur yang tidak disebutkan.`

### Jika AI halusinasi nama properti/fungsi:
Ketik: `Baca ulang file [nama file] dan gunakan nama fungsi/properti yang benar-benar ada di sana.`

### Jika Cursor bingung karena perubahan P sebelumnya belum dilakukan:
Pastikan urutan prompt diikuti. Jangan lewati P0 dan P1.

### Setelah semua prompt selesai, bersihkan localStorage:
Buka browser → DevTools → Application → localStorage → Clear All
Ini penting agar seed data yang baru (dengan field namaOrangTua dll) aktif.
