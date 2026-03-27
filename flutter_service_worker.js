'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5f7797e136e539da9d119252a72f5bc",
"assets/AssetManifest.bin.json": "1dff8d91c0448ac3c481d1ea5d6d9437",
"assets/AssetManifest.json": "c8e0b85592d9ffff9360df05b9c76b46",
"assets/assets/icons/baklava.png": "752b09c1c5a268836ffc28cd150aff7c",
"assets/assets/icons/bal.png": "5c5f315232720c79745b73f822fcdfe4",
"assets/assets/icons/balik.png": "3e9ce3cbdac9f75ddcd125970b7fb0ca",
"assets/assets/icons/bebek_bezi.png": "ff94f02d7dc46cc91899ca558203237f",
"assets/assets/icons/bebek_mamasi.png": "336e79f6cfe1683e39366ee0ad3155b9",
"assets/assets/icons/bebek_pudrasi.png": "34bb06444c80e5e12c8ac855486b389e",
"assets/assets/icons/bebek_sampuan.png": "5164904b8c16097fae0a26d4334fff1c",
"assets/assets/icons/bebek_yagi.png": "ada465a3e3b35e834a458b087ce5d7d4",
"assets/assets/icons/biber.png": "79eaabaff35446d5abba17f9b37af50b",
"assets/assets/icons/biskuvi.png": "729fb05866ed026e199efde402f53619",
"assets/assets/icons/borek.png": "a1f27555cbd7e1c6cac847b2489fcc60",
"assets/assets/icons/bulasik_deterjani.png": "10ba651b55103ab2d86511608b1eb873",
"assets/assets/icons/bulasik_sungeri.png": "c3033fee2e4d3654b9e4c4028f7e9ec4",
"assets/assets/icons/bulasik_sungeri2.png": "6c38ef323caa9fc90e595853e592b844",
"assets/assets/icons/bulgur.png": "5aa1f414ff0be65227d4bed47881d02f",
"assets/assets/icons/camasir_deterjani.png": "bf16dc73d54ccb67635e8f741671a8f1",
"assets/assets/icons/cay.png": "cf544d886631e52934f6cac2d7203a30",
"assets/assets/icons/cikolata.png": "217e725a48ea207f252361814ee3b6f9",
"assets/assets/icons/cilek.png": "911ef0e43ae5b1cb2607ae4ea0983a90",
"assets/assets/icons/cilekrecel.png": "e8ac7219bd75855a038502b6c0b40cb7",
"assets/assets/icons/cips.png": "4b84f8f21076c01b4a5d60de2611914d",
"assets/assets/icons/default.png": "25c165fc197a11cd28ec1d2ee57cd078",
"assets/assets/icons/domates.png": "02408040c244646bedf1d38eeb923d7c",
"assets/assets/icons/dondurma.png": "faba3fd34f80a13aa86ef689c1192a15",
"assets/assets/icons/ekmek.png": "e26d2923d4319b467e92d2c8c2b5c047",
"assets/assets/icons/elma.png": "2ca62c0c03f282e64df6b1bd399e6dec",
"assets/assets/icons/et.png": "471dc8b712c809f8962bbf64109c9742",
"assets/assets/icons/gazoz.png": "601b81c6c1b19d3bd199eaa471a15a07",
"assets/assets/icons/havuc.png": "deedbfa01e187106e104074e306b620b",
"assets/assets/icons/kagit_havlu.png": "bf54a7225e402bc683088ae6331c041b",
"assets/assets/icons/kahve.png": "7af60d684bf8876e9fd2bc16f6c21e93",
"assets/assets/icons/karpuz.png": "72234d819fd1dd9ff3c4531b65634fe3",
"assets/assets/icons/kavun.png": "7a9076efd2241b268f256fbdc6cb3298",
"assets/assets/icons/ketcap.png": "ebb7a2452019f1839d091a25b456cb5d",
"assets/assets/icons/kofte.png": "fa16e77999cb18b137529467c1304b7b",
"assets/assets/icons/kola.png": "bfd59960de95e3c0e42886329225da80",
"assets/assets/icons/kunefe.png": "08210d322e956d3c248ac179dea94e03",
"assets/assets/icons/limon.png": "91ad7975e91fdc023ead99eed7f72e8d",
"assets/assets/icons/lokum.png": "3cae2e60510b958028760024ee8de6f6",
"assets/assets/icons/maden_suyu.png": "2a9f223c4a0825f659127a6f295ecd22",
"assets/assets/icons/makarna.png": "78a82f42d632df93b87cbbe92cb243b2",
"assets/assets/icons/manti.png": "a1007e083ca665de40f7765068beabae",
"assets/assets/icons/margarin.png": "8852ccbf9e4e71cb51649cbdd7f1a3e7",
"assets/assets/icons/marul.png": "7df78cf408abaabc8c404ee2db73e7f3",
"assets/assets/icons/mayonez.png": "74cad777bdadc1110abfb2067dc57e5c",
"assets/assets/icons/mercimek.png": "f43da957e830e915b3e077cae162de50",
"assets/assets/icons/muz.png": "9d541ad933027f219892804c6223dcb6",
"assets/assets/icons/nohut.png": "de95560f9d54503ebc7e974259b90cd3",
"assets/assets/icons/pamuk.png": "9f840c4b0b50c3794c28f3ee5a929a52",
"assets/assets/icons/pastirma.png": "ab0570c8bb8359108ef8116cc4538f45",
"assets/assets/icons/patates.png": "fcd47842f1fc1de4b6c5df4b9014ef4d",
"assets/assets/icons/peynir.png": "975c5d9bc47938df368cbde819ab872d",
"assets/assets/icons/pirinc.png": "7dbcc23acc1a73e78d617631f47d92c1",
"assets/assets/icons/pizza.png": "2f15c5e5cc793d70528be84ae2a93a0d",
"assets/assets/icons/pogaca.png": "19d28ac7762d000627f2b41f2d15b656",
"assets/assets/icons/portakal.png": "eacacc74026d96105f5ea6a801a862a6",
"assets/assets/icons/salam.png": "4c0a823a2f07cc64291eb92c5fc2cdd7",
"assets/assets/icons/salatalik.png": "596cf699dffabb6c61c11598a1c71dfa",
"assets/assets/icons/salca.png": "2f1998c974d2dca11d00454282381d9f",
"assets/assets/icons/seker.png": "d87bccd7608eeac596522f5783608a1f",
"assets/assets/icons/simit.png": "2afd4508aac778e5af2a00cd6593c1fb",
"assets/assets/icons/sogan.png": "ce370316f14b95be17b22d27288e6a81",
"assets/assets/icons/sosis.png": "8ca38c05581b4378df37ee71bb9f0814",
"assets/assets/icons/su.png": "d30ee61f0e9c73b8064ae89747202d59",
"assets/assets/icons/sucuk.png": "f523b3f47d7841776db4db493f557c9e",
"assets/assets/icons/sut.png": "e5c13ada5860afa90f864cf5750d487e",
"assets/assets/icons/tavuk.png": "25e2f13e4cd83ca7c87b23423867ad0c",
"assets/assets/icons/temizlik_bezi.png": "15800e5571aee009b67b3bda7c87cae2",
"assets/assets/icons/tereyagi.png": "5573b9ebaa22349417c7f1460bc439ce",
"assets/assets/icons/tuvalet_kagidi.png": "4e4cba319e0cfbdfdb5d0ad876dbaf7d",
"assets/assets/icons/tuz.png": "3fe00687c580e402d39e022a2444a2e5",
"assets/assets/icons/un.png": "578885524248d0fbfa775cb33256f330",
"assets/assets/icons/uzum.png": "ad56150adfaccebca51b8f0f400bd2df",
"assets/assets/icons/yag.png": "fa61cddd42f0e1771541d3e395f6f65e",
"assets/assets/icons/yesil_biber.png": "41bd7ce9f596519af326ccf9066032d3",
"assets/assets/icons/yogurt.png": "d4aa947fa55de1463bf26fd3048d5bfb",
"assets/assets/icons/yumurta.png": "eb3eaa26a83a243009763cf0f36871e7",
"assets/assets/icons/yumusatici.png": "bf16dc73d54ccb67635e8f741671a8f1",
"assets/assets/icons/yzeytin.png": "9864bc02a5aedd219b79e37470026458",
"assets/assets/icons/zeytinyagi.png": "643792968709c381dbedfe0e89de8e6a",
"assets/assets/logo.png": "b318eda385f3ad917d89f200b58ec75f",
"assets/assets/products.json": "94ef67cb8e9cb52bf8a48d71f3996f37",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d8bbadfaa9658e68a97451f0047195b5",
"assets/NOTICES": "63f7358edd6bade1bc9359199ba15a41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4872c64cb05b3d8d6fb5a87519903c16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8869679f1c5a948b0c1c857dbb441eb3",
"/": "8869679f1c5a948b0c1c857dbb441eb3",
"main.dart.js": "715f1222c42755c1477fded2769522b4",
"manifest.json": "38bd675a87ab3124ee4c9d3f16463edf",
"version.json": "69286ad142baf722542b61834f3f09c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
