import { message } from 'antd'

import { useGetters, useModalsContext, useServices } from '@/shared/hooks'

import { useNotifications } from '$/client-shared'

export const useCodeRunner = () => {
  const services = useServices()
  const modalsContext = useModalsContext()
  const getters = useGetters()
  const isDisabled = !getters.isAllowedToExecute()
  const notify = useNotifications()

  const runCode = async () => {
    if (isDisabled) {
      return
    }

    await services.requestCodeExecution()

    modalsContext.update({
      isTerminalOpened: true,
      selectedTerminalTab: 'terminal'
    })

    notify.open({
      message: 'Code completed successfully!',
      type: 'success'
    })
  }

  return runCode
}
