import { CreateViteConfigOptions } from '../types'
import { PreviewOptions, ServerOptions } from 'vite'



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
