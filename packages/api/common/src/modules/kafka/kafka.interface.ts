import { KafkaOptions } from '@nestjs/microservices'

export interface GetKafkaOptions {
  getKafkaOptions: (service: string) => KafkaOptions
}
