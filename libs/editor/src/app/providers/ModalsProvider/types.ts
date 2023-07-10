import { ReducerPayload } from '$/client-shared'

export interface ModalsState {
  isTerminalOpened: boolean
  isSettingsOpened: boolean
}

export interface ModalsPayload extends ReducerPayload<ModalsState> {
  toggle?: (prop: keyof ModalsState) => void
}
