import { AnimationProvider }  from '@code-gear/web/shared'
import { observer }           from 'mobx-react-lite'

import { HeaderOptions }      from '@/entities/header-options'
import { HeaderRightSection } from '@/entities/header-right-section'
import { useActions }         from '@/shared/hooks'
import { useGetters }         from '@/shared/hooks'
import { useModalsContext }   from '@/shared/hooks'
import { useFileService }     from '@/widgets/editor-content/hooks'

import { useCodeRunner }      from '../hooks'
import { useHeaderAnimation } from '../hooks'
import { FileName }           from './header.styles'
import { HeaderStyles }       from './header.styles'

const Header = observer(() => {
  const getters = useGetters()
  const activeTab = getters.getActiveTab()
  const { spring, animatedDiv } = useHeaderAnimation()

  const actions = useActions()
  const { openFile, saveFile } = useFileService()
  const runCode = useCodeRunner()
  const isDisabled = !getters.isAllowedToExecute()
  const modalsContext = useModalsContext()
  const { isSignInOpened, ModalComponents } = modalsContext.state

  const createTab = () => {
    actions.tabs.createTab()
  }

  const toggleSignIn = (isOpen: boolean) => () => {
    modalsContext.update({
      isSignInOpened: isOpen
    })
  }

  return (
    <HeaderStyles as={animatedDiv} style={spring}>
      <HeaderOptions
        runCode={runCode}
        createTab={createTab}
        openFile={openFile}
        saveFile={saveFile}
      />
      <FileName>{activeTab.label} - CodeGear</FileName>
      <HeaderRightSection
        isDisabled={isDisabled}
        runCode={runCode}
        openSignIn={toggleSignIn(true)}
      />
      <ModalComponents.SignIn
        isOpen={isSignInOpened}
        onClose={toggleSignIn(false)}
      />
    </HeaderStyles>
  )
})

export default () => {
  return (
    <AnimationProvider>
      <Header />
    </AnimationProvider>
  )
}
