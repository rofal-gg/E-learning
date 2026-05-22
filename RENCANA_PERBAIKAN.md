# 📋 RENCANA PERBAIKAN — Platform E-Learning
# Berdasarkan audit kode aktual + diselaraskan dengan SKILL.md

---

## 🔍 HASIL AUDIT — Kondisi Project Saat Ini

### Sudah Bagus ✅
- Semua 50 halaman ada dan berfungsi penuh
- CRUD via localStorage berjalan
- auth.js, storage.js, data.js, boot-*.js sudah solid dan final
- Struktur folder rapi

### Yang Perlu Diperbaiki ❌

**Masalah 1 — JS "terlalu AI":**
Semua halaman pakai IIFE `(function(){ ... })()` yang tidak natural untuk semester 2.
HTML dibangun dengan string concat `+` panjang yang susah dibaca.
Beberapa halaman mendefinisikan ulang `formatRupiah()` padahal sudah ada di auth.js.

**Masalah 2 — CSS 1902 baris dalam 1 file:**
Perlu dipecah sesuai pembagian 5 anggota.
`style.css` tetap ada untuk komponen bersama, ditambah `css/anggota1-5.css`.

---

## 📐 ATURAN PERBAIKAN (WAJIB DIBACA SEBELUM MULAI)

### Yang BOLEH diubah
- Inline `<script>` di setiap file HTML — sederhanakan JS-nya
- `<link rel="stylesheet">` di setiap file HTML — tambah link anggotaN.css
- `style.css` — pindahkan CSS spesifik ke file anggota yang tepat

### Yang DILARANG diubah
- `data.js`, `storage.js`, `auth.js`, `boot-siswa.js`, `boot-instruktur.js`, `boot-admin.js`
- Struktur HTML (tag, class name, id) — jangan diubah, hanya JS dan link CSS
- Fungsionalitas halaman — hasil akhir harus sama persis, hanya kode yang disederhanakan

### Standar JS setelah perbaikan
- Tidak ada IIFE
- Pakai template literal (backtick) untuk HTML string
- Fungsi dibagi: ambil data terpisah dari render UI
- Tidak ada `formatRupiah()` lokal (sudah di auth.js)
- Pakai `var` konsisten
- Komentar bahasa Indonesia singkat
- `window.__pageUser` untuk halaman yang pakai boot-*.js (BUKAN requireAuth)

---

## 👤 ANGGOTA 1 — Modul Publik, Auth & Awal Siswa

**File:** index.html, auth/login.html, auth/register-siswa.html, auth/register-instruktur.html,
auth/lupa-password.html, auth/reset-password.html, auth/syarat-ketentuan.html,
auth/faq.html, siswa/dashboard.html, siswa/katalog.html

**CSS target:** `css/anggota1.css`

### 📋 PROMPT UNTUK CURSOR AGENT

