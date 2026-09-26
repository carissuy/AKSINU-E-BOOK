/**
 * AKSINU - Aplikasi Katalog & Portal Ebook Digital
 * Logika Antarmuka, Filter Real-time, Modal, dan Mode Gelap
 */

document.addEventListener('DOMContentLoaded', () => {
  // State Aplikasi
  const state = {
    books: typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : [],
    searchQuery: '',
    selectedCategory: 'all',
    sortBy: 'default',
    activeModalBook: null
  };

  // Elemen DOM
  const booksGrid = document.getElementById('books-grid');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const categoryPillsContainer = document.getElementById('category-pills');
  const activeFilterIndicator = document.getElementById('active-filter-indicator');
  const filteredCountEl = document.getElementById('filtered-count');
  const totalCountEl = document.getElementById('total-count');
  const badgeTotalBooksEl = document.getElementById('badge-total-books');
  const sortSelect = document.getElementById('sort-select');
  const resetFilterBtn = document.getElementById('reset-filter-btn');

  // Elemen Modal
  const bookModal = document.getElementById('book-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalSize = document.getElementById('modal-size');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDescription = document.getElementById('modal-description');
  const modalTagsContainer = document.getElementById('modal-tags-container');
  const modalPreviewWrapper = document.getElementById('modal-preview-wrapper');
  const modalIframe = document.getElementById('modal-iframe');
  const modalClosePreview = document.getElementById('modal-close-preview');
  const modalTogglePreviewBtn = document.getElementById('modal-toggle-preview-btn');
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

  // Pulihkan cache live sebelumnya jika ada
  try {
    const cachedLive = localStorage.getItem('aksinu_cached_books');
    if (cachedLive) {
      const parsed = JSON.parse(cachedLive);
      if (Array.isArray(parsed) && parsed.length >= state.books.length) {
        state.books = parsed;
      }
    }
  } catch (err) {}

  // Inisialisasi Mode Gelap
  initTheme();

  // Inisialisasi Total Statistik
  if (totalCountEl) totalCountEl.textContent = state.books.length;
  if (badgeTotalBooksEl) badgeTotalBooksEl.textContent = `${state.books.length} Koleksi`;

  // Render Kategori Pills
  renderCategoryPills();

  // Render Buku Pertama Kali
  renderBooks();

  // Sinkronisasi Live dengan Google Apps Script jika URL tersedia
  checkAndSyncLiveDrive();

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
      
      const liveBooks = result.data || (Array.isArray(result) ? result : null);
      if (liveBooks && Array.isArray(liveBooks) && liveBooks.length > 0) {
        state.books = liveBooks;

        if (totalCountEl) totalCountEl.textContent = state.books.length;
        if (badgeTotalBooksEl) badgeTotalBooksEl.textContent = `${state.books.length} Koleksi`;

        renderCategoryPills();
        renderBooks();

        if (syncIcon) syncIcon.classList.remove('animate-spin');
        if (syncText) syncText.textContent = `Live: ${state.books.length} Buku`;
        
        localStorage.setItem('aksinu_cached_books', JSON.stringify(liveBooks));
      }
    } catch (err) {
      console.warn('Sinkronisasi Google Apps Script dilewati (menggunakan data cadangan):', err);
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

  // Palette warna solid untuk kategori
  function getCategoryColor(category) {
    const map = {
      'Python & Data': { bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' },
      'JavaScript & Web': { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800' },
      'Dasar Web': { bg: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-300 dark:border-orange-800' },
      'Mobile Development': { bg: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-300 dark:border-sky-800' },
      'AI & Data Science': { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300 dark:border-purple-800' },
      'Cloud & DevOps': { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800' },
      'PHP & Backend': { bg: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-800' },
      'Java & OOP': { bg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-300 dark:border-red-800' },
      'Database': { bg: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800' },
      'Struktur Data': { bg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800' },
      'Dasar Pemrograman': { bg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700' },
      'Metodologi Riset': { bg: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-300 dark:border-teal-800' }
    };
    return map[category] || { bg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700' };
  }

  // Render Kategori Chips
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;

    // Hitung kemunculan kategori
    const counts = { all: state.books.length };
    state.books.forEach(b => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });

    const categories = ['all', ...Object.keys(counts).filter(k => k !== 'all').sort()];

    categoryPillsContainer.innerHTML = categories.map(cat => {
      const isAll = cat === 'all';
      const label = isAll ? 'Semua Buku' : cat;
      const count = counts[cat] || 0;
      const isActive = state.selectedCategory === cat;

      return `
        <button 
          data-category="${cat}"
          class="category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 ${
            isActive 
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
          }"
        >
          <span>${label}</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] ${
            isActive ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
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
      const countSpan = btn.querySelector('span:last-child');

      if (isActive) {
        btn.className = 'category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 bg-indigo-600 text-white border-indigo-600 shadow-sm';
        if (countSpan) countSpan.className = 'px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-700 text-white';
      } else {
        btn.className = 'category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600';
        if (countSpan) countSpan.className = 'px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
      }
    });

    if (activeFilterIndicator) {
      activeFilterIndicator.textContent = state.selectedCategory === 'all' 
        ? 'Semua Kategori' 
        : `Kategori: ${state.selectedCategory}`;
    }
  }

  // Filter & Urutkan Buku
  function getFilteredBooks() {
    let result = state.books.filter(book => {
      // Filter Kategori
      if (state.selectedCategory !== 'all' && book.category !== state.selectedCategory) {
        return false;
      }

      // Filter Pencarian
      if (state.searchQuery) {
        const query = state.searchQuery;
        const inTitle = book.title.toLowerCase().includes(query);
        const inAuthor = (book.author || '').toLowerCase().includes(query);
        const inCategory = (book.category || '').toLowerCase().includes(query);
        const inDesc = (book.description || '').toLowerCase().includes(query);
        const inTags = (book.tags || []).some(t => t.toLowerCase().includes(query));
        return inTitle || inAuthor || inCategory || inDesc || inTags;
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
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    booksGrid.innerHTML = filtered.map(book => {
      const colorObj = getCategoryColor(book.category);
      const isDrive = Boolean(book.googleDriveId);

      return `
        <article class="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition group">
          <div>
            <!-- Header Kartu: Kategori & Badges -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold border ${colorObj.bg}">
                ${book.category}
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${
                isDrive 
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }">
                ${isDrive ? 'Drive' : 'Lokal'} • ${book.size || 'PDF'}
              </span>
            </div>

            <!-- Judul Buku -->
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug line-clamp-2 cursor-pointer mb-1.5"
                onclick="window.openBookModal('${book.id}')">
              ${book.title}
            </h3>

            <!-- Penulis -->
            <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <i data-lucide="user" class="w-3.5 h-3.5 flex-shrink-0"></i>
              <span class="truncate">${book.author || 'Pustaka AKSINU'}</span>
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
              class="px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition"
              title="Lihat Detail Buku"
            >
              Detail
            </button>

            <div class="flex items-center gap-1.5">
              <!-- Tombol Baca Online -->
              <a 
                href="${book.previewUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold transition flex items-center gap-1"
                title="Baca Dokumen Online"
              >
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>Baca</span>
              </a>

              <!-- Tombol Unduh Langsung -->
              <a 
                href="${book.downloadUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-xs font-bold transition flex items-center gap-1 shadow-sm"
                title="Unduh Ebook Sekarang"
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

    if (modalTitle) modalTitle.textContent = book.title;
    if (modalAuthor) modalAuthor.textContent = `Penulis: ${book.author || 'Pustaka AKSINU'}`;
    if (modalDescription) modalDescription.textContent = book.description;

    // Render Tags
    if (modalTagsContainer) {
      const tags = book.tags || [];
      modalTagsContainer.innerHTML = tags.map(tag => `
        <span class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
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
