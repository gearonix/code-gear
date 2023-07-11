import { useCallback, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { useTerminalAnimation, useTerminalTabs } from '@/components/Terminal/hooks'
import { TerminalOutput, TerminalOutputHandle } from '@/components/TerminalOutput'
import { useActions, useModalsContext } from '@/shared/hooks'

import { TabsKeys } from '../hooks/useTerminalTabs'

import { Navigation, TerminalButtons, TerminalStyles } from './Terminal.styles'

import { AnimationProvider, Display } from '$/client-shared'
import { AiOutlineClose, GrClear } from '$/icons'

const Terminal = observer(() => {
  const modalsContext = useModalsContext()
  const { isTerminalOpened } = modalsContext.state
  const terminalTabs = useTerminalTabs()
  const actions = useActions()
  const terminalOutputRef = useRef<TerminalOutputHandle>()

  const onTabChange = (newActiveKey: string) => {
    terminalTabs.set(newActiveKey as TabsKeys)
  }

  const closeTerminal = useCallback(() => {
    modalsContext.update({ isTerminalOpened: false })
  }, [])

  const clearTerminal = async () => {
    await terminalOutputRef.current?.close()
    actions.clearExecuteMessages()
  }

  const motion = useTerminalAnimation(closeTerminal)

  useEffect(() => {
    motion.toggle(isTerminalOpened)
  }, [isTerminalOpened])

  return <TerminalStyles $bottom={motion.terminalHeight}
                {...motion.bind()} style={motion.springs}
                as={motion.div}>
    <Navigation items={terminalTabs.val}
      size={'large'} onChange={onTabChange} activeKey={terminalTabs.key}/>

    <Display when={terminalTabs.key === 'terminal'}>
      <TerminalOutput ref={terminalOutputRef}/>
    </Display>
    <Display when={terminalTabs.key === 'test_cases'}>
      test cases
    </Display>

    <TerminalButtons>
      <GrClear onClick={clearTerminal}/>
      <AiOutlineClose onClick={closeTerminal}/>
    </TerminalButtons>

      </TerminalStyles>
})

const TerminalWrapper = () => {
  return <AnimationProvider>
    <Terminal/>
  </AnimationProvider>
}

export default TerminalWrapper
