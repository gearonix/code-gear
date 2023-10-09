import { DynamicModule }      from '@nestjs/common'
import { Module }             from '@nestjs/common'
import { Provider }           from '@nestjs/common'
import { ConfigService }      from '@nestjs/config'
import { EnvModule }          from '../env'
import { KafkaConfig }        from '../env'
import { ClientProxyFactory } from '@nestjs/microservices'
import { KafkaService }       from './kafka.service'
import { Microservice }       from '@/consts'
import { getKafkaOptions }    from './kafka.options'

@Module({
  imports: [EnvModule],
  providers: [KafkaService],
  exports: [KafkaService]
})
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
