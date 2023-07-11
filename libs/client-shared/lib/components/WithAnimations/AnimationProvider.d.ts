import { GestureType, SpringType, WithChildren } from '../../../types';
declare const AnimationProvider: ({ children }: WithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useAnimations: () => Required<Partial<{
    Gesture: GestureType;
    Spring: SpringType;
    isLoaded: boolean;
}>>;
export default AnimationProvider;
