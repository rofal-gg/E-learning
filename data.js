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
    foto: "assets/images/PP.jpg", bio: "Web developer 5 tahun pengalaman",
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
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan HTML", videoUrl: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F", durasi: "45 menit" },
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

const SEED_KUPON = [
  { id: "kpn001", kode: "EDUKITA10", diskon: 10, kelasId: null, expired: "2026-12-31" },
  { id: "kpn002", kode: "HEMAT50", diskon: 50, kelasId: "k001", expired: "2026-12-31" }
];
