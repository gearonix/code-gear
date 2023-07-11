import { makeAutoObservable } from 'mobx'

import { ExecutorRequest, ExecutorResponse } from '@/components/HeaderRightSection'

import EditorActions from './editor.actions'
import EditorGetters from './editor.getters'
import EditorStore from './editor.store'

import { httpService } from '$/client-shared'
import { EndPoints } from '$/config'


class EditorServices {
  private state: EditorStore
  private getters: EditorGetters
  private actions: EditorActions

  constructor(root: EditorStore) {
    makeAutoObservable(this)

    this.state = root
    this.getters = root.getters
    this.actions = root.actions
  }

  async requestCodeExecution() {
    if (!this.getters.isAllowedToExecute()) {
      return
    }
    const activeTab = this.getters.getActiveTab()

    const requestBody: ExecutorRequest = {
      code: activeTab.getContent(),
      language: activeTab.lang
    }

    const res = await httpService.post<ExecutorResponse>(
      EndPoints.CODE_EXECUTOR_API, requestBody)

    this.actions.terminal.addExecuteMessage(res.data)
  }
}


export default EditorServices
