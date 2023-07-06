import axios from 'axios'
import { makeAutoObservable } from 'mobx'

import EditorGetters from './editor.getters'
import EditorStore from './editor.store'

import { serverUrl } from '$/config'


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
    const code = activeTab.getContent()
    const language = activeTab.lang

    const response = await axios.post(`${serverUrl}/compile`, {
      code,
      language
    })

    console.log(response.data)
  }
}


export default EditorServices
