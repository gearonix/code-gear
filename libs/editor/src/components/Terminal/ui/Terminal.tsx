import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { useTerminalAnimation } from '@/components/Terminal/hooks'
import { CloseButton, createTerminalStyles, Navigation, Output } from '@/components/Terminal/ui/Terminal.styles'
import { useGetters, useModalsContext } from '@/shared/hooks'

import { AnimationProvider } from '$/client-shared'
import { AiOutlineClose } from '$/icons'


const Terminal = observer(() => {
  const modalsContext = useModalsContext()
  const { isTerminalOpened } = modalsContext.state
  const getters = useGetters()
  const activeTab = getters.getActiveTab()

  const closeTerminal = () => {
    modalsContext.update({ isTerminalOpened: false })
  }


  const motion = useTerminalAnimation(closeTerminal)
  const TerminalStyles = createTerminalStyles(motion.div)

  useEffect(() => {
      motion.toggle(isTerminalOpened)
  }, [isTerminalOpened])

  return <TerminalStyles $bottom={motion.terminalHeight}
                {...motion.bind()} style={motion.springs}>
    <Navigation items={[{ label: 'Terminal', key: '1' },
      { label: 'Test cases', key: '2' }]} size={'large'}/>
    <Output>
      CodeGear output console.
      <span>[User] [16:05] &gt; <em>{activeTab.executeMessage}</em></span>
    </Output>
    <CloseButton onClick={closeTerminal}>
      <AiOutlineClose/>
    </CloseButton>
      </TerminalStyles>
})

const TerminalWrapper = () => {
  return <AnimationProvider>
    <Terminal/>
  </AnimationProvider>
}

export default TerminalWrapper
