import { Assets }              from '@code-gear/web/shared'
import { RoutePaths }          from '@code-gear/web/shared'
import { Button }              from 'antd'
import { Link }                from 'react-router-dom'

import { HeaderOptionsStyles } from './header-options.styles'

interface HeaderOptionsProps {
  openFile: () => void
  saveFile: () => void
  createTab: () => void
  runCode: () => void
}

const HeaderOptions = ({
  openFile,
  saveFile,
  createTab,
  runCode
}: HeaderOptionsProps) => {
  return (
    <HeaderOptionsStyles>
      <Link to={RoutePaths.MAIN}>
        <img src={Assets.svgLogo} alt="" />
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
