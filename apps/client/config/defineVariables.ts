import { AnyObject } from '$/client-shared'

export const defineVariables = (): AnyObject => {
  return {
    'process.env': process.env,
    _isDev_: process.env.NODE_ENV === 'development'
  }
}
