// Guard halaman admin — muat di <head> setelah data.js, storage.js, auth.js
document.documentElement.classList.add('auth-guard');
bootGuard(['admin', 'super_admin']);
