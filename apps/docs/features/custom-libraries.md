# Custom Libraries

This page is a reference to some libraries that were written so that 
they would not be repeated in every project over and over again.

## grnx-utils

[grnx-utils](https://github.com/Gearonix/grnx-utils) - This is a small set of libraries
written by me to move reusable code into separate libraries. 

The project uses these part of the libraries. Below I can give examples of use.

## ESLint

[@grnx-utils/eslint](https://github.com/Gearonix/grnx-utils/tree/master/packages/eslint) - is a custom `eslint` 
configuration built on top of [eslint-kit](https://github.com/eslint-kit/eslint-kit) presets. <br/>
Adds eslint plugins like [`plugin-layout`](https://github.com/LIMPIX31/plugin-layout) , `prefer-arrow` and more.

[Eslint-kit](https://github.com/eslint-kit/eslint-kit) is a library that provides ready-made
eslint presets and it belongs to Evgeny Zakharov.

In the project you can see `.eslintrc.js` file with custom configuration.

```js
// .eslintrc.js

const grnx = require('@grnx-utils/eslint')

module.exports = grnx({
  root: __dirname,
  tsconfig: 'tsconfig.base.json',
  monorepo: true,
  enableImports: false,
  ext: {
    'max-len': 'off'
  }
})
```
:::tip NOTE

Since this is a monorepository, applications also have their 
own `.eslintrc.js` file, but inherit the configuration from the root file.

```js
module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*', '.vitepress/cache']
}
```
:::


## Custom Types

[@grnx-utils/types](https://github.com/Gearonix/grnx-utils/tree/master/packages/types) - is collection of 
types and interfaces for your project. 
You don't have to download libraries like utility-types or copy your types from project to project.

The package provides the usual types like `Nullable<T>`, but also adds types for react and preact.
Examples of use can be found [here](https://github.com/Gearonix/code-gear/blob/master/packages/web/shared/src/types/common/grnx.ts)

## Apollo

[@grnx-utils/apollo](https://github.com/Gearonix/grnx-utils/tree/master/packages/apollo) - a simple wrapper over [@apollo/client](https://www.apollographql.com/docs/react/), which makes the syntax cleaner.

For example, instead of this:
```ts
const response = await apollo.mutate({
    mutation: gql,
    variables: {
        _graphql: {
            username,
            id
        }
    }
})

const result = response.data.yourMethod
```

You can do this:
```ts
const result = await apollo.request<Res, Body>(gql, { username, id }, 'mutate')
```
---

## React Hooks

[@grnx-utils/react-hooks](https://github.com/Gearonix/grnx-utils/tree/master/packages/react-hooks) - is a collection of react hooks such as `useDebounce`, `useLocalStorage`, `useFilteredEffect`, `useAsyncEffect` and many others.
I also tried writing unit tests on hooks (via vitest) using [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library).

You can watch it [here](https://github.com/Gearonix/grnx-utils/tree/master/packages/react-hooks/src/__tests__).


## Local Storage Wrapper

[@grnx-utils/local-storage](https://github.com/Gearonix/grnx-utils/tree/master/packages/local-storage) - is a convenient API for working with localStorage.

### Features:

- Automatic parsing if the value is in JSON format
- Automatic JSON.stringify if you want to set non-primitive type to localStorage
- `SSR` support (check if `typeof window !== 'undefined'`)
- Ability to add a prefix to keys (useful if you have several applications on the same domain. For example, turns `AUTH_TOKEN` into `myapp__AUTH_TOKEN`)
- Ability to disable setting new values if necessary
- LocalStorage key typing (with typescript)

You can see usage examples [here](https://github.com/Gearonix/grnx-utils/tree/master/packages/local-storage)

## And also some others!

A complete list of libraries can be found [here](https://github.com/Gearonix/grnx-utils/tree/master).

I integrated [Verdaccio](https://verdaccio.org/docs/what-is-verdaccio), [auto publishing](https://github.com/Gearonix/grnx-utils/blob/master/tools/scripts/src/publish.ts) 
via Github Actions CI and version control via [Changesets](https://github.com/changesets/changesets). 

Perhaps you will be hooked by these implementations.


