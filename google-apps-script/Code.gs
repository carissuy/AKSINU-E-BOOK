/**
 * ====================================================================
 * AKSINU - Google Apps Script Live API (Pustaka Kampus AKSINU)
 * Akademi Sistem Informasi NU Purworejo
 * Folder ID: 19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV
 * ====================================================================
 * Skrip ini bertindak sebagai API otomatis yang membaca berkas PDF 
 * di Google Drive publik kampus dan mengirimkannya ke website statis AKSINU secara real-time.
 * Mendukung pembersihan judul, pengkategorian cerdas, dan pemberian kode DDC otomatis.
 */

const FOLDER_ID = "19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV";

const DDC_MAP = {
  "Dasar Pemrograman": { ddc: "005.1", callNumber: "DDC 005.1" },
  "Struktur Data & Algoritma": { ddc: "005.13", callNumber: "DDC 005.13" },
  "Java & OOP": { ddc: "005.133", callNumber: "DDC 005.133" },
  "Python & Data Science": { ddc: "005.133", callNumber: "DDC 005.133" },
  "JavaScript & Web": { ddc: "005.276", callNumber: "DDC 005.276" },
  "PHP & Backend": { ddc: "005.276", callNumber: "DDC 005.276" },
  "Mobile Development": { ddc: "005.268", callNumber: "DDC 005.268" },
  "Database & SQL": { ddc: "005.74", callNumber: "DDC 005.74" },
  "AI & Machine Learning": { ddc: "006.3", callNumber: "DDC 006.3" },
  "AI & Data Science": { ddc: "006.3", callNumber: "DDC 006.3" },
  "UI/UX & Desain": { ddc: "006.6", callNumber: "DDC 006.6" },
  "Dasar Web & Desain": { ddc: "006.7", callNumber: "DDC 006.7" },
  "Jaringan Komputer": { ddc: "004.6", callNumber: "DDC 004.6" },
  "Sistem Operasi & Arsitektur": { ddc: "005.43", callNumber: "DDC 005.43" },
  "Sistem Informasi": { ddc: "004.068", callNumber: "DDC 004.068" },
  "Ilmu Komputer": { ddc: "004", callNumber: "DDC 004" },
  "Metodologi Riset": { ddc: "001.42", callNumber: "DDC 001.42" },
  "Manajemen & Bisnis": { ddc: "658.4038", callNumber: "DDC 658.4038" },
  "Cloud & DevOps": { ddc: "004.6782", callNumber: "DDC 004.6782" }
};

