import { Link } from 'react-router-dom'

import { useModalsContext, useModalToggle } from '@/shared/hooks'

import { useAsideAnimation } from '../hooks/use-aside-animation'
import { useEditorActions } from '../hooks/use-editor-actions'

import { AsideStyles, Icon } from './aside.styles'

import { AnimationProvider, RoutePaths, useFullScreen } from '$/client-shared'
import {
  AiOutlineHtml5,
  BsJournals,
  BsSearch,
  GoTerminal,
  LuTestTube2,
  SlInfo,
  SlSizeFullscreen,
  TfiSettings
} from '$/icons'

const Aside = () => {
  const toggleFullscreen = useFullScreen()
  const modalsContext = useModalsContext()
  const editorActions = useEditorActions()
  const toggle = useModalToggle('isTerminalOpened')
  const { spring, animatedDiv } = useAsideAnimation()

  const toggleSettings = () => {
    modalsContext.toggle('isSettingsOpened')
  }

  const toggleHtmlPreview = () => {
    modalsContext.toggle('isHtmlPreviewOpened')
  }

  return (
    <AsideStyles as={animatedDiv} style={spring}>
      <div>
        <Icon onClick={editorActions.find}>
          <BsSearch />
        </Icon>
        <Icon onClick={editorActions.replace}>
          <BsJournals />
        </Icon>
        <Icon onClick={toggleFullscreen}>
          <SlSizeFullscreen />
        </Icon>
        <Icon onClick={toggle('terminal')}>
          <GoTerminal />
        </Icon>
        <Icon onClick={toggle('test_cases')}>
          <LuTestTube2 />
        </Icon>
        <Icon onClick={toggleHtmlPreview}>
          <AiOutlineHtml5 />
        </Icon>
      </div>
      <div>
        <Icon onClick={toggleSettings}>
          <TfiSettings />
        </Icon>
        <Icon>
          <Link to={RoutePaths.ABOUT}>
            <SlInfo />
          </Link>
        </Icon>
      </div>
    </AsideStyles>
  )
}

export default () => {
  return (
    <AnimationProvider>
      <Aside />
    </AnimationProvider>
  )
}
