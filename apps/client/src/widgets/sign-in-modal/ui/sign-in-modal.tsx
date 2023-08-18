import { SignInForm } from '$/common-types'
import { Modal } from '$/ui'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

import { SignInModalTemplate } from '@/entities/sign-in-modal-template'
import { useStore } from '@/shared/hooks'
import { WrongPassword } from '@/widgets/sign-in-modal/lib/exceptions'
import {
  NotificationsProvider,
  RoutePaths,
  useFilteredEffect,
  useNotifications,
  VoidFunction
} from '$/client-shared'

interface SignInModalProps {
  isOpen: boolean
  onClose: VoidFunction
}

const SignInModal = observer(({ isOpen, onClose }: SignInModalProps) => {
  const auth = useStore('auth')
  const notify = useNotifications()

  const navigate = useNavigate()

  const onSubmit = async (data: SignInForm) => {
    const { isError } = await auth.services.signIn(data)
    if (isError) {
      return notify.open({
        type: 'error',
        message: WrongPassword
      })
    }
  }

  useFilteredEffect(() => {
    navigate(`${RoutePaths.PROFILE}/${auth.username}`)
  }, [auth.username])

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={37} height={53}>
      <SignInModalTemplate<SignInForm> onSubmit={onSubmit} />
    </Modal>
  )
})

export default (props: SignInModalProps) => {
  return (
    <NotificationsProvider>
      <SignInModal {...props} />
    </NotificationsProvider>
  )
}
