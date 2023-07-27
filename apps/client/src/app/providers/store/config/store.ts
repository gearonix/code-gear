import { makeAutoObservable } from 'mobx'

import { AuthStore } from '@/widgets/sign-in-modal'

import { EditorStore } from '$/editor'

class RootStore {
  editor: EditorStore
  auth: AuthStore

  constructor() {
    makeAutoObservable(this)
    this.editor = new EditorStore()
    this.auth = new AuthStore()
  }
}

export default RootStore
