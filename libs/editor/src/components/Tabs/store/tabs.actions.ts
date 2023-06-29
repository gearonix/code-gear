import { makeAutoObservable } from 'mobx'
import { v4 as generateId } from 'uuid'

import { EditorStore } from '@/app'
import { Tab } from '@/types'

class TabsActions {
  private state: EditorStore

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
  }

  createTab() {
    const lastNumber = this.state.tabs.at(-1)?.num ?? -1
    const newTab = this.generateNewTab(lastNumber)
    console.log('newTab')

    this.state.activeKey = newTab.key
    this.state.tabs.push(newTab)
  }

  removeTab(targetKey: string){
    const targetIdx = this.state.tabs.findIndex((i) => i.key === targetKey)
    const lastTab: Tab = this.state.tabs[targetIdx - 1]

    this.state.tabs.splice(targetIdx, 1)
    this.state.activeKey = lastTab.key
  }

  changeActiveTab(targetKey : string){
    this.state.activeKey = targetKey
  }

  private generateNewTab(lastNumber: number): Tab{
    return {
      label: 'Untitled',
      key: generateId(),
      num: lastNumber + 1,
      data: ''
    }
  }

}


export default TabsActions
