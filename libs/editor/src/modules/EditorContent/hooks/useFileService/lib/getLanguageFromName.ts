import { languages, LanguagesKeys, LanguagesValues } from '@/shared/consts'

export const getLanguageFromName = (fileName: string): [LanguagesValues, string] => {
  const ext = fileName.split('.').at(-1) as string
  if (isInLanguagesKeys(ext)){
    return [languages[ext], ext]
  }
  return ['text', ext]
}


function isInLanguagesKeys(ext: string): ext is LanguagesKeys {
  if (ext in languages){
    return true
  }
  return false
}
