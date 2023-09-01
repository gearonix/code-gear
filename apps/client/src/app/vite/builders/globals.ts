import { AnyObject } from '@code-gear/web/shared'

export const defineGlobals = (): AnyObject => {
  return {
    'process.env': process.env,
    _isDev_: process.env.NODE_ENV === 'development'
  }
}
