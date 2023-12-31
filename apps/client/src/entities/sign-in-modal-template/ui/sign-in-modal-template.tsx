import { Assets }            from '@code-gear/web/shared'
import { ColoredButton }     from '@code-gear/web/ui'
import { ModalTitle }        from '@code-gear/web/ui'
import { Form }              from 'antd'
import { Input }             from 'antd'

import { getFormItemRules }  from '../lib/helpers'
import { LogoWrapper }       from './sign-in-modal-template.styles'
import { SignInModalStyles } from './sign-in-modal-template.styles'
import { SubmitButton }      from './sign-in-modal-template.styles'

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
      <LogoWrapper src={Assets.logo} />
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

      <SubmitButton
        override="#38a886"
        type="primary"
        htmlType="submit"
        as={ColoredButton}>
        Sign In
      </SubmitButton>
    </SignInModalStyles>
  )
}
