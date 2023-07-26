import { makeAutoObservable } from 'mobx'

import { ContentTab } from '@/components/tabs'
import { ContentTabInstance } from '@/components/tabs/types'
import { ExecuteMessage } from '@/components/terminal'
import { FontSizes, TabSizes, Themes } from '@/shared/consts'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'
import EditorServices from './editor.services'

import { Hex, LocalStorageClient } from '$/client-shared'

class EditorStore {
  activeKey = ''
  content: ContentTab[] = []
  theme: Themes = 'vs-dark'
  fontSize: FontSizes = 20
  tabSize: TabSizes = 4
  customBackground: Hex = '#3d3d3d'
  customColor: Hex = '#3d3d3d'
  isStorageDisabled = false
  executeMessages: ExecuteMessage[] = []
  readonly getters: EditorGetters
  readonly actions: EditorActions
  readonly services: EditorServices
  storage: LocalStorageClient

  constructor() {
    makeAutoObservable(this)
    const storage = new LocalStorageClient(this.isStorageDisabled)
    this.storage = storage

    this.getters = new EditorGetters(this)
    this.actions = new EditorActions(this)
    this.services = new EditorServices(this)

    this.theme = storage.get<Themes>('EDITOR_THEME', 'vs-dark')
    this.fontSize = Number(
      storage.get<FontSizes>('EDITOR_FONT_SIZE', 20)
    ) as FontSizes
    this.tabSize = Number(
      storage.get<TabSizes>('EDITOR_TAB_SIZE', 4)
    ) as TabSizes
    this.customBackground = storage.get<Hex>(
      'EDITOR_CUSTOM_BACKGROUND',
      '#3d3d3d'
    )
    this.customColor = storage.get<Hex>('EDITOR_CUSTOM_COLOR', '#3d3d3d')

    const savedContent = storage.get<ContentTabInstance[]>(
      'EDITOR_CONTENT_DATA',
      []
    )
    this.executeMessages = storage.get<ExecuteMessage[]>(
      'EDITOR_EXECUTE_MESSAGES',
      []
    )

    if (savedContent.length === 0) {
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
