import { AnyObject }     from '@code-gear/web/shared'
import { WithChildren }  from '@code-gear/web/shared'
import { createContext } from 'react'
import { ReactElement }  from 'react'
import { useMemo }       from 'react'
import { useReducer }    from 'react'

import { ModalsPayload } from '../types'
import { ModalsState }   from '../types'

export const ModalsContext = createContext<ModalsPayload>({})

type ModalsContextPayload = WithChildren<{
  SignIn: (props: AnyObject) => ReactElement
}>

const ModalsContextProvider = ({ children, SignIn }: ModalsContextPayload) => {
  const initialState: ModalsState = useMemo<ModalsState>(
    () => ({
      isSettingsOpened: false,
      isHtmlPreviewOpened: false,
      isTerminalOpened: true,
      isSignInOpened: false,
      selectedTerminalTab: 'terminal',
      ModalComponents: {
        SignIn
      }
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
