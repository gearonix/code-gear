import { Link } from 'react-router-dom'

import { useFileService } from '@/modules/EditorContent/hooks'
import logo from '@/public/logo.svg'
import { useActions, useServices } from '@/shared/hooks'

import { HeaderOptionsStyles, Option } from './HeaderOptions.styles'

import { RoutePaths } from '$/client-shared'

const HeaderOptions = () => {
  const services = useServices()
  const actions = useActions()
  const { openFile, saveFile } = useFileService()

  const runCode = async () => {
    await services.requestCodeExecution()
  }
  const createTab = () => {
    actions.tabs.createTab()
  }

  return <HeaderOptionsStyles>
    <Link to={RoutePaths.MAIN}>
      <img src={logo}/>
    </Link>
    <Option onClick={openFile}>Open</Option>
    <Option onClick={saveFile}>Save</Option>
    <Option onClick={createTab}>New</Option>
    <Option onClick={runCode}>Run</Option>
  </HeaderOptionsStyles>
}


export default HeaderOptions
