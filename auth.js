// auth.js — sesi, guard role, dan helper UI bersama

var AUTH_SESSION_KEY = 'currentUser';

/** Akun demo per role — akses halaman role cukup lewat URL folder (siswa/instruktur/admin). */
var DEMO_EMAIL_BY_ROLE = {
  siswa: 'budi@email.com',
  instruktur: 'sari@email.com',
  admin: 'admin@email.com'
};

function getQueryParam(nama) {
  return new URLSearchParams(window.location.search).get(nama);
}

function formatRupiah(angka) {
  return angka === 0 ? 'GRATIS' : 'Rp ' + Number(angka).toLocaleString('id-ID');
}

function formatTanggal(isoString) {
  if (!isoString) return '-';
  var d = new Date(isoString);
  if (isNaN(d.getTime())) return isoString;
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function showAlert(containerId, pesan, tipe) {
  tipe = tipe || 'success';
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '<div class="alert alert-' + tipe + '">' + pesan + '</div>';
  setTimeout(function () { el.innerHTML = ''; }, 3000);
}

/** Normalisasi path (Windows/Mac, file://, http://). */
function getLocationPaths() {
  var href = (window.location.href || '').replace(/\\/g, '/').toLowerCase();
  var path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  return { href: href, path: path };
}

/** Ubah path relatif jadi URL absolut (hindari redirect gagal). */
function resolveAppPath(relativePath) {
  try {
    return new URL(relativePath, window.location.href).href;
  } catch (e) {
    return relativePath;
  }
}

function getPageArea() {
  var p = getLocationPaths();
  var blob = p.href + ' ' + p.path;

  if (blob.indexOf('/pages/siswa/') !== -1 || /\/siswa\//.test(blob)) return 'siswa';
  if (blob.indexOf('/pages/instruktur/') !== -1 || /\/instruktur\//.test(blob)) return 'instruktur';
  if (blob.indexOf('/pages/admin/') !== -1 || /\/admin\//.test(blob)) return 'admin';
  if (blob.indexOf('/pages/auth/') !== -1 || /\/auth\//.test(blob)) return 'auth';
  return 'root';
}

function getLoginPath() {
  var area = getPageArea();
  if (area === 'siswa' || area === 'instruktur' || area === 'admin') {
    return '../auth/login.html';
  }
  if (area === 'auth') return 'login.html';
  return 'pages/auth/login.html';
}

function sameUserId(a, b) {
  return String(a) === String(b);
}

function getRoleDashboardPath(role) {
  var area = getPageArea();
  if (area === role) return 'dashboard.html';
  if (area === 'root') return 'pages/' + role + '/dashboard.html';
  if (area === 'auth') return '../' + role + '/dashboard.html';
  return '../' + role + '/dashboard.html';
}

function buildLoginUrl() {
  var loginUrl = resolveAppPath(getLoginPath());
  var next = window.location.pathname + window.location.search + window.location.hash;
  var sep = loginUrl.indexOf('?') >= 0 ? '&' : '?';
  return loginUrl + sep + 'next=' + encodeURIComponent(next);
}

function isAllowedNextForRole(next, role) {
  if (!next) return false;
  var decoded = decodeURIComponent(next);
  return (
    decoded.indexOf('/pages/' + role + '/') !== -1 ||
    decoded.indexOf('/' + role + '/') !== -1 ||
    decoded.indexOf('pages/' + role + '/') !== -1
  );
}

function redirectByRole(role) {
  var next = getQueryParam('next');
  if (isAllowedNextForRole(next, role)) {
    window.location.replace(resolveAppPath(next));
    return;
  }
  window.location.replace(resolveAppPath(getRoleDashboardPath(role)));
}

function denyPageAccess() {
  var html =
    '<div style="padding:48px;text-align:center;font-family:Segoe UI,sans-serif;color:#374151">' +
    '<p>Mengalihkan ke halaman login…</p></div>';
  if (document.body) {
    document.body.innerHTML = html;
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML = html;
    });
  }
}

function setupGlobalLogout() {
  if (window.__logoutHandlerBound) return;
  window.__logoutHandlerBound = true;
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#btn-logout, .sidebar-link.logout, [data-action="logout"]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    logout();
  });
}

function persistSession(user) {
  var fresh = getById('users', user.id) || user;
  var json = JSON.stringify(fresh);
  sessionStorage.setItem(AUTH_SESSION_KEY, json);
  try {
    localStorage.setItem(AUTH_SESSION_KEY, json);
  } catch (e) { /* abaikan */ }
  return fresh;
}

function login(email, password) {
  var users = getAll('users');
  var user = users.find(function (u) {
    return u.email === email && u.password === password;
  });
  if (!user) return { sukses: false, pesan: 'Email atau password salah.' };
  if (user.status === 'blokir') {
    return { sukses: false, pesan: 'Akun Anda diblokir. Hubungi admin.' };
  }

  return { sukses: true, user: persistSession(user) };
}

function logout() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  try { localStorage.removeItem(AUTH_SESSION_KEY); } catch (e) { /* abaikan */ }
  sessionStorage.removeItem('appliedKupon');
  window.__pageUser = null;
  document.documentElement.classList.remove('auth-ok');
  window.location.replace(resolveAppPath(getLoginPath()));
}

