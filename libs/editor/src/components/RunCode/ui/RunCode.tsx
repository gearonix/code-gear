import { observer } from 'mobx-react-lite'

import { useGetters, useServices } from '@/shared/hooks'

import { Display } from '$/client-shared'

const RunCode = observer(() => {
  const services = useServices()
  const getters = useGetters()

  const runCode = () => {
    services.requestCodeExecution()
  }

  return <Display when={getters.isAllowedToExecute()}>
    <button onClick={runCode}>run code</button>
  </Display>
})


export default RunCode