import { makeAutoObservable } from 'mobx'

import { Tab, TabsActions } from '@/components/Tabs'


class EditorStore{
  activeKey = ''
  tabs: Tab[] = []
  actions

  constructor() {
    makeAutoObservable(this)
    this.actions = {
      tabs: new TabsActions(this)
    }
  }
}


export default EditorStore
