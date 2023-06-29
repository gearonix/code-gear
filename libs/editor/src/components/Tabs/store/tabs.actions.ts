import { makeAutoObservable } from 'mobx'
import { v4 as generateId } from 'uuid'

import { EditorStore } from '@/app'

import { Tab } from '../types'

class TabsActions {
  private state: EditorStore

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
  }

  createTab() {
    const lastNumber = this.state.content.at(-1)?.num ?? -1
    const newTab = this.generateNewTab(lastNumber)

    this.state.activeKey = newTab.key
    this.state.content.push(newTab)
  }

  removeTab(targetKey: string){
    const targetIdx = this.state.getters.getTabIndex(targetKey)
    const lastTab: Tab = this.state.content[targetIdx - 1]

    this.state.content.splice(targetIdx, 1)
    this.state.activeKey = lastTab.key
  }

  changeActiveTab(targetKey : string){
    this.state.activeKey = targetKey
  }

  private generateNewTab(lastNumber: number): Tab {
    return {
      label: 'Untitled',
      key: generateId(),
      num: lastNumber + 1,
      text: ''
    }
  }

}


export default TabsActions
