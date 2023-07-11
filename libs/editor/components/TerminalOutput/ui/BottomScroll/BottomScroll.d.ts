/// <reference types="react" />
import { WithChildren } from '$/client-shared';
export interface BottomScrollHandle {
    scrollToBottom: VoidFunction;
}
export declare const BottomScroll: import("react").ForwardRefExoticComponent<Omit<WithChildren, "ref"> & import("react").RefAttributes<BottomScrollHandle>>;
