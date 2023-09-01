import { useContext } from 'react'

import { ModalsContext, ModalsPayload, ModalsState } from '@/app'
import { TerminalTabKeys } from '@/components/../../widgets/terminal'

export const useModalsContext = () => {
  return useContext(ModalsContext) as Required<ModalsPayload>
}

export const useModalContextState = () => {
  return useModalsContext().state
}

export const useModalToggle = (modalType: keyof ModalsState) => {
  const modalsContext = useModalsContext()
  const terminalTab = modalsContext.state.selectedTerminalTab

  return (key: TerminalTabKeys) => () => {
    if (terminalTab === key) {
      modalsContext.toggle(modalType)
      modalsContext.update({
        isHtmlPreviewOpened: false
      })
      return
    }
    modalsContext.update({
      selectedTerminalTab: key,
      isHtmlPreviewOpened: false,
      [modalType]: true
    })
  }
}
