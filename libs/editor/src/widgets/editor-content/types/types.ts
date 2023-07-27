import { LanguagesValues } from '@/shared/consts/languages'

export interface FileHandlerData {
  name: string
  type: string
  content: string
  fileHandle: FileSystemFileHandle
  language: LanguagesValues
}
