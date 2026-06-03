# 🚀 MASTER PROMPT — Platform E-Learning (Cursor Agent)
# Cara pakai: buka Cursor → tekan Ctrl+I → pilih mode Agent → tempel prompt di bawah ini satu per satu secara berurutan

---

## ⚠️ ATURAN SEBELUM MULAI

Sebelum menjalankan prompt apapun di bawah ini, pastikan:
1. File `SKILL.md` sudah ada di root folder project
2. Jalankan prompt dalam urutan FASE 0 → FASE 1 → FASE 2 → dst
3. Tunggu Cursor selesai sepenuhnya sebelum lanjut ke prompt berikutnya
4. Jika ada error, tempel error-nya ke Cursor dan minta diperbaiki dulu sebelum lanjut

---

## FASE 0 — INISIALISASI PROJECT (Jalankan SEKALI di awal)

```
Baca SKILL.md di root folder ini terlebih dahulu. Pahami semua aturan, struktur folder, design system, dan struktur data di dalamnya.

Setelah membaca, lakukan hal berikut:

1. Buat seluruh struktur folder project sesuai Seksi 3 di SKILL.md:
   - Buat folder: assets/images, assets/icons, components, pages/auth, pages/siswa, pages/instruktur, pages/admin

2. Buat file placeholder kosong untuk semua 50 halaman sesuai Seksi 4 di SKILL.md. Setiap file cukup berisi template HTML dasar dari Seksi 9 (tanpa logika dulu):
   - index.html (di root)
   - pages/auth/ → 7 file html
   - pages/siswa/ → 17 file html
   - pages/instruktur/ → 15 file html
   - pages/admin/ → 10 file html

3. Buat file utama berikut dengan isi lengkap sesuai SKILL.md:
   - style.css → semua CSS variable dan semua class komponen dari Seksi 5
   - data.js → semua SEED_* dari Seksi 6
   - storage.js → semua helper CRUD dari Seksi 7
   - auth.js → semua fungsi auth dari Seksi 8

4. Buat file assets/images/placeholder.jpg (kosong/dummy saja) agar tag <img> tidak error.

Jangan menulis logika halaman apapun dulu. Fokus hanya pada struktur folder dan 4 file utama itu.
```

---

## FASE 1 — MODUL PUBLIK & AUTENTIKASI

### Prompt 1.1 — Landing Page

```
Baca SKILL.md. Kerjakan halaman index.html (Landing Page) dengan ketentuan:

KOMPONEN yang harus ada:
1. Navbar publik: logo "EduKita", menu "Katalog", "Instruktur", "FAQ", tombol "Masuk" dan "Daftar"
2. Hero section: judul besar "Belajar Kapan Saja, Di Mana Saja", subjudul, tombol "Mulai Belajar" (link ke pages/auth/login.html) dan "Lihat Kelas" (link ke pages/siswa/katalog.html)
3. Grid kategori: ambil dari SEED_CATEGORIES di data.js, render 5 kartu kategori dengan ikon emoji
4. Grid kelas unggulan: ambil 3 kelas pertama dari SEED_KELAS yang status = "published", render menggunakan card-kelas
5. Seksi testimoni: 3 testimoni hardcode (nama, bintang, komentar)
6. Footer: nama platform, copyright 2025, link ke syarat-ketentuan dan faq

ATURAN:
- Gunakan CSS variable dari style.css, jangan hardcode warna
- Semua data kelas diambil dari getAll('kelas') via storage.js, bukan hardcode di HTML
- Navbar dan footer boleh langsung di-copy paste ke HTML, tidak perlu komponen terpisah dulu
- Urutan script: data.js → storage.js → auth.js → inline script
- Panggil initStorage() di awal script
```

### Prompt 1.2 — Login

```
Baca SKILL.md. Kerjakan halaman pages/auth/login.html dengan ketentuan:

KOMPONEN yang harus ada:
1. Layout tengah (kartu login di tengah halaman, tanpa navbar sidebar)
2. Logo + judul "Masuk ke Akun Kamu"
3. Form: input email, input password (toggle show/hide), tombol "Masuk"
4. Link "Belum punya akun? Daftar sebagai Siswa" dan "Daftar sebagai Instruktur"
5. Link "Lupa Password?"
6. Area alert untuk pesan error (gunakan showAlert)

LOGIKA JS:
- Ambil data dari form, panggil fungsi login(email, password) dari auth.js
- Jika sukses: redirect berdasarkan user.role:
  - 'siswa' → pages/siswa/dashboard.html
  - 'instruktur' → pages/instruktur/dashboard.html
  - 'admin' → pages/admin/dashboard.html
- Jika gagal: tampilkan pesan error di area alert
- Jika sudah login (getCurrentUser() tidak null): langsung redirect sesuai role
```

