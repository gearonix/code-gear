import { ModalsPayload, ModalsState } from '@/app';
import { TerminalTabKeys } from '@/components/terminal';
export declare const useModalsContext: () => Required<ModalsPayload>;
export declare const useModalContextState: () => ModalsState;
export declare const useModalToggle: (modalType: keyof ModalsState) => (key: TerminalTabKeys) => () => void;