import { createContext, ReactNode } from 'react'

import EditorStore from '../config/editor.store'

export const EditorStoreContext = createContext<EditorStore>({} as EditorStore)

export const EditorStoreProvider = ({ children }: { children: ReactNode }) => {
  const root = new EditorStore()

  return (
    <EditorStoreContext.Provider value={root}>
      {children}
    </EditorStoreContext.Provider>
  )
}

export default EditorStoreProvider
