import { useState } from 'react'

export type TabsKeys = 'terminal' | 'test_cases'

interface TerminalTab {
  label: string
  key: TabsKeys
}

const terminalTabs: TerminalTab[] = [
  { label: 'Terminal', key: 'terminal' },
  { label: 'Test cases', key: 'test_cases' }
]

export const useTerminalTabs = () => {
  const [activeKey, setActiveKey] = useState<TabsKeys>(terminalTabs[0].key)

  return {
    key: activeKey,
    set: setActiveKey,
    val: terminalTabs
  }
}
