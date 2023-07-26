import { createContext } from 'react'
import { message } from 'antd'

import { WithChildren } from '../../../types'

interface UserMessage {
  type?: 'success' | 'info' | 'error'
  message: string
}

interface NotificationsPayload {
  open: (args: UserMessage) => void
}

export const NotificationsContext = createContext<NotificationsPayload>(
  {} as NotificationsPayload
)

const NotificationsProvider = ({ children }: WithChildren) => {
  const [messageApi, contextHolder] = message.useMessage()

  const open = ({ type, message }: UserMessage) => {
    messageApi.open({
      type: type ?? 'info',
      content: message,
      duration: 5
    })
  }

  return (
    <>
      {contextHolder}
      <NotificationsContext.Provider value={{ open }}>
        {children}
      </NotificationsContext.Provider>
    </>
  )
}

export default NotificationsProvider
