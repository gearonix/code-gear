/// <reference types="react" />
import { WithChildren } from '@/types';
interface UserMessage {
    type?: 'success' | 'info' | 'error';
    message: string;
}
interface NotificationsPayload {
    open: (args: UserMessage) => void;
}
export declare const NotificationsContext: import("react").Context<NotificationsPayload>;
declare const NotificationsProvider: ({ children }: WithChildren) => import("react/jsx-runtime").JSX.Element;
export default NotificationsProvider;
