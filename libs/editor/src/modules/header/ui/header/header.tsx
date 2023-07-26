import { observer } from 'mobx-react-lite'

import { useHeaderAnimation } from '@/modules/header/hooks'
import { useGetters } from '@/shared/hooks'

import HeaderOptions from '../header-options/header-options'
import HeaderRightSection from '../header-right-section/header-right-section'

import { FileName, HeaderStyles } from './header.styles'

import { AnimationProvider } from '$/client-shared'

const Header = observer(() => {
  const getters = useGetters()
  const activeTab = getters.getActiveTab()
  const { spring, animatedDiv } = useHeaderAnimation()

  return (
    <HeaderStyles as={animatedDiv} style={spring}>
      <HeaderOptions />
      <FileName>{activeTab.getLabel()} - CodeGear</FileName>
      <HeaderRightSection />
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
