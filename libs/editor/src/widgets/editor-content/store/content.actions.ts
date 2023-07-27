import { makeAutoObservable } from 'mobx'

import { EditorGetters, EditorStore } from '@/app'

class ContentActions {
  private state: EditorStore
  private getters: EditorGetters

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
  }

  saveContent(content: string, key?: string) {
    const activeTab = this.getters.getActiveTab(key)
    activeTab.content = content
  }
}

export default ContentActions
