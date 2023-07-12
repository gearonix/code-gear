import { useContext } from 'react'

import { NotificationsContext } from '../providers'

export const useNotifications = () => {
  return useContext(NotificationsContext)
}
