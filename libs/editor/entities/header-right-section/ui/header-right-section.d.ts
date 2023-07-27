interface HeaderRightSectionProps {
    runCode: () => void;
    openSignIn: () => void;
    isDisabled: boolean;
}
declare const HeaderRightSection: (({ isDisabled, runCode, openSignIn }: HeaderRightSectionProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName: string;
};
export default HeaderRightSection;
