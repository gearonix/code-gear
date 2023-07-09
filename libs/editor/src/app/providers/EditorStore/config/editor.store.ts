import { makeAutoObservable } from 'mobx'

import { ContentTab } from '@/components/Tabs'
import { ContentTabInstance } from '@/components/Tabs/types'
import { Themes } from '@/shared/consts'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'
import EditorServices from './editor.services'

import { LocalStorageClient } from '$/client-shared'


class EditorStore{
  activeKey = ''
  content: ContentTab[] = []
  theme: Themes = 'vs-dark'
  getters: EditorGetters
  actions: EditorActions
  services: EditorServices


  constructor() {
    makeAutoObservable(this)

    this.getters = new EditorGetters(this)
    this.actions = new EditorActions(this)
    this.services = new EditorServices(this)

    const storage = new LocalStorageClient()
    this.theme = storage.get<Themes>('EDITOR_THEME', 'vs-dark')

    const savedContent = storage.get<ContentTabInstance[]>('EDITOR_CONTENT_DATA', [])

    if (!savedContent.length) {
      this.actions.tabs.createTab()
    }

    for (const instance of savedContent) {
      this.content.push(new ContentTab({ instance }))
    }

    const firstTab = this.content[0]
    this.activeKey = firstTab.getKeyId()
  }
}


export default EditorStore
