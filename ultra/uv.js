importScripts('/ultra/uv/uv.bundle.js');
importScripts('/ultra/uv/uv.config.js');
importScripts('/ultra/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
