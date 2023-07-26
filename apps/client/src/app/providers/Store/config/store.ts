import { makeAutoObservable } from 'mobx'

import { EditorStore } from '$/editor'

class RootStore {
  editor: EditorStore

  constructor() {
    makeAutoObservable(this)
    this.editor = new EditorStore()
  }
}

export default RootStore
