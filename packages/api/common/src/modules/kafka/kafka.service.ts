import { Injectable }      from '@nestjs/common'
import { ConfigService }   from '@nestjs/config'
import { KafkaOptions }    from '@nestjs/microservices'
import { Transport }       from '@nestjs/microservices'
import { GetKafkaOptions } from '@/modules/kafka/kafka.interface'
import { Microservice }    from '../../consts'
import { getKafkaOptions } from './kafka.options'
import { KafkaConfig }     from '@/modules'

@Injectable()
export class KafkaService implements GetKafkaOptions {
  constructor(private readonly configService: ConfigService) {}

  getKafkaOptions(service: Microservice): KafkaOptions {
    const { brokers, sessionTimeout, heartbeatInterval } =
      this.configService.getOrThrow<KafkaConfig>('kafka')

    const microserviceName = this.configService.getOrThrow<string>(
      `kafka.microservices.${service}`
    )

    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: microserviceName,
          brokers
        },
        consumer: {
          groupId: microserviceName,
          sessionTimeout,
          heartbeatInterval
        }
      }
    }
  }
}
