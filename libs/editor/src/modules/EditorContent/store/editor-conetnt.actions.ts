import { makeAutoObservable } from 'mobx'

import { EditorGetters,EditorStore } from '@/app'
import { Undefinable } from '$/shared';

class EditorContentActions {
  private state: EditorStore
  private getters: EditorGetters

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
  }

  saveContent(content: string, key?: string) {
    const activeTab = this.getters.getActiveTab(key)
    activeTab.text = content
  }

}


export default EditorContentActions
