# ⚡ PANDUAN CEPAT: MENGAKTIFKAN SINKRONISASI OTOMATIS GOOGLE DRIVE KE WEBSITE AKSINU

Dengan mengikuti panduan 2 menit ini, setiap kali Anda **menambah, mengedit, atau menghapus buku di Google Drive**, daftar buku dan jumlah koleksi di website **AKSINU akan langsung bertambah secara otomatis** tanpa Anda perlu membuka GitHub lagi!

---

### Langkah 1: Buka Google Apps Script
1. Masuk ke [script.google.com](https://script.google.com) (pastikan sudah login dengan akun Google Anda).
2. Klik tombol **"Proyek baru"** (*New project*) di kiri atas.
3. Ganti nama proyek di kiri atas (klik tulisan *"Project tanpa judul"*) menjadi **AKSINU Drive API**.

---

### Langkah 2: Salin Kode Skrip
1. Buka berkas [google-apps-script/Code.gs](file:///f:/Aplikasi%20Sederhana/google-apps-script/Code.gs) di folder proyek Anda.
2. Hapus seluruh isi default di editor Google Apps Script, lalu **Tempelkan (Paste)** seluruh kode dari `Code.gs`.
3. Klik ikon **Simpan** (ikon disket atau `Ctrl + S`).

---

### Langkah 3: Deploy (Terapkan) Sebagai Web App
1. Di pojok kanan atas, klik tombol biru **"Terapkan"** (*Deploy*) ➔ pilih **"Penerapan baru"** (*New deployment*).
2. Pada panel yang muncul, klik ikon roda gigi (⚙️) di sebelah kiri tulisan *Select type*, lalu pilih **"Aplikasi web"** (*Web app*).
3. Isi konfigurasi berikut:
   - **Deskripsi** (*Description*): `AKSINU Live Sync`
   - **Jalankan sebagai** (*Execute as*): **Saya** (*Me / email Anda*)
   - **Siapa yang memiliki akses** (*Who has access*): **Siapa saja** (*Anyone*) ⚠️ *(SANGAT PENTING: Pilih "Siapa saja" agar website di GitHub dapat membacanya)*.
4. Klik tombol **"Terapkan"** (*Deploy*).

---

### Langkah 4: Berikan Izin Akses (Hanya Sekali di Awal)
1. Jika muncul jendela *"Beri otorisasi akses"* (*Authorize access*), klik **Beri Otorisasi**.
2. Pilih akun Google Anda.
3. Jika muncul peringatan *"Google belum memverifikasi aplikasi ini"* (*Google hasn't verified this app*):
   - Klik teks **Lanjutan** (*Advanced*) di kiri bawah.
   - Klik **Buka AKSINU Drive API (tidak aman)** (*Go to AKSINU Drive API*).
   - Klik tombol **Izinkan** (*Allow*).

---

### Langkah 5: Pasang Link ke Website AKSINU
1. Salin **URL Aplikasi Web** (*Web App URL*) yang diberikan oleh Google (formatnya seperti: `https://script.google.com/macros/s/AKfycb.../exec`).
2. Buka file **[`data/books.js`](file:///f:/Aplikasi%20Sederhana/data/books.js)** di folder proyek AKSINU Anda.
3. Tempelkan URL tersebut pada baris:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
4. Simpan file `data/books.js`.

---

### 🎉 Selesai!
Sekarang website **AKSINU** Anda terhubung secara *real-time* dengan Google Drive:
- Saat ada buku baru diunggah ke Google Drive, website akan otomatis memuatnya!
- **Pencegah Duplikat Otomatis**: Jika Anda tidak sengaja mengunggah file yang sama dua kali atau ada file *Salinan*, sistem otomatis mendeteksi dan mengabaikan duplikatnya sehingga hanya 1 buku yang masuk.
- Judul buku baru akan dibersihkan secara otomatis dari angka scraper atau watermark.
- Buku baru langsung diklasifikasikan ke kategori yang sesuai (Sistem Informasi, AI, Python, Jaringan, dll) lengkap dengan kode DDC.
- Di navbar atas akan muncul indikator hijau: **"Live: 377+ Buku"**.
- Jika sewaktu-waktu koneksi internet Google Apps Script lambat, website otomatis menggunakan 377 data lokal cadangan sehingga website tidak akan pernah kosong atau macet!
