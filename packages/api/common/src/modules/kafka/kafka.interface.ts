import { KafkaOptions } from '@nestjs/microservices'
import { Microservice } from '../../consts'

export interface GetKafkaOptions {
  getKafkaOptions: (service: Microservice) => KafkaOptions
}
