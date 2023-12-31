import { WithPreactChildren } from '@code-gear/web/shared'
import { createContext }      from 'react'

import RootStore              from '../config/store'

export const StoreContext = createContext<RootStore>({} as RootStore)

export const StoreProvider = ({ children }: WithPreactChildren) => {
  const root = new RootStore()

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
}

export default StoreProvider
