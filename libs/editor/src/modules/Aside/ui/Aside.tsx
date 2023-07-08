import { AsideStyles, Icon } from './Aside.styles'

import { useFullScreen } from '$/client-shared'
import { BsSearch, GoTerminal, LuTestTube2, SlSizeFullscreen,TfiSettings } from '$/icons'

const Aside = () => {
  const toggleFullscreen = useFullScreen()

  return <AsideStyles>
    <div>
      <Icon>
        <BsSearch/>
      </Icon>
      <Icon onClick={toggleFullscreen}>
        <SlSizeFullscreen/>
      </Icon>
      <Icon>
        <GoTerminal/>
      </Icon>
      <Icon>
        <LuTestTube2/>
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
