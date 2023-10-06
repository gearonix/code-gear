import { ExecutorApiResponse }     from '$/nest-common'

import { ExecutorLanguagesValues } from './types'

export const isExecutorApiResponse = (
  res: unknown
): res is ExecutorApiResponse<ExecutorLanguagesValues> => {
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