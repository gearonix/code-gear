import { useContext } from 'react'

import { EditorStoreContext } from '@/app'

export const useActions = () => {
  return useContext(EditorStoreContext).actions
}

export const useStore = () => {
  return useContext(EditorStoreContext)
}

export const useGetters = () => {
  return useContext(EditorStoreContext).getters
}
