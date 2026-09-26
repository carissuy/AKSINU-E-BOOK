/**
 * ====================================================================
 * AKSINU - Google Apps Script Live API
 * Folder ID: 19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV
 * ====================================================================
 * Skrip ini bertindak sebagai API otomatis yang membaca berkas PDF 
 * di Google Drive dan mengirimkannya ke website statis AKSINU secara real-time.
 */

const FOLDER_ID = "19M35WV6fIe-Ia4zZNej1_Y8MtWVFj_tV";

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

    while (files.hasNext()) {
      const file = files.next();
      const fileName = file.getName();

      // Hanya ambil berkas PDF
      if (fileName.toLowerCase().endsWith(".pdf") || file.getMimeType() === MimeType.PDF) {
        const fileId = file.getId();
        const sizeBytes = file.getSize();
        const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(1) + " MB";
        
        const title = cleanTitle(fileName);
        const meta = detectCategoryAndAuthor(title, fileName);

        books.push({
          id: "book-" + fileId.substring(0, 12).toLowerCase(),
          title: title,
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
 * Membersihkan nama file PDF menjadi judul buku yang rapi
 */
function cleanTitle(filename) {
  var clean = filename.replace(/^\d+[\-_]/, "");
  clean = clean.replace(/\.pdf$/i, "");
  clean = clean.replace(/[\-_]pdf$/i, "");
  clean = clean.replace(/[\-_]PDFDrive[\-_]com/gi, "");
  clean = clean.replace(/[\-_]ebook[\-_]free/gi, "");
  clean = clean.replace(/[\-_]Compress$/i, "");
  clean = clean.replace(/[\-_]/g, " ");
  clean = clean.replace(/\s+/g, " ").trim();

  var smallWords = ["in", "a", "an", "the", "for", "by", "of", "and", "with", "to", "from", "at", "on", "using", "dari", "sampai", "dengan", "dan", "di", "ke"];
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

  // Normalisasi akronim
  var acronyms = {
    "Html": "HTML",
    "Css": "CSS",
    "Php": "PHP",
    "Sql": "SQL",
    "Javascript": "JavaScript",
    "Typescript": "TypeScript",
    "Ui": "UI",
    "Oop": "OOP",
    "Ci Cd": "CI/CD",
    "Devops": "DevOps",
    "Next Js": "Next.js",
    "Reactjs": "React.js",
    "Cms": "CMS",
    "Codigniter": "CodeIgniter",
    "Swiftui": "SwiftUI",
    "Jquery": "jQuery"
  };

  for (var key in acronyms) {
    var reg = new RegExp("\\b" + key + "\\b", "gi");
    title = title.replace(reg, acronyms[key]);
  }

  return title;
}

/**
 * Otomatis mendeteksi kategori, penulis, dan tag dari nama berkas
 */
function detectCategoryAndAuthor(title, filename) {
  var lower = (title + " " + filename).toLowerCase();
  var category = "Dasar Pemrograman";
  var author = "Teknologi & Komputasi";
  var tags = ["teknologi", "komputer"];
  var desc = "Buku panduan dan referensi mengenai " + title + " untuk memperdalam rekayasa perangkat lunak.";

  if (lower.indexOf("sugiyono") !== -1) {
    author = "Prof. Dr. Sugiyono";
    category = "Metodologi Riset";
    tags = ["metode penelitian", "riset", "sugiyono", "skripsi", "tesis", "r&d"];
    desc = "Buku rujukan utama akademis untuk penyusunan metodologi penelitian kuantitatif, kualitatif, dan R&D.";
  } else if (lower.indexOf("jon duckett") !== -1 || lower.indexOf("jon-duckett") !== -1) {
    author = "Jon Duckett";
    category = "JavaScript & Web";
    tags = ["javascript", "jquery", "frontend", "web design"];
    desc = "Buku visual interaktif panduan front-end web development dan pemrograman JavaScript serta jQuery.";
  } else if (lower.indexOf("karumanchi") !== -1) {
    author = "Narasimha Karumanchi";
    category = "Struktur Data & Algoritma";
    tags = ["struktur data", "algoritma", "interview coding"];
    desc = "Panduan legendaris pemecahan masalah algoritma dan struktur data untuk wawancara teknis.";
  } else if (lower.indexOf("swiftui") !== -1 || lower.indexOf("begbie") !== -1) {
    author = "Audrey Tam & Caroline Begbie";
    category = "Mobile Development";
    tags = ["swiftui", "ios", "apple", "mobile dev"];
    desc = "Panduan deklaratif pembuatan aplikasi iOS native modern dengan antarmuka SwiftUI.";
  } else if (lower.indexOf("hajian") !== -1 || lower.indexOf("flutter-engineering") !== -1) {
    author = "M. Hajian";
    category = "Mobile Development";
    tags = ["flutter", "dart", "mobile", "cross-platform"];
    desc = "Rekayasa perangkat lunak tingkat mahir untuk merancang arsitektur aplikasi Flutter modern.";
  } else if (lower.indexOf("murach") !== -1) {
    author = "Murach Publishing";
    category = "Java & OOP";
    tags = ["java", "murach", "oop"];
    desc = "Panduan terstruktur penguasaan cepat pemrograman Java berorientasi objek.";
  } else if (hasKeywords(lower, ["python", "pandas", "numpy", "django", "flask"])) {
    category = "Python & Data Science";
    tags = ["python", "data science", "analisis data"];
    desc = "Panduan praktis penguasaan bahasa pemrograman Python dan teknik komputasi modern.";
  } else if (hasKeywords(lower, ["javascript", "typescript", "react", "vue", "node", "jquery", "frontend"])) {
    category = "JavaScript & Web";
    tags = ["javascript", "web", "frontend", "fullstack"];
    desc = "Pelajari arsitektur dan sintaks modern ekosistem web interaktif melalui " + title + ".";
  } else if (hasKeywords(lower, ["html", "css", "web design", "bootstrap", "tailwind"])) {
    category = "Dasar Web & Desain";
    tags = ["html", "css", "web design"];
    desc = "Panduan fundamental perancangan tampilan web responsif dan standar web modern.";
  } else if (hasKeywords(lower, ["android", "flutter", "dart", "swift", "ios", "mobile"])) {
    category = "Mobile Development";
    tags = ["mobile", "android", "ios", "aplikasi"];
    desc = "Pengembangan aplikasi perangkat seluler modern, responsif, dan berperforma tinggi.";
  } else if (hasKeywords(lower, ["machine learning", "tensorflow", "keras", "deep learning", "ai", "analytics"])) {
    category = "AI & Machine Learning";
    tags = ["ai", "machine learning", "data science"];
    desc = "Eksplorasi mendalam kecerdasan buatan, pemodelan data, dan algoritma pembelajaran mesin.";
  } else if (hasKeywords(lower, ["devops", "docker", "kubernetes", "ci-cd", "azure", "cloud", "gitlab", "github", "git"])) {
    category = "Cloud & DevOps";
    tags = ["cloud", "devops", "ci/cd", "otomasi"];
    desc = "Implementasi otomasi pipeline pengujian, deployment berkelanjutan, dan infrastruktur cloud.";
  } else if (hasKeywords(lower, ["laravel", "php", "codeigniter", "cms"])) {
    category = "PHP & Backend";
    tags = ["php", "backend", "web framework"];
    desc = "Pengembangan backend andal, API web, dan sistem manajemen konten dinamis.";
  } else if (hasKeywords(lower, ["java", "spring", "jvm"])) {
    category = "Java & OOP";
    tags = ["java", "oop", "backend"];
    desc = "Pemrograman berorientasi objek tingkat industri dan arsitektur aplikasi tangguh.";
  } else if (hasKeywords(lower, ["sql", "mysql", "database"])) {
    category = "Database & SQL";
    tags = ["sql", "database", "query"];
    desc = "Pengelolaan basis data, pengoptimalan kueri SQL, dan integritas data skala besar.";
  } else if (hasKeywords(lower, ["data structure", "algorithm", "algoritma", "struktur data"])) {
    category = "Struktur Data & Algoritma";
    tags = ["struktur data", "algoritma", "efisiensi"];
    desc = "Konsep struktur data esensial dan teknik algoritma optimal untuk pemrosesan data.";
  }

  return {
    category: category,
    author: author,
    tags: tags,
    description: desc
  };
}

function hasKeywords(str, keywords) {
  for (var i = 0; i < keywords.length; i++) {
    if (str.indexOf(keywords[i]) !== -1) return true;
  }
  return false;
}
