import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useLocation, useNavigate } from 'react-router-dom'

import { useStore } from '@/shared/hooks'

import {
  PrivatePaths,
  RoutePaths,
  useAsyncEffect,
  useBooleanState,
  WithChildren
} from '@code-gear/web/shared'

const AuthGuard = observer(({ children }: WithChildren) => {
  const { isAuthorized, services } = useStore('auth')
  const location = useLocation()
  const navigate = useNavigate()
  const loader = useBooleanState()

  useAsyncEffect(async () => {
    await services.getProfile()
    loader.on()
  }, [])

  useEffect(() => {
    if (!loader.val) {
      return
    }

    const currentPath = location.pathname.split('/')[1]
    const isPrivatePath = PrivatePaths.includes(`/${currentPath}`)

    if (isPrivatePath && !isAuthorized) {
      navigate(RoutePaths.EDITOR)
    }
  }, [location, loader.val])

  return children
})

export default AuthGuard
