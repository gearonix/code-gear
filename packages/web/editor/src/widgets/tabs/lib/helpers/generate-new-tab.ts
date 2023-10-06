import { v4 as generateId } from 'uuid'

import { FileHandlerData } from '@/widgets/editor-content/types'
import { ContentTab } from '@/widgets/tabs/types'

type GenerateContentTabPayload = Partial<{
  lastNumber: number
  fileData: FileHandlerData
}>

export const generateNewTab = ({
  fileData,
  lastNumber
}: GenerateContentTabPayload): ContentTab => ({
  fileHandle: fileData?.fileHandle ?? null,
  content: fileData?.content ?? '',
  label: fileData?.name ?? 'Untitled',
  lang: fileData?.language ?? 'text',
  idx: lastNumber ? lastNumber + 1 : 0,
  key: generateId(),
  wasChanged: false
})
