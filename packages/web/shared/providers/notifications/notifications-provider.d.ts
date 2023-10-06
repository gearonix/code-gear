/// <reference types="react" />
interface UserMessage {
    type?: 'success' | 'info' | 'error';
    message: string;
}
export interface NotificationsPayload {
    open: (args: UserMessage) => void;
}
export declare const NotificationsContext: import("react").Context<NotificationsPayload>;
declare const NotificationsProvider: ({ children }: WithChildren) => import("react/jsx-runtime").JSX.Element;
export default NotificationsProvider;
