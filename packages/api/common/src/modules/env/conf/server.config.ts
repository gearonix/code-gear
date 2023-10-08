import { IsNotEmpty }     from 'class-validator'
import { IsString }       from 'class-validator'
import { IsNumberString } from 'class-validator'
import { validateConfig } from '../../../utils/validators'
import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { ServerConfig }   from '../types'

class EnvironmentVariablesValidator {
  @IsNumberString()
  @IsNotEmpty()
  SERVER_PORT: string

  @IsString()
  SERVER_PREFIX: string

  @Env()
  SERVER_URL: string
}

export const server = registerAs<ServerConfig>('server', () => {
  const conf = validateConfig(process.env, EnvironmentVariablesValidator)

  return {
    prefix: conf.SERVER_PREFIX,
    port: Number(conf.SERVER_PORT),
    url: conf.SERVER_URL
  }
})
