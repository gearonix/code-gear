import { WithChildren } from '@code-gear/web/shared';
import { ButtonProps } from 'antd/es/button';
export type ColorButtonProps = ButtonProps & WithChildren<{
    override: string;
}>;
declare const ColorButton: ({ children, override, ...props }: ColorButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ColorButton;
