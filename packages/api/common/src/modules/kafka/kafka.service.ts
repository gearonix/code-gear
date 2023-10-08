import { Injectable }      from '@nestjs/common'
import { ConfigService }   from '@nestjs/config'
import { KafkaOptions }    from '@nestjs/microservices'
import { Transport }       from '@nestjs/microservices'
import { GetKafkaOptions } from '@/modules/kafka/kafka.interface'
import { Microservice }    from '../../consts'

@Injectable()
export class KafkaService implements GetKafkaOptions {
  constructor(private readonly configService: ConfigService) {}

  getKafkaOptions(service: Microservice): KafkaOptions {
    const microserviceName = this.configService.getOrThrow(
      `kafka.microservices.${service}`
    )

    const brokers = this.configService.getOrThrow<string[]>('kafka.brokers')

    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          // clientId: microserviceName,
          brokers
        },
        consumer: {
          groupId: microserviceName,
          allowAutoTopicCreation: true
        }
      }
    }
  }
}
