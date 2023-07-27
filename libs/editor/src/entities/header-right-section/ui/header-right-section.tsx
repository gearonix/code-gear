import { observer } from 'mobx-react-lite'

import { useGetters } from '@/shared/hooks'

import { useCodeRunner } from '../../../widgets/header/hooks'

import { RightSection } from './header-right-section.styles'

import { ColorButton } from '$/client-shared'

interface HeaderRightSectionProps {
  runCode: () => void
  isDisabled: boolean
}

const HeaderRightSection = observer(
  ({ isDisabled, runCode }: HeaderRightSectionProps) => {
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
  }
)

export default HeaderRightSection
