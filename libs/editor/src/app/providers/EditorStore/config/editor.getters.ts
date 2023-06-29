import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import { ContentTab } from '@/components/Tabs'


class EditorGetters{
  state: EditorStore

  constructor(editorState: EditorStore) {
    this.state = editorState
    makeAutoObservable(this)
  }

  getActiveTab(key = this.state.activeKey): ContentTab {
    return this.state.content.find((tab) => {
      return tab.key === key
    }) as ContentTab
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
