// Basis Data Koleksi Buku Digital - AKSINU
// Total Koleksi: 224 Buku Terverifikasi Google Drive (Live API Terhubung)
// Masukkan URL Google Apps Script Web App di bawah ini untuk mengaktifkan pembaruan otomatis:
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwetf1m8iaINDcgqDYfThZSR87uFl8msBlx7kHgZDib5rq1t_q7R90lTtdsO4yL7zmW/exec";

const BOOKS_DATA = [
  {
    "id": "book-1xxjtqn68vl-",
    "title": "21st Century Corporate Learning Development",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai 21st Century Corporate Learning Development untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1XXJtQN68Vl-DSoG2iC2pcQFjfCqAJGUN",
    "previewUrl": "https://drive.google.com/file/d/1XXJtQN68Vl-DSoG2iC2pcQFjfCqAJGUN/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1XXJtQN68Vl-DSoG2iC2pcQFjfCqAJGUN",
    "localFile": null
  },
  {
    "id": "book-1s7jcy3x4fjp",
    "title": "Advanced React",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Advanced React.",
    "googleDriveId": "1s7jCY3x4FJpdSXGkV1tAbv3RDy_oVfcM",
    "previewUrl": "https://drive.google.com/file/d/1s7jCY3x4FJpdSXGkV1tAbv3RDy_oVfcM/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1s7jCY3x4FJpdSXGkV1tAbv3RDy_oVfcM",
    "localFile": null
  },
  {
    "id": "book-1mohi5itswbt",
    "title": "Ai",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Ai.",
    "googleDriveId": "1MoHI5iTsWBT1unYWw5R2uxXqS2Z_8IlJ",
    "previewUrl": "https://drive.google.com/file/d/1MoHI5iTsWBT1unYWw5R2uxXqS2Z_8IlJ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1MoHI5iTsWBT1unYWw5R2uxXqS2Z_8IlJ",
    "localFile": null
  },
  {
    "id": "book-1wep82vdse0r",
    "title": "Ai Agents by Google",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Ai Agents by Google.",
    "googleDriveId": "1wEp82vdSe0ReHz_-xeOpw_jihWg8WLts",
    "previewUrl": "https://drive.google.com/file/d/1wEp82vdSe0ReHz_-xeOpw_jihWg8WLts/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1wEp82vdSe0ReHz_-xeOpw_jihWg8WLts",
    "localFile": null
  },
  {
    "id": "book-1obwtwro4vos",
    "title": "Ai Agents Unleashed Playbook for 2025 Success",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Ai Agents Unleashed Playbook for 2025 Success.",
    "googleDriveId": "1OBWtWro4vOSQL1_Ic3cMK5sNGwT-zlp8",
    "previewUrl": "https://drive.google.com/file/d/1OBWtWro4vOSQL1_Ic3cMK5sNGwT-zlp8/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1OBWtWro4vOSQL1_Ic3cMK5sNGwT-zlp8",
    "localFile": null
  },
  {
    "id": "book-1bk2iqey7ypd",
    "title": "Algoritma Pemrograman",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1BK2IQey7YpdgdrqIDim9JQlmkL-6qCMU",
    "previewUrl": "https://drive.google.com/file/d/1BK2IQey7YpdgdrqIDim9JQlmkL-6qCMU/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1BK2IQey7YpdgdrqIDim9JQlmkL-6qCMU",
    "localFile": null
  },
  {
    "id": "book-1wlmn9rj6cz1",
    "title": "Algoritmapemrogramanversi2022",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1WlMn9rJ6cZ1mXuYbGX06mayPGt7McjvH",
    "previewUrl": "https://drive.google.com/file/d/1WlMn9rJ6cZ1mXuYbGX06mayPGt7McjvH/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1WlMn9rJ6cZ1mXuYbGX06mayPGt7McjvH",
    "localFile": null
  },
  {
    "id": "book-1tdxpwo3ulwu",
    "title": "All in One Computer Programming",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai All in One Computer Programming untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1tdXPwO3UlWurLAoYZtz8gUgAbP4YsKb_",
    "previewUrl": "https://drive.google.com/file/d/1tdXPwO3UlWurLAoYZtz8gUgAbP4YsKb_/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1tdXPwO3UlWurLAoYZtz8gUgAbP4YsKb_",
    "localFile": null
  },
  {
    "id": "book-1otsefvkzjc6",
    "title": "Analisis dan Perancangan Sistem Informasi Ilka Zufria 2022 for Repo",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Analisis dan Perancangan Sistem Informasi Ilka Zufria 2022 for Repo untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1otSeFvKzjc6MPT32XiQvQ-WjG6A3pDGC",
    "previewUrl": "https://drive.google.com/file/d/1otSeFvKzjc6MPT32XiQvQ-WjG6A3pDGC/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1otSeFvKzjc6MPT32XiQvQ-WjG6A3pDGC",
    "localFile": null
  },
  {
    "id": "book-1mfhofe1h8vl",
    "title": "Analisis dan Perancangan Sistem Preview",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Analisis dan Perancangan Sistem Preview untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1mFhOfe1H8VlHYwblFFNQZ5Dd7RRYKj7f",
    "previewUrl": "https://drive.google.com/file/d/1mFhOfe1H8VlHYwblFFNQZ5Dd7RRYKj7f/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1mFhOfe1H8VlHYwblFFNQZ5Dd7RRYKj7f",
    "localFile": null
  },
  {
    "id": "book-168c-xymlu8j",
    "title": "Android Programming",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Android Programming.",
    "googleDriveId": "168c-xymLu8JSkFdpCiSp8nDUrRFHSXmJ",
    "previewUrl": "https://drive.google.com/file/d/168c-xymLu8JSkFdpCiSp8nDUrRFHSXmJ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=168c-xymLu8JSkFdpCiSp8nDUrRFHSXmJ",
    "localFile": null
  },
  {
    "id": "book-1wh2pnrurztg",
    "title": "Android Programming for Beginners",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Android Programming for Beginners.",
    "googleDriveId": "1wH2pNRUrzTGMoutdxubCRRSMZ_CeB8xs",
    "previewUrl": "https://drive.google.com/file/d/1wH2pNRUrzTGMoutdxubCRRSMZ_CeB8xs/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1wH2pNRUrzTGMoutdxubCRRSMZ_CeB8xs",
    "localFile": null
  },
  {
    "id": "book-1frxydv5wbjs",
    "title": "Arcgis for JavaScript Developers by Example Sample Chapter",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Arcgis for JavaScript Developers by Example Sample Chapter.",
    "googleDriveId": "1FRxydV5WBjSoTs0oM_R0mgLG6_nB0h7A",
    "previewUrl": "https://drive.google.com/file/d/1FRxydV5WBjSoTs0oM_R0mgLG6_nB0h7A/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1FRxydV5WBjSoTs0oM_R0mgLG6_nB0h7A",
    "localFile": null
  },
  {
    "id": "book-1mmiebe8uzvd",
    "title": "Architecting Cloud Native Net Apps for Azure",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan Architecting Cloud Native Net Apps for Azure.",
    "googleDriveId": "1mMIebE8UzVdg_wQMgrXibv0q6ZmEqxTs",
    "previewUrl": "https://drive.google.com/file/d/1mMIebE8UzVdg_wQMgrXibv0q6ZmEqxTs/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1mMIebE8UzVdg_wQMgrXibv0q6ZmEqxTs",
    "localFile": null
  },
  {
    "id": "book-1haqrs2cii5n",
    "title": "As Computer Science",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai As Computer Science untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1HaQRs2CiI5NJoiLoIqvnAAWEcMGU2yQU",
    "previewUrl": "https://drive.google.com/file/d/1HaQRs2CiI5NJoiLoIqvnAAWEcMGU2yQU/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1HaQRs2CiI5NJoiLoIqvnAAWEcMGU2yQU",
    "localFile": null
  },
  {
    "id": "book-1nbzt8gpuymt",
    "title": "Azure DevOps Complete CI/CD Pipeline",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan Azure DevOps Complete CI/CD Pipeline.",
    "googleDriveId": "1NBzt8gPUYMtRnnDHmPBZv-MybUGzpgaM",
    "previewUrl": "https://drive.google.com/file/d/1NBzt8gPUYMtRnnDHmPBZv-MybUGzpgaM/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1NBzt8gPUYMtRnnDHmPBZv-MybUGzpgaM",
    "localFile": null
  },
  {
    "id": "book-1p0saur_7uag",
    "title": "Basis Data",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Basis Data untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1P0SAUR_7uagXtvP40mJJeuhAUMVh_ggN",
    "previewUrl": "https://drive.google.com/file/d/1P0SAUR_7uagXtvP40mJJeuhAUMVh_ggN/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1P0SAUR_7uagXtvP40mJJeuhAUMVh_ggN",
    "localFile": null
  },
  {
    "id": "book-1atwg6hvhrfe",
    "title": "Beginner S Guide to Game Development Programming Concepts Publishing Punky 2024 03065f0986eb4308d095341e048d7844 Anna S Archive",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Beginner S Guide to Game Development Programming Concepts Publishing Punky 2024 03065f0986eb4308d095341e048d7844 Anna S Archive untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1aTWg6hvhrFe2oEIn0tSXnBQ_JbSmCy4H",
    "previewUrl": "https://drive.google.com/file/d/1aTWg6hvhrFe2oEIn0tSXnBQ_JbSmCy4H/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1aTWg6hvhrFe2oEIn0tSXnBQ_JbSmCy4H",
    "localFile": null
  },
  {
    "id": "book-1pleu0dp64ma",
    "title": "Beginning Android Development",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Beginning Android Development.",
    "googleDriveId": "1Pleu0dP64MaUO4YPQkEafYfdl1YuK9A4",
    "previewUrl": "https://drive.google.com/file/d/1Pleu0dP64MaUO4YPQkEafYfdl1YuK9A4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Pleu0dP64MaUO4YPQkEafYfdl1YuK9A4",
    "localFile": null
  },
  {
    "id": "book-1jgwldpvzi9s",
    "title": "Beginning Android Development",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Beginning Android Development.",
    "googleDriveId": "1jGwLdpvZI9S5BjJZJldmUET0X9osk4It",
    "previewUrl": "https://drive.google.com/file/d/1jGwLdpvZI9S5BjJZJldmUET0X9osk4It/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1jGwLdpvZI9S5BjJZJldmUET0X9osk4It",
    "localFile": null
  },
  {
    "id": "book-1oafhyfh6ovd",
    "title": "Beginning Modern JavaScript a Step by Step Gentle Guide to Learn",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Beginning Modern JavaScript a Step by Step Gentle Guide to Learn.",
    "googleDriveId": "1oaFHyfH6ovDmBK7VlJVnkXE9PRahhmig",
    "previewUrl": "https://drive.google.com/file/d/1oaFHyfH6ovDmBK7VlJVnkXE9PRahhmig/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1oaFHyfH6ovDmBK7VlJVnkXE9PRahhmig",
    "localFile": null
  },
  {
    "id": "book-12zhvmis9agz",
    "title": "Beginning React 2024",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Beginning React 2024.",
    "googleDriveId": "12zHvmIS9aGzEKhC5Endypoa2H8pDzleZ",
    "previewUrl": "https://drive.google.com/file/d/12zHvmIS9aGzEKhC5Endypoa2H8pDzleZ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=12zHvmIS9aGzEKhC5Endypoa2H8pDzleZ",
    "localFile": null
  },
  {
    "id": "book-19mwnkbzhjvu",
    "title": "Belajar Algoritma dan Pemograman dengan Python",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Belajar Algoritma dan Pemograman dengan Python.",
    "googleDriveId": "19MWNKbZhJvU1Tcg0dJtyPLJYwaGkue0Y",
    "previewUrl": "https://drive.google.com/file/d/19MWNKbZhJvU1Tcg0dJtyPLJYwaGkue0Y/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=19MWNKbZhJvU1Tcg0dJtyPLJYwaGkue0Y",
    "localFile": null
  },
  {
    "id": "book-1u-18_wl3nqp",
    "title": "Big Data Analytics Methods and Applications Jovan Pehcevski",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Big Data Analytics Methods and Applications Jovan Pehcevski.",
    "googleDriveId": "1U-18_Wl3NqP7v9179OnveNoCXgXiSCa4",
    "previewUrl": "https://drive.google.com/file/d/1U-18_Wl3NqP7v9179OnveNoCXgXiSCa4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1U-18_Wl3NqP7v9179OnveNoCXgXiSCa4",
    "localFile": null
  },
  {
    "id": "book-130ovfpul9qb",
    "title": "Build 10 Flutter 3 0 Apps in 100 Days a Step by Step Guide to Build Apps and Master Flutter Sanjib Sinha Z Library",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Build 10 Flutter 3 0 Apps in 100 Days a Step by Step Guide to Build Apps and Master Flutter Sanjib Sinha Z Library.",
    "googleDriveId": "130OVfpUL9qbyz-OtQdpVi-mjnM6cQ3bS",
    "previewUrl": "https://drive.google.com/file/d/130OVfpUL9qbyz-OtQdpVi-mjnM6cQ3bS/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=130OVfpUL9qbyz-OtQdpVi-mjnM6cQ3bS",
    "localFile": null
  },
  {
    "id": "book-15z-h3rlcio3",
    "title": "Build a Full Stack Web Application using Angular and Firebase",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Build a Full Stack Web Application using Angular and Firebase.",
    "googleDriveId": "15Z-h3rlcIO3SIXBjP9MqniZbgO9rq56j",
    "previewUrl": "https://drive.google.com/file/d/15Z-h3rlcIO3SIXBjP9MqniZbgO9rq56j/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=15Z-h3rlcIO3SIXBjP9MqniZbgO9rq56j",
    "localFile": null
  },
  {
    "id": "book-1elz36h3jeps",
    "title": "Building Applications with Ai Agents 2026",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Building Applications with Ai Agents 2026.",
    "googleDriveId": "1Elz36h3jepS7V_PcclmXkYpmlZYAVjIr",
    "previewUrl": "https://drive.google.com/file/d/1Elz36h3jepS7V_PcclmXkYpmlZYAVjIr/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Elz36h3jepS7V_PcclmXkYpmlZYAVjIr",
    "localFile": null
  },
  {
    "id": "book-1oswv9fvw0ja",
    "title": "Buku Ajar Pengantar Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Ajar Pengantar Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1OSwv9Fvw0JAAs8iEMTSDSTaAD46kQEqU",
    "previewUrl": "https://drive.google.com/file/d/1OSwv9Fvw0JAAs8iEMTSDSTaAD46kQEqU/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1OSwv9Fvw0JAAs8iEMTSDSTaAD46kQEqU",
    "localFile": null
  },
  {
    "id": "book-15yq5yrsuwoi",
    "title": "Buku Ajar Sim Soft File",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Ajar Sim Soft File untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "15YQ5YRsUWOiMuGa9R5bC1CQFWezplXVp",
    "previewUrl": "https://drive.google.com/file/d/15YQ5YRsUWOiMuGa9R5bC1CQFWezplXVp/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=15YQ5YRsUWOiMuGa9R5bC1CQFWezplXVp",
    "localFile": null
  },
  {
    "id": "book-1xis6gcpyvbv",
    "title": "Buku Ajar Sistem Pendukung Keputusan",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Ajar Sistem Pendukung Keputusan untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1xIs6GcpyvbVqMaHUjh3AeMBxHBiNe4iq",
    "previewUrl": "https://drive.google.com/file/d/1xIs6GcpyvbVqMaHUjh3AeMBxHBiNe4iq/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1xIs6GcpyvbVqMaHUjh3AeMBxHBiNe4iq",
    "localFile": null
  },
  {
    "id": "book-1zmrl2lizwxe",
    "title": "Buku Algoritma dan Pemrograman",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1ZMrl2liZWXEZfRLGPnkDPas1T4BAysNB",
    "previewUrl": "https://drive.google.com/file/d/1ZMrl2liZWXEZfRLGPnkDPas1T4BAysNB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZMrl2liZWXEZfRLGPnkDPas1T4BAysNB",
    "localFile": null
  },
  {
    "id": "book-1mbdbffqnztl",
    "title": "Buku Algoritma dan Pemrograman",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1mbdbFFQNZtLMxn7IRL-OpPRPz8HvRLsk",
    "previewUrl": "https://drive.google.com/file/d/1mbdbFFQNZtLMxn7IRL-OpPRPz8HvRLsk/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1mbdbFFQNZtLMxn7IRL-OpPRPz8HvRLsk",
    "localFile": null
  },
  {
    "id": "book-1w2ujsdlifoj",
    "title": "Buku Jozef Raco Metode Penelitian Kualitatif",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Jozef Raco Metode Penelitian Kualitatif untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1W2ujsdLIFoJG9c9TAk2cFcM4jxz4SfyZ",
    "previewUrl": "https://drive.google.com/file/d/1W2ujsdLIFoJG9c9TAk2cFcM4jxz4SfyZ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1W2ujsdLIFoJG9c9TAk2cFcM4jxz4SfyZ",
    "localFile": null
  },
  {
    "id": "book-1xx6lowv_lu1",
    "title": "Buku Manajemen Bisnis",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Manajemen Bisnis untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1xX6LoWV_Lu15A-uRM_lOmAgks5OUFZeB",
    "previewUrl": "https://drive.google.com/file/d/1xX6LoWV_Lu15A-uRM_lOmAgks5OUFZeB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1xX6LoWV_Lu15A-uRM_lOmAgks5OUFZeB",
    "localFile": null
  },
  {
    "id": "book-19-w3hv8obnt",
    "title": "Buku Matematika Diskrited",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Matematika Diskrited untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "19-W3hV8ObNT_hmeuOjGwKKvsdh3FyP95",
    "previewUrl": "https://drive.google.com/file/d/19-W3hV8ObNT_hmeuOjGwKKvsdh3FyP95/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=19-W3hV8ObNT_hmeuOjGwKKvsdh3FyP95",
    "localFile": null
  },
  {
    "id": "book-1dpuqlqrfcsb",
    "title": "Buku Metode Penelitian Kualitatif Kuantitatif Press",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Metode Penelitian Kualitatif Kuantitatif Press untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1DPUQlqrfcSbxUX9d-3hvs5NQu1Y5mVme",
    "previewUrl": "https://drive.google.com/file/d/1DPUQlqrfcSbxUX9d-3hvs5NQu1Y5mVme/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1DPUQlqrfcSbxUX9d-3hvs5NQu1Y5mVme",
    "localFile": null
  },
  {
    "id": "book-1emhdo2qe6av",
    "title": "Buku Metode Penelitian Sugiyono",
    "author": "Prof. Dr. Sugiyono",
    "category": "Metodologi Riset",
    "tags": [
      "metode penelitian",
      "riset",
      "sugiyono",
      "kuantitatif",
      "kualitatif",
      "skripsi",
      "tesis",
      "r&d"
    ],
    "size": "PDF",
    "description": "Buku rujukan utama akademis untuk penyusunan metodologi penelitian kuantitatif, kualitatif, dan Research and Development (R&D).",
    "googleDriveId": "1EMhDO2QE6AV8csym7aKKCby0X9rcL8ma",
    "previewUrl": "https://drive.google.com/file/d/1EMhDO2QE6AV8csym7aKKCby0X9rcL8ma/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1EMhDO2QE6AV8csym7aKKCby0X9rcL8ma",
    "localFile": "ebook/Buku-Metode-Penelitian-Sugiyono.pdf"
  },
  {
    "id": "book-1yrjo5sqlkdn",
    "title": "Buku Pengantar Jaringan Komputer",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Pengantar Jaringan Komputer untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1yrJO5SqLkdNklGQKnw0mWe9ldkkXxd5r",
    "previewUrl": "https://drive.google.com/file/d/1yrJO5SqLkdNklGQKnw0mWe9ldkkXxd5r/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1yrJO5SqLkdNklGQKnw0mWe9ldkkXxd5r",
    "localFile": null
  },
  {
    "id": "book-16z7reqq1krz",
    "title": "Buku Sdlc",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Buku Sdlc untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "16Z7reQq1kRzYMYA9DnNw5UaAeTpxMERZ",
    "previewUrl": "https://drive.google.com/file/d/16Z7reQq1kRzYMYA9DnNw5UaAeTpxMERZ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=16Z7reQq1kRzYMYA9DnNw5UaAeTpxMERZ",
    "localFile": null
  },
  {
    "id": "book-1qyvi2wqqgi-",
    "title": "Buku Struktur Data",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1Qyvi2wqQGi-yNznZiLUwwcHcgUFcFQV6",
    "previewUrl": "https://drive.google.com/file/d/1Qyvi2wqQGi-yNznZiLUwwcHcgUFcFQV6/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qyvi2wqQGi-yNznZiLUwwcHcgUFcFQV6",
    "localFile": null
  },
  {
    "id": "book-1ayeooz6tqr-",
    "title": "Business Information Systems 3rd Edition Beynon Davies",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Business Information Systems 3rd Edition Beynon Davies untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1ayEoOZ6TqR-RGzPJ7dv_uBNDmW87I-pG",
    "previewUrl": "https://drive.google.com/file/d/1ayEoOZ6TqR-RGzPJ7dv_uBNDmW87I-pG/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1ayEoOZ6TqR-RGzPJ7dv_uBNDmW87I-pG",
    "localFile": null
  },
  {
    "id": "book-1walujwkyvf7",
    "title": "C Game Development Book",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai C Game Development Book untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1WALUjwkyVF7yQ6noTDyZUVRlJKED8NYY",
    "previewUrl": "https://drive.google.com/file/d/1WALUjwkyVF7yQ6noTDyZUVRlJKED8NYY/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1WALUjwkyVF7yQ6noTDyZUVRlJKED8NYY",
    "localFile": null
  },
  {
    "id": "book-1pmcs_x4k2kl",
    "title": "Coding for Beginners the Simplified Guide to Learn Coding Step by Step and Become an Expert Quickly",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Coding for Beginners the Simplified Guide to Learn Coding Step by Step and Become an Expert Quickly untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1Pmcs_x4K2kln9bnHPTCjIB0ML8OG1P8u",
    "previewUrl": "https://drive.google.com/file/d/1Pmcs_x4K2kln9bnHPTCjIB0ML8OG1P8u/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Pmcs_x4K2kln9bnHPTCjIB0ML8OG1P8u",
    "localFile": null
  },
  {
    "id": "book-1awbko8amnzy",
    "title": "Coding Games from Scratch",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Coding Games from Scratch untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1awBkO8AMNzyk7zmoJgzv9zrE0LrMebQb",
    "previewUrl": "https://drive.google.com/file/d/1awBkO8AMNzyk7zmoJgzv9zrE0LrMebQb/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1awBkO8AMNzyk7zmoJgzv9zrE0LrMebQb",
    "localFile": null
  },
  {
    "id": "book-1kfylug8l0tn",
    "title": "Coffee Break Numpy",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Coffee Break Numpy.",
    "googleDriveId": "1KFylug8L0TNvV0GKxgZl5hMTaonUU-0S",
    "previewUrl": "https://drive.google.com/file/d/1KFylug8L0TNvV0GKxgZl5hMTaonUU-0S/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1KFylug8L0TNvV0GKxgZl5hMTaonUU-0S",
    "localFile": null
  },
  {
    "id": "book-1c8wcfg97m9y",
    "title": "Computer Fundamental by Goel Anita",
    "author": "Anita Goel",
    "category": "Dasar Komputer",
    "tags": [
      "computer fundamentals",
      "hardware",
      "arsitektur komputer",
      "sistem"
    ],
    "size": "PDF",
    "description": "Fondasi ilmu komputer, pengantar arsitektur hardware, sistem operasi, dan konsep dasar teknologi komputasi.",
    "googleDriveId": "1C8wcfg97M9YXl7CAAhqNX0bmQvno-fAY",
    "previewUrl": "https://drive.google.com/file/d/1C8wcfg97M9YXl7CAAhqNX0bmQvno-fAY/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1C8wcfg97M9YXl7CAAhqNX0bmQvno-fAY",
    "localFile": null
  },
  {
    "id": "book-1yj4pz1wjjmz",
    "title": "Computer Programming 1",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Computer Programming 1 untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1YJ4pZ1WjjmzEYbkq-VS7jUrDKkqO4mLE",
    "previewUrl": "https://drive.google.com/file/d/1YJ4pZ1WjjmzEYbkq-VS7jUrDKkqO4mLE/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1YJ4pZ1WjjmzEYbkq-VS7jUrDKkqO4mLE",
    "localFile": null
  },
  {
    "id": "book-1shkot20zgvu",
    "title": "Computer Science",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Computer Science untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1Shkot20zGvuenqkYYRA-uojby9fQTSS6",
    "previewUrl": "https://drive.google.com/file/d/1Shkot20zGvuenqkYYRA-uojby9fQTSS6/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Shkot20zGvuenqkYYRA-uojby9fQTSS6",
    "localFile": "ebook/595679242-Computer-Science.pdf"
  },
  {
    "id": "book-1xd4xpdngklp",
    "title": "Concepts in Programming Languages",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Concepts in Programming Languages untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1Xd4XpDNGKlPeUHT3HfnypbUTavCe48xh",
    "previewUrl": "https://drive.google.com/file/d/1Xd4XpDNGKlPeUHT3HfnypbUTavCe48xh/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xd4XpDNGKlPeUHT3HfnypbUTavCe48xh",
    "localFile": null
  },
  {
    "id": "book-1ehylw3ra7qz",
    "title": "CSS Programing Web",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Web & Desain",
    "tags": [
      "html",
      "css",
      "web design",
      "tata letak"
    ],
    "size": "PDF",
    "description": "Panduan fundamental perancangan tampilan antarmuka web responsif dan standar web modern dengan CSS Programing Web.",
    "googleDriveId": "1Ehylw3RA7QzPutX_8LodphOLhYOmxLc2",
    "previewUrl": "https://drive.google.com/file/d/1Ehylw3RA7QzPutX_8LodphOLhYOmxLc2/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ehylw3RA7QzPutX_8LodphOLhYOmxLc2",
    "localFile": null
  },
  {
    "id": "book-1qxzyj8l9cz3",
    "title": "CSS Tutorial",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Web & Desain",
    "tags": [
      "html",
      "css",
      "web design",
      "tata letak"
    ],
    "size": "PDF",
    "description": "Panduan fundamental perancangan tampilan antarmuka web responsif dan standar web modern dengan CSS Tutorial.",
    "googleDriveId": "1qXzYJ8L9Cz3rFm857Vj26Dfa52qApFqs",
    "previewUrl": "https://drive.google.com/file/d/1qXzYJ8L9Cz3rFm857Vj26Dfa52qApFqs/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1qXzYJ8L9Cz3rFm857Vj26Dfa52qApFqs",
    "localFile": null
  },
  {
    "id": "book-1vncc9faueht",
    "title": "Daniel T Larose Discovering Knowledge in Data an Introduction to Data Mining Wiley Interscience 2004 1",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Daniel T Larose Discovering Knowledge in Data an Introduction to Data Mining Wiley Interscience 2004 1 untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1VNCc9FAUehtUnPKxrBszamC4NVoyUO9C",
    "previewUrl": "https://drive.google.com/file/d/1VNCc9FAUehtUnPKxrBszamC4NVoyUO9C/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1VNCc9FAUehtUnPKxrBszamC4NVoyUO9C",
    "localFile": null
  },
  {
    "id": "book-1ukcizu7iafh",
    "title": "Dasar Manajemen Bisnis",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Dasar Manajemen Bisnis untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1UKCIZu7iAFHZI9gAL9Ic8JMrr6d7wEU9",
    "previewUrl": "https://drive.google.com/file/d/1UKCIZu7iAFHZI9gAL9Ic8JMrr6d7wEU9/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1UKCIZu7iAFHZI9gAL9Ic8JMrr6d7wEU9",
    "localFile": null
  },
  {
    "id": "book-1q0hhwsslrwc",
    "title": "Dasar Pemograman Golang",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Dasar Pemograman Golang untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1Q0HhwSslRwCpfWI7ItoUNPrslRgU4PBV",
    "previewUrl": "https://drive.google.com/file/d/1Q0HhwSslRwCpfWI7ItoUNPrslRgU4PBV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q0HhwSslRwCpfWI7ItoUNPrslRgU4PBV",
    "localFile": null
  },
  {
    "id": "book-19rdegryad-m",
    "title": "Data Analytics and Ai",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Data Analytics and Ai.",
    "googleDriveId": "19rDEGRyad-MH-nQ4n5B2DfN917wDDBiR",
    "previewUrl": "https://drive.google.com/file/d/19rDEGRyad-MH-nQ4n5B2DfN917wDDBiR/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=19rDEGRyad-MH-nQ4n5B2DfN917wDDBiR",
    "localFile": null
  },
  {
    "id": "book-1btkisk2ney1",
    "title": "Data Analytics and Machine Learning Pushpa Singh Asha Rani Mishra Payal Garg",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Data Analytics and Machine Learning Pushpa Singh Asha Rani Mishra Payal Garg.",
    "googleDriveId": "1BtkiSk2nEY1fMidochA26-h5_8-JQhDY",
    "previewUrl": "https://drive.google.com/file/d/1BtkiSk2nEY1fMidochA26-h5_8-JQhDY/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1BtkiSk2nEY1fMidochA26-h5_8-JQhDY",
    "localFile": null
  },
  {
    "id": "book-1mv7a-xiteay",
    "title": "Data Analytics Concepts Techniques and a 1",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Data Analytics Concepts Techniques and a 1.",
    "googleDriveId": "1Mv7a-XitEAYXs8G5GDP7yOU3qo9k-yt7",
    "previewUrl": "https://drive.google.com/file/d/1Mv7a-XitEAYXs8G5GDP7yOU3qo9k-yt7/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Mv7a-XitEAYXs8G5GDP7yOU3qo9k-yt7",
    "localFile": null
  },
  {
    "id": "book-1q2qdcejkopg",
    "title": "Data Analytics using Python",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Data Analytics using Python.",
    "googleDriveId": "1Q2qDCEJkopG6tcbeTucJ0Ci4Vr2dEzVk",
    "previewUrl": "https://drive.google.com/file/d/1Q2qDCEJkopG6tcbeTucJ0Ci4Vr2dEzVk/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q2qDCEJkopG6tcbeTucJ0Ci4Vr2dEzVk",
    "localFile": "ebook/733034218-Data-Analytics-using-Python.pdf"
  },
  {
    "id": "book-1qgfxcziswin",
    "title": "Data Structures",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1QGFxcZIsWinp2AWk9tCw56K0vmbBdblp",
    "previewUrl": "https://drive.google.com/file/d/1QGFxcZIsWinp2AWk9tCw56K0vmbBdblp/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1QGFxcZIsWinp2AWk9tCw56K0vmbBdblp",
    "localFile": null
  },
  {
    "id": "book-1l7tygfju1kp",
    "title": "Data Structures Algorithms in Dart",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Data Structures Algorithms in Dart.",
    "googleDriveId": "1l7tYGFJu1kpQl8qAYielJcRafc8lL9-g",
    "previewUrl": "https://drive.google.com/file/d/1l7tYGFJu1kpQl8qAYielJcRafc8lL9-g/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1l7tYGFJu1kpQl8qAYielJcRafc8lL9-g",
    "localFile": null
  },
  {
    "id": "book-1q0ofr-qnhxx",
    "title": "Data Structures and Algorithms Made Easy Data Structures and Algorithmic Puzzles",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1q0OFr-QNhxX6nWsRoVP3qwQEuY8AR6bX",
    "previewUrl": "https://drive.google.com/file/d/1q0OFr-QNhxX6nWsRoVP3qwQEuY8AR6bX/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1q0OFr-QNhxX6nWsRoVP3qwQEuY8AR6bX",
    "localFile": "ebook/559719565-Data-Structures-and-Algorithms-Made-Easy-Data-Structures-and-Algorithmic-Puzzles-PDFDrive-com.pdf"
  },
  {
    "id": "book-1jl_kolox6ji",
    "title": "Data Structures and Algorithms with Python 100 Coding Q a Code of Code by Cakal Yasin 1",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Data Structures and Algorithms with Python 100 Coding Q a Code of Code by Cakal Yasin 1.",
    "googleDriveId": "1JL_kOLox6JIvcth5CDsX8gsKyVYwLXY1",
    "previewUrl": "https://drive.google.com/file/d/1JL_kOLox6JIvcth5CDsX8gsKyVYwLXY1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1JL_kOLox6JIvcth5CDsX8gsKyVYwLXY1",
    "localFile": null
  },
  {
    "id": "book-1udeccefgwgt",
    "title": "Data Warehousing Data Mining",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Data Warehousing Data Mining untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1UdeCCEfGwgtAn25cfr5B6kmZje-QEQuI",
    "previewUrl": "https://drive.google.com/file/d/1UdeCCEfGwgtAn25cfr5B6kmZje-QEQuI/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1UdeCCEfGwgtAn25cfr5B6kmZje-QEQuI",
    "localFile": null
  },
  {
    "id": "book-1g-lfdfoymgc",
    "title": "Deep JavaScript Theory and Techniques",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Deep JavaScript Theory and Techniques.",
    "googleDriveId": "1G-lfdFOYMgC6bWwNNwsL3Dx9FRNa3K9p",
    "previewUrl": "https://drive.google.com/file/d/1G-lfdFOYMgC6bWwNNwsL3Dx9FRNa3K9p/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1G-lfdFOYMgC6bWwNNwsL3Dx9FRNa3K9p",
    "localFile": null
  },
  {
    "id": "book-1bvsohremxuf",
    "title": "Deep Learning Algorithms",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Deep Learning Algorithms.",
    "googleDriveId": "1bvSoHremxUf4nkFVJi6MWTF4X7vvssnX",
    "previewUrl": "https://drive.google.com/file/d/1bvSoHremxUf4nkFVJi6MWTF4X7vvssnX/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1bvSoHremxUf4nkFVJi6MWTF4X7vvssnX",
    "localFile": null
  },
  {
    "id": "book-1mbmtic9tj5e",
    "title": "Designing Mobile Apps",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Designing Mobile Apps.",
    "googleDriveId": "1MbMtIc9Tj5Ektp7tX8UHgwSHOE4xRD30",
    "previewUrl": "https://drive.google.com/file/d/1MbMtIc9Tj5Ektp7tX8UHgwSHOE4xRD30/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1MbMtIc9Tj5Ektp7tX8UHgwSHOE4xRD30",
    "localFile": null
  },
  {
    "id": "book-1ajdoksszkan",
    "title": "Doing Math with Python En",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Doing Math with Python En.",
    "googleDriveId": "1AjdOKsSZkaNoXTsmqjr03VmX3Tv_oCUt",
    "previewUrl": "https://drive.google.com/file/d/1AjdOKsSZkaNoXTsmqjr03VmX3Tv_oCUt/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1AjdOKsSZkaNoXTsmqjr03VmX3Tv_oCUt",
    "localFile": null
  },
  {
    "id": "book-175qal7-w2fd",
    "title": "Dokumen Pub JavaScript for Impatient Programmers Z 5657019",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Dokumen Pub JavaScript for Impatient Programmers Z 5657019.",
    "googleDriveId": "175qal7-W2FDzri1I95FNi6kcaGuo-AyZ",
    "previewUrl": "https://drive.google.com/file/d/175qal7-W2FDzri1I95FNi6kcaGuo-AyZ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=175qal7-W2FDzri1I95FNi6kcaGuo-AyZ",
    "localFile": null
  },
  {
    "id": "book-11qakpnmhvau",
    "title": "E Book Pemrograman Berbasis Web",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai E Book Pemrograman Berbasis Web untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "11QAKpnMhVaUwUua_WsswxktBXkt8MJk8",
    "previewUrl": "https://drive.google.com/file/d/11QAKpnMhVaUwUua_WsswxktBXkt8MJk8/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=11QAKpnMhVaUwUua_WsswxktBXkt8MJk8",
    "localFile": null
  },
  {
    "id": "book-1h6w61zr-k3h",
    "title": "Ebenezer D Simplified JavaScript for Very Important Programmers 2023",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Ebenezer D Simplified JavaScript for Very Important Programmers 2023.",
    "googleDriveId": "1H6w61zR-k3huIoLIVNLGYDkeMbaTLfJ3",
    "previewUrl": "https://drive.google.com/file/d/1H6w61zR-k3huIoLIVNLGYDkeMbaTLfJ3/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1H6w61zR-k3huIoLIVNLGYDkeMbaTLfJ3",
    "localFile": null
  },
  {
    "id": "book-1giq14ekkkfa",
    "title": "Ebook Keamanan Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Ebook Keamanan Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1giq14EkKkFax7qJt9f1EPsxFUqhtp_aQ",
    "previewUrl": "https://drive.google.com/file/d/1giq14EkKkFax7qJt9f1EPsxFUqhtp_aQ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1giq14EkKkFax7qJt9f1EPsxFUqhtp_aQ",
    "localFile": null
  },
  {
    "id": "book-1xedqk-yhzhx",
    "title": "Ebook Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Ebook Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1xEDQk-yHZHxJdxmeTol2Su5QKYBPLeXy",
    "previewUrl": "https://drive.google.com/file/d/1xEDQk-yHZHxJdxmeTol2Su5QKYBPLeXy/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1xEDQk-yHZHxJdxmeTol2Su5QKYBPLeXy",
    "localFile": null
  },
  {
    "id": "book-1j7krxlvlpp5",
    "title": "Flutter Begginer Guide",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Flutter Begginer Guide.",
    "googleDriveId": "1j7KrxLvlPP5f_Aq5JKSb2xtG7v5kGIhB",
    "previewUrl": "https://drive.google.com/file/d/1j7KrxLvlPP5f_Aq5JKSb2xtG7v5kGIhB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1j7KrxLvlPP5f_Aq5JKSb2xtG7v5kGIhB",
    "localFile": null
  },
  {
    "id": "book-16qn-vhdqzhj",
    "title": "Flutter Dart a Complete Guide to the Flutter Sdk Flutter Framework for Building Native Ios and Android Apps Booksrack Net",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Flutter Dart a Complete Guide to the Flutter Sdk Flutter Framework for Building Native Ios and Android Apps Booksrack Net.",
    "googleDriveId": "16qN-VhdQzhJK7vWmnS_z6clHhc7pq51H",
    "previewUrl": "https://drive.google.com/file/d/16qN-VhdQzhJK7vWmnS_z6clHhc7pq51H/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=16qN-VhdQzhJK7vWmnS_z6clHhc7pq51H",
    "localFile": null
  },
  {
    "id": "book-1cyprm6ll1_c",
    "title": "Flutter Nettrain",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Flutter Nettrain.",
    "googleDriveId": "1CyprM6lL1_CsvOQbkLIKB9NGoxD3YKul",
    "previewUrl": "https://drive.google.com/file/d/1CyprM6lL1_CsvOQbkLIKB9NGoxD3YKul/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1CyprM6lL1_CsvOQbkLIKB9NGoxD3YKul",
    "localFile": null
  },
  {
    "id": "book-14-7b1hq6knt",
    "title": "Full Course of Machine Learning",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Full Course of Machine Learning.",
    "googleDriveId": "14-7b1hQ6KntVk9hpSdMGy4GJu1eIrhAl",
    "previewUrl": "https://drive.google.com/file/d/14-7b1hQ6KntVk9hpSdMGy4GJu1eIrhAl/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=14-7b1hQ6KntVk9hpSdMGy4GJu1eIrhAl",
    "localFile": null
  },
  {
    "id": "book-1g3ojqaygydy",
    "title": "Full Stack Web Development",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Full Stack Web Development untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1g3OjQaYGYdyxIdWWLZK97LUfLxp2PAPH",
    "previewUrl": "https://drive.google.com/file/d/1g3OjQaYGYdyxIdWWLZK97LUfLxp2PAPH/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1g3OjQaYGYdyxIdWWLZK97LUfLxp2PAPH",
    "localFile": null
  },
  {
    "id": "book-1cyepuf6savy",
    "title": "Fullbook Konsep Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fullbook Konsep Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1CYepUF6sAVYOe-IdhIUVGfdQAulteJjo",
    "previewUrl": "https://drive.google.com/file/d/1CYepUF6sAVYOe-IdhIUVGfdQAulteJjo/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1CYepUF6sAVYOe-IdhIUVGfdQAulteJjo",
    "localFile": null
  },
  {
    "id": "book-11wpqig4gmlw",
    "title": "Fullbook Konsep Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fullbook Konsep Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "11WPQIG4gmLwWXZATgqnaCT2Nw0L7OykV",
    "previewUrl": "https://drive.google.com/file/d/11WPQIG4gmLwWXZATgqnaCT2Nw0L7OykV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=11WPQIG4gmLwWXZATgqnaCT2Nw0L7OykV",
    "localFile": null
  },
  {
    "id": "book-1bkg4pckrlso",
    "title": "Fullbook Pengantar Jaringan Komputer",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fullbook Pengantar Jaringan Komputer untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1bKG4PCKrLSOGZUOAzgtrClSRNa6hM1p1",
    "previewUrl": "https://drive.google.com/file/d/1bKG4PCKrLSOGZUOAzgtrClSRNa6hM1p1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1bKG4PCKrLSOGZUOAzgtrClSRNa6hM1p1",
    "localFile": null
  },
  {
    "id": "book-1ggc65pp9mwf",
    "title": "Fullbook Sistem Pendukung Keputusan",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fullbook Sistem Pendukung Keputusan untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1GGc65PP9MWFzaCHPS6HgMX1RN5sb33Zj",
    "previewUrl": "https://drive.google.com/file/d/1GGc65PP9MWFzaCHPS6HgMX1RN5sb33Zj/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1GGc65PP9MWFzaCHPS6HgMX1RN5sb33Zj",
    "localFile": null
  },
  {
    "id": "book-1dtr77wf_iza",
    "title": "Fundamentals of Creating a Great UI Ux",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fundamentals of Creating a Great UI Ux untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1DtR77Wf_IZAbAwUYOdI3FDZKWu7J_zyR",
    "previewUrl": "https://drive.google.com/file/d/1DtR77Wf_IZAbAwUYOdI3FDZKWu7J_zyR/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1DtR77Wf_IZAbAwUYOdI3FDZKWu7J_zyR",
    "localFile": null
  },
  {
    "id": "book-1mh3ww3w6-yf",
    "title": "Fundamentals of Creating a Great UI Ux",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Fundamentals of Creating a Great UI Ux untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1mH3wW3w6-yF0w8D_JZFnAxLH-7pHgIvB",
    "previewUrl": "https://drive.google.com/file/d/1mH3wW3w6-yF0w8D_JZFnAxLH-7pHgIvB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1mH3wW3w6-yF0w8D_JZFnAxLH-7pHgIvB",
    "localFile": null
  },
  {
    "id": "book-1_id3fxrzb5a",
    "title": "Get Coding Learn HTML CSS and JavaScript and Build a Website App and Game",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Get Coding Learn HTML CSS and JavaScript and Build a Website App and Game.",
    "googleDriveId": "1_ID3fxRzb5A48oulOYY82wVu7yDR6ly_",
    "previewUrl": "https://drive.google.com/file/d/1_ID3fxRzb5A48oulOYY82wVu7yDR6ly_/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1_ID3fxRzb5A48oulOYY82wVu7yDR6ly_",
    "localFile": null
  },
  {
    "id": "book-1ah-k9ctkny1",
    "title": "Git Apprentice Getting Started with Git Commands Concepts by Chris Belanger Z Lib Org",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan Git Apprentice Getting Started with Git Commands Concepts by Chris Belanger Z Lib Org.",
    "googleDriveId": "1aH-K9cTknY1LOytEd7bBSQRbIabdRYZo",
    "previewUrl": "https://drive.google.com/file/d/1aH-K9cTknY1LOytEd7bBSQRbIabdRYZo/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1aH-K9cTknY1LOytEd7bBSQRbIabdRYZo",
    "localFile": null
  },
  {
    "id": "book-1flw3bd7wh9_",
    "title": "Godot Beginners Develop Games Scripting",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Godot Beginners Develop Games Scripting untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1FLW3bD7wH9_uo6gDIOZwrFX7tLy6IYLq",
    "previewUrl": "https://drive.google.com/file/d/1FLW3bD7wH9_uo6gDIOZwrFX7tLy6IYLq/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1FLW3bD7wH9_uo6gDIOZwrFX7tLy6IYLq",
    "localFile": null
  },
  {
    "id": "book-1vef_3mkqmkw",
    "title": "Golang the Ultimate Guide",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Golang the Ultimate Guide untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1vef_3MkQMKWx002egj1vQYB38KtXSdV_",
    "previewUrl": "https://drive.google.com/file/d/1vef_3MkQMKWx002egj1vQYB38KtXSdV_/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1vef_3MkQMKWx002egj1vQYB38KtXSdV_",
    "localFile": null
  },
  {
    "id": "book-1-o_ote6hnfm",
    "title": "Hajian M Flutter Engineering 2024",
    "author": "M. Hajian",
    "category": "Mobile Development",
    "tags": [
      "flutter",
      "dart",
      "mobile",
      "cross-platform",
      "clean architecture"
    ],
    "size": "PDF",
    "description": "Buku rekayasa perangkat lunak tingkat mahir untuk merancang arsitektur aplikasi mobile Flutter yang tangguh.",
    "googleDriveId": "1-O_OtE6hnfMMGslVZR_26BVfO2HE-pnK",
    "previewUrl": "https://drive.google.com/file/d/1-O_OtE6hnfMMGslVZR_26BVfO2HE-pnK/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1-O_OtE6hnfMMGslVZR_26BVfO2HE-pnK",
    "localFile": "ebook/841290729-Hajian-M-Flutter-Engineering-2024.pdf"
  },
  {
    "id": "book-1ndtfryiodcl",
    "title": "How to Code in Node Js",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku How to Code in Node Js.",
    "googleDriveId": "1NDTfRYiOdCLBgDC8IG4FqWFnmJRaiuUB",
    "previewUrl": "https://drive.google.com/file/d/1NDTfRYiOdCLBgDC8IG4FqWFnmJRaiuUB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1NDTfRYiOdCLBgDC8IG4FqWFnmJRaiuUB",
    "localFile": null
  },
  {
    "id": "book-16pjzhscf8ru",
    "title": "How to Set Up CI/CD Workflows in Gitlab and Github",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan How to Set Up CI/CD Workflows in Gitlab and Github.",
    "googleDriveId": "16pJZHScF8RUlNMFIJEQCOyxRgtzIHip1",
    "previewUrl": "https://drive.google.com/file/d/16pJZHScF8RUlNMFIJEQCOyxRgtzIHip1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=16pJZHScF8RUlNMFIJEQCOyxRgtzIHip1",
    "localFile": null
  },
  {
    "id": "book-1anbg_lapjhd",
    "title": "HTML to React the Ultimate Guide Pdf 1",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku HTML to React the Ultimate Guide Pdf 1.",
    "googleDriveId": "1aNBG_LapjHdvzvnZhUsVPFaoI5VGpNSN",
    "previewUrl": "https://drive.google.com/file/d/1aNBG_LapjHdvzvnZhUsVPFaoI5VGpNSN/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1aNBG_LapjHdvzvnZhUsVPFaoI5VGpNSN",
    "localFile": null
  },
  {
    "id": "book-1ya2uemqzura",
    "title": "Html5 Tutorial",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Web & Desain",
    "tags": [
      "html",
      "css",
      "web design",
      "tata letak"
    ],
    "size": "PDF",
    "description": "Panduan fundamental perancangan tampilan antarmuka web responsif dan standar web modern dengan Html5 Tutorial.",
    "googleDriveId": "1Ya2uemQzURAasA6yWMazIyjSFaTykCf4",
    "previewUrl": "https://drive.google.com/file/d/1Ya2uemQzURAasA6yWMazIyjSFaTykCf4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ya2uemQzURAasA6yWMazIyjSFaTykCf4",
    "localFile": null
  },
  {
    "id": "book-13s2jlf_mj6s",
    "title": "Interaksi Manusia",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Interaksi Manusia untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "13s2Jlf_MJ6SOXlkQeQhw2MoCrAINUEwV",
    "previewUrl": "https://drive.google.com/file/d/13s2Jlf_MJ6SOXlkQeQhw2MoCrAINUEwV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=13s2Jlf_MJ6SOXlkQeQhw2MoCrAINUEwV",
    "localFile": null
  },
  {
    "id": "book-1a3_mrxwdi3j",
    "title": "Introduction to Data Mining and Analytics",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Introduction to Data Mining and Analytics untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1A3_mRxWDI3JqRNOTY5OnrJvMmdxvY3nJ",
    "previewUrl": "https://drive.google.com/file/d/1A3_mRxWDI3JqRNOTY5OnrJvMmdxvY3nJ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1A3_mRxWDI3JqRNOTY5OnrJvMmdxvY3nJ",
    "localFile": null
  },
  {
    "id": "book-1ugkp5ncjd4y",
    "title": "Introduction to Data Science",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Introduction to Data Science untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1ugkp5ncJD4Yw1h-YoHbHSfEWLJOvcxsh",
    "previewUrl": "https://drive.google.com/file/d/1ugkp5ncJD4Yw1h-YoHbHSfEWLJOvcxsh/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1ugkp5ncJD4Yw1h-YoHbHSfEWLJOvcxsh",
    "localFile": null
  },
  {
    "id": "book-1m8b8culzo3d",
    "title": "Jaringan Komputer",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Jaringan Komputer untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1m8b8CulZo3d5ab7w7CXMTk0b86btyJv6",
    "previewUrl": "https://drive.google.com/file/d/1m8b8CulZo3d5ab7w7CXMTk0b86btyJv6/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1m8b8CulZo3d5ab7w7CXMTk0b86btyJv6",
    "localFile": null
  },
  {
    "id": "book-1od9l2-mlynz",
    "title": "Jaringan Komputer",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Jaringan Komputer untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1oD9l2-MlyNzc7KuN1Hk7RRzLUweHJJB3",
    "previewUrl": "https://drive.google.com/file/d/1oD9l2-MlyNzc7KuN1Hk7RRzLUweHJJB3/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1oD9l2-MlyNzc7KuN1Hk7RRzLUweHJJB3",
    "localFile": null
  },
  {
    "id": "book-1qt11nlo1gq5",
    "title": "Jaringan Komputer Untuk Pemula",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Jaringan Komputer Untuk Pemula untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1qt11nlo1gq50KLJILrzJX7MZ9lxlsHz_",
    "previewUrl": "https://drive.google.com/file/d/1qt11nlo1gq50KLJILrzJX7MZ9lxlsHz_/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1qt11nlo1gq50KLJILrzJX7MZ9lxlsHz_",
    "localFile": null
  },
  {
    "id": "book-1iqqsparcbhy",
    "title": "Java",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Java.",
    "googleDriveId": "1iqQSPaRCbHY7dJrlbP07nHxaz2nO1KNY",
    "previewUrl": "https://drive.google.com/file/d/1iqQSPaRCbHY7dJrlbP07nHxaz2nO1KNY/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1iqQSPaRCbHY7dJrlbP07nHxaz2nO1KNY",
    "localFile": null
  },
  {
    "id": "book-18vbywrdqwmm",
    "title": "Java Cheat Sheet",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Java Cheat Sheet.",
    "googleDriveId": "18vbywRDqWMMOFIjgExzq7YPoE5k5JI7f",
    "previewUrl": "https://drive.google.com/file/d/18vbywRDqWMMOFIjgExzq7YPoE5k5JI7f/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=18vbywRDqWMMOFIjgExzq7YPoE5k5JI7f",
    "localFile": null
  },
  {
    "id": "book-15wyg4viqycv",
    "title": "Java for Beginners Get from Zero to Object Oriented Programming",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Java for Beginners Get from Zero to Object Oriented Programming.",
    "googleDriveId": "15Wyg4vIQyCvM0DBOLImlceblWFBZQ_p1",
    "previewUrl": "https://drive.google.com/file/d/15Wyg4vIQyCvM0DBOLImlceblWFBZQ_p1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=15Wyg4vIQyCvM0DBOLImlceblWFBZQ_p1",
    "localFile": null
  },
  {
    "id": "book-1wuuvxr93shd",
    "title": "Java Zero to Hero",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Java Zero to Hero.",
    "googleDriveId": "1WuUVxR93sHd9ZqjsU-o0FKLJMcEpYm6W",
    "previewUrl": "https://drive.google.com/file/d/1WuUVxR93sHd9ZqjsU-o0FKLJMcEpYm6W/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1WuUVxR93sHd9ZqjsU-o0FKLJMcEpYm6W",
    "localFile": null
  },
  {
    "id": "book-1fw9dip4t_br",
    "title": "JavaScript Book",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku JavaScript Book.",
    "googleDriveId": "1Fw9dIP4T_BrzvTg1phkmP7c5fRuagmR3",
    "previewUrl": "https://drive.google.com/file/d/1Fw9dIP4T_BrzvTg1phkmP7c5fRuagmR3/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fw9dIP4T_BrzvTg1phkmP7c5fRuagmR3",
    "localFile": null
  },
  {
    "id": "book-12posndm5x96",
    "title": "JavaScript for Beginners the Complete Manual for Beginners with Tips and Tricks to Learn JavaScript from Scratch by Mark Harrington Harrington Mark",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku JavaScript for Beginners the Complete Manual for Beginners with Tips and Tricks to Learn JavaScript from Scratch by Mark Harrington Harrington Mark.",
    "googleDriveId": "12pOsNDM5x96g8bauQcYdZKAfZ919Ed5f",
    "previewUrl": "https://drive.google.com/file/d/12pOsNDM5x96g8bauQcYdZKAfZ919Ed5f/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=12pOsNDM5x96g8bauQcYdZKAfZ919Ed5f",
    "localFile": null
  },
  {
    "id": "book-1hvy74jjiihp",
    "title": "JavaScript jQuery Jon Duckett",
    "author": "Jon Duckett",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "jquery",
      "frontend",
      "web design"
    ],
    "size": "PDF",
    "description": "Buku visual interaktif panduan front-end web development dan pemrograman JavaScript serta jQuery.",
    "googleDriveId": "1Hvy74JjiIhp4QqT2iLLubKq_e55xfrkn",
    "previewUrl": "https://drive.google.com/file/d/1Hvy74JjiIhp4QqT2iLLubKq_e55xfrkn/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Hvy74JjiIhp4QqT2iLLubKq_e55xfrkn",
    "localFile": null
  },
  {
    "id": "book-1czss5o3ymjq",
    "title": "JavaScript Tutorial",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku JavaScript Tutorial.",
    "googleDriveId": "1CZSS5o3YMjQ8jaX0T_A42HSb6SPCWJBQ",
    "previewUrl": "https://drive.google.com/file/d/1CZSS5o3YMjQ8jaX0T_A42HSb6SPCWJBQ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1CZSS5o3YMjQ8jaX0T_A42HSb6SPCWJBQ",
    "localFile": null
  },
  {
    "id": "book-1eyvkdcvwqvb",
    "title": "Jeff P Java Learn Java Programming from Beginner to Professional 2024",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Jeff P Java Learn Java Programming from Beginner to Professional 2024.",
    "googleDriveId": "1eyvkDcvwqvBehyur6-Dzh3JfNRp9Smq4",
    "previewUrl": "https://drive.google.com/file/d/1eyvkDcvwqvBehyur6-Dzh3JfNRp9Smq4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1eyvkDcvwqvBehyur6-Dzh3JfNRp9Smq4",
    "localFile": null
  },
  {
    "id": "book-19t-ki2emypy",
    "title": "Kelompok 2 004 058 062 070 079 Etika Privasi dan Keamanan Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Kelompok 2 004 058 062 070 079 Etika Privasi dan Keamanan Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "19T-KI2EmYPYbZy9QoGvKJO5rCWZf50Ke",
    "previewUrl": "https://drive.google.com/file/d/19T-KI2EmYPYbZy9QoGvKJO5rCWZf50Ke/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=19T-KI2EmYPYbZy9QoGvKJO5rCWZf50Ke",
    "localFile": null
  },
  {
    "id": "book-1v-serywvoio",
    "title": "Konsep Dasar Sistem Informasi Isbn",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Konsep Dasar Sistem Informasi Isbn untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1V-sERYWvoiOpJGuMBTavnFHdlrVG_aWq",
    "previewUrl": "https://drive.google.com/file/d/1V-sERYWvoiOpJGuMBTavnFHdlrVG_aWq/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1V-sERYWvoiOpJGuMBTavnFHdlrVG_aWq",
    "localFile": null
  },
  {
    "id": "book-1yfpocqov7m_",
    "title": "Konsep Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Konsep Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1YFpocqOV7m_ibHJ4418mtU1vAuWYcN84",
    "previewUrl": "https://drive.google.com/file/d/1YFpocqOV7m_ibHJ4418mtU1vAuWYcN84/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1YFpocqOV7m_ibHJ4418mtU1vAuWYcN84",
    "localFile": null
  },
  {
    "id": "book-13apuwqieqvo",
    "title": "Konsep Sistem Informasi Arif Rizki",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Konsep Sistem Informasi Arif Rizki untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "13aPuwQIEQvO2sWW1fcqiQnCH9tGDHEmH",
    "previewUrl": "https://drive.google.com/file/d/13aPuwQIEQvO2sWW1fcqiQnCH9tGDHEmH/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=13aPuwQIEQvO2sWW1fcqiQnCH9tGDHEmH",
    "localFile": null
  },
  {
    "id": "book-1bf73sf0npld",
    "title": "Laravel",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Laravel.",
    "googleDriveId": "1bF73Sf0NPlDF5uMhn6ZrCA5Q9ncYKfA4",
    "previewUrl": "https://drive.google.com/file/d/1bF73Sf0NPlDF5uMhn6ZrCA5Q9ncYKfA4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1bF73Sf0NPlDF5uMhn6ZrCA5Q9ncYKfA4",
    "localFile": null
  },
  {
    "id": "book-1sw9ye2cijym",
    "title": "Laravel First Framework",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Laravel First Framework.",
    "googleDriveId": "1sW9yE2cIJyMZmu733axe0BCvL1zlKZOX",
    "previewUrl": "https://drive.google.com/file/d/1sW9yE2cIJyMZmu733axe0BCvL1zlKZOX/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1sW9yE2cIJyMZmu733axe0BCvL1zlKZOX",
    "localFile": null
  },
  {
    "id": "book-1-ir-wo1ua32",
    "title": "Laravel Testing Decoded",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Laravel Testing Decoded.",
    "googleDriveId": "1-ir-WO1uA32yZjWVip0nPQ7AFBzq-yy7",
    "previewUrl": "https://drive.google.com/file/d/1-ir-WO1uA32yZjWVip0nPQ7AFBzq-yy7/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1-ir-WO1uA32yZjWVip0nPQ7AFBzq-yy7",
    "localFile": null
  },
  {
    "id": "book-1kjb5c5b-qje",
    "title": "Large Scale Apps with Vue Vite and TypeScript Damiano Fusco Z Library",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Large Scale Apps with Vue Vite and TypeScript Damiano Fusco Z Library.",
    "googleDriveId": "1kJB5C5b-QJeKngpGsew16j6dz6sOatkV",
    "previewUrl": "https://drive.google.com/file/d/1kJB5C5b-QJeKngpGsew16j6dz6sOatkV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1kJB5C5b-QJeKngpGsew16j6dz6sOatkV",
    "localFile": null
  },
  {
    "id": "book-1tqae4r7ncko",
    "title": "Learn CSS",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Web & Desain",
    "tags": [
      "html",
      "css",
      "web design",
      "tata letak"
    ],
    "size": "PDF",
    "description": "Panduan fundamental perancangan tampilan antarmuka web responsif dan standar web modern dengan Learn CSS.",
    "googleDriveId": "1tQaE4r7ncKoqqluStaacbjspfsseUVar",
    "previewUrl": "https://drive.google.com/file/d/1tQaE4r7ncKoqqluStaacbjspfsseUVar/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1tQaE4r7ncKoqqluStaacbjspfsseUVar",
    "localFile": null
  },
  {
    "id": "book-1_mnjneo8xa6",
    "title": "Learn DevOps",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan Learn DevOps.",
    "googleDriveId": "1_MnjNeo8xa6dLFLWwxKNyJWg1Xf7a88u",
    "previewUrl": "https://drive.google.com/file/d/1_MnjNeo8xa6dLFLWwxKNyJWg1Xf7a88u/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1_MnjNeo8xa6dLFLWwxKNyJWg1Xf7a88u",
    "localFile": null
  },
  {
    "id": "book-1gyatc1lyuoi",
    "title": "Learn JavaScript in a Day",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Learn JavaScript in a Day.",
    "googleDriveId": "1GYatC1LYUoi8CEM5ElTx96X83Uo10Bmo",
    "previewUrl": "https://drive.google.com/file/d/1GYatC1LYUoi8CEM5ElTx96X83Uo10Bmo/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1GYatC1LYUoi8CEM5ElTx96X83Uo10Bmo",
    "localFile": null
  },
  {
    "id": "book-1rih69tki3ek",
    "title": "Learn JavaScript Visually",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Learn JavaScript Visually.",
    "googleDriveId": "1rIh69tkI3EKlayNGW3X36SHDtH3kFfu7",
    "previewUrl": "https://drive.google.com/file/d/1rIh69tkI3EKlayNGW3X36SHDtH3kFfu7/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1rIh69tkI3EKlayNGW3X36SHDtH3kFfu7",
    "localFile": null
  },
  {
    "id": "book-1xdfp9t6y1qc",
    "title": "Learn PHP in a Day",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Learn PHP in a Day.",
    "googleDriveId": "1XDfp9t6Y1qcceTVrAn_jALkMmcGKGfra",
    "previewUrl": "https://drive.google.com/file/d/1XDfp9t6Y1qcceTVrAn_jALkMmcGKGfra/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1XDfp9t6Y1qcceTVrAn_jALkMmcGKGfra",
    "localFile": null
  },
  {
    "id": "book-1yjnwsfcs8x_",
    "title": "Learn PHP Mysql with Ultimate",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Learn PHP Mysql with Ultimate.",
    "googleDriveId": "1YJNWSfcs8x_xAmjVusSaf1QWSPjAYjtd",
    "previewUrl": "https://drive.google.com/file/d/1YJNWSfcs8x_xAmjVusSaf1QWSPjAYjtd/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1YJNWSfcs8x_xAmjVusSaf1QWSPjAYjtd",
    "localFile": null
  },
  {
    "id": "book-1psjmmfvruow",
    "title": "Learn Python in a Day",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Learn Python in a Day.",
    "googleDriveId": "1psJMmfVruoW8hnYq_EiJIwzNs9OqTaAk",
    "previewUrl": "https://drive.google.com/file/d/1psJMmfVruoW8hnYq_EiJIwzNs9OqTaAk/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1psJMmfVruoW8hnYq_EiJIwzNs9OqTaAk",
    "localFile": null
  },
  {
    "id": "book-10fekcxkcxxm",
    "title": "Learn Python with Examples",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Learn Python with Examples.",
    "googleDriveId": "10fEkCXKcxXMcE4Vc7daFhurXt-yczx3w",
    "previewUrl": "https://drive.google.com/file/d/10fEkCXKcxXMcE4Vc7daFhurXt-yczx3w/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=10fEkCXKcxXMcE4Vc7daFhurXt-yczx3w",
    "localFile": null
  },
  {
    "id": "book-1g18zry3ua3w",
    "title": "Learning C by Developing Games with Unity",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Learning C by Developing Games with Unity untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1g18zry3Ua3w_ONpoJBEpE49K6Vfxz_Rg",
    "previewUrl": "https://drive.google.com/file/d/1g18zry3Ua3w_ONpoJBEpE49K6Vfxz_Rg/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1g18zry3Ua3w_ONpoJBEpE49K6Vfxz_Rg",
    "localFile": null
  },
  {
    "id": "book-1fft1-qlxeq1",
    "title": "Learning JavaScript",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Learning JavaScript.",
    "googleDriveId": "1Fft1-qLXeQ11isTq3iD0iwn8D4rM7Esz",
    "previewUrl": "https://drive.google.com/file/d/1Fft1-qLXeQ11isTq3iD0iwn8D4rM7Esz/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fft1-qLXeQ11isTq3iD0iwn8D4rM7Esz",
    "localFile": null
  },
  {
    "id": "book-1q7scjj6ddg3",
    "title": "Learning Python by Building Games",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Learning Python by Building Games.",
    "googleDriveId": "1q7scjj6dDg3N_SudAqiyoWK4LNSk28VB",
    "previewUrl": "https://drive.google.com/file/d/1q7scjj6dDg3N_SudAqiyoWK4LNSk28VB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1q7scjj6dDg3N_SudAqiyoWK4LNSk28VB",
    "localFile": null
  },
  {
    "id": "book-11inu1mc9ybg",
    "title": "Learning React Modern Patterns for Developing React Apps 2nbsped",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Learning React Modern Patterns for Developing React Apps 2nbsped.",
    "googleDriveId": "11iNU1Mc9Ybgh6mXTDUszisjacTEsF6jI",
    "previewUrl": "https://drive.google.com/file/d/11iNU1Mc9Ybgh6mXTDUszisjacTEsF6jI/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=11iNU1Mc9Ybgh6mXTDUszisjacTEsF6jI",
    "localFile": null
  },
  {
    "id": "book-1bvwhsshe2it",
    "title": "Learning the Pandas Library Python Tools for Data Munging Analysis and Visual",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Learning the Pandas Library Python Tools for Data Munging Analysis and Visual.",
    "googleDriveId": "1bvWhsSHe2it4Ts_QpgrUuRQfikFTNs6a",
    "previewUrl": "https://drive.google.com/file/d/1bvWhsSHe2it4Ts_QpgrUuRQfikFTNs6a/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1bvWhsSHe2it4Ts_QpgrUuRQfikFTNs6a",
    "localFile": null
  },
  {
    "id": "book-1a6rvq0l18er",
    "title": "Lydia Hallie Addy Osmani Learning Patterns 2021 Libgen Li",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Lydia Hallie Addy Osmani Learning Patterns 2021 Libgen Li untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1A6RvQ0l18erRA4dYnY2xD6q0o7pmWrVi",
    "previewUrl": "https://drive.google.com/file/d/1A6RvQ0l18erRA4dYnY2xD6q0o7pmWrVi/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1A6RvQ0l18erRA4dYnY2xD6q0o7pmWrVi",
    "localFile": null
  },
  {
    "id": "book-1nb-0pcwbo7e",
    "title": "Machine Learning in Industry",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Machine Learning in Industry.",
    "googleDriveId": "1nB-0PCwBO7eU-iz9O3Wv1jBVgYiYNmXw",
    "previewUrl": "https://drive.google.com/file/d/1nB-0PCwBO7eU-iz9O3Wv1jBVgYiYNmXw/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1nB-0PCwBO7eU-iz9O3Wv1jBVgYiYNmXw",
    "localFile": null
  },
  {
    "id": "book-1vxllk_vf0jb",
    "title": "Machine Learning with Python",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Machine Learning with Python.",
    "googleDriveId": "1VXlLK_VF0jBDsPk_IanFeAPSvnVkWuew",
    "previewUrl": "https://drive.google.com/file/d/1VXlLK_VF0jBDsPk_IanFeAPSvnVkWuew/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1VXlLK_VF0jBDsPk_IanFeAPSvnVkWuew",
    "localFile": null
  },
  {
    "id": "book-1xhcsvotlgsu",
    "title": "Manajemen Layanan Ti",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Manajemen Layanan Ti untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1XhcsvOtLgSuu7P0Wva8lwUD5iLHuRfjm",
    "previewUrl": "https://drive.google.com/file/d/1XhcsvOtLgSuu7P0Wva8lwUD5iLHuRfjm/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1XhcsvOtLgSuu7P0Wva8lwUD5iLHuRfjm",
    "localFile": null
  },
  {
    "id": "book-1gr4r83kjqrx",
    "title": "Mastering Ai Agents",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Mastering Ai Agents.",
    "googleDriveId": "1gR4r83kjQrXQOprOZl_DQESBhET3C_tB",
    "previewUrl": "https://drive.google.com/file/d/1gR4r83kjQrXQOprOZl_DQESBhET3C_tB/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1gR4r83kjQrXQOprOZl_DQESBhET3C_tB",
    "localFile": null
  },
  {
    "id": "book-1mfsx9na7u-c",
    "title": "Mastering Ai Agents Ebook",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Mastering Ai Agents Ebook.",
    "googleDriveId": "1mfSX9na7U-c8HYWCis9ghylM_9078Ysg",
    "previewUrl": "https://drive.google.com/file/d/1mfSX9na7U-c8HYWCis9ghylM_9078Ysg/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1mfSX9na7U-c8HYWCis9ghylM_9078Ysg",
    "localFile": null
  },
  {
    "id": "book-1hy7evto46ve",
    "title": "Mastering C Programming",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Mastering C Programming untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1hY7evTo46veBP5uXbIzrCqxfGuD_6dfb",
    "previewUrl": "https://drive.google.com/file/d/1hY7evTo46veBP5uXbIzrCqxfGuD_6dfb/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1hY7evTo46veBP5uXbIzrCqxfGuD_6dfb",
    "localFile": null
  },
  {
    "id": "book-1i7rsdjmomua",
    "title": "Mastering Netbeans Sample Chapter",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Mastering Netbeans Sample Chapter untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1I7RsdJMOmuALhBobzRUX0v2nUTTnj9Bv",
    "previewUrl": "https://drive.google.com/file/d/1I7RsdJMOmuALhBobzRUX0v2nUTTnj9Bv/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1I7RsdJMOmuALhBobzRUX0v2nUTTnj9Bv",
    "localFile": null
  },
  {
    "id": "book-11iytqfhrdor",
    "title": "Mathematical Modeling for Business Analytics",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Mathematical Modeling for Business Analytics.",
    "googleDriveId": "11IytqfhRDoRIIKz5h-EAP37L2RcuCnWj",
    "previewUrl": "https://drive.google.com/file/d/11IytqfhRDoRIIKz5h-EAP37L2RcuCnWj/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=11IytqfhRDoRIIKz5h-EAP37L2RcuCnWj",
    "localFile": null
  },
  {
    "id": "book-1qjbwozp_h_h",
    "title": "Membangun Website Toko Online dengan Laravel Nuxtjs dan Payment Gateway Dark",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Membangun Website Toko Online dengan Laravel Nuxtjs dan Payment Gateway Dark.",
    "googleDriveId": "1qJbWOzP_h_hgAC_UgFuqRKFkuihlDUdI",
    "previewUrl": "https://drive.google.com/file/d/1qJbWOzP_h_hgAC_UgFuqRKFkuihlDUdI/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1qJbWOzP_h_hgAC_UgFuqRKFkuihlDUdI",
    "localFile": null
  },
  {
    "id": "book-1dfsvzyzibz6",
    "title": "Membuat CMS Website dengan CodeIgniter dari Nol sampai Online 20 21 1686",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Membuat CMS Website dengan CodeIgniter dari Nol sampai Online 20 21 1686.",
    "googleDriveId": "1DfSvZyzIbz6gVwN6pPt0ZiGY8UW5VBoW",
    "previewUrl": "https://drive.google.com/file/d/1DfSvZyzIbz6gVwN6pPt0ZiGY8UW5VBoW/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1DfSvZyzIbz6gVwN6pPt0ZiGY8UW5VBoW",
    "localFile": "ebook/Membuat-CMS-WebSite-Dengan-Codigniter-Dari-Nol-Sampai-Online-20-21-1686-ebook-free.pdf"
  },
  {
    "id": "book-1hocy_yx1fau",
    "title": "Mempelajari Dasar Dasar Laravel a Z V1 0 12661",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan Mempelajari Dasar Dasar Laravel a Z V1 0 12661.",
    "googleDriveId": "1hoCy_Yx1fAu1Px_RtHfHrbZ5PGoK9HRr",
    "previewUrl": "https://drive.google.com/file/d/1hoCy_Yx1fAu1Px_RtHfHrbZ5PGoK9HRr/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1hoCy_Yx1fAu1Px_RtHfHrbZ5PGoK9HRr",
    "localFile": null
  },
  {
    "id": "book-10cuso-7fk63",
    "title": "Metodologi Pengembangan Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Metodologi Pengembangan Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "10CUSo-7fk63f8HHJnAnagSbji3C5FDUx",
    "previewUrl": "https://drive.google.com/file/d/10CUSo-7fk63f8HHJnAnagSbji3C5FDUx/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=10CUSo-7fk63f8HHJnAnagSbji3C5FDUx",
    "localFile": null
  },
  {
    "id": "book-1429rrg-bztx",
    "title": "Microsoft SQL Database",
    "author": "Teknologi & Komputasi",
    "category": "Database & SQL",
    "tags": [
      "sql",
      "database",
      "basis data",
      "query"
    ],
    "size": "PDF",
    "description": "Pengelolaan basis data, pengoptimalan kueri SQL, dan integritas data skala besar melalui Microsoft SQL Database.",
    "googleDriveId": "1429RRg-BZTxrQiH6T6JEY5jkLntk7yCj",
    "previewUrl": "https://drive.google.com/file/d/1429RRg-BZTxrQiH6T6JEY5jkLntk7yCj/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1429RRg-BZTxrQiH6T6JEY5jkLntk7yCj",
    "localFile": null
  },
  {
    "id": "book-1avq62qk_sxs",
    "title": "Modern App Development with Dart and Flutter 2 a Comprehensive Introduction to Flutter",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Modern App Development with Dart and Flutter 2 a Comprehensive Introduction to Flutter.",
    "googleDriveId": "1AvQ62qk_sxSJZjnc9GYm0E4vWkksj987",
    "previewUrl": "https://drive.google.com/file/d/1AvQ62qk_sxSJZjnc9GYm0E4vWkksj987/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1AvQ62qk_sxSJZjnc9GYm0E4vWkksj987",
    "localFile": null
  },
  {
    "id": "book-1d4gbxd0sye6",
    "title": "Modul Administrasiinfrastrukturjaringankelasxi Xii",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul Administrasiinfrastrukturjaringankelasxi Xii untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1D4gbXd0SYe6qtqeV2oACTuuH3XzcnQd0",
    "previewUrl": "https://drive.google.com/file/d/1D4gbXd0SYe6qtqeV2oACTuuH3XzcnQd0/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1D4gbXd0SYe6qtqeV2oACTuuH3XzcnQd0",
    "localFile": null
  },
  {
    "id": "book-1nvqiwzkahsh",
    "title": "Modul Interaksi Manusia dan Komputer Gaya Inte",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul Interaksi Manusia dan Komputer Gaya Inte untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1NvQIWzKAhShK7Dta6TpCQgi9nJuxF7jo",
    "previewUrl": "https://drive.google.com/file/d/1NvQIWzKAhShK7Dta6TpCQgi9nJuxF7jo/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1NvQIWzKAhShK7Dta6TpCQgi9nJuxF7jo",
    "localFile": null
  },
  {
    "id": "book-1xw0ktez8o-0",
    "title": "Modul It Enterprise",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul It Enterprise untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1Xw0ktez8O-0qyuRaAuJdjHR9EpmDBp5m",
    "previewUrl": "https://drive.google.com/file/d/1Xw0ktez8O-0qyuRaAuJdjHR9EpmDBp5m/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xw0ktez8O-0qyuRaAuJdjHR9EpmDBp5m",
    "localFile": null
  },
  {
    "id": "book-1kyiqxs_c599",
    "title": "Modul Manajemen Proyek Si 0009 D3",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul Manajemen Proyek Si 0009 D3 untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1kYIqXs_c599Fn-cOeIzAEsTH5uWMLIIm",
    "previewUrl": "https://drive.google.com/file/d/1kYIqXs_c599Fn-cOeIzAEsTH5uWMLIIm/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1kYIqXs_c599Fn-cOeIzAEsTH5uWMLIIm",
    "localFile": null
  },
  {
    "id": "book-1dvbcil1ilnu",
    "title": "Modul Pemrograman 2019 Python",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Modul Pemrograman 2019 Python.",
    "googleDriveId": "1dVbCIl1iLNU6YNF6Gc3tsKfwFe54HPEY",
    "previewUrl": "https://drive.google.com/file/d/1dVbCIl1iLNU6YNF6Gc3tsKfwFe54HPEY/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1dVbCIl1iLNU6YNF6Gc3tsKfwFe54HPEY",
    "localFile": null
  },
  {
    "id": "book-1rvrr4xdviz-",
    "title": "Modul Sistem Basis Data",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul Sistem Basis Data untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1rVRr4XDViz-gbEyljokeaCyGebf1EFh-",
    "previewUrl": "https://drive.google.com/file/d/1rVRr4XDViz-gbEyljokeaCyGebf1EFh-/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1rVRr4XDViz-gbEyljokeaCyGebf1EFh-",
    "localFile": null
  },
  {
    "id": "book-1myxgjciptce",
    "title": "Modul Sistembasisdata",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Modul Sistembasisdata untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1MYxgJCiPtCEXy6eMbSwPUD4qUr_Ph6qm",
    "previewUrl": "https://drive.google.com/file/d/1MYxgJCiPtCEXy6eMbSwPUD4qUr_Ph6qm/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1MYxgJCiPtCEXy6eMbSwPUD4qUr_Ph6qm",
    "localFile": null
  },
  {
    "id": "book-1rqxaqptjmgu",
    "title": "Moore K Mastering Flutter Learn to Develop Flutter Apps 2025",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Moore K Mastering Flutter Learn to Develop Flutter Apps 2025.",
    "googleDriveId": "1RqXaQpTJMgueo5lfjZEVR2WZlUzLHnGD",
    "previewUrl": "https://drive.google.com/file/d/1RqXaQpTJMgueo5lfjZEVR2WZlUzLHnGD/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1RqXaQpTJMgueo5lfjZEVR2WZlUzLHnGD",
    "localFile": null
  },
  {
    "id": "book-14ujq5nuom-t",
    "title": "Moore K Mastering Flutter Learn to Develop Flutter Apps 2025",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Moore K Mastering Flutter Learn to Develop Flutter Apps 2025.",
    "googleDriveId": "14ujq5NUoM-T-kg-cmOpJPCXc4KmogWyt",
    "previewUrl": "https://drive.google.com/file/d/14ujq5NUoM-T-kg-cmOpJPCXc4KmogWyt/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=14ujq5NUoM-T-kg-cmOpJPCXc4KmogWyt",
    "localFile": null
  },
  {
    "id": "book-1ob_jmujvfdp",
    "title": "Murach S Java Programming",
    "author": "Murach Publishing",
    "category": "Java & OOP",
    "tags": [
      "java",
      "murach",
      "oop",
      "software engineering"
    ],
    "size": "PDF",
    "description": "Metode belajar Java terstruktur dua halaman khas Murach untuk penguasaan cepat pemrograman berorientasi objek.",
    "googleDriveId": "1oB_jMuJvFdpmb5AgXKTgKXN6l9qxOMCn",
    "previewUrl": "https://drive.google.com/file/d/1oB_jMuJvFdpmb5AgXKTgKXN6l9qxOMCn/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1oB_jMuJvFdpmb5AgXKTgKXN6l9qxOMCn",
    "localFile": null
  },
  {
    "id": "book-1ou080g63q5m",
    "title": "Natural Language Processing Nlp and Machine Learning Mltheory and Applications",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Natural Language Processing Nlp and Machine Learning Mltheory and Applications.",
    "googleDriveId": "1oU080g63q5m6dqhhLzjRh5Jj1vVyC8xI",
    "previewUrl": "https://drive.google.com/file/d/1oU080g63q5m6dqhhLzjRh5Jj1vVyC8xI/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1oU080g63q5m6dqhhLzjRh5Jj1vVyC8xI",
    "localFile": null
  },
  {
    "id": "book-1gwy9nekfkxl",
    "title": "Next.js Ebook",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Next.js Ebook untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1GwY9nekfKXlhwRNysrldPc0f6S7kn-ns",
    "previewUrl": "https://drive.google.com/file/d/1GwY9nekfKXlhwRNysrldPc0f6S7kn-ns/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1GwY9nekfKXlhwRNysrldPc0f6S7kn-ns",
    "localFile": null
  },
  {
    "id": "book-17o2knqhiiod",
    "title": "Next.js Ebook",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Next.js Ebook untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "17o2knqhIioDRouLjP6R_J_vZ7zemCbfL",
    "previewUrl": "https://drive.google.com/file/d/17o2knqhIioDRouLjP6R_J_vZ7zemCbfL/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=17o2knqhIioDRouLjP6R_J_vZ7zemCbfL",
    "localFile": "ebook/Next-js-eBook.pdf"
  },
  {
    "id": "book-1jqdcuhf03dh",
    "title": "Oceanofpdf Com Java Programming Made Easy Alfred James",
    "author": "Teknologi & Komputasi",
    "category": "Java & OOP",
    "tags": [
      "java",
      "oop",
      "backend",
      "arsitektur perangkat lunak"
    ],
    "size": "PDF",
    "description": "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh melalui Oceanofpdf Com Java Programming Made Easy Alfred James.",
    "googleDriveId": "1jQDcUHF03Dhj-FhhsksFbQYB-W1RrVLJ",
    "previewUrl": "https://drive.google.com/file/d/1jQDcUHF03Dhj-FhhsksFbQYB-W1RrVLJ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1jQDcUHF03Dhj-FhhsksFbQYB-W1RrVLJ",
    "localFile": null
  },
  {
    "id": "book-1xj9hndtspev",
    "title": "Oceanofpdf Com Machine Learning for Absolute Beginners a Oliver Theobald",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Oceanofpdf Com Machine Learning for Absolute Beginners a Oliver Theobald.",
    "googleDriveId": "1Xj9hnDtSPeVDwCtyZwQ03GsUdtsCoCvu",
    "previewUrl": "https://drive.google.com/file/d/1Xj9hnDtSPeVDwCtyZwQ03GsUdtsCoCvu/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xj9hnDtSPeVDwCtyZwQ03GsUdtsCoCvu",
    "localFile": null
  },
  {
    "id": "book-1nob6wak87r8",
    "title": "Optimization for Machine Learning 1",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Optimization for Machine Learning 1.",
    "googleDriveId": "1Nob6wak87R8Rr142BcWFKADrtZ4xE_p1",
    "previewUrl": "https://drive.google.com/file/d/1Nob6wak87R8Rr142BcWFKADrtZ4xE_p1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nob6wak87R8Rr142BcWFKADrtZ4xE_p1",
    "localFile": null
  },
  {
    "id": "book-1j4amgj9kksa",
    "title": "Pdf JavaScript Programming",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Pdf JavaScript Programming.",
    "googleDriveId": "1j4AmgJ9kkSA2yo70szEi0d-fslIMpaDV",
    "previewUrl": "https://drive.google.com/file/d/1j4AmgJ9kkSA2yo70szEi0d-fslIMpaDV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1j4AmgJ9kkSA2yo70szEi0d-fslIMpaDV",
    "localFile": null
  },
  {
    "id": "book-1hzdimm-6nor",
    "title": "Pengantar Bisnis dan Manajemen",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Pengantar Bisnis dan Manajemen untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1hzDimM-6NOR7-LiaS-8O3o0YtIN-mk8n",
    "previewUrl": "https://drive.google.com/file/d/1hzDimM-6NOR7-LiaS-8O3o0YtIN-mk8n/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1hzDimM-6NOR7-LiaS-8O3o0YtIN-mk8n",
    "localFile": null
  },
  {
    "id": "book-13rze64bedrr",
    "title": "Pengantar Jaringan Komputer",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Pengantar Jaringan Komputer untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "13rZE64beDrRbzoHc0tjCCTbmNiXPkCqT",
    "previewUrl": "https://drive.google.com/file/d/13rZE64beDrRbzoHc0tjCCTbmNiXPkCqT/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=13rZE64beDrRbzoHc0tjCCTbmNiXPkCqT",
    "localFile": null
  },
  {
    "id": "book-1eksqdgempvo",
    "title": "Pengantar Manajemen",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Pengantar Manajemen untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1EKSqdGeMPVO5CdEJ_aY3citEX-trJmZS",
    "previewUrl": "https://drive.google.com/file/d/1EKSqdGeMPVO5CdEJ_aY3citEX-trJmZS/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1EKSqdGeMPVO5CdEJ_aY3citEX-trJmZS",
    "localFile": null
  },
  {
    "id": "book-1d4vieqlfluu",
    "title": "Pengatar Sistem Informasi",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Pengatar Sistem Informasi untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1D4ViEQLflUUrqIEnEaBPL31LjdrDcH9p",
    "previewUrl": "https://drive.google.com/file/d/1D4ViEQLflUUrqIEnEaBPL31LjdrDcH9p/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1D4ViEQLflUUrqIEnEaBPL31LjdrDcH9p",
    "localFile": null
  },
  {
    "id": "book-1oair43gosrc",
    "title": "Pengelolaan Data",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Pengelolaan Data untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1oaIr43GoSRC1j_eSRSWd2ZZ_V6u9MG0s",
    "previewUrl": "https://drive.google.com/file/d/1oaIr43GoSRC1j_eSRSWd2ZZ_V6u9MG0s/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1oaIr43GoSRC1j_eSRSWd2ZZ_V6u9MG0s",
    "localFile": null
  },
  {
    "id": "book-1mfk8r2bdma-",
    "title": "PHP Ebook",
    "author": "Teknologi & Komputasi",
    "category": "PHP & Backend",
    "tags": [
      "php",
      "backend",
      "web framework",
      "server"
    ],
    "size": "PDF",
    "description": "Pengembangan backend andal, API web, dan sistem manajemen konten menggunakan PHP Ebook.",
    "googleDriveId": "1MFK8R2bDma-CQ5RzF0c0s8RJ3EMzDMm5",
    "previewUrl": "https://drive.google.com/file/d/1MFK8R2bDma-CQ5RzF0c0s8RJ3EMzDMm5/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1MFK8R2bDma-CQ5RzF0c0s8RJ3EMzDMm5",
    "localFile": null
  },
  {
    "id": "book-1-76wswwjgnf",
    "title": "Planet Code Python for Large Language Models a Beginners Handbook for Leveraging Llms Into Modern Development Workflows and Applications 2025",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Planet Code Python for Large Language Models a Beginners Handbook for Leveraging Llms Into Modern Development Workflows and Applications 2025.",
    "googleDriveId": "1-76WswwJGNFYdJxf1WGuoQfW_rx-IAip",
    "previewUrl": "https://drive.google.com/file/d/1-76WswwJGNFYdJxf1WGuoQfW_rx-IAip/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1-76WswwJGNFYdJxf1WGuoQfW_rx-IAip",
    "localFile": null
  },
  {
    "id": "book-1zwngju1fj84",
    "title": "Pragmatic Flutter Cross Platform",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Pragmatic Flutter Cross Platform.",
    "googleDriveId": "1zwnGju1fJ84SZcieM151eu6_LXlsOgY3",
    "previewUrl": "https://drive.google.com/file/d/1zwnGju1fJ84SZcieM151eu6_LXlsOgY3/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1zwnGju1fJ84SZcieM151eu6_LXlsOgY3",
    "localFile": null
  },
  {
    "id": "book-1yz_xgg7ja63",
    "title": "Programming Fundamentals in JavaScript Rex a Barzee",
    "author": "Rex A. Barzee",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "programming fundamentals",
      "web"
    ],
    "size": "PDF",
    "description": "Pembahasan mendalam konsep dasar logika pemrograman menggunakan sintaks modern JavaScript.",
    "googleDriveId": "1YZ_xGG7ja63i3y2YAKyuic0sATlUwuvP",
    "previewUrl": "https://drive.google.com/file/d/1YZ_xGG7ja63i3y2YAKyuic0sATlUwuvP/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1YZ_xGG7ja63i3y2YAKyuic0sATlUwuvP",
    "localFile": null
  },
  {
    "id": "book-1bhnla-vciul",
    "title": "Programming Kotlin Enhance Your Skills for Android Development using Kotlin by Alexander Aronowitz",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Programming Kotlin Enhance Your Skills for Android Development using Kotlin by Alexander Aronowitz.",
    "googleDriveId": "1BhNla-vCiuLLztQeHYHGV6GD17LL2UOV",
    "previewUrl": "https://drive.google.com/file/d/1BhNla-vCiuLLztQeHYHGV6GD17LL2UOV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1BhNla-vCiuLLztQeHYHGV6GD17LL2UOV",
    "localFile": null
  },
  {
    "id": "book-17tpcdlj99dd",
    "title": "Python Data Science",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Data Science.",
    "googleDriveId": "17tpCdlj99DDYqixIlZ4IiNm5rKf2Z4nR",
    "previewUrl": "https://drive.google.com/file/d/17tpCdlj99DDYqixIlZ4IiNm5rKf2Z4nR/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=17tpCdlj99DDYqixIlZ4IiNm5rKf2Z4nR",
    "localFile": null
  },
  {
    "id": "book-1nml3buymft0",
    "title": "Python for Absolute Beginners",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python for Absolute Beginners.",
    "googleDriveId": "1Nml3BUYmfT0cS0VrJrfRO1sNZsDzdUkh",
    "previewUrl": "https://drive.google.com/file/d/1Nml3BUYmfT0cS0VrJrfRO1sNZsDzdUkh/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nml3BUYmfT0cS0VrJrfRO1sNZsDzdUkh",
    "localFile": null
  },
  {
    "id": "book-1unjojidkgly",
    "title": "Python for Data Science",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python for Data Science.",
    "googleDriveId": "1uNjOjIdKgLYJSw80JuniMZM8lkaAu_u4",
    "previewUrl": "https://drive.google.com/file/d/1uNjOjIdKgLYJSw80JuniMZM8lkaAu_u4/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1uNjOjIdKgLYJSw80JuniMZM8lkaAu_u4",
    "localFile": null
  },
  {
    "id": "book-17hwsrctibgw",
    "title": "Python for Data Science the Ultimate Beginners Guide to Learning Python Data Science Step by Step",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python for Data Science the Ultimate Beginners Guide to Learning Python Data Science Step by Step.",
    "googleDriveId": "17HWsRcTIbgwuEZVEmEfkRbNGLi1VPo68",
    "previewUrl": "https://drive.google.com/file/d/17HWsRcTIbgwuEZVEmEfkRbNGLi1VPo68/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=17HWsRcTIbgwuEZVEmEfkRbNGLi1VPo68",
    "localFile": null
  },
  {
    "id": "book-1aa9kcyq-3_e",
    "title": "Python for Science and Engineering",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python for Science and Engineering.",
    "googleDriveId": "1Aa9KCyq-3_Eb8LpU3wmMhQJV4RDT43zh",
    "previewUrl": "https://drive.google.com/file/d/1Aa9KCyq-3_Eb8LpU3wmMhQJV4RDT43zh/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Aa9KCyq-3_Eb8LpU3wmMhQJV4RDT43zh",
    "localFile": null
  },
  {
    "id": "book-1wugtcroh7mh",
    "title": "Python in Excel 2024",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python in Excel 2024.",
    "googleDriveId": "1wuGtcRoh7MHWhAmTQfhIMPqZPgysKz8Q",
    "previewUrl": "https://drive.google.com/file/d/1wuGtcRoh7MHWhAmTQfhIMPqZPgysKz8Q/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1wuGtcRoh7MHWhAmTQfhIMPqZPgysKz8Q",
    "localFile": null
  },
  {
    "id": "book-10fjwkymprny",
    "title": "Python Learn Python Programming in 90 Minutes Or Less Python Learning Python Python Programming Python Tutorial Python Programming for Begi",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Learn Python Programming in 90 Minutes Or Less Python Learning Python Python Programming Python Tutorial Python Programming for Begi.",
    "googleDriveId": "10fJWKYmPrNyF0mW7OjNjXEdU9AxWOa3D",
    "previewUrl": "https://drive.google.com/file/d/10fJWKYmPrNyF0mW7OjNjXEdU9AxWOa3D/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=10fJWKYmPrNyF0mW7OjNjXEdU9AxWOa3D",
    "localFile": null
  },
  {
    "id": "book-1w9jxsfowdlc",
    "title": "Python Pandas Tutorial",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Pandas Tutorial.",
    "googleDriveId": "1W9jxSFOwDlc_dWidZDUZTBLBVYK4cfqr",
    "previewUrl": "https://drive.google.com/file/d/1W9jxSFOwDlc_dWidZDUZTBLBVYK4cfqr/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1W9jxSFOwDlc_dWidZDUZTBLBVYK4cfqr",
    "localFile": null
  },
  {
    "id": "book-1lrdkpxnp_hg",
    "title": "Python Programming",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Programming.",
    "googleDriveId": "1LRdkPXNP_HG_W3evLFuQpaJ_3YOu2Cbp",
    "previewUrl": "https://drive.google.com/file/d/1LRdkPXNP_HG_W3evLFuQpaJ_3YOu2Cbp/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1LRdkPXNP_HG_W3evLFuQpaJ_3YOu2Cbp",
    "localFile": null
  },
  {
    "id": "book-1_scgrrweala",
    "title": "Python Programming a Step by Step Guide for Absolute Beginners",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Programming a Step by Step Guide for Absolute Beginners.",
    "googleDriveId": "1_ScGRRwEalaKVU6GoyWBg2XcBkkOHRLp",
    "previewUrl": "https://drive.google.com/file/d/1_ScGRRwEalaKVU6GoyWBg2XcBkkOHRLp/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1_ScGRRwEalaKVU6GoyWBg2XcBkkOHRLp",
    "localFile": null
  },
  {
    "id": "book-1rsuqbsurhbo",
    "title": "Python Programming for Beginners from Basics to Ai Integrations 5 Minute Illustrated Tutorials Coding Hacks Hands on Exercises Case Studies to M",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Programming for Beginners from Basics to Ai Integrations 5 Minute Illustrated Tutorials Coding Hacks Hands on Exercises Case Studies to M.",
    "googleDriveId": "1rsUqBSurhBoULxfATj3qudE6KGwR_jo8",
    "previewUrl": "https://drive.google.com/file/d/1rsUqBSurhBoULxfATj3qudE6KGwR_jo8/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1rsUqBSurhBoULxfATj3qudE6KGwR_jo8",
    "localFile": null
  },
  {
    "id": "book-19lc0rru_8gn",
    "title": "Python Programming for Beginners from Basics to Ai Integrations 5 Minute Illustrated Tutorials Coding Hacks Hands on Exercises Case Studies to M",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Programming for Beginners from Basics to Ai Integrations 5 Minute Illustrated Tutorials Coding Hacks Hands on Exercises Case Studies to M.",
    "googleDriveId": "19LC0Rru_8GNTQAZ_RIdAXgfMTXPB3OGS",
    "previewUrl": "https://drive.google.com/file/d/19LC0Rru_8GNTQAZ_RIdAXgfMTXPB3OGS/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=19LC0Rru_8GNTQAZ_RIdAXgfMTXPB3OGS",
    "localFile": null
  },
  {
    "id": "book-1y55bpdih7ve",
    "title": "Python Programming Guide Book",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Programming Guide Book.",
    "googleDriveId": "1Y55bPDih7VESFq0fw9pDeAAFnLLoFNar",
    "previewUrl": "https://drive.google.com/file/d/1Y55bPDih7VESFq0fw9pDeAAFnLLoFNar/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y55bPDih7VESFq0fw9pDeAAFnLLoFNar",
    "localFile": null
  },
  {
    "id": "book-1igcvaw1molv",
    "title": "Python Simplified with Generative Ai Hands on Python Development with Genai Tools Integrating Data Science and Web Interfaces Duc T Haba Ashley R H",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Python Simplified with Generative Ai Hands on Python Development with Genai Tools Integrating Data Science and Web Interfaces Duc T Haba Ashley R H.",
    "googleDriveId": "1IGcVaw1molvIhxEFTY3JXCtRjToJwPuG",
    "previewUrl": "https://drive.google.com/file/d/1IGcVaw1molvIhxEFTY3JXCtRjToJwPuG/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1IGcVaw1molvIhxEFTY3JXCtRjToJwPuG",
    "localFile": null
  },
  {
    "id": "book-1bnayj4ht7vg",
    "title": "React Js",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku React Js.",
    "googleDriveId": "1BNAyJ4ht7vgcMODwCTkeT33l0bRJ2n_Q",
    "previewUrl": "https://drive.google.com/file/d/1BNAyJ4ht7vgcMODwCTkeT33l0bRJ2n_Q/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1BNAyJ4ht7vgcMODwCTkeT33l0bRJ2n_Q",
    "localFile": null
  },
  {
    "id": "book-1prq4emnsesh",
    "title": "React Js Book",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku React Js Book.",
    "googleDriveId": "1PRQ4emNseSH27Pa9Mw2xtHoXn_qJxC4D",
    "previewUrl": "https://drive.google.com/file/d/1PRQ4emNseSH27Pa9Mw2xtHoXn_qJxC4D/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1PRQ4emNseSH27Pa9Mw2xtHoXn_qJxC4D",
    "localFile": null
  },
  {
    "id": "book-1khh5tu6edib",
    "title": "React Tutorial 2020",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku React Tutorial 2020.",
    "googleDriveId": "1khh5tU6EdibETlYLvB99JfHNP6FO2paW",
    "previewUrl": "https://drive.google.com/file/d/1khh5tU6EdibETlYLvB99JfHNP6FO2paW/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1khh5tU6EdibETlYLvB99JfHNP6FO2paW",
    "localFile": null
  },
  {
    "id": "book-1gthswfs7zzz",
    "title": "React.js Guide",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku React.js Guide.",
    "googleDriveId": "1GtHsWfs7Zzzy1AOtxA1IQhnw7MT_LueL",
    "previewUrl": "https://drive.google.com/file/d/1GtHsWfs7Zzzy1AOtxA1IQhnw7MT_LueL/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1GtHsWfs7Zzzy1AOtxA1IQhnw7MT_LueL",
    "localFile": null
  },
  {
    "id": "book-1gsn8hmabkjm",
    "title": "Rinaldi Munir Matematika Diskrit Penerbit Informatika Bandung",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Rinaldi Munir Matematika Diskrit Penerbit Informatika Bandung untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1GsN8hmAbkJme808Vi5avqb6TNjG0VDa5",
    "previewUrl": "https://drive.google.com/file/d/1GsN8hmAbkJme808Vi5avqb6TNjG0VDa5/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1GsN8hmAbkJme808Vi5avqb6TNjG0VDa5",
    "localFile": null
  },
  {
    "id": "book-1vvhzqmfplml",
    "title": "Robbins Philip Python Programming for Beginners 2023",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Robbins Philip Python Programming for Beginners 2023.",
    "googleDriveId": "1vvhzQmFPlMlVN7LxQiZ1qIWohexkSFQV",
    "previewUrl": "https://drive.google.com/file/d/1vvhzQmFPlMlVN7LxQiZ1qIWohexkSFQV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1vvhzQmFPlMlVN7LxQiZ1qIWohexkSFQV",
    "localFile": null
  },
  {
    "id": "book-1cixue6dbply",
    "title": "Sande Jonathan Dart Apprentice Beyond the Basics",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Sande Jonathan Dart Apprentice Beyond the Basics.",
    "googleDriveId": "1CIXue6DBply2J3Xvmzg142ut96E66Ymd",
    "previewUrl": "https://drive.google.com/file/d/1CIXue6DBply2J3Xvmzg142ut96E66Ymd/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1CIXue6DBply2J3Xvmzg142ut96E66Ymd",
    "localFile": null
  },
  {
    "id": "book-1lbtuial-nv2",
    "title": "Serious Python 2019",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui Serious Python 2019.",
    "googleDriveId": "1lBtuIAl-Nv2_M7TDN3aClhfxnnEOlFG2",
    "previewUrl": "https://drive.google.com/file/d/1lBtuIAl-Nv2_M7TDN3aClhfxnnEOlFG2/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1lBtuIAl-Nv2_M7TDN3aClhfxnnEOlFG2",
    "localFile": null
  },
  {
    "id": "book-1giwznj4eiwn",
    "title": "Si",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Si untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1gIWzNJ4eIWNuBvaFANQu9F1YKG-0t5KC",
    "previewUrl": "https://drive.google.com/file/d/1gIWzNJ4eIWNuBvaFANQu9F1YKG-0t5KC/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1gIWzNJ4eIWNuBvaFANQu9F1YKG-0t5KC",
    "localFile": null
  },
  {
    "id": "book-1kskbdo1vupa",
    "title": "Sistem Informasi Manajemen",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Sistem Informasi Manajemen untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1KskBdO1VuPARnyppb-o4iHYiO6rRwQMW",
    "previewUrl": "https://drive.google.com/file/d/1KskBdO1VuPARnyppb-o4iHYiO6rRwQMW/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1KskBdO1VuPARnyppb-o4iHYiO6rRwQMW",
    "localFile": null
  },
  {
    "id": "book-1x5fjzakq6kr",
    "title": "Sistem Informasi Manajemen Ali Sadikin Nuruddin Wiranda",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Sistem Informasi Manajemen Ali Sadikin Nuruddin Wiranda untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1x5fJzAKQ6KRMqQAc6Z8U0VgMBFZKms-U",
    "previewUrl": "https://drive.google.com/file/d/1x5fJzAKQ6KRMqQAc6Z8U0VgMBFZKms-U/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1x5fJzAKQ6KRMqQAc6Z8U0VgMBFZKms-U",
    "localFile": null
  },
  {
    "id": "book-1hymwzuipulv",
    "title": "Sistem Pendukung Keputusan",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Sistem Pendukung Keputusan untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1HYmWzuipuLvz9jqvdqp_i1faFKXS26ie",
    "previewUrl": "https://drive.google.com/file/d/1HYmWzuipuLvz9jqvdqp_i1faFKXS26ie/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1HYmWzuipuLvz9jqvdqp_i1faFKXS26ie",
    "localFile": null
  },
  {
    "id": "book-1q7fycprnt2p",
    "title": "Skema T2v Sains Komputer T4",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Skema T2v Sains Komputer T4.",
    "googleDriveId": "1q7FYcpRNT2pSh0F7JS3l8MOXyS26ANXP",
    "previewUrl": "https://drive.google.com/file/d/1q7FYcpRNT2pSh0F7JS3l8MOXyS26ANXP/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1q7FYcpRNT2pSh0F7JS3l8MOXyS26ANXP",
    "localFile": null
  },
  {
    "id": "book-1cyavduxgabi",
    "title": "SQL",
    "author": "Teknologi & Komputasi",
    "category": "Database & SQL",
    "tags": [
      "sql",
      "database",
      "basis data",
      "query"
    ],
    "size": "PDF",
    "description": "Pengelolaan basis data, pengoptimalan kueri SQL, dan integritas data skala besar melalui SQL.",
    "googleDriveId": "1CyAvDuxgabi8-47fB3HEKQtJb6n6USHs",
    "previewUrl": "https://drive.google.com/file/d/1CyAvDuxgabi8-47fB3HEKQtJb6n6USHs/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1CyAvDuxgabi8-47fB3HEKQtJb6n6USHs",
    "localFile": null
  },
  {
    "id": "book-1du4knhvkv68",
    "title": "SQL for Data Analysis",
    "author": "Teknologi & Komputasi",
    "category": "Database & SQL",
    "tags": [
      "sql",
      "database",
      "basis data",
      "query"
    ],
    "size": "PDF",
    "description": "Pengelolaan basis data, pengoptimalan kueri SQL, dan integritas data skala besar melalui SQL for Data Analysis.",
    "googleDriveId": "1dU4KNhVKV68-_-6tjT3ULoJIiAx_CaxO",
    "previewUrl": "https://drive.google.com/file/d/1dU4KNhVKV68-_-6tjT3ULoJIiAx_CaxO/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1dU4KNhVKV68-_-6tjT3ULoJIiAx_CaxO",
    "localFile": null
  },
  {
    "id": "book-1uvcx16lhmt8",
    "title": "SQL in 30 Days",
    "author": "Teknologi & Komputasi",
    "category": "Database & SQL",
    "tags": [
      "sql",
      "database",
      "basis data",
      "query"
    ],
    "size": "PDF",
    "description": "Pengelolaan basis data, pengoptimalan kueri SQL, dan integritas data skala besar melalui SQL in 30 Days.",
    "googleDriveId": "1UVcx16lHmt88jI_RXiZn6RpLGaJ-2JD5",
    "previewUrl": "https://drive.google.com/file/d/1UVcx16lHmt88jI_RXiZn6RpLGaJ-2JD5/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1UVcx16lHmt88jI_RXiZn6RpLGaJ-2JD5",
    "localFile": null
  },
  {
    "id": "book-16pl4cyplyi7",
    "title": "Statistics for Data Scientists",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Statistics for Data Scientists untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "16PL4CypLyi7HD8qaTqk9S4EDsKdr9XSA",
    "previewUrl": "https://drive.google.com/file/d/16PL4CypLyi7HD8qaTqk9S4EDsKdr9XSA/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=16PL4CypLyi7HD8qaTqk9S4EDsKdr9XSA",
    "localFile": null
  },
  {
    "id": "book-1ten0cfoiemt",
    "title": "Struktur Data dan Algoritma Pdf Free",
    "author": "Teknologi & Komputasi",
    "category": "Struktur Data & Algoritma",
    "tags": [
      "struktur data",
      "algoritma",
      "efisiensi",
      "komputasi"
    ],
    "size": "PDF",
    "description": "Konsep struktur data esensial dan teknik algoritma optimal untuk efisiensi pemrosesan data.",
    "googleDriveId": "1TEn0CfOiemt8vQOuQp0050N6MtlXfiX8",
    "previewUrl": "https://drive.google.com/file/d/1TEn0CfOiemt8vQOuQp0050N6MtlXfiX8/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1TEn0CfOiemt8vQOuQp0050N6MtlXfiX8",
    "localFile": null
  },
  {
    "id": "book-1pqz6ddp15zn",
    "title": "Tam a Begbie C SwiftUI Apprentice 2nd Edition 2023",
    "author": "Audrey Tam & Caroline Begbie",
    "category": "Mobile Development",
    "tags": [
      "swiftui",
      "ios",
      "apple",
      "mobile app"
    ],
    "size": "PDF",
    "description": "Panduan deklaratif pembuatan aplikasi iOS native modern dengan antarmuka SwiftUI dan Xcode.",
    "googleDriveId": "1pQz6ddp15Znf-QL0tVR8U2N9Hu9P9B0t",
    "previewUrl": "https://drive.google.com/file/d/1pQz6ddp15Znf-QL0tVR8U2N9Hu9P9B0t/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1pQz6ddp15Znf-QL0tVR8U2N9Hu9P9B0t",
    "localFile": "ebook/709214252-Tam-A-Begbie-C-SwiftUI-Apprentice-2nd-Edition-2023.pdf"
  },
  {
    "id": "book-12w_7qfjggwe",
    "title": "Tensorflow for Machine Intelligence",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Tensorflow for Machine Intelligence.",
    "googleDriveId": "12W_7QfjGgwegE5OHTWryethF13yXqp-V",
    "previewUrl": "https://drive.google.com/file/d/12W_7QfjGgwegE5OHTWryethF13yXqp-V/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=12W_7QfjGgwegE5OHTWryethF13yXqp-V",
    "localFile": null
  },
  {
    "id": "book-1f0rxilgb4a7",
    "title": "The Complete Guide to Claude Ai",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui The Complete Guide to Claude Ai.",
    "googleDriveId": "1F0RXIlGB4a7GtZ4vIXQGMdjnJPA24yCy",
    "previewUrl": "https://drive.google.com/file/d/1F0RXIlGB4a7GtZ4vIXQGMdjnJPA24yCy/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1F0RXIlGB4a7GtZ4vIXQGMdjnJPA24yCy",
    "localFile": null
  },
  {
    "id": "book-1y0phipn6sry",
    "title": "The Complete Guide to Modern JavaScript",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku The Complete Guide to Modern JavaScript.",
    "googleDriveId": "1y0phIPN6SRy-lrIhYE_Q9kzIhc5uaSsi",
    "previewUrl": "https://drive.google.com/file/d/1y0phIPN6SRy-lrIhYE_Q9kzIhc5uaSsi/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1y0phIPN6SRy-lrIhYE_Q9kzIhc5uaSsi",
    "localFile": null
  },
  {
    "id": "book-1mhmjz1nkxxn",
    "title": "The Complete Langgraph Blueprint Build 50 Ai Agents for Business Success Karanja Maina James Z Library",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui The Complete Langgraph Blueprint Build 50 Ai Agents for Business Success Karanja Maina James Z Library.",
    "googleDriveId": "1MhmJZ1nKxXNcJzgUyYUPIBDNC2H-NvTS",
    "previewUrl": "https://drive.google.com/file/d/1MhmJZ1nKxXNcJzgUyYUPIBDNC2H-NvTS/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1MhmJZ1nKxXNcJzgUyYUPIBDNC2H-NvTS",
    "localFile": null
  },
  {
    "id": "book-1hh4oqupoqgt",
    "title": "The Github Copilot Handbook",
    "author": "Teknologi & Komputasi",
    "category": "Cloud & DevOps",
    "tags": [
      "cloud",
      "devops",
      "ci/cd",
      "otomasi",
      "infrastruktur"
    ],
    "size": "PDF",
    "description": "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud dengan The Github Copilot Handbook.",
    "googleDriveId": "1hh4oquPoqGTuX4avNiok7cIpIJdVegwp",
    "previewUrl": "https://drive.google.com/file/d/1hh4oquPoqGTuX4avNiok7cIpIJdVegwp/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1hh4oquPoqGTuX4avNiok7cIpIJdVegwp",
    "localFile": null
  },
  {
    "id": "book-1grzzo_jcrqd",
    "title": "The Minimum JavaScript You Should Know",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku The Minimum JavaScript You Should Know.",
    "googleDriveId": "1gRZzo_jCRqDXJwFXzGva2lO7OFmlGFFg",
    "previewUrl": "https://drive.google.com/file/d/1gRZzo_jCRqDXJwFXzGva2lO7OFmlGFFg/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1gRZzo_jCRqDXJwFXzGva2lO7OFmlGFFg",
    "localFile": null
  },
  {
    "id": "book-14iqvt0p7aib",
    "title": "The Python Bible",
    "author": "Teknologi & Komputasi",
    "category": "Python & Data Science",
    "tags": [
      "python",
      "data science",
      "pemrograman",
      "analisis data"
    ],
    "size": "PDF",
    "description": "Panduan praktis penguasaan bahasa pemrograman Python dan teknik analisis komputasi modern melalui The Python Bible.",
    "googleDriveId": "14IQVt0p7AIB1Ue2tHIhy1hUciXxs8wJ0",
    "previewUrl": "https://drive.google.com/file/d/14IQVt0p7AIB1Ue2tHIhy1hUciXxs8wJ0/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=14IQVt0p7AIB1Ue2tHIhy1hUciXxs8wJ0",
    "localFile": null
  },
  {
    "id": "book-10_igu1_q1oh",
    "title": "The Road to React the React.js 19 with Hooks in JavaScript Book 2025 Edition",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku The Road to React the React.js 19 with Hooks in JavaScript Book 2025 Edition.",
    "googleDriveId": "10_igu1_q1ohAeYyDBNAGQxxFld7spBu-",
    "previewUrl": "https://drive.google.com/file/d/10_igu1_q1ohAeYyDBNAGQxxFld7spBu-/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=10_igu1_q1ohAeYyDBNAGQxxFld7spBu-",
    "localFile": null
  },
  {
    "id": "book-1fjuv26z0hpi",
    "title": "The Self Taught Programmer the Definitive Guide to Programming Professionally",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai The Self Taught Programmer the Definitive Guide to Programming Professionally untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1FjUv26z0hpINd1sXodPIh8le5yNQZ1kj",
    "previewUrl": "https://drive.google.com/file/d/1FjUv26z0hpINd1sXodPIh8le5yNQZ1kj/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1FjUv26z0hpINd1sXodPIh8le5yNQZ1kj",
    "localFile": null
  },
  {
    "id": "book-1ekakhp6vpmc",
    "title": "Tiny Introduction JavaScript Exercises",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Tiny Introduction JavaScript Exercises.",
    "googleDriveId": "1EKaKHp6VpMCZsYrKhcQ8FPj940JmdYqO",
    "previewUrl": "https://drive.google.com/file/d/1EKaKHp6VpMCZsYrKhcQ8FPj940JmdYqO/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1EKaKHp6VpMCZsYrKhcQ8FPj940JmdYqO",
    "localFile": null
  },
  {
    "id": "book-1rcisuq2raie",
    "title": "TypeScript Tutorial",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku TypeScript Tutorial.",
    "googleDriveId": "1RCisUQ2rAIEaGW09S0_ZWx2Cgkvfzj2g",
    "previewUrl": "https://drive.google.com/file/d/1RCisUQ2rAIEaGW09S0_ZWx2Cgkvfzj2g/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1RCisUQ2rAIEaGW09S0_ZWx2Cgkvfzj2g",
    "localFile": null
  },
  {
    "id": "book-1_sauczqnwqd",
    "title": "UI React",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku UI React.",
    "googleDriveId": "1_SaucZqnWQDByKnSFQCHiZfKConAcAOk",
    "previewUrl": "https://drive.google.com/file/d/1_SaucZqnWQDByKnSFQCHiZfKConAcAOk/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1_SaucZqnWQDByKnSFQCHiZfKConAcAOk",
    "localFile": null
  },
  {
    "id": "book-1bluxyhmp1k9",
    "title": "Understanding Machine Learning",
    "author": "Teknologi & Komputasi",
    "category": "AI & Machine Learning",
    "tags": [
      "ai",
      "machine learning",
      "deep learning",
      "data science"
    ],
    "size": "PDF",
    "description": "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin melalui Understanding Machine Learning.",
    "googleDriveId": "1BlUXYhmp1K9QPbXfKQ9-L46Q1y8Qk0t1",
    "previewUrl": "https://drive.google.com/file/d/1BlUXYhmp1K9QPbXfKQ9-L46Q1y8Qk0t1/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1BlUXYhmp1K9QPbXfKQ9-L46Q1y8Qk0t1",
    "localFile": null
  },
  {
    "id": "book-1eolgblmubxd",
    "title": "Vibe Coding and Software 3 0 Part 4",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Vibe Coding and Software 3 0 Part 4 untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1eOlgBLMuBxd5hlk6krGaO0tDWJkJIMKV",
    "previewUrl": "https://drive.google.com/file/d/1eOlgBLMuBxd5hlk6krGaO0tDWJkJIMKV/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1eOlgBLMuBxd5hlk6krGaO0tDWJkJIMKV",
    "localFile": null
  },
  {
    "id": "book-1rf6cc3jojhp",
    "title": "Vibe Coding Part 1",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Pemrograman",
    "tags": [
      "teknologi",
      "komputer"
    ],
    "size": "PDF",
    "description": "Buku panduan dan referensi komprehensif mengenai Vibe Coding Part 1 untuk memperdalam pemahaman teknologi informasi dan rekayasa perangkat lunak.",
    "googleDriveId": "1rF6Cc3jojhp4L7A6VStsVo1zBgNEi8QQ",
    "previewUrl": "https://drive.google.com/file/d/1rF6Cc3jojhp4L7A6VStsVo1zBgNEi8QQ/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1rF6Cc3jojhp4L7A6VStsVo1zBgNEi8QQ",
    "localFile": null
  },
  {
    "id": "book-1ajocpgvg7nf",
    "title": "Web Component Essentials",
    "author": "Teknologi & Komputasi",
    "category": "JavaScript & Web",
    "tags": [
      "javascript",
      "web",
      "frontend",
      "fullstack"
    ],
    "size": "PDF",
    "description": "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui buku Web Component Essentials.",
    "googleDriveId": "1aJOcPgvG7Nflex5DBXKffOfgvbASNIdW",
    "previewUrl": "https://drive.google.com/file/d/1aJOcPgvG7Nflex5DBXKffOfgvbASNIdW/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1aJOcPgvG7Nflex5DBXKffOfgvbASNIdW",
    "localFile": null
  },
  {
    "id": "book-1iqqwkigsb2y",
    "title": "Web Design Tips Tricks Fixes Vol 3 2015",
    "author": "Teknologi & Komputasi",
    "category": "Dasar Web & Desain",
    "tags": [
      "html",
      "css",
      "web design",
      "tata letak"
    ],
    "size": "PDF",
    "description": "Panduan fundamental perancangan tampilan antarmuka web responsif dan standar web modern dengan Web Design Tips Tricks Fixes Vol 3 2015.",
    "googleDriveId": "1iQqwKigSB2YLvdTKKVXPRr73kRyO-GtP",
    "previewUrl": "https://drive.google.com/file/d/1iQqwKigSB2YLvdTKKVXPRr73kRyO-GtP/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1iQqwKigSB2YLvdTKKVXPRr73kRyO-GtP",
    "localFile": null
  },
  {
    "id": "book-1ekmq8pg7utm",
    "title": "What Is Dart",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui What Is Dart.",
    "googleDriveId": "1eKmQ8pG7uTMC6kMaBBQazJQIpwIlQP6d",
    "previewUrl": "https://drive.google.com/file/d/1eKmQ8pG7uTMC6kMaBBQazJQIpwIlQP6d/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1eKmQ8pG7uTMC6kMaBBQazJQIpwIlQP6d",
    "localFile": null
  },
  {
    "id": "book-1tf4cbfsqrhn",
    "title": "Write Web Apps with Dart",
    "author": "Teknologi & Komputasi",
    "category": "Mobile Development",
    "tags": [
      "mobile",
      "android",
      "ios",
      "aplikasi seluler"
    ],
    "size": "PDF",
    "description": "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi melalui Write Web Apps with Dart.",
    "googleDriveId": "1tF4CBfSqRhNCLoUdWfTpRM_J1McA_hTD",
    "previewUrl": "https://drive.google.com/file/d/1tF4CBfSqRhNCLoUdWfTpRM_J1McA_hTD/preview",
    "downloadUrl": "https://drive.google.com/uc?export=download&id=1tF4CBfSqRhNCLoUdWfTpRM_J1McA_hTD",
    "localFile": null
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BOOKS_DATA;
}
