import { observer } from 'mobx-react-lite'

import { useGetters } from '@/shared/hooks'

import { useCodeRunner } from '../../hooks'

import { RightSection } from './header-right-section.styles'

import { ColorButton } from '$/client-shared'

const HeaderRightSection = observer(() => {
  const getters = useGetters()
  const isDisabled = !getters.isAllowedToExecute()
  const runCode = useCodeRunner()

  return (
    <RightSection>
      <ColorButton
        type="primary"
        onClick={runCode}
        disabled={isDisabled}
        override="#38a886">
        Run Code
      </ColorButton>
    </RightSection>
  )
})

export default HeaderRightSection
