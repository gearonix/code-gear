import { cacheDir } from './../misc'
import { UserConfig } from 'vite'

export const defineVitest = (): UserConfig => ({
  globals: true,
  cache: {
    dir: cacheDir
  },
  environment: 'jsdom',
  include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
})
