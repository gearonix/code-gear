import { makeAutoObservable } from 'mobx'

import { ContentTab } from '@/components/Tabs'
import { Themes } from '@/shared/consts'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'

import { LocalStorageClient } from '$/shared'


class EditorStore{
  activeKey = ''
  content: ContentTab[] = []
  theme: Themes = 'vs-dark'
  getters: EditorGetters
  actions: EditorActions


  constructor() {
    makeAutoObservable(this)

    this.getters = new EditorGetters(this)
    this.actions = new EditorActions(this)

    const storage = new LocalStorageClient()
    this.theme = storage.get<Themes>('EDITOR_THEME', 'vs-dark')

    this.actions.tabs.createTab()
  }
}


export default EditorStore
