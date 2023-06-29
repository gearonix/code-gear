import { FileHandle } from '@/components/Tabs/types'

export interface FileData{
  name: string
  type: string
  content: string
  fileHandle: FileHandle
}
