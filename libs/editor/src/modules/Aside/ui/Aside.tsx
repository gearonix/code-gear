import { useModalsContext } from '@/shared/hooks'

import { AsideStyles, Icon } from './Aside.styles'

import { useFullScreen } from '$/client-shared'
import { BsSearch, GoTerminal, LuTestTube2, SlInfo,SlSizeFullscreen,
  TfiSettings } from '$/icons'

const Aside = () => {
  const toggleFullscreen = useFullScreen()
  const modalsContext = useModalsContext()

  const toggleTerminal = () => {
    modalsContext.toggle('isTerminalOpened')
  }

  return <AsideStyles>
    <div>
      <Icon>
        <BsSearch/>
      </Icon>
      <Icon onClick={toggleFullscreen}>
        <SlSizeFullscreen/>
      </Icon>
      <Icon onClick={toggleTerminal}>
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
      <Icon>
        <SlInfo/>
      </Icon>
    </div>
  </AsideStyles>
}


export default Aside
