import { SignInModalTemplate } from '@/entities/sign-in-modal-template'
import { SignInForm } from '@/widgets/sign-in-modal/types'

import { Modal, VoidFunction } from '$/client-shared'

interface SignInModalProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const onSubmit = (data: SignInForm) => {
    console.log(data)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={37}>
      <SignInModalTemplate<SignInForm> onSubmit={onSubmit} />
    </Modal>
  )
}
