# Prisma ORM

I've been using [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
as an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) and in this module I'll cover some interesting concepts I've found.

## Auto-generation of prisma types

To avoid duplicating types, you can generate prisma types and then reuse them between the frontend and backend.

::: code-group

```sh [yarn]
nx prisma:types gateway
```

:::

Under the hood, I use the [@kalissaac/prisma-typegen](https://www.npmjs.com/package/@kalissaac/prisma-typegen) module that allows me to do this.

```ts
// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export interface Example {
    name: string
}
```

## Using multiple Prisma files

In the project, you can group and create `.prisma` files wherever you want, in the end,
this script will merge all the .prisma files into one `schema.prisma`

```js
// ~/gateway/prisma/concat-prisma-files.js

export const concatPrismaFiles = ({ config, models, dest }) => {
  concat(
    [
      resolvePrisma('config', config),
      ...models.map((model) => resolvePrisma('models', `${model}.prisma`))
    ],
    resolvePrisma(dest),
    (error) => {
      if (error) {
        throw error
      }

      console.log('Prisma files merged.')
    }
  )
}

```
