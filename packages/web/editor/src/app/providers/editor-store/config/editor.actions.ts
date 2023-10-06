import { makeAutoObservable } from 'mobx'

import { EditorGetters } from '@/app'
import { FontSizes, TabSizes } from '@/shared/consts/font-sizes'
import { Themes } from '@/shared/consts/themes'
import { EditorContentActions } from '@/widgets/editor-content'
import { TabsActions } from '@/widgets/tabs'
import { TerminalActions } from '@/widgets/terminal'

import EditorStore from './editor.store'

import { Hex, LocalStorageClient } from '@code-gear/web/shared'

class EditorActions {
  private state: EditorStore
  private readonly getters: EditorGetters
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
  }

  changeTheme(theme: Themes) {
    this.state.theme = theme
    this.state.storage.set('EDITOR_THEME', theme)
  }

  changeFontSize(fontSize: FontSizes) {
    this.state.fontSize = fontSize
    this.state.storage.set('EDITOR_FONT_SIZE', fontSize)
  }

  changeTabSize(tabSize: TabSizes) {
    this.state.tabSize = tabSize
    this.state.storage.set('EDITOR_TAB_SIZE', tabSize)
  }

  changeCustomBackground(hex: Hex) {
    this.state.customBackground = hex
    this.state.storage.set('EDITOR_CUSTOM_BACKGROUND', hex)
  }

  changeCustomColor(hex: Hex) {
    this.state.customColor = hex
    this.state.storage.set('EDITOR_CUSTOM_COLOR', hex)
  }

  setIsLocalStorageDisabled(isDisabled: boolean) {
    this.state.storage = new LocalStorageClient(isDisabled)
  }
}

export default EditorActions
