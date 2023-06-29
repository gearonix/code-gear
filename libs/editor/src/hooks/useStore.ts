import { useContext } from 'react'

import { EditorStoreContext } from '@/app'

export const useActions = () => {
  const store = useContext(EditorStoreContext)

  return store.actions
}

export const useStore = () => {
  return useContext(EditorStoreContext)
}
