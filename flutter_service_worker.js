'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "3ef17f52a01c20e4febb614cb145b69a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b53bab0ecd15fd1e9cbd6e429d212010",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f62db030ad28e5b1c611cc322cbd50dd",
".git/logs/refs/heads/main": "f62db030ad28e5b1c611cc322cbd50dd",
".git/logs/refs/remotes/origin/HEAD": "f62db030ad28e5b1c611cc322cbd50dd",
".git/objects/pack/pack-5bd8d00dde974df5f56c3d4407e4485100a0c4d9.idx": "65b9e61c7495c939c69e7ae8fbf45902",
".git/objects/pack/pack-5bd8d00dde974df5f56c3d4407e4485100a0c4d9.pack": "6ca5e983450dc86fc6180f94d2bddc41",
".git/packed-refs": "c5ac210260c57ddd0fddb92cfda666c0",
".git/refs/heads/main": "e1e1e6ebea64e6a7b0c963f4eeef690a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "08902392814254a12cbb72bd415b6fa6",
"assets/AssetManifest.json": "4956547278baf268edd0550f9fa0548e",
"assets/assets/img/category/cat0.png": "9537944aab793f049d9a48cc36161823",
"assets/assets/img/category/cat1.png": "1f5063c9dedeff05cc8a191dc9b95d0e",
"assets/assets/img/category/cat10.png": "46086ea49507c3ca4379c25513e1b31b",
"assets/assets/img/category/cat11.png": "2d082029f69c41d16e631431a278f57a",
"assets/assets/img/category/cat12.png": "62b6d43d4f6900bafd4f0167cec3c5f8",
"assets/assets/img/category/cat13.png": "c4eaf9ac8fe8c5a6992783aaff73e8f0",
"assets/assets/img/category/cat14.png": "f8c88759711d5cbb21694bb1ecca26b0",
"assets/assets/img/category/cat15.png": "b4adc92f35d2679130db6bc4015531f3",
"assets/assets/img/category/cat16.png": "82dffe887a52665046258d9e6f668004",
"assets/assets/img/category/cat17.png": "2021f39e1d25975e04436907f2b12194",
"assets/assets/img/category/cat18.png": "837ae7ed97292bbdf5576c2b976bfb3e",
"assets/assets/img/category/cat19.png": "1c5ca943623f420f9c7f4c824c016b9a",
"assets/assets/img/category/cat2.png": "d57bcc569fc90368a445ea5d8b1d4bd5",
"assets/assets/img/category/cat3.png": "e1052cad1f951947c6ef15f1bee98863",
"assets/assets/img/category/cat4.png": "e449634af3b77cf96e8852d21fba3861",
"assets/assets/img/category/cat5.png": "1e4f86e6362d68b0cf8017b02a74f319",
"assets/assets/img/category/cat6.png": "53ae2f2460855c2f5c9ba71d1a2bea93",
"assets/assets/img/category/cat7.png": "0b1b0f45fc5d64630ab4980215898f41",
"assets/assets/img/category/cat8.png": "a18c9e7d5efed2d563d1388201fbcd42",
"assets/assets/img/category/cat9.png": "5e2bad22f2c6ce5f663bb976624097bd",
"assets/assets/img/category_page/0.jpg": "7f014dfab9f1d72d9765e5af16803ce4",
"assets/assets/img/category_page/1.jpg": "7dc108fc067bab08c131cfbf95c734a1",
"assets/assets/img/category_page/10.jpg": "9609afd7df66b8707cc1b99789fc9cc0",
"assets/assets/img/category_page/11.jpg": "043ed11d024d78c36377c1d87d77e756",
"assets/assets/img/category_page/2.jpg": "ca24dffa24886903617d35458e6724ec",
"assets/assets/img/category_page/3.jpg": "498fb2dc747e15c664909bd9a075304c",
"assets/assets/img/category_page/4.jpg": "a0b8ef8ef4e13b1c2e055a502b92b509",
"assets/assets/img/category_page/5.jpg": "a02ae887749aab7165972fc2449406b4",
"assets/assets/img/category_page/6.jpg": "fd57eaf97d56180fc33e05a397b9ecf1",
"assets/assets/img/category_page/7.jpg": "f89923ccb279709765de2ba71406536b",
"assets/assets/img/category_page/8.jpg": "30ea98dcc647d0c38f976a80a2a91d3b",
"assets/assets/img/category_page/9.jpg": "aefa72204db80e4247d1bd2312f21ab5",
"assets/assets/img/category_page/comment/0.png": "bf6a670ec48db80c9863b4a2d0f0bc53",
"assets/assets/img/category_page/comment/1.png": "4f8cc57c75d552b67f1e3a96b847b64c",
"assets/assets/img/category_page/comment/2.png": "141eadff39c3a6dd174706be6706ae0c",
"assets/assets/img/category_page/filterIcon.png": "b459f4290264475ec32577504f400927",
"assets/assets/img/category_page/galery/0.png": "40be9ddeb0e5b5f3fd8cfb9b446a8c6e",
"assets/assets/img/category_page/galery/1.png": "01a1a3632e1013257c7c4243bcf9dbbf",
"assets/assets/img/category_page/galery/2.png": "39468d233664d0f94875ba6f8d26b7ea",
"assets/assets/img/category_page/homeIcon.png": "c34bae811306c6033004f354feadfdfb",
"assets/assets/img/category_page/infoIcons/calendarIcon.png": "92c385d19bd5a2c5e8d5df297d9ca97e",
"assets/assets/img/category_page/infoIcons/instaIcon.png": "7f2d7fe44e2262d400d40455e6839464",
"assets/assets/img/category_page/infoIcons/mapIcon.png": "b8f77edcdc09a319aa299ac8cf4593a0",
"assets/assets/img/category_page/infoIcons/phoneIcon.png": "b71af0a21036c15685c2ce03f549720f",
"assets/assets/img/category_page/infoIcons/webIcon.png": "b3642c5b538921c8e56a8fdeaa59444b",
"assets/assets/img/category_page/instaIcon1.png": "7f222dfc35f30a2703ee850fe41d5ce6",
"assets/assets/img/category_page/paintball.png": "beab8ade94183c57ecace3b58df72a80",
"assets/assets/img/category_page/phoneIcon1.png": "33d86b0e8bea4cde956ae22604dc9a67",
"assets/assets/img/category_page/procentContIcon.png": "bd9bd4be7a3d19731079e8e1a1b7a9b0",
"assets/assets/img/category_page/procentIcon.png": "54443e88e866539bf30b350af30dfecf",
"assets/assets/img/facebook.png": "0a5840adbd0744e2eb49abc1a266d7ba",
"assets/assets/img/facebook.svg": "c503b67cfcde926dd3ab5f2f40ad4508",
"assets/assets/img/google.png": "51d0970f963f5f58f09c33c2c54c3e80",
"assets/assets/img/hotKesh/addIcon.png": "3777914ff9a6610de0bd7aaf1421d2a0",
"assets/assets/img/hotKesh/contIcon.png": "61c15209ed699b8233dbe2683ac116a6",
"assets/assets/img/hotKesh/fireIcon.png": "c4bcb272d2ca102534cc6f5710640d6b",
"assets/assets/img/hotKesh/hotKeshPage.png": "972c5a7707b751db6bcc827aa97ce14b",
"assets/assets/img/hotKesh/hotKeshPhoneIcon.png": "b71af0a21036c15685c2ce03f549720f",
"assets/assets/img/hotKesh/kesh0.jpg": "6fc6e9672170ba98a2a03a1f40f5e8fe",
"assets/assets/img/hotKesh/kesh1.jpg": "28b5ab74ca203427963fa5b439ac9133",
"assets/assets/img/hotKesh/kesh2.jpg": "e1fe2a2d2f60b38c3a657d40f8c2a094",
"assets/assets/img/hotKesh/kesh3.jpg": "0539a2cb6c4f5712078b82951ba3da1f",
"assets/assets/img/hotKesh/vesna.jpg": "513e8bb2a7070279607c5b8358885a6a",
"assets/assets/img/hotKesh/watch.png": "cb3ebd51ce7121f6850e86722a2fdaad",
"assets/assets/img/hotKeshIcon.png": "4bc02b2b95534c80289f4e1056c4c874",
"assets/assets/img/icon2.png": "43f22bdf5cd5baf75edd752c44ce32c2",
"assets/assets/img/icon3.png": "c0fe3402bb3ee492575f8142b6c3d08a",
"assets/assets/img/icon4.png": "13c97c26b2e79810428db64c093264cd",
"assets/assets/img/iconCenter.png": "7bbe3d2bbf305832692578dd555eb82f",
"assets/assets/img/iconFaq.svg": "d91c1a42cc7a85f1df7ab7c3db1b6f23",
"assets/assets/img/iconHome.png": "72c1d2ae9399959254336693cc3b6382",
"assets/assets/img/iconPassword.png": "2308bfda4a7e78ee63da02c54ae2ffdb",
"assets/assets/img/iconPhone.png": "e4afbcdec38b9a775eb72b6609633dd1",
"assets/assets/img/kesh.png": "828e6cc6d12a78c5effe226f41e7904d",
"assets/assets/img/krugIcon.png": "9ed97c77e23ff5d75346a46683f394cd",
"assets/assets/img/logo.png": "5bdad9f87ea3958d8efa7d4f50299d19",
"assets/assets/img/magazine/mag0.png": "f0d43565e3c5ecf9addd2e9352c0c525",
"assets/assets/img/magazine/mag1.png": "8cdbe66deec1adb4803c6d3ec137ea11",
"assets/assets/img/magazine/mag2.png": "4a8183624d90fcfb79d0ccaed0a362ba",
"assets/assets/img/magazine/mag3.png": "71de351bcad8352ec5e2dd4cf9725457",
"assets/assets/img/magazine/mag4.png": "ec92bc83ced4123ff1e36ffbd648275a",
"assets/assets/img/newIcon.png": "256f44b57a5831748e7cb4590205bc69",
"assets/assets/img/notif/greenDollarIcon.png": "750637cf7301d5e3eb795063012d8668",
"assets/assets/img/notif/moneyIcon.png": "c4ef81a5746ac2b77737cf453d17d1ea",
"assets/assets/img/notif/redDollarIcon.png": "e6c1deb1f08763bd0a94f3bc2e98ab48",
"assets/assets/img/notif/yellowDollarIcon.png": "905a8f22fb1807bd25605d0c31dd12af",
"assets/assets/img/penIcon.png": "23bc131bcbc576c438fee181acec129a",
"assets/assets/img/prof/bussines/checkIcon.png": "168cdf2673cba9b5b91c232228633b9a",
"assets/assets/img/prof/bussines/questionIcon.png": "b736dbf22b05ac4d7907b3bdbbd3bd67",
"assets/assets/img/prof/catIcon1.png": "8879033487c3fa20fa839b55f5b26ffc",
"assets/assets/img/prof/catIcon2.png": "7fe696eba1a344ca037f27db952968b5",
"assets/assets/img/prof/catIcon3.png": "1e75f631ca51b07d5e8397d3cce5d7fe",
"assets/assets/img/prof/catIcon4.png": "30f2885e9368b898d2bd4f34ae9a02ce",
"assets/assets/img/prof/catIcon5.png": "1b2af718346d093bbd0356a1c4631157",
"assets/assets/img/prof/catIcon6.png": "fd663ac323ab3f7172ec66184c339f97",
"assets/assets/img/prof/editingIcon.png": "a7ef103945b01a1d286919f618445084",
"assets/assets/img/prof/faq.png": "aab67706ca4927846108f47acc1ed276",
"assets/assets/img/prof/likeIcon.png": "cee023ec1527b547ee8530d3e16ca680",
"assets/assets/img/prof/purse/balance.png": "d0a2f384f44a6e4e5f9dc72fd94a66cc",
"assets/assets/img/prof/purse/megaPay.png": "c6a9d13e443dced98fe7fe08fb353434",
"assets/assets/img/prof/purse/O!.png": "0f12c8a23c2382e72bd07ff35aee3d94",
"assets/assets/img/prof/purse/qrPurse.png": "2e7d8890799c0a833d0ef5c70f666a03",
"assets/assets/img/prof/purse/toCard.png": "7e7be64a202891362fa0eac9de7cb526",
"assets/assets/img/prof/referal/copyIcon.png": "f85afeb3ff200543398ea9b987346117",
"assets/assets/img/prof/referal/ifEmpty.png": "4213a6f3d9b341cd746cde8570dcb397",
"assets/assets/img/prof/referal/share.png": "7c14db3c123a43887d1b6c66a148a161",
"assets/assets/img/prof/somIcon.png": "ae7a3b328d3d48f36c013fe6afc1b5cc",
"assets/assets/img/prof/somIcon2.png": "83a7cdaa4d7f8cdd900d4e33c0d4ff30",
"assets/assets/img/profIconTab1.png": "e94973a3674d5f2babd3329cd4e36cd8",
"assets/assets/img/profIconTab2.png": "152db3e7986b61b08509e7107f4e28ed",
"assets/assets/img/profIconTab3.png": "0b249345c9142457fbc18c41dd4c4e67",
"assets/assets/img/qr.png": "bbb4be309f724197f0b83167cb0bdb3f",
"assets/assets/img/user.png": "3e4f1d818fb42476ac0cacc0f14de49c",
"assets/assets/img/user2.png": "125d6d914d99d6a827785c1dbe6efacf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b38371c164fbfd367ae0c8e3213c63cf",
"assets/NOTICES": "42c164968a93e5a9e0332049657a43ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42e43b13f3e4e97cd79fbd0b2fdfce0a",
"/": "42e43b13f3e4e97cd79fbd0b2fdfce0a",
"main.dart.js": "d82457a8022a0ab393e9a2b0158fd190",
"manifest.json": "eda3ffb27aa4cb2dc31145592fb5d83f",
"README.md": "04508b8aa16b6c15b35a4259eeb6086a",
"version.json": "38aa8b1c3614cfd8ed9db84d9f3e0a5e"};
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
