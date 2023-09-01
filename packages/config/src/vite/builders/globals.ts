export const defineGlobals = (): Record<string, unknown> => {
  return {
    'process.env': process.env,
    _isDev_: process.env.NODE_ENV === 'development'
  }
}
