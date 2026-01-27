const CACHE_NAME = 'shammas-development-v1'
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/products',
  '/work',
  '/process',
  '/contact',
  '/site.webmanifest',
  '/favicon.ico',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
]

// Install service worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell')
      return cache.addAll(urlsToCache).catch((error) => {
        console.warn('[SW] Some assets failed to cache:', error)
        // Continue even if some assets fail
        return Promise.resolve()
      })
    })
  )
  self.skipWaiting()
})

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch with network-first strategy for better PWA experience
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip Web3Forms and Mailchimp API calls
  if (event.request.url.includes('web3forms.com') ||
      event.request.url.includes('mailchimp.com') ||
      event.request.url.includes('calendly.com')) {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // Return from cache if network fails
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[SW] Serving from cache:', event.request.url)
            return cachedResponse
          }
          // Return a fallback page for navigation requests
          if (event.request.destination === 'document') {
            return caches.match('/')
          }
          return null
        })
      })
  )
})
