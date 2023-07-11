import { useModalsContext } from '@/shared/hooks'

import { useEditorActions } from '../hooks/useEditorActions'

import { AsideStyles, Icon } from './Aside.styles'

import { useFullScreen } from '$/client-shared'
import { BsJournals, BsSearch, GoTerminal, LuTestTube2,
  SlInfo, SlSizeFullscreen, TfiSettings } from '$/icons'

const Aside = () => {
  const toggleFullscreen = useFullScreen()
  const modalsContext = useModalsContext()
  const editorActions = useEditorActions()

  const toggleTerminal = () => {
    modalsContext.toggle('isTerminalOpened')
  }


  return <AsideStyles>
    <div>
      <Icon onClick={editorActions.find}>
        <BsSearch/>
      </Icon>
      <Icon onClick={editorActions.replace}>
        <BsJournals/>
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
