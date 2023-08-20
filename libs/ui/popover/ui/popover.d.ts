import { VoidFunction, WithChildren } from '$/client-shared';
export type PopoverProps = WithChildren<{
    onClose: VoidFunction;
    isOpen: boolean;
    height: number;
}>;
export declare const Popover: ({ children, onClose, isOpen, height }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: (props: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
