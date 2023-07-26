import { observer } from 'mobx-react-lite'

import { useHeaderAnimation } from '@/modules/Header/hooks'
import { useGetters } from '@/shared/hooks'

import HeaderOptions from '../HeaderOptions/HeaderOptions'
import HeaderRightSection from '../HeaderRightSection/HeaderRightSection'

import { FileName, HeaderStyles } from './Header.styles'

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
