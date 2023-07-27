import { WithChildren } from '@/types';
type ModalProps = WithChildren<{
    isOpen: boolean;
    onClose: () => void;
    width?: number;
    height?: number;
}>;
export declare const Modal: ({ onClose, isOpen, children, width, height }: ModalProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalWrapper: (props: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default ModalWrapper;