### Prompt 1.3 — Registrasi Siswa & Instruktur

```
Baca SKILL.md. Kerjakan 2 halaman sekaligus:

FILE 1: pages/auth/register-siswa.html
- Form: nama lengkap, email, password, konfirmasi password
- Validasi: semua field wajib diisi, password minimal 6 karakter, konfirmasi password harus sama
- Logika: panggil register({ nama, email, password, role: 'siswa' }) dari auth.js
- Jika sukses: simpan session lalu redirect ke pages/siswa/dashboard.html
- Jika gagal: tampilkan pesan error

FILE 2: pages/auth/register-instruktur.html
- Form: nama lengkap, email, password, konfirmasi password, keahlian (input teks)
- Validasi sama seperti register siswa
- Logika: panggil register({ nama, email, password, role: 'instruktur', keahlian, saldo: 0 })
- Jika sukses: redirect ke pages/instruktur/dashboard.html

Kedua halaman: layout kartu tengah seperti login.html, tanpa navbar sidebar.
```

### Prompt 1.4 — Lupa Password, Reset Password, Syarat & Ketentuan, FAQ

```
Baca SKILL.md. Kerjakan 4 halaman berikut:

FILE 1: pages/auth/lupa-password.html
- Form input email
- Simulasi: jika email ditemukan di getAll('users'), tampilkan alert success "Link reset telah dikirim ke email kamu (simulasi)"
- Jika email tidak ditemukan: alert error "Email tidak terdaftar"
- Layout kartu tengah

FILE 2: pages/auth/reset-password.html
- Form: input password baru, konfirmasi password baru
- Simulasi: ambil email dari query param ?email=xxx, update password user di localStorage via updateItem
- Alert success "Password berhasil direset", lalu redirect ke login setelah 2 detik

FILE 3: pages/auth/syarat-ketentuan.html
- Navbar publik (sama seperti index.html)
- Konten teks panjang: judul, 5 pasal (Ketentuan Penggunaan, Hak & Kewajiban, Pembayaran, Privasi, Penutup) dengan paragraf masing-masing 3-4 kalimat dummy
- Footer

FILE 4: pages/auth/faq.html
- Navbar publik
- Judul "Pertanyaan yang Sering Ditanyakan"
- 8 item accordion (klik judul → tampilkan/sembunyikan jawaban via JS toggle class)
- Pertanyaan contoh: Bagaimana cara daftar? Bagaimana cara beli kelas? dll
- Footer
```

---

## FASE 2 — MODUL SISWA (Bagian 1)

### Prompt 2.1 — Dashboard Siswa

```
Baca SKILL.md. Kerjakan pages/siswa/dashboard.html dengan ketentuan:

GUARD: panggil requireAuth(['siswa']) di awal script. Jika tidak login atau bukan siswa, redirect ke login.

LAYOUT: gunakan layout-sidebar (sidebar kiri + main-content kanan)

SIDEBAR: menu navigasi siswa dengan link ke semua halaman modul siswa:
Dashboard, Katalog Kelas, Kelas Saya (cart), Wishlist, Riwayat Transaksi, Sertifikat, Profil, Notifikasi, Logout

KOMPONEN MAIN CONTENT:
1. Header: "Halo, [nama user]! 👋"
2. KPI cards (4 kartu dalam grid-4):
   - Total kelas dibeli: hitung dari getAll('transaksi') where userId = currentUser.id
   - Kelas selesai: hitung progres 100%
   - Total diskusi: hitung dari getAll('diskusi') where userId = currentUser.id
   - Poin (dummy: 120 poin)
3. Seksi "Lanjutkan Belajar": tampilkan maks 3 kelas yang sudah dibeli tapi belum selesai (dari getAll('transaksi') + getById('kelas', id))
   - Jika belum beli kelas apapun: tampilkan pesan "Kamu belum mengikuti kelas. Yuk mulai belajar!" dengan tombol ke katalog
4. Seksi "Kelas Terbaru di Katalog": tampilkan 3 kelas terbaru dari getAll('kelas') status published

DATA: transaksi milik user diambil dari getAll('transaksi').filter(t => t.userId === user.id)
```

### Prompt 2.2 — Katalog Kelas

```
Baca SKILL.md. Kerjakan pages/siswa/katalog.html dengan ketentuan:

LAYOUT: layout dengan navbar siswa (bukan sidebar) + container

KOMPONEN:
1. Header: "Katalog Kelas" + jumlah total kelas
2. Bar filter:
   - Dropdown kategori (render dari SEED_CATEGORIES)
   - Dropdown level: Semua, Pemula, Menengah, Mahir
   - Dropdown harga: Semua, Gratis, Berbayar
   - Input search teks (filter by judul kelas)
3. Grid kelas (grid-3): render semua kelas status "published" menggunakan card-kelas
4. Jika tidak ada hasil filter: tampilkan pesan "Tidak ada kelas yang cocok"

LOGIKA FILTER (semua filter berjalan real-time saat user mengubah dropdown/input):
- Filter berdasarkan kategori, level, harga, dan search teks judul
- Semua filter bisa dikombinasikan
- Gunakan Array.filter() berantai

Tidak perlu guard login — katalog bisa diakses siapapun.
```

