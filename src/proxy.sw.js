/**
 * PROXY.SW.JS
 * Service worker for proxy.js
 */

const proxy = "http://http://127.0.0.1:5500/proxy.html?host=";

self.addEventListener("install", function (event) {
	self.skipWaiting();
	console.log("[PROXY.SW.JS] Install event in progress.");
});

self.addEventListener("fetch", function (event) {
	console.log("[PROXY.SW.JS] Handling request...");
	event.respondWith(
		fetch(event.request)
	);
})