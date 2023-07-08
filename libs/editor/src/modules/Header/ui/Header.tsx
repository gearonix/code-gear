import { observer } from 'mobx-react-lite'

import { HeaderOptions } from '@/components/HeaderOptions'
import { HeaderRightSection } from '@/components/HeaderRightSection'
import { useGetters } from '@/shared/hooks'

import { FileName, HeaderStyles } from './Header.styles'


const Header = observer(() => {
  const getters = useGetters()
  const activeTab = getters.getActiveTab()

  return <HeaderStyles>
    <HeaderOptions/>
    <FileName>${activeTab.getLabel()} - CodeGear</FileName>
    <HeaderRightSection/>
  </HeaderStyles>
})


export default Header
