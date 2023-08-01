import { Form } from 'antd'
import styled from 'styled-components'

import { wh } from '$/styles'

export const SignInModalStyles = styled(Form)`
  width: 84%;
  margin: 0 auto;
`

export const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fz7};
  margin: 0 auto;
  margin-top: 80px;
  display: block;
`

export const LogoWrapper = styled.img`
  ${wh('68px', '92px')}
  margin: 10px auto;
  display: block;
`
