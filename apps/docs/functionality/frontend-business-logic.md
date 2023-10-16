# Frontend Business Logic

In the project I use [MobX](https://mobx.js.org/installation.html) for the state manager.

## Division into services

I divide mobx stores into 4 categories.

- cats.`actions`.ts - state mutations
- cats.`getters`.ts - state getters
- cats.`services`.ts - anchyronous state mutations
- cats.`store`.ts - a module that combines everything and adds the state itself

::: tip Examples

Examples of usage can be found in the `web/editor` library

:::

## Root Store

Even though Mobx provides options for separating stores (and which I use), I still use one root store.


::: tip Global Store

The global store can be found in the `client` application

:::
