import { CreateViteConfigOptions } from '../types'
import { ServerOptions } from 'vite'

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
