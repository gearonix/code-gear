import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { validateConfig } from '../../../utils/validators'
import { KafkaConfig }    from '@/modules/env/types'

class KafkaValidator {
  @Env()
  KAFKA_BROKERS: string

  @Env()
  KAFKA_MICROSERVICE_CODE_EXECUTOR: string
}

export const kafka = registerAs<KafkaConfig>('kafka', () => {
  const conf = validateConfig(process.env, KafkaValidator)

  return {
    brokers: conf.KAFKA_BROKERS.split(','),
    microservices: {
      codeExecutor: conf.KAFKA_MICROSERVICE_CODE_EXECUTOR
    }
  }
})
