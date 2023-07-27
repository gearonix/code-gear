import { observer } from 'mobx-react-lite'
import { useTheme } from 'styled-components'

import { RightSection } from './header-right-section.styles'

import { ColorButton } from '$/client-shared'

interface HeaderRightSectionProps {
  runCode: () => void
  openSignIn: () => void
  isDisabled: boolean
}

const HeaderRightSection = observer(
  ({ isDisabled, runCode, openSignIn }: HeaderRightSectionProps) => {
    const theme = useTheme()
    return (
      <RightSection>
        <ColorButton
          type="primary"
          onClick={runCode}
          disabled={isDisabled}
          override="#38a886">
          Run Code
        </ColorButton>
        <ColorButton
          type="primary"
          override={theme.secondaryGrey}
          onClick={openSignIn}>
          Sign in
        </ColorButton>
      </RightSection>
    )
  }
)

export default HeaderRightSection
