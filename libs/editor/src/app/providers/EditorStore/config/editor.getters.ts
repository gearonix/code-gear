import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import { Tab } from '@/components/Tabs'


class EditorGetters{
  state: EditorStore

  constructor(editorState: EditorStore) {
    this.state = editorState
    makeAutoObservable(this)
  }

  getActiveTab(): Tab {
    return this.state.content.find((tab) => {
      return tab.key === this.state.activeKey
    }) as Tab
  }

  getActiveTabText(): string {
    return this.getActiveTab()?.text
  }

  getTabIndex(key = this.state.activeKey): number {
    return this.state.content.findIndex((tab) => {
      return tab.key === key
    })
  }
}


export default EditorGetters