```
Baca SKILL.md di root project ini terlebih dahulu. Pahami semua aturan, terutama:
- Seksi 2 (Aturan Eksekusi), Seksi 8 (auth.js), Seksi 9 (Standar JS), Seksi 10 (Anti-Pattern)

Kita sedang memperbaiki project e-learning yang sudah jalan.
JANGAN ubah fungsionalitas — hanya sederhanakan kode dan pecah CSS.

=== LANGKAH 1: Buat file css/anggota1.css ===

Baca style.css, lalu pindahkan CSS yang HANYA dipakai halaman Anggota 1 ke css/anggota1.css.

CSS yang dipindah ke anggota1.css (hapus dari style.css):
- Navbar publik: .navbar, .navbar-inner, .navbar-logo, .navbar-menu, .navbar-actions, .navbar-user
- Hero: .hero, .hero-actions, .hero-promo
- Landing page: .grid-kategori, .card-kategori, .card-testimoni
- Layout auth (kartu tengah): .auth-wrap, .auth-card, .auth-logo, .auth-subtitle, .public-layout
- FAQ: .accordion-item, .accordion-trigger, .accordion-body
- Footer: .footer, .footer-brand, .footer-links, .footer-copy
- Katalog filter: .filter-bar, .filter-search, .catalog-main, .page-header-flex, .page-meta
- Dashboard siswa spesifik: .card-lanjut, .progress-text
- Apapun lain yang hanya muncul di 10 file bagian Anggota 1

CSS yang TETAP di style.css (jangan dipindah):
.btn, .card, .card-kelas, .badge, .alert, .form-input, .form-group, .form-label,
.table, .container, .grid-2, .grid-3, .grid-4, .section, .section-alt,
.layout-sidebar, .sidebar, .sidebar-link, .sidebar-brand, .main-content,
.kpi-card, .kpi-value, .kpi-label, .empty-state, .content-section, .page-header,
.progress-bar, .progress-fill, .text-gray, .text-center, .stars,
@media responsive rules

=== LANGKAH 2: Tambah link CSS di 10 file HTML Anggota 1 ===

Di setiap file, tambahkan SETELAH baris link style.css:
- index.html → <link rel="stylesheet" href="css/anggota1.css">
- pages/auth/*.html → <link rel="stylesheet" href="../../css/anggota1.css">
- pages/siswa/dashboard.html → <link rel="stylesheet" href="../../css/anggota1.css">
- pages/siswa/katalog.html → <link rel="stylesheet" href="../../css/anggota1.css">

=== LANGKAH 3: Sederhanakan JS di 10 file HTML ===

Baca setiap file satu per satu. Untuk bagian <script> di bawah body, terapkan:

ATURAN TRANSFORMASI:
a) Hapus IIFE — ubah (function(){ var user = window.__pageUser; ... })()
   menjadi: var user = window.__pageUser; (lalu fungsi-fungsi biasa)
b) Ubah semua HTML string concat (+) menjadi template literal (backtick)
c) Pisahkan logika: satu fungsi untuk ambil/proses data, satu fungsi untuk render HTML
d) Hapus definisi formatRupiah() lokal jika ada — sudah ada di auth.js
e) Pakai var konsisten, bukan const/let
f) Tambah komentar bahasa Indonesia singkat di atas setiap fungsi

CONTOH TRANSFORMASI untuk dashboard.html:

SEBELUM:
<script>
(function () {
  var user = window.__pageUser;
  if (!user) return;
  // ... semua kode dalam IIFE
  function getUserTransaksi() {
    return getAll('transaksi').filter(function (t) { return sameUserId(t.userId, user.id); });
  }
  function getKelasIdsDibeli() {
    var ids = [];
    getUserTransaksi().forEach(function (t) {
      (t.items || []).forEach(function (kelasId) {
        if (ids.indexOf(kelasId) === -1) ids.push(kelasId);
      });
    });
    return ids;
  }
  // ... dst panjang nested
})();
</script>

SESUDAH:
<script>
var user = window.__pageUser;

setActiveSidebar('dashboard');
document.getElementById('greeting').textContent = 'Halo, ' + user.nama + '!';

// ambil semua id kelas yang sudah dibeli user ini
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

// isi angka KPI cards
function tampilkanKPI() {
  var ids = ambilKelasIds();
  var selesai = getAll('progres').filter(function(p) {
    return sameUserId(p.userId, user.id) && p.persen >= 100;
  });
  var diskusi = getAll('diskusi').filter(function(d) {
    return sameUserId(d.userId, user.id);
  });
  document.getElementById('kpi-kelas-dibeli').textContent = ids.length;
  document.getElementById('kpi-kelas-selesai').textContent = selesai.length;
  document.getElementById('kpi-diskusi').textContent = diskusi.length;
}

// buat HTML satu card kelas lanjut belajar
function buatCardLanjut(kelas, persen) {
  return `
    <div class="card-lanjut">
      <h3>${kelas.judul}</h3>
      <p class="text-gray">${kelas.instrukturNama}</p>
      <p class="progress-text">Progres: ${persen}%</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${persen}%"></div></div>
      <a href="ruang-belajar.html?id=${kelas.id}" class="btn btn-primary btn-sm">Lanjutkan</a>
    </div>
  `;
}

// tampilkan section lanjutkan belajar
function tampilkanLanjutBelajar() {
  var container = document.getElementById('lanjut-belajar');
  var ids = ambilKelasIds();
  if (ids.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Kamu belum mengikuti kelas. Yuk mulai belajar!</p>
        <a href="katalog.html" class="btn btn-primary">Jelajahi Katalog</a>
      </div>
    `;
    return;
  }
  var belumSelesai = ids.map(function(id) {
    var kelas = getById('kelas', id);
    var progres = getAll('progres').find(function(p) {
      return sameUserId(p.userId, user.id) && String(p.kelasId) === String(id);
    }) || { persen: 0 };
    return { kelas: kelas, persen: Math.round(progres.persen || 0) };
  }).filter(function(item) { return item.kelas && item.persen < 100; }).slice(0, 3);

  if (belumSelesai.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>Semua kelas selesai! Kerja bagus 🎉</p></div>';
    return;
  }
  container.innerHTML = '<div class="grid-3">' +
    belumSelesai.map(function(item) { return buatCardLanjut(item.kelas, item.persen); }).join('') +
  '</div>';
}

