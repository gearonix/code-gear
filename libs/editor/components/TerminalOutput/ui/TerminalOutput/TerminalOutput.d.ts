/// <reference types="react" />
export interface TerminalOutputHandle {
    close: () => Promise<void>;
}
declare const TerminalOutput: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<TerminalOutputHandle & import("react").RefAttributes<void>>>;
export default TerminalOutput;
