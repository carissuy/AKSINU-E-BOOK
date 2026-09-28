/**
 * AKSINU - Service Worker PWA (Progressive Web App)
 * Akademi Sistem Informasi NU Purworejo
 * Mendukung akses offline cepat untuk aset inti website
 */

const CACHE_NAME = 'aksinu-cache-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './css/custom.css',
  './data/books.js',
  './js/app.js',
  './manifest.json',
  './favicon.png',
  './Logo/logo-aksinu-transparent.png',
  './Logo/favicon-192.png',
  './Logo/logo-aksinu-512.png'
];

// Install: Simpan aset statis inti ke cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Hapus cache versi lama jika ada
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Ambil dari cache dulu, fallback ke jaringan (Network fallback)
self.addEventListener('fetch', (event) => {
  // Abaikan permintaan selain GET atau Google Drive streaming/preview
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Jangan cache permintaan ke domain eksternal Google Drive viewer atau API
  if (url.origin.includes('drive.google.com') || url.origin.includes('script.google.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Ambil update di latar belakang (Stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