### Prompt 2.3 — Detail Kelas & Cart

```
Baca SKILL.md. Kerjakan 2 halaman:

FILE 1: pages/siswa/detail-kelas.html
- Ambil id kelas dari query param: getQueryParam('id')
- Tampilkan: gambar kelas (besar), judul, badge level, badge kategori, rating bintang, total siswa, deskripsi, nama instruktur
- Accordion silabus: list semua bab dari kelas.silabus (klik bab → tampilkan durasi)
- Panel harga kanan: harga (formatRupiah), tombol "Tambah ke Keranjang", tombol "Simpan ke Wishlist"
- Logika "Tambah ke Keranjang":
  - Cek apakah sudah di cart: getAll('cart').find(c => c.kelasId === id && c.userId === user.id)
  - Jika sudah: alert "Kelas sudah ada di keranjang"
  - Jika belum: createItem('cart', { id: generateId('c'), kelasId, userId, tanggal: Date.now() })
- Logika "Simpan ke Wishlist": sama polanya dengan cart, key 'wishlist'
- Jika user sudah BELI kelas ini (cek transaksi): ganti tombol jadi "Lanjutkan Belajar" → link ke ruang-belajar.html?id=xxx

FILE 2: pages/siswa/cart.html
- Guard: requireAuth(['siswa'])
- Ambil semua cart milik user, join dengan data kelas
- Tampilkan tabel: gambar kecil, judul kelas, harga, tombol hapus
- Summary kanan: total harga, input kode kupon, tombol "Lanjut ke Checkout"
- Logika hapus: deleteItem('cart', cartId) lalu re-render
- Logika kupon: cari di getAll('kupon') where kode === inputKupon, jika valid tampilkan diskon
```

### Prompt 2.4 — Checkout & Invoice

```
Baca SKILL.md. Kerjakan 2 halaman:

FILE 1: pages/siswa/checkout.html
- Guard: requireAuth(['siswa'])
- Ambil data cart user (sama seperti cart.html)
- Tampilkan ringkasan pesanan: list kelas + harga masing-masing
- Form pilih metode pembayaran (radio button): Transfer Bank, QRIS, Dompet Digital (simulasi)
- Total harga
- Tombol "Bayar Sekarang"
- Logika tombol Bayar:
  1. Buat transaksi baru: createItem('transaksi', { id: generateId('t'), userId, items: [kelasId,...], total, metode, status: 'sukses', tanggal: new Date().toISOString() })
  2. Untuk setiap kelas yang dibeli, buat progres awal: createItem('progres', { id: generateId('p'), userId, kelasId, babSelesai: [], persen: 0 })
  3. Hapus semua item cart user
  4. Tambah notifikasi: createItem('notifikasi', { id: generateId('n'), userId, pesan: 'Pembelian berhasil! Kelas sudah bisa diakses.', dibaca: false, tanggal: new Date().toISOString() })
  5. Redirect ke invoice.html?id=[transaksiId]

FILE 2: pages/siswa/invoice.html
- Ambil transaksiId dari query param
- Tampilkan: nomor transaksi, tanggal, metode, list kelas dibeli + harga, total
- Badge status "LUNAS" berwarna hijau
- Tombol "Mulai Belajar" → link ke katalog atau ruang-belajar kelas pertama
- Tombol "Cetak Invoice" → window.print()
- Buat CSS @media print untuk tampilan cetak yang bersih
```

---

## FASE 3 — MODUL SISWA (Bagian 2)

### Prompt 3.1 — Ruang Belajar & Kuis

