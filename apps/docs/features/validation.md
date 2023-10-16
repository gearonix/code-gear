# Validation

This module explains data validation concepts that may be encountered in a project.

## Environment Variables

In the project I use [class-validator](https://github.com/typestack/class-validator)
and [class-transformer](https://github.com/typestack/class-transformer) to validate environment variables.

```ts
/**
 * .env.validator.ts
 * */
export const validateConfig = <T extends object>(
  config: AnyObject,
  envVariablesClass: ClassConstructor<T>
): T => {
  const validatedConfig = plainToClass(envVariablesClass, config, {
    enableImplicitConversion: true
  })

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false
  })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }

  return validatedConfig
}
```

::: tip EnvModule

[EnvModule](https://github.com/Gearonix/code-gear/blob/master/packages/api/common/src/modules/env/env.module.ts) 
is responsible for the injection of environment variables. If you want to access variables, 
connect it instead of `ConfigModule`.

:::

So the env. variables are defined directly in classes using `class-validator` decorators.

```ts
/**
 * server.config.ts
 */
export const serverValidator = registerAs<ServerConfig>('server', () => {
  const conf = validateConfig(process.env, ServerValidator)

  return {
    prefix: conf.SERVER_PREFIX,
    port: Number(conf.SERVER_PORT),
    url: conf.SERVER_URL
  }
})

```

You can read more [here](https://docs.nestjs.com/techniques/configuration#custom-validate-function).

## Validation Pipes

The project implements request validation through validation *pipes*. Moreover, both http and rpc are used.

I took the concept of [data validation](https://docs.nestjs.com/pipes#class-validator) from the nestjs documentation.

::: tip NOTE

The entire configuration for microservices and the server part of the project
as a whole can be viewed in the `api/common` library.

:::
