import { DynamicModule }      from '@nestjs/common'
import { Module }             from '@nestjs/common'
import { Provider }           from '@nestjs/common'
import { ConfigService }      from '@nestjs/config'
import { EnvModule }          from '../env'
import { ClientProxyFactory } from '@nestjs/microservices'
import { Transport }          from '@nestjs/microservices'
import { KafkaService }       from './kafka.service'

@Module({
  imports: [EnvModule],
  providers: [KafkaService],
  exports: [KafkaService]
})
export class KafkaModule {
  static forRoot(service: string): DynamicModule {
    const providers: Provider[] = [
      {
        provide: service,
        useFactory: (configService: ConfigService) => {
          const brokers = configService.get<string[]>('kafka.brokers', [])

          return ClientProxyFactory.create({
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: service,
                brokers
              },
              consumer: {
                groupId: service
              }
            }
          })
        },
        inject: [ConfigService]
      }
    ]

    return {
      module: KafkaModule,
      providers,
      exports: providers
    }
  }
}
