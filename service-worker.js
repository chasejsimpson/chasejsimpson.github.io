const CACHE_NAME = 'scenario-generator-v4'; // <-- Changed from v3 to v4
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json', // <-- Added the manifest file to the cache
    '/img/pal-logo.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// Install event: caches the core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Activate event: cleans up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_NAME) {
                    console.log('Deleting old cache:', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Fetch event: serves assets from cache first (Cache-First Strategy)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // Not in cache - fetch from network
                return fetch(event.request);
            })
    );
});