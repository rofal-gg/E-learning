// data.js

const SEED_CATEGORIES = [
  { id: 1, nama: "Pemrograman Web" },
  { id: 2, nama: "Desain UI/UX" },
  { id: 3, nama: "Data Science" },
  { id: 4, nama: "Mobile Development" },
  { id: 5, nama: "Bisnis Digital" },
  { id: 6, nama: "DevOps & Cloud" },
  { id: 7, nama: "Cyber Security" },
  { id: 8, nama: "Internet of Things" },
  { id: 9, nama: "Artificial Intelligence" },
  { id: 10, nama: "Game Development" },
  { id: 11, nama: "Digital Marketing" },
  { id: 12, nama: "Product Management" }
];

const SEED_USERS = [
  {
    id: "u001", nama: "Geget Wijaya", email: "geget@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Wijaya",
    tanggalLahir: "2003-01-01",
    tingkatan: "mahir",
    poin: 201
  },
  {
    id: "u002", nama: "Jefri Sutrisno", email: "jefri@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-2.jpg", bio: "Web developer 5 tahun pengalaman",
    keahlian: "HTML, CSS, JavaScript", saldo: 500000,
    namaOrangTua: "Bapak Sutrisno",
    tanggalLahir: "2003-01-01",
    tingkatan: ""
  },
  {
    id: "u003", nama: "Asep Saepudin", email: "asep@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: "",
    namaOrangTua: "Bapak Saepudin",
    tanggalLahir: "2003-01-01",
    tingkatan: ""
  },
  {
    id: "u004", nama: "Budi Saryono", email: "budis@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Saryono",
    tanggalLahir: "2003-01-01",
    tingkatan: "pemula",
    poin: 0
  },
  {
    id: "u005", nama: "Rizky Ramadhan", email: "rizky@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Ramadhan",
    tanggalLahir: "2004-01-01",
    tingkatan: "pemula",
    poin: 0
  },
  {
    id: "u006", nama: "Andi Prasetyo", email: "andi@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Prasetyo",
    tanggalLahir: "2005-01-01",
    tingkatan: "pemula",
    poin: 0
  },
  {
    id: "u007", nama: "Budi Santoso", email: "budi@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Santoso",
    tanggalLahir: "2003-01-01",
    tingkatan: "pemula",
    poin: 0
  },
  {
    id: "u008", nama: "Sari Delianti", email: "sariD@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-1.jpg", bio: "Mobile & game developer enthusiast",
    keahlian: "Flutter, Unity, Kotlin", saldo: 300000,
    namaOrangTua: "Ibu Delianti",
    tanggalLahir: "2003-01-01",
    tingkatan: ""
  },
  {
    id: "u009", nama: "Dian Permata", email: "dian@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-2.jpg", bio: "AI & data science practitioner",
    keahlian: "Python, TensorFlow, SQL", saldo: 250000,
    namaOrangTua: "Bapak Permata",
    tanggalLahir: "2002-06-15",
    tingkatan: ""
  },
  {
    id: "u010", nama: "Hendra Gunawan", email: "hendra@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-2.jpg", bio: "Backend & cloud infrastructure expert",
    keahlian: "Node.js, Docker, AWS", saldo: 400000,
    namaOrangTua: "Bapak Gunawan",
    tanggalLahir: "2001-11-20",
    tingkatan: ""
  },
  {
    id: "u011", nama: "Ratna Kusuma", email: "ratna@email.com",
    password: "password123", role: "instruktur",
    foto: "assets/images/avatar-2.jpg", bio: "UI/UX designer & frontend developer",
    keahlian: "Figma, Vue.js, React", saldo: 350000,
    namaOrangTua: "Ibu Kusuma",
    tanggalLahir: "2002-02-28",
    tingkatan: ""
  },
  {
    id: "u012", nama: "Fitri Handayani", email: "fitri@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Ibu Handayani",
    tanggalLahir: "2004-07-12",
    tingkatan: "menengah",
    poin: 101
  },
  {
    id: "u013", nama: "Dimas Prayoga", email: "dimas@email.com",
    password: "password123", role: "siswa",
    foto: "assets/images/avatar-1.jpg", bio: "",
    namaOrangTua: "Bapak Prayoga",
    tanggalLahir: "2004-09-05",
    tingkatan: "pemula",
    poin: 0
  },
  {
    id: "u014", nama: "Mega Wulandari", email: "mega@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: "",
    namaOrangTua: "Ibu Wulandari",
    tanggalLahir: "2000-12-01",
    tingkatan: ""
  },
  {
    id: "u015", nama: "Aditya Pratama", email: "aditya@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: "",
    namaOrangTua: "Bapak Pratama",
    tanggalLahir: "2001-04-18",
    tingkatan: ""
  },
  {
    id: "u016", nama: "Nina Lestari", email: "nina@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: "",
    namaOrangTua: "Ibu Lestari",
    tanggalLahir: "2002-08-22",
    tingkatan: ""
  },
  {
    id: "u017", nama: "Bambang Suprapto", email: "bambang@email.com",
    password: "admin123", role: "admin",
    foto: "", bio: "",
    namaOrangTua: "Bapak Suprapto",
    tanggalLahir: "2001-01-14",
    tingkatan: ""
  },
  {
    id: "u018", nama: "Super Admin", email: "super@email.com",
    password: "super123", role: "super_admin",
    foto: "", bio: "Super Administrator Platform",
    namaOrangTua: "-",
    tanggalLahir: "2000-01-01",
    tingkatan: ""
  }
];

