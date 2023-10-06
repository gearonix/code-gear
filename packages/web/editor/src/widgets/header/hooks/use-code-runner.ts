import { useModalsContext, useServices } from '@/shared/hooks'

import { useNotifications } from '@code-gear/web/shared'

export const useCodeRunner = () => {
  const { codeRunner } = useServices()
  const modalsContext = useModalsContext()
  const notify = useNotifications()

  const runCode = async () => {
    const { isError, message } = await codeRunner.requestCodeExecution()

    modalsContext.update({
      isTerminalOpened: true,
      selectedTerminalTab: 'terminal'
    })

    notify.open({
      message,
      type: isError ? 'error' : 'success'
    })
  }

  return runCode
}
