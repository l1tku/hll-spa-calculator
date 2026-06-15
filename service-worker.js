// Minimal Service Worker for HLL SPA Calculator
// Uses relative URLs so it works correctly on GitHub Pages project paths.

const CACHE_NAME = 'hll-spa-calc-v23';
const CACHE_VERSION = 'v23'; // Bump this on every deployment

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './dist/styles.css',
  './dist/main.js',
  './images/background/background.webp',
  './images/favicon.png',
  './images/icon-180.png',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // For app shell files, prefer network to keep deploys fresh.
        const isAppFile = event.request.url.match(/\.(html|js|css|json)(\?.*)?$/);
        // For images - also fetch fresh version first to allow GitHub Pages updates
        const isImage = event.request.url.match(/\.(webp|png|jpg|jpeg|gif|svg|ico)(\?.*)?$/);
        
        if (isAppFile || isImage) {
          return fetch(event.request)
            .then((fetchResponse) => {
              // Update cache with fresh version
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, fetchResponse.clone());
              });
              return fetchResponse;
            })
            .catch(() => {
              // If fetch fails (offline), return cached version
              return response || new Response('Offline', { status: 503 });
            });
        }
        // For other files - cache first
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
