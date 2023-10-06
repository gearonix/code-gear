import { PreviewOptions }          from 'vite'
import { ServerOptions }           from 'vite'

import { CreateViteConfigOptions } from '../types'

export const defineServerOptions = (
  options: CreateViteConfigOptions
): ServerOptions => {
  if (options.projectType === 'application') {
    return {
      port: 3000,
      host: 'localhost',
      fs: {
        strict: false
      }
    }
  }
}
