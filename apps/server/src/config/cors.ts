import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

import { clientUrl } from '$/config'

export const corsConfig: CorsOptions = {
  origin: clientUrl,
  methods: ['POST', 'PUT', 'DELETE', 'GET'],
  credentials: true
}
