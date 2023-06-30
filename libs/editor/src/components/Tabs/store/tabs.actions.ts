import { makeAutoObservable } from 'mobx'
import { v4 as generateId } from 'uuid'

import { EditorStore } from '@/app'
import { FileData } from '@/modules/EditorContent/types'

import { ContentTab } from '../types'

class TabsActions {
  private state: EditorStore

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
  }

  createTab(fileHandle?: FileData): ContentTab {
    const lastNumber = this.state.content.at(-1)?.num ?? -1
    const newTab = this.generateNewTab(lastNumber, fileHandle)

    this.state.activeKey = newTab.key
    this.state.content.push(newTab)

    return newTab
  }

  removeTab(targetKey?: string): void {
    const targetIdx = this.state.getters.getTabIndex(targetKey)
    const lastTab: ContentTab = this.state.content[targetIdx - 1]

    this.state.content.splice(targetIdx, 1)
    this.state.activeKey = lastTab.key
  }

  changeActiveTab(targetKey : string): void {
    this.state.activeKey = targetKey
  }

  private generateNewTab(lastNumber: number,
     fileData?: FileData): ContentTab {
    return {
      label: fileData?.name ?? 'Untitled',
      key: generateId(),
      num: lastNumber + 1,
      text: fileData?.content ?? '',
      lang: fileData?.language ?? 'text',
      fileHandle: fileData?.fileHandle ?? null
    }
  }

}


export default TabsActions
