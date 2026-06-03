// Guard halaman siswa — muat di <head> setelah data.js, storage.js, auth.js
document.documentElement.classList.add('auth-guard');
bootGuard(['siswa']);
