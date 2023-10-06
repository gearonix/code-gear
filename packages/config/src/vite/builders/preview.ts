import { ServerOptions }           from 'vite'

import { CreateViteConfigOptions } from '../types'

export const definePreviewOptions = (
  options: CreateViteConfigOptions
): ServerOptions => {
  if (options.projectType === 'application') {
    return {
      port: 4200,
      host: 'localhost'
    }
  }
}
