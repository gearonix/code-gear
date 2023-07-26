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

export const useServices = () => {
  return useContext(EditorStoreContext).services
}

export const useStorage = () => {
  return useContext(EditorStoreContext).storage
}