```
Baca SKILL.md. Kerjakan 3 halaman:

FILE 1: pages/siswa/ruang-belajar.html
- Guard: requireAuth(['siswa'])
- Ambil kelasId dari query param
- Cek apakah user sudah beli kelas ini (ada di transaksi), jika belum redirect ke detail-kelas.html?id=xxx
- LAYOUT KHUSUS: tanpa navbar biasa. Gunakan layout 2 kolom:
  - Kiri (70%): judul bab aktif + iframe YouTube embed (src dari silabus[babAktif].videoUrl)
  - Kanan (30%): daftar bab — setiap bab tampilkan judul, durasi, ikon centang jika sudah selesai
- Klik bab kanan: ganti iframe src + update babAktif
- Tombol "Tandai Selesai": update progres di localStorage, tambahkan babKe ke array babSelesai, hitung persen = babSelesai.length / totalBab * 100, simpan via updateItem('progres', ...)
- Tombol "Kerjakan Kuis" muncul setelah bab ditandai selesai → link ke kuis.html?kelasId=xxx&bab=1

FILE 2: pages/siswa/kuis.html
- Guard: requireAuth(['siswa'])
- Ambil kelasId dan bab dari query param
- Ambil soal dari getAll('kuis').find(q => q.kelasId === kelasId && q.babKe === parseInt(bab))
- Render soal satu per satu (tampilkan nomor soal, teks pertanyaan, 4 pilihan radio button)
- Tombol "Selanjutnya" untuk pindah soal, "Selesai" di soal terakhir
- Simpan jawaban user di array lokal JS

FILE 3: pages/siswa/hasil-kuis.html
- Tampilkan skor: berapa jawaban benar dari total soal
- Badge: Lulus (hijau) jika ≥ 70, Tidak Lulus (merah) jika < 70
- List pembahasan: setiap soal tampilkan pertanyaan, jawaban user, jawaban benar, keterangan Benar/Salah
- Tombol "Kembali ke Kelas" dan "Coba Lagi"
- Catatan: gunakan sessionStorage untuk transfer data jawaban dari kuis.html ke hasil-kuis.html
```

### Prompt 3.2 — Diskusi, Sertifikat, Profil

```
Baca SKILL.md. Kerjakan 3 halaman:

FILE 1: pages/siswa/diskusi.html
- Guard: requireAuth(['siswa'])
- Ambil kelasId dari query param
- Tampilkan list diskusi dari getAll('diskusi').filter(d => d.kelasId === kelasId), urutkan terbaru dulu
- Setiap item diskusi: foto avatar (placeholder), nama, pertanyaan, tanggal, list balasan
- Form di bawah: textarea pertanyaan + tombol "Kirim Pertanyaan"
- Logika kirim: createItem('diskusi', { id, kelasId, userId, userName: user.nama, pertanyaan, balasan: [], tanggal })
- Re-render list setelah kirim

FILE 2: pages/siswa/sertifikat.html
- Guard: requireAuth(['siswa'])
- Ambil kelasId dari query param
- Cek apakah progres kelas ini sudah 100%, jika belum tampilkan pesan "Selesaikan semua materi dulu"
- Jika sudah 100%: tampilkan sertifikat bergaya (border dekoratif CSS, nama user besar, nama kelas, tanggal, nama instruktur, logo platform)
- Tombol "Unduh Sertifikat" → window.print() dengan CSS @media print yang hanya tampilkan area sertifikat

FILE 3: pages/siswa/profil.html
- Guard: requireAuth(['siswa'])
- Tampilkan data user saat ini (nama, email, foto placeholder)
- Form edit: nama, bio (textarea), password baru (opsional — jika diisi, update password)
- Tombol simpan: updateItem('users', user.id, { nama, bio, password }) lalu update sessionStorage currentUser
- Alert sukses setelah simpan
```

### Prompt 3.3 — Riwayat, Wishlist, Ulasan, Daftar Instruktur, Notifikasi

```
Baca SKILL.md. Kerjakan 5 halaman terakhir modul siswa:

FILE 1: pages/siswa/riwayat-transaksi.html
- Guard: requireAuth(['siswa'])
- Tabel semua transaksi user, urutkan terbaru dulu
- Kolom: No. Transaksi, Tanggal, Kelas Dibeli (nama-nama kelas), Metode, Total, Status, Aksi (link ke invoice)

FILE 2: pages/siswa/wishlist.html
- Guard: requireAuth(['siswa'])
- Ambil wishlist user, join dengan data kelas
- Grid card kelas, tambah tombol "Hapus dari Wishlist" dan "Beli Sekarang" (add to cart lalu redirect)
- Jika wishlist kosong: pesan kosong + tombol ke katalog

FILE 3: pages/siswa/ulasan.html
- Guard: requireAuth(['siswa'])
- Ambil kelasId dari query param
- Cek apakah user sudah beli kelas ini
- Cek apakah user sudah pernah beri ulasan (cari di getAll('ulasan') where kelasId dan userId cocok)
- Jika sudah: tampilkan ulasan lama + opsi edit
- Form: pilih bintang 1-5 (render bintang yang bisa diklik), textarea komentar
- Simpan: createItem atau updateItem 'ulasan'

FILE 4: pages/siswa/daftar-instruktur.html
- Tidak perlu login
- Ambil semua user dengan role 'instruktur'
- Grid kartu: foto, nama, keahlian, jumlah kelas (hitung dari getAll('kelas') where instrukturId cocok)
- Klik kartu: link ke detail instruktur (cukup ke halaman profil publik instruktur, atau bisa pakai query param)

FILE 5: pages/siswa/notifikasi.html
- Guard: requireAuth(['siswa'])
- Ambil getAll('notifikasi').filter(n => n.userId === user.id), urutkan terbaru dulu
- Setiap item: ikon 🔔, teks pesan, tanggal, badge "Baru" jika belum dibaca
- Klik notifikasi: updateItem('notifikasi', id, { dibaca: true }) lalu re-render (badge hilang)
- Tombol "Tandai Semua Dibaca"
```

