import { TerminalTabKeys } from '@/components/../../../widgets/terminal';
import { ReducerPayload } from '$/client-shared';
export interface ModalsState {
    isTerminalOpened: boolean;
    isSettingsOpened: boolean;
    isHtmlPreviewOpened: boolean;
    selectedTerminalTab: TerminalTabKeys;
}
export interface ModalsPayload extends ReducerPayload<ModalsState> {
    toggle?: (prop: keyof ModalsState) => void;
}
