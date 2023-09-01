import { observer } from 'mobx-react-lite'
import { useTheme } from 'styled-components'

import { RightSection } from './header-right-section.styles'

import { ColoredButton } from '$/ui'

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
        <ColoredButton
          type="primary"
          onClick={runCode}
          disabled={isDisabled}
          override="#38a886">
          Run Code
        </ColoredButton>
        <ColoredButton
          type="primary"
          override={theme.secondaryGrey}
          onClick={openSignIn}>
          Sign in
        </ColoredButton>
      </RightSection>
    )
  }
)

export default HeaderRightSection
