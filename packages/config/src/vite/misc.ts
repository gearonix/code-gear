import { resolveRootPath }         from '../lib'
import { CreateViteConfigOptions } from './types'

export const getCacheDir = (options: CreateViteConfigOptions) => {
  return `${resolveRootPath(options.layer)}/node_modules/.vite/${
    options.projectName
  }`
}
