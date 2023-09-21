importScripts("./uv/uv.bundle.js");
importScripts("./uv/uv.config.js");
importScripts("./uv/uv.sw.js");
import("./uv/uv.bundle.js");
import("./uv/uv.config.js");
import("./uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
