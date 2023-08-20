import { ButtonProps } from 'antd/es/button';
import { WithChildren } from '$/client-shared';
export type ColorButtonProps = ButtonProps & WithChildren<{
    override: string;
}>;
declare const ColorButton: ({ children, override, ...props }: ColorButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ColorButton;
