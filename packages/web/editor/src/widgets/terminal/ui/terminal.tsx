import { Display }              from '@code-gear/web/shared'
import { Icons }                from '@code-gear/web/shared'
import { Popover }              from '@code-gear/web/ui'
import { observer }             from 'mobx-react-lite'
import { useCallback }          from 'react'
import { useRef }               from 'react'

import { TerminalOutput }       from '@/entities/terminal-output'
import { TerminalOutputHandle } from '@/entities/terminal-output'
import { useActions }           from '@/shared/hooks'
import { useModalsContext }     from '@/shared/hooks'

import { useTerminalTabs }      from '../hooks'
import { TerminalTabKeys }      from '../index'
import { Navigation }           from './terminal.styles'
import { TerminalButtons }      from './terminal.styles'
import { TerminalTitle }        from './terminal.styles'

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
      <Display when={terminalTabs.key === 'test_cases'}>
        <TerminalTitle>Test cases are not supported yet.</TerminalTitle>
      </Display>

      <TerminalButtons>
        <Icons.GrClear onClick={clearTerminal} />
        <Icons.AiOutlineClose onClick={closeTerminal} />
      </TerminalButtons>
    </Popover>
  )
})

export default Terminal
