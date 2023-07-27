import { WithChildren } from '@/types';
type ModalProps = WithChildren<{
    isOpen: boolean;
    onClose: () => void;
}>;
export declare const Modal: ({ onClose, isOpen, children }: ModalProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalWrapper: (props: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default ModalWrapper;
