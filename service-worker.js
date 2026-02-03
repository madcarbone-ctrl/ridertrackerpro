const CACHE = "rider-prod-v1.3-logo-fix";

const FILES = [
  "./",
  "./index.html",
  "./app.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("fetch", e => {
  const req = e.request;

  if (req.destination === "image") {
    e.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(r => r || fetch(req))
  );
});
