const CACHE_NAME = 'hll-spa-calc-2.2.5';
const CACHE_VERSION = '2.2.5';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './dist/styles.css',
  './dist/main.js',
  './fonts/Gotham-Medium.otf',
  './images/background/background.webp',
  './images/UI/help/red_mil_ingame.webp',
  './images/UI/help/height_difference.webp',
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

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isImage = isSameOrigin && /\.(webp|png|jpg|jpeg|gif|svg|ico)$/i.test(url.pathname);
  const isAppFile = isSameOrigin &&
    (url.pathname.match(/\.(html|js|css|json)$/i) || url.pathname.endsWith('/'));

  if (isImage) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const network = fetch(event.request)
          .then((fetchResponse) => {
            if (fetchResponse && fetchResponse.ok) {
              const copy = fetchResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            return fetchResponse;
          })
          .catch(() => cached || new Response('Offline', { status: 503 }));

        return cached || network;
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (isAppFile) {
          return fetch(event.request, { cache: 'no-cache' })
            .then((fetchResponse) => {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, fetchResponse.clone());
              });
              return fetchResponse;
            })
            .catch(() => {
              return response || new Response('Offline', { status: 503 });
            });
        }
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
