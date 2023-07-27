import { VoidFunction, WithChildren } from '@/types';
type PopoverProps = WithChildren<{
    onClose: VoidFunction;
    isOpen: boolean;
    height: number;
}>;
declare const _default: (props: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
