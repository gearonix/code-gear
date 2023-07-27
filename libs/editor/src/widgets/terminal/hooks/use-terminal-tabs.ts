import { useCallback } from 'react'

import { useModalsContext } from '@/shared/hooks'

export type TerminalTabKeys = 'terminal' | 'test_cases'

interface TerminalTab {
  label: string
  key: TerminalTabKeys
}

const terminalTabs: TerminalTab[] = [
  { label: 'Terminal', key: 'terminal' },
  { label: 'Test cases', key: 'test_cases' }
]

export const useTerminalTabs = () => {
  const modalsContext = useModalsContext()
  const activeKey = modalsContext.state.selectedTerminalTab

  const setActiveKey = useCallback(
    (key: TerminalTabKeys) => {
      modalsContext.update({
        selectedTerminalTab: key
      })
    },
    [modalsContext]
  )

  return {
    key: activeKey,
    set: setActiveKey,
    val: terminalTabs
  }
}
