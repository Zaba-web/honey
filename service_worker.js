importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-window.prod.mjs')

workbox.routing.registerRoute(
    ({request}) => request.destination === "image",
    new workbox.strategies.CacheFisrt()
);