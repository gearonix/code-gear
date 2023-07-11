import { makeAutoObservable } from 'mobx'
import moment from 'moment'

import { EditorGetters } from '@/app'
import { ExecutorResponse } from '@/components/HeaderRightSection'
import { TabsActions } from '@/components/Tabs'
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

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
    this.tabs = new TabsActions(root)
    this.editor = new EditorContentActions(root)

    this.storage = new LocalStorageClient()
  }

  changeTheme(newTheme: Themes) {
    this.state.theme = newTheme
  }

  addExecuteMessage(res: ExecutorResponse) {
    const activeTab = this.getters.getActiveTab()

    let message = res.output

    if (res.error){
      message = res.error.split('^')[1].split('.')[0]
    }

    this.state.executeMessages.push({
      message,
      isError: Boolean(res.error),
      fileName: activeTab.getLabel(),
      date: moment().format('HH:mm')
    })

    this.storage.set('EDITOR_EXECUTE_MESSAGES', this.state.executeMessages)
  }

  clearExecuteMessages() {
    this.state.executeMessages = []
    this.storage.clear('EDITOR_EXECUTE_MESSAGES')
  }
}


export default EditorActions
