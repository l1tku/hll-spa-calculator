// Minimal Service Worker for HLL SPA Artillery Calculator
// This prevents 404 errors and enables basic offline caching

const CACHE_NAME = 'hll-spa-calc-v19';
const CACHE_VERSION = 'v19'; // Bump this on every deployment

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  `/dist/styles.css?${CACHE_VERSION}`,
  `/dist/main.js?${CACHE_VERSION}`,
  '/images/background/background.webp',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // For HTML, JS, and CSS files - fetch fresh version first, then cache
        const isAppFile = event.request.url.match(/\.(html|js|css)(\?.*)?$/);
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
    })
  );
});
