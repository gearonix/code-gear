import { makeAutoObservable } from 'mobx'
import { v4 as generateId } from 'uuid'

import { ExecutorResponse } from '@/components/RunCode'
import { FileHandlerData } from '@/modules/EditorContent/types'
import { LanguagesValues } from '@/shared/consts'

import { ContentTabInstance } from '../types'

import { Nullable } from '$/client-shared'

type ContentTabArgs = Partial<{
  lastNumber: number
  fileData: FileHandlerData,
  instance: ContentTabInstance
}>


export class ContentTab {
  private _key = generateId()
  private _fileHandle: Nullable<FileSystemFileHandle> = null
  private _label = 'Untitled'
  public executeMessage = ''
  public isExecuteError = false
  private _content = ''
  public idx = 0
  public lang: LanguagesValues = 'text'
  public wasChanged = false

  constructor({ lastNumber, fileData, instance }: ContentTabArgs) {
    makeAutoObservable(this)

    if (instance) {
      this.initUsingInstance(instance)
    }
    else if (fileData) {
      this.initUsingFileData(fileData)
    }

    if (lastNumber){
      this.idx = lastNumber + 1
    }
  }

  public setFileHandle(fileHandle: FileSystemFileHandle){
    this._fileHandle = fileHandle
    this.wasChanged = false
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
    // TODO: refactor

    if (this._fileHandle){
      if (!this.wasChanged){
        this.setLabel(`${this.getLabel()}  •`)
      }
      this.wasChanged = true

      return
    }
    const firstLine = this._content.split('\n')[0].slice(0, 10)
    const cropped = firstLine.replace(' ', '').replace('\n', '')
    const newLabel = `${cropped.length > 1 ? firstLine : 'Untitled'} •`
    this.wasChanged = true

    this.setLabel(newLabel)
  }

  public setTabContent(content: string){
    this._content = content

    this.updateLabel()
  }

  public getContent(){
    return this._content
  }

  public updateExecuteMessage(res: ExecutorResponse){
    this.isExecuteError = false
    if (res.error) {
      const error = res.error.split('^')[1].split('.')[0]
      this.isExecuteError = true
      return this.executeMessage = error
    }
    this.executeMessage = res.output
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

  private initUsingInstance(instance: ContentTabInstance){
    this._key = instance._key
    this._label = instance._label
    this.idx = instance.idx
    this._content = instance._content
    this._fileHandle = instance._fileHandle
    this.wasChanged = instance.wasChanged
    this.lang = instance.lang
    this.executeMessage = instance.executeMessage
    this.isExecuteError = instance.isExecuteError
  }

}
