const CACHE_NAME = 'pokemon-chess-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/styles/pokemon-theme.css',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
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
