// =============================================================
// components.js — Komponen reusable Platform E-Learning
// Cara pakai: panggil fungsi render di inline script halaman
// =============================================================

// ─────────────────────────────────────────────
// NAVBAR PUBLIK (index.html, katalog.html, dll)
// ─────────────────────────────────────────────
function renderNavbarPublik(options) {
  var el = document.getElementById('navbar-placeholder');
  if (!el) return;

  // options: { activeLink: 'katalog'|'instruktur'|'faq', basePath: '../../' }
  var base = (options && options.basePath) ? options.basePath : '';
  var active = (options && options.activeLink) ? options.activeLink : '';

  function isActive(name) {
    return name === active ? ' class="active"' : '';
  }

  el.innerHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="${base}index.html" class="navbar-logo">EduKita</a>
        <ul class="navbar-menu">
          <li><a href="${base}pages/siswa/katalog.html"${isActive('katalog')}>Katalog</a></li>
          <li><a href="${base}pages/siswa/daftar-instruktur.html"${isActive('instruktur')}>Instruktur</a></li>
          <li><a href="${base}pages/auth/faq.html"${isActive('faq')}>FAQ</a></li>
          <li><a href="${base}pages/anggota.html">Tim Kami</a></li>
          <li id="nav-dashboard-item" style="display:none;"><a href="${base}pages/siswa/dashboard.html">Dashboard</a></li>
        </ul>
        <div class="navbar-actions" id="navbar-actions"></div>
      </div>
    </nav>
  `;

  // isi tombol navbar sesuai status login
  var navActions = document.getElementById('navbar-actions');
  var currentUser = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;

  if (currentUser && currentUser.role === 'siswa') {
    var dashItem = document.getElementById('nav-dashboard-item');
    if (dashItem) dashItem.style.display = 'list-item';
    navActions.innerHTML = `
      <span class="navbar-user">${currentUser.nama}</span>
      <a href="${base}pages/siswa/cart.html" class="btn btn-secondary btn-sm">Keranjang</a>
      <button type="button" class="btn btn-danger btn-sm" id="btn-logout-nav">Logout</button>
    `;
    document.getElementById('btn-logout-nav').addEventListener('click', function () {
      if (typeof logout === 'function') logout();
    });
  } else if (currentUser && currentUser.role === 'instruktur') {
    navActions.innerHTML = `
      <span class="navbar-user">${currentUser.nama}</span>
      <a href="${base}pages/instruktur/dashboard.html" class="btn btn-secondary btn-sm">Dashboard</a>
      <button type="button" class="btn btn-danger btn-sm" id="btn-logout-nav">Logout</button>
    `;
    document.getElementById('btn-logout-nav').addEventListener('click', function () {
      if (typeof logout === 'function') logout();
    });
  } else {
    navActions.innerHTML = `
      <a href="${base}pages/auth/login.html" class="btn btn-secondary btn-sm">Masuk</a>
      <a href="${base}pages/auth/register-siswa.html" class="btn btn-primary btn-sm">Daftar</a>
    `;
  }
}

// ─────────────────────────────────────────────
// SIDEBAR SISWA
// ─────────────────────────────────────────────
function renderSidebarSiswa(activePage) {
  var el = document.getElementById('sidebar-placeholder');
  if (!el) return;

  el.innerHTML = `
    <aside class="sidebar">
      <a href="dashboard.html" class="sidebar-brand">EduKita</a>
      <nav>
        <a href="dashboard.html" class="sidebar-link" data-page="dashboard">
          <img src="../../assets/icons/Dashboard.png" width="20" alt=""> Dashboard
        </a>
        <a href="katalog.html" class="sidebar-link" data-page="katalog">
          <img src="../../assets/icons/katalog_kelas.png" width="20" alt=""> Katalog Kelas
        </a>
        <a href="cart.html" class="sidebar-link" data-page="cart">
          <img src="../../assets/icons/cart.svg" width="20" alt=""> Keranjang
        </a>
        <a href="wishlist.html" class="sidebar-link" data-page="wishlist">
          <img src="../../assets/icons/wishlist.png" width="20" alt=""> Wishlist
        </a>
        <a href="riwayat-transaksi.html" class="sidebar-link" data-page="riwayat-transaksi">
          <img src="../../assets/icons/riwayat_transaksi.png" width="20" alt=""> Riwayat Transaksi
        </a>
        <a href="sertifikat.html" class="sidebar-link" data-page="sertifikat">
          <img src="../../assets/icons/certificate.png" width="18" alt=""> Sertifikat
        </a>
        <a href="profil.html" class="sidebar-link" data-page="profil">
          <img src="../../assets/icons/profil.png" width="20" alt=""> Profil
        </a>
        <a href="notifikasi.html" class="sidebar-link" data-page="notifikasi">
          <img src="../../assets/icons/notification.png" width="20" alt=""> Notifikasi
        </a>
        <a href="#" class="sidebar-link logout" id="btn-logout">
          <img src="../../assets/icons/logout.png" width="20" alt=""> Logout
        </a>
      </nav>
    </aside>
  `;

  // set active state & logout
  if (typeof setActiveSidebar === 'function') setActiveSidebar(activePage);
  var btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof logout === 'function') logout();
    });
  }
}

// ─────────────────────────────────────────────
// SIDEBAR INSTRUKTUR
// ─────────────────────────────────────────────
function renderSidebarInstruktur(activePage) {
  var el = document.getElementById('sidebar-placeholder');
  if (!el) return;

  el.innerHTML = `
    <aside class="sidebar">
      <a href="dashboard.html" class="sidebar-brand">EduKita</a>
      <nav>
        <a href="dashboard.html" class="sidebar-link" data-page="dashboard">
          <img src="../../assets/icons/Dashboard.png" width="20" alt=""> Dashboard
        </a>
        <a href="daftar-kelas.html" class="sidebar-link" data-page="daftar-kelas">
          <img src="../../assets/icons/kelas_instruktur.svg" width="20" alt=""> Kelas Saya
        </a>
        <a href="buat-kelas.html" class="sidebar-link" data-page="buat-kelas">
          <img src="../../assets/icons/TambahKelas.png" width="20" alt=""> Buat Kelas
        </a>
        <a href="tanya-jawab.html" class="sidebar-link" data-page="tanya-jawab">
          <img src="../../assets/icons/QnA.png" width="20" alt=""> Q&amp;A
        </a>
        <a href="jadwal-tatap-muka.html" class="sidebar-link" data-page="jadwal-tatap-muka">
          <img src="../../assets/icons/jadwal.png" width="20" alt=""> Jadwal Tatap Muka
        </a>
        <a href="laporan-pendapatan.html" class="sidebar-link" data-page="laporan-pendapatan">
          <img src="../../assets/icons/laporan_pendapatan.svg" width="20" alt=""> Laporan Pendapatan
        </a>
        <a href="tarik-saldo.html" class="sidebar-link" data-page="tarik-saldo">
          <img src="../../assets/icons/TarikSaldo.png" width="20" alt=""> Tarik Saldo
        </a>
        <a href="profil-publik.html" class="sidebar-link" data-page="profil-publik">
          <img src="../../assets/icons/profil.png" width="20" alt=""> Profil
        </a>
        <a href="notifikasi.html" class="sidebar-link" data-page="notifikasi">
          <img src="../../assets/icons/notifikasi.png" width="20" alt=""> Notifikasi
        </a>
        <a href="#" class="sidebar-link logout" id="btn-logout">
          <img src="../../assets/icons/logout.png" width="20" alt=""> Logout
        </a>
      </nav>
    </aside>
  `;

  if (typeof setActiveSidebar === 'function') setActiveSidebar(activePage);
  var btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof logout === 'function') logout();
    });
  }
}

// ─────────────────────────────────────────────
// SIDEBAR ADMIN
// ─────────────────────────────────────────────
function renderSidebarAdmin(activePage) {
  var el = document.getElementById('sidebar-placeholder');
  if (!el) return;

  el.innerHTML = `
    <aside class="sidebar">
      <a href="dashboard.html" class="sidebar-brand">EduKita Admin</a>
      <nav>
        <a href="dashboard.html" class="sidebar-link" data-page="dashboard">
          <img src="../../assets/icons/Dashboard.png" width="20" alt=""> Dashboard
        </a>
        <a href="manajemen-siswa.html" class="sidebar-link" data-page="manajemen-siswa">
          <img src="../../assets/icons/manajemen_siswa.svg" width="20" alt=""> Manajemen Siswa
        </a>
        <a href="manajemen-instruktur.html" class="sidebar-link" data-page="manajemen-instruktur">
          <img src="../../assets/icons/manajemen_instruktur.svg" width="20" alt=""> Manajemen Instruktur
        </a>
        <a href="persetujuan-kelas.html" class="sidebar-link" data-page="persetujuan-kelas">
          <img src="../../assets/icons/persetujuan_kelas.svg" width="20" alt=""> Persetujuan Kelas
        </a>
        <a href="verifikasi-pembayaran.html" class="sidebar-link" data-page="verifikasi-pembayaran">
          <img src="../../assets/icons/verifikasi_pembayaran.svg" width="20" alt=""> Verifikasi Pembayaran
        </a>
        <a href="verifikasi-penarikan.html" class="sidebar-link" data-page="verifikasi-penarikan">
          <img src="../../assets/icons/verifikasi_penarikan.svg" width="20" alt=""> Verifikasi Penarikan
        </a>
        <a href="manajemen-kategori.html" class="sidebar-link" data-page="manajemen-kategori">
          <img src="../../assets/icons/kategori.svg" width="20" alt=""> Kategori
        </a>
        <a href="moderasi-ulasan.html" class="sidebar-link" data-page="moderasi-ulasan">
          <img src="../../assets/icons/moderasi_ulasan.svg" width="20" alt=""> Moderasi Ulasan
        </a>
        <a href="pengaturan-banner.html" class="sidebar-link" data-page="pengaturan-banner">
          <img src="../../assets/icons/banner.svg" width="20" alt=""> Banner
        </a>
        <a href="manajemen-admin.html" class="sidebar-link" data-page="manajemen-admin">
          <img src="../../assets/icons/manajemen_admin.svg" width="20" alt=""> Manajemen Admin
        </a>
        <a href="#" class="sidebar-link logout" id="btn-logout">
          <img src="../../assets/icons/logout.png" width="20" alt=""> Logout
        </a>
      </nav>
    </aside>
  `;

  if (typeof setActiveSidebar === 'function') setActiveSidebar(activePage);
  var btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof logout === 'function') logout();
    });
  }
}

// ─────────────────────────────────────────────
// FOOTER GLOBAL
// ─────────────────────────────────────────────
function renderFooter(options) {
  var el = document.getElementById('footer-placeholder');
  if (!el) return;

  // options: { basePath: '../../' }
  var base = (options && options.basePath) ? options.basePath : '';

  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <p class="footer-brand">EduKita</p>
        <div class="footer-links">
          <a href="${base}pages/auth/syarat-ketentuan.html">Syarat &amp; Ketentuan</a>
          <a href="${base}pages/auth/faq.html">FAQ</a>
        </div>
        <p class="footer-copy">&copy; 2025 EduKita — Platform E-Learning. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// ─────────────────────────────────────────────
// CARD KELAS — fungsi helper render satu card
// Digunakan di: katalog, dashboard, daftar-instruktur, index.html
// ─────────────────────────────────────────────
function buatCardKelas(k, options) {
  // options: { basePath: '../../', showLevel: true, detailPath: 'detail-kelas.html', customFooter: '' }
  var base = (options && options.basePath) ? options.basePath : '../../';
  var showLevel = options && options.showLevel;
  var detailPath = (options && options.detailPath) ? options.detailPath : 'detail-kelas.html';
  var harga = (typeof formatRupiah === 'function') ? formatRupiah(k.harga) : (k.harga === 0 ? 'GRATIS' : 'Rp ' + k.harga);

  var footerHtml = options && options.customFooter 
    ? options.customFooter 
    : `<div class="card-kelas-footer">
         <strong>${harga}</strong>
         <a href="${detailPath}?id=${k.id}" class="btn btn-primary btn-sm">Lihat Kelas</a>
       </div>`;

  return `
    <div class="card-kelas">
      // <img src="${base}${k.gambar}" alt="${k.judul}" onerror="this.src='${base}assets/images/placeholder.jpg'">
      <div class="card-body">
        <span class="badge badge-primary">${k.kategoriNama}</span>
        ${showLevel ? `<span class="badge badge-warning badge-gap">${k.level}</span>` : ''}
        <h3>${k.judul}</h3>
        <p class="text-gray">${k.instrukturNama}</p>
        ${footerHtml}
      </div>
    </div>
  `;
}