function doGet(e) {
  try {
    const cache = CacheService.getScriptCache();
    const isForceRefresh = e && e.parameter && e.parameter.refresh === "true";
    
    // Cek cache (10 menit) untuk kecepatan akses milidetik
    if (!isForceRefresh) {
      const cachedData = cache.get("aksinu_books_cache");
      if (cachedData) {
        return ContentService.createTextOutput(cachedData)
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFiles();
    const books = [];
    const seenDriveIds = {};
    const seenTitles = {};

    while (files.hasNext()) {
      const file = files.next();
      const fileName = file.getName();

      // Hanya ambil berkas PDF (dan abaikan berkas sementara .crdownload)
      if (fileName.toLowerCase().endsWith(".pdf") || file.getMimeType() === MimeType.PDF) {
        const fileId = file.getId();

        // 1. Lewati jika ID file sudah pernah dibaca (mencegah loop/duplikat id)
        if (seenDriveIds[fileId]) {
          continue;
        }

        let title = cleanTitle(fileName);
        
        // 2. Deteksi jika nama file hanya angka acak atau hash tanpa teks judul
        if (!title || /^[\d\s\-_]+$/.test(title) || /^[0-9a-f]{16,}$/i.test(title)) {
          // A. Cek apakah ada judul di kolom Deskripsi file Google Drive
          try {
            const driveDesc = file.getDescription();
            if (driveDesc && driveDesc.trim().length > 3) {
              title = cleanTitle(driveDesc.trim());
            }
          } catch (e) {}

          // B. Cek apakah ada metadata /Title di dalam berkas PDF
          if (!title || /^[\d\s\-_]+$/.test(title)) {
            try {
              const blob = file.getBlob();
              const bytes = blob.getBytes();
              const sampleLen = Math.min(bytes.length, 6000);
              let sampleStr = "";
              for (let s = 0; s < sampleLen; s++) {
                sampleStr += String.fromCharCode(bytes[s]);
              }
              const matchTitle = sampleStr.match(/\/Title\s*\(([^)]+)\)/i);
              if (matchTitle && matchTitle[1] && matchTitle[1].trim().length > 3) {
                const extracted = matchTitle[1].trim();
                if (!/^(untitled|microsoft|adobe|scan|print|word)/i.test(extracted)) {
                  title = cleanTitle(extracted);
                }
              }
            } catch (pdfErr) {}
          }

          // C. Jika tetap hanya angka, berikan nama referensi yang layak
          if (!title || /^[\d\s\-_]+$/.test(title)) {
            title = "Buku Referensi Komputasi #" + (title || fileId.substring(0, 8));
          }
        }
        
        // 3. Normalisasi judul (hanya huruf & angka) untuk deteksi buku duplikat
        const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!normTitle || seenTitles[normTitle]) {
          // Buku dengan judul serupa/sama sudah terdaftar, otomatis abaikan duplikatnya
          continue;
        }

        const sizeBytes = file.getSize();
        const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(1) + " MB";
        const meta = detectCategoryAndAuthor(title, fileName);

        seenDriveIds[fileId] = true;
        seenTitles[normTitle] = true;

        books.push({
          id: "book-" + fileId.substring(0, 12).toLowerCase(),
          title: meta.title || title,
          author: meta.author,
          category: meta.category,
          tags: meta.tags,
          size: sizeMB,
          description: meta.description,
          googleDriveId: fileId,
          previewUrl: "https://drive.google.com/file/d/" + fileId + "/preview",
          downloadUrl: "https://drive.google.com/uc?export=download&id=" + fileId,
          updatedAt: file.getLastUpdated().toISOString()
        });
      }
    }

    // Urutkan berdasarkan judul abjad A - Z
    books.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });

    // Berikan nomor katalog, ISBN referensi, dan DDC call number
    for (var i = 0; i < books.length; i++) {
      var b = books[i];
      var numStr = ("000" + (i + 1)).slice(-3);
      b.catalogId = "AKSINU-LIB-" + numStr;
      b.isbn = "AKSINU-REF-" + numStr;
      var ddcInfo = DDC_MAP[b.category] || { ddc: "004", callNumber: "DDC 004" };
      b.ddc = ddcInfo.ddc;
      b.callNumber = ddcInfo.callNumber;
    }

    const responsePayload = JSON.stringify({
      status: "success",
      total: books.length,
      lastSync: new Date().toISOString(),
      data: books
    });

    // Simpan di cache selama 600 detik (10 menit)
    try {
      cache.put("aksinu_books_cache", responsePayload, 600);
    } catch (cacheErr) {
      // Abaikan jika payload melebihi limit cache Google
    }

    return ContentService.createTextOutput(responsePayload)
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Membersihkan nama file PDF menjadi judul buku yang rapi dan bebas angka scraper
 */
