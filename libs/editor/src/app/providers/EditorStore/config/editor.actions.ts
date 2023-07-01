import { makeAutoObservable } from 'mobx'

import { EditorGetters } from '@/app'
import { TabsActions } from '@/components/Tabs'
import { EditorContentActions } from '@/modules/EditorContent'
import { LanguagesValues, Themes } from '@/shared/consts'

import EditorStore from './editor.store'


class EditorActions {
  private state: EditorStore
  private readonly getters: EditorGetters
  readonly tabs: TabsActions
  readonly editor: EditorContentActions

  constructor(root: EditorStore) {
    makeAutoObservable(this)
    this.state = root
    this.getters = root.getters
    this.tabs = new TabsActions(root)
    this.editor = new EditorContentActions(root)
  }

  changeTheme(newTheme: Themes) {
    this.state.theme = newTheme
  }

  changeLanguage(newLanguage: LanguagesValues){
    const activeTab = this.getters.getActiveTab()
    activeTab.lang = newLanguage
  }

  changeFileHandle(fileHandle: FileSystemFileHandle){
    const activeTab = this.getters.getActiveTab()
    console.log('CHANGE_FILE_HANDLE')
    activeTab.setFileHandle(fileHandle)
  }
}


export default EditorActions
