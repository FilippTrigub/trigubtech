'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f9f094515c5759ce4869883b6267f0af",
"assets/AssetManifest.json": "4797a2b2cf1621afaeac7a5128a6842d",
"assets/FontManifest.json": "88b5a674255d783678641c7f740f6786",
"assets/fonts/Dosis-Bold.ttf": "ccb2ab50ca7958d0cd3c8d8e47730493",
"assets/fonts/Dosis-ExtraBold.ttf": "e18ccb71462eb63d23530a8a5aae8026",
"assets/fonts/Dosis-ExtraLight.ttf": "d84708e9edafade4011844e864823b61",
"assets/fonts/Dosis-Medium.ttf": "39e264b36985746779360ea14f00ab63",
"assets/fonts/MaterialIcons-Regular.otf": "985bb06d70996ec51b0d509f8be6a0e4",
"assets/images/arrows.jpg": "de26f8575b8594e725420246cf652ee8",
"assets/images/audio.jpg": "005a296e5a82288c37da599cb4aad81e",
"assets/images/coffee.jpg": "6f3b721f83de99d439a7a9ec18a06073",
"assets/images/eng1.jpg": "dee650d00712686950a7eb88e01f0d98",
"assets/images/eng2.jpg": "83f7edd75ef59b583bfae70569df0a03",
"assets/images/Huberlin-logo.jpg": "c79d22db3c3e56ee11901e75a4656772",
"assets/images/icon.png": "96ef07dfa7f545e7976ea32886096bed",
"assets/images/image832_adjusted.png": "fcfe9e7cf77380ebf6a9647bd18bd712",
"assets/images/me1.jpg": "b0eb10cce5f8b11cda9ae2143e56e497",
"assets/images/mess.jpg": "07cebdc789ec9d17702ce8898cd9cf6b",
"assets/images/network1.jpg": "0d3002a7b1d5168c4963f3945e94fadb",
"assets/images/network2.jpg": "08d1ad00801e67902e6bb4a9b57107c7",
"assets/images/pattern1.jpg": "21698b0c4f55a2cd7beb0c637f1250c0",
"assets/images/salesbot.jpg": "a295aa47b52169e48f73e50b8a43ffaa",
"assets/NOTICES": "5d3aa0e6ab418479c2f6c794f6b23fda",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "d7ad5e99276f84ee498ea7dd701ea04c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "54810c9ae4add39314887f860b1ced53",
"icons/Icon-512.png": "9448e7a174ba1549a0d6395b75b12bfd",
"icons/Icon-maskable-192.png": "54810c9ae4add39314887f860b1ced53",
"icons/Icon-maskable-512.png": "9448e7a174ba1549a0d6395b75b12bfd",
"index.html": "4d21239607dbffc42b9b4bbc852dfbe9",
"/": "4d21239607dbffc42b9b4bbc852dfbe9",
"main-icon.png": "5f3c4d9e2980ec3c1ccc9941f31c17a2",
"main.dart.js": "749c47b33e475706b65c26cc417d4e61",
"manifest.json": "a8e9159dc7ecd6ad071443760f49c9ea",
"version.json": "e8c414a4a5e5ec36b8b16c5e682136b3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
