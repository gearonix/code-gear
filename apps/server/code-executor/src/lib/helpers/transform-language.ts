import { ExecuteCodeApiDTO }       from '@code-gear/api/common'
import { ExecutorLanguages }       from '@code-gear/api/common'
import { ExecutorLanguagesValues } from '@code-gear/api/common'

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
