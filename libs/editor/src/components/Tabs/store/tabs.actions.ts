import { makeAutoObservable } from 'mobx'

import { EditorStore } from '@/app'
import { ContentTab, isMaxTabsLength } from '@/components/Tabs/lib'
import { FileHandlerData } from '@/modules/EditorContent/types'

class TabsActions {
  private state: EditorStore

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
  }

  createTab(fileData?: FileHandlerData): void {
    const content = this.state.content

    if (isMaxTabsLength(content)) {
      return
    }
    const lastNumber = content.at(-1)?.idx

    const newTab = new ContentTab({ fileData, lastNumber })

    this.state.activeKey = newTab.getKeyId()
    this.state.content.push(newTab)
  }

  removeTab(targetKey?: string): void {
    const targetIdx = this.state.getters.getTabIndex(targetKey)
    const lastTab: ContentTab = this.state.content[targetIdx - 1]

    this.state.content.splice(targetIdx, 1)

    if (targetKey === this.state.activeKey) {
      this.state.activeKey = lastTab.getKeyId()
    }
  }

  changeActiveTab(targetKey : string): void {
    this.state.activeKey = targetKey
  }

}


export default TabsActions
