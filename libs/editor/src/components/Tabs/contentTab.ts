import { makeAutoObservable } from 'mobx'
import { v4 as generateId } from 'uuid'

import { FileHandlerData } from '@/modules/EditorContent/types'
import { LanguagesValues } from '@/shared/consts'

import { Nullable } from '$/shared'


export class ContentTab {
  private readonly _key = generateId()
  private _fileHandle: Nullable<FileSystemFileHandle> = null
  private _label = 'Untitled'
  private _content = ''
  public idx = 0
  public lang: LanguagesValues = 'text'
  public wasChanged = false

  constructor(lastNumber?: number, fileData?: FileHandlerData) {
    makeAutoObservable(this)

    if (lastNumber){
      this.idx = lastNumber + 1
    }

    if (fileData) {
      this.initUsingFileData(fileData)
    }
  }

  public setFileHandle(fileHandle: FileSystemFileHandle){
    this._fileHandle = fileHandle
    console.log('FILE_HANDLE')
    this.setLabel(fileHandle.name)
  }

  public getFileHandle(){
    return this._fileHandle
  }

  public setLabel(newLabel: string) {
    this._label = newLabel
  }

  public getLabel() {
    return this._label
  }

  private updateLabel() {
    const firstLine = this._content.split('\n')[0].slice(0, 10)
    const cropped = firstLine.replace(' ', '').replace('\n', '')
    const newLabel = `${cropped.length > 1 ? firstLine : 'Untitled'} •`

    this.setLabel(newLabel)
  }

  public setTabContent(content: string){
    this._content = content
    this.wasChanged = true
    this.updateLabel()
  }

  public getContent(){
    return this._content
  }

  public getKeyId(){
    return this._key
  }

  private initUsingFileData(fileData: FileHandlerData){
    this._fileHandle = fileData.fileHandle
    this.lang = fileData.language
    this._content = fileData.content
    this._label = fileData.name
  }

}
