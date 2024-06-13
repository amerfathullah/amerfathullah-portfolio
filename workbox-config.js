const { ExpirationPlugin } = require('workbox-expiration');

module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,jpeg,svg,gif}'
  ],
  swDest: 'build/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: ({ request, url }) => {
        if (request.mode !== 'navigate') {
          return false;
        } 
        if (url.pathname.startsWith('/_')) {
          return false;
        }
        const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
        if (url.pathname.match(fileExtensionRegexp)) {
          return false;
        }
        return true;
      },
      handler: 'NetworkFirst',
      options: {
        cacheName: 'app-shell',
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      },
    },
    {
      urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
      },
    },
    {
      urlPattern: ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'images',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 50,
          }),
        ],
      },
    },
  ],
};
