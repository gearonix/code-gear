import logo from '@/public/logo.svg'

import { HeaderOptionsStyles, Logo, Option } from './HeaderOptions.styles'

const HeaderOptions = () => {
  return <HeaderOptionsStyles>
    <Logo src={logo}/>
    <Option>Open</Option>
    <Option>Save</Option>
    <Option>New</Option>
    <Option>Run</Option>
  </HeaderOptionsStyles>
}


export default HeaderOptions
