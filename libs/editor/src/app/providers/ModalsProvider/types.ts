import { TerminalTabKeys } from '@/components/Terminal'

import { ReducerPayload } from '$/client-shared'

export interface ModalsState {
  isTerminalOpened: boolean
  isSettingsOpened: boolean
  selectedTerminalTab: TerminalTabKeys
}

export interface ModalsPayload extends ReducerPayload<ModalsState> {
  toggle?: (prop: keyof ModalsState) => void
}