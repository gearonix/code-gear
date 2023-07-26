import { createContext, useMemo, useReducer } from 'react'

import { ModalsPayload, ModalsState } from '../types'

import { WithChildren } from '$/client-shared'

export const ModalsContext = createContext<ModalsPayload>({})

const ModalsContextProvider = ({ children }: WithChildren) => {
  const initialState: ModalsState = useMemo<ModalsState>(
    () => ({
      isSettingsOpened: false,
      isHtmlPreviewOpened: true,
      isTerminalOpened: true,
      selectedTerminalTab: 'terminal'
    }),
    []
  )

  const modalsReducer = (prev: ModalsState, next: Partial<ModalsState>) => {
    return { ...prev, ...next }
  }

  const [state, update] = useReducer(modalsReducer, initialState)

  const toggle = (prop: keyof ModalsState) => {
    if (state[prop]) {
      update({ [prop]: false })
    } else {
      update({ [prop]: true })
    }
  }

  const payload: ModalsPayload = useMemo(
    () => ({
      state,
      update,
      toggle
    }),
    [state]
  )

  return (
    <ModalsContext.Provider value={payload}>{children}</ModalsContext.Provider>
  )
}

export default ModalsContextProvider
