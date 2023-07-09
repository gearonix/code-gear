import { observer } from 'mobx-react-lite'

import { useActions, useGetters, useServices } from '@/shared/hooks'

import { HeaderIcon, RightSection } from './HeaderRightSection.styles'

import { VscPlay } from '$/icons'

const HeaderRightSection = observer(() => {
  const services = useServices()
  const getters = useGetters()
  const isDisabled = !getters.isAllowedToExecute()

  const runCode = async () => {
    await services.requestCodeExecution()
  }

  return  <RightSection>
    <HeaderIcon onClick={runCode}  $disabled={isDisabled}>
      <VscPlay/>
    </HeaderIcon>
  </RightSection>
})


export default HeaderRightSection
