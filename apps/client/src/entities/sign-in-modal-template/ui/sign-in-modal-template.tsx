import { Form, Input } from 'antd'

import { getFormItemRules } from '../lib/helpers'

import {
  LogoWrapper,
  SignInModalStyles,
  SubmitButton
} from './sign-in-modal-template.styles'

import { Logo } from '$/assets'
import { ModalTitle } from '$/client-shared'

interface SignInModalTemplateProps<T> {
  onSubmit: (data: T) => void
}

export const SignInModalTemplate = <T,>({
  onSubmit
}: SignInModalTemplateProps<T>) => {
  return (
    <SignInModalStyles
      name="sign-in-form"
      autoComplete="off"
      onFinish={onSubmit}>
      <LogoWrapper src={Logo} />
      <ModalTitle>CodeGear</ModalTitle>

      <Form.Item name="username" rules={getFormItemRules()}>
        <Input placeholder="Username" size="large" />
      </Form.Item>

      <Form.Item name="password" rules={getFormItemRules()}>
        <Input.Password
          placeholder="Password"
          size="large"
          style={{ marginTop: '10px' }}
        />
      </Form.Item>

      <SubmitButton override="#38a886" type="primary" htmlType="submit">
        Sign In
      </SubmitButton>
    </SignInModalStyles>
  )
}
