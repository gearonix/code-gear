import { observer } from 'mobx-react-lite'

import { HeaderOptions } from '@/entities/header-options'
import { HeaderRightSection } from '@/entities/header-right-section'
import { useActions, useGetters } from '@/shared/hooks'
import { useFileService } from '@/widgets/editor-content/hooks'

import { useCodeRunner, useHeaderAnimation } from '../hooks'

import { FileName, HeaderStyles } from './header.styles'

import { AnimationProvider } from '$/client-shared'

const Header = observer(() => {
  const getters = useGetters()
  const activeTab = getters.getActiveTab()
  const { spring, animatedDiv } = useHeaderAnimation()

  const actions = useActions()
  const { openFile, saveFile } = useFileService()
  const runCode = useCodeRunner()
  const isDisabled = !getters.isAllowedToExecute()

  const createTab = () => {
    actions.tabs.createTab()
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
      <HeaderRightSection isDisabled={isDisabled} runCode={runCode} />
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