// tampilkan 3 kelas terbaru dari katalog
function tampilkanKelasTerbaru() {
  var container = document.getElementById('kelas-terbaru');
  var list = getAll('kelas').filter(function(k) { return k.status === 'published'; }).slice(-3).reverse();
  if (list.length === 0) {
    container.innerHTML = '<p class="text-gray text-center">Belum ada kelas.</p>';
    return;
  }
  container.innerHTML = list.map(function(k) {
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
  }).join('');
}

tampilkanKPI();
tampilkanLanjutBelajar();
tampilkanKelasTerbaru();
</script>

Terapkan pola transformasi yang sama ke semua 10 file bagian Anggota 1.
Kerjakan satu file dulu, tunjukkan hasilnya, tunggu konfirmasi sebelum lanjut ke file berikutnya.
```

---

## 👤 ANGGOTA 2 — Core Modul Siswa (Ruang Belajar)

**File:** siswa/detail-kelas.html, cart.html, checkout.html, invoice.html,
ruang-belajar.html, kuis.html, hasil-kuis.html, diskusi.html, sertifikat.html, profil.html

**CSS target:** `css/anggota2.css`

### 📋 PROMPT UNTUK CURSOR AGENT

```
Baca SKILL.md di root project ini terlebih dahulu. Pahami semua aturan di Seksi 2, 8, 9, 10.

Kita memperbaiki 10 file HTML bagian Anggota 2. JANGAN ubah fungsionalitas.

=== LANGKAH 1: Buat css/anggota2.css ===

Pindahkan dari style.css ke css/anggota2.css, CSS yang hanya dipakai halaman Anggota 2:
- Detail kelas: .kelas-hero, .kelas-detail-layout, .silabus-list, .silabus-item, .panel-harga
- Cart: .cart-layout, .cart-table, .cart-summary, .summary-row
- Checkout: .checkout-layout, .checkout-order-list, .checkout-order-item,
  .checkout-section-title, .payment-option, .payment-note, .checkout-payment-card,
  .summary-discount, .checkout-back-link
- Invoice: .invoice-wrap, .invoice-header, .invoice-meta, .invoice-status,
  .invoice-items, .invoice-total
- Ruang belajar: .ruang-belajar-layout, .video-area, .bab-list, .bab-item, .bab-item.selesai
- Kuis: .kuis-wrap, .soal-card, .pilihan-list, .pilihan-item, .kuis-nav
- Hasil kuis: .hasil-wrap, .skor-besar, .pembahasan-list, .pembahasan-item
- Diskusi: .diskusi-list, .diskusi-item, .diskusi-balasan, .form-diskusi
- Sertifikat: .sertifikat-wrap, .sertifikat-box, .sertifikat-nama, .sertifikat-kelas
- Profil: .profil-layout, .profil-foto-wrap

=== LANGKAH 2: Tambah link CSS di 10 file ===

Di setiap pages/siswa/[file].html bagian Anggota 2, tambahkan setelah link style.css:
<link rel="stylesheet" href="../../css/anggota2.css">

