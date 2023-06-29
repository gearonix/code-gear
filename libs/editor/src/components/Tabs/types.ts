import { AnyObject, Nullable } from '$/shared'

// Typescript does not support File System Access API
export type FileHandle = Nullable<AnyObject>

export interface ContentTab {
  label: string
  key: string
  num: number
  text: string
  fileHandle: FileHandle
}
