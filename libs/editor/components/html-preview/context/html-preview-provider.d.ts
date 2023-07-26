/// <reference types="react" />
import { PreviewState } from '../types';
import { WithChildren } from '$/client-shared';
export declare const PreviewContext: import("react").Context<Partial<{
    state: PreviewState;
    update: import("react").Dispatch<Partial<PreviewState>>;
}>>;
declare const HtmlPreviewProvider: ({ children }: WithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const usePreview: () => Required<Partial<{
    state: PreviewState;
    update: import("react").Dispatch<Partial<PreviewState>>;
}>>;
export default HtmlPreviewProvider;