=== LANGKAH 3: Sederhanakan JS ===

Terapkan aturan standar SKILL.md + pisahkan logika khusus file ini:

CHECKOUT (checkout.html):
- ambilItemCart() → return array items dari getCartItemsForUser
- hitungTotal(items) → return { subtotal, diskon, total }
- renderRingkasan(items, total) → isi HTML area ringkasan
- prosesBayar(items, total) → buat transaksi + progres + notif + redirect

RUANG BELAJAR (ruang-belajar.html):
- ambilDataKelas() → return { kelas, progres } berdasarkan query param id
- renderDaftarBab(silabus, babSelesai) → render panel kanan (list bab)
- gantiBab(babKe) → update iframe src + highlight bab aktif
- tandaiSelesai(babKe) → update array babSelesai + hitung persen + updateItem progres

KUIS (kuis.html):
- var jawabanUser = [] → simpan jawaban tiap soal
- ambilSoal() → return soal dari getAll('kuis')
- tampilkanSoal(nomor) → render soal ke layar
- simpanJawaban(nomor, pilihan) → jawabanUser[nomor] = pilihan
- selesaiKuis() → hitung skor, simpan ke sessionStorage, redirect ke hasil-kuis

Terapkan pola yang sama ke semua 10 file.
Kerjakan satu file per giliran, tampilkan hasilnya, tunggu konfirmasi sebelum lanjut.
```

---

## 👤 ANGGOTA 3 — Ekstra Siswa & Core Kreator Kelas

**File:** siswa/riwayat-transaksi.html, wishlist.html, ulasan.html, daftar-instruktur.html,
notifikasi.html, instruktur/dashboard.html, daftar-kelas.html, buat-kelas.html,
kurikulum.html, unggah-materi.html

**CSS target:** `css/anggota3.css`

### 📋 PROMPT UNTUK CURSOR AGENT

```
Baca SKILL.md di root project ini. Pahami Seksi 2, 8, 9, 10.

Kita memperbaiki 10 file HTML bagian Anggota 3. JANGAN ubah fungsionalitas.

=== LANGKAH 1: Buat css/anggota3.css ===

Pindahkan dari style.css ke css/anggota3.css:
- Ulasan: .ulasan-form, .star-rating, .star-rating input, .star-rating label
- Daftar instruktur: .instruktur-grid, .card-instruktur, .instruktur-keahlian
- Notifikasi: .notif-list, .notif-item, .notif-item.unread, .notif-pesan, .notif-tanggal
- Form buat kelas: .form-buat-kelas, .form-section-title
- Kurikulum: .kurikulum-list, .kurikulum-item, .kurikulum-item-actions
- Unggah materi: .materi-panel, .bab-edit-form

=== LANGKAH 2: Tambah link CSS ===

Di setiap file bagian Anggota 3, tambahkan setelah link style.css:
<link rel="stylesheet" href="../../css/anggota3.css">

=== LANGKAH 3: Sederhanakan JS ===

Terapkan aturan standar + pisahkan logika khusus:

KURIKULUM (kurikulum.html):
- ambilKelas() → return kelas berdasarkan query param id
- renderDaftarBab(silabus) → render list bab yang sudah ada
- tambahBab() → ambil dari form, push ke silabus, updateItem kelas, re-render
- hapusBab(babKe) → filter silabus, updateItem kelas, re-render

BUAT KELAS (buat-kelas.html):
- var mode = getQueryParam('id') ? 'edit' : 'baru'
- prefillForm(kelas) → isi form jika mode edit
- ambilDataForm() → return object dari semua input form
- simpanKelas() → create atau update berdasarkan mode, redirect

DAFTAR KELAS INSTRUKTUR (daftar-kelas.html):
- ambilKelasSaya() → getAll('kelas').filter instrukturId === user.id
- renderTabelKelas(list) → render tabel dengan tombol aksi
- hapusKelas(id) → confirm + deleteItem + re-render

