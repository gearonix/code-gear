import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { validateConfig } from '../../../utils/validators'
import { KafkaConfig }    from '@/modules/env/types'

class EnvironmentVariablesValidator {
  @Env()
  KAFKA_BROKERS: string
}

export const kafka = registerAs<KafkaConfig>('kafka', () => {
  const conf = validateConfig(process.env, EnvironmentVariablesValidator)

  return {
    brokers: conf.KAFKA_BROKERS.split(',')
  }
})
