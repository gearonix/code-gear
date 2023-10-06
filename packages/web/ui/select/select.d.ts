export interface SelectProps<T> {
    onChange: (val: T) => void;
    value: T;
    options: {
        value: T;
        label: string | number;
    }[];
    defaultValue?: T;
}
export declare const Select: <T>({ onChange, value, options, defaultValue }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
