import { WithChildren }   from '@code-gear/web/shared'
import { Button }         from 'antd'
import { ConfigProvider } from 'antd'
import { ButtonProps }    from 'antd/es/button'

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
      <Button
        {...props}
        style={{ minWidth: '85px' }}
        data-testid="color-button">
        {children}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
