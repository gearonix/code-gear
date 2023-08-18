import { AnimationDecorator } from '$/client-shared'
import type { Meta } from '@storybook/react'
import { Modal, ModalProps } from './modal'

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: 'ui/modal',
  decorators: [AnimationDecorator]
}

const defaultArgs: ModalProps = {
  isOpen: true,
  onClose: () => {},
  width: 40,
  height: 40,
  children: <div>Hello world!</div>
}

export const Default = {
  args: {
    ...defaultArgs
  } satisfies ModalProps
}

export default Story
