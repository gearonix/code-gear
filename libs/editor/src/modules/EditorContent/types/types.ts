import { FileHandle } from '@/components/Tabs/types'
import { LanguagesValues } from '@/shared/consts'

export interface FileData{
  name: string
  type: string
  content: string
  fileHandle: FileHandle
  language: LanguagesValues
}
