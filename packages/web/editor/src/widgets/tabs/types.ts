import { LanguagesValues } from '@/shared/consts/languages'

import { Nullable } from '@code-gear/web/shared'

export interface ContentTab {
  key: string
  fileHandle: Nullable<FileSystemFileHandle>
  label: string
  content: string
  idx: number
  lang: LanguagesValues
  wasChanged: boolean
}
