import { observer } from 'mobx-react-lite'

import { useGetters } from '@/shared/hooks'

import HeaderOptions from './../HeaderOptions/HeaderOptions'
import HeaderRightSection from './../HeaderRightSection/HeaderRightSection'
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
