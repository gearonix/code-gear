import { validateConfig } from '../../../utils/validators'
import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { MiscConfig }     from '../types'

class MiscValidator {
  @Env()
  CODE_COMPILER_API_URL: string

  @Env()
  JWT_SECRET: string

  @Env()
  CLIENT_URL: string
}

export const misc = registerAs<MiscConfig>('misc', () => {
  const conf = validateConfig(process.env, MiscValidator)

  return {
    clientUrl: conf.CLIENT_URL,
    jwtSecret: conf.JWT_SECRET,
    codeExecutorUrl: conf.CODE_COMPILER_API_URL
  }
})