const SEED_KELAS = [
  {
    id: "k001", judul: "Belajar HTML & CSS dari Nol",
    deskripsi: "Kursus lengkap untuk pemula yang ingin belajar web development. Mulai dari pengenalan tag dasar hingga layouting dengan Flexbox dan Grid.",
    instrukturId: "u002", instrukturNama: "Jefri Sutrisno",
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
    deskripsi: "Pelajari dasar-dasar JavaScript dan buat web interaktif. Cocok untuk pemula yang baru pertama kali belajar programming.",
    instrukturId: "u002", instrukturNama: "Jefri Sutrisno",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 200000, gambar: "assets/images/kelas-2.jpg",
    level: "Pemula", durasi: "15 jam", totalModul: 7,
    rating: 4.8, totalSiswa: 89,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Variabel & Tipe Data", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Fungsi & Scope", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "Array & Object", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 4, judul: "DOM Manipulation", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 5, judul: "Event Handling", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 6, judul: "Async JavaScript", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 7, judul: "Project Akhir", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "90 menit" }
    ]
  },
  {
    id: "k003", judul: "Desain UI dengan Figma",
    deskripsi: "Buat prototype desain aplikasi yang menarik dengan Figma. Pelajari komponen, auto layout, dan prototyping.",
    instrukturId: "u002", instrukturNama: "Jefri Sutrisno",
    kategoriId: 2, kategoriNama: "Desain UI/UX",
    harga: 0, gambar: "assets/images/kelas-3.jpg",
    level: "Menengah", durasi: "8 jam", totalModul: 4,
    rating: 4.2, totalSiswa: 55,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan Figma & Tools", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Bekerja dengan Frame & Shape", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 3, judul: "Auto Layout & Constraints", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 4, judul: "Prototyping & Share", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" }
    ]
  },
  {
    id: "k004", judul: "React.js Fundamental",
    deskripsi: "Bangun aplikasi web modern dengan React.js. Pelajari komponen, state, props, hooks, dan routing.",
    instrukturId: "u002", instrukturNama: "Jefri Sutrisno",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 350000, gambar: "assets/images/kelas-4.jpg",
    level: "Menengah", durasi: "20 jam", totalModul: 8,
    rating: 4.7, totalSiswa: 67,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan React & JSX", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 2, judul: "Komponen & Props", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "State & Lifecycle", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 4, judul: "React Hooks (useState, useEffect)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "75 menit" },
      { babKe: 5, judul: "Routing dengan React Router", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 6, judul: "State Management (Context)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 7, judul: "Forms & Validasi", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 8, judul: "Deploy Aplikasi React", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" }
    ]
  },
  {
    id: "k005", judul: "Python untuk Data Science",
    deskripsi: "Pelajari Python dari dasar hingga mahir untuk kebutuhan analisis data dan machine learning.",
    instrukturId: "u008", instrukturNama: "Sari Delianti",
    kategoriId: 3, kategoriNama: "Data Science",
    harga: 250000, gambar: "assets/images/kelas-5.jpg",
    level: "Pemula", durasi: "18 jam", totalModul: 6,
    rating: 4.6, totalSiswa: 45,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Dasar Python & Setup", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 2, judul: "Struktur Data Python", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "NumPy & Array Operations", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "70 menit" },
      { babKe: 4, judul: "Pandas untuk Data Analysis", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "80 menit" },
      { babKe: 5, judul: "Visualisasi dengan Matplotlib", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 6, judul: "Pengenalan Machine Learning", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "90 menit" }
    ]
  },
  {
    id: "k006", judul: "Flutter untuk Pemula",
    deskripsi: "Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart. Dari nol hingga siap rilis.",
    instrukturId: "u008", instrukturNama: "Sari Delianti",
    kategoriId: 4, kategoriNama: "Mobile Development",
    harga: 300000, gambar: "assets/images/kelas-6.jpg",
    level: "Pemula", durasi: "22 jam", totalModul: 8,
    rating: 4.4, totalSiswa: 38,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan Dart & Flutter", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "Widget Dasar Flutter", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Layout & Styling", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 4, judul: "State Management", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "70 menit" },
      { babKe: 5, judul: "Navigation & Routing", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 6, judul: "API & Networking", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 7, judul: "Local Storage (SQLite)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 8, judul: "Publishing & Build", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" }
    ]
  },
  {
    id: "k007", judul: "Docker & Kubernetes Dasar",
    deskripsi: "Pelajari containerization dengan Docker dan orkestrasi dengan Kubernetes untuk deployment aplikasi.",
    instrukturId: "u008", instrukturNama: "Sari Delianti",
    kategoriId: 6, kategoriNama: "DevOps & Cloud",
    harga: 400000, gambar: "assets/images/kelas-7.jpg",
    level: "Mahir", durasi: "14 jam", totalModul: 6,
    rating: 4.3, totalSiswa: 22,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Konsep Container & Docker", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Dockerfile & Image", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "Docker Compose", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 4, judul: "Pengenalan Kubernetes", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 5, judul: "Pod, Service & Deployment", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "75 menit" },
      { babKe: 6, judul: "Monitoring & Scaling", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" }
    ]
  },
  {
    id: "k008", judul: "Ethical Hacking & Cyber Security",
    deskripsi: "Pelajari teknik ethical hacking, penetration testing, dan praktik keamanan siber terbaik.",
    instrukturId: "u008", instrukturNama: "Sari Delianti",
    kategoriId: 7, kategoriNama: "Cyber Security",
    harga: 500000, gambar: "assets/images/kelas-8.jpg",
    level: "Mahir", durasi: "25 jam", totalModul: 10,
    rating: 4.9, totalSiswa: 33,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Introduction to Cyber Security", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "Network Security Fundamentals", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Reconnaissance & Footprinting", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 4, judul: "Scanning & Enumeration", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 5, judul: "Web Application Security", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "75 menit" },
      { babKe: 6, judul: "SQL Injection & XSS", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "70 menit" },
      { babKe: 7, judul: "Wireless Security", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 8, judul: "Social Engineering", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 9, judul: "Cryptography Basics", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 10, judul: "Capture The Flag Challenge", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "120 menit" }
    ]
  },
  {
    id: "k009", judul: "Machine Learning with TensorFlow",
    deskripsi: "Kembangkan model machine learning menggunakan TensorFlow. Dari linear regression hingga neural networks.",
    instrukturId: "u009", instrukturNama: "Dian Permata",
    kategoriId: 9, kategoriNama: "Artificial Intelligence",
    harga: 450000, gambar: "assets/images/kelas-9.jpg",
    level: "Mahir", durasi: "20 jam", totalModul: 7,
    rating: 4.6, totalSiswa: 28,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan ML & TensorFlow", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 2, judul: "Linear Regression", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Classification & Logistic Regression", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 4, judul: "Neural Networks Dasar", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "75 menit" },
      { babKe: 5, judul: "Convolutional Neural Networks", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "80 menit" },
      { babKe: 6, judul: "Transfer Learning", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 7, judul: "Deploy ML Model", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" }
    ]
  },
  {
    id: "k010", judul: "Digital Marketing Strategy",
    deskripsi: "Kuasai strategi digital marketing: SEO, SEM, social media marketing, dan content marketing.",
    instrukturId: "u009", instrukturNama: "Dian Permata",
    kategoriId: 11, kategoriNama: "Digital Marketing",
    harga: 175000, gambar: "assets/images/kelas-10.jpg",
    level: "Pemula", durasi: "12 jam", totalModul: 5,
    rating: 4.1, totalSiswa: 72,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Fundamental Digital Marketing", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "SEO Optimization", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "Google Ads & SEM", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 4, judul: "Social Media Marketing", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 5, judul: "Analytics & Reporting", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" }
    ]
  },
  {
    id: "k011", judul: "Node.js Backend Development",
    deskripsi: "Bangun REST API dan backend server menggunakan Node.js, Express, dan MongoDB.",
    instrukturId: "u009", instrukturNama: "Dian Permata",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 280000, gambar: "assets/images/kelas-11.jpg",
    level: "Menengah", durasi: "16 jam", totalModul: 6,
    rating: 4.5, totalSiswa: 41,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan Node.js", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "Express.js Framework", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "REST API Design", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 4, judul: "MongoDB & Mongoose", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "70 menit" },
      { babKe: 5, judul: "Authentication & JWT", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 6, judul: "Testing & Deployment", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" }
    ]
  },
  {
    id: "k012", judul: "Unity Game Development",
    deskripsi: "Buat game 2D dan 3D menggunakan Unity engine. Pelajari C#, physics, dan game mechanics.",
    instrukturId: "u009", instrukturNama: "Dian Permata",
    kategoriId: 10, kategoriNama: "Game Development",
    harga: 375000, gambar: "assets/images/kelas-12.jpg",
    level: "Menengah", durasi: "24 jam", totalModul: 8,
    rating: 4.4, totalSiswa: 31,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan Unity & C#", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 2, judul: "Game Objects & Components", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Physics & Collisions", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 4, judul: "UI & Menus", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 5, judul: "Animations & Effects", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "70 menit" },
      { babKe: 6, judul: "Audio & Particles", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 7, judul: "Saving & Loading Game", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 8, judul: "Build & Publish Game", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" }
    ]
  },
  {
    id: "k013", judul: "Product Management Fundamentals",
    deskripsi: "Pelajari siklus hidup produk digital, dari ide hingga launch. Cocok untuk calon product manager.",
    instrukturId: "u010", instrukturNama: "Hendra Gunawan",
    kategoriId: 12, kategoriNama: "Product Management",
    harga: 0, gambar: "assets/images/kelas-13.jpg",
    level: "Pemula", durasi: "6 jam", totalModul: 4,
    rating: 4.0, totalSiswa: 95,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Apa itu Product Manager?", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "35 menit" },
      { babKe: 2, judul: "Product Discovery", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 3, judul: "Roadmap & Prioritization", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 4, judul: "Stakeholder Management", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" }
    ]
  },
  {
    id: "k014", judul: "Kotlin Android Development",
    deskripsi: "Kembangkan aplikasi Android native menggunakan Kotlin. Pelajari Material Design, MVVM, dan Jetpack.",
    instrukturId: "u010", instrukturNama: "Hendra Gunawan",
    kategoriId: 4, kategoriNama: "Mobile Development",
    harga: 320000, gambar: "assets/images/kelas-14.jpg",
    level: "Menengah", durasi: "18 jam", totalModul: 7,
    rating: 4.7, totalSiswa: 19,
    status: "pending",
    silabus: [
      { babKe: 1, judul: "Kotlin Dasar", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 2, judul: "Android Studio & Project Setup", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 3, judul: "Layout & Views", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 4, judul: "Activity & Fragment", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 5, judul: "MVVM Architecture", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 6, judul: "Room Database", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 7, judul: "Retrofit & Networking", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" }
    ]
  },
  {
    id: "k015", judul: "IoT dengan Arduino & ESP32",
    deskripsi: "Belajar Internet of Things dari dasar: sensor, aktuator, komunikasi nirkabel, dan cloud integration.",
    instrukturId: "u010", instrukturNama: "Hendra Gunawan",
    kategoriId: 8, kategoriNama: "Internet of Things",
    harga: 220000, gambar: "assets/images/kelas-15.jpg",
    level: "Pemula", durasi: "14 jam", totalModul: 5,
    rating: 4.3, totalSiswa: 17,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan IoT & Hardware", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Arduino Programming", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 3, judul: "Sensor & Aktuator", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 4, judul: "ESP32 & WiFi/Bluetooth", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 5, judul: "Cloud IoT Platform", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" }
    ]
  },
  {
    id: "k016", judul: "AWS Cloud Practitioner",
    deskripsi: "Persiapan sertifikasi AWS Cloud Practitioner. Pelajari layanan cloud AWS dan arsitektur dasar.",
    instrukturId: "u010", instrukturNama: "Hendra Gunawan",
    kategoriId: 6, kategoriNama: "DevOps & Cloud",
    harga: 0, gambar: "assets/images/kelas-16.jpg",
    level: "Pemula", durasi: "10 jam", totalModul: 5,
    rating: 4.2, totalSiswa: 63,
    status: "rejected",
    silabus: [
      { babKe: 1, judul: "Cloud Computing Overview", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "35 menit" },
      { babKe: 2, judul: "AWS Core Services", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 3, judul: "EC2 & S3 Deep Dive", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 4, judul: "Security & IAM", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 5, judul: "Billing & Pricing", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" }
    ]
  },
  {
    id: "k017", judul: "SQL & Database Design",
    deskripsi: "Pelajari SQL dari dasar hingga advanced query. Desain skema database yang efisien dan scalable.",
    instrukturId: "u011", instrukturNama: "Ratna Kusuma",
    kategoriId: 3, kategoriNama: "Data Science",
    harga: 180000, gambar: "assets/images/kelas-17.jpg",
    level: "Pemula", durasi: "12 jam", totalModul: 5,
    rating: 4.8, totalSiswa: 108,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Pengenalan Database & SQL", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "SELECT, INSERT, UPDATE, DELETE", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "JOIN & Subquery", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "65 menit" },
      { babKe: 4, judul: "Indexing & Optimization", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 5, judul: "Database Design & Normalization", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" }
    ]
  },
  {
    id: "k018", judul: "Bisnis E-Commerce untuk Pemula",
    deskripsi: "Pelajari cara memulai dan mengelola bisnis e-commerce dari nol: platform, marketing, dan logistik.",
    instrukturId: "u011", instrukturNama: "Ratna Kusuma",
    kategoriId: 5, kategoriNama: "Bisnis Digital",
    harga: 0, gambar: "assets/images/kelas-18.jpg",
    level: "Pemula", durasi: "8 jam", totalModul: 4,
    rating: 4.0, totalSiswa: 150,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Fundamental E-Commerce", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Platform & Tools", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 3, judul: "Product & Pricing Strategy", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 4, judul: "Shipping & Customer Service", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "35 menit" }
    ]
  },
  {
    id: "k019", judul: "Vue.js 3 Composition API",
    deskripsi: "Pelajari Vue.js 3 dengan Composition API. Bangun SPA modern dengan reactive state dan TypeScript.",
    instrukturId: "u011", instrukturNama: "Ratna Kusuma",
    kategoriId: 1, kategoriNama: "Pemrograman Web",
    harga: 0, gambar: "assets/images/kelas-19.jpg",
    level: "Menengah", durasi: "14 jam", totalModul: 6,
    rating: 4.6, totalSiswa: 37,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Vue 3 Overview & Setup", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "40 menit" },
      { babKe: 2, judul: "Composition API Dasar", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "Reactivity System", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 4, judul: "Vue Router", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 5, judul: "Pinia State Management", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 6, judul: "TypeScript Integration", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" }
    ]
  },
  {
    id: "k020", judul: "UI/UX Design Prinsip & Praktik",
    deskripsi: "Pelajari prinsip desain UI/UX, user research, wireframing, usability testing, dan design system.",
    instrukturId: "u011", instrukturNama: "Ratna Kusuma",
    kategoriId: 2, kategoriNama: "Desain UI/UX",
    harga: 260000, gambar: "assets/images/kelas-20.jpg",
    level: "Menengah", durasi: "16 jam", totalModul: 6,
    rating: 4.5, totalSiswa: 48,
    status: "published",
    silabus: [
      { babKe: 1, judul: "Prinsip Desain", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 2, judul: "User Research", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" },
      { babKe: 3, judul: "Wireframing & Prototype", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "60 menit" },
      { babKe: 4, judul: "Visual Design", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "50 menit" },
      { babKe: 5, judul: "Usability Testing", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "45 menit" },
      { babKe: 6, judul: "Design System", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", durasi: "55 menit" }
    ]
  }
];


const SEED_KUIS =
  [
    {
      "id": "q001",
      "kelasId": "k001",
      "babKe": 1,
      "soal": [
        {
          "pertanyaan": "Tag apa yang digunakan untuk membuat paragraf di HTML?",
          "pilihan": [
            "<p>",
            "<para>",
            "<text>",
            "<div>"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Apa kepanjangan dari HTML?",
          "pilihan": [
            "Hypertext Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Hyperlink Text Markup Language"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tag HTML untuk membuat heading terbesar?",
          "pilihan": [
            "<h1>",
            "<heading>",
            "<h>",
            "<head>"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tag mana yang digunakan untuk membuat link?",
          "pilihan": [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Atribut mana yang menentukan URL gambar pada tag <img>?",
          "pilihan": [
            "src",
            "href",
            "url",
            "link"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q002",
      "kelasId": "k001",
      "babKe": 2,
      "soal": [
        {
          "pertanyaan": "Tag HTML untuk membuat list tidak berurutan?",
          "pilihan": [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tag mana yang digunakan untuk membuat tabel?",
          "pilihan": [
            "<table>",
            "<tab>",
            "<grid>",
            "<tr>"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Atribut HTML untuk menambahkan tooltip?",
          "pilihan": [
            "title",
            "alt",
            "tooltip",
            "hint"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tag <br> digunakan untuk?",
          "pilihan": [
            "Line break",
            "Bold text",
            "Break row",
            "Border"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tag mana yang digunakan untuk menyisipkan CSS eksternal?",
          "pilihan": [
            "<link>",
            "<style>",
            "<css>",
            "<script>"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q003",
      "kelasId": "k001",
      "babKe": 3,
      "soal": [
        {
          "pertanyaan": "CSS property untuk mengubah warna teks?",
          "pilihan": [
            "color",
            "font",
            "text-color",
            "background"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Property CSS untuk mengatur jarak dalam elemen?",
          "pilihan": [
            "padding",
            "margin",
            "gap",
            "spacing"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Nilai display yang membuat elemen menjadi block?",
          "pilihan": [
            "block",
            "inline",
            "flex",
            "none"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "CSS selector untuk ID?",
          "pilihan": [
            "#id",
            ".id",
            "*id",
            "&id"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Property untuk mengubah font menjadi miring?",
          "pilihan": [
            "font-style: italic",
            "font-weight: bold",
            "text-decoration: underline",
            "font-variant: small-caps"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q004",
      "kelasId": "k002",
      "babKe": 1,
      "soal": [
        {
          "pertanyaan": "Keyword untuk mendeklarasikan variabel di JavaScript?",
          "pilihan": [
            "var",
            "v",
            "variable",
            "int"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tipe data untuk teks di JavaScript?",
          "pilihan": [
            "String",
            "Text",
            "Char",
            "Word"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Fungsi untuk mencetak ke console?",
          "pilihan": [
            "console.log()",
            "print()",
            "echo()",
            "write()"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Operator perbandingan yang memeriksa nilai dan tipe?",
          "pilihan": [
            "===",
            "==",
            "=",
            "!=="
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Array indexing dimulai dari angka?",
          "pilihan": [
            "0",
            "1",
            "-1",
            "null"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q005",
      "kelasId": "k002",
      "babKe": 2,
      "soal": [
        {
          "pertanyaan": "Function expression vs function declaration, mana yang hoisted?",
          "pilihan": [
            "Declaration",
            "Expression",
            "Keduanya",
            "Tidak ada"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Apa yang dimaksud dengan closure?",
          "pilihan": [
            "Fungsi yang mengakses variabel dari scope luar",
            "Fungsi yang tidak memiliki nama",
            "Fungsi async",
            "Fungsi rekursif"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Method untuk menambahkan elemen ke akhir array?",
          "pilihan": [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Keyword untuk menghentikan loop?",
          "pilihan": [
            "break",
            "stop",
            "exit",
            "end"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Method untuk menggabungkan dua array?",
          "pilihan": [
            "concat()",
            "merge()",
            "join()",
            "combine()"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q006",
      "kelasId": "k003",
      "babKe": 1,
      "soal": [
        {
          "pertanyaan": "Apa kegunaan Figma dalam desain UI?",
          "pilihan": [
            "Desain antarmuka dan prototyping",
            "Mengedit video",
            "Menulis kode",
            "Mengelola database"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Shortcut untuk membuat frame di Figma?",
          "pilihan": [
            "F",
            "R",
            "A",
            "G"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Fitur untuk menduplikasi desain secara konsisten?",
          "pilihan": [
            "Component",
            "Plugin",
            "Grid",
            "Style"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Format file asli Figma?",
          "pilihan": [
            ".fig",
            ".sketch",
            ".xd",
            ".ai"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Tool untuk membuat vector shape di Figma?",
          "pilihan": [
            "Pen Tool",
            "Brush Tool",
            "Eraser Tool",
            "Text Tool"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q007",
      "kelasId": "k004",
      "babKe": 1,
      "soal": [
        {
          "pertanyaan": "Apa itu JSX di React?",
          "pilihan": [
            "Extension syntax JavaScript untuk HTML",
            "JavaScript library",
            "CSS framework",
            "Database"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Fungsi utama ReactDOM.render()?",
          "pilihan": [
            "Merender komponen ke DOM",
            "Membuat state",
            "Handle event",
            "Fetch API"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "React menggunakan virtual apa?",
          "pilihan": [
            "Virtual DOM",
            "Virtual Memory",
            "Virtual Machine",
            "Virtual Server"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "npm start menjalankan server di port?",
          "pilihan": [
            "3000",
            "8080",
            "5000",
            "8000"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "File entry point default di React?",
          "pilihan": [
            "src/index.js",
            "src/App.js",
            "index.html",
            "main.js"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q008",
      "kelasId": "k005",
      "babKe": 1,
      "soal": [
        {
          "pertanyaan": "Tipe data apa yang digunakan untuk angka desimal di Python?",
          "pilihan": [
            "float",
            "int",
            "double",
            "decimal"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Fungsi untuk mencetak output di Python?",
          "pilihan": [
            "print()",
            "echo()",
            "console.log()",
            "write()"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Struktur data Python yang bersifat mutable dan berurutan?",
          "pilihan": [
            "List",
            "Tuple",
            "Set",
            "String"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Keyword untuk mendefinisikan fungsi di Python?",
          "pilihan": [
            "def",
            "function",
            "fun",
            "define"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Library Python untuk komputasi numerik?",
          "pilihan": [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Scikit-learn"
          ],
          "jawaban": 0
        }
      ]
    },
    {
      "id": "q009",
      "kelasId": "k002",
      "babKe": 3,
      "soal": [
        {
          "pertanyaan": "Method untuk mengakses properti object di JavaScript?",
          "pilihan": [
            "dot notation atau bracket",
            "arrow notation",
            "hash notation",
            "pointer notation"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Apa itu JSON?",
          "pilihan": [
            "JavaScript Object Notation",
            "Java Standard Output",
            "JSON Script",
            "JavaScript Online"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Method untuk mengubah JSON string menjadi object?",
          "pilihan": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Spread operator di ES6 dilambangkan dengan?",
          "pilihan": [
            "...",
            "..",
            "++",
            "**"
          ],
          "jawaban": 0
        },
        {
          "pertanyaan": "Method array untuk mengiterasi setiap elemen?",
          "pilihan": [
            "forEach()",
            "map()",
            "filter()",
            "reduce()"
          ],
          "jawaban": 0
        }
      ]
    }
    ,
    {
      id: "q010", kelasId: "k001", babKe: 4,
      soal: [
        { "pertanyaan": "Tag <ul> digunakan untuk list jenis?", "pilihan": ["Tidak berurutan", "Berurutan", "Definisi", "Dropdown"], "jawaban": 0 },
        { "pertanyaan": "Atribut src pada tag <img> berfungsi untuk?", "pilihan": ["URL gambar", "Teks alternatif", "Ukuran gambar", "Warna border"], "jawaban": 0 },
        { "pertanyaan": "Tag <table> digunakan untuk?", "pilihan": ["Membuat tabel", "Membuat form", "Membuat link", "Membuat list"], "jawaban": 0 },
        { "pertanyaan": "Tag HTML untuk membuat paragraf adalah?", "pilihan": ["<p>", "<div>", "<span>", "<h1>"], "jawaban": 0 },
        { "pertanyaan": "Tag <a> digunakan untuk membuat?", "pilihan": ["Link", "Gambar", "Tabel", "Form"], "jawaban": 0 }
      ]
    },
    {
      id: "q011", kelasId: "k001", babKe: 5,
      soal: [
        { "pertanyaan": "Apa itu algoritma?", "pilihan": ["Langkah sistematis", "Bahasa pemrograman", "Hardware", "Database"], "jawaban": 0 },
        { "pertanyaan": "Database adalah?", "pilihan": ["Tempat penyimpanan data terstruktur", "Aplikasi web", "Browser", "OS"], "jawaban": 0 },
        { "pertanyaan": "Version control contohnya?", "pilihan": ["Git", "MySQL", "Docker", "Linux"], "jawaban": 0 },
        { "pertanyaan": "API singkatan dari?", "pilihan": ["Application Programming Interface", "Advanced Program Integration", "Automatic Processing Interface", "Application Process Integration"], "jawaban": 0 },
        { "pertanyaan": "Debugging adalah?", "pilihan": ["Mencari dan memperbaiki bug", "Menulis kode", "Menjalankan program", "Menginstall software"], "jawaban": 0 }
      ]
    },
    {
      id: "q012", kelasId: "k002", babKe: 4,
      soal: [
        { "pertanyaan": "Query selector document.querySelector()?", "pilihan": ["Memilih elemen DOM", "Membuat elemen", "Menghapus elemen", "Mengubah style"], "jawaban": 0 },
        { "pertanyaan": "=== dalam JavaScript adalah?", "pilihan": ["Strict equality", "Assignment", "Loose equality", "Negation"], "jawaban": 0 },
        { "pertanyaan": "Method push() pada array berfungsi?", "pilihan": ["Menambah elemen akhir", "Menghapus elemen", "Mengurutkan", "Mencari elemen"], "jawaban": 0 },
        { "pertanyaan": "Fungsi untuk mencetak ke console?", "pilihan": ["console.log()", "print()", "echo()", "write()"], "jawaban": 0 },
        { "pertanyaan": "var, let, const digunakan untuk?", "pilihan": ["Deklarasi variabel", "Looping", "Conditional", "Function"], "jawaban": 0 }
      ]
    },
    {
      id: "q013", kelasId: "k002", babKe: 5,
      soal: [
        { "pertanyaan": "=== dalam JavaScript adalah?", "pilihan": ["Strict equality", "Assignment", "Loose equality", "Negation"], "jawaban": 0 },
        { "pertanyaan": "var, let, const digunakan untuk?", "pilihan": ["Deklarasi variabel", "Looping", "Conditional", "Function"], "jawaban": 0 },
        { "pertanyaan": "Query selector document.querySelector()?", "pilihan": ["Memilih elemen DOM", "Membuat elemen", "Menghapus elemen", "Mengubah style"], "jawaban": 0 },
        { "pertanyaan": "Method push() pada array berfungsi?", "pilihan": ["Menambah elemen akhir", "Menghapus elemen", "Mengurutkan", "Mencari elemen"], "jawaban": 0 },
        { "pertanyaan": "Fungsi untuk mencetak ke console?", "pilihan": ["console.log()", "print()", "echo()", "write()"], "jawaban": 0 }
      ]
    },
    {
      id: "q014", kelasId: "k002", babKe: 6,
      soal: [
        { "pertanyaan": "var, let, const digunakan untuk?", "pilihan": ["Deklarasi variabel", "Looping", "Conditional", "Function"], "jawaban": 0 },
        { "pertanyaan": "=== dalam JavaScript adalah?", "pilihan": ["Strict equality", "Assignment", "Loose equality", "Negation"], "jawaban": 0 },
        { "pertanyaan": "Fungsi untuk mencetak ke console?", "pilihan": ["console.log()", "print()", "echo()", "write()"], "jawaban": 0 },
        { "pertanyaan": "Query selector document.querySelector()?", "pilihan": ["Memilih elemen DOM", "Membuat elemen", "Menghapus elemen", "Mengubah style"], "jawaban": 0 },
        { "pertanyaan": "Method push() pada array berfungsi?", "pilihan": ["Menambah elemen akhir", "Menghapus elemen", "Mengurutkan", "Mencari elemen"], "jawaban": 0 }
      ]
    },
    {
      id: "q015", kelasId: "k002", babKe: 7,
      soal: [
        { "pertanyaan": "Debugging adalah?", "pilihan": ["Mencari dan memperbaiki bug", "Menulis kode", "Menjalankan program", "Menginstall software"], "jawaban": 0 },
        { "pertanyaan": "API singkatan dari?", "pilihan": ["Application Programming Interface", "Advanced Program Integration", "Automatic Processing Interface", "Application Process Integration"], "jawaban": 0 },
        { "pertanyaan": "Version control contohnya?", "pilihan": ["Git", "MySQL", "Docker", "Linux"], "jawaban": 0 },
        { "pertanyaan": "Database adalah?", "pilihan": ["Tempat penyimpanan data terstruktur", "Aplikasi web", "Browser", "OS"], "jawaban": 0 },
        { "pertanyaan": "Apa itu algoritma?", "pilihan": ["Langkah sistematis", "Bahasa pemrograman", "Hardware", "Database"], "jawaban": 0 }
      ]
    },
    {
      id: "q016", kelasId: "k003", babKe: 2,
      soal: [
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 },
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 }
      ]
    },
    {
      id: "q017", kelasId: "k003", babKe: 3,
      soal: [
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 },
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 },
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 }
      ]
    },
    {
      id: "q018", kelasId: "k003", babKe: 4,
      soal: [
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 },
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 },
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 }
      ]
    },
    {
      id: "q019", kelasId: "k004", babKe: 2,
      soal: [
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 }
      ]
    },
    {
      id: "q020", kelasId: "k004", babKe: 3,
      soal: [
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 }
      ]
    },
    {
      id: "q021", kelasId: "k004", babKe: 4,
      soal: [
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 }
      ]
    },
    {
      id: "q022", kelasId: "k004", babKe: 5,
      soal: [
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q023", kelasId: "k004", babKe: 6,
      soal: [
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q024", kelasId: "k004", babKe: 7,
      soal: [
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 }
      ]
    },
    {
      id: "q025", kelasId: "k004", babKe: 8,
      soal: [
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 }
      ]
    },
    {
      id: "q026", kelasId: "k005", babKe: 2,
      soal: [
        { "pertanyaan": "Pandas digunakan untuk?", "pilihan": ["Analisis data", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "List di Python bersifat?", "pilihan": ["Mutable dan berurutan", "Immutable", "Unordered", "Read-only"], "jawaban": 0 },
        { "pertanyaan": "print() di Python?", "pilihan": ["Mencetak output", "Input data", "Import modul", "Export data"], "jawaban": 0 },
        { "pertanyaan": "def digunakan untuk?", "pilihan": ["Mendefinisikan fungsi", "Looping", "Conditional", "Import"], "jawaban": 0 },
        { "pertanyaan": "NumPy digunakan untuk?", "pilihan": ["Komputasi numerik", "Visualisasi", "Machine learning", "Web scraping"], "jawaban": 0 }
      ]
    },
    {
      id: "q027", kelasId: "k005", babKe: 3,
      soal: [
        { "pertanyaan": "=== dalam JavaScript adalah?", "pilihan": ["Strict equality", "Assignment", "Loose equality", "Negation"], "jawaban": 0 },
        { "pertanyaan": "Query selector document.querySelector()?", "pilihan": ["Memilih elemen DOM", "Membuat elemen", "Menghapus elemen", "Mengubah style"], "jawaban": 0 },
        { "pertanyaan": "var, let, const digunakan untuk?", "pilihan": ["Deklarasi variabel", "Looping", "Conditional", "Function"], "jawaban": 0 },
        { "pertanyaan": "Fungsi untuk mencetak ke console?", "pilihan": ["console.log()", "print()", "echo()", "write()"], "jawaban": 0 },
        { "pertanyaan": "Method push() pada array berfungsi?", "pilihan": ["Menambah elemen akhir", "Menghapus elemen", "Mengurutkan", "Mencari elemen"], "jawaban": 0 }
      ]
    },
    {
      id: "q028", kelasId: "k005", babKe: 4,
      soal: [
        { "pertanyaan": "Pandas digunakan untuk?", "pilihan": ["Analisis data", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "print() di Python?", "pilihan": ["Mencetak output", "Input data", "Import modul", "Export data"], "jawaban": 0 },
        { "pertanyaan": "List di Python bersifat?", "pilihan": ["Mutable dan berurutan", "Immutable", "Unordered", "Read-only"], "jawaban": 0 },
        { "pertanyaan": "NumPy digunakan untuk?", "pilihan": ["Komputasi numerik", "Visualisasi", "Machine learning", "Web scraping"], "jawaban": 0 },
        { "pertanyaan": "def digunakan untuk?", "pilihan": ["Mendefinisikan fungsi", "Looping", "Conditional", "Import"], "jawaban": 0 }
      ]
    },
    {
      id: "q029", kelasId: "k005", babKe: 5,
      soal: [
        { "pertanyaan": "NumPy digunakan untuk?", "pilihan": ["Komputasi numerik", "Visualisasi", "Machine learning", "Web scraping"], "jawaban": 0 },
        { "pertanyaan": "print() di Python?", "pilihan": ["Mencetak output", "Input data", "Import modul", "Export data"], "jawaban": 0 },
        { "pertanyaan": "List di Python bersifat?", "pilihan": ["Mutable dan berurutan", "Immutable", "Unordered", "Read-only"], "jawaban": 0 },
        { "pertanyaan": "def digunakan untuk?", "pilihan": ["Mendefinisikan fungsi", "Looping", "Conditional", "Import"], "jawaban": 0 },
        { "pertanyaan": "Pandas digunakan untuk?", "pilihan": ["Analisis data", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 }
      ]
    },
    {
      id: "q030", kelasId: "k005", babKe: 6,
      soal: [
        { "pertanyaan": "print() di Python?", "pilihan": ["Mencetak output", "Input data", "Import modul", "Export data"], "jawaban": 0 },
        { "pertanyaan": "Pandas digunakan untuk?", "pilihan": ["Analisis data", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "List di Python bersifat?", "pilihan": ["Mutable dan berurutan", "Immutable", "Unordered", "Read-only"], "jawaban": 0 },
        { "pertanyaan": "def digunakan untuk?", "pilihan": ["Mendefinisikan fungsi", "Looping", "Conditional", "Import"], "jawaban": 0 },
        { "pertanyaan": "NumPy digunakan untuk?", "pilihan": ["Komputasi numerik", "Visualisasi", "Machine learning", "Web scraping"], "jawaban": 0 }
      ]
    },
    {
      id: "q031", kelasId: "k006", babKe: 1,
      soal: [
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 },
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 }
      ]
    },
    {
      id: "q032", kelasId: "k006", babKe: 2,
      soal: [
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 },
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 }
      ]
    },
    {
      id: "q033", kelasId: "k006", babKe: 3,
      soal: [
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 },
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 }
      ]
    },
    {
      id: "q034", kelasId: "k006", babKe: 4,
      soal: [
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q035", kelasId: "k006", babKe: 5,
      soal: [
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 },
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 }
      ]
    },
    {
      id: "q036", kelasId: "k006", babKe: 6,
      soal: [
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 },
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q037", kelasId: "k006", babKe: 7,
      soal: [
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 },
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q038", kelasId: "k006", babKe: 8,
      soal: [
        { "pertanyaan": "StatefulWidget vs StatelessWidget?", "pilihan": ["Stateful bisa berubah state", "Stateless lebih cepat", "Tidak ada bedanya", "Stateful untuk animasi"], "jawaban": 0 },
        { "pertanyaan": "Hot Reload di Flutter?", "pilihan": ["Update cepat tanpa rebuild", "Restart penuh", "Build release", "Debug mode"], "jawaban": 0 },
        { "pertanyaan": "MaterialApp adalah?", "pilihan": ["Root widget", "Layout widget", "Navigation", "Theme"], "jawaban": 0 },
        { "pertanyaan": "Flutter adalah framework untuk?", "pilihan": ["Mobile cross-platform", "Web backend", "Game engine", "Desktop"], "jawaban": 0 },
        { "pertanyaan": "Widget di Flutter?", "pilihan": ["Semua adalah widget", "Hanya tombol", "Layout saja", "Animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q039", kelasId: "k007", babKe: 1,
      soal: [
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 },
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 },
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 },
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 }
      ]
    },
    {
      id: "q040", kelasId: "k007", babKe: 2,
      soal: [
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 },
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 },
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 }
      ]
    },
    {
      id: "q041", kelasId: "k007", babKe: 3,
      soal: [
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 },
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 },
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 }
      ]
    },
    {
      id: "q042", kelasId: "k007", babKe: 4,
      soal: [
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 },
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 },
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 }
      ]
    },
    {
      id: "q043", kelasId: "k007", babKe: 5,
      soal: [
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 },
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 },
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 }
      ]
    },
    {
      id: "q044", kelasId: "k007", babKe: 6,
      soal: [
        { "pertanyaan": "Kubernetes adalah?", "pilihan": ["Orchestrator container", "Container runtime", "Image builder", "Load balancer"], "jawaban": 0 },
        { "pertanyaan": "Docker Compose untuk?", "pilihan": ["Multi-container apps", "Single container", "Image registry", "Network"], "jawaban": 0 },
        { "pertanyaan": "Docker adalah platform untuk?", "pilihan": ["Containerization", "Virtual machine", "Cloud storage", "Database"], "jawaban": 0 },
        { "pertanyaan": "Pod di Kubernetes?", "pilihan": ["Unit terkecil deploy", "Node worker", "Service type", "Volume"], "jawaban": 0 },
        { "pertanyaan": "Dockerfile digunakan untuk?", "pilihan": ["Membangun image", "Menjalankan container", "Network config", "Volume mount"], "jawaban": 0 }
      ]
    },
    {
      id: "q045", kelasId: "k008", babKe: 1,
      soal: [
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q046", kelasId: "k008", babKe: 2,
      soal: [
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q047", kelasId: "k008", babKe: 3,
      soal: [
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 }
      ]
    },
    {
      id: "q048", kelasId: "k008", babKe: 4,
      soal: [
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 }
      ]
    },
    {
      id: "q049", kelasId: "k008", babKe: 5,
      soal: [
        { "pertanyaan": "Tag <table> digunakan untuk?", "pilihan": ["Membuat tabel", "Membuat form", "Membuat link", "Membuat list"], "jawaban": 0 },
        { "pertanyaan": "Tag <ul> digunakan untuk list jenis?", "pilihan": ["Tidak berurutan", "Berurutan", "Definisi", "Dropdown"], "jawaban": 0 },
        { "pertanyaan": "Tag HTML untuk membuat paragraf adalah?", "pilihan": ["<p>", "<div>", "<span>", "<h1>"], "jawaban": 0 },
        { "pertanyaan": "Atribut src pada tag <img> berfungsi untuk?", "pilihan": ["URL gambar", "Teks alternatif", "Ukuran gambar", "Warna border"], "jawaban": 0 },
        { "pertanyaan": "Tag <a> digunakan untuk membuat?", "pilihan": ["Link", "Gambar", "Tabel", "Form"], "jawaban": 0 }
      ]
    },
    {
      id: "q050", kelasId: "k008", babKe: 6,
      soal: [
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q051", kelasId: "k008", babKe: 7,
      soal: [
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 }
      ]
    },
    {
      id: "q052", kelasId: "k008", babKe: 8,
      soal: [
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 }
      ]
    },
    {
      id: "q053", kelasId: "k008", babKe: 9,
      soal: [
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 }
      ]
    },
    {
      id: "q054", kelasId: "k008", babKe: 10,
      soal: [
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 }
      ]
    },
    {
      id: "q055", kelasId: "k009", babKe: 1,
      soal: [
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 }
      ]
    },
    {
      id: "q056", kelasId: "k009", babKe: 2,
      soal: [
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 },
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 }
      ]
    },
    {
      id: "q057", kelasId: "k009", babKe: 3,
      soal: [
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 },
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 }
      ]
    },
    {
      id: "q058", kelasId: "k009", babKe: 4,
      soal: [
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 },
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 }
      ]
    },
    {
      id: "q059", kelasId: "k009", babKe: 5,
      soal: [
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 },
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 }
      ]
    },
    {
      id: "q060", kelasId: "k009", babKe: 6,
      soal: [
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 },
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 }
      ]
    },
    {
      id: "q061", kelasId: "k009", babKe: 7,
      soal: [
        { "pertanyaan": "Machine learning adalah?", "pilihan": ["AI yang belajar dari data", "Robot fisik", "Database cerdas", "Cloud computing"], "jawaban": 0 },
        { "pertanyaan": "TensorFlow adalah?", "pilihan": ["Framework ML", "Database", "Web server", "Game engine"], "jawaban": 0 },
        { "pertanyaan": "CNN digunakan untuk?", "pilihan": ["Image processing", "Text processing", "Audio", "Time series"], "jawaban": 0 },
        { "pertanyaan": "Neural network terinspirasi dari?", "pilihan": ["Otak manusia", "Komputer", "Alam semesta", "Matematika"], "jawaban": 0 },
        { "pertanyaan": "Linear regression digunakan?", "pilihan": ["Prediksi nilai kontinu", "Klasifikasi", "Clustering", "Reduksi dimensi"], "jawaban": 0 }
      ]
    },
    {
      id: "q062", kelasId: "k010", babKe: 1,
      soal: [
        { "pertanyaan": "SEO adalah?", "pilihan": ["Optimasi mesin pencari", "Media sosial", "Email marketing", "Iklan TV"], "jawaban": 0 },
        { "pertanyaan": "Google Ads adalah?", "pilihan": ["Platform iklan online", "Analytics tools", "Email service", "Hosting"], "jawaban": 0 },
        { "pertanyaan": "Conversion rate adalah?", "pilihan": ["Persentase pengunjung jadi pelanggan", "Jumlah pengunjung", "Harga produk", "Biaya iklan"], "jawaban": 0 },
        { "pertanyaan": "Target audience adalah?", "pilihan": ["Target pasar", "Produk", "Harga", "Distribusi"], "jawaban": 0 },
        { "pertanyaan": "Content marketing fokus pada?", "pilihan": ["Konten bernilai", "Iklan langsung", "Diskon", "Email blast"], "jawaban": 0 }
      ]
    },
    {
      id: "q063", kelasId: "k010", babKe: 2,
      soal: [
        { "pertanyaan": "Conversion rate adalah?", "pilihan": ["Persentase pengunjung jadi pelanggan", "Jumlah pengunjung", "Harga produk", "Biaya iklan"], "jawaban": 0 },
        { "pertanyaan": "Google Ads adalah?", "pilihan": ["Platform iklan online", "Analytics tools", "Email service", "Hosting"], "jawaban": 0 },
        { "pertanyaan": "SEO adalah?", "pilihan": ["Optimasi mesin pencari", "Media sosial", "Email marketing", "Iklan TV"], "jawaban": 0 },
        { "pertanyaan": "Content marketing fokus pada?", "pilihan": ["Konten bernilai", "Iklan langsung", "Diskon", "Email blast"], "jawaban": 0 },
        { "pertanyaan": "Target audience adalah?", "pilihan": ["Target pasar", "Produk", "Harga", "Distribusi"], "jawaban": 0 }
      ]
    },
    {
      id: "q064", kelasId: "k010", babKe: 3,
      soal: [
        { "pertanyaan": "SEO adalah?", "pilihan": ["Optimasi mesin pencari", "Media sosial", "Email marketing", "Iklan TV"], "jawaban": 0 },
        { "pertanyaan": "Target audience adalah?", "pilihan": ["Target pasar", "Produk", "Harga", "Distribusi"], "jawaban": 0 },
        { "pertanyaan": "Google Ads adalah?", "pilihan": ["Platform iklan online", "Analytics tools", "Email service", "Hosting"], "jawaban": 0 },
        { "pertanyaan": "Content marketing fokus pada?", "pilihan": ["Konten bernilai", "Iklan langsung", "Diskon", "Email blast"], "jawaban": 0 },
        { "pertanyaan": "Conversion rate adalah?", "pilihan": ["Persentase pengunjung jadi pelanggan", "Jumlah pengunjung", "Harga produk", "Biaya iklan"], "jawaban": 0 }
      ]
    },
    {
      id: "q065", kelasId: "k010", babKe: 4,
      soal: [
        { "pertanyaan": "Target audience adalah?", "pilihan": ["Target pasar", "Produk", "Harga", "Distribusi"], "jawaban": 0 },
        { "pertanyaan": "Content marketing fokus pada?", "pilihan": ["Konten bernilai", "Iklan langsung", "Diskon", "Email blast"], "jawaban": 0 },
        { "pertanyaan": "Google Ads adalah?", "pilihan": ["Platform iklan online", "Analytics tools", "Email service", "Hosting"], "jawaban": 0 },
        { "pertanyaan": "SEO adalah?", "pilihan": ["Optimasi mesin pencari", "Media sosial", "Email marketing", "Iklan TV"], "jawaban": 0 },
        { "pertanyaan": "Conversion rate adalah?", "pilihan": ["Persentase pengunjung jadi pelanggan", "Jumlah pengunjung", "Harga produk", "Biaya iklan"], "jawaban": 0 }
      ]
    },
    {
      id: "q066", kelasId: "k010", babKe: 5,
      soal: [
        { "pertanyaan": "Google Ads adalah?", "pilihan": ["Platform iklan online", "Analytics tools", "Email service", "Hosting"], "jawaban": 0 },
        { "pertanyaan": "Conversion rate adalah?", "pilihan": ["Persentase pengunjung jadi pelanggan", "Jumlah pengunjung", "Harga produk", "Biaya iklan"], "jawaban": 0 },
        { "pertanyaan": "SEO adalah?", "pilihan": ["Optimasi mesin pencari", "Media sosial", "Email marketing", "Iklan TV"], "jawaban": 0 },
        { "pertanyaan": "Target audience adalah?", "pilihan": ["Target pasar", "Produk", "Harga", "Distribusi"], "jawaban": 0 },
        { "pertanyaan": "Content marketing fokus pada?", "pilihan": ["Konten bernilai", "Iklan langsung", "Diskon", "Email blast"], "jawaban": 0 }
      ]
    },
    {
      id: "q067", kelasId: "k011", babKe: 1,
      soal: [
        { "pertanyaan": "Middleware di Express?", "pilihan": ["Fungsi antar request-response", "Database", "Template", "Router"], "jawaban": 0 },
        { "pertanyaan": "REST API menggunakan method?", "pilihan": ["GET, POST, PUT, DELETE", "SELECT, INSERT", "READ, WRITE", "FETCH, SEND"], "jawaban": 0 },
        { "pertanyaan": "Node.js adalah?", "pilihan": ["Runtime JavaScript server-side", "Browser library", "CSS framework", "Database"], "jawaban": 0 },
        { "pertanyaan": "Express.js adalah?", "pilihan": ["Web framework untuk Node", "Database ORM", "Template engine", "Testing"], "jawaban": 0 },
        { "pertanyaan": "npm digunakan untuk?", "pilihan": ["Package manager", "Runtime", "Database", "Testing"], "jawaban": 0 }
      ]
    },
    {
      id: "q068", kelasId: "k011", babKe: 2,
      soal: [
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 },
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 }
      ]
    },
    {
      id: "q069", kelasId: "k011", babKe: 3,
      soal: [
        { "pertanyaan": "npm digunakan untuk?", "pilihan": ["Package manager", "Runtime", "Database", "Testing"], "jawaban": 0 },
        { "pertanyaan": "REST API menggunakan method?", "pilihan": ["GET, POST, PUT, DELETE", "SELECT, INSERT", "READ, WRITE", "FETCH, SEND"], "jawaban": 0 },
        { "pertanyaan": "Node.js adalah?", "pilihan": ["Runtime JavaScript server-side", "Browser library", "CSS framework", "Database"], "jawaban": 0 },
        { "pertanyaan": "Express.js adalah?", "pilihan": ["Web framework untuk Node", "Database ORM", "Template engine", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Middleware di Express?", "pilihan": ["Fungsi antar request-response", "Database", "Template", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q070", kelasId: "k011", babKe: 4,
      soal: [
        { "pertanyaan": "npm digunakan untuk?", "pilihan": ["Package manager", "Runtime", "Database", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Node.js adalah?", "pilihan": ["Runtime JavaScript server-side", "Browser library", "CSS framework", "Database"], "jawaban": 0 },
        { "pertanyaan": "REST API menggunakan method?", "pilihan": ["GET, POST, PUT, DELETE", "SELECT, INSERT", "READ, WRITE", "FETCH, SEND"], "jawaban": 0 },
        { "pertanyaan": "Express.js adalah?", "pilihan": ["Web framework untuk Node", "Database ORM", "Template engine", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Middleware di Express?", "pilihan": ["Fungsi antar request-response", "Database", "Template", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q071", kelasId: "k011", babKe: 5,
      soal: [
        { "pertanyaan": "Node.js adalah?", "pilihan": ["Runtime JavaScript server-side", "Browser library", "CSS framework", "Database"], "jawaban": 0 },
        { "pertanyaan": "REST API menggunakan method?", "pilihan": ["GET, POST, PUT, DELETE", "SELECT, INSERT", "READ, WRITE", "FETCH, SEND"], "jawaban": 0 },
        { "pertanyaan": "Express.js adalah?", "pilihan": ["Web framework untuk Node", "Database ORM", "Template engine", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Middleware di Express?", "pilihan": ["Fungsi antar request-response", "Database", "Template", "Router"], "jawaban": 0 },
        { "pertanyaan": "npm digunakan untuk?", "pilihan": ["Package manager", "Runtime", "Database", "Testing"], "jawaban": 0 }
      ]
    },
    {
      id: "q072", kelasId: "k011", babKe: 6,
      soal: [
        { "pertanyaan": "REST API menggunakan method?", "pilihan": ["GET, POST, PUT, DELETE", "SELECT, INSERT", "READ, WRITE", "FETCH, SEND"], "jawaban": 0 },
        { "pertanyaan": "Node.js adalah?", "pilihan": ["Runtime JavaScript server-side", "Browser library", "CSS framework", "Database"], "jawaban": 0 },
        { "pertanyaan": "npm digunakan untuk?", "pilihan": ["Package manager", "Runtime", "Database", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Express.js adalah?", "pilihan": ["Web framework untuk Node", "Database ORM", "Template engine", "Testing"], "jawaban": 0 },
        { "pertanyaan": "Middleware di Express?", "pilihan": ["Fungsi antar request-response", "Database", "Template", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q073", kelasId: "k012", babKe: 1,
      soal: [
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 }
      ]
    },
    {
      id: "q074", kelasId: "k012", babKe: 2,
      soal: [
        { "pertanyaan": "Fungsi untuk mencetak ke console?", "pilihan": ["console.log()", "print()", "echo()", "write()"], "jawaban": 0 },
        { "pertanyaan": "=== dalam JavaScript adalah?", "pilihan": ["Strict equality", "Assignment", "Loose equality", "Negation"], "jawaban": 0 },
        { "pertanyaan": "Method push() pada array berfungsi?", "pilihan": ["Menambah elemen akhir", "Menghapus elemen", "Mengurutkan", "Mencari elemen"], "jawaban": 0 },
        { "pertanyaan": "Query selector document.querySelector()?", "pilihan": ["Memilih elemen DOM", "Membuat elemen", "Menghapus elemen", "Mengubah style"], "jawaban": 0 },
        { "pertanyaan": "var, let, const digunakan untuk?", "pilihan": ["Deklarasi variabel", "Looping", "Conditional", "Function"], "jawaban": 0 }
      ]
    },
    {
      id: "q075", kelasId: "k012", babKe: 3,
      soal: [
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 },
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 }
      ]
    },
    {
      id: "q076", kelasId: "k012", babKe: 4,
      soal: [
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 }
      ]
    },
    {
      id: "q077", kelasId: "k012", babKe: 5,
      soal: [
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 }
      ]
    },
    {
      id: "q078", kelasId: "k012", babKe: 6,
      soal: [
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 }
      ]
    },
    {
      id: "q079", kelasId: "k012", babKe: 7,
      soal: [
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 }
      ]
    },
    {
      id: "q080", kelasId: "k012", babKe: 8,
      soal: [
        { "pertanyaan": "Rigidbody digunakan untuk?", "pilihan": ["Physics simulation", "Rendering", "Audio", "Input"], "jawaban": 0 },
        { "pertanyaan": "C# adalah bahasa untuk?", "pilihan": ["Scripting di Unity", "HTML styling", "Database query", "Markup"], "jawaban": 0 },
        { "pertanyaan": "Prefab di Unity?", "pilihan": ["Template GameObject", "Texture", "Shader", "Animation"], "jawaban": 0 },
        { "pertanyaan": "GameObject adalah?", "pilihan": ["Objek dasar di Unity", "Textures", "Script", "Material"], "jawaban": 0 },
        { "pertanyaan": "Unity adalah engine untuk?", "pilihan": ["Game development", "Web development", "Mobile app", "Desktop app"], "jawaban": 0 }
      ]
    },
    {
      id: "q081", kelasId: "k013", babKe: 1,
      soal: [
        { "pertanyaan": "Product roadmap adalah?", "pilihan": ["Rencana pengembangan produk", "Peta lokasi", "Kode program", "Desain UI"], "jawaban": 0 },
        { "pertanyaan": "Stakeholder adalah?", "pilihan": ["Pihak yang berkepentingan", "Pengguna akhir", "Developer", "Desainer"], "jawaban": 0 },
        { "pertanyaan": "Sprint dalam Agile?", "pilihan": ["Iterasi pengembangan", "Balapan", "Meeting", "Dokumentasi"], "jawaban": 0 },
        { "pertanyaan": "Product Manager bertugas?", "pilihan": ["Mengelola produk", "Mengelola server", "Menulis kode", "Desain grafis"], "jawaban": 0 },
        { "pertanyaan": "MVP (Minimum Viable Product)?", "pilihan": ["Produk dengan fitur minimum", "Produk mahal", "Produk final", "Produk rusak"], "jawaban": 0 }
      ]
    },
    {
      id: "q082", kelasId: "k013", babKe: 2,
      soal: [
        { "pertanyaan": "Product Manager bertugas?", "pilihan": ["Mengelola produk", "Mengelola server", "Menulis kode", "Desain grafis"], "jawaban": 0 },
        { "pertanyaan": "Product roadmap adalah?", "pilihan": ["Rencana pengembangan produk", "Peta lokasi", "Kode program", "Desain UI"], "jawaban": 0 },
        { "pertanyaan": "Sprint dalam Agile?", "pilihan": ["Iterasi pengembangan", "Balapan", "Meeting", "Dokumentasi"], "jawaban": 0 },
        { "pertanyaan": "MVP (Minimum Viable Product)?", "pilihan": ["Produk dengan fitur minimum", "Produk mahal", "Produk final", "Produk rusak"], "jawaban": 0 },
        { "pertanyaan": "Stakeholder adalah?", "pilihan": ["Pihak yang berkepentingan", "Pengguna akhir", "Developer", "Desainer"], "jawaban": 0 }
      ]
    },
    {
      id: "q083", kelasId: "k013", babKe: 3,
      soal: [
        { "pertanyaan": "Sprint dalam Agile?", "pilihan": ["Iterasi pengembangan", "Balapan", "Meeting", "Dokumentasi"], "jawaban": 0 },
        { "pertanyaan": "Stakeholder adalah?", "pilihan": ["Pihak yang berkepentingan", "Pengguna akhir", "Developer", "Desainer"], "jawaban": 0 },
        { "pertanyaan": "Product roadmap adalah?", "pilihan": ["Rencana pengembangan produk", "Peta lokasi", "Kode program", "Desain UI"], "jawaban": 0 },
        { "pertanyaan": "MVP (Minimum Viable Product)?", "pilihan": ["Produk dengan fitur minimum", "Produk mahal", "Produk final", "Produk rusak"], "jawaban": 0 },
        { "pertanyaan": "Product Manager bertugas?", "pilihan": ["Mengelola produk", "Mengelola server", "Menulis kode", "Desain grafis"], "jawaban": 0 }
      ]
    },
    {
      id: "q084", kelasId: "k013", babKe: 4,
      soal: [
        { "pertanyaan": "Product roadmap adalah?", "pilihan": ["Rencana pengembangan produk", "Peta lokasi", "Kode program", "Desain UI"], "jawaban": 0 },
        { "pertanyaan": "Product Manager bertugas?", "pilihan": ["Mengelola produk", "Mengelola server", "Menulis kode", "Desain grafis"], "jawaban": 0 },
        { "pertanyaan": "Stakeholder adalah?", "pilihan": ["Pihak yang berkepentingan", "Pengguna akhir", "Developer", "Desainer"], "jawaban": 0 },
        { "pertanyaan": "Sprint dalam Agile?", "pilihan": ["Iterasi pengembangan", "Balapan", "Meeting", "Dokumentasi"], "jawaban": 0 },
        { "pertanyaan": "MVP (Minimum Viable Product)?", "pilihan": ["Produk dengan fitur minimum", "Produk mahal", "Produk final", "Produk rusak"], "jawaban": 0 }
      ]
    },
    {
      id: "q085", kelasId: "k014", babKe: 1,
      soal: [
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 },
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 },
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 }
      ]
    },
    {
      id: "q086", kelasId: "k014", babKe: 2,
      soal: [
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 },
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 },
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 }
      ]
    },
    {
      id: "q087", kelasId: "k014", babKe: 3,
      soal: [
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 },
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 },
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 }
      ]
    },
    {
      id: "q088", kelasId: "k014", babKe: 4,
      soal: [
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 },
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 }
      ]
    },
    {
      id: "q089", kelasId: "k014", babKe: 5,
      soal: [
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 },
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 }
      ]
    },
    {
      id: "q090", kelasId: "k014", babKe: 6,
      soal: [
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 },
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 }
      ]
    },
    {
      id: "q091", kelasId: "k014", babKe: 7,
      soal: [
        { "pertanyaan": "Activity adalah?", "pilihan": ["Screen/UI component", "Data class", "Background service", "Layout file"], "jawaban": 0 },
        { "pertanyaan": "Jetpack Compose digunakan?", "pilihan": ["UI deklaratif", "Database", "Navigation", "Animation"], "jawaban": 0 },
        { "pertanyaan": "Kotlin adalah bahasa untuk?", "pilihan": ["Android development", "iOS development", "Web backend", "Game dev"], "jawaban": 0 },
        { "pertanyaan": "MVVM singkatan dari?", "pilihan": ["Model-View-ViewModel", "Model-View-Controller", "Model-View-Presenter", "View-ViewModel-Model"], "jawaban": 0 },
        { "pertanyaan": "val vs var di Kotlin?", "pilihan": ["val immutable, var mutable", "var immutable, val mutable", "Sama saja", "Tidak ada var"], "jawaban": 0 }
      ]
    },
    {
      id: "q092", kelasId: "k015", babKe: 1,
      soal: [
        { "pertanyaan": "IoT singkatan dari?", "pilihan": ["Internet of Things", "Input Output Terminal", "Internal Operating Tool", "Integrated Object Technology"], "jawaban": 0 },
        { "pertanyaan": "Aktuator pada IoT?", "pilihan": ["Menggerakkan perangkat fisik", "Membaca sensor", "Menyimpan log", "Enkripsi"], "jawaban": 0 },
        { "pertanyaan": "Sensor pada IoT berfungsi?", "pilihan": ["Mendeteksi lingkungan", "Menyimpan data", "Mengirim data", "Display"], "jawaban": 0 },
        { "pertanyaan": "ESP32 memiliki fitur?", "pilihan": ["WiFi & Bluetooth", "4G LTE", "NFC", "GPS"], "jawaban": 0 },
        { "pertanyaan": "Arduino adalah?", "pilihan": ["Mikrokontroler", "Komputer", "Smartphone", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q093", kelasId: "k015", babKe: 2,
      soal: [
        { "pertanyaan": "Sensor pada IoT berfungsi?", "pilihan": ["Mendeteksi lingkungan", "Menyimpan data", "Mengirim data", "Display"], "jawaban": 0 },
        { "pertanyaan": "Arduino adalah?", "pilihan": ["Mikrokontroler", "Komputer", "Smartphone", "Router"], "jawaban": 0 },
        { "pertanyaan": "Aktuator pada IoT?", "pilihan": ["Menggerakkan perangkat fisik", "Membaca sensor", "Menyimpan log", "Enkripsi"], "jawaban": 0 },
        { "pertanyaan": "IoT singkatan dari?", "pilihan": ["Internet of Things", "Input Output Terminal", "Internal Operating Tool", "Integrated Object Technology"], "jawaban": 0 },
        { "pertanyaan": "ESP32 memiliki fitur?", "pilihan": ["WiFi & Bluetooth", "4G LTE", "NFC", "GPS"], "jawaban": 0 }
      ]
    },
    {
      id: "q094", kelasId: "k015", babKe: 3,
      soal: [
        { "pertanyaan": "IoT singkatan dari?", "pilihan": ["Internet of Things", "Input Output Terminal", "Internal Operating Tool", "Integrated Object Technology"], "jawaban": 0 },
        { "pertanyaan": "ESP32 memiliki fitur?", "pilihan": ["WiFi & Bluetooth", "4G LTE", "NFC", "GPS"], "jawaban": 0 },
        { "pertanyaan": "Arduino adalah?", "pilihan": ["Mikrokontroler", "Komputer", "Smartphone", "Router"], "jawaban": 0 },
        { "pertanyaan": "Sensor pada IoT berfungsi?", "pilihan": ["Mendeteksi lingkungan", "Menyimpan data", "Mengirim data", "Display"], "jawaban": 0 },
        { "pertanyaan": "Aktuator pada IoT?", "pilihan": ["Menggerakkan perangkat fisik", "Membaca sensor", "Menyimpan log", "Enkripsi"], "jawaban": 0 }
      ]
    },
    {
      id: "q095", kelasId: "k015", babKe: 4,
      soal: [
        { "pertanyaan": "Sensor pada IoT berfungsi?", "pilihan": ["Mendeteksi lingkungan", "Menyimpan data", "Mengirim data", "Display"], "jawaban": 0 },
        { "pertanyaan": "IoT singkatan dari?", "pilihan": ["Internet of Things", "Input Output Terminal", "Internal Operating Tool", "Integrated Object Technology"], "jawaban": 0 },
        { "pertanyaan": "Arduino adalah?", "pilihan": ["Mikrokontroler", "Komputer", "Smartphone", "Router"], "jawaban": 0 },
        { "pertanyaan": "Aktuator pada IoT?", "pilihan": ["Menggerakkan perangkat fisik", "Membaca sensor", "Menyimpan log", "Enkripsi"], "jawaban": 0 },
        { "pertanyaan": "ESP32 memiliki fitur?", "pilihan": ["WiFi & Bluetooth", "4G LTE", "NFC", "GPS"], "jawaban": 0 }
      ]
    },
    {
      id: "q096", kelasId: "k015", babKe: 5,
      soal: [
        { "pertanyaan": "ESP32 memiliki fitur?", "pilihan": ["WiFi & Bluetooth", "4G LTE", "NFC", "GPS"], "jawaban": 0 },
        { "pertanyaan": "Sensor pada IoT berfungsi?", "pilihan": ["Mendeteksi lingkungan", "Menyimpan data", "Mengirim data", "Display"], "jawaban": 0 },
        { "pertanyaan": "IoT singkatan dari?", "pilihan": ["Internet of Things", "Input Output Terminal", "Internal Operating Tool", "Integrated Object Technology"], "jawaban": 0 },
        { "pertanyaan": "Aktuator pada IoT?", "pilihan": ["Menggerakkan perangkat fisik", "Membaca sensor", "Menyimpan log", "Enkripsi"], "jawaban": 0 },
        { "pertanyaan": "Arduino adalah?", "pilihan": ["Mikrokontroler", "Komputer", "Smartphone", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q097", kelasId: "k016", babKe: 1,
      soal: [
        { "pertanyaan": "AWS adalah?", "pilihan": ["Cloud computing platform", "Database", "Web server", "Antivirus"], "jawaban": 0 },
        { "pertanyaan": "EC2 adalah layanan untuk?", "pilihan": ["Virtual server", "Object storage", "Database", "CDN"], "jawaban": 0 },
        { "pertanyaan": "S3 digunakan?", "pilihan": ["Object storage", "Compute", "Database", "Networking"], "jawaban": 0 },
        { "pertanyaan": "AWS Lambda adalah?", "pilihan": ["Serverless compute", "Database", "Storage", "CDN"], "jawaban": 0 },
        { "pertanyaan": "IAM digunakan untuk?", "pilihan": ["Manajemen akses", "Computing", "Storage", "Monitoring"], "jawaban": 0 }
      ]
    },
    {
      id: "q098", kelasId: "k016", babKe: 2,
      soal: [
        { "pertanyaan": "AWS adalah?", "pilihan": ["Cloud computing platform", "Database", "Web server", "Antivirus"], "jawaban": 0 },
        { "pertanyaan": "IAM digunakan untuk?", "pilihan": ["Manajemen akses", "Computing", "Storage", "Monitoring"], "jawaban": 0 },
        { "pertanyaan": "S3 digunakan?", "pilihan": ["Object storage", "Compute", "Database", "Networking"], "jawaban": 0 },
        { "pertanyaan": "AWS Lambda adalah?", "pilihan": ["Serverless compute", "Database", "Storage", "CDN"], "jawaban": 0 },
        { "pertanyaan": "EC2 adalah layanan untuk?", "pilihan": ["Virtual server", "Object storage", "Database", "CDN"], "jawaban": 0 }
      ]
    },
    {
      id: "q099", kelasId: "k016", babKe: 3,
      soal: [
        { "pertanyaan": "AWS Lambda adalah?", "pilihan": ["Serverless compute", "Database", "Storage", "CDN"], "jawaban": 0 },
        { "pertanyaan": "IAM digunakan untuk?", "pilihan": ["Manajemen akses", "Computing", "Storage", "Monitoring"], "jawaban": 0 },
        { "pertanyaan": "S3 digunakan?", "pilihan": ["Object storage", "Compute", "Database", "Networking"], "jawaban": 0 },
        { "pertanyaan": "EC2 adalah layanan untuk?", "pilihan": ["Virtual server", "Object storage", "Database", "CDN"], "jawaban": 0 },
        { "pertanyaan": "AWS adalah?", "pilihan": ["Cloud computing platform", "Database", "Web server", "Antivirus"], "jawaban": 0 }
      ]
    },
    {
      id: "q100", kelasId: "k016", babKe: 4,
      soal: [
        { "pertanyaan": "Firewall berfungsi?", "pilihan": ["Filter lalu lintas jaringan", "Antivirus", "Enkripsi", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Ethical hacking adalah?", "pilihan": ["Hacking legal untuk keamanan", "Hacking ilegal", "Virus", "Malware"], "jawaban": 0 },
        { "pertanyaan": "XSS adalah serangan?", "pilihan": ["Cross-site scripting", "SQL injection", "DoS", "Phishing"], "jawaban": 0 },
        { "pertanyaan": "Enkripsi data bertujuan?", "pilihan": ["Melindungi data dari akses ilegal", "Mempercepat transfer", "Mengompres data", "Validasi"], "jawaban": 0 },
        { "pertanyaan": "SQL Injection menyerang?", "pilihan": ["Database query", "Network", "Email", "File system"], "jawaban": 0 }
      ]
    },
    {
      id: "q101", kelasId: "k016", babKe: 5,
      soal: [
        { "pertanyaan": "AWS Lambda adalah?", "pilihan": ["Serverless compute", "Database", "Storage", "CDN"], "jawaban": 0 },
        { "pertanyaan": "S3 digunakan?", "pilihan": ["Object storage", "Compute", "Database", "Networking"], "jawaban": 0 },
        { "pertanyaan": "EC2 adalah layanan untuk?", "pilihan": ["Virtual server", "Object storage", "Database", "CDN"], "jawaban": 0 },
        { "pertanyaan": "AWS adalah?", "pilihan": ["Cloud computing platform", "Database", "Web server", "Antivirus"], "jawaban": 0 },
        { "pertanyaan": "IAM digunakan untuk?", "pilihan": ["Manajemen akses", "Computing", "Storage", "Monitoring"], "jawaban": 0 }
      ]
    },
    {
      id: "q102", kelasId: "k017", babKe: 1,
      soal: [
        { "pertanyaan": "SQL adalah bahasa untuk?", "pilihan": ["Manajemen database", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "JOIN digunakan untuk?", "pilihan": ["Menggabungkan tabel", "Membuat tabel", "Menghapus tabel", "Filter data"], "jawaban": 0 },
        { "pertanyaan": "SELECT digunakan untuk?", "pilihan": ["Mengambil data", "Menyisipkan data", "Mengupdate data", "Menghapus data"], "jawaban": 0 },
        { "pertanyaan": "Normalisasi database bertujuan?", "pilihan": ["Mengurangi redundansi", "Meningkatkan kecepatan", "Enkripsi data", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Primary key adalah?", "pilihan": ["ID unik setiap baris", "Key asing", "Index", "Constraint"], "jawaban": 0 }
      ]
    },
    {
      id: "q103", kelasId: "k017", babKe: 2,
      soal: [
        { "pertanyaan": "JOIN digunakan untuk?", "pilihan": ["Menggabungkan tabel", "Membuat tabel", "Menghapus tabel", "Filter data"], "jawaban": 0 },
        { "pertanyaan": "SELECT digunakan untuk?", "pilihan": ["Mengambil data", "Menyisipkan data", "Mengupdate data", "Menghapus data"], "jawaban": 0 },
        { "pertanyaan": "Normalisasi database bertujuan?", "pilihan": ["Mengurangi redundansi", "Meningkatkan kecepatan", "Enkripsi data", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Primary key adalah?", "pilihan": ["ID unik setiap baris", "Key asing", "Index", "Constraint"], "jawaban": 0 },
        { "pertanyaan": "SQL adalah bahasa untuk?", "pilihan": ["Manajemen database", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 }
      ]
    },
    {
      id: "q104", kelasId: "k017", babKe: 3,
      soal: [
        { "pertanyaan": "SQL adalah bahasa untuk?", "pilihan": ["Manajemen database", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "SELECT digunakan untuk?", "pilihan": ["Mengambil data", "Menyisipkan data", "Mengupdate data", "Menghapus data"], "jawaban": 0 },
        { "pertanyaan": "JOIN digunakan untuk?", "pilihan": ["Menggabungkan tabel", "Membuat tabel", "Menghapus tabel", "Filter data"], "jawaban": 0 },
        { "pertanyaan": "Primary key adalah?", "pilihan": ["ID unik setiap baris", "Key asing", "Index", "Constraint"], "jawaban": 0 },
        { "pertanyaan": "Normalisasi database bertujuan?", "pilihan": ["Mengurangi redundansi", "Meningkatkan kecepatan", "Enkripsi data", "Backup"], "jawaban": 0 }
      ]
    },
    {
      id: "q105", kelasId: "k017", babKe: 4,
      soal: [
        { "pertanyaan": "SQL adalah bahasa untuk?", "pilihan": ["Manajemen database", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "Primary key adalah?", "pilihan": ["ID unik setiap baris", "Key asing", "Index", "Constraint"], "jawaban": 0 },
        { "pertanyaan": "SELECT digunakan untuk?", "pilihan": ["Mengambil data", "Menyisipkan data", "Mengupdate data", "Menghapus data"], "jawaban": 0 },
        { "pertanyaan": "Normalisasi database bertujuan?", "pilihan": ["Mengurangi redundansi", "Meningkatkan kecepatan", "Enkripsi data", "Backup"], "jawaban": 0 },
        { "pertanyaan": "JOIN digunakan untuk?", "pilihan": ["Menggabungkan tabel", "Membuat tabel", "Menghapus tabel", "Filter data"], "jawaban": 0 }
      ]
    },
    {
      id: "q106", kelasId: "k017", babKe: 5,
      soal: [
        { "pertanyaan": "Normalisasi database bertujuan?", "pilihan": ["Mengurangi redundansi", "Meningkatkan kecepatan", "Enkripsi data", "Backup"], "jawaban": 0 },
        { "pertanyaan": "Primary key adalah?", "pilihan": ["ID unik setiap baris", "Key asing", "Index", "Constraint"], "jawaban": 0 },
        { "pertanyaan": "SQL adalah bahasa untuk?", "pilihan": ["Manajemen database", "Web development", "Game dev", "Mobile dev"], "jawaban": 0 },
        { "pertanyaan": "SELECT digunakan untuk?", "pilihan": ["Mengambil data", "Menyisipkan data", "Mengupdate data", "Menghapus data"], "jawaban": 0 },
        { "pertanyaan": "JOIN digunakan untuk?", "pilihan": ["Menggabungkan tabel", "Membuat tabel", "Menghapus tabel", "Filter data"], "jawaban": 0 }
      ]
    },
    {
      id: "q107", kelasId: "k018", babKe: 1,
      soal: [
        { "pertanyaan": "Customer service penting?", "pilihan": ["Meningkatkan kepuasan", "Menurunkan harga", "Mengurangi stok", "Mempercepat produksi"], "jawaban": 0 },
        { "pertanyaan": "Marketplace contohnya?", "pilihan": ["Tokopedia, Shopee", "Gmail, Yahoo", "YouTube, TikTok", "Zoom, Meet"], "jawaban": 0 },
        { "pertanyaan": "Logistik e-commerce?", "pilihan": ["Pengiriman produk", "Pemasaran", "Produksi", "Keuangan"], "jawaban": 0 },
        { "pertanyaan": "Pricing strategy adalah?", "pilihan": ["Strategi harga", "Strategi produk", "Strategi distribusi", "Strategi promosi"], "jawaban": 0 },
        { "pertanyaan": "E-commerce adalah?", "pilihan": ["Bisnis online", "Toko fisik", "Jasa kurir", "Platform sosial"], "jawaban": 0 }
      ]
    },
    {
      id: "q108", kelasId: "k018", babKe: 2,
      soal: [
        { "pertanyaan": "Customer service penting?", "pilihan": ["Meningkatkan kepuasan", "Menurunkan harga", "Mengurangi stok", "Mempercepat produksi"], "jawaban": 0 },
        { "pertanyaan": "E-commerce adalah?", "pilihan": ["Bisnis online", "Toko fisik", "Jasa kurir", "Platform sosial"], "jawaban": 0 },
        { "pertanyaan": "Pricing strategy adalah?", "pilihan": ["Strategi harga", "Strategi produk", "Strategi distribusi", "Strategi promosi"], "jawaban": 0 },
        { "pertanyaan": "Marketplace contohnya?", "pilihan": ["Tokopedia, Shopee", "Gmail, Yahoo", "YouTube, TikTok", "Zoom, Meet"], "jawaban": 0 },
        { "pertanyaan": "Logistik e-commerce?", "pilihan": ["Pengiriman produk", "Pemasaran", "Produksi", "Keuangan"], "jawaban": 0 }
      ]
    },
    {
      id: "q109", kelasId: "k018", babKe: 3,
      soal: [
        { "pertanyaan": "MVP (Minimum Viable Product)?", "pilihan": ["Produk dengan fitur minimum", "Produk mahal", "Produk final", "Produk rusak"], "jawaban": 0 },
        { "pertanyaan": "Sprint dalam Agile?", "pilihan": ["Iterasi pengembangan", "Balapan", "Meeting", "Dokumentasi"], "jawaban": 0 },
        { "pertanyaan": "Stakeholder adalah?", "pilihan": ["Pihak yang berkepentingan", "Pengguna akhir", "Developer", "Desainer"], "jawaban": 0 },
        { "pertanyaan": "Product Manager bertugas?", "pilihan": ["Mengelola produk", "Mengelola server", "Menulis kode", "Desain grafis"], "jawaban": 0 },
        { "pertanyaan": "Product roadmap adalah?", "pilihan": ["Rencana pengembangan produk", "Peta lokasi", "Kode program", "Desain UI"], "jawaban": 0 }
      ]
    },
    {
      id: "q110", kelasId: "k018", babKe: 4,
      soal: [
        { "pertanyaan": "Customer service penting?", "pilihan": ["Meningkatkan kepuasan", "Menurunkan harga", "Mengurangi stok", "Mempercepat produksi"], "jawaban": 0 },
        { "pertanyaan": "Pricing strategy adalah?", "pilihan": ["Strategi harga", "Strategi produk", "Strategi distribusi", "Strategi promosi"], "jawaban": 0 },
        { "pertanyaan": "Marketplace contohnya?", "pilihan": ["Tokopedia, Shopee", "Gmail, Yahoo", "YouTube, TikTok", "Zoom, Meet"], "jawaban": 0 },
        { "pertanyaan": "Logistik e-commerce?", "pilihan": ["Pengiriman produk", "Pemasaran", "Produksi", "Keuangan"], "jawaban": 0 },
        { "pertanyaan": "E-commerce adalah?", "pilihan": ["Bisnis online", "Toko fisik", "Jasa kurir", "Platform sosial"], "jawaban": 0 }
      ]
    },
    {
      id: "q111", kelasId: "k019", babKe: 1,
      soal: [
        { "pertanyaan": "Vue.js adalah?", "pilihan": ["JavaScript framework", "CSS framework", "Database", "Server"], "jawaban": 0 },
        { "pertanyaan": "Vue Router digunakan?", "pilihan": ["Navigasi halaman", "State management", "Styling", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Reactivity di Vue?", "pilihan": ["Update otomatis saat data berubah", "Manual update", "Hard refresh", "Cache"], "jawaban": 0 },
        { "pertanyaan": "Pinia adalah?", "pilihan": ["State management Vue", "Router library", "Testing", "Styling"], "jawaban": 0 },
        { "pertanyaan": "Composition API adalah?", "pilihan": ["API baru Vue 3", "CSS library", "Database", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q112", kelasId: "k019", babKe: 2,
      soal: [
        { "pertanyaan": "Composition API adalah?", "pilihan": ["API baru Vue 3", "CSS library", "Database", "Router"], "jawaban": 0 },
        { "pertanyaan": "Reactivity di Vue?", "pilihan": ["Update otomatis saat data berubah", "Manual update", "Hard refresh", "Cache"], "jawaban": 0 },
        { "pertanyaan": "Vue Router digunakan?", "pilihan": ["Navigasi halaman", "State management", "Styling", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Pinia adalah?", "pilihan": ["State management Vue", "Router library", "Testing", "Styling"], "jawaban": 0 },
        { "pertanyaan": "Vue.js adalah?", "pilihan": ["JavaScript framework", "CSS framework", "Database", "Server"], "jawaban": 0 }
      ]
    },
    {
      id: "q113", kelasId: "k019", babKe: 3,
      soal: [
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 }
      ]
    },
    {
      id: "q114", kelasId: "k019", babKe: 4,
      soal: [
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q115", kelasId: "k019", babKe: 5,
      soal: [
        { "pertanyaan": "Virtual DOM manfaatnya?", "pilihan": ["Optimasi rendering", "Database virtual", "Virtual server", "Memory virtual"], "jawaban": 0 },
        { "pertanyaan": "Props di React?", "pilihan": ["Data dari parent ke child", "Data lokal komponen", "Event handler", "Style object"], "jawaban": 0 },
        { "pertanyaan": "useEffect digunakan untuk?", "pilihan": ["Side effect", "State management", "Routing", "Form handling"], "jawaban": 0 },
        { "pertanyaan": "JSX adalah?", "pilihan": ["Extension syntax JS untuk HTML", "CSS framework", "Database", "Library animasi"], "jawaban": 0 },
        { "pertanyaan": "useState adalah?", "pilihan": ["Hook untuk state", "Hook untuk effect", "Hook untuk context", "Hook untuk router"], "jawaban": 0 }
      ]
    },
    {
      id: "q116", kelasId: "k019", babKe: 6,
      soal: [
        { "pertanyaan": "Vue.js adalah?", "pilihan": ["JavaScript framework", "CSS framework", "Database", "Server"], "jawaban": 0 },
        { "pertanyaan": "Pinia adalah?", "pilihan": ["State management Vue", "Router library", "Testing", "Styling"], "jawaban": 0 },
        { "pertanyaan": "Reactivity di Vue?", "pilihan": ["Update otomatis saat data berubah", "Manual update", "Hard refresh", "Cache"], "jawaban": 0 },
        { "pertanyaan": "Vue Router digunakan?", "pilihan": ["Navigasi halaman", "State management", "Styling", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Composition API adalah?", "pilihan": ["API baru Vue 3", "CSS library", "Database", "Router"], "jawaban": 0 }
      ]
    },
    {
      id: "q117", kelasId: "k020", babKe: 1,
      soal: [
        { "pertanyaan": "Wireframe adalah?", "pilihan": ["Sketsa kasar layout", "Kode final", "Prototype lengkap", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Design system berisi?", "pilihan": ["Kumpulan komponen desain", "Kode server", "Database", "API"], "jawaban": 0 },
        { "pertanyaan": "User research bertujuan?", "pilihan": ["Memahami kebutuhan user", "Membuat desain", "Testing code", "Marketing"], "jawaban": 0 },
        { "pertanyaan": "UI vs UX, perbedaannya?", "pilihan": ["UI tampilan, UX pengalaman", "Sama saja", "UI fungsi, UX tampilan", "UX lebih penting"], "jawaban": 0 },
        { "pertanyaan": "Usability testing?", "pilihan": ["Menguji kemudahan penggunaan", "Testing keamanan", "Testing performa", "Testing kode"], "jawaban": 0 }
      ]
    },
    {
      id: "q118", kelasId: "k020", babKe: 2,
      soal: [
        { "pertanyaan": "Design system berisi?", "pilihan": ["Kumpulan komponen desain", "Kode server", "Database", "API"], "jawaban": 0 },
        { "pertanyaan": "Wireframe adalah?", "pilihan": ["Sketsa kasar layout", "Kode final", "Prototype lengkap", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "Usability testing?", "pilihan": ["Menguji kemudahan penggunaan", "Testing keamanan", "Testing performa", "Testing kode"], "jawaban": 0 },
        { "pertanyaan": "User research bertujuan?", "pilihan": ["Memahami kebutuhan user", "Membuat desain", "Testing code", "Marketing"], "jawaban": 0 },
        { "pertanyaan": "UI vs UX, perbedaannya?", "pilihan": ["UI tampilan, UX pengalaman", "Sama saja", "UI fungsi, UX tampilan", "UX lebih penting"], "jawaban": 0 }
      ]
    },
    {
      id: "q119", kelasId: "k020", babKe: 3,
      soal: [
        { "pertanyaan": "Figma adalah tools untuk?", "pilihan": ["Desain UI/UX", "Edit video", "Menulis kode", "Manajemen proyek"], "jawaban": 0 },
        { "pertanyaan": "Shortcut frame di Figma?", "pilihan": ["F", "R", "A", "G"], "jawaban": 0 },
        { "pertanyaan": "Auto Layout di Figma?", "pilihan": ["Layout otomatis", "Animasi", "Plugin", "Export"], "jawaban": 0 },
        { "pertanyaan": "Prototype di Figma digunakan?", "pilihan": ["Simulasi interaksi", "Edit vector", "Buat shape", "Warna"], "jawaban": 0 },
        { "pertanyaan": "Component di Figma berguna untuk?", "pilihan": ["Komponen reusable", "Efek warna", "Font style", "Grid layout"], "jawaban": 0 }
      ]
    },
    {
      id: "q120", kelasId: "k020", babKe: 4,
      soal: [
        { "pertanyaan": "Design system berisi?", "pilihan": ["Kumpulan komponen desain", "Kode server", "Database", "API"], "jawaban": 0 },
        { "pertanyaan": "Wireframe adalah?", "pilihan": ["Sketsa kasar layout", "Kode final", "Prototype lengkap", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "UI vs UX, perbedaannya?", "pilihan": ["UI tampilan, UX pengalaman", "Sama saja", "UI fungsi, UX tampilan", "UX lebih penting"], "jawaban": 0 },
        { "pertanyaan": "Usability testing?", "pilihan": ["Menguji kemudahan penggunaan", "Testing keamanan", "Testing performa", "Testing kode"], "jawaban": 0 },
        { "pertanyaan": "User research bertujuan?", "pilihan": ["Memahami kebutuhan user", "Membuat desain", "Testing code", "Marketing"], "jawaban": 0 }
      ]
    },
    {
      id: "q121", kelasId: "k020", babKe: 5,
      soal: [
        { "pertanyaan": "Design system berisi?", "pilihan": ["Kumpulan komponen desain", "Kode server", "Database", "API"], "jawaban": 0 },
        { "pertanyaan": "User research bertujuan?", "pilihan": ["Memahami kebutuhan user", "Membuat desain", "Testing code", "Marketing"], "jawaban": 0 },
        { "pertanyaan": "Usability testing?", "pilihan": ["Menguji kemudahan penggunaan", "Testing keamanan", "Testing performa", "Testing kode"], "jawaban": 0 },
        { "pertanyaan": "UI vs UX, perbedaannya?", "pilihan": ["UI tampilan, UX pengalaman", "Sama saja", "UI fungsi, UX tampilan", "UX lebih penting"], "jawaban": 0 },
        { "pertanyaan": "Wireframe adalah?", "pilihan": ["Sketsa kasar layout", "Kode final", "Prototype lengkap", "Animasi"], "jawaban": 0 }
      ]
    },
    {
      id: "q122", kelasId: "k020", babKe: 6,
      soal: [
        { "pertanyaan": "Usability testing?", "pilihan": ["Menguji kemudahan penggunaan", "Testing keamanan", "Testing performa", "Testing kode"], "jawaban": 0 },
        { "pertanyaan": "Design system berisi?", "pilihan": ["Kumpulan komponen desain", "Kode server", "Database", "API"], "jawaban": 0 },
        { "pertanyaan": "UI vs UX, perbedaannya?", "pilihan": ["UI tampilan, UX pengalaman", "Sama saja", "UI fungsi, UX tampilan", "UX lebih penting"], "jawaban": 0 },
        { "pertanyaan": "Wireframe adalah?", "pilihan": ["Sketsa kasar layout", "Kode final", "Prototype lengkap", "Animasi"], "jawaban": 0 },
        { "pertanyaan": "User research bertujuan?", "pilihan": ["Memahami kebutuhan user", "Membuat desain", "Testing code", "Marketing"], "jawaban": 0 }
      ]
    }
  ]
  ;
const SEED_ULASAN = [
  { id: "ul001", kelasId: "k001", userId: "u001", userName: "Geget Wijaya", rating: 5, komentar: "Sangat mudah dipahami, materinya lengkap!", tanggal: "2025-01-10" },
  { id: "ul002", kelasId: "k002", userId: "u004", userName: "Budi Saryono", rating: 4, komentar: "Penjelasan tentang closure sangat jelas.", tanggal: "2025-02-05" },
  { id: "ul003", kelasId: "k003", userId: "u005", userName: "Rizky Ramadhan", rating: 5, komentar: "Figma jadi tools favoritku setelah ikut kelas ini.", tanggal: "2025-03-05" },
  { id: "ul004", kelasId: "k004", userId: "u006", userName: "Andi Prasetyo", rating: 4, komentar: "React jadi lebih mudah dipahami dengan kursus ini.", tanggal: "2025-03-01" },
  { id: "ul005", kelasId: "k005", userId: "u007", userName: "Budi Santoso", rating: 5, komentar: "Pandas dan NumPy dijelaskan dengan praktik langsung.", tanggal: "2025-03-10" }
];

const SEED_TRANSAKSI = [
  { id: "t001", userId: "u001", items: ["k001"], total: 150000, metode: "transfer", status: "sukses", tanggal: "2025-01-05", paketDurasi: 12, tanggalBerakhir: "2026-01-05T00:00:00.000Z" },
  { id: "t002", userId: "u004", items: ["k002"], total: 200000, metode: "transfer", status: "sukses", tanggal: "2025-01-20", paketDurasi: 12, tanggalBerakhir: "2026-01-20T00:00:00.000Z" },
  { id: "t003", userId: "u005", items: ["k003"], total: 0, metode: "gratis", status: "sukses", tanggal: "2025-02-01", paketDurasi: 12, tanggalBerakhir: "2026-02-01T00:00:00.000Z" },
  { id: "t004", userId: "u006", items: ["k004"], total: 350000, metode: "transfer", status: "sukses", tanggal: "2025-02-10", paketDurasi: 12, tanggalBerakhir: "2026-02-10T00:00:00.000Z" },
  { id: "t005", userId: "u007", items: ["k005"], total: 250000, metode: "transfer", status: "sukses", tanggal: "2025-02-15", paketDurasi: 12, tanggalBerakhir: "2026-02-15T00:00:00.000Z" }
];

const SEED_NOTIFIKASI = [
  { id: "n001", userId: "u001", pesan: "Selamat datang di Platform E-Learning! Mulai perjalanan belajarmu sekarang.", dibaca: false, tanggal: "2025-01-01" },
  { id: "n002", userId: "u001", pesan: "Kelas 'Belajar HTML & CSS dari Nol' berhasil dibeli. Selamat belajar!", dibaca: false, tanggal: "2025-01-10" },
  { id: "n003", userId: "u001", pesan: "Kuis Bab 1 — HTML Dasar tersedia. Kerjakan sekarang!", dibaca: false, tanggal: "2025-01-12" },
  { id: "n004", userId: "u001", pesan: "Kelas 'JavaScript untuk Pemula' berhasil dibeli. Selamat belajar!", dibaca: false, tanggal: "2025-02-01" },
  { id: "n005", userId: "u001", pesan: "Jadwal sesi tatap muka 'Review HTML & CSS' besok pukul 10:00 WIB. Jangan lewatkan!", dibaca: false, tanggal: "2025-02-05" },
  { id: "n006", userId: "u001", pesan: "Kamu mendapatkan sertifikat 'Belajar HTML & CSS dari Nol'! Lihat di halaman sertifikat.", dibaca: false, tanggal: "2025-03-01" },
  { id: "n007", userId: "u001", pesan: "Instruktur Sari Dewi membalas pertanyaanmu di forum diskusi.", dibaca: false, tanggal: "2025-03-10" },
  { id: "n008", userId: "u001", pesan: "Kelas 'React.js Fundamental' sedang diskon 30%! Hanya berlaku 3 hari.", dibaca: false, tanggal: "2025-04-01" },
  { id: "n009", userId: "u001", pesan: "Kupon diskon EDUKITA10 sudah bisa digunakan untuk kelas apa pun.", dibaca: false, tanggal: "2025-04-05" },
  { id: "n010", userId: "u001", pesan: "Paket akses kelas 'JavaScript untuk Pemula' akan berakhir dalam 7 hari. Perpanjang sekarang!", dibaca: false, tanggal: "2025-05-01" },
  { id: "n011", userId: "u002", pesan: "Kelas 'Belajar HTML & CSS dari Nol' dibeli oleh Budi Santoso. Pendapatan +Rp105.000.", dibaca: false, tanggal: "2025-01-10" },
  { id: "n012", userId: "u002", pesan: "Kelas 'JavaScript untuk Pemula' dibeli oleh Budi Santoso. Pendapatan +Rp140.000.", dibaca: false, tanggal: "2025-02-01" },
  { id: "n013", userId: "u002", pesan: "Kelas 'Python untuk Data Science' dibeli oleh Budi Santoso. Pendapatan +Rp175.000.", dibaca: false, tanggal: "2025-03-10" },
  { id: "n014", userId: "u002", pesan: "Anda memiliki permintaan penarikan saldo baru sebesar Rp500.000.", dibaca: false, tanggal: "2025-03-15" },
  { id: "n015", userId: "u002", pesan: "Penarikan saldo sebesar Rp500.000 telah berhasil diproses.", dibaca: false, tanggal: "2025-03-20" },
  { id: "n016", userId: "u002", pesan: "Kelas 'Ethical Hacking' yang Anda ajukan telah disetujui dan dipublikasikan.", dibaca: false, tanggal: "2025-03-25" },
  { id: "n017", userId: "u003", pesan: "Ada kelas baru yang perlu disetujui: 'Kotlin Android Development'.", dibaca: false, tanggal: "2025-04-01" },
  { id: "n018", userId: "u003", pesan: "Laporan bulanan: 12 transaksi baru bulan ini dengan total Rp3.200.000.", dibaca: false, tanggal: "2025-05-01" },
  { id: "n019", userId: "u003", pesan: "Ada 5 ulasan baru yang perlu dimoderasi.", dibaca: false, tanggal: "2025-05-05" },
  { id: "n020", userId: "u003", pesan: "Pengguna baru mendaftar: Rina Wulandari sebagai Siswa.", dibaca: false, tanggal: "2025-05-10" }
];

const SEED_KUPON = [
  { id: "kpn001", kode: "EDUKITA10", diskon: 10, kelasId: null, expired: "2026-12-31" },
  { id: "kpn002", kode: "HEMAT50", diskon: 50, kelasId: "k001", expired: "2026-12-31" },
  { id: "kpn003", kode: "FLUTTER25", diskon: 25, kelasId: "k006", expired: "2026-06-30" },
  { id: "kpn004", kode: "REACT20", diskon: 20, kelasId: "k004", expired: "2026-08-31" },
  { id: "kpn005", kode: "GRATISAKSES", diskon: 100, kelasId: null, expired: "2025-06-01" },
  { id: "kpn006", kode: "DISKON15", diskon: 15, kelasId: null, expired: "2026-10-31" },
  { id: "kpn007", kode: "DATA50", diskon: 50, kelasId: "k005", expired: "2026-09-30" },
  { id: "kpn008", kode: "MAHIR30", diskon: 30, kelasId: null, expired: "2026-12-31" },
  { id: "kpn009", kode: "ANGGOTA20", diskon: 20, kelasId: null, expired: "2025-12-31" },
  { id: "kpn010", kode: "LEBARAN50", diskon: 50, kelasId: null, expired: "2025-05-15" }
];
