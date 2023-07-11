import { observer } from 'mobx-react-lite'

import { useGetters, useModalsContext, useServices } from '@/shared/hooks'

import { HeaderIcon, RightSection } from './HeaderRightSection.styles'

import { VscPlay } from '$/icons'

const HeaderRightSection = observer(() => {
  const services = useServices()
  const getters = useGetters()
  const isDisabled = !getters.isAllowedToExecute()
  const modalsContext = useModalsContext()

  const runCode = async () => {
    if (isDisabled) {
      return
    }

    await services.requestCodeExecution()
    modalsContext.update({
      isTerminalOpened: true,
      selectedTerminalTab: 'terminal'
    })
  }

  return  <RightSection>
    <HeaderIcon onClick={runCode}  $disabled={isDisabled}>
      <VscPlay/>
    </HeaderIcon>
  </RightSection>
})


export default HeaderRightSection