Kerjakan satu file per giliran, tunggu konfirmasi sebelum lanjut.
```

---

## 👤 ANGGOTA 4 — Ekstra Instruktur (Manajemen & Keuangan)

**File:** instruktur/buat-kuis.html, daftar-siswa.html, tanya-jawab.html,
diskon-kupon.html, profil-publik.html, laporan-pendapatan.html,
tarik-saldo.html, riwayat-penarikan.html, ulasan-masuk.html, notifikasi.html

**CSS target:** `css/anggota4.css`

### 📋 PROMPT UNTUK CURSOR AGENT

```
Baca SKILL.md di root project ini. Pahami Seksi 2, 8, 9, 10.

Kita memperbaiki 10 file HTML bagian Anggota 4. JANGAN ubah fungsionalitas.

=== LANGKAH 1: Buat css/anggota4.css ===

Pindahkan dari style.css ke css/anggota4.css:
- Buat kuis: .soal-builder, .soal-builder-item, .pilihan-input-row, .kunci-jawaban-select
- Tanya jawab: .tanya-jawab-list, .tanya-item, .balasan-list, .form-balas
- Diskon kupon: .kupon-table, .kupon-form, .kupon-kode-display
- Laporan pendapatan: .pendapatan-table, .pendapatan-summary, .catatan-platform
- Tarik saldo: .saldo-display, .form-tarik-saldo, .saldo-info
- Riwayat penarikan: .penarikan-table
- Ulasan masuk: .ulasan-masuk-item, .filter-kelas-ulasan

=== LANGKAH 2: Tambah link CSS ===

<link rel="stylesheet" href="../../css/anggota4.css">

=== LANGKAH 3: Sederhanakan JS ===

BUAT KUIS (buat-kuis.html):
- var daftarSoal = [] → array soal di memori
- ambilKuisAwal() → getAll('kuis') lalu prefill daftarSoal jika sudah ada
- renderDaftarSoal() → render list soal dari daftarSoal
- tambahSoal() → ambil dari form, push ke daftarSoal, re-render
- hapusSoal(index) → splice dari daftarSoal, re-render
- simpanKuis() → createItem atau updateItem ke localStorage

LAPORAN PENDAPATAN (laporan-pendapatan.html):
- ambilTransaksiInstruktur() → filter transaksi yang mengandung kelas milik instruktur
- hitungPendapatan(transaksi) → return { totalPendapatan, perKelas[] }
- renderTabelPendapatan(data) → render tabel + KPI total

TARIK SALDO (tarik-saldo.html):
- tampilkanSaldo() → render saldo user.saldo
- validasiForm() → cek nominal > 50000 dan <= saldo
- prosesTarik() → createItem penarikan + updateItem saldo user + showAlert

Kerjakan satu file per giliran, tunggu konfirmasi sebelum lanjut.
```

---

## 👤 ANGGOTA 5 — Full Modul Admin

**File:** admin/dashboard.html, manajemen-siswa.html, manajemen-instruktur.html,
persetujuan-kelas.html, verifikasi-pembayaran.html, verifikasi-penarikan.html,
manajemen-kategori.html, moderasi-ulasan.html, pengaturan-banner.html, manajemen-admin.html

**CSS target:** `css/anggota5.css`

### 📋 PROMPT UNTUK CURSOR AGENT

```
Baca SKILL.md di root project ini. Pahami Seksi 2, 8, 9, 10.

Kita memperbaiki 10 file HTML bagian Anggota 5. JANGAN ubah fungsionalitas.

=== LANGKAH 1: Buat css/anggota5.css ===

Pindahkan dari style.css ke css/anggota5.css:
- Tabel manajemen user: .action-cell, .btn-blokir, .btn-aktifkan
- Persetujuan kelas: .tab-filter, .tab-btn, .tab-btn.active, .alasan-tolak-input
- Verifikasi: .verif-table, .status-sukses, .status-pending
- Kategori: .kategori-inline-edit, .kategori-form
- Banner: .banner-preview, .banner-form, .banner-preview-box
- Admin: .admin-list, .self-badge

=== LANGKAH 2: Tambah link CSS ===

<link rel="stylesheet" href="../../css/anggota5.css">

=== LANGKAH 3: Sederhanakan JS ===

