import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import {
  executorAllowedLanguages,
  LanguagesValues
} from '@/shared/consts/languages'
import { ContentTab } from '@/widgets/tabs'

class EditorGetters {
  private state: EditorStore

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
    const activeTab = this.getActiveTab()
    return activeTab.content
  }

  getTabIndex(key = this.state.activeKey): number {
    return this.state.content.findIndex((tab) => {
      return tab.key === key
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
