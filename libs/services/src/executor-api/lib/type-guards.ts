import { ExecutorApiResponse } from './types'

export const isExecutorApiResponse = (
  res: unknown
): res is ExecutorApiResponse => {
  if (typeof res !== 'object' || res === null) {
    return false
  }

  if (
    'timeStamp' in res &&
    typeof res.timeStamp === 'number' &&
    'output' in res &&
    typeof res.output === 'string' &&
    'language' in res &&
    typeof res.language === 'string'
  ) {
    return true
  }

  return false
}
