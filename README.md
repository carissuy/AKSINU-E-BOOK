# AKSINU — Pustaka Kampus Digital

> **Platform Katalog & Repositori Ebook Digital Resmi Akademi Sistem Informasi NU Purworejo**  
> Ringan, Cepat, Responsif, Statis, dan Siap Deploy ke GitHub Pages / Vercel.

---

## 📖 Tentang AKSINU

**AKSINU (Akademi Sistem Informasi NU Purworejo)** menghadirkan platform perpustakaan digital berbasis website statis (*Single Page Application*) yang dirancang khusus untuk mempermudah civitas akademika dan mahasiswa dalam pencarian, pratinjau (*preview*), serta pengunduhan literatur digital akademik secara instan.

Koleksi buku disimpan di infrastruktur **Google Drive publik**, sehingga:
- Repositori proyek sangat ramping (**< 2 MB** di Git).
- Bebas dari penolakan batas ukuran berkas 100 MB di Git/GitHub.
- Pengunduhan dan pratinjau dokumen PDF berjalan cepat, stabil, dan berkecepatan tinggi melalui CDN Google.

---

## ✨ Fitur Utama

1. **Identitas Kampus & Desain Berbasis Logo**:
   - Memadukan logo resmi AKSINU dengan palet warna hijau tua (*Islamic Forest Green* `#0b4626`), hijau segar (*Tech Lime* `#6ea01e`), dan aksen bintang emas (`#c29737`).
2. **Pencarian Real-Time Menyeluruh**:
   - Temukan buku berdasarkan judul, nama penulis, topik, nomor ISBN, atau kode klasifikasi perpustakaan (**DDC / Dewey Decimal Classification**).
3. **Filter Kategori Bidang Ilmu Akademik & Tab Favorit**:
   - Kategori terstruktur: *Sistem Informasi, Jaringan Komputer, Python & Data Science, JavaScript & Web, Mobile Development, AI & Machine Learning, PHP & Backend, Database & SQL, Metodologi Riset, UI/UX & Desain, Struktur Data & Algoritma, Java & OOP, Cloud & DevOps, Manajemen & Bisnis, Ilmu Komputer, dll.*
4. **Fitur Bookmark / Koleksi Favorit Mahasiswa**:
   - Simpan dan tandai buku referensi kuliah langsung ke daftar favorit pribadi mahasiswa tanpa perlu login akun (tersimpan via `localStorage`).
5. **Dukungan PWA (Progressive Web App)**:
   - Dilengkapi `manifest.json` dan `sw.js` (Service Worker) sehingga dapat di-*install* langsung di layar utama smartphone (*Add to Home Screen*) dan bekerja cepat secara offline.
6. **Pembersihan Judul Otomatis (Smart Title Normalization)**:
   - Menghapus angka scraper, watermark situs (Z-Library, Libgen, Anna's Archive, PDFDrive), serta memisahkan nama penulis dan judul buku.
7. **Pratinjau & Unduh Langsung**:
   - **Tombol "Baca"**: Membuka Google Drive PDF viewer di tab baru.
   - **Tombol "Unduh"**: Memulai unduh berkas PDF langsung.
   - **Tombol "Detail"**: Membuka modal sinopsis lengkap dengan kode DDC, katalog ID, dan opsi pratinjau inline.
8. **Dark / Light Mode**:
   - Beralih tema gelap dan terang dengan kontras tajam (tersimpan otomatis di browser).
9. **Statistik Dinamis**:
   - Counter otomatis menghitung total koleksi, jumlah buku favorit, dan hasil pencarian.

---

## 📁 Struktur Berkas

```text
/ (Root)
│
├── index.html          # Halaman utama aplikasi web AKSINU
├── manifest.json       # Konfigurasi PWA (Progressive Web App)
├── sw.js               # Service Worker untuk offline caching
├── favicon.png         # Favicon resmi dari Logo AKSINU
├── Logo/
│   ├── LOGO AKSINU.jpeg            # Berkas logo asli institusi
│   ├── logo-aksinu-transparent.png # Logo berlatar transparan untuk web
│   ├── favicon-192.png             # Ikon PWA 192x192
│   └── logo-aksinu-512.png         # Ikon PWA 512x512
├── data/
│   └── books.js        # Basis data metadata 377 buku unik terverifikasi (bebas duplikat & judul bersih), DDC, ISBN, & Drive ID
├── js/
│   └── app.js          # Logika pencarian instan, filter kategori, favorit, modal, & PWA
├── css/
│   └── custom.css      # Tipografi Plus Jakarta Sans, scrollbar, dan transisi tema
├── ebook/              # Berkas PDF lokal dengan penamaan bersih (diabaikan oleh .gitignore)
├── google-apps-script/
│   ├── Code.gs         # Kode API Google Apps Script untuk sinkronisasi otomatis Drive
│   └── PANDUAN_SETUP_APPS_SCRIPT.md # Panduan instalasi dan deployment Apps Script
├── PROMPT_WEBSITE_AKSINU.md # Dokumen spesifikasi awal
└── README.md           # Panduan penggunaan dan dokumentasi proyek ini
```

---

## 🚀 Cara Menjalankan Secara Lokal (Localhost)

Tidak memerlukan instalasi `npm` atau dependensi server yang rumit:

1. **Cara Paling Praktis**:
   - Buka file `index.html` langsung dengan klik ganda (*double-click*) di File Explorer peramban Anda.
2. **Menggunakan Python Local Server**:
   - Jalankan perintah berikut di terminal folder proyek:
     ```bash
     python -m http.server 3000
     ```
   - Buka peramban di `http://localhost:3000`.

---

## 🌐 Panduan Deployment ke GitHub Pages (100% Statis & Gratis)

Karena website ini berarsitektur statis murni tanpa server backend:

1. Inisialisasi git dan commit perubahan:
   ```bash
   git init
   git add .
   git commit -m "feat: perbarui branding logo AKSINU, perbaiki kategori & nama buku"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/aksinu.git
   git push -u origin main
   ```
2. Buka repositori Anda di GitHub ➔ **Settings** ➔ **Pages**.
3. Di bagian **Build and deployment** ➔ **Source**, pilih **Deploy from a branch**.
4. Pilih branch **`main`** dan direktori **`/ (root)`**, lalu klik **Save**.
5. Tunggu 1–2 menit, website AKSINU Anda sudah aktif secara global di:  
   `https://USERNAME_ANDA.github.io/aksinu/`

*(Catatan: Folder `ebook/` otomatis diabaikan oleh `.gitignore` sehingga push ke GitHub tetap berukuran kecil < 2 MB dan tidak pernah tertolak oleh batas ukuran 100 MB).*

---

## 📄 Lisensi & Hak Cipta
Hak cipta materi buku tetap menjadi milik masing-masing penulis dan penerbit terkait. Platform AKSINU dirancang sebagai media kurasi literasi digital akademik untuk **Akademi Sistem Informasi NU Purworejo**.
