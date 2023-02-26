const web = "alladin-site-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/*.css",
  "/assets/*.js",
  "/*.webp",
  "/*.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(web).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })