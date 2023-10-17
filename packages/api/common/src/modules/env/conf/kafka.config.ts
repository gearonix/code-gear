import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { validateConfig } from '../../../utils/validators'
import { KafkaConfig }    from '@/modules/env/types'
import { IsNotEmpty }     from 'class-validator'
import { IsNumberString } from 'class-validator'

class KafkaValidator {
  @Env()
  SERVER_KAFKA_BROKERS: string

  @Env()
  SERVER_KAFKA_MICROSERVICE_CODE_EXECUTOR: string

  @Env()
  SERVER_KAFKA_MICROSERVICE_AUTH: string

  @IsNumberString()
  @IsNotEmpty()
  SERVER_KAFKA_SESSION_TIMEOUT: string

  @IsNumberString()
  @IsNotEmpty()
  SERVER_KAFKA_HEARTBEAT_INTERVAL: string
}

export const kafka = registerAs<KafkaConfig>('kafka', (): KafkaConfig => {
  const conf = validateConfig(process.env, KafkaValidator)

  return {
    brokers: conf.SERVER_KAFKA_BROKERS.split(','),
    microservices: {
      codeExecutor: conf.SERVER_KAFKA_MICROSERVICE_CODE_EXECUTOR,
      auth: conf.SERVER_KAFKA_MICROSERVICE_AUTH
    },
    sessionTimeout: Number(conf.SERVER_KAFKA_SESSION_TIMEOUT),
    heartbeatInterval: Number(conf.SERVER_KAFKA_HEARTBEAT_INTERVAL)
  }
})
