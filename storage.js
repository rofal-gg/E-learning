// storage.js

function ensureSeedUsers() {
  var users = getAll('users');
  var demoEmails = ['budi@email.com', 'sari@email.com', 'admin@email.com'];
  var changed = false;

  SEED_USERS.forEach(function (seed) {
    var idx = users.findIndex(function (u) { return u.email === seed.email; });
    if (idx === -1) {
      users.push(Object.assign({ status: 'aktif' }, seed));
      changed = true;
    } else if (demoEmails.indexOf(seed.email) !== -1) {
      var merged = Object.assign({}, users[idx], seed, { status: users[idx].status || 'aktif' });
      merged.poin = users[idx].poin !== undefined ? users[idx].poin : 0;
      merged.tingkatan = users[idx].tingkatan !== undefined ? users[idx].tingkatan : seed.tingkatan;
      merged.saldo = users[idx].saldo !== undefined ? users[idx].saldo : 0;
      users[idx] = merged;
      changed = true;
    }
  });

  users.forEach(function (u) {
    if (u.role !== 'siswa' || !u.tingkatan) return;
    var minPoin = u.tingkatan === 'mahir' ? 201 : (u.tingkatan === 'menengah' ? 101 : 0);
    var poinSekarang = u.poin !== undefined ? u.poin : 0;
    if (poinSekarang < minPoin) {
      u.poin = minPoin;
      changed = true;
    }
  });

  if (changed) save('users', users);
}

function ensureSeedKupon() {
  var kupon = getAll('kupon');
  var changed = false;
  SEED_KUPON.forEach(function (seed) {
    if (!kupon.find(function (k) { return k.kode === seed.kode; })) {
      kupon.push(seed);
      changed = true;
    }
  });
  if (changed) save('kupon', kupon);
}

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
  if (!localStorage.getItem('kupon'))        localStorage.setItem('kupon', JSON.stringify(SEED_KUPON));
  if (!localStorage.getItem('penarikan'))    localStorage.setItem('penarikan', JSON.stringify([]));
  if (!localStorage.getItem('jadwal_tatap_muka')) localStorage.setItem('jadwal_tatap_muka', JSON.stringify([]));
  if (!localStorage.getItem('kuis_penempatan'))   localStorage.setItem('kuis_penempatan', JSON.stringify([]));
  if (!localStorage.getItem('banner'))       localStorage.setItem('banner', JSON.stringify({ teks: "Belajar itu Menyenangkan! Diskon 30% Kursus Pilihan", link: "#" }));
  if (!localStorage.getItem('categories'))   localStorage.setItem('categories', JSON.stringify(SEED_CATEGORIES));

  ensureSeedUsers();
  ensureSeedKupon();
}

function getAll(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function getById(key, id) {
  return getAll(key).find(item => item.id == id) || null;
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
  const all = getAll(key).map(item => item.id == id ? { ...item, ...updates } : item);
  save(key, all);
}

function deleteItem(key, id) {
  const filtered = getAll(key).filter(item => item.id != id);
  save(key, filtered);
}

function generateId(prefix = 'id') {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
