import { makeAutoObservable } from 'mobx'

import { ExecutorRequest, ExecutorResponse } from '@/components/HeaderRightSection'

import EditorGetters from './editor.getters'
import EditorStore from './editor.store'

import { httpService } from '$/client-shared'
import { EndPoints } from '$/config'


class EditorServices {
  private state: EditorStore
  private getters: EditorGetters

  constructor(root: EditorStore) {
    makeAutoObservable(this)

    this.state = root
    this.getters = root.getters
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

    const response = await httpService.post<ExecutorResponse>(
      EndPoints.CODE_EXECUTOR_API, requestBody)

    activeTab.updateExecuteMessage(response.data)
  }
}


export default EditorServices
