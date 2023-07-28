import { observer } from 'mobx-react-lite'

import { SignInModalTemplate } from '@/entities/sign-in-modal-template'
import { useStore } from '@/shared/hooks'
import { SignInForm } from '@/widgets/sign-in-modal/types'

import { Modal, VoidFunction } from '$/client-shared'

interface SignInModalProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const SignInModal = observer(({ isOpen, onClose }: SignInModalProps) => {
  const auth = useStore('auth')

  const onSubmit = (data: SignInForm) => {
    auth.services.signIn(data)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={37} height={53}>
      <SignInModalTemplate<SignInForm> onSubmit={onSubmit} />
    </Modal>
  )
})
