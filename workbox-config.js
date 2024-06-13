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
          // Return false to exempt requests from being fulfilled by index.html.
          // If this isn't a navigation, skip.
          if (request.mode !== 'navigate') {
            return false;
          } 
          // If this is a URL that starts with /_, skip.
          if (url.pathname.startsWith('/_')) {
            return false;
          } 
          // If this looks like a URL for a resource, because it contains a file extension, skip.
          const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
          if (url.pathname.match(fileExtensionRegexp)) {
            return false;
          } 
          // Return true to signal that we want to use the handler.
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
            {
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
            },
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
            {
              expiration: {
                maxEntries: 50,
              },
            },
          ],
        },
      },
    ],
  };
  