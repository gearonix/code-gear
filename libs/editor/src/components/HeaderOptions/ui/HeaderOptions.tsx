import { useFileService } from '@/modules/EditorContent/hooks'
import logo from '@/public/logo.svg'
import { useActions, useServices } from '@/shared/hooks'

import { HeaderOptionsStyles, Logo, Option } from './HeaderOptions.styles'

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
      <Logo src={logo}/>
    <Option onClick={openFile}>Open</Option>
    <Option onClick={saveFile}>Save</Option>
    <Option onClick={createTab}>New</Option>
    <Option onClick={runCode}>Run</Option>
  </HeaderOptionsStyles>
}


export default HeaderOptions
