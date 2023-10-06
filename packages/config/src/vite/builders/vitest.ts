import { InlineConfig }            from 'vite'

import { resolveRootPath }         from '../../lib'
import { CreateViteConfigOptions } from '../types'

export const defineVitest = (
  options: CreateViteConfigOptions
): InlineConfig => ({
  globals: true,
  cache: {
    dir: `${resolveRootPath(options.layer)}/node_modules/.vitest`
  },
  environment: 'jsdom',
  include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
})
