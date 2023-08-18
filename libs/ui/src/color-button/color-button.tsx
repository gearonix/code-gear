import { Button, ConfigProvider } from 'antd'
import { ButtonProps } from 'antd/es/button'

import { WithChildren } from '$/client-shared'

export type ColorButtonProps = ButtonProps &
  WithChildren<{
    override: string
  }>

const ColorButton = ({ children, override, ...props }: ColorButtonProps) => {
  const modifiedTheme = {
    token: { colorPrimary: override }
  }

  return (
    <ConfigProvider theme={modifiedTheme}>
      <Button {...props} style={{ minWidth: '85px' }}>
        {children}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
