import {ExecuteCodeApiDTO, ExecutorLanguages, ExecutorLanguagesValues} from "@code-gear/api/common";


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
