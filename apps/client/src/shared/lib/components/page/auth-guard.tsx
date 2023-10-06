import { PrivatePaths }    from '@code-gear/web/shared'
import { RoutePaths }      from '@code-gear/web/shared'
import { useAsyncEffect }  from '@code-gear/web/shared'
import { useBooleanState } from '@code-gear/web/shared'
import { WithChildren }    from '@code-gear/web/shared'
import { observer }        from 'mobx-react-lite'
import { useEffect }       from 'react'
import { useLocation }     from 'react-router-dom'
import { useNavigate }     from 'react-router-dom'

import { useStore }        from '@/shared/hooks'

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
