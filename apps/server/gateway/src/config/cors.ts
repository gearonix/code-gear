import { clientUrl }   from '@code-gear/config'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

export const corsConfig: CorsOptions = {
  origin: clientUrl,
  methods: ['POST', 'PUT', 'DELETE', 'GET'],
  credentials: true
}
