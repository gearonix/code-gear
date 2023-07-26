export declare const useModalTransitions: () => {
    opacity: {
        from: () => {
            opacity: number;
        };
        to: () => {
            opacity: number;
        };
    };
    transform: {
        from: () => {
            transform: string;
            x: number;
        };
        to: (isOpen: boolean) => {
            transform: string;
            x: number;
        };
    };
};
