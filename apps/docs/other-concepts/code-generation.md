# Code Generation 

The project uses two types of generators.

- [Hygen](https://www.hygen.io/docs/quick-start) - To create small components in libraries
- [Nx Generators](https://nx.dev/extending-nx/recipes/local-generators) - To create individual libraries or microservices

## Hygen

You can create small modules in the system, for example [fsd](https://feature-sliced.design/) module or ui component.
To do this, use the `packages/generator` library. It uses .esm syntax, and 
provides more flexible customization with templates.

::: code-group

```sh
$ nx run generator:new --name=fsd-module
```

:::

## Nx Generators

If you want to generate an application or microservice, use nx generators.

::: code-group

```sh
$ nx create --type=microservice --name=my-microservice
```

:::

This will create a microservice in the `apps/server` folder with the necessary settings, 
Dockerfile, built-in Kafka module and more.

::: tip NOTE

I'm using cg-global-generator under the hood, which is located in the `tools/generators` folder

:::

