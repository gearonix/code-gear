import { makeAutoObservable } from 'mobx'

import { EditorGetters,EditorStore } from '@/app'

class EditorContentActions {
  private state: EditorStore
  private getters: EditorGetters

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
  }

  saveContent(content: string) {
    const activeTab = this.getters.getActiveTab()
    activeTab.text = content
  }

}


export default EditorContentActions
