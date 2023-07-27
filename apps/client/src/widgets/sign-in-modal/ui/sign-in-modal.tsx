import { Modal, VoidFunction } from '$/client-shared'

interface SignInModalProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      test
    </Modal>
  )
}
