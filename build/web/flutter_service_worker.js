'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae0c18742ed55c4635a099fd60706829",
"assets/AssetManifest.json": "fbca102107f703ededd492584822b4e1",
"assets/FontManifest.json": "88b5a674255d783678641c7f740f6786",
"assets/fonts/Dosis-Bold.ttf": "ccb2ab50ca7958d0cd3c8d8e47730493",
"assets/fonts/Dosis-ExtraBold.ttf": "e18ccb71462eb63d23530a8a5aae8026",
"assets/fonts/Dosis-ExtraLight.ttf": "d84708e9edafade4011844e864823b61",
"assets/fonts/Dosis-Medium.ttf": "39e264b36985746779360ea14f00ab63",
"assets/fonts/MaterialIcons-Regular.otf": "985bb06d70996ec51b0d509f8be6a0e4",
"assets/images/arrows.jpg": "1e3c1fbd94a85d40f0923452d0a235e7",
"assets/images/cartoon_bot.jpg": "d99d886c6cd8c7e82a8753a65fabb90f",
"assets/images/coffee3.jpg": "a82ade51d8361fea34770c25094ee64d",
"assets/images/computer1.jpg": "60dad0f80df5b40c58cc4b650948f94d",
"assets/images/computer2.jpg": "a50bd3df780d0defbf15cfe006d994ec",
"assets/images/computer_dark.jpg": "b89c76f1a9a81ad21827ab4ceef65e29",
"assets/images/confluence1.jpg": "96731a961808477b0e78cc88f9093e81",
"assets/images/confluence2.jpg": "3bfececbb1eda82ffdbbc591bfbb752f",
"assets/images/eng1.jpg": "d6982e750f264261d477f83f0f750b0f",
"assets/images/eng2.jpg": "3bea0ca2c14ac3c8bad974ddd050bf67",
"assets/images/Huberlin-logo.jpg": "c79d22db3c3e56ee11901e75a4656772",
"assets/images/icon.png": "96ef07dfa7f545e7976ea32886096bed",
"assets/images/image832_adjusted.jpg": "bf4f6bdc9009c614c04a87580546d820",
"assets/images/me1.jpg": "008422f79bf057b59e89c05713f06228",
"assets/images/salesbot.jpg": "e250acaa91bfb5f46b2b540a4c7e358b",
"assets/images/sound.jpg": "35db2a8b39ac08605c7c05b100fce9cb",
"assets/images/success1.jpg": "33485002c42f6e42b8e3e6e709dce6e1",
"assets/images/success2.jpg": "53420ee591bfbfc1ffe6f64319b98652",
"assets/NOTICES": "1b943865f72cb710bbfacc7cdcedc98e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "200d7dac817283f4156fc696a6ea5be8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "13f891871e994d7ade722376e3db1793",
"icons/Icon-512.png": "7f74d82c6bfb997ab0586353e5cb1a3a",
"icons/Icon-maskable-192.png": "13f891871e994d7ade722376e3db1793",
"icons/Icon-maskable-512.png": "7f74d82c6bfb997ab0586353e5cb1a3a",
"index.html": "5a5dd5b8762040f55ef8eb9ee67203f6",
"/": "5a5dd5b8762040f55ef8eb9ee67203f6",
"main-icon.png": "04fe343cf208d4fc0e9c0e1810177bed",
"main.dart.js": "fb8e9778f22630092f6f748bb1e495b5",
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
