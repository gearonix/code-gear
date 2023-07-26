import { Button, ConfigProvider } from 'antd'
import { ButtonProps } from 'antd/es/button'

import { WithChildren } from '../../types'

type ColorButtonProps = ButtonProps &
  WithChildren<{
    override: string
  }>

const ColorButton = ({ children, override, ...props }: ColorButtonProps) => {
  const modifiedTheme = {
    token: { colorPrimary: override }
  }

  return (
    <ConfigProvider theme={modifiedTheme}>
      <Button {...props}>{children}</Button>
    </ConfigProvider>
  )
}

export default ColorButton
