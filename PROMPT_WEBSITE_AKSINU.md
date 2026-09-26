# PROMPT SPESIFIKASI: PENGEMBANGAN WEBSITE STATIS "AKSINU"

---

## 📌 Ringkasan Proyek
- **Nama Aplikasi**: **AKSINU** *(Murni "AKSINU", tanpa embel-embel)*
- **Jenis Aplikasi**: Website Statis (Single Page Application / Static Site)
- **Target Deployment**: GitHub Pages / Vercel
- **Sumber Data & Storage Buku**: **Google Drive Terverifikasi**
  - **Link Folder Google Drive**: [https://drive.google.com/drive/folders/19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV](https://drive.google.com/drive/folders/19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV)
  - **Status Akses**: Terverifikasi Publik (HTTP 200 OK)
  - **Jumlah Koleksi Ebook**: **50 Ebook di Google Drive** + **8 Ebook di folder lokal `ebook/`**
- **Tujuan**: Membangun katalog dan portal baca/unduh buku digital berbasis web statis yang super cepat, ringan (< 2 MB di Git), berdesain elegan, modern, menggunakan warna solid, serta nyaman dibaca di layar HP maupun komputer.

---

## ☁️ SISTEMATIS PENGGUNAAN GOOGLE DRIVE PADA AKSINU

### 1. Keuntungan Arsitektur
- **Bebas Masalah Limit Git**: GitHub memiliki batas maksimal 100 MB per file. Buku berukuran 100-200 MB tetap dapat diakses tanpa membuat git push gagal.
- **Bandwidth Global Cepat**: Menggunakan CDN dan infrastruktur unduh/pratinjau Google yang stabil dan dapat diandalkan secara global.
- **Deploy Kilat**: Ukuran repositori statis di Vercel/GitHub Pages hanya ~1-2 MB, sehingga proses build & deploy selesai dalam 3–5 detik.

### 2. Format Rumus Link Otomatis
Setiap buku memiliki ID unik Google Drive (`googleDriveId`). Website akan mengonversinya secara otomatis ke dua link fungsional:
1. **Link Baca Online (Preview di Browser/Modal)**:
   ```text
   https://drive.google.com/file/d/${googleDriveId}/preview
   ```
2. **Link Unduh Langsung (Direct Download)**:
   ```text
   https://drive.google.com/uc?export=download&id=${googleDriveId}
   ```

### 3. Pemetaan Database Buku (`data/books.js`)
Berikut adalah daftar 50 buku dari folder Google Drive yang **sudah berhasil diekstrak ID-nya secara otomatis** dan siap dimasukkan ke `data/books.js`:

| No | Judul Buku | Kategori | Google Drive ID |
|:--:|:---|:---|:---|
| 1 | What is Dart | Mobile & Web | `1eKmQ8pG7uTMC6kMaBBQazJQIpwIlQP6d` |
| 2 | Computer Fundamental (by Anita Goel) | Dasar Komputer | `1C8wcfg97M9YXl7CAAhqNX0bmQvno-fAY` |
| 3 | Concepts in Programming Languages | Dasar Pemrograman | `1Xd4XpDNGKlPeUHT3HfnypbUTavCe48xh` |
| 4 | Understanding Machine Learning | AI & Machine Learning | `1BlUXYhmp1K9QPbXfKQ9-L46Q1y8Qk0t1` |
| 5 | JavaScript Tutorial | Web Development | `1CZSS5o3YMjQ8jaX0T_A42HSb6SPCWJBQ` |
| 6 | Laravel Testing Decoded | PHP & Framework | `1-ir-WO1uA32yZjWVip0nPQ7AFBzq-yy7` |
| 7 | Data Structures | Algoritma & Struktur Data | `1QGFxcZIsWinp2AWk9tCw56K0vmbBdblp` |
| 8 | Learn Python in a Day | Python | `1psJMmfVruoW8hnYq_EiJIwzNs9OqTaAk` |
| 9 | Learn JavaScript in a Day | JavaScript | `1GYatC1LYUoi8CEM5ElTx96X83Uo10Bmo` |
| 10 | Write Web Apps With Dart | Web Development | `1tF4CBfSqRhNCLoUdWfTpRM_J1McA_hTD` |
| 11 | TensorFlow for Machine Intelligence | AI & Machine Learning | `12W_7QfjGgwegE5OHTWryethF13yXqp-V` |
| 12 | HTML5 Tutorial | Dasar Web | `1Ya2uemQzURAasA6yWMazIyjSFaTykCf4` |
| 13 | JavaScript Book | JavaScript | `1Fw9dIP4T_BrzvTg1phkmP7c5fRuagmR3` |
| 14 | CSS Tutorial | Dasar Web | `1qXzYJ8L9Cz3rFm857Vj26Dfa52qApFqs` |
| 15 | Android Programming | Mobile Development | `168c-xymLu8JSkFdpCiSp8nDUrRFHSXmJ` |
| 16 | Python Programming Guide Book | Python | `1Y55bPDih7VESFq0fw9pDeAAFnLLoFNar` |
| 17 | Learn PHP & MySQL With Ultimate Guide | Database & Backend | `1YJNWSfcs8x_xAmjVusSaf1QWSPjAYjtd` |
| 18 | JavaScript Programming | JavaScript | `1j4AmgJ9kkSA2yo70szEi0d-fslIMpaDV` |
| 19 | Learn PHP In A Day | PHP | `1XDfp9t6Y1qcceTVrAn_jALkMmcGKGfra` |
| 20 | TypeScript Tutorial | TypeScript | `1RCisUQ2rAIEaGW09S0_ZWx2Cgkvfzj2g` |
| 21 | Get Coding: HTML, CSS & JavaScript | Dasar Web | `1_ID3fxRzb5A48oulOYY82wVu7yDR6ly_` |
| 22 | Python Pandas Tutorial | Data Science | `1W9jxSFOwDlc_dWidZDUZTBLBVYK4cfqr` |
| 23 | Mathematical Modeling for Business Analytics | Data & Analitika | `11IytqfhRDoRIIKz5h-EAP37L2RcuCnWj` |
| 24 | Computer Programming 1 | Dasar Pemrograman | `1YJ4pZ1WjjmzEYbkq-VS7jUrDKkqO4mLE` |
| 25 | Beginning Android Development | Mobile Development | `1Pleu0dP64MaUO4YPQkEafYfdl1YuK9A4` |
| 26 | Learning the Pandas Library | Data Science | `1bvWhsSHe2it4Ts_QpgrUuRQfikFTNs6a` |
| 27 | Laravel PDF Guide | PHP & Framework | `1bF73Sf0NPlDF5uMhn6ZrCA5Q9ncYKfA4` |
| 28 | Laravel First Framework | PHP & Framework | `1sW9yE2cIJyMZmu733axe0BCvL1zlKZOX` |
| 29 | Full Course of Machine Learning | AI & Machine Learning | `14-7b1hQ6KntVk9hpSdMGy4GJu1eIrhAl` |
| 30 | All-In-One Computer Programming | Dasar Pemrograman | `1tdXPwO3UlWurLAoYZtz8gUgAbP4YsKb_` |
| 31 | Full-Stack Web Development | Full-Stack Web | `1g3OjQaYGYdyxIdWWLZK97LUfLxp2PAPH` |
| 32 | Programming Fundamentals in JavaScript (Rex Barzee) | JavaScript | `1YZ_xGG7ja63i3y2YAKyuic0sATlUwuvP` |
| 33 | Java Cheat Sheet | Java | `18vbywRDqWMMOFIjgExzq7YPoE5k5JI7f` |
| 34 | The Minimum JavaScript You Should Know | JavaScript | `1gRZzo_jCRqDXJwFXzGva2lO7OFmlGFFg` |
| 35 | Python for Science and Engineering | Python & Sains | `1Aa9KCyq-3_Eb8LpU3wmMhQJV4RDT43zh` |
| 36 | Coffee Break NumPy | Python & Data | `1KFylug8L0TNvV0GKxgZl5hMTaonUU-0S` |
| 37 | Azure DevOps Complete CI/CD Pipeline | Cloud & DevOps | `1NBzt8gPUYMtRnnDHmPBZv-MybUGzpgaM` |
| 38 | Data Analytics Concepts, Techniques and Apps | Data Science | `1Mv7a-XitEAYXs8G5GDP7yOU3qo9k-yt7` |
| 39 | Learn JavaScript Visually | JavaScript | `1rIh69tkI3EKlayNGW3X36SHDtH3kFfu7` |
| 40 | CI/CD Workflows in GitLab and GitHub | Cloud & DevOps | `16pJZHScF8RUlNMFIJEQCOyxRgtzIHip1` |
| 41 | SQL Quick Reference | Database & SQL | `1CyAvDuxgabi8-47fB3HEKQtJb6n6USHs` |
| 42 | Architecting Cloud-Native .NET Apps for Azure | Cloud & .NET | `1mMIebE8UzVdg_wQMgrXibv0q6ZmEqxTs` |
| 43 | Learn DevOps | DevOps | `1_MnjNeo8xa6dLFLWwxKNyJWg1Xf7a88u` |
| 44 | Serious Python (2019) | Python | `1lBtuIAl-Nv2_M7TDN3aClhfxnnEOlFG2` |
| 45 | JavaScript & JQuery (Jon Duckett) | Front-End Web | `1Hvy74JjiIhp4QqT2iLLubKq_e55xfrkn` |
| 46 | Murach's Java Programming | Java | `1oB_jMuJvFdpmb5AgXKTgKXN6l9qxOMCn` |
| 47 | UI Development with React | Front-End Web | `1_SaucZqnWQDByKnSFQCHiZfKConAcAOk` |
| 48 | Java For Beginners: Zero to OOP | Java | `15Wyg4vIQyCvM0DBOLImlceblWFBZQ_p1` |
| 49 | The Python Bible | Python | `14IQVt0p7AIB1Ue2tHIhy1hUciXxs8wJ0` |
| 50 | Doing Math With Python | Python & Matematika | `1AjdOKsSZkaNoXTsmqjr03VmX3Tv_oCUt` |

*(Ditambah 8 buku lokal di folder `ebook/` seperti Sugiyono, Flutter Engineering, SwiftUI, Next.js, dsb.)*

---

## 🎯 Spesifikasi Fitur Antarmuka "AKSINU"

### 1. Fitur Pencarian Real-Time (Instant Search Bar)
- Pengguna cukup mengetik kata kunci di kolom pencarian.
- Sistem langsung menyaring buku berdasarkan: **Judul**, **Kategori**, maupun **Teknologi**.
- Tidak memerlukan tombol reload/submit (responsif seketika via JS).

### 2. Filter Kategori Interaktif (Pills/Chips)
- Kategori yang tersedia:
  - *Semua Kategori*
  - *Python & Data Science*
  - *JavaScript & Front-End*
  - *Mobile Development*
  - *Cloud & DevOps*
  - *Java & Backend*
  - *Dasar Komputer & Pemrograman*
- Klik pada salah satu chip langsung memfilter buku yang sesuai secara instan.

### 3. Tampilan Kartu Buku (Solid Card Design)
- **Badge Kategori**: Warna solid kontras (Emerald, Sky, Amber, Purple, Rose tergantung kategori).
- **Judul Buku**: Tipografi tebal yang jelas dan nyaman dibaca.
- **Badge Format**: Menampilkan badge `PDF` dan link sumber `Google Drive`.
- **Aksi Cepat**:
  - Tombol **"Baca Online"**: Membuka Google Drive PDF Viewer di tab baru.
  - Tombol **"Unduh Ebook"**: Mengunduh file langsung dengan sekali klik.
  - Tombol **"Detail"**: Membuka pop-up ringkasan buku.

### 4. Modal Ringkasan & Pratinjau
- Pop-up modal minimalis untuk melihat informasi detail buku tanpa berpindah halaman.

### 5. Pengaturan Tampilan & Aksesibilitas
- **Header "AKSINU"**: Tipografi tegas, bersih, dan modern.
- **Dark Mode / Light Mode Toggle**: Pilihan mode gelap dan terang dengan kontras warna yang teruji dan tersimpan di `localStorage`.
- **Statistik Cepat**: Counter dinamis menampilkan jumlah buku yang tersedia (misal: "50+ Koleksi Buku Tersedia").

---

## 🎨 Panduan Warna Solid & Tipografi (Solid Color Design System)

- **Konsep**: *Clean, Modern & Flat/Solid UI* (Bebas gradien yang mengaburkan teks, fokus pada keterbacaan tinggi).
- **Font**: **Plus Jakarta Sans** (Google Fonts).

| Komponen | Mode Terang (Light Mode) | Mode Gelap (Dark Mode) |
| :--- | :--- | :--- |
| **Latar Halaman (Body)** | Slate 50 (`#F8FAFC`) | Slate 950 (`#020617`) |
| **Latar Kartu (Surface)** | Putih Bersih (`#FFFFFF`) | Slate 900 (`#0F172A`) |
| **Aksen Utama ("AKSINU")** | Indigo 600 (`#4F46E5`) | Indigo 500 (`#6366F1`) |
| **Border Garis Pemisah** | Slate 200 (`#E2E8F0`) | Slate 800 (`#1E293B`) |
| **Teks Judul Utama** | Slate 900 (`#0F172A`) | Slate 100 (`#F1F5F9`) |
| **Teks Paragraf / Deskripsi** | Slate 700 (`#334155`) | Slate 300 (`#CBD5E1`) |
| **Warna Tombol Unduh** | Slate 900 (`#0F172A`) | Slate 100 (Teks gelap) |
| **Warna Tombol Baca** | Indigo 600 (`#4F46E5`) | Indigo 500 (`#6366F1`) |

---

## 💻 Tech Stack
- **HTML5**: Struktur semantik yang ramah mesin pencari.
- **Tailwind CSS (v3)**: Desain utilitas yang solid, konsisten, dan mudah dikustomisasi.
- **Vanilla JavaScript Modern (ES6+)**: Performa tercepat tanpa beban dependensi framework.
- **Lucide Icons**: Ikon modern minimalis untuk pencarian, unduh, baca, dan mode gelap.

---

## 🚀 Struktur Direktori Repositori
```text
/ (Root)
│
├── index.html              # Halaman utama aplikasi AKSINU
├── data/
│   └── books.js            # 50+ database metadata buku dengan Google Drive IDs
├── js/
│   └── app.js              # Logika pencarian, filter, modal, & dark mode
├── css/
│   └── custom.css          # Kustomisasi animasi dan font
├── README.md               # Panduan deploy (GitHub Pages / Vercel)
└── PROMPT_WEBSITE_AKSINU.md# Dokumen spesifikasi prompt ini
```

---

## 📋 Langkah Eksekusi Siap Dijalankan
*Ketika Anda memberikan instruksi **"Mulai kerjakan"**, langkah yang akan dilakukan:*
1. Menginisialisasi file `data/books.js` dengan ke-50 data buku dan Google Drive ID yang sudah berhasil diekstrak.
2. Membangun `index.html` dengan antarmuka elegan, branding murni **AKSINU**, dan palet solid.
3. Mengembangkan `js/app.js` untuk search real-time, filter kategori, preview, dan download.
4. Membuat file `README.md` dengan panduan satu klik untuk deploy ke GitHub Pages & Vercel.