function cleanTitle(filename) {
  var clean = filename;

  // Tangani file hash khusus yang teridentifikasi di Google Drive
  if (clean.indexOf("296ed435") !== -1) {
    return "Etika Profesi Teknologi Informasi dan Komunikasi";
  }
  if (clean.indexOf("80ab2749") !== -1) {
    return "Pemrograman Berorientasi Objek";
  }
  if (clean.indexOf("9786237694854") !== -1) {
    return "Rekayasa Perangkat Lunak Terapan";
  }

  // Hapus ekstensi
  clean = clean.replace(/\.pdf$/i, "");
  clean = clean.replace(/[\-_]pdf$/i, "");

  // Hapus kata 'Salinan' jika hasil copy Google Drive
  clean = clean.replace(/^Salinan\s+/i, "");

  // Hapus angka scraper di awal nama berkas (misal: 559719565-, 709214252-, 0708028704, dsb)
  clean = clean.replace(/^\d+[\-_]/, "");
  clean = clean.replace(/^\d{9,13}\s+/, "");

  // Hapus watermark situs atau repository pengunduh
  clean = clean.replace(/[\-_]PDFDrive[\-_]com/gi, "");
  clean = clean.replace(/[\-_]ebook[\-_]free/gi, "");
  clean = clean.replace(/[\-_]Compress$/i, "");
  clean = clean.replace(/Z[\-_]?Library/gi, "");
  clean = clean.replace(/Libgen[\-_]?li/gi, "");
  clean = clean.replace(/Anna[\s\-_]?S[\s\-_]?Archive/gi, "");
  clean = clean.replace(/Booksrack[\-_]?Net/gi, "");
  clean = clean.replace(/Oceanofpdf[\-_]?Com/gi, "");
  clean = clean.replace(/Dokumen[\-_]?Pub/gi, "");
  clean = clean.replace(/for[\-_]Repo/gi, "");
  clean = clean.replace(/Sample[\-_]Chapter/gi, "");
  clean = clean.replace(/\bpreview\b/gi, "");

  // Hapus nomor unik panjang (seperti NIM kelompok, hash MD5, atau nomor edisi usang)
  clean = clean.replace(/\b[0-9a-f]{32}\b/gi, "");
  clean = clean.replace(/\b(20|21)[\-_]\d{2}[\-_]\d+\b/gi, "");
  clean = clean.replace(/\b004\s+058\s+062\s+070\s+079\b/g, "");

  // Ganti tanda plus (+) dari URL encoding menjadi spasi
  clean = clean.replace(/\+/g, " ");

  // Hapus pemisah tanda hubung dan garis bawah
  clean = clean.replace(/[\-_]/g, " ");
  clean = clean.replace(/\s+/g, " ").trim();

  // Kapitalisasi Title Case dengan pengecualian kata sambung
  var smallWords = ["in", "a", "an", "the", "for", "by", "of", "and", "with", "to", "from", "at", "on", "using", "dari", "sampai", "dengan", "dan", "di", "ke", "untuk", "pada"];
  var words = clean.split(" ");
  var capitalized = [];

  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (i === 0 || smallWords.indexOf(w.toLowerCase()) === -1) {
      capitalized.push(w.charAt(0).toUpperCase() + w.slice(1));
    } else {
      capitalized.push(w.toLowerCase());
    }
  }

  var title = capitalized.join(" ");

  // Normalisasi akronim teknis dan istilah umum
  var acronyms = {
    "Html": "HTML",
    "Css": "CSS",
    "Php": "PHP",
    "Sql": "SQL",
    "Javascript": "JavaScript",
    "Typescript": "TypeScript",
    "Ui": "UI",
    "Ux": "UX",
    "Ui/ux": "UI/UX",
    "Imk": "IMK",
    "Oop": "OOP",
    "Ci Cd": "CI/CD",
    "Devops": "DevOps",
    "Next Js": "Next.js",
    "Nextjs": "Next.js",
    "Reactjs": "React.js",
    "Vuejs": "Vue.js",
    "Cms": "CMS",
    "Codigniter": "CodeIgniter",
    "Swiftui": "SwiftUI",
    "Jquery": "jQuery",
    "Sim": "SIM",
    "Spk": "SPK",
    "Sdlc": "SDLC",
    "Itsm": "ITSM",
    "Itil": "ITIL",
    "Ai": "AI",
    "Llm": "LLM",
    "Nlp": "NLP",
    "Erd": "ERD"
  };

  for (var key in acronyms) {
    var reg = new RegExp("\\b" + key + "\\b", "gi");
    title = title.replace(reg, acronyms[key]);
  }

  return title.trim();
}

/**
 * Pengecekan kata kunci aman dengan word-boundary untuk kata pendek (mencegah 'ai' cocok dengan 'sampai')
 */
