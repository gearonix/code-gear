import { EndPoints }           from '@code-gear/config'
import { httpService }         from '@code-gear/web/shared'
import { makeAutoObservable }  from 'mobx'

import { EditorActions }       from '@/app'
import { EditorGetters }       from '@/app'
import { EditorStore }         from '@/app'

import { CodeExecutionErrors } from '../errors'
import { ExecutorRequest }     from '../index'
import { ExecutorResponse }    from '../index'
import { NotificationMessage } from '../types'

class ExecuteServices {
  private state: EditorStore
  private getters: EditorGetters
  private actions: EditorActions

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
    this.actions = root.actions
  }

  async requestCodeExecution(): Promise<NotificationMessage> {
    const { NOT_SUPPORTED, ERRORS_IN_CODE, SUCCESS, NETWORK_ERROR } =
      CodeExecutionErrors

    if (!this.getters.isAllowedToExecute()) {
      return NOT_SUPPORTED
    }

    const activeTab = this.getters.getActiveTab()

    const requestBody: ExecutorRequest = {
      code: activeTab.content,
      language: activeTab.lang
    }

    try {
      const res = await httpService.post<ExecutorResponse>(
        EndPoints.CODE_EXECUTOR_API,
        requestBody
      )

      this.actions.terminal.addExecuteMessage(res.data)

      const isError = res.data.error

      return isError ? ERRORS_IN_CODE : SUCCESS
    } catch (error) {
      return NETWORK_ERROR
    }
  }
}

export default ExecuteServices
