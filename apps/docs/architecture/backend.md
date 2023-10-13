# Backend Architecture

At first, I stuck to the usual modular architecture. After that, I decided to switch to microservices.

*Microservices* are very well suited to the monorepository structure, 
and I've also added the CQRS pattern that the [@nestjs/cqrs](https://docs.nestjs.com/recipes/cqrs) module provides.

## Kafka as a Message Broker

[Apache Kafka](https://kafka.apache.org/documentation/) is often used to solve the problems of messaging and transferring data between 
different `microservices`. Unlike [RabbitMQ](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html), it focuses on high throughput and scalability. 

I used Kafka + Zookeeper to implement communication between microservices.

::: code-group 

```yaml [docker-compose.services.yml]
zookeeper:
  image: confluentinc/cp-zookeeper:latest
  container_name: zookeeper
  networks:
    - cgnet
  env_file:
    - .env
    - .docker/.override.env
  ports:
    - 22181:2181

kafka:
  image: confluentinc/cp-kafka:latest
  container_name: kafka
  hostname: kafka
  networks:
    - cgnet
  depends_on:
    - zookeeper
  ports:
    - 29092:29092
  env_file:
    - .env
    - .docker/.override.env
```

:::tip NOTE

`.override.env` is a file to overwrite the local configuration for `docker`. It's important to add it

:::

## Usage with NestJS

You can use the module described below to *connect* the microservice.

```ts
@Module({
  imports: [EnvModule],
  providers: [KafkaService],
  exports: [KafkaService]
})
/**
 *  Creates a reusable Kafka configuration
 *  @param service {Microservice} - name of your microservice
 */
export class KafkaModule {
  static forRoot(service: Microservice): DynamicModule {
    const providers: Provider[] = [
      {
        provide: service,
        useFactory: (kafkaService: KafkaService) => {
          return ClientProxyFactory.create(
            kafkaService.getKafkaOptions(service)
          )
        },
        inject: [KafkaService]
      }
    ]

    return {
      module: KafkaModule,
      providers,
      exports: providers
    }
  }
}
```

Now, it can be connected in a single line.


```ts
@Module({
  imports: [KafkaModule.forRoot(Microservice.CODE_EXECUTOR)]
})

/**
 *  You can now use it in the module.
 */

@Controller()
export class ExampleController {
  constructor(
    @Inject(Microservice.CODE_EXECUTOR) private executorClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.executorClient.subscribeToResponseOf(CodeExecutorTopic.MY_TOPIC)
    await this.executorClient.connect()
  }

  @Get()
  async myRoute(
    @Body() args: ExampleDTO
  ): Promise<unknown> {
    return this.executorClient.send(CodeExecutorTopic.MY_TOPIC, args)
  }
}

```


## CQRS Pattern

Using *CQRS* in a project is no different from the cqrs documentation of the NestJS module,
which can be found [here](https://docs.nestjs.com/recipes/cqrs).

You can find examples of usage in the microservice `apps/server/service-code-executor`.

## Gateway Pattern

I'm using the `gateway` pattern for microservices. In general, it is quite popular, you can read more 
[here](https://microservices.io/patterns/apigateway.html).

