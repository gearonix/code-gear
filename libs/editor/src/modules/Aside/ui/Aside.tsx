import { Link } from 'react-router-dom'

import { useModalsContext, useModalToggle } from '@/shared/hooks'

import { useEditorActions } from '../hooks/useEditorActions'

import { AsideStyles, Icon } from './Aside.styles'

import { AnimationProvider, RoutePaths, useAnimations, useFullScreen } from '$/client-shared'
import { BsJournals, BsSearch, GoTerminal, LuTestTube2, SlInfo, SlSizeFullscreen, TfiSettings } from '$/icons'
import { useAsideAnimation } from '@/modules/Aside/hooks/useAsideAnimation';

const Aside = () => {
  const toggleFullscreen = useFullScreen()
  const modalsContext = useModalsContext()
  const editorActions = useEditorActions()
  const toggle = useModalToggle('isTerminalOpened')
  const { spring, animatedDiv } = useAsideAnimation()

  const toggleSettings = () => {
    modalsContext.toggle('isSettingsOpened')
  }


  return <AsideStyles as={animatedDiv} style={spring}>
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
      <Icon onClick={toggle('terminal')}>
        <GoTerminal/>
      </Icon>
      <Icon onClick={toggle('test_cases')}>
        <LuTestTube2/>
      </Icon>
    </div>
    <div>
      <Icon onClick={toggleSettings}>
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


export default () => {
  return <AnimationProvider>
    <Aside/>
  </AnimationProvider>
}
