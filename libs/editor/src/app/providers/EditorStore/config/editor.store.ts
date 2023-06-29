import { makeAutoObservable } from 'mobx'

import { ContentTab, TabsActions } from '@/components/Tabs'
import { EditorContentActions } from '@/modules/EditorContent';

import EditorGetters from './editor.getters'


class EditorStore{
  activeKey = ''
  content: ContentTab[] = []
  getters: EditorGetters
  actions

  constructor() {
    makeAutoObservable(this)
    this.getters = new EditorGetters(this)
    this.actions = {
      tabs: new TabsActions(this),
      editor: new EditorContentActions(this)
    }
  }
}


export default EditorStore