function getCurrentUser() {
  var raw = sessionStorage.getItem(AUTH_SESSION_KEY);
  if (!raw) {
    try { raw = localStorage.getItem(AUTH_SESSION_KEY); } catch (e) { raw = null; }
  }
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/** Sembunyikan halaman sampai auth lolos; redirect pakai replace. */
function requireAuth(allowedRoles) {
  allowedRoles = allowedRoles || [];
  document.documentElement.classList.remove('auth-ok');

  var user = getCurrentUser();

  if (!user) {
    denyPageAccess();
    window.location.replace(buildLoginUrl());
    return null;
  }

  if (allowedRoles.length > 0 && allowedRoles.indexOf(user.role) === -1) {
    denyPageAccess();
    window.location.replace(resolveAppPath(getRoleDashboardPath(user.role)));
    return null;
  }

  user = getById('users', user.id) || user;
  if (!user || (allowedRoles.length > 0 && allowedRoles.indexOf(user.role) === -1)) {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    try { localStorage.removeItem(AUTH_SESSION_KEY); } catch (e) { /* abaikan */ }
    denyPageAccess();
    window.location.replace(buildLoginUrl());
    return null;
  }

  persistSession(user);
  document.documentElement.classList.add('auth-ok');
  return user;
}

function whenAuth(allowedRoles, fn) {
  var user = requireAuth(allowedRoles);
  if (user) fn(user);
}

function setActiveSidebar(overridePage) {
  document.querySelectorAll('.sidebar-link[data-page]').forEach(function (link) {
    var page = link.getAttribute('data-page');
    var isActive = overridePage
      ? page === overridePage
      : window.location.href.indexOf(page) !== -1;
    link.classList.toggle('active', isActive);
  });
}

function register(data) {
  var users = getAll('users');
  if (users.find(function (u) { return u.email === data.email; })) {
    return { sukses: false, pesan: 'Email sudah terdaftar.' };
  }

  var newUser = {
    id: generateId('u'),
    nama: data.nama,
    email: data.email,
    password: data.password,
    role: data.role,
    foto: data.foto || '',
    bio: data.bio || '',
    saldo: data.saldo !== undefined ? data.saldo : 0,
    status: 'aktif'
  };
  if (data.keahlian) newUser.keahlian = data.keahlian;
  createItem('users', newUser);
  return { sukses: true, user: newUser };
}

function userOwnsKelas(userId, kelasId) {
  var uid = String(userId);
  var kid = String(kelasId);
  return getAll('transaksi').some(function (t) {
    return sameUserId(t.userId, uid) && (t.items || []).some(function (id) {
      return String(id) === kid;
    });
  });
}

function addToWishlist(userId, kelasId) {
  var uid = String(userId);
  var kid = String(kelasId);

  var exists = getAll('wishlist').some(function (w) {
    return sameUserId(w.userId, uid) && String(w.kelasId) === kid;
  });
  if (exists) {
    return { sukses: false, pesan: 'Kelas sudah ada di wishlist' };
  }

  createItem('wishlist', {
    id: generateId('w'),
    kelasId: kid,
    userId: uid,
    tanggal: Date.now()
  });

  return { sukses: true, pesan: 'Kelas disimpan ke wishlist!' };
}

function addToCart(userId, kelasId) {
  var uid = String(userId);
  var kid = String(kelasId);

  var inCart = getAll('cart').some(function (c) {
    return sameUserId(c.userId, uid) && String(c.kelasId) === kid;
  });
  if (inCart) {
    return { sukses: false, pesan: 'Kelas sudah ada di keranjang' };
  }

  var kelas = getById('kelas', kid);
  if (!kelas) {
    return { sukses: false, pesan: 'Kelas tidak ditemukan' };
  }

  createItem('cart', {
    id: generateId('c'),
    kelasId: kid,
    userId: uid,
    tanggal: Date.now()
  });

  return { sukses: true, pesan: 'Kelas berhasil ditambahkan ke keranjang!' };
}

function getCartItemsForUser(userId) {
  var uid = String(userId);
  return getAll('cart')
    .filter(function (c) { return sameUserId(c.userId, uid); })
    .map(function (c) {
      var kelas = getById('kelas', c.kelasId);
      return { cart: c, kelas: kelas };
    })
    .filter(function (item) { return item.kelas; });
}

function hitungDiskonKupon(subtotal, items, kupon) {
  if (!kupon) return 0;
  var eligible = 0;
  items.forEach(function (item) {
    if (!kupon.kelasId || String(item.kelas.id) === String(kupon.kelasId)) {
      eligible += item.kelas.harga;
    }
  });
  if (eligible === 0) eligible = subtotal;
  return Math.round(eligible * (kupon.diskon / 100));
}

function clearUserCart(userId) {
  save('cart', getAll('cart').filter(function (c) {
    return !sameUserId(c.userId, userId);
  }));
}

function createNotifikasi(userId, pesan, meta) {
  var item = {
    id: generateId('n'),
    userId: userId,
    pesan: pesan,
    dibaca: false,
    tanggal: new Date().toISOString()
  };
  if (meta) {
    Object.keys(meta).forEach(function (key) {
      item[key] = meta[key];
    });
  }
  createItem('notifikasi', item);
  return item;
}

/** Beri tahu instruktur saat kelasnya baru dibeli. */
function notifyInstrukturKelasTerjual(kelas, pembeliNama, transaksiId) {
  if (!kelas || !kelas.instrukturId) return;

  var sudahAda = getAll('notifikasi').some(function (n) {
    return (
      sameUserId(n.userId, kelas.instrukturId) &&
      n.tipe === 'penjualan' &&
      String(n.transaksiId) === String(transaksiId) &&
      String(n.kelasId) === String(kelas.id)
    );
  });
  if (sudahAda) return;

  var share = Math.round((kelas.harga || 0) * 0.7);
  var pesan =
    'Kelas "' + kelas.judul + '" dibeli oleh ' + (pembeliNama || 'siswa') + '.' +
    (share > 0 ? ' Pendapatan +Rp ' + share.toLocaleString('id-ID') + ' (70%).' : '');

  createNotifikasi(kelas.instrukturId, pesan, {
    tipe: 'penjualan',
    transaksiId: transaksiId,
    kelasId: kelas.id
  });
}

/**
 * Sinkronkan notifikasi penjualan dari riwayat transaksi (untuk pembelian sebelum fitur ini ada).
 */
function syncNotifikasiPenjualanInstruktur(instrukturId) {
  if (!instrukturId) return;

  var kelasIds = getAll('kelas')
    .filter(function (k) { return sameUserId(k.instrukturId, instrukturId); })
    .map(function (k) { return String(k.id); });

  if (kelasIds.length === 0) return;

  var existing = {};
  getAll('notifikasi').forEach(function (n) {
    if (!sameUserId(n.userId, instrukturId) || n.tipe !== 'penjualan') return;
    if (n.transaksiId && n.kelasId) {
      existing[String(n.transaksiId) + ':' + String(n.kelasId)] = true;
    }
  });

  getAll('transaksi').forEach(function (t) {
    if ((t.status || 'sukses') !== 'sukses') return;

    var pembeli = getById('users', t.userId);
    var namaPembeli = pembeli ? pembeli.nama : 'Siswa';

    (t.items || []).forEach(function (kelasId) {
      if (kelasIds.indexOf(String(kelasId)) === -1) return;
      var key = String(t.id) + ':' + String(kelasId);
      if (existing[key]) return;

      var kelas = getById('kelas', kelasId);
      if (!kelas) return;

      notifyInstrukturKelasTerjual(kelas, namaPembeli, t.id);
      existing[key] = true;
    });
  });
}

function autoLoginDemoForRole(role) {
  var email = DEMO_EMAIL_BY_ROLE[role];
  if (!email) return null;
  var demo = getAll('users').find(function (u) {
    return u.email === email && u.role === role;
  });
  if (!demo || demo.status === 'blokir') return null;
  return persistSession(demo);
}

/** Dipanggil dari boot-*.js di <head> sebelum body tampil. */
function bootGuard(allowedRoles) {
  setupGlobalLogout();
  if (typeof initStorage === 'function') initStorage();

  allowedRoles = allowedRoles || [];

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

  var user = requireAuth(allowedRoles);
  if (!user) {
    window.__pageUser = null;
    return null;
  }
  window.__pageUser = user;
  return user;
}

setupGlobalLogout();
