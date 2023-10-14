# PWA (Progressive Web Apps)

[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)  is a type of web application that 
leverages modern web technologies to provide a user experience similar to that of a native mobile application. 

In the project I use [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) + [Preact](https://preactjs.com/) 
combination to ensure caching and *offline* operation of the application
https://developer.chrome.com/docs/workbox/

## Using PWA Workbox

You can implement PWA in your application without using additional tools (implementation example
[here](https://github.com/UnnecessaryHub/learning-web/blob/master/frontend/common/pwa/sw.js)), 
but it is recommended to use ready-made solutions such as [*Google Workbox*](https://developer.chrome.com/docs/workbox/).

[Workbox](https://developer.chrome.com/docs/workbox/) - this is a library (more precisely, a set of libraries), 
the main purpose of which is “to provide best practices and get rid of boilerplate code when working with 
service workers.

## Initializing the service worker

First, let's initialize the Workbox.

```js
// public/service-worker.js

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})

```

## Caching with Workbox

You can easily cache your static files and the application will work offline.

```js
/**
 * Example of Workbox Caching
 */
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
)
```

## How to integrate into the app?

You can use `plugins` depending on your builder.

- [vite-plugin-pwa](https://www.npmjs.com/package/vite-plugin-pwa)
- [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)

In the project I am using [vite](https://vitejs.dev/) as the main bundler, so I am using `vite-plugin-pwa`.

```ts
// .config/vite/plugins.ts

import preact           from '@preact/preset-vite'
import { PluginOption } from 'vite'
import { VitePWA }      from 'vite-plugin-pwa'
import webfontDownload  from 'vite-plugin-webfont-dl'

import { fonts }        from './fonts'

export const buildCustomPlugins = (): PluginOption[] => [
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    strategies: 'injectManifest',
    srcDir: 'public',
    filename: 'service-worker.js',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      clientsClaim: true,
      skipWaiting: true
    },
    devOptions: {
      enabled: false
    },
    includeAssets: ['**/*']
  })
]


```

## What about Push Notifications?

I've been experimenting with push notifications for a while 
and have managed to implement it, but not in this project.

This can be easily implemented using the [web-push](https://www.npmjs.com/package/web-push) library.

## Useful Links

- [*Implementation in the project*](https://github.com/Gearonix/code-gear/blob/master/apps/client/public/service-worker.js)
- [What is Workbox (habr)](https://habr.com/ru/companies/macloud/articles/563724/)