---

## FASE 4 — MODUL INSTRUKTUR

### Prompt 4.1 — Dashboard & Daftar Kelas Instruktur

```
Baca SKILL.md. Kerjakan 2 halaman:

FILE 1: pages/instruktur/dashboard.html
- Guard: requireAuth(['instruktur'])
- Layout sidebar instruktur. Menu sidebar: Dashboard, Kelas Saya, Buat Kelas, Q&A, Laporan Pendapatan, Tarik Saldo, Profil, Notifikasi, Logout
- KPI cards (grid-4): Total Kelas, Total Siswa (hitung dari transaksi yang mengandung kelas milik instruktur ini), Saldo (user.saldo formatRupiah), Rating Rata-rata
- Tabel kelas terbaru milik instruktur: judul, status badge, total siswa, rating
- Seksi Q&A terbaru: tampilkan 3 diskusi terbaru dari semua kelas milik instruktur ini

DATA: kelas milik instruktur = getAll('kelas').filter(k => k.instrukturId === user.id)

FILE 2: pages/instruktur/daftar-kelas.html
- Guard: requireAuth(['instruktur'])
- Tabel semua kelas milik instruktur: No, Gambar (thumbnail kecil), Judul, Kategori, Harga, Status (badge), Total Siswa, Aksi
- Aksi: tombol "Edit" (link ke buat-kelas.html?id=xxx), tombol "Kurikulum" (link ke kurikulum.html?id=xxx), tombol "Hapus" (konfirmasi dulu lalu deleteItem)
- Tombol "Buat Kelas Baru" di atas tabel
- Filter status: Semua / Pending / Published / Rejected
```

### Prompt 4.2 — Buat/Edit Kelas & Kurikulum

```
Baca SKILL.md. Kerjakan 2 halaman:

FILE 1: pages/instruktur/buat-kelas.html
- Guard: requireAuth(['instruktur'])
- Deteksi mode: jika ada query param ?id=xxx → mode EDIT (prefill form dari data kelas), jika tidak → mode BUAT BARU
- Form fields: Judul Kelas, Deskripsi (textarea), Kategori (dropdown dari SEED_CATEGORIES), Level (Pemula/Menengah/Mahir), Harga (0 = gratis), URL Gambar Kelas (input teks, bukan upload file)
- Tombol simpan:
  - Mode baru: createItem('kelas', { id: generateId('k'), ...form, instrukturId: user.id, instrukturNama: user.nama, status: 'pending', rating: 0, totalSiswa: 0, silabus: [] })
  - Mode edit: updateItem('kelas', id, { ...form })
- Redirect ke daftar-kelas.html setelah simpan

FILE 2: pages/instruktur/kurikulum.html
- Guard: requireAuth(['instruktur'])
- Ambil kelasId dari query param, verifikasi kelas milik instruktur ini
- Tampilkan list bab yang sudah ada (dari kelas.silabus)
- Form tambah bab: input Judul Bab, input URL Video YouTube, input Durasi (teks, misal "45 menit")
- Tombol "Tambah Bab": push ke array silabus, babKe otomatis increment, updateItem('kelas', kelasId, { silabus: [...] })
- Setiap bab di list: tombol hapus (filter out dari silabus, lalu update)
- Re-render list setelah setiap perubahan
```

### Prompt 4.3 — Unggah Materi, Buat Kuis, Daftar Siswa, Q&A

