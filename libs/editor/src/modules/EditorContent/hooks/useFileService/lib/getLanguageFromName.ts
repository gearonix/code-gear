import { languages, LanguagesKeys, LanguagesValues } from '@/shared/consts'

function isInLanguagesKeys(ext: string): ext is LanguagesKeys {
  if (ext in languages){
    return true
  }
  return false
}

export const getLanguageFromName = (fileName: string): LanguagesValues => {
  const ext = fileName.split('.').at(-1) as string
  if (isInLanguagesKeys(ext)){
    return languages[ext]
  }
  return 'text'
}
