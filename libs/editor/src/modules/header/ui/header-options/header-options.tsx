import { Button } from 'antd'
import { Link } from 'react-router-dom'

import { useFileService } from '@/modules/editor-content/hooks'
import { useCodeRunner } from '@/modules/header/hooks'
import logo from '@/public/logo.svg'
import { useActions } from '@/shared/hooks'

import { HeaderOptionsStyles } from './header-options.styles'

import { RoutePaths } from '$/client-shared'

const HeaderOptions = () => {
  const actions = useActions()
  const { openFile, saveFile } = useFileService()
  const runCode = useCodeRunner()

  const createTab = () => {
    actions.tabs.createTab()
  }

  return (
    <HeaderOptionsStyles>
      <Link to={RoutePaths.MAIN}>
        <img src={logo} alt="" />
      </Link>
      <Button type="dashed" size="small" onClick={openFile}>
        Open
      </Button>
      <Button type="dashed" size="small" onClick={saveFile}>
        Save
      </Button>
      <Button type="dashed" size="small" onClick={createTab}>
        New
      </Button>
      <Button type="dashed" size="small" onClick={runCode}>
        Run
      </Button>
    </HeaderOptionsStyles>
  )
}

export default HeaderOptions