```
Baca SKILL.md. Kerjakan 4 halaman:

FILE 1: pages/instruktur/unggah-materi.html
- Guard: requireAuth(['instruktur'])
- Ambil kelasId dari query param
- Tampilkan list bab dari kelas.silabus
- Klik bab: tampilkan panel edit bab itu — field judul bab, URL video, durasi, deskripsi singkat bab (textarea)
- Simpan: update item dalam array silabus, updateItem('kelas', kelasId, { silabus })

FILE 2: pages/instruktur/buat-kuis.html
- Guard: requireAuth(['instruktur'])
- Ambil kelasId dari query param, dan babKe dari query param
- Tampilkan soal-soal yang sudah ada (dari getAll('kuis').find(...))
- Form tambah soal: input pertanyaan, 4 input pilihan jawaban (A/B/C/D), dropdown "Jawaban Benar" (0/1/2/3)
- Tombol "Tambah Soal": push soal baru ke array soal
- Setiap soal di list: tampilkan pertanyaan + pilihan, tombol hapus
- Tombol "Simpan Kuis": jika kuis sudah ada → updateItem, jika belum → createItem('kuis', { id, kelasId, babKe, soal })

FILE 3: pages/instruktur/daftar-siswa.html
- Guard: requireAuth(['instruktur'])
- Ambil kelasId dari query param
- Cari semua transaksi yang mengandung kelasId ini
- Untuk setiap transaksi, ambil data user dan progres
- Tampilkan tabel: Nama Siswa, Email, Tanggal Beli, Progres (progress bar % dari data 'progres')

FILE 4: pages/instruktur/tanya-jawab.html
- Guard: requireAuth(['instruktur'])
- Ambil semua diskusi dari kelas-kelas milik instruktur ini
- Tampilkan list: nama kelas, nama penanya, pertanyaan, tanggal, list balasan
- Form balasan: textarea + tombol "Balas"
- Logika balas: push { userId: user.id, userName: user.nama, teks, tanggal } ke array diskusi.balasan, updateItem('diskusi', diskusiId, { balasan })
```

### Prompt 4.4 — Diskon, Profil, Pendapatan, Tarik Saldo, Ulasan, Notifikasi Instruktur

```
Baca SKILL.md. Kerjakan 6 halaman terakhir modul instruktur:

FILE 1: pages/instruktur/diskon-kupon.html
- Guard: requireAuth(['instruktur'])
- Tabel kupon milik instruktur: kode, diskon (%), kelasId, tanggal expired, status (aktif/kadaluarsa)
- Form buat kupon: input kode (uppercase otomatis), input persen diskon, pilih kelas milik instruktur, input tanggal expired
- Tombol buat: createItem('kupon', { id, kode, diskon, kelasId, instrukturId: user.id, expired })
- Tombol hapus per baris

FILE 2: pages/instruktur/profil-publik.html
- Guard: requireAuth(['instruktur'])
- Preview profil publik: foto (placeholder), nama, bio, keahlian
- Form edit: nama, bio, keahlian, URL foto (teks)
- Simpan: updateItem('users', user.id, { nama, bio, keahlian, foto }) + update sessionStorage

FILE 3: pages/instruktur/laporan-pendapatan.html
- Guard: requireAuth(['instruktur'])
- KPI: Total Pendapatan, Saldo Tersedia, Total Transaksi
- Hitung dari getAll('transaksi') → filter transaksi yang mengandung kelas milik instruktur → hitung pendapatan per kelas
- Tabel: Nama Kelas, Jumlah Terjual, Harga, Total Pendapatan
- Catatan di bawah: "Pendapatan = 70% dari harga kelas (simulasi potongan platform 30%)"

FILE 4: pages/instruktur/tarik-saldo.html
- Guard: requireAuth(['instruktur'])
- Tampilkan saldo saat ini: user.saldo formatRupiah
- Form: input nominal penarikan, pilih bank (BCA/Mandiri/BNI dummy), input nomor rekening
- Validasi: nominal tidak boleh melebihi saldo, minimal Rp 50.000
- Tombol tarik: createItem('penarikan', { id, instrukturId: user.id, nominal, bank, norek, status: 'pending', tanggal }), updateItem('users', user.id, { saldo: user.saldo - nominal }), update sessionStorage
- Alert sukses

FILE 5: pages/instruktur/riwayat-penarikan.html
- Guard: requireAuth(['instruktur'])
- Tabel: Tanggal, Nominal, Bank, No. Rekening, Status badge (pending=kuning, approved=hijau, rejected=merah)

FILE 6: pages/instruktur/ulasan-masuk.html
- Guard: requireAuth(['instruktur'])
- Ambil semua ulasan dari kelas milik instruktur ini
- Tampilkan: nama kelas, nama siswa, bintang (render emoji ⭐), komentar, tanggal
- Filter berdasarkan kelas (dropdown pilih kelas)

FILE 7: pages/instruktur/notifikasi.html
- Sama persis polanya dengan pages/siswa/notifikasi.html tapi filter untuk instruktur
```

---

## FASE 5 — MODUL ADMIN

### Prompt 5.1 — Dashboard Admin & Manajemen User

