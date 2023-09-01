import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import { FileHandlerData } from '@/widgets/editor-content/types'
import { ContentTab } from '@/widgets/tabs'
import { generateNewTab } from '@/widgets/tabs/lib/helpers/generate-new-tab'

import { isMaxTabsLength } from '../lib'

import { Nullable } from '@code-gear/web/shared'

class TabsActions {
  private state: EditorStore

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
  }

  createTab(fileData?: FileHandlerData): Nullable<ContentTab> {
    const content = this.state.content

    if (isMaxTabsLength(content)) {
      return null
    }
    const lastNumber = content.at(-1)?.idx

    const newTab = generateNewTab({ fileData, lastNumber })

    this.state.activeKey = newTab.key
    this.state.content.push(newTab)

    return newTab
  }

  removeTab(targetKey?: string): void {
    const targetIdx = this.state.getters.getTabIndex(targetKey)
    const lastTab: ContentTab = this.state.content[targetIdx - 1]

    this.state.content.splice(targetIdx, 1)

    if (targetKey === this.state.activeKey) {
      this.state.activeKey = lastTab.key
    }
  }

  changeActiveTab(targetKey: string): void {
    this.state.activeKey = targetKey
  }
}

export default TabsActions
