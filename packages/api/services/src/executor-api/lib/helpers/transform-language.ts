import { ExecuteCodeApiDTO }       from '../../dto/execute-code-api.dto'
import { ExecutorLanguages }       from '../types'
import { ExecutorLanguagesValues } from '../types'

type TransformLanguage = Omit<ExecuteCodeApiDTO, 'language'> & {
  language: ExecutorLanguagesValues
}

export const transformLanguage = (
  args: ExecuteCodeApiDTO
): TransformLanguage => {
  return {
    ...args,
    language: ExecutorLanguages[args.language]
  }
}
