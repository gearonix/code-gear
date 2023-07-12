import { makeAutoObservable } from 'mobx'

import { EditorGetters } from '@/app'
import { TabsActions } from '@/components/Tabs'
import { TerminalActions } from '@/components/Terminal'
import { EditorContentActions } from '@/modules/EditorContent'
import { FontSizes, TabSizes, Themes } from '@/shared/consts';

import EditorStore from './editor.store'

import { LocalStorageClient } from '$/client-shared'


class EditorActions {
  private state: EditorStore
  private readonly getters: EditorGetters
  private readonly storage: LocalStorageClient
  readonly tabs: TabsActions
  readonly editor: EditorContentActions
  readonly terminal: TerminalActions

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
    this.tabs = new TabsActions(root)
    this.editor = new EditorContentActions(root)
    this.terminal = new TerminalActions(root)

    this.storage = new LocalStorageClient()
  }

  changeTheme(theme: Themes) {
    this.state.theme = theme
    this.storage.set('EDITOR_THEME', theme)
  }

  changeFontSize(fontSize: FontSizes) {
    this.state.fontSize = fontSize
    this.storage.set('EDITOR_FONT_SIZE', fontSize)
  }

  changeTabSize(tabSize: TabSizes) {
    this.state.tabSize = tabSize
    this.storage.set('EDITOR_TAB_SIZE', tabSize)
  }
}


export default EditorActions
