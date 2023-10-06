import { WithChildren } from '@code-gear/web/shared';
export type ModalProps = WithChildren<{
    isOpen: boolean;
    onClose: () => void;
    width?: number;
    height?: number;
}>;
export declare const Modal: ({ onClose, isOpen, children, width, height }: WithChildren<{
    isOpen: boolean;
    onClose: () => void;
    width?: number | undefined;
    height?: number | undefined;
}>) => import("react/jsx-runtime").JSX.Element;
declare const ModalWrapper: (props: WithChildren<{
    isOpen: boolean;
    onClose: () => void;
    width?: number | undefined;
    height?: number | undefined;
}>) => import("react/jsx-runtime").JSX.Element;
export default ModalWrapper;
