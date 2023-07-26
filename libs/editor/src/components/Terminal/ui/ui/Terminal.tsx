import { useCallback, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { TerminalTabKeys } from '@/components/Terminal'
import { useTerminalTabs } from '@/components/Terminal/hooks'
import {
  TerminalOutput,
  TerminalOutputHandle
} from '@/components/TerminalOutput'
import { useActions, useModalsContext } from '@/shared/hooks'

import { Navigation, TerminalButtons } from './Terminal.styles'

import { Display, Popover } from '$/client-shared'
import { AiOutlineClose, GrClear } from '$/icons'

const Terminal = observer(() => {
  const modalsContext = useModalsContext()
  const { isTerminalOpened } = modalsContext.state
  const terminalTabs = useTerminalTabs()
  const actions = useActions()
  const terminalOutputRef = useRef<TerminalOutputHandle>()

  const onTabChange = (newActiveKey: string) => {
    terminalTabs.set(newActiveKey as TerminalTabKeys)
  }

  const closeTerminal = useCallback(() => {
    modalsContext.update({ isTerminalOpened: false })
  }, [])

  const clearTerminal = async () => {
    await terminalOutputRef.current?.close()
    actions.terminal.clearExecuteMessages()
  }

  return (
    <Popover onClose={closeTerminal} isOpen={isTerminalOpened} height={300}>
      <Navigation
        items={terminalTabs.val}
        size="large"
        onChange={onTabChange}
        activeKey={terminalTabs.key}
      />

      <Display when={terminalTabs.key === 'terminal'}>
        <TerminalOutput ref={terminalOutputRef} />
      </Display>
      <Display when={terminalTabs.key === 'test_cases'}>test cases</Display>

      <TerminalButtons>
        <GrClear onClick={clearTerminal} />
        <AiOutlineClose onClick={closeTerminal} />
      </TerminalButtons>
    </Popover>
  )
})

export default Terminal
