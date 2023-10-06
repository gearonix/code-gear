import { Nullable }        from '@code-gear/web/shared'

import { LanguagesValues } from '@/shared/consts/languages'

export interface ContentTab {
  key: string
  fileHandle: Nullable<FileSystemFileHandle>
  label: string
  content: string
  idx: number
  lang: LanguagesValues
  wasChanged: boolean
}
