import { BsArrowsFullscreen,BsSearch } from 'react-icons/bs'
import { GoTerminal } from 'react-icons/go'
import { SlSizeFullscreen } from 'react-icons/sl'
import { TfiSettings } from 'react-icons/tfi'

import { AsideStyles, Icon } from './Aside.styles'

const Aside = () => {
  return <AsideStyles>
    <div>
      <Icon>
        <BsSearch/>
      </Icon>
      <Icon>
        <SlSizeFullscreen/>
      </Icon>
      <Icon>
        <GoTerminal/>
      </Icon>
    </div>
    <div>
      <Icon>
        <TfiSettings/>
      </Icon>
    </div>
  </AsideStyles>
}


export default Aside