function hasMatch(text, keywords) {
  for (var i = 0; i < keywords.length; i++) {
    var kw = keywords[i];
    if (kw.length <= 4) {
      // Gunakan batas kata untuk akronim pendek (ai, ui, ux, si, sim, spk, php, sql, dll)
      var escaped = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      var regex = new RegExp("(?:^|[^a-z0-9])" + escaped + "(?:$|[^a-z0-9])", "i");
      if (regex.test(text)) return true;
    } else {
      if (text.indexOf(kw.toLowerCase()) !== -1) return true;
    }
  }
  return false;
}

/**
 * Otomatis mendeteksi kategori, penulis, dan tag dengan akurasi tinggi
 */
function detectCategoryAndAuthor(rawTitle, filename) {
  var lower = (rawTitle + " " + filename).toLowerCase();
  var category = "Ilmu Komputer";
  var author = "Pustaka AKSINU";
  var title = rawTitle;
  var tags = ["teknologi", "komputer", "aksinu"];
  var desc = "Buku panduan dan referensi mengenai " + rawTitle + " untuk memperdalam literasi teknologi informasi.";

  // 1. Deteksi Penulis Terkemuka Khusus
  if (lower.indexOf("sugiyono") !== -1) {
    author = "Prof. Dr. Sugiyono";
    category = "Metodologi Riset";
    title = "Metode Penelitian Kuantitatif, Kualitatif, dan R&D";
    tags = ["metode penelitian", "riset", "sugiyono", "kuantitatif", "kualitatif", "r&d", "skripsi"];
    desc = "Buku rujukan utama akademis untuk penyusunan metodologi penelitian kuantitatif, kualitatif, dan Research and Development (R&D).";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("jozef raco") !== -1 || lower.indexOf("raco") !== -1) {
    author = "Dr. Jozef Raco, M.E., M.Sc.";
    category = "Metodologi Riset";
    tags = ["metode penelitian", "kualitatif", "riset ilmiah"];
    desc = "Kajian teoritis dan terapan mengenai metodologi penelitian kualitatif, teknik triangulasi, dan analisis data ilmiah.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("karumanchi") !== -1) {
    author = "Narasimha Karumanchi";
    category = "Struktur Data & Algoritma";
    tags = ["struktur data", "algoritma", "coding interview", "karumanchi"];
    desc = "Panduan legendaris pemecahan masalah algoritma dan struktur data untuk wawancara teknis.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("jon duckett") !== -1 || lower.indexOf("jon-duckett") !== -1) {
    author = "Jon Duckett";
    category = "JavaScript & Web";
    tags = ["javascript", "jquery", "frontend", "web design"];
    desc = "Buku visual interaktif panduan front-end web development dan pemrograman JavaScript serta jQuery.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("tam a begbie") !== -1 || lower.indexOf("begbie") !== -1 || lower.indexOf("swiftui apprentice") !== -1) {
    author = "Audrey Tam & Caroline Begbie";
    category = "Mobile Development";
    title = "SwiftUI Apprentice (2nd Edition)";
    tags = ["swiftui", "ios", "apple", "mobile dev"];
    desc = "Panduan deklaratif pembuatan aplikasi iOS native modern dengan antarmuka SwiftUI dan Xcode.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("hajian") !== -1 || lower.indexOf("flutter engineering") !== -1) {
    author = "Majid Hajian";
    category = "Mobile Development";
    title = "Flutter Engineering (2024)";
    tags = ["flutter", "dart", "mobile dev", "arsitektur"];
    desc = "Buku rekayasa perangkat lunak tingkat mahir untuk merancang arsitektur aplikasi Flutter modern.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("anita goel") !== -1 || lower.indexOf("goel anita") !== -1) {
    author = "Anita Goel";
    category = "Ilmu Komputer";
    tags = ["computer fundamentals", "anita goel", "dasar komputer"];
    desc = "Buku teks pengantar komprehensif arsitektur komputer, komponen prosesor, memori, dan sistem komputasi.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  } else if (lower.indexOf("rinaldi munir") !== -1) {
    author = "Rinaldi Munir";
    category = "Struktur Data & Algoritma";
    tags = ["matematika diskrit", "rinaldi munir", "logika", "teori graf"];
    desc = "Buku teks karya Rinaldi Munir mengenai logika matematika, teori graf, relasi fungsi, dan algoritma diskrit.";
    return { title: title, category: category, author: author, tags: tags, description: desc };
  }

  // 2. Deteksi Berdasarkan Kategori Akademik Terstruktur (Hierarkis)

  // A. AI & Machine Learning (Pengecekan Aman: 'ai' harus boundary kata mandiri)
  if (hasMatch(lower, ["machine learning", "deep learning", "kecerdasan buatan", "artificial intelligence", "nlp", "neural network", "computer vision", "llm", "genai", "ai"])) {
    category = "AI & Machine Learning";
    tags = ["ai", "machine learning", "kecerdasan buatan", "deep learning"];
    desc = "Eksplorasi kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin cerdas.";
  }
  // B. Python & Data Science (Termasuk Statistika, Big Data, Data Mining)
  else if (hasMatch(lower, ["data science", "sains data", "statistika", "statistik", "big data", "data mining", "visualisasi data", "python", "pandas", "numpy"])) {
    category = "Python & Data Science";
    tags = ["python", "data science", "statistika", "analitika data"];
    desc = "Panduan praktis penguasaan bahasa pemrograman Python dan teknik komputasi modern untuk analitika data.";
  }
  // C. Mobile Development
  else if (hasMatch(lower, ["mobile", "android", "flutter", "kotlin", "react native", "ios", "swift", "swiftui"])) {
    category = "Mobile Development";
    tags = ["mobile dev", "aplikasi seluler", "android", "ios"];
    desc = "Pengembangan aplikasi mobile modern, antarmuka responsif, dan performa tinggi untuk Android & iOS.";
  }
  // D. PHP & Backend
  else if (hasMatch(lower, ["php", "laravel", "codeigniter", "symfony", "backend"])) {
    category = "PHP & Backend";
    tags = ["php", "backend", "web development", "mvc"];
    desc = "Pengembangan aplikasi backend andal, API web, dan sistem manajemen konten dinamis.";
    if (lower.indexOf("codeigniter") !== -1) {
      author = "Diki Alfarabi Hadi, S.T.";
    }
  }
  // E. JavaScript & Web
  else if (hasMatch(lower, ["javascript", "js", "react", "vue", "html", "css", "frontend", "web design", "node", "nodejs", "typescript", "full stack"])) {
    category = "JavaScript & Web";
    tags = ["javascript", "web", "frontend", "fullstack"];
    desc = "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui " + title + ".";
  }
  // F. Database & SQL
  else if (hasMatch(lower, ["basis data", "basisdata", "sql", "mysql", "postgresql", "database", "nosql", "mongodb", "query", "data warehouse"])) {
    category = "Database & SQL";
    tags = ["basis data", "database", "sql", "dbms"];
    desc = "Pengelolaan basis data, pemodelan ERD, normalisasi, dan pengoptimalan kueri SQL skala besar.";
  }
  // G. Jaringan Komputer
  else if (hasMatch(lower, ["jaringan", "networking", "cisco", "mikrotik", "tcp/ip", "lan", "wan", "routing", "switching", "telekomunikasi"])) {
    category = "Jaringan Komputer";
    tags = ["jaringan komputer", "networking", "protokol", "infrastruktur"];
    desc = "Buku panduan arsitektur jaringan komputer, komunikasi data, keamanan koneksi, dan administrasi infrastruktur jaringan.";
  }
  // H. Sistem Operasi & Arsitektur Komputer
  else if (hasMatch(lower, ["sistem operasi", "operating system", "linux", "unix", "arsitektur komputer", "organisasi komputer"])) {
    category = "Sistem Operasi & Arsitektur";
    tags = ["sistem operasi", "linux", "arsitektur komputer", "kernel"];
    desc = "Konsep dasar sistem operasi, manajemen proses, memori komputer, dan arsitektur mesin komputasi.";
  }
  // I. Cloud & DevOps
  else if (hasMatch(lower, ["cloud", "devops", "docker", "kubernetes", "aws", "azure", "ci/cd", "ci-cd"])) {
    category = "Cloud & DevOps";
    tags = ["cloud", "devops", "ci/cd", "otomasi", "container"];
    desc = "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud modern.";
  }
  // J. UI/UX & Desain
  else if (hasMatch(lower, ["ui/ux", "ui ux", "user experience", "user interface", "figma", "interaksi manusia", "imk", "hci", "desain grafis"])) {
    category = "UI/UX & Desain";
    tags = ["ui/ux", "user interface", "user experience", "desain"];
    desc = "Prinsip perancangan antarmuka pengguna, kenyamanan interaksi, dan metodologi Design Thinking modern.";
  }
  // K. Sistem Informasi & Keamanan Siber (Fokus Utama Kampus AKSINU)
  else if (hasMatch(lower, ["sistem informasi", "information system", "perancangan sistem", "analisa sistem", "analisis sistem", "rekayasa perangkat lunak", "software engineering", "keamanan siber", "cyber security", "keamanan sistem", "sim", "spk", "itsm"])) {
    category = "Sistem Informasi";
    tags = ["sistem informasi", "manajemen sistem", "analisis sistem", "ti kampus"];
    desc = "Buku kajian sistem informasi, analisis kebutuhan, perancangan arsitektur sistem, dan tata kelola teknologi informasi.";
  }
  // L. Manajemen & Bisnis
  else if (hasMatch(lower, ["manajemen", "management", "bisnis", "business", "technopreneur", "kewirausahaan", "umkm", "ekonomi", "pemasaran"])) {
    category = "Manajemen & Bisnis";
    tags = ["manajemen", "bisnis", "organisasi", "wirausaha"];
    desc = "Kajian manajemen operasional, kepemimpinan organisasi, dan dinamika bisnis teknologi informasi.";
  }
  // M. Metodologi Riset
  else if (hasMatch(lower, ["metodologi penelitian", "metode penelitian", "skripsi", "tesis", "riset"])) {
    category = "Metodologi Riset";
    tags = ["metode penelitian", "riset", "kualitatif", "kuantitatif"];
    desc = "Buku pedoman metodologi penelitian dan penyusunan karya ilmiah akademis.";
  }
  // N. Java & OOP
  else if (hasMatch(lower, ["java", "spring", "jvm", "oop", "berorientasi objek", "c++", "c#", "object oriented"])) {
    category = "Java & OOP";
    tags = ["java", "oop", "backend", "berorientasi objek"];
    desc = "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh berbasis Java.";
  }
  // O. Struktur Data & Algoritma
  else if (hasMatch(lower, ["struktur data", "algoritma", "algorithm", "matematika diskrit"])) {
    category = "Struktur Data & Algoritma";
    tags = ["struktur data", "algoritma", "efisiensi", "komputasi"];
    desc = "Konsep struktur data esensial dan teknik algoritma optimal untuk pemrosesan data komputer.";
  }
  // P. Dasar Pemrograman (Khusus judul eksplisit pemrograman dasar)
  else if (hasMatch(lower, ["pemrograman dasar", "dasar pemrograman", "logika pemrograman", "dasar coding", "belajar coding"])) {
    category = "Dasar Pemrograman";
    tags = ["dasar pemrograman", "coding", "logika"];
    desc = "Pengenalan logika komputasi, algoritma dasar, dan pondasi pemrograman komputer.";
  }
  // Q. Ilmu Komputer & Umum
  else {
    category = "Ilmu Komputer";
    tags = ["ilmu komputer", "teknologi informasi", "literasi digital"];
    desc = "Buku pengayaan wawasan literasi teknologi informasi dan ilmu komputer terapan.";
  }

  return {
    title: title,
    category: category,
    author: author,
    tags: tags,
    description: desc
  };
}
