# Config Encapsulation

The project uses *non-standard*
configuration. I was especially worried about this because I was 
interested in how the bundlers (like `webpack`) work and I wanted to reduce the amount of 
boilerplate configuration in each library (the millions of configurations that Nx generates) to a minimum.

So I created a separate library in which all the configs are located:

```
~/packages/config

├─ babel
├─ consts
├─ jest
├─ storybook
├─ tsconfig
├─ vite
├─ webpack
```

## Configuration Example (Webpack)

This is an example webpack configuration that has been used in several microservices 
(I used [@nx/nest](https://nx.dev/nx-api/nest) generators and executors)

```ts
// build-webpack-config.ts

/**
 * Combines your webpack config with nx modules and
 * custom tsconfig paths
 * @param rootDir {string} - root directory of current library
 * @param layer {BuildWebpackConfigPayload.layer} - nesting level of your library to include the
 * correct tsconfig paths depending on this
 */

export const buildWebpackConfig = ({
  rootDir,
  layer
}: BuildWebpackConfigPayload) => {
  return composePlugins(
    withNx({
      skipTypeChecking: true
    }),
    (config: Configuration) => {
      const options: WebpackConfigOptions = {
        layer,
        config,
        rootDir
      }

      config.resolve!.alias = {
        ...resolveTsconfigPaths(options)
      }

      return config
    }
  )
}
```

## Usage

You can reuse it in any microservice.

```ts
// .config/webpack.ts

import { buildWebpackConfig }    from 'cg-config/src/webpack'
import { resolve }               from 'path'

/**
 * Custom webpack configuration
 * @param rootDir {string}
 * @param layer {BuildWebpackConfigPayload.layer}
 */
export default buildWebpackConfig({
  rootDir: resolve(__dirname, '..'),
  layer: 'third' // 
})

```

## Problem with tsconfig paths

If you've ever worked with repositories, you've probably encountered this problem.

We have root `tsconfig.base.json` file, where we describe the 
paths to our libraries.

::: code-group

```json [tsconfig.base.json]
{
  "extends": "cg-config/src/tsconfig/base.json",
  "compilerOptions": {
    "rootDir": ".",
    "baseUrl": ".",
    "paths": {
      "@code-gear/api/common": ["packages/api/common/src/index.ts"]
    }
  }
}
```

:::

And we want to bind custom tsconfig paths in our `React` library.

::: code-group

```json [tsconfig.json (editor library)]

{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


```

:::

By overwriting the paths, we will not be able to access other libraries,
since other tsconfigs can only *overwrite* the configuration, and not extend it.

## Solution

I create two tsconfigs, and split the applications into paths (`second`/`third`). 
This way they can use the same configuration without creating duplication of configs.

::: code-group

```json [second-layer.json (config library)]

{
  "extends": "./../base.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@code-gear/api/common": ["../../packages/api/common/src/index.ts"],
      "@code-gear/api/contracts": ["../../packages/api/contracts/src/index.ts"],
      "@code-gear/api/services": ["../../packages/api/services/src/index.ts"],
      "@code-gear/web/editor": ["../../packages/web/editor/src/app/index.ts"],
      "@code-gear/web/shared": ["../../packages/web/shared/src/index.ts"],
      "@code-gear/web/ui": ["../../packages/web/ui/src/index.ts"],
      "@code-gear/config": ["../../packages/config/src/index.ts"]
    }
  }
}

```

:::

And we can use here.

::: code-group

```json [apps/client/tsconfig.json]

{
  "extends": "cg-config/src/tsconfig/paths/second-layer.json"
}


```

:::