```
Baca SKILL.md. Kerjakan 3 halaman:

FILE 1: pages/admin/dashboard.html
- Guard: requireAuth(['admin'])
- Layout sidebar admin. Menu: Dashboard, Manajemen Siswa, Manajemen Instruktur, Persetujuan Kelas, Verifikasi Pembayaran, Verifikasi Penarikan, Kategori, Moderasi Ulasan, Banner, Manajemen Admin, Logout
- KPI cards (grid-4): Total Siswa, Total Instruktur, Total Kelas Published, Total Transaksi
- Hitung semua dari localStorage
- Tabel transaksi terbaru (5 terakhir): tanggal, nama user, kelas, total, status
- Tabel kelas pending persetujuan (maks 5): judul, instruktur, kategori, harga

FILE 2: pages/admin/manajemen-siswa.html
- Guard: requireAuth(['admin'])
- Tabel semua user role 'siswa': No, Nama, Email, Tanggal Daftar (gunakan user.id substr sebagai proxy), Status (aktif/blokir), Aksi
- Tambah field 'status' saat register: default 'aktif'
- Tombol "Blokir": updateItem('users', id, { status: 'blokir' }) — tampilkan badge merah
- Tombol "Aktifkan": updateItem('users', id, { status: 'aktif' }) — tampilkan badge hijau
- Tombol "Hapus": konfirmasi + deleteItem('users', id)
- Search by nama atau email

FILE 3: pages/admin/manajemen-instruktur.html
- Guard: requireAuth(['admin'])
- Sama seperti manajemen siswa tapi filter role 'instruktur'
- Tambah kolom: Keahlian, Saldo, Jumlah Kelas
- Aksi tambahan: tombol "Lihat Kelas" (filter ke persetujuan kelas by instruktur)
```

### Prompt 5.2 — Persetujuan Kelas, Verifikasi Pembayaran & Penarikan

```
Baca SKILL.md. Kerjakan 3 halaman:

FILE 1: pages/admin/persetujuan-kelas.html
- Guard: requireAuth(['admin'])
- Tab filter: Semua / Pending / Published / Rejected
- Tabel kelas: Judul, Instruktur, Kategori, Harga, Level, Status badge, Aksi
- Aksi per baris:
  - Tombol "Setujui": updateItem('kelas', id, { status: 'published' }) + createItem notifikasi ke instruktur
  - Tombol "Tolak": prompt() minta alasan → updateItem('kelas', id, { status: 'rejected', alasanTolak: alasan }) + notifikasi ke instruktur
- Klik judul kelas: buka detail-kelas di tab baru (window.open)

FILE 2: pages/admin/verifikasi-pembayaran.html
- Guard: requireAuth(['admin'])
- Tabel semua transaksi: No Transaksi, Tanggal, Nama Pembeli, Kelas, Metode, Total, Status
- Status default 'sukses' (karena simulasi — di dunia nyata admin verifikasi manual)
- Tampilkan statistik atas: total transaksi hari ini, total pendapatan platform (30% dari semua transaksi)
- Filter by tanggal (input date range sederhana)

FILE 3: pages/admin/verifikasi-penarikan.html
- Guard: requireAuth(['admin'])
- Tabel semua penarikan: Instruktur, Nominal, Bank, No. Rekening, Tanggal, Status badge, Aksi
- Tombol "Setujui": updateItem('penarikan', id, { status: 'approved' }) + notifikasi ke instruktur "Penarikan saldo kamu telah disetujui"
- Tombol "Tolak": prompt alasan → updateItem('penarikan', id, { status: 'rejected' }) + kembalikan saldo instruktur (updateItem users +nominal) + notifikasi
- Filter by status
```

### Prompt 5.3 — Kategori, Moderasi Ulasan, Banner, Manajemen Admin

```
Baca SKILL.md. Kerjakan 4 halaman terakhir (FASE FINAL):

FILE 1: pages/admin/manajemen-kategori.html
- Guard: requireAuth(['admin'])
- Tabel kategori dari getAll('categories'): No, Nama, Jumlah Kelas (hitung), Aksi
- Form tambah: input nama kategori → createItem('categories', { id: generateId('cat'), nama })
- Inline edit: klik nama kategori → input teks muncul → simpan → updateItem
- Tombol hapus: cek dulu apakah ada kelas dengan kategori ini, jika ada → alert "Tidak bisa hapus, masih ada kelas"

FILE 2: pages/admin/moderasi-ulasan.html
- Guard: requireAuth(['admin'])
- Tabel semua ulasan: Nama Siswa, Nama Kelas, Rating (bintang), Komentar, Tanggal, Aksi
- Tombol "Hapus": konfirmasi + deleteItem('ulasan', id)
- Filter by kelas atau rating

FILE 3: pages/admin/pengaturan-banner.html
- Guard: requireAuth(['admin'])
- Preview banner saat ini (tampilkan teks dan link dari getAll / getItem 'banner')
- Form edit: input teks banner, input link tujuan, input warna background (color picker)
- Simpan: localStorage.setItem('banner', JSON.stringify({ teks, link, warnaBg }))
- Preview otomatis update saat user mengetik (gunakan event 'input')

FILE 4: pages/admin/manajemen-admin.html
- Guard: requireAuth(['admin'])
- Tabel semua user role 'admin'
- Form tambah admin baru: nama, email, password
- Logika tambah: createItem('users', { id: generateId('a'), nama, email, password, role: 'admin' })
- Tombol hapus: tidak bisa hapus diri sendiri (cek user.id === currentUser.id → alert "Tidak bisa hapus akun sendiri")

Setelah semua 4 file ini selesai dibuat, lakukan hal berikut:
1. Pastikan semua link navigasi di sidebar setiap modul sudah mengarah ke file yang benar
2. Pastikan path script (data.js, storage.js, auth.js) di setiap halaman sudah sesuai dengan kedalaman folder
3. Lakukan review cepat: buka index.html di browser, coba login sebagai budi@email.com / password123, pastikan redirect ke dashboard siswa berjalan
```

