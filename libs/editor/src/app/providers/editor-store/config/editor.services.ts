import { makeAutoObservable } from 'mobx'

import { ExecuteServices } from '@/widgets/header'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'
import EditorStore from './editor.store'

class EditorServices {
  private state: EditorStore
  private readonly getters: EditorGetters
  private readonly actions: EditorActions
  readonly codeRunner: ExecuteServices

  constructor(root: EditorStore) {
    makeAutoObservable(this)

    this.state = root
    this.getters = root.getters
    this.actions = root.actions
    this.codeRunner = new ExecuteServices(root)
  }
}

export default EditorServices
