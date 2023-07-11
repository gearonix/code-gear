import { Link } from 'react-router-dom'

import { TerminalTabKeys } from '@/components/Terminal'
import { useModalsContext } from '@/shared/hooks'

import { useEditorActions } from '../hooks/useEditorActions'

import { AsideStyles, Icon } from './Aside.styles'

import { RoutePaths, useFullScreen } from '$/client-shared';
import { BsJournals, BsSearch, GoTerminal, LuTestTube2,
  SlInfo, SlSizeFullscreen, TfiSettings } from '$/icons'

const Aside = () => {
  const toggleFullscreen = useFullScreen()
  const modalsContext = useModalsContext()
  const editorActions = useEditorActions()
  const terminalTab = modalsContext.state.selectedTerminalTab

  const toggleTerminal = (key: TerminalTabKeys) => () => {
    if (terminalTab === key) {
      return modalsContext.toggle('isTerminalOpened')
    }
    modalsContext.update({
      selectedTerminalTab: key,
      isTerminalOpened: true
    })
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
      <Icon onClick={toggleTerminal('terminal')}>
        <GoTerminal/>
      </Icon>
      <Icon onClick={toggleTerminal('test_cases')}>
        <LuTestTube2/>
      </Icon>
    </div>
    <div>
      <Icon>
        <TfiSettings/>
      </Icon>
      <Icon>
        <Link to={RoutePaths.ABOUT}>
          <SlInfo/>
        </Link>
      </Icon>
    </div>
  </AsideStyles>
}


export default Aside
