const versionReg = (new RegExp(/\d+/g)).exec(self.location.search);

if(versionReg) {
  const VERSION = versionReg[0];

  const CACHE_FILE = [
    ".js",
    ".css",
    ".webp",
    ".png",
    "avatars.githubusercontent.com",
  ];
  
  const IGNORE_FILE = [];
  
  const DEFAULT_CACHE_FILE = [];
  
  const isAcceptFile = (url) => {
    const r = new RegExp(".*(" + CACHE_FILE.join("|") + ").*");
    return CACHE_FILE.length && r.test(url);
  }
  function isIgnoreFile(url) {
    const r = new RegExp(".*(" + IGNORE_FILE.join("|") + ").*");
    return IGNORE_FILE.length && r.test(url);
  }
  
  self.addEventListener("install", function (event) {
    event.waitUntil(
      caches.open(VERSION).then(function (cache) {
        return cache.addAll(DEFAULT_CACHE_FILE);
      })
    );
  });
  self.addEventListener("activate", function (event) {
    const cacheWhitelist = [VERSION];
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map((key) => {
            if (cacheWhitelist.indexOf(key) === -1) {
              return caches.delete(key);
            } else {
              return undefined;
            }
          })
        );
      })
    );
  });
  self.addEventListener("fetch", function (event) {
    const { method, url } = event.request;
  
    if (method === "POST" || !isAcceptFile(url) || isIgnoreFile(url)) return;
  
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then((response) => {
              const responseClone = response.clone();
              caches.open(VERSION).then(function (cache) {
                cache.put(event.request, responseClone);
              });
              return response;
            })
            .catch(function (error) {
              return Promise.reject(error);
            });
        }
      })
    );
  
  });
};


