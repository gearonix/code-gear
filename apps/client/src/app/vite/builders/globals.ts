import { AnyObject } from '$/client-shared'

export const defineGlobals = (): AnyObject => {
  return {
    'process.env': process.env,
    _isDev_: process.env.NODE_ENV === 'development'
  }
}
