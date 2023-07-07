import { HeaderOptions } from '@/components/HeaderOptions'

import { FileName, HeaderStyles } from './Header.styles'


const Header = () => {
  return <HeaderStyles>
    <HeaderOptions/>
    <FileName>README.md - API Docs - CodeGear</FileName>
    <div style={{ width: '240px', height:'100%' }}></div>
  </HeaderStyles>
}


export default Header
