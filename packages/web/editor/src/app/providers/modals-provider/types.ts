import { AnyObject }       from '@code-gear/web/shared'
import { ReducerPayload }  from '@code-gear/web/shared'
import { ReactElement }    from 'react'

import { TerminalTabKeys } from '@/widgets/terminal'

export interface ModalsState {
  isTerminalOpened: boolean
  isSettingsOpened: boolean
  isHtmlPreviewOpened: boolean
  isSignInOpened: boolean
  selectedTerminalTab: TerminalTabKeys
  ModalComponents: {
    SignIn: (props: AnyObject) => ReactElement
  }
}

export interface ModalsPayload extends ReducerPayload<ModalsState> {
  toggle?: (prop: keyof ModalsState) => void
}
