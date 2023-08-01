import { useContext } from 'react'

import { RootStore, StoreContext } from '@/app'

export const useStore = <T extends keyof RootStore>(name: T) => {
  return useContext(StoreContext)[name]
}
