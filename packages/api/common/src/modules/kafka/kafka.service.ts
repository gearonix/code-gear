import { Injectable }      from '@nestjs/common'
import { ConfigService }   from '@nestjs/config'
import { KafkaOptions }    from '@nestjs/microservices'
import { Transport }       from '@nestjs/microservices'
import { GetKafkaOptions } from '@/modules/kafka/kafka.interface'

@Injectable()
export class KafkaService implements GetKafkaOptions {
  constructor(private readonly configService: ConfigService) {}

  getKafkaOptions(service: string): KafkaOptions {
    const brokers = this.configService.get<string[]>('kafka.brokers', [])

    return {
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
    }
  }
}
