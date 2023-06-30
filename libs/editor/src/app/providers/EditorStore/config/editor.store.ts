import { makeAutoObservable } from 'mobx'

import { ContentTab } from '@/components/Tabs'
import { LanguagesValues, Themes } from '@/shared/consts'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'

import { LocalStorageClient } from '$/shared'

const storage = new LocalStorageClient()

class EditorStore{
  activeKey = ''
  content: ContentTab[] = []
  theme: Themes = storage.get<Themes>('EDITOR_THEME', 'vs-dark')
  getters: EditorGetters
  actions: EditorActions


  constructor() {
    makeAutoObservable(this)
    this.getters = new EditorGetters(this)
    this.actions = new EditorActions(this)
  }
}


export default EditorStore