---

## FASE 6 — FINISHING & POLISH (Jalankan Terakhir)

### Prompt 6.1 — Perbaikan Global & Konsistensi

```
Baca SKILL.md. Lakukan audit dan perbaikan global pada seluruh project:

1. NAVBAR KONSISTENSI:
   - Pastikan semua halaman publik punya navbar dengan: logo "EduKita", menu, tombol Masuk/Daftar
   - Pastikan semua halaman siswa punya navbar siswa dengan nama user dan tombol logout
   - Pastikan semua halaman instruktur dan admin pakai layout sidebar yang konsisten

2. PATH SCRIPT:
   - Cek setiap file HTML: apakah path ke data.js, storage.js, auth.js sudah benar sesuai kedalaman folder?
   - pages/auth/ → ../../data.js (2 level up)
   - pages/siswa/ → ../../data.js (2 level up)
   - index.html → ./data.js (root)

3. ACTIVE SIDEBAR:
   - Di setiap halaman sidebar, tambahkan class "active" ke link sidebar yang sesuai dengan halaman saat ini
   - Gunakan window.location.href.includes('nama-file') untuk deteksi halaman aktif

4. EMPTY STATE:
   - Pastikan setiap halaman yang menampilkan list data punya kondisi "jika data kosong" dengan pesan yang ramah

5. MOBILE RESPONSIVE:
   - Pastikan CSS responsive sudah bekerja: sidebar berubah jadi menu atas di mobile, grid berubah jadi 1 kolom

6. STYLE.CSS TAMBAHAN:
   - Tambahkan style untuk: progress bar (.progress-bar), accordion (.accordion-item), tab filter (.tab-btn, .tab-btn.active)
```

### Prompt 6.2 — Uji Alur End-to-End

```
Baca SKILL.md. Lakukan review akhir dengan mensimulasikan alur berikut dan perbaiki semua yang error:

ALUR 1 — Siswa Baru:
index.html → register-siswa.html (daftar akun baru) → login.html → dashboard.html → katalog.html → detail-kelas.html → cart.html → checkout.html → invoice.html → ruang-belajar.html → kuis.html → hasil-kuis.html → sertifikat.html

ALUR 2 — Instruktur:
login.html (sebagai sari@email.com) → instruktur/dashboard.html → buat-kelas.html → kurikulum.html → buat-kuis.html → daftar-siswa.html → laporan-pendapatan.html → tarik-saldo.html

ALUR 3 — Admin:
login.html (sebagai admin@email.com) → admin/dashboard.html → persetujuan-kelas.html (setujui kelas) → verifikasi-penarikan.html (setujui penarikan) → manajemen-kategori.html → pengaturan-banner.html

Untuk setiap alur:
- Pastikan tidak ada halaman yang menampilkan error JavaScript di console
- Pastikan redirect antar halaman berjalan benar
- Pastikan data yang dibuat di satu halaman muncul di halaman lain yang relevan
- Perbaiki semua bug yang ditemukan
```

---

## 📋 CHECKLIST AKHIR

Setelah semua fase selesai, centang semua ini:

- [ ] Semua 50 file HTML ada dan bisa dibuka
- [ ] Login dengan 3 akun berbeda (siswa/instruktur/admin) berjalan
- [ ] Registrasi akun baru tersimpan dan bisa login
- [ ] Beli kelas → muncul di dashboard siswa
- [ ] Progres belajar tersimpan saat tombol "Tandai Selesai" diklik
- [ ] Instruktur bisa buat kelas → muncul di persetujuan admin
- [ ] Admin bisa setujui kelas → kelas muncul di katalog
- [ ] Tarik saldo → admin bisa setujui → saldo berkurang
- [ ] Semua halaman responsif di layar 768px
- [ ] Tidak ada error JavaScript di console browser
- [ ] initStorage() dipanggil di semua halaman
- [ ] Path script data.js/storage.js/auth.js benar di semua halaman
```