PERSETUJUAN KELAS (persetujuan-kelas.html):
- var filterAktif = 'semua'
- ambilKelas(status) → filter kelas berdasarkan status
- renderTabelKelas(list) → render tabel
- setujuiKelas(id) → updateItem status 'published' + createNotifikasi ke instruktur
- tolakKelas(id) → prompt alasan + updateItem status 'rejected' + createNotifikasi

MANAJEMEN SISWA (manajemen-siswa.html):
- ambilSiswa(query) → getAll('users').filter role='siswa' + search
- renderTabelSiswa(list) → render tabel dengan tombol blokir/aktifkan/hapus
- blokirUser(id) → updateItem status 'blokir' + re-render
- aktifkanUser(id) → updateItem status 'aktif' + re-render
- hapusUser(id) → confirm + deleteItem + re-render

VERIFIKASI PENARIKAN (verifikasi-penarikan.html):
- ambilPenarikan(status) → filter penarikan
- renderTabelPenarikan(list) → render tabel
- setujuiPenarikan(id) → updateItem status 'approved' + createNotifikasi
- tolakPenarikan(id) → prompt alasan + updateItem status 'rejected'
  + kembalikan saldo: updateItem('users', instrukturId, { saldo: saldo + nominal })
  + createNotifikasi

PENGATURAN BANNER (pengaturan-banner.html):
- ambilBanner() → JSON.parse(localStorage.getItem('banner')) || {}
- tampilkanPreview(banner) → update elemen preview secara real-time
- simpanBanner() → ambil dari form + save('banner', {...})

Kerjakan satu file per giliran, tunggu konfirmasi sebelum lanjut.
```

---

## 🎯 PROMPT KOORDINATOR — Setelah Semua Anggota Selesai

```
Baca SKILL.md. Semua anggota sudah selesai. Lakukan audit final:

AUDIT 1 — style.css bersih
Pastikan style.css hanya berisi komponen bersama sesuai Seksi 5 SKILL.md.
Hapus sisa CSS yang seharusnya sudah dipindah ke file anggota.

AUDIT 2 — Semua halaman punya 2 link CSS
Cek setiap 50 file HTML. Setiap file wajib punya:
<link rel="stylesheet" href="[path]/style.css">
<link rel="stylesheet" href="[path]/css/anggotaN.css">  (N sesuai pembagian)

AUDIT 3 — Tidak ada IIFE tersisa
Cari pola (function( di semua file HTML. Jika masih ada, refactor.

AUDIT 4 — Tidak ada formatRupiah lokal
Cari function formatRupiah di semua file HTML. Jika ada, hapus.

AUDIT 5 — window.__pageUser dipakai dengan benar
Pastikan halaman yang pakai boot-*.js mengakses window.__pageUser,
bukan memanggil requireAuth() lagi.

AUDIT 6 — Test alur utama
Buka browser, test:
1. Login budi@email.com → dashboard siswa → katalog → beli kelas → checkout
2. Login sari@email.com → dashboard instruktur → buat kelas → kurikulum
3. Login admin@email.com → dashboard admin → persetujuan kelas → setujui
Pastikan tidak ada error JS di console.
```

---

## 📁 Struktur File Setelah Selesai

```
elearning/
├── index.html
├── style.css              ← komponen bersama saja (~600-800 baris)
├── data.js                ← tidak berubah
├── storage.js             ← tidak berubah
├── auth.js                ← tidak berubah
├── boot-siswa.js          ← tidak berubah
├── boot-instruktur.js     ← tidak berubah
├── boot-admin.js          ← tidak berubah
├── css/                   ← BARU
│   ├── anggota1.css       ← CSS khusus halaman Anggota 1
│   ├── anggota2.css       ← CSS khusus halaman Anggota 2
│   ├── anggota3.css       ← CSS khusus halaman Anggota 3
│   ├── anggota4.css       ← CSS khusus halaman Anggota 4
│   └── anggota5.css       ← CSS khusus halaman Anggota 5
├── assets/
└── pages/
    ├── auth/   (7 file)
    ├── siswa/  (17 file)
    ├── instruktur/ (15 file)
    └── admin/  (10 file)
```