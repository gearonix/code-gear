import { VoidFunction } from '@code-gear/web/shared';
import { WithChildren } from '@code-gear/web/shared';
export type PopoverProps = WithChildren<{
    onClose: VoidFunction;
    isOpen: boolean;
    height: number;
}>;
export declare const Popover: ({ children, onClose, isOpen, height }: WithChildren<{
    onClose: VoidFunction;
    isOpen: boolean;
    height: number;
}>) => import("react/jsx-runtime").JSX.Element;
declare const _default: (props: WithChildren<{
    onClose: VoidFunction;
    isOpen: boolean;
    height: number;
}>) => import("react/jsx-runtime").JSX.Element;
export default _default;
