import { KafkaOptions } from '@nestjs/microservices'
import { Transport }    from '@nestjs/microservices'
import { KafkaConfig }  from '@/modules'

export interface GetKafkaConfig extends KafkaConfig {
  microserviceName: string
}

export const getKafkaOptions = ({
  microserviceName,
  brokers,
  sessionTimeout,
  heartbeatInterval
}: GetKafkaConfig): KafkaOptions => {
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
