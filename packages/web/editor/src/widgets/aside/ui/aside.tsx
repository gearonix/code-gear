import { AnimationProvider } from '@code-gear/web/shared'
import { RoutePaths }        from '@code-gear/web/shared'
import { useFullScreen }     from '@code-gear/web/shared'
import { Icons }             from '@code-gear/web/shared'
import { Link }              from 'react-router-dom'

import { useModalsContext }  from '@/shared/hooks'
import { useModalToggle }    from '@/shared/hooks'

import { useAsideAnimation } from '../hooks/use-aside-animation'
import { useEditorActions }  from '../hooks/use-editor-actions'
import { AsideStyles }       from './aside.styles'
import { Icon }              from './aside.styles'

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
          <Icons.BsSearch />
        </Icon>
        <Icon onClick={editorActions.replace}>
          <Icons.BsJournals />
        </Icon>
        <Icon onClick={toggleFullscreen}>
          <Icons.SlSizeFullscreen />
        </Icon>
        <Icon onClick={toggle('terminal')}>
          <Icons.GoTerminal />
        </Icon>
        <Icon onClick={toggle('test_cases')}>
          <Icons.LuTestTube2 />
        </Icon>
        <Icon onClick={toggleHtmlPreview}>
          <Icons.AiOutlineHtml5 />
        </Icon>
      </div>
      <div>
        <Icon onClick={toggleSettings}>
          <Icons.TfiSettings />
        </Icon>
        <Icon>
          <Link to={RoutePaths.ABOUT}>
            <Icons.SlInfo />
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
