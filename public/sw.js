if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-6a1bf588"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/anFKbEliPGENn-jnDaQzY/_buildManifest.js",
          revision: "7b11a58573e740d54c07c0a1c1098637"
        },
        {
          url: "/_next/static/anFKbEliPGENn-jnDaQzY/_ssgManifest.js",
          revision: "5352cb582146311d1540f6075d1f265e"
        },
        {
          url: "/_next/static/chunks/26-72c22af311ca6b85.js",
          revision: "72c22af311ca6b85"
        },
        {
          url: "/_next/static/chunks/433-4c31ce78abef7148.js",
          revision: "4c31ce78abef7148"
        },
        {
          url: "/_next/static/chunks/framework-9b5d6ec4444c80fa.js",
          revision: "9b5d6ec4444c80fa"
        },
        {
          url: "/_next/static/chunks/main-f328696cba0f1db2.js",
          revision: "f328696cba0f1db2"
        },
        {
          url: "/_next/static/chunks/pages/_app-e44e7f93addd1e4c.js",
          revision: "e44e7f93addd1e4c"
        },
        {
          url: "/_next/static/chunks/pages/_error-7397496ca01950b1.js",
          revision: "7397496ca01950b1"
        },
        {
          url: "/_next/static/chunks/pages/about-us-4ecf382f456a984b.js",
          revision: "4ecf382f456a984b"
        },
        {
          url: "/_next/static/chunks/pages/apps-3f95c7a70f1863ae.js",
          revision: "3f95c7a70f1863ae"
        },
        {
          url: "/_next/static/chunks/pages/auth-69f6700c40c0946f.js",
          revision: "69f6700c40c0946f"
        },
        {
          url: "/_next/static/chunks/pages/auth/change-password-12535909c15d5490.js",
          revision: "12535909c15d5490"
        },
        {
          url: "/_next/static/chunks/pages/auth/reset-password-133509b931be38e4.js",
          revision: "133509b931be38e4"
        },
        {
          url: "/_next/static/chunks/pages/auth/sign-in-7f4d189f572463d6.js",
          revision: "7f4d189f572463d6"
        },
        {
          url: "/_next/static/chunks/pages/auth/sign-out-4eaf993db58528ff.js",
          revision: "4eaf993db58528ff"
        },
        {
          url: "/_next/static/chunks/pages/auth/sign-up-a5cc8d13726f2244.js",
          revision: "a5cc8d13726f2244"
        },
        {
          url: "/_next/static/chunks/pages/index-c2c2a27a0bbd9472.js",
          revision: "c2c2a27a0bbd9472"
        },
        {
          url: "/_next/static/chunks/pages/privacy-policy-b444cd8a90e9a189.js",
          revision: "b444cd8a90e9a189"
        },
        {
          url: "/_next/static/chunks/pages/tos-and-conditions-51b60adc81510d0b.js",
          revision: "51b60adc81510d0b"
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0"
        },
        {
          url: "/_next/static/chunks/webpack-3433a2a2d0cf6fb6.js",
          revision: "3433a2a2d0cf6fb6"
        },
        {
          url: "/_next/static/css/3941d208f35814d0.css",
          revision: "3941d208f35814d0"
        },
        {
          url: "/_next/static/media/fa-brands-400.87a84e7a.woff2",
          revision: "87a84e7a"
        },
        {
          url: "/_next/static/media/fa-brands-400.8f295425.ttf",
          revision: "8f295425"
        },
        {
          url: "/_next/static/media/fa-regular-400.561c7c94.woff2",
          revision: "561c7c94"
        },
        {
          url: "/_next/static/media/fa-regular-400.e9092185.ttf",
          revision: "e9092185"
        },
        {
          url: "/_next/static/media/fa-solid-900.3cfeed05.woff2",
          revision: "3cfeed05"
        },
        {
          url: "/_next/static/media/fa-solid-900.ab3a31af.ttf",
          revision: "ab3a31af"
        },
        {
          url: "/_next/static/media/fa-v4compatibility.0186d7ef.ttf",
          revision: "0186d7ef"
        },
        {
          url: "/_next/static/media/fa-v4compatibility.d2f7b4c4.woff2",
          revision: "d2f7b4c4"
        },
        {
          url: "/googleeffdb34e243d1c48.html",
          revision: "519a18bd7da03d83de80df0f3bc424f0"
        },
        {
          url: "/images/favicon.ico",
          revision: "5047836ba4913e92c56a8748fb31875a"
        },
        {
          url: "/images/google.svg",
          revision: "87be59a1f7061fc6021876aad6fee028"
        },
        {
          url: "/images/logo128.png",
          revision: "d9331036811d764a030950bc27f9e75c"
        },
        {
          url: "/images/logo144.png",
          revision: "a66b68a6bb898e0cd75bd248b69c9014"
        },
        {
          url: "/images/logo152.png",
          revision: "194f212bf10133ec3c59c472e89a0b16"
        },
        {
          url: "/images/logo16.png",
          revision: "128ee4c12ae123009a7b92702d288f9d"
        },
        {
          url: "/images/logo192.png",
          revision: "e74df5f7efeb8cd400082817126281f1"
        },
        {
          url: "/images/logo192.svg",
          revision: "95f506b84a08af2c73eb59bfc1ccf394"
        },
        {
          url: "/images/logo22.png",
          revision: "6a980c0079b62035b5568238b84cc23a"
        },
        {
          url: "/images/logo32.png",
          revision: "82da3232e67975df79ac38e5ee0f1537"
        },
        {
          url: "/images/logo384.png",
          revision: "812122882c733114ae140a888419bcff"
        },
        {
          url: "/images/logo512.png",
          revision: "49410d40572b1d7d87051d01990fc9d9"
        },
        {
          url: "/images/logo512.svg",
          revision: "c9ccb764646bb8e7bdf328655182b931"
        },
        {
          url: "/images/logo72.png",
          revision: "47686b3fd0f24f442bc777b0555e7523"
        },
        {
          url: "/images/logo96.png",
          revision: "a0aedd0e7efd642b2013da0ebf8537af"
        },
        {
          url: "/images/logo_bg759.svg",
          revision: "871d4f0da4fe2867d860ecaec5656e49"
        },
        {
          url: "/images/nlogo16.png",
          revision: "dd65cb4ed19cecee5cdef822f7ef899f"
        },
        {
          url: "/images/nlogo192.png",
          revision: "a383bed40ccc820ae45802609bd5a8c7"
        },
        {
          url: "/images/nlogo32.png",
          revision: "4eb545e20f5a215486733843eee6fe95"
        },
        {
          url: "/images/nlogo512.png",
          revision: "a8243257cac6ddae69da78d51f05a0d5"
        },
        { url: "/manifest.json", revision: "c90d8a7803570270b21de61dbf6e6d60" },
        { url: "/robots.txt", revision: "fa1ded1ed7c11438a9b0385b1e112850" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      "GET"
    );
});
