# AKSINU

> **Aplikasi Web Statis Katalog & Portal Ebook Digital Modern**  
> Ringan, Cepat, Responsif, dan Siap Deploy ke GitHub Pages / Vercel.

---

## 📖 Tentang AKSINU

**AKSINU** adalah platform perpustakaan digital berbasis website statis (*Single Page Application*) yang dirancang khusus untuk mempermudah pencarian, pratinjau (preview), dan pengunduhan buku digital secara langsung.

Koleksi buku disimpan di infrastruktur **Google Drive publik**, sehingga:
- Repositori proyek sangat ramping (**< 2 MB**).
- Tidak ada kendala batas ukuran file 100 MB di Git/GitHub.
- Pengunduhan dan pratinjau berkas PDF berjalan cepat dan stabil.

---

## ✨ Fitur Utama

1. **Pencarian Real-Time (Instant Search)**: Temukan buku berdasarkan judul, nama penulis, topik, atau kata kunci teknologi secara instan tanpa memuat ulang halaman.
2. **Filter Kategori Interaktif**: Pilah buku dengan cepat (Python & Data, JavaScript & Web, Mobile Dev, AI & Data Science, Cloud & DevOps, Java, PHP, Riset, dll.).
3. **Pengurutan (Sorting)**: Urutkan koleksi berdasarkan Abjad (A-Z, Z-A) atau Kategori.
4. **Pratinjau & Unduh Langsung**:
   - **Tombol "Baca"**: Membuka Google Drive PDF viewer di tab baru.
   - **Tombol "Unduh"**: Memulai proses download file PDF secara langsung.
   - **Tombol "Detail"**: Membuka pop-up sinopsis lengkap dengan opsi pratinjau inline.
5. **Palet Warna Solid & Modern**: Antarmuka bersih, elegan, dan tegas dengan kontras rasio tinggi serta tipografi *Plus Jakarta Sans*.
6. **Dark / Light Mode**: Beralih tema gelap dan terang dengan satu klik (tersimpan otomatis di peramban).
7. **Statistik Dinamis**: Counter otomatis menghitung jumlah buku yang tersedia dan hasil pencarian.

---

## 📁 Struktur Berkas

```text
/ (Root)
│
├── index.html          # Halaman utama aplikasi web AKSINU
├── data/
│   └── books.js        # Basis data metadata 222 koleksi buku & Google Drive ID
├── js/
│   └── app.js          # Logika pencarian instan, filter kategori, modal, dan dark mode
├── css/
│   └── custom.css      # Tipografi Plus Jakarta Sans, scrollbar, dan transisi solid
├── ebook/              # Berkas PDF lokal
├── PROMPT_WEBSITE_AKSINU.md # Dokumen spesifikasi prompt awal
└── README.md           # Panduan penggunaan dan deployment ini
```

---

## 🚀 Cara Menjalankan Secara Lokal (Localhost)

Tidak memerlukan instalasi `npm` atau dependensi rumit:

1. **Cara Paling Praktis**:
   - Buka file `index.html` langsung dengan klik ganda (double-click) di File Explorer.
2. **Menggunakan Live Server (VS Code / Python)**:
   - Jika memiliki Python di komputer, jalankan perintah berikut di terminal:
     ```bash
     python -m http.server 3000
     ```
   - Buka peramban di `http://localhost:3000`.

---

## 🌐 Panduan Deployment

### A. Deploy ke GitHub Pages (Gratis & Cepat)

1. Buat repositori baru di GitHub (misal: `aksinu`).
2. Masuk ke folder proyek Anda di terminal lalu jalankan:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi website statis AKSINU"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/aksinu.git
   git push -u origin main
   ```
   *(Catatan: Folder `ebook/` lokal dapat dikecualikan lewat `.gitignore` jika Anda hanya ingin memakai link Google Drive agar push ke GitHub berukuran sangat kecil < 2MB).*

3. Buka repositori Anda di GitHub ➔ **Settings** ➔ **Pages**.
4. Di bagian **Build and deployment** ➔ **Source**, pilih **Deploy from a branch**.
5. Pilih branch **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
6. Tunggu 1–2 menit, website AKSINU Anda sudah aktif di:  
   `https://USERNAME_ANDA.github.io/aksinu/`

---

### B. Deploy ke Vercel (Rekomendasi untuk Kecepatan Maksimal)

1. Buka [vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** ➔ **"Project"**.
3. Pilih repositori **`aksinu`** dari akun GitHub Anda.
4. Pada kolom **Framework Preset**, pilih **"Other"** (karena ini web statis murni).
5. Klik **"Deploy"**.
6. Dalam hitungan detik, website AKSINU akan langsung tayang dengan domain gratis (contoh: `aksinu.vercel.app`) dan sertifikat SSL otomatis.

---

## 📝 Cara Menambah Koleksi Buku Baru

Cukup buka file `data/books.js`, lalu tambahkan objek baru ke dalam array `BOOKS_DATA`:

```javascript
{
  "id": "book-unik-baru",
  "title": "Judul Buku Baru Anda",
  "author": "Nama Penulis",
  "category": "Python & Data", // atau kategori lainnya
  "tags": ["python", "data"],
  "size": "45 MB",
  "description": "Sinopsis singkat tentang buku ini...",
  "googleDriveId": "KODE_FILE_ID_GOOGLE_DRIVE",
  "previewUrl": "https://drive.google.com/file/d/KODE_FILE_ID_GOOGLE_DRIVE/preview",
  "downloadUrl": "https://drive.google.com/uc?export=download&id=KODE_FILE_ID_GOOGLE_DRIVE",
  "localFile": null
}
```
Website akan secara otomatis membaca dan menampilkan buku baru tersebut lengkap dengan filter kategori dan pencariannya.

---

## 📄 Lisensi & Hak Cipta
Hak cipta materi buku tetap menjadi milik masing-masing penulis dan penerbit terkait. Platform AKSINU dirancang sebagai media kurasi dan katalog literasi digital.
