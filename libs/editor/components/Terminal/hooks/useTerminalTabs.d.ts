export type TerminalTabKeys = 'terminal' | 'test_cases';
interface TerminalTab {
    label: string;
    key: TerminalTabKeys;
}
export declare const useTerminalTabs: () => {
    key: TerminalTabKeys;
    set: (key: TerminalTabKeys) => void;
    val: TerminalTab[];
};
export {};
