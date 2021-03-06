//remember to increment the version # when you update the service worker
const version = "1.06",
    preCache = "PRECACHE-" + version,
    cacheList = ["/"];

/*
create a list (array) of urls to pre-cache for your application
*/

/*  Service Worker Event Handlers */

self.addEventListener("install", function (event) {
    console.log("Installing the service worker!");
    self.skipWaiting();
    caches.open(preCache)
        .then(cache => {
            cache.addAll(cacheList);
        });
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        //wholesale purge of previous version caches
        caches.keys().then(cacheNames => {
            cacheNames.forEach(value => {
                if (value.indexOf("PRECACHE-")<0) return
                if (value.indexOf(version) < 0) {
                    caches.delete(value);
                }
            });
            console.log("service worker activated");
            return;
        })
    );
});


/* service worker resources

https://love2dev.com/blog/what-is-the-service-worker-cache-storage-limit/
https://love2dev.com/blog/service-worker-cache/

*/