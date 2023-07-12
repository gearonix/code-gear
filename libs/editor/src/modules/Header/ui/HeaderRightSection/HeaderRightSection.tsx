import { observer } from 'mobx-react-lite'

import { useGetters } from '@/shared/hooks'

import { useCodeRunner } from '../../hooks'

import { HeaderIcon, RightSection } from './HeaderRightSection.styles'

import { VscPlay } from '$/icons'

const HeaderRightSection = observer(() => {
  const getters = useGetters()
  const isDisabled = !getters.isAllowedToExecute()
  const runCode = useCodeRunner()

  return  <RightSection>
    <HeaderIcon onClick={runCode}  $disabled={isDisabled}>
      <VscPlay/>
    </HeaderIcon>
  </RightSection>
})


export default HeaderRightSection
