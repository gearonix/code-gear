import { VoidFunction } from '@/types';
export declare const usePopoverAnimation: (closeCallback: VoidFunction, height: number) => {
    toggle: (isOpened: boolean) => void;
    bind: (...args: any[]) => import("@use-gesture/react/dist/declarations/src/types").ReactDOMAttributes;
    div: import("@react-spring/web").AnimatedComponent<"div">;
    springs: {
        display: import("@react-spring/core").Interpolation<number, "none" | "block">;
        y: import("@react-spring/core").SpringValue<number>;
    };
};
