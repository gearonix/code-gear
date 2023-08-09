

## 1.1.0 (2023-08-09)


### Features

* added a cool modal for settings ([be5ab78](https://github.com/Gearonix/CodeGear/commit/be5ab788f596e27f0612655d8bc0fdba58712001))
* added a service to run code on the server using the xCode API ([4a8495f](https://github.com/Gearonix/CodeGear/commit/4a8495f1f59cee39acaac860af1ddfe48e63a986))
* added ability to change editor background and color, added smooth scrollbar ([9c68ef3](https://github.com/Gearonix/CodeGear/commit/9c68ef3d19d450d7509e84f9efc2d88f10529196))
* added ability to register user ([3ad319e](https://github.com/Gearonix/CodeGear/commit/3ad319edcf50a6000b562739260d61b10423b8f3))
* added ability to save and open files from file system, implemented keyboard manager, made hot keys ([4261ef3](https://github.com/Gearonix/CodeGear/commit/4261ef350e58bbd5c85ee86112437379339fa087))
* added automatic language change ([17ea3e7](https://github.com/Gearonix/CodeGear/commit/17ea3e75f431c6120b901e1b839dbf3948d3619f))
* added ErrorBoundary and NotFound page ([466229e](https://github.com/Gearonix/CodeGear/commit/466229e819eaf2df03e5324f1172923ee9892585))
* added new sign-in-modal ([6bbccb2](https://github.com/Gearonix/CodeGear/commit/6bbccb21f8afefe4083e0f412c99d1708d6b54dd))
* added notifications provider, improved settings popup ([9f8067f](https://github.com/Gearonix/CodeGear/commit/9f8067fa273ffa3ed229638f0ff8d8412b5a2bd2))
* added output console to show the result of code execution ([f376216](https://github.com/Gearonix/CodeGear/commit/f3762167401d906ccaf793abe36deeaf80f45dbf))
* added popup to close current tab ([453ffbc](https://github.com/Gearonix/CodeGear/commit/453ffbcdc06bddc09253c466433b4627ed0eafe9))
* added tabs to switch between files ([413c89e](https://github.com/Gearonix/CodeGear/commit/413c89e62152dbbd7cfbb23c296bc2fe256f83ea))
* added theme change (save to localStorage) and automatic language selection ([ced9ace](https://github.com/Gearonix/CodeGear/commit/ced9acea3ad149949ba8e89146a3743d1e1de3be))
* all opened files are stored in localStorage now ([ffb044b](https://github.com/Gearonix/CodeGear/commit/ffb044b878d6a5012b0705d5fa38190d25420bf9))
* configured routing ([e4ca84e](https://github.com/Gearonix/CodeGear/commit/e4ca84ec9e538c2a4b4c8ec05ff911d2fa6f984f))
* finished authorization on client ([44a80db](https://github.com/Gearonix/CodeGear/commit/44a80db3d6142f83fd789dd614e46fb851f37ec7))
* finished htmlPreview logic ([f80701c](https://github.com/Gearonix/CodeGear/commit/f80701c18254de66b8dc039094b412969b1218c6))
* finished settings popup, added key-buildings and saving to localStorage ([4e62580](https://github.com/Gearonix/CodeGear/commit/4e62580c93630d1af84abad7c562696c817ae79a))
* implemented ability to execute code on frontend ([3d3d448](https://github.com/Gearonix/CodeGear/commit/3d3d448a15bb367167f58e8adea81222e4bfad7f))
* implemented text synchronization with tabs ([cfc51bd](https://github.com/Gearonix/CodeGear/commit/cfc51bd74bdc496f7f16e75c73b442ecefdd1435))
* initialized mobx, moved tabs logic ([60a4eef](https://github.com/Gearonix/CodeGear/commit/60a4eef3cf7d653fcd7c9092364ff85bc5b51b23))
* started developing editor, described the theme connection logic ([60c224a](https://github.com/Gearonix/CodeGear/commit/60c224a5ab45c1a95cda888a3c8ba9911e983fb0))
* started working with useGesture and react spring, added a provider that loads libraries asynchronously ([c1c5fa4](https://github.com/Gearonix/CodeGear/commit/c1c5fa4d09946713ee869e56030e07ced451e46b))


### Bug Fixes

* ci problems ([c29e11a](https://github.com/Gearonix/CodeGear/commit/c29e11a087866b2d6e41ca8722793c7cb3908849))
* **ci:** fixed ci problems ([8d43203](https://github.com/Gearonix/CodeGear/commit/8d432037f8944aad7b6b85fdf7acc1eb99273222))
* **ci:** updated node.js allowed engine to 16.x ([8467380](https://github.com/Gearonix/CodeGear/commit/8467380784c9ab660aaef4655f5f90cf1999ada0))
* ErrorBoundary ([6801bb4](https://github.com/Gearonix/CodeGear/commit/6801bb4bec9c2ee5c3a2d852c1d4747cd1c2fae8))
* fixed bugs, initialized signIn modal ([5802420](https://github.com/Gearonix/CodeGear/commit/5802420ac21d96331176cead31051bb9e1bf3864))
* fixed build issues ([723eaca](https://github.com/Gearonix/CodeGear/commit/723eaca3b8d417cd8918878441b09999eb1643c1))
* fixes with lazy/suspence ([5f3acfd](https://github.com/Gearonix/CodeGear/commit/5f3acfd25c75cfa15f3fa2087fe30cadef3d4eff))
* improved terminal logic and animations ([5e9b224](https://github.com/Gearonix/CodeGear/commit/5e9b224a1a1e2ca7140310d367d41cd3a700c3e2))
* small fixes ([5db04c7](https://github.com/Gearonix/CodeGear/commit/5db04c76ae39297417270320b828b95fcf8a45d8))
* small fixes ([1267ee7](https://github.com/Gearonix/CodeGear/commit/1267ee7c1edea092dac5e44bcbb89585462a6a88))
* small tab logic fixes ([2973f42](https://github.com/Gearonix/CodeGear/commit/2973f42cddf4c6d419eb59f62daa8f764f937903))
* trying to solve git bugs with caching old files ([836d4d3](https://github.com/Gearonix/CodeGear/commit/836d4d35a000199949ffa080f7234b13e3971003))
* trying to solve git bugs with caching old files ([cdc2835](https://github.com/Gearonix/CodeGear/commit/cdc2835fc14b745e7811e169504f506ab51428f9))


### Configurations

* added .gitattributes and .browserlistrc ([df26c53](https://github.com/Gearonix/CodeGear/commit/df26c5333952cac91db3af70aee1a38e219aa12c))
* added CHANGELOG.md configuration ([66a4e93](https://github.com/Gearonix/CodeGear/commit/66a4e938018152ae6922cd42186d319bf8500084))
* added configuration for .env variables ([8efceac](https://github.com/Gearonix/CodeGear/commit/8efceac151b262fa2b2a82bea762523d1b9080c2))
* added dependabot.yml ([6b8ee30](https://github.com/Gearonix/CodeGear/commit/6b8ee3003f5bc7ed06f1ca6122ea5ebef89802e4))
* added option to skip type check during builds (I LITERALLY SPENT 4 hours to figure it out!!!) ([dc7e393](https://github.com/Gearonix/CodeGear/commit/dc7e393a88d6fdc54961b8d7a9de97e3d8731f9a))
* added prisma, manually implemented logic for splitting .prisma files with nx workspaces (it was hard!) ([1f9083c](https://github.com/Gearonix/CodeGear/commit/1f9083c58d45ac91e4d9c486abef9d478dedb646))
* **client:** decomposed vite config ([5d71369](https://github.com/Gearonix/CodeGear/commit/5d713690ed8076299ffffe8f0b29287f908721ea))
* configured commitlint, moved from pnpm to yarn 3 with plugins ([d61d2c0](https://github.com/Gearonix/CodeGear/commit/d61d2c0d9a5323d41c54940724f6861a40a923ff))
* configured eslint-kit ([e1bfc1a](https://github.com/Gearonix/CodeGear/commit/e1bfc1aa8d5f90423e2598f59f00692d9069e5ca))
* created libraries: config and services(nest.js), created app server(nest.js) ([03bd9a9](https://github.com/Gearonix/CodeGear/commit/03bd9a9eb93b20071fd92e6bb21cf2ac15cf3e13))
* initialized AuthStore and AuthServices ([97ed032](https://github.com/Gearonix/CodeGear/commit/97ed032710231dc16490291ba176a7b50a4a0493))
* initialized GraphQL Nest.js config, made first Apollo request to server from client ([491971d](https://github.com/Gearonix/CodeGear/commit/491971d7dbb2fe4c9a7915e1c0bfef8d21acc215))
* initialized hygen generator and created fsd-module generator ([a8d735a](https://github.com/Gearonix/CodeGear/commit/a8d735a5f1c6b816f226c8405582d25c8c50ff66))
* initialized preact app by using nx ([5ac13a6](https://github.com/Gearonix/CodeGear/commit/5ac13a6a179293e680caebbd039db36d1ada78e0))
* initialized styled-components ([a26d8d2](https://github.com/Gearonix/CodeGear/commit/a26d8d2f0792153f787de84f2e745659b3c3c68e))
* registered service worker and enabled caching by workbox and vite-plugin-pwa ([54dd54a](https://github.com/Gearonix/CodeGear/commit/54dd54aed6d2d4f5b9b4408becd571a5d409453a))
* renamed paths from "$/shared" to "$/client-shared" by using ts-morph script ([9ae1189](https://github.com/Gearonix/CodeGear/commit/9ae11890f8c5ec4a3c6910c979c90f42587f8b3f))
* renamed services to nest-services, initialized swagger module ([56f06a9](https://github.com/Gearonix/CodeGear/commit/56f06a9e7ca9a8a765f7a2c6e95c07abddcce31d))
* setup ts-morph ([fe1757d](https://github.com/Gearonix/CodeGear/commit/fe1757df655c3ac756703ae982efb16b951c7636))
* solved problem this useThemeLoader.ts ([3fbe15f](https://github.com/Gearonix/CodeGear/commit/3fbe15f754e204336fa5b12f57d76ee782bb9e0f))
* started to implement basic authorization by using passport js ([039c46e](https://github.com/Gearonix/CodeGear/commit/039c46e99203d1820e2053af0ace4318a59e0d1b))
* testing yarn workspaces ([da31b41](https://github.com/Gearonix/CodeGear/commit/da31b41faa6763b23ff2ad0b12f26e413592d217))
* trying to solve git bugs ([deae061](https://github.com/Gearonix/CodeGear/commit/deae0616fd43528fb70193158edaa8c7962aeb59))