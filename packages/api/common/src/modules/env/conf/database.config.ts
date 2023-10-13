import { registerAs }     from '@nestjs/config'
import { Env }            from '../env.decorator'
import { validateConfig } from '../../../utils/validators'

class DatabaseValidator {
  @Env()
  DATABASE_URL: string
}

export interface DatabaseConfig {
  url: string
}

export const database = registerAs<DatabaseConfig>('database', () => {
  const conf = validateConfig(process.env, DatabaseValidator)

  return {
    url: conf.DATABASE_URL
  }
})
