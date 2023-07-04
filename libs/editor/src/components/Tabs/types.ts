import { LanguagesValues } from '@/shared/consts'

import { Nullable } from '$/client-shared'

export interface ContentTabInstance {
  _key: string
  _fileHandle: Nullable<FileSystemFileHandle>,
  _label: string
  _content: string
  idx: number
  lang: LanguagesValues
  wasChanged: boolean
}
