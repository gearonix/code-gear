import { ReactElement } from 'react';
import { ModalsPayload } from '../types';
import { AnyObject, WithChildren } from '$/client-shared';
export declare const ModalsContext: import("react").Context<ModalsPayload>;
type ModalsContextPayload = WithChildren<{
    SignIn: (props: AnyObject) => ReactElement;
}>;
declare const ModalsContextProvider: ({ children, SignIn }: ModalsContextPayload) => import("react/jsx-runtime").JSX.Element;
export default ModalsContextProvider;
