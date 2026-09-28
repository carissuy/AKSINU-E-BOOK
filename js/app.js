/**
 * AKSINU - Aplikasi Katalog & Portal Ebook Digital Kampus
 * Akademi Sistem Informasi NU Purworejo
 * Logika Antarmuka, Filter Real-time, Modal, Mode Gelap, Bookmark Favorit, & PWA
 */

document.addEventListener('DOMContentLoaded', () => {
  // PWA Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('AKSINU PWA Aktif:', reg.scope))
        .catch((err) => console.warn('PWA ServiceWorker error:', err));
    });
  }

  // Fungsi pencegah duplikat buku & pembersih judul kosong
  function deduplicateBooks(bookList) {
    if (!Array.isArray(bookList)) return [];
    const seenTitles = new Set();
    const seenDriveIds = new Set();
    const result = [];

    for (const b of bookList) {
      if (!b) continue;
      // Validasi mutlak: Buku WAJIB memiliki judul (bukan kosong atau hanya spasi)
      const titleStr = (b.title || '').trim();
      if (!titleStr || titleStr.length < 2) {
        continue; // Otomatis abaikan buku tanpa nama
      }
      if (b.googleDriveId && seenDriveIds.has(b.googleDriveId)) {
        continue;
      }
      const norm = titleStr.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (norm && seenTitles.has(norm)) {
        continue;
      }
      if (b.googleDriveId) seenDriveIds.add(b.googleDriveId);
      if (norm) seenTitles.add(norm);
      b.title = titleStr;
      result.push(b);
    }
    return result;
  }

  // State Aplikasi
  const state = {
    books: deduplicateBooks(typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : []),
    favorites: loadFavorites(),
    searchQuery: '',
    selectedCategory: 'all',
    sortBy: 'default',
    activeModalBook: null
  };

  // Muat daftar favorit dari localStorage
  function loadFavorites() {
    try {
      const favs = localStorage.getItem('aksinu_favorites');
      return favs ? JSON.parse(favs) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem('aksinu_favorites', JSON.stringify(state.favorites));
    } catch (e) {}
    updateFavoritesBadge();
  }

  function isBookFavorite(id) {
    return state.favorites.includes(id);
  }

  // Toggle status favorit buku
  window.toggleBookFavorite = function(bookId, e) {
    if (e && e.stopPropagation) e.stopPropagation();
    
    const idx = state.favorites.indexOf(bookId);
    if (idx !== -1) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.push(bookId);
    }
    saveFavorites();

    // Perbarui tombol modal jika buku aktif sedang dibuka
    if (state.activeModalBook && state.activeModalBook.id === bookId) {
      updateModalFavButton(bookId);
    }

    // Render ulang kartu atau kategori jika sedang di tab favorit
    renderCategoryPills();
    renderBooks();
  };

  // Elemen DOM
  const booksGrid = document.getElementById('books-grid');
  const emptyState = document.getElementById('empty-state');
  const emptyStateTitle = document.getElementById('empty-state-title');
  const emptyStateDesc = document.getElementById('empty-state-desc');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const categoryPillsContainer = document.getElementById('category-pills');
  const activeFilterIndicator = document.getElementById('active-filter-indicator');
  const filteredCountEl = document.getElementById('filtered-count');
  const totalCountEl = document.getElementById('total-count');
  const badgeTotalBooksEl = document.getElementById('badge-total-books');
  const badgeFavoritesCountEl = document.getElementById('badge-favorites-count');
  const favoritesNavBtn = document.getElementById('favorites-nav-btn');
  const sortSelect = document.getElementById('sort-select');
  const resetFilterBtn = document.getElementById('reset-filter-btn');

  // Elemen Modal
  const bookModal = document.getElementById('book-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalSize = document.getElementById('modal-size');
  const modalDdc = document.getElementById('modal-ddc');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalCatalog = document.getElementById('modal-catalog');
  const modalDescription = document.getElementById('modal-description');
  const modalTagsContainer = document.getElementById('modal-tags-container');
  const modalPreviewWrapper = document.getElementById('modal-preview-wrapper');
  const modalIframe = document.getElementById('modal-iframe');
  const modalClosePreview = document.getElementById('modal-close-preview');
  const modalTogglePreviewBtn = document.getElementById('modal-toggle-preview-btn');
  const modalFavBtn = document.getElementById('modal-fav-btn');
  const modalFavIcon = document.getElementById('modal-fav-icon');
  const modalFavText = document.getElementById('modal-fav-text');
  const modalReadLink = document.getElementById('modal-read-link');
  const modalDownloadLink = document.getElementById('modal-download-link');

  // Mode Gelap (Dark Mode)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');

  // Elemen Sync Indikator
  const syncIndicator = document.getElementById('sync-indicator');
  const syncIcon = document.getElementById('sync-icon');
  const syncText = document.getElementById('sync-text');

  // Bersihkan cache lama di browser pengguna untuk memastikan judul kosong terhapus
  try {
    localStorage.removeItem('aksinu_cached_books');
    localStorage.removeItem('aksinu_live_books_v1');
    localStorage.removeItem('aksinu_live_books_v2');
    const cachedLive = localStorage.getItem('aksinu_live_books_v3');
    if (cachedLive) {
      const parsed = JSON.parse(cachedLive);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.books = deduplicateBooks(parsed);
      }
    }
  } catch (err) {}

  // Inisialisasi Mode Gelap
  initTheme();

  // Inisialisasi Total Statistik
  if (totalCountEl) totalCountEl.textContent = state.books.length;
  if (badgeTotalBooksEl) badgeTotalBooksEl.textContent = `${state.books.length} Koleksi`;
  updateFavoritesBadge();

  // Render Kategori Pills
  renderCategoryPills();

  // Render Buku Pertama Kali
  renderBooks();

  // Sinkronisasi Live dengan Google Apps Script jika URL tersedia
  checkAndSyncLiveDrive();

  function updateFavoritesBadge() {
    if (badgeFavoritesCountEl) {
      badgeFavoritesCountEl.textContent = state.favorites.length;
    }
  }

  async function checkAndSyncLiveDrive() {
    if (typeof GOOGLE_APPS_SCRIPT_URL === 'undefined' || !GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.trim() === '') {
      return;
    }

    if (syncIndicator) {
      syncIndicator.classList.remove('hidden');
      syncIndicator.classList.add('flex');
      if (syncIcon) syncIcon.classList.add('animate-spin');
      if (syncText) syncText.textContent = 'Menyinkronkan...';
    }

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL);
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const result = await response.json();
      
      const rawLiveBooks = result.data || (Array.isArray(result) ? result : null);
      if (rawLiveBooks && Array.isArray(rawLiveBooks) && rawLiveBooks.length > 0) {
        const liveBooks = deduplicateBooks(rawLiveBooks);
        state.books = liveBooks;

        if (totalCountEl) totalCountEl.textContent = state.books.length;
        if (badgeTotalBooksEl) badgeTotalBooksEl.textContent = `${state.books.length} Koleksi`;

        renderCategoryPills();
        renderBooks();

        if (syncIcon) syncIcon.classList.remove('animate-spin');
        if (syncText) syncText.textContent = `Live: ${state.books.length} Buku`;
        
        localStorage.setItem('aksinu_live_books_v3', JSON.stringify(liveBooks));
      }
    } catch (err) {
      console.warn('Sinkronisasi Google Apps Script dilewati (menggunakan data lokal terverifikasi):', err);
      if (syncIcon) syncIcon.classList.remove('animate-spin');
      if (syncText) syncText.textContent = 'Data Lokal Terverifikasi';
    } finally {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
      }
      renderBooks();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      renderBooks();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderBooks();
    });
  }

  if (favoritesNavBtn) {
    favoritesNavBtn.addEventListener('click', () => {
      if (state.selectedCategory === 'favorites') {
        state.selectedCategory = 'all';
      } else {
        state.selectedCategory = 'favorites';
      }
      updateActiveCategoryPill();
      renderBooks();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.sortBy = 'default';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      if (sortSelect) sortSelect.value = 'default';
      updateActiveCategoryPill();
      renderBooks();
    });
  }

  // Modal Listeners
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (bookModal) {
    bookModal.addEventListener('click', (e) => {
      if (e.target === bookModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !bookModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (modalTogglePreviewBtn) {
    modalTogglePreviewBtn.addEventListener('click', () => {
      if (state.activeModalBook) {
        const isHidden = modalPreviewWrapper.classList.contains('hidden');
        if (isHidden) {
          modalIframe.src = state.activeModalBook.previewUrl;
          modalPreviewWrapper.classList.remove('hidden');
        } else {
          modalIframe.src = '';
          modalPreviewWrapper.classList.add('hidden');
        }
      }
    });
  }

  if (modalClosePreview) {
    modalClosePreview.addEventListener('click', () => {
      modalIframe.src = '';
      modalPreviewWrapper.classList.add('hidden');
    });
  }

  if (modalFavBtn) {
    modalFavBtn.addEventListener('click', () => {
      if (state.activeModalBook) {
        window.toggleBookFavorite(state.activeModalBook.id);
      }
    });
  }

  function updateModalFavButton(bookId) {
    const isFav = isBookFavorite(bookId);
    if (modalFavText) {
      modalFavText.textContent = isFav ? 'Tersimpan di Favorit' : 'Simpan Favorit';
    }
    if (modalFavIcon) {
      if (isFav) {
        modalFavIcon.classList.add('fill-amber-500', 'text-amber-500');
      } else {
        modalFavIcon.classList.remove('fill-amber-500', 'text-amber-500');
      }
    }
  }

  // Palette warna solid untuk kategori bidang ilmu
  function getCategoryColor(category) {
    const map = {
      'Sistem Informasi': { bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' },
      'Jaringan Komputer': { bg: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-300 dark:border-sky-800' },
      'Python & Data Science': { bg: 'bg-lime-100 text-lime-900 dark:bg-lime-950 dark:text-lime-300 border-lime-300 dark:border-lime-800' },
      'JavaScript & Web': { bg: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800' },
      'Mobile Development': { bg: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800' },
      'AI & Machine Learning': { bg: 'bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-300 border-purple-300 dark:border-purple-800' },
      'AI & Data Science': { bg: 'bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-300 border-violet-300 dark:border-violet-800' },
      'Cloud & DevOps': { bg: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800' },
      'PHP & Backend': { bg: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-800' },
      'Java & OOP': { bg: 'bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-300 border-red-300 dark:border-red-800' },
      'Database & SQL': { bg: 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-300 border-teal-300 dark:border-teal-800' },
      'Struktur Data & Algoritma': { bg: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800' },
      'UI/UX & Desain': { bg: 'bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300 border-orange-300 dark:border-orange-800' },
      'Manajemen & Bisnis': { bg: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-300 border-yellow-300 dark:border-yellow-800' },
      'Metodologi Riset': { bg: 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-400 dark:border-emerald-700' },
      'Ilmu Komputer': { bg: 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700' },
      'Dasar Pemrograman': { bg: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700' },
      'Dasar Web & Desain': { bg: 'bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300 border-orange-300 dark:border-orange-800' }
    };
    return map[category] || { bg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700' };
  }

  // Render Kategori Chips
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;

    // Hitung kemunculan kategori
    const counts = { all: state.books.length, favorites: state.favorites.length };
    state.books.forEach(b => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });

    const standardCategories = Object.keys(counts).filter(k => k !== 'all' && k !== 'favorites').sort();
    const categories = ['all', 'favorites', ...standardCategories];

    categoryPillsContainer.innerHTML = categories.map(cat => {
      const isAll = cat === 'all';
      const isFav = cat === 'favorites';
      let label = cat;
      if (isAll) label = 'Semua Buku';
      if (isFav) label = '❤️ Favorit Saya';

      const count = counts[cat] || 0;
      const isActive = state.selectedCategory === cat;

      const activeClass = isFav 
        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
        : 'bg-emerald-800 text-white border-emerald-800 shadow-sm';

      const badgeActiveClass = isFav ? 'bg-amber-700 text-white' : 'bg-emerald-900 text-emerald-100';

      return `
        <button 
          data-category="${cat}"
          class="category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 ${
            isActive 
              ? activeClass 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600'
          }"
        >
          <span>${label}</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] ${
            isActive ? badgeActiveClass : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }">${count}</span>
        </button>
      `;
    }).join('');

    // Tambah Event Listener ke setiap chip
    categoryPillsContainer.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.getAttribute('data-category');
        updateActiveCategoryPill();
        renderBooks();
      });
    });
  }

  function updateActiveCategoryPill() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.querySelectorAll('.category-pill').forEach(btn => {
      const cat = btn.getAttribute('data-category');
      const isActive = state.selectedCategory === cat;
      const isFav = cat === 'favorites';
      const countSpan = btn.querySelector('span:last-child');

      if (isActive) {
        btn.className = `category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 ${
          isFav ? 'bg-amber-600 text-white border-amber-600 shadow-sm' : 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
        }`;
        if (countSpan) countSpan.className = `px-1.5 py-0.2 rounded-full text-[10px] ${isFav ? 'bg-amber-700 text-white' : 'bg-emerald-900 text-emerald-100'}`;
      } else {
        btn.className = 'category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600';
        if (countSpan) countSpan.className = 'px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
      }
    });

    if (activeFilterIndicator) {
      if (state.selectedCategory === 'all') {
        activeFilterIndicator.textContent = 'Semua Kategori';
      } else if (state.selectedCategory === 'favorites') {
        activeFilterIndicator.textContent = 'Koleksi Favorit Tersimpan';
      } else {
        activeFilterIndicator.textContent = `Kategori: ${state.selectedCategory}`;
      }
    }
  }

  // Filter & Urutkan Buku (Pencarian Mendukung Judul, Penulis, Topik, ISBN, DDC)
  function getFilteredBooks() {
    let result = state.books.filter(book => {
      // Filter Kategori atau Favorit
      if (state.selectedCategory === 'favorites') {
        if (!isBookFavorite(book.id)) return false;
      } else if (state.selectedCategory !== 'all' && book.category !== state.selectedCategory) {
        return false;
      }

      // Filter Pencarian Menyeluruh
      if (state.searchQuery) {
        const query = state.searchQuery;
        const inTitle = book.title.toLowerCase().includes(query);
        const inAuthor = (book.author || '').toLowerCase().includes(query);
        const inCategory = (book.category || '').toLowerCase().includes(query);
        const inDesc = (book.description || '').toLowerCase().includes(query);
        const inTags = (book.tags || []).some(t => t.toLowerCase().includes(query));
        const inDdc = (book.callNumber || '').toLowerCase().includes(query);
        const inCatalog = (book.catalogId || '').toLowerCase().includes(query);
        const inIsbn = (book.isbn || '').toLowerCase().includes(query);
        return inTitle || inAuthor || inCategory || inDesc || inTags || inDdc || inCatalog || inIsbn;
      }

      return true;
    });

    // Pengurutan (Sorting)
    if (state.sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.sortBy === 'title-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (state.sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
    } else if (state.sortBy === 'favorites') {
      result.sort((a, b) => {
        const aFav = isBookFavorite(a.id) ? 1 : 0;
        const bFav = isBookFavorite(b.id) ? 1 : 0;
        return bFav - aFav || a.title.localeCompare(b.title);
      });
    } else if (state.sortBy === 'callnumber') {
      result.sort((a, b) => (a.callNumber || '').localeCompare(b.callNumber || '') || a.title.localeCompare(b.title));
    }

    return result;
  }

  // Render Kartu Buku
  function renderBooks() {
    if (!booksGrid) return;

    const filtered = getFilteredBooks();

    if (filteredCountEl) filteredCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      booksGrid.innerHTML = '';
      if (emptyState) {
        emptyState.classList.remove('hidden');
        if (state.selectedCategory === 'favorites') {
          if (emptyStateTitle) emptyStateTitle.textContent = 'Belum Ada Buku Favorit';
          if (emptyStateDesc) emptyStateDesc.textContent = 'Tandai buku yang Anda butuhkan dengan mengklik ikon bookmark pada kartu buku untuk menyimpannya di sini.';
        } else {
          if (emptyStateTitle) emptyStateTitle.textContent = 'Buku Tidak Ditemukan';
          if (emptyStateDesc) emptyStateDesc.textContent = 'Tidak ada buku yang cocok dengan kriteria pencarian Anda. Coba periksa ejaan atau ganti pilihan kategori bidang ilmu.';
        }
      }
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    booksGrid.innerHTML = filtered.map(book => {
      const colorObj = getCategoryColor(book.category);
      const isDrive = Boolean(book.googleDriveId);
      const isFav = isBookFavorite(book.id);

      return `
        <article class="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition group relative">
          <div>
            <!-- Header Kartu: Kategori, DDC, & Tombol Favorit -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-0.5 rounded text-[11px] font-bold border ${colorObj.bg}">
                  ${book.category}
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700" title="Kode Klasifikasi DDC">
                  ${book.callNumber || 'DDC 004'}
                </span>
              </div>

              <!-- Tombol Bookmark Favorit -->
              <button 
                type="button" 
                onclick="window.toggleBookFavorite('${book.id}', event)"
                class="p-1.5 rounded-lg transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  isFav ? 'text-amber-500 fill-amber-500' : 'text-slate-400 hover:text-amber-500'
                }"
                title="${isFav ? 'Hapus dari koleksi favorit' : 'Simpan ke koleksi favorit'}"
              >
                <i data-lucide="bookmark" class="w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}"></i>
              </button>
            </div>

            <!-- Judul Buku -->
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-2 cursor-pointer mb-1.5"
                onclick="window.openBookModal('${book.id}')">
              ${book.title}
            </h3>

            <!-- Penulis & Format -->
            <div class="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <div class="flex items-center gap-1.5 truncate">
                <i data-lucide="user" class="w-3.5 h-3.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"></i>
                <span class="truncate">${book.author || 'Pustaka AKSINU'}</span>
              </div>
              <span class="text-[10px] font-semibold flex-shrink-0 text-slate-400">
                ${book.size || 'PDF'}
              </span>
            </div>

            <!-- Deskripsi Singkat -->
            <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              ${book.description}
            </p>
          </div>

          <!-- Bagian Bawah & Tombol Aksi -->
          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
            <!-- Tombol Detail -->
            <button 
              type="button" 
              onclick="window.openBookModal('${book.id}')"
              class="px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-800 dark:hover:text-emerald-300 text-xs font-semibold transition"
              title="Lihat Detail & Sinopsis Buku"
            >
              Detail
            </button>

            <div class="flex items-center gap-1.5">
              <!-- Tombol Baca Online -->
              <a 
                href="${book.previewUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold transition flex items-center gap-1"
                title="Baca Dokumen Online di Google Drive Viewer"
              >
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>Baca</span>
              </a>

              <!-- Tombol Unduh Langsung -->
              <a 
                href="${book.downloadUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-950 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 text-xs font-bold transition flex items-center gap-1 shadow-sm"
                title="Unduh Berkas Ebook Sekarang"
              >
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
                <span>Unduh</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-render Ikon Lucide
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Buka Modal Detail Buku
  window.openBookModal = function(bookId) {
    const book = state.books.find(b => b.id === bookId);
    if (!book || !bookModal) return;

    state.activeModalBook = book;

    const colorObj = getCategoryColor(book.category);
    if (modalCategory) {
      modalCategory.textContent = book.category;
      modalCategory.className = `px-2.5 py-1 text-xs font-semibold rounded-md border ${colorObj.bg}`;
    }

    if (modalSize) {
      modalSize.textContent = `${book.googleDriveId ? 'Google Drive' : 'Penyimpanan Lokal'} • ${book.size || 'PDF'}`;
    }

    if (modalDdc) {
      modalDdc.textContent = `${book.callNumber || 'DDC 004'} • ${book.isbn || 'ISBN'}`;
    }

    if (modalTitle) modalTitle.textContent = book.title;
    if (modalAuthor) modalAuthor.textContent = `Penulis: ${book.author || 'Pustaka AKSINU'}`;
    if (modalCatalog) modalCatalog.textContent = `ID Katalog: ${book.catalogId || book.id}`;
    if (modalDescription) modalDescription.textContent = book.description;

    // Perbarui status tombol favorit di modal
    updateModalFavButton(book.id);

    // Render Tags
    if (modalTagsContainer) {
      const tags = book.tags || [];
      modalTagsContainer.innerHTML = tags.map(tag => `
        <span class="px-2 py-0.5 text-[11px] rounded bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 font-medium">
          #${tag}
        </span>
      `).join('');
    }

    // Reset iframe preview
    if (modalPreviewWrapper) modalPreviewWrapper.classList.add('hidden');
    if (modalIframe) modalIframe.src = '';

    // Set Link Aksi
    if (modalReadLink) modalReadLink.href = book.previewUrl;
    if (modalDownloadLink) modalDownloadLink.href = book.downloadUrl;

    bookModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  // Tutup Modal
  function closeModal() {
    if (!bookModal) return;
    bookModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (modalIframe) modalIframe.src = '';
    state.activeModalBook = null;
  }

  // Logika Dark / Light Mode
  function initTheme() {
    const savedTheme = localStorage.getItem('aksinu-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
      });
    }
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('aksinu-theme', 'dark');
      if (themeIconSun) themeIconSun.classList.remove('hidden');
      if (themeIconMoon) themeIconMoon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('aksinu-theme', 'light');
      if (themeIconSun) themeIconSun.classList.add('hidden');
      if (themeIconMoon) themeIconMoon.classList.remove('hidden');
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
});
