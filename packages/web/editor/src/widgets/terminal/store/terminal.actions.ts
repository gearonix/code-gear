import { LocalStorageClient } from '@code-gear/web/shared'
import { makeAutoObservable } from 'mobx'
import moment                 from 'moment'

import { EditorGetters }      from '@/app'
import { EditorStore }        from '@/app'
import { ExecutorResponse }   from '@/widgets/header'

class TerminalActions {
  private state: EditorStore
  private readonly getters: EditorGetters
  private readonly storage: LocalStorageClient

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters

    this.storage = root.storage
  }

  addExecuteMessage(res: ExecutorResponse) {
    console.log(res)
    const activeTab = this.getters.getActiveTab()

    let message = res.output

    if (res.error) {
      message = res.error.split('^')[1].split('at')[0]
    }

    this.state.executeMessages.push({
      message,
      isError: Boolean(res.error),
      fileName: activeTab.label,
      date: moment().format('HH:mm')
    })

    this.storage.set('EDITOR_EXECUTE_MESSAGES', this.state.executeMessages)
  }

  clearExecuteMessages() {
    this.state.executeMessages = []
    this.storage.clear('EDITOR_EXECUTE_MESSAGES')
  }
}

export default TerminalActions
