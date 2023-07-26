import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import { ContentTab } from '@/components/Tabs'
import { executorAllowedLanguages, LanguagesValues } from '@/shared/consts'

class EditorGetters {
  private state: EditorStore

  constructor(editorState: EditorStore) {
    this.state = editorState
    makeAutoObservable(this)
  }

  getActiveTab(key = this.state.activeKey): ContentTab {
    return this.state.content.find((tab) => {
      return tab.getKeyId() === key
    }) as ContentTab
  }

  getActiveTabText(): string {
    const activeTab = this.getActiveTab()
    return activeTab?.getContent()
  }

  getTabIndex(key = this.state.activeKey): number {
    return this.state.content.findIndex((tab) => {
      return tab.getKeyId() === key
    })
  }

  getActiveLanguage(): LanguagesValues {
    return this.getActiveTab()?.lang
  }

  isAllowedToExecute() {
    const lang = this.getActiveLanguage()
    return executorAllowedLanguages.includes(lang)
  }
}

export default EditorGetters
