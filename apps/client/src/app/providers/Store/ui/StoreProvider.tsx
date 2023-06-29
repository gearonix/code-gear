import { createContext } from 'react'

import RootStore from '../config/store'

import { WithChildren } from '$/shared'

export const StoreContext = createContext<RootStore>({} as RootStore)

export const StoreProvider = ({ children }: WithChildren) => {
  const root = new RootStore()

  return <StoreContext.Provider value={root}>
    {children}
  </StoreContext.Provider>
}

export default StoreProvider
