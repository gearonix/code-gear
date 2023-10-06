import { useContext }           from 'react'

import { NotificationsContext } from '@/providers'
import { NotificationsPayload } from '@/providers/notifications/notifications-provider'

export const useNotifications = () => {
  return useContext(NotificationsContext) as NotificationsPayload
}
