import { useNotifications } from '@code-gear/web/shared'

import { useModalsContext } from '@/shared/hooks'
import { useServices }      from '@/shared/hooks'

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
