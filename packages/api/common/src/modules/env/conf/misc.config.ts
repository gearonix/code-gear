import { IsEnum }         from 'class-validator'
import { validateConfig } from '../../../utils/validators'
import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { MiscConfig }     from '../types'
import { NodeEnv }        from '../types'

class EnvironmentVariablesValidator {
  @IsEnum(NodeEnv)
  NODE_ENV: NodeEnv

  @Env()
  CODE_COMPILER_API_URL: string

  @Env()
  JWT_SECRET: string

  @Env()
  CLIENT_URL: string
}

export const misc = registerAs<MiscConfig>('misc', () => {
  const conf = validateConfig(process.env, EnvironmentVariablesValidator)

  return {
    clientUrl: conf.CLIENT_URL,
    jwtSecret: conf.JWT_SECRET,
    codeExecutorUrl: conf.CODE_COMPILER_API_URL,
    nodeEnv: conf.NODE_ENV
  }
})
