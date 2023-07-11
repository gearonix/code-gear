import { makeAutoObservable } from 'mobx'

import { EditorGetters } from '@/app'
import { TabsActions } from '@/components/Tabs'
import { TerminalActions } from '@/components/Terminal'
import { EditorContentActions } from '@/modules/EditorContent'
import { Themes } from '@/shared/consts'

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

  changeTheme(newTheme: Themes) {
    this.state.theme = newTheme
  }
}


export default EditorActions
